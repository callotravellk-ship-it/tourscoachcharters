"use client";
import React, { useState } from 'react';
import { Header, Footer } from '../../components/Shared';
import { AFFILIATE_TOURS, PROVINCES } from '../../lib/affiliateData';
import { MapPin, Clock, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AffiliateDirectory() {
  const [selectedProvince, setSelectedProvince] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTours = AFFILIATE_TOURS.filter(tour => {
    const matchesProvince = selectedProvince === "All" || tour.province === selectedProvince;
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tour.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesProvince && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      
      <section className="pt-32 pb-16 bg-blue-900 text-white border-b-4 border-red-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">National Tour Directory</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Explore over 150 partner-operated charter tours across Canada.
          </p>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by city or tour name..." 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-md outline-none focus:border-blue-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            className="md:w-64 px-4 py-3 bg-slate-50 border border-slate-200 rounded-md outline-none focus:border-blue-800 font-semibold text-slate-700"
            value={selectedProvince}
            onChange={(e) => setSelectedProvince(e.target.value)}
          >
            <option value="All">All Provinces</option>
            {PROVINCES.map(prov => (
              <option key={prov} value={prov}>{prov}</option>
            ))}
          </select>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.length > 0 ? (
            filteredTours.map(tour => (
              <div key={tour.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {tour.province}
                  </span>
                  <span className="flex items-center text-xs font-bold text-red-600 uppercase">
                    <MapPin size={14} className="mr-1"/> {tour.city}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{tour.title}</h3>
                <p className="text-sm text-slate-600 mb-4 flex-grow">{tour.description}</p>
                
                <div className="flex justify-between items-end pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="flex items-center text-xs text-slate-500 font-bold mb-1"><Clock size={12} className="mr-1"/> {tour.duration}</span>
                    <span className="font-black text-blue-800">{tour.startingPrice}</span>
                  </div>
                  <Link href="/request-a-quote" className="text-sm font-bold text-red-600 hover:text-red-800 flex items-center">
                    Request <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-slate-500">
              No tours found matching your current filters.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}