"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { 
  LayoutDashboard, Users, Calendar, MapPin, 
  Phone, Mail, FileText, X, Bus, Clock, ChevronRight 
} from 'lucide-react';

export default function CRMDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);

  // Fetch leads from Firebase on component mount
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        // Query the 'leads' collection, ordered by newest first
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

    fetchLeads();
  }, []);

  // Helper to format Firebase timestamps securely
  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    // Handle both Firebase Timestamp objects and standard dates
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', day: 'numeric', year: 'numeric', 
      hour: 'numeric', minute: '2-digit' 
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-8 object-contain mb-4 bg-white p-1 rounded" />
          </Link>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Agent Portal</p>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium shadow-md">
                <LayoutDashboard size={20} />
                <span>Quote Requests</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
          Canada Tours Coach CRM v1.0
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-slate-200 p-6 flex justify-between items-center">
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
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 flex items-center justify-end w-full">
                          View <ChevronRight size={16} className="ml-1" />
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

      {/* Detail Slide-Over Modal */}
      {selectedLead && (
        <div className="fixed inset-0 overflow-hidden z-[100]">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedLead(null)}></div>
          <div className="fixed inset-y-0 right-0 max-w-md w-full flex">
            <div className="h-full w-full bg-white shadow-2xl flex flex-col animate-fade-in-up">
              
              <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
                <h2 className="text-lg font-bold">Quote Request Details</h2>
                <button onClick={() => setSelectedLead(null)} className="text-slate-300 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                
                {/* Customer Info */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center"><Users size={14} className="mr-2"/> Customer</h3>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-2">
                    <p className="text-sm"><strong>Name:</strong> {selectedLead.firstName} {selectedLead.lastName}</p>
                    <p className="text-sm"><strong>Email:</strong> <a href={`mailto:${selectedLead.email}`} className="text-blue-600 hover:underline">{selectedLead.email}</a></p>
                    <p className="text-sm"><strong>Phone:</strong> <a href={`tel:${selectedLead.phone}`} className="text-blue-600 hover:underline">{selectedLead.phone}</a></p>
                  </div>
                </div>

                {/* Trip Info */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center"><MapPin size={14} className="mr-2"/> Itinerary ({selectedLead.tripType === 'return' ? 'Round Trip' : 'One Way'})</h3>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Pickup Location</p>
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

                {/* Logistics */}
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center"><Bus size={14} className="mr-2"/> Logistics</h3>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 space-y-2">
                    <p className="text-sm"><strong>Passengers:</strong> {selectedLead.passengers}</p>
                    <p className="text-sm"><strong>Requested Vehicle:</strong> {selectedLead.vehicle === 'any' ? 'No Preference' : selectedLead.vehicle}</p>
                  </div>
                </div>

                {/* Additional Info */}
                {selectedLead.info && (
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center"><FileText size={14} className="mr-2"/> Additional Info</h3>
                    <div className="bg-amber-50 text-amber-900 p-4 rounded-lg border border-amber-100 text-sm italic">
                      "{selectedLead.info}"
                    </div>
                  </div>
                )}
              </div>

              {/* Action Footer (For Phase 3) */}
              <div className="p-6 border-t border-slate-200 bg-slate-50">
                <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow hover:bg-blue-700 transition">
                  Create Quote (Coming Soon)
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}