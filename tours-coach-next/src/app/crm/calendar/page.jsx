"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { LayoutDashboard, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

// Setup the localizer for the calendar grid
const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({
  format, parse, startOfWeek, getDay, locales,
});

export default function DispatchCalendar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Authenticate
  useEffect(() => {
    const session = localStorage.getItem('crm_auth');
    if (session === 'true') {
      setIsAuthenticated(true);
    } else {
      window.location.href = '/crm';
    }
  }, []);

  // Fetch only active/completed trips
  useEffect(() => {
    if (!isAuthenticated) return;
    
    const fetchDispatchLeads = async () => {
      try {
        const q = query(collection(db, 'leads'));
        const querySnapshot = await getDocs(q);
        const calendarEvents = [];
        
        querySnapshot.docs.forEach(doc => {
          const lead = doc.data();
          
          if (['Fully Paid', 'Dispatched', 'Completed'].includes(lead.status)) {
            // Safely parse the start time
            let startDate = new Date();
            try {
              const timeString = lead.pickupTime ? lead.pickupTime.padStart(5, '0') : '08:00';
              startDate = new Date(`${lead.departDate}T${timeString}:00`);
              if (isNaN(startDate)) startDate = new Date(lead.departDate);
            } catch (e) {
              startDate = new Date(lead.departDate);
            }

            // Safely parse the end time (or default to a 4-hour block for one-way trips)
            let endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);
            if (lead.tripType === 'return' && lead.returnDate) {
              try {
                const returnTimeString = lead.returnTime ? lead.returnTime.padStart(5, '0') : '20:00';
                endDate = new Date(`${lead.returnDate}T${returnTimeString}:00`);
                if (isNaN(endDate)) endDate = new Date(lead.returnDate);
              } catch (e) {
                // fallback
              }
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

    fetchDispatchLeads();
  }, [isAuthenticated]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('crm_auth');
    window.location.href = '/crm';
  };

  // Color code the events directly on the calendar
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
        padding: '2px 6px'
      }
    };
  };

  if (!isAuthenticated) return null;

  return (
    <div className="h-screen w-full bg-slate-50 flex pt-[72px] md:pt-[80px] box-border">
      
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
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}