"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, query, orderBy, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { 
  LayoutDashboard, Users, Calendar, MapPin, 
  Phone, Mail, FileText, X, Bus, Clock, ChevronRight, Lock, Unlock, DollarSign, Send, Settings
} from 'lucide-react';

export default function CRMDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);

  const [quotePrice, setQuotePrice] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [assignedVehicle, setAssignedVehicle] = useState('');
  const [isSendingQuote, setIsSendingQuote] = useState(false);
  
  // New state for manual status updates
  const [updateStatus, setUpdateStatus] = useState('');
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

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

  // Pre-fill modal data when a lead is opened
  useEffect(() => {
    if (selectedLead) {
      setQuotePrice(selectedLead.quotedPrice || '');
      setDepositAmount(selectedLead.depositAmount || '');
      setAssignedVehicle(selectedLead.assignedVehicle || (selectedLead.vehicle !== 'any' ? selectedLead.vehicle : 'Luxury Coach (56 pax)'));
      setUpdateStatus(selectedLead.status);
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

  // Handles sending the initial quote
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

      // Save price and deposit info to Firebase, update status to Quoted
      const leadRef = doc(db, 'leads', selectedLead.id);
      await updateDoc(leadRef, {
        status: "Quoted",
        quotedPrice: quotePrice,
        depositAmount: depositAmount,
        assignedVehicle: assignedVehicle,
        quotedAt: new Date()
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

  // Handles manual status updates for payments and dispatch
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

  // Helper to color-code the statuses dynamically
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
    <div className="h-screen w-full bg-slate-50 flex pt-[72px] md:pt-[80px] box-border">
      <div className="w-64 bg-slate-900 text-white flex flex-col h-full">
        <div className="p-6 border-b border-slate-800">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-8 object-contain mb-4 bg-white p-1 rounded" />
          </Link>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Agent Portal</p>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium shadow-md">
                <LayoutDashboard size={20} />
                <span>Quote Requests</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between items-center">
          <span>CTC CRM v1.1</span>
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
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => setSelectedLead(lead)}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                        {formatDate(lead.createdAt)}
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
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 flex items-center justify-end w-full">
                          {lead.status === 'New' ? 'Price Trip' : 'Manage'} <ChevronRight size={16} className="ml-1" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>

      {selectedLead && (
        <div className="fixed inset-0 overflow-hidden z-[100]">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedLead(null)}></div>
          <div className="fixed inset-y-0 right-0 max-w-lg w-full flex">
            <div className="h-full w-full bg-white shadow-2xl flex flex-col animate-fade-in-up">
              
              <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h2 className="text-lg font-bold">Booking Details</h2>
                  <span className={`px-2 py-0.5 text-xs font-bold rounded border ${getStatusColor(selectedLead.status)}`}>
                    {selectedLead.status}
                  </span>
                </div>
                <button onClick={() => setSelectedLead(null)} className="text-slate-300 hover:text-white transition-colors">
                  <X size={24} />
                </button>
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

                {/* --- PRICING OR MANAGEMENT ENGINE --- */}
                <div className="border-t border-slate-200 pt-6">
                  {selectedLead.status === 'New' ? (
                    <>
                      <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
                        <DollarSign size={16} className="mr-2 text-green-600"/> Price This Trip
                      </h3>
                      
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
                      {/* --- ONCE QUOTED, SHOW MANAGEMENT VIEW --- */}
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

                        <form onSubmit={handleStatusChange}>
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
        </div>
      )}
    </div>
  );
}