"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, query, orderBy, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { 
  LayoutDashboard, Users, Calendar, MapPin, 
  Phone, Mail, FileText, X, Bus, Clock, ChevronRight, Lock, Unlock, DollarSign, Send, Settings, Download, Edit, Trash2
} from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function CRMDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modals state
  const [selectedLead, setSelectedLead] = useState(null);
  const [editingLead, setEditingLead] = useState(null);
  const [isSavingEdit, setIsSavingEdit] = useState(false);

  const [quotePrice, setQuotePrice] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [assignedVehicle, setAssignedVehicle] = useState('');
  const [isSendingQuote, setIsSendingQuote] = useState(false);
  
  const [updateStatus, setUpdateStatus] = useState('');
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  // --- GEOAPIFY STATES ---
  const [suggestedPrice, setSuggestedPrice] = useState(null);
  const [routeInfo, setRouteInfo] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('crm_auth');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const fetchLeads = async () => {
    try {
      const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const leadsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLeads(leadsData);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchLeads();
  }, [isAuthenticated]);

  // --- GEOAPIFY AUTOMATED QUOTING ENGINE ---
  const calculateRouteAndPrice = async (pickup, destination, tripType) => {
    const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
    
    if (!apiKey) {
      console.error("Geoapify Key Error: NEXT_PUBLIC_GEOAPIFY_KEY is missing from environment variables!");
      return;
    }
    
    setIsCalculating(true);
    try {
      const pickupRes = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(pickup)}&apiKey=${apiKey}`);
      const pickupData = await pickupRes.json();
      const pickupCoords = pickupData.features?.[0]?.geometry?.coordinates; 

      const destRes = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(destination)}&apiKey=${apiKey}`);
      const destData = await destRes.json();
      const destCoords = destData.features?.[0]?.geometry?.coordinates;

      if (!pickupCoords || !destCoords) {
        console.warn("Geoapify Geocoding Warning: Could not find lat/long coordinates for addresses.");
        return;
      }

      let routeRes = await fetch(`https://api.geoapify.com/v1/routing?waypoints=${pickupCoords[1]},${pickupCoords[0]}|${destCoords[1]},${destCoords[0]}&mode=bus&apiKey=${apiKey}`);
      let routeData = await routeRes.json();

      if (!routeData.features || routeData.features.length === 0) {
        console.warn("Geoapify 'bus' route failed. Falling back to standard 'drive' routing...");
        routeRes = await fetch(`https://api.geoapify.com/v1/routing?waypoints=${pickupCoords[1]},${pickupCoords[0]}|${destCoords[1]},${destCoords[0]}&mode=drive&apiKey=${apiKey}`);
        routeData = await routeRes.json();
      }

      if (routeData.features && routeData.features.length > 0) {
        const props = routeData.features[0].properties;
        const distKm = props.distance / 1000;
        const timeMins = props.time / 60;
        
        setRouteInfo({ distance: distKm.toFixed(1), time: timeMins.toFixed(0) });
        
        let price = 150 + (distKm * 2.50) + ((timeMins / 60) * 40);
        
        if (tripType === 'return') price *= 2;
        
        setSuggestedPrice(Math.ceil(price / 5) * 5);
      } else {
        console.warn("Geoapify Routing Warning: No route found between these points.");
      }
    } catch (error) {
      console.error("Geoapify API Request Error:", error);
    } finally {
      setIsCalculating(false);
    }
  };

  useEffect(() => {
    if (selectedLead) {
      setQuotePrice(selectedLead.quotedPrice || '');
      setDepositAmount(selectedLead.depositAmount || '');
      setAssignedVehicle(selectedLead.assignedVehicle || (selectedLead.vehicle !== 'any' ? selectedLead.vehicle : 'Luxury Coach (56 pax)'));
      setUpdateStatus(selectedLead.status);

      if (selectedLead.status === 'New') {
        setSuggestedPrice(null);
        setRouteInfo(null);
        calculateRouteAndPrice(selectedLead.pickup, selectedLead.destination, selectedLead.tripType);
      }
    }
  }, [selectedLead]);

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = process.env.NEXT_PUBLIC_CRM_PASSWORD || 'coachadmin123';
    
    if (passwordInput === correctPassword) {
      setIsAuthenticated(true);
      setLoginError(false);
      localStorage.setItem('crm_auth', 'true');
    } else {
      setLoginError(true);
      setPasswordInput('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('crm_auth');
  };

  // --- NEW EDIT & DELETE FUNCTIONS ---
  const handleDeleteLead = async (id, e) => {
    if (e) e.stopPropagation(); // Prevents bubbling if clicked from a table row
    if (window.confirm("Are you sure you want to permanently delete this quote request?")) {
      try {
        await deleteDoc(doc(db, 'leads', id));
        setLeads(leads.filter(lead => lead.id !== id));
        // Close modal if deleting from within the modal
        if (selectedLead && selectedLead.id === id) {
          setSelectedLead(null);
        }
      } catch (error) {
        console.error("Error deleting lead:", error);
        alert("Failed to delete the quote.");
      }
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingLead(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setIsSavingEdit(true);
    try {
      const leadRef = doc(db, 'leads', editingLead.id);
      await updateDoc(leadRef, {
        ...editingLead,
        updatedAt: new Date()
      });
      await fetchLeads(); // Refresh table to show updated data
      setEditingLead(null);
    } catch (error) {
      console.error("Error updating lead:", error);
      alert("Failed to update quote.");
    } finally {
      setIsSavingEdit(false);
    }
  };

  const handleSendQuote = async (e) => {
    e.preventDefault();
    setIsSendingQuote(true);

    try {
      const response = await fetch('/api/send-customer-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...selectedLead,
          quotePrice,
          depositAmount,
          assignedVehicle
        }),
      });

      if (!response.ok) throw new Error("Email sending failed");

      const leadRef = doc(db, 'leads', selectedLead.id);
      await updateDoc(leadRef, {
        status: "Quoted",
        quotedPrice: quotePrice,
        depositAmount: depositAmount,
        assignedVehicle: assignedVehicle,
        quotedAt: new Date(),
        updatedAt: new Date()
      });

      await fetchLeads();
      setSelectedLead(null);
      alert(`Quote of $${quotePrice} successfully sent to ${selectedLead.firstName}!`);

    } catch (error) {
      console.error(error);
      alert("Error sending quote. Please check your network and try again.");
    } finally {
      setIsSendingQuote(false);
    }
  };

  const handleStatusChange = async (e) => {
    e.preventDefault();
    setIsUpdatingStatus(true);
    try {
      const leadRef = doc(db, 'leads', selectedLead.id);
      await updateDoc(leadRef, {
        status: updateStatus,
        updatedAt: new Date()
      });
      await fetchLeads();
      setSelectedLead({ ...selectedLead, status: updateStatus });
    } catch (error) {
      console.error(error);
      alert("Failed to update status.");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', day: 'numeric', year: 'numeric', 
      hour: 'numeric', minute: '2-digit' 
    }).format(date);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Quoted': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Advance Paid': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Fully Paid': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Dispatched': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Completed': return 'bg-slate-200 text-slate-800 border-slate-300';
      case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const renderFinancials = (lead) => {
    if (lead.status === 'New') return <span className="text-xs text-slate-400 italic">Pending Quote</span>;
    
    const total = Number(lead.quotedPrice) || 0;
    const deposit = Number(lead.depositAmount) || 0;
    const balance = total - deposit;

    if (lead.status === 'Quoted') {
      return (
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-800">${total.toLocaleString()}</span>
          <span className="text-[11px] text-amber-600 font-bold uppercase tracking-wide">Req. Adv: ${deposit.toLocaleString()}</span>
        </div>
      );
    }
    if (lead.status === 'Advance Paid') {
      return (
        <div className="flex flex-col">
          <span className="text-sm font-bold text-blue-600">Paid: ${deposit.toLocaleString()}</span>
          <span className="text-[11px] text-red-500 font-bold uppercase tracking-wide">Pending: ${balance.toLocaleString()}</span>
        </div>
      );
    }
    if (['Fully Paid', 'Dispatched', 'Completed'].includes(lead.status)) {
      return (
        <div className="flex flex-col">
           <span className="text-sm font-bold text-emerald-600">Paid: ${total.toLocaleString()}</span>
        </div>
      );
    }
    return (
       <div className="flex flex-col">
          <span className="text-sm text-slate-400 line-through">${total.toLocaleString()}</span>
       </div>
    );
  };

  const generateInvoice = (e) => {
    e.preventDefault();
    if (!selectedLead) return;

    try {
      const doc = new jsPDF();
      
      doc.setFontSize(22);
      doc.setTextColor(30, 58, 138);
      doc.text("Tours Coach Charters", 14, 20);
      
      doc.setFontSize(10);
      doc.setTextColor(100, 116, 139);
      doc.text("Official Booking Invoice", 14, 28);
      doc.text(`Generated: ${new Date().toLocaleDateString()}`, 14, 34);

      doc.setFontSize(12);
      doc.setTextColor(15, 23, 42);
      doc.text("Billed To:", 14, 48);
      doc.setFontSize(10);
      doc.text(`${selectedLead.firstName} ${selectedLead.lastName}`, 14, 55);
      doc.text(selectedLead.email, 14, 61);
      doc.text(selectedLead.phone, 14, 67);

      const total = Number(selectedLead.quotedPrice) || 0;
      const deposit = Number(selectedLead.depositAmount) || 0;
      const balance = total - deposit;

      autoTable(doc, {
        startY: 75,
        headStyles: { fillColor: [30, 58, 138] },
        head: [['Trip Details', 'Information']],
        body: [
          ['Route', `${selectedLead.pickup} to ${selectedLead.destination}`],
          ['Trip Type', selectedLead.tripType === 'return' ? 'Round Trip' : 'One Way'],
          ['Departure', `${selectedLead.departDate} at ${selectedLead.pickupTime}`],
          ['Assigned Vehicle', selectedLead.assignedVehicle || 'TBD'],
          ['Passengers', selectedLead.passengers],
        ],
      });

      autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 10,
        headStyles: { fillColor: [4, 120, 87] },
        head: [['Financial Summary', 'Amount (CAD)']],
        body: [
          ['Total Trip Cost', `$${total.toLocaleString()}`],
          ['Advance Paid', `$${deposit.toLocaleString()}`],
          ['Pending Balance', `$${balance.toLocaleString()}`],
          ['Current Status', selectedLead.status],
        ],
      });

      doc.setFontSize(9);
      doc.setTextColor(148, 163, 184);
      doc.text("Thank you for traveling with Tours Coach Charters.", 14, doc.lastAutoTable.finalY + 20);
      doc.text("tourscoachcharter.com | (416) 269-9555", 14, doc.lastAutoTable.finalY + 26);

      doc.save(`Invoice_${selectedLead.firstName}_${selectedLead.lastName}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("There was an error generating the PDF. Please try again.");
    }
  };

  const stats = {
    new: leads.filter(l => l.status === 'New').length,
    quoted: leads.filter(l => l.status === 'Quoted').length,
    advancePaid: leads.filter(l => l.status === 'Advance Paid').length,
    fullyPaid: leads.filter(l => l.status === 'Fully Paid').length,
    dispatched: leads.filter(l => l.status === 'Dispatched').length,
    completed: leads.filter(l => l.status === 'Completed').length,
    cancelled: leads.filter(l => l.status === 'Cancelled').length,
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden pt-[72px] md:pt-[80px]">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative z-10 border-t-4 border-red-600 animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 shadow-inner">
              <Lock size={32} className="text-slate-700" />
            </div>
            <h1 className="text-2xl font-bold text-slate-800">Agent Portal</h1>
            <p className="text-slate-500 text-sm mt-2">Enter your secure password to view quote requests.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter Password..."
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all ${
                  loginError ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-blue-800'
                }`}
                autoFocus
              />
              {loginError && <p className="text-red-500 text-xs mt-2 font-medium">Incorrect password. Please try again.</p>}
            </div>
            <button type="submit" className="w-full bg-blue-800 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-900 transition flex items-center justify-center">
              Unlock Dashboard <Unlock size={18} className="ml-2" />
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
             <Link href="/" className="text-sm text-slate-400 hover:text-blue-600 transition">
               &larr; Return to Main Website
             </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-slate-50 flex pt-[72px] md:pt-[80px] box-border relative">
      <div className="w-64 bg-slate-900 text-white flex flex-col h-full shrink-0">
        <div className="p-6 border-b border-slate-800">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-8 object-contain mb-4 bg-white p-1 rounded" />
          </Link>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Agent Portal</p>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto custom-scrollbar">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium shadow-md">
                <LayoutDashboard size={20} />
                <span>Quote Requests</span>
              </a>
            </li>
            <li>
              <Link href="/crm/calendar" className="flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg font-medium transition">
                <Calendar size={20} />
                <span>Dispatch Calendar</span>
              </Link>
            </li>
          </ul>

          <div className="mt-8 pb-4">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Pipeline Summary</h3>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <span className="text-sm text-slate-300">New</span>
                <span className="bg-emerald-500/20 text-emerald-400 py-0.5 px-2 rounded text-xs font-bold">{stats.new}</span>
              </div>
              <div className="flex justify-between items-center px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <span className="text-sm text-slate-300">Quoted</span>
                <span className="bg-purple-500/20 text-purple-400 py-0.5 px-2 rounded text-xs font-bold">{stats.quoted}</span>
              </div>
              <div className="flex justify-between items-center px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <span className="text-sm text-slate-300">Advance Paid</span>
                <span className="bg-blue-500/20 text-blue-400 py-0.5 px-2 rounded text-xs font-bold">{stats.advancePaid}</span>
              </div>
              <div className="flex justify-between items-center px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <span className="text-sm text-slate-300">Fully Paid</span>
                <span className="bg-teal-500/20 text-teal-400 py-0.5 px-2 rounded text-xs font-bold">{stats.fullyPaid}</span>
              </div>
              <div className="flex justify-between items-center px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <span className="text-sm text-slate-300">Dispatched</span>
                <span className="bg-orange-500/20 text-orange-400 py-0.5 px-2 rounded text-xs font-bold">{stats.dispatched}</span>
              </div>
              <div className="flex justify-between items-center px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <span className="text-sm text-slate-300">Completed</span>
                <span className="bg-slate-500/20 text-slate-400 py-0.5 px-2 rounded text-xs font-bold">{stats.completed}</span>
              </div>
              <div className="flex justify-between items-center px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
                <span className="text-sm text-slate-300">Cancelled</span>
                <span className="bg-red-500/20 text-red-400 py-0.5 px-2 rounded text-xs font-bold">{stats.cancelled}</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between items-center shrink-0">
          <span>CTC CRM v1.2</span>
          <button onClick={handleLogout} className="text-red-400 hover:text-red-300 transition font-bold">
            Logout
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="bg-white shadow-sm border-b border-slate-200 p-6 flex justify-between items-center shrink-0">
          <h1 className="text-2xl font-bold text-slate-800">Active Leads</h1>
          <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-bold border border-blue-100">
            {leads.length} Total Requests
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {loading ? (
              <div className="p-12 text-center text-slate-500 animate-pulse flex flex-col items-center">
                <Clock size={40} className="mb-4 text-slate-300" />
                <p>Loading your leads securely from Firebase...</p>
              </div>
            ) : leads.length === 0 ? (
              <div className="p-12 text-center text-slate-500">
                <p>No quote requests yet. They will appear here automatically!</p>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Received</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Trip Route</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Financials</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => setSelectedLead(lead)}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                        <div>{formatDate(lead.createdAt)}</div>
                        {/* --- NEW LAST EDITED NOTE --- */}
                        {lead.updatedAt && (
                          <div className="text-[10px] text-slate-400 italic mt-1 font-medium">
                            Edited: {formatDate(lead.updatedAt)}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-bold text-slate-900">{lead.firstName} {lead.lastName}</div>
                        <div className="text-sm text-slate-500">{lead.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-900 max-w-xs truncate" title={lead.pickup}><strong>From:</strong> {lead.pickup}</div>
                        <div className="text-sm text-slate-500 max-w-xs truncate" title={lead.destination}><strong>To:</strong> {lead.destination}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {renderFinancials(lead)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </td>
                      {/* --- NEW ACTION MENU --- */}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-3">
                          <button 
                            onClick={(e) => { e.stopPropagation(); setEditingLead(lead); }} 
                            className="text-blue-500 hover:text-blue-700 transition" 
                            title="Edit Quote"
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={(e) => handleDeleteLead(lead.id, e)} 
                            className="text-red-400 hover:text-red-600 transition" 
                            title="Delete Quote"
                          >
                            <Trash2 size={18} />
                          </button>
                          <button className="text-blue-600 hover:text-blue-900 flex items-center ml-2 border-l border-slate-200 pl-3" onClick={(e) => { e.stopPropagation(); setSelectedLead(lead); }}>
                            {lead.status === 'New' ? 'Price Trip' : 'Manage'} <ChevronRight size={16} className="ml-1" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>

      {/* --- NEW EDIT MODAL OVERLAY --- */}
      {editingLead && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setEditingLead(null)}></div>
          <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 bg-blue-900 text-white flex justify-between items-center shrink-0 rounded-t-xl">
               <h2 className="text-lg font-bold">Edit Quote Request</h2>
               <button onClick={() => setEditingLead(null)} className="text-slate-300 hover:text-white"><X size={20}/></button>
            </div>
            
            <form onSubmit={handleEditSubmit} className="flex-1 overflow-y-auto p-6 space-y-4">
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-xs font-bold text-slate-600 mb-1">First Name</label>
                   <input type="text" name="firstName" value={editingLead.firstName || ''} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-600 mb-1">Last Name</label>
                   <input type="text" name="lastName" value={editingLead.lastName || ''} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-600 mb-1">Email</label>
                   <input type="email" name="email" value={editingLead.email || ''} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-600 mb-1">Phone</label>
                   <input type="text" name="phone" value={editingLead.phone || ''} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                 </div>
               </div>

               <div className="space-y-4 border-t pt-4">
                 <div>
                   <label className="block text-xs font-bold text-slate-600 mb-1">Pickup Location</label>
                   <input type="text" name="pickup" value={editingLead.pickup || ''} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-600 mb-1">Destination Location</label>
                   <input type="text" name="destination" value={editingLead.destination || ''} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-4 border-t pt-4">
                 <div>
                   <label className="block text-xs font-bold text-slate-600 mb-1">Depart Date</label>
                   <input type="date" name="departDate" value={editingLead.departDate || ''} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-600 mb-1">Pick Up Time</label>
                   <input type="time" name="pickupTime" value={editingLead.pickupTime || ''} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                 </div>
                 
                 {editingLead.tripType === 'return' && (
                   <>
                     <div>
                       <label className="block text-xs font-bold text-slate-600 mb-1">Return Date</label>
                       <input type="date" name="returnDate" value={editingLead.returnDate || ''} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold text-slate-600 mb-1">Return Time</label>
                       <input type="time" name="returnTime" value={editingLead.returnTime || ''} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                     </div>
                   </>
                 )}
               </div>

               <div className="grid grid-cols-2 gap-4 border-t pt-4 pb-4">
                 <div>
                   <label className="block text-xs font-bold text-slate-600 mb-1">Passengers</label>
                   <input type="number" name="passengers" value={editingLead.passengers || ''} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-600 mb-1">Trip Type</label>
                   <select name="tripType" value={editingLead.tripType || 'return'} onChange={handleEditChange} className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm bg-white">
                     <option value="return">Round Trip</option>
                     <option value="oneway">One Way</option>
                   </select>
                 </div>
               </div>
               
               <div className="flex justify-end space-x-3 pt-4 border-t">
                  <button type="button" onClick={() => setEditingLead(null)} className="px-5 py-2 rounded text-slate-600 font-bold hover:bg-slate-100">Cancel</button>
                  <button type="submit" disabled={isSavingEdit} className={`bg-blue-800 text-white px-6 py-2 rounded font-bold shadow hover:bg-blue-900 ${isSavingEdit ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    {isSavingEdit ? 'Saving...' : 'Save Changes'}
                  </button>
               </div>
            </form>
          </div>
        </div>
      )}

      {/* --- EXISTING MANAGE QUOTE MODAL --- */}
      {selectedLead && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedLead(null)}></div>
          <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl flex flex-col max-h-[95vh] animate-fade-in-up overflow-hidden">
            
            {/* --- UPDATED HEADER WITH EDIT & DELETE BUTTONS --- */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3">
                <h2 className="text-lg font-bold">Booking Details</h2>
                <span className={`px-2 py-0.5 text-xs font-bold rounded border ${getStatusColor(selectedLead.status)}`}>
                  {selectedLead.status}
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => { 
                    setEditingLead(selectedLead); 
                    setSelectedLead(null); 
                  }} 
                  className="text-blue-400 hover:text-blue-300 transition flex items-center text-sm font-bold" 
                  title="Edit Quote"
                >
                  <Edit size={16} className="mr-1" /> Edit
                </button>
                <button 
                  onClick={(e) => handleDeleteLead(selectedLead.id, e)} 
                  className="text-red-400 hover:text-red-300 transition flex items-center text-sm font-bold" 
                  title="Delete Quote"
                >
                  <Trash2 size={16} className="mr-1" /> Delete
                </button>
                
                <div className="w-px h-6 bg-slate-700 mx-1"></div>
                
                <button onClick={() => setSelectedLead(null)} className="text-slate-300 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center"><Users size={14} className="mr-2"/> Customer</h3>
                  <p className="text-sm font-bold text-slate-800">{selectedLead.firstName} {selectedLead.lastName}</p>
                  <p className="text-sm truncate"><a href={`mailto:${selectedLead.email}`} className="text-blue-600 hover:underline">{selectedLead.email}</a></p>
                  <p className="text-sm"><a href={`tel:${selectedLead.phone}`} className="text-blue-600 hover:underline">{selectedLead.phone}</a></p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                   <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center"><Bus size={14} className="mr-2"/> Logistics</h3>
                   <p className="text-sm"><strong>Pax:</strong> {selectedLead.passengers}</p>
                   <p className="text-sm"><strong>Pref:</strong> {selectedLead.vehicle === 'any' ? 'No Preference' : selectedLead.vehicle}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center"><MapPin size={14} className="mr-2"/> Itinerary ({selectedLead.tripType === 'return' ? 'Round Trip' : 'One Way'})</h3>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Pickup</p>
                    <p className="text-sm font-medium text-slate-800">{selectedLead.pickup}</p>
                    <p className="text-xs text-slate-600 mt-1"><Calendar size={12} className="inline mr-1"/> {selectedLead.departDate} at {selectedLead.pickupTime}</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-xs text-slate-500 mb-1">Destination</p>
                    <p className="text-sm font-medium text-slate-800">{selectedLead.destination}</p>
                    {selectedLead.tripType === 'return' && (
                      <p className="text-xs text-slate-600 mt-1"><Calendar size={12} className="inline mr-1"/> Return: {selectedLead.returnDate} at {selectedLead.returnTime}</p>
                    )}
                  </div>
                </div>
              </div>

              {selectedLead.info && (
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center"><FileText size={14} className="mr-2"/> Notes</h3>
                  <div className="bg-amber-50 text-amber-900 p-3 rounded-lg border border-amber-100 text-sm italic">
                    "{selectedLead.info}"
                  </div>
                </div>
              )}

              <div className="border-t border-slate-200 pt-6">
                {selectedLead.status === 'New' ? (
                  <>
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
                      <DollarSign size={16} className="mr-2 text-green-600"/> Price This Trip
                    </h3>
                    
                    {/* --- SMART GEOAPIFY QUOTE PANEL --- */}
                    {isCalculating ? (
                      <div className="bg-blue-50 text-blue-800 p-3 rounded-lg mb-6 text-sm flex items-center animate-pulse border border-blue-100">
                        <Clock size={16} className="mr-2" /> Geoapify is analyzing route & traffic...
                      </div>
                    ) : suggestedPrice && routeInfo ? (
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6 flex justify-between items-center shadow-sm">
                        <div>
                          <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1 flex items-center">
                            <MapPin size={12} className="mr-1"/> Smart Quote Estimate
                          </p>
                          <p className="text-sm font-medium text-slate-800">
                            {routeInfo.distance} km • {routeInfo.time} mins
                          </p>
                        </div>
                        <div className="text-right flex items-center space-x-3">
                          <span className="text-lg font-bold text-blue-900">${suggestedPrice}</span>
                          <button 
                            type="button"
                            onClick={() => {
                               setQuotePrice(suggestedPrice);
                               setDepositAmount(Math.round(suggestedPrice * 0.20)); 
                            }}
                            className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold hover:bg-blue-700 transition shadow-sm"
                          >
                            Apply Estimate
                          </button>
                        </div>
                      </div>
                    ) : null}

                    <form onSubmit={handleSendQuote} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">Total Price (CAD)</label>
                          <input 
                            type="number" required value={quotePrice} onChange={(e) => setQuotePrice(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm"
                            placeholder="e.g. 1500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">Required Deposit (CAD)</label>
                          <input 
                            type="number" required value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)}
                            className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm"
                            placeholder="e.g. 300"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">Assign Vehicle</label>
                        <input 
                          type="text" required value={assignedVehicle} onChange={(e) => setAssignedVehicle(e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm"
                        />
                      </div>
                      
                      <button disabled={isSendingQuote} type="submit" className={`w-full bg-green-600 text-white font-bold py-3 rounded-lg shadow hover:bg-green-700 transition flex items-center justify-center mt-2 ${isSendingQuote ? 'opacity-70 cursor-not-allowed' : ''}`}>
                        {isSendingQuote ? 'Sending Email...' : <>Email Official Quote <Send size={16} className="ml-2"/></>}
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
                      <Settings size={16} className="mr-2 text-blue-600"/> Booking Management
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Total Price Quoted</p>
                          <p className="text-sm font-bold text-slate-800">${selectedLead.quotedPrice} CAD</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-1">Deposit Requested</p>
                          <p className="text-sm font-bold text-slate-800">${selectedLead.depositAmount || 'N/A'} CAD</p>
                        </div>
                        <div className="col-span-2 border-t border-slate-200 pt-3 mt-1">
                          <p className="text-xs text-slate-500 mb-1">Assigned Vehicle</p>
                          <p className="text-sm font-bold text-slate-800">{selectedLead.assignedVehicle}</p>
                        </div>
                      </div>

                      <button 
                        type="button"
                        onClick={generateInvoice}
                        className="w-full bg-slate-100 border border-slate-300 text-slate-700 font-bold py-2.5 rounded-lg shadow-sm hover:bg-slate-200 transition flex items-center justify-center text-sm"
                      >
                        <Download size={16} className="mr-2 text-slate-500"/> Download PDF Invoice
                      </button>

                      <form onSubmit={handleStatusChange} className="pt-2">
                        <label className="block text-xs font-bold text-slate-600 mb-2">Update Trip Status</label>
                        <div className="flex space-x-2">
                          <select 
                            value={updateStatus}
                            onChange={(e) => setUpdateStatus(e.target.value)}
                            className="flex-1 px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-600 outline-none text-sm bg-white"
                          >
                            <option value="Quoted">Quoted (Awaiting Payment)</option>
                            <option value="Advance Paid">Advance Paid</option>
                            <option value="Fully Paid">Fully Paid</option>
                            <option value="Dispatched">Dispatched</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                          <button 
                            type="submit"
                            disabled={isUpdatingStatus}
                            className={`bg-slate-800 text-white px-5 py-2 rounded font-bold text-sm hover:bg-slate-900 transition ${isUpdatingStatus ? 'opacity-50 cursor-wait' : ''}`}
                          >
                            {isUpdatingStatus ? 'Saving...' : 'Update'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}