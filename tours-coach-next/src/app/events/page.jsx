"use client";
import React from 'react';
import { useQuote } from '../../context/QuoteContext';
import { UPCOMING_EVENTS, EVERGREEN_EVENTS } from '../../lib/data';
import { Calendar, MapPin, Bus, Users, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export default function EventsPage() {
  const { setIsQuoteModalOpen } = useQuote();

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-28 pb-20">
      
      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-16 px-4 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <span className="inline-block bg-red-600 text-white font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Group Transportation Specialists
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            Canadian Event & Festival Charter Services
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto mb-8">
            Hassle-free group bus hire, executive Sprinter vans, and venue shuttles for major festivals, sporting games, cultural events, and corporate outings across Canada.
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition duration-300 inline-flex items-center"
          >
            Request Event Bus Quote <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 space-y-16">

        {/* UPCOMING EVENTS TABLE / CARDS */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 flex items-center">
              <Calendar className="mr-3 text-red-600" size={28} /> Upcoming Canadian Events (2026–2027)
            </h2>
            <p className="text-slate-600 text-sm">
              Official event schedule and recommended group transportation services across major Canadian cities.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Event</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Location & Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Recommended Vehicles</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-700 uppercase tracking-wider">Target Groups</th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-slate-700 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {UPCOMING_EVENTS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">{item.event}</td>
                    <td className="px-6 py-4 text-slate-600">
                      <div className="font-medium text-slate-800 flex items-center">
                        <MapPin size={14} className="mr-1 text-red-600" /> {item.location}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.date}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-700 font-medium">
                      <span className="inline-flex items-center text-xs bg-blue-50 text-blue-800 px-2.5 py-1 rounded-md border border-blue-100">
                        <Bus size={12} className="mr-1" /> {item.services}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">{item.customers}</td>
<td className="px-6 py-4 text-right">
  <button
    onClick={() => handleBookEvent(item.event)}
    className="bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition whitespace-nowrap"
  >
    Get Quote
  </button>
</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {UPCOMING_EVENTS.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-base text-slate-900">{item.event}</h3>
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded"
                  >
                    Quote
                  </button>
                </div>
                <div className="text-xs text-slate-600 flex items-center">
                  <MapPin size={14} className="mr-1 text-red-600" /> {item.location}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  <Calendar size={14} className="inline mr-1 text-slate-400" /> {item.date}
                </div>
                <div className="pt-2 border-t border-slate-100 text-xs">
                  <p className="font-bold text-slate-700 mb-1">Recommended Vehicles:</p>
                  <p className="text-blue-800 font-medium">{item.services}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EVERGREEN RECURRING EVENTS */}
        <section className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
              Annual & Recurring Canadian Events
            </h2>
            <p className="text-slate-600 text-sm">
              We provide dedicated multi-day shuttle logistics, VIP transfers, and passenger group transport for Canada's largest iconic annual celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVERGREEN_EVENTS.map((name, idx) => (
              <div
                key={idx}
                className="flex items-center p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 font-semibold text-sm hover:border-blue-200 hover:bg-blue-50/50 transition cursor-pointer"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                <CheckCircle size={16} className="text-green-600 mr-2 shrink-0" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-blue-900 text-white p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl md:text-3xl font-black">Planning Group Travel for an Event?</h3>
            <p className="text-blue-100 text-sm">
              All charters include a professional, uniformed driver. We service sports teams, corporate delegations, schools, and private tour groups.
            </p>
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition"
            >
              Get Free Custom Event Quote
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}