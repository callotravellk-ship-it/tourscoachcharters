"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, query, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { 
  LayoutDashboard, Calendar as CalendarIcon, Clock, 
  Users, MapPin, X, Bus, FileText, Settings 
} from 'lucide-react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({
  format, parse, startOfWeek, getDay, locales,
});

export default function DispatchCalendar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal states
  const [selectedLead, setSelectedLead] = useState(null);
  const [updateStatus, setUpdateStatus] = useState('');
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('crm_auth');
    if (session === 'true') {
      setIsAuthenticated(true);
    } else {
      window.location.href = '/crm';
    }
  }, []);

  const fetchDispatchLeads = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'leads'));
      const querySnapshot = await getDocs(q);
      const calendarEvents = [];
      
      querySnapshot.docs.forEach(doc => {
        const lead = { id: doc.id, ...doc.data() };
        
        if (['Fully Paid', 'Dispatched', 'Completed'].includes(lead.status)) {
          let startDate = new Date();
          try {
            const timeString = lead.pickupTime ? lead.pickupTime.padStart(5, '0') : '08:00';
            startDate = new Date(`${lead.departDate}T${timeString}:00`);
            if (isNaN(startDate)) startDate = new Date(lead.departDate);
          } catch (e) {
            startDate = new Date(lead.departDate);
          }

          let endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);
          if (lead.tripType === 'return' && lead.returnDate) {
            try {
              const returnTimeString = lead.returnTime ? lead.returnTime.padStart(5, '0') : '20:00';
              endDate = new Date(`${lead.returnDate}T${returnTimeString}:00`);
              if (isNaN(endDate)) endDate = new Date(lead.returnDate);
            } catch (e) {}
          }

          calendarEvents.push({
            id: doc.id,
            title: `${lead.firstName} ${lead.lastName} | ${lead.assignedVehicle}`,
            start: startDate,
            end: endDate,
            resource: lead
          });
        }
      });
      
      setEvents(calendarEvents);
    } catch (error) {
      console.error("Error fetching calendar events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchDispatchLeads();
  }, [isAuthenticated]);

  useEffect(() => {
    if (selectedLead) {
      setUpdateStatus(selectedLead.status);
    }
  }, [selectedLead]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('crm_auth');
    window.location.href = '/crm';
  };

  // Allow updating status from the calendar
  const handleStatusChange = async (e) => {
    e.preventDefault();
    setIsUpdatingStatus(true);
    try {
      const leadRef = doc(db, 'leads', selectedLead.id);
      await updateDoc(leadRef, {
        status: updateStatus,
        updatedAt: new Date()
      });
      await fetchDispatchLeads(); 
      setSelectedLead({ ...selectedLead, status: updateStatus });
    } catch (error) {
      console.error(error);
      alert("Failed to update status.");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Fully Paid': return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Dispatched': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Completed': return 'bg-slate-200 text-slate-800 border-slate-300';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const eventStyleGetter = (event) => {
    let backgroundColor = '#14b8a6'; // Teal for Fully Paid
    if (event.resource.status === 'Dispatched') backgroundColor = '#f97316'; // Orange
    if (event.resource.status === 'Completed') backgroundColor = '#64748b'; // Slate

    return {
      style: {
        backgroundColor,
        borderRadius: '6px',
        opacity: 0.9,
        color: 'white',
        border: 'none',
        display: 'block',
        fontSize: '12px',
        fontWeight: 'bold',
        padding: '2px 6px',
        cursor: 'pointer'
      }
    };
  };

  // Open modal when an event is clicked
  const handleSelectEvent = (event) => {
    setSelectedLead(event.resource);
  };

  if (!isAuthenticated) return null;

  return (
    <div className="h-screen w-full bg-slate-50 flex pt-[72px] md:pt-[80px] box-border relative">
      
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col h-full shrink-0">
        <div className="p-6 border-b border-slate-800">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-8 object-contain mb-4 bg-white p-1 rounded" />
          </Link>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Agent Portal</p>
        </div>
        
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <Link href="/crm" className="flex items-center space-x-3 text-slate-300 hover:text-white hover:bg-slate-800 px-4 py-3 rounded-lg font-medium transition">
                <LayoutDashboard size={20} />
                <span>Quote Requests</span>
              </Link>
            </li>
            <li>
              <Link href="/crm/calendar" className="flex items-center space-x-3 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium shadow-md">
                <CalendarIcon size={20} />
                <span>Dispatch Calendar</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between items-center">
          <span>CTC CRM v1.2</span>
          <button onClick={handleLogout} className="text-red-400 hover:text-red-300 transition font-bold">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="bg-white shadow-sm border-b border-slate-200 p-6 flex justify-between items-center shrink-0">
          <h1 className="text-2xl font-bold text-slate-800">Fleet Dispatch Calendar</h1>
          <div className="flex space-x-6 text-sm font-bold text-slate-600">
            <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-teal-500 mr-2 shadow-sm"></span> Fully Paid</span>
            <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-orange-500 mr-2 shadow-sm"></span> Dispatched</span>
            <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-slate-500 mr-2 shadow-sm"></span> Completed</span>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-[750px]">
            {loading ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-500 animate-pulse">
                <Clock size={40} className="mb-4 text-slate-300" />
                <p>Loading your dispatch schedule...</p>
              </div>
            ) : (
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%', fontFamily: 'inherit' }}
                eventPropGetter={eventStyleGetter}
                views={['month', 'week', 'day']}
                onSelectEvent={handleSelectEvent} // Trigger added here!
              />
            )}
          </div>
        </main>
      </div>

      {/* --- REUSED MODAL OVERLAY --- */}
      {selectedLead && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedLead(null)}></div>
          <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl flex flex-col max-h-[95vh] animate-fade-in-up overflow-hidden">
            
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
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
                    <p className="text-xs text-slate-600 mt-1"><CalendarIcon size={12} className="inline mr-1"/> {selectedLead.departDate} at {selectedLead.pickupTime}</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-xs text-slate-500 mb-1">Destination</p>
                    <p className="text-sm font-medium text-slate-800">{selectedLead.destination}</p>
                    {selectedLead.tripType === 'return' && (
                      <p className="text-xs text-slate-600 mt-1"><CalendarIcon size={12} className="inline mr-1"/> Return: {selectedLead.returnDate} at {selectedLead.returnTime}</p>
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

              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center">
                <Settings size={16} className="mr-2 text-blue-600"/> Booking Management
              </h3>
              
              <div className="space-y-6 border-t border-slate-200 pt-6">
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

            </div>
          </div>
        </div>
      )}

    </div>
  );
}