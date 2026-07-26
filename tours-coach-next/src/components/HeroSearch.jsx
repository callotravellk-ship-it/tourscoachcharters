"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Navigation, Bus, Search } from 'lucide-react';

export const HeroSearch = () => {
  const router = useRouter();
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [vehicle, setVehicle] = useState('luxury-coach-bus-rental');

  const handleSearch = (e) => {
    e.preventDefault();
    if (!pickup || !destination) return;
    
    // Construct the dynamic URL with the search parameters
    const params = new URLSearchParams({
      pickup: pickup,
      destination: destination,
      vehicle: vehicle
    });
    
    // Send the user to the results page
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] max-w-5xl mx-auto -mt-16 relative z-30 border border-slate-100">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-end">
        
        {/* Pickup Field */}
        <div className="w-full md:w-1/3">
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Pickup Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3.5 text-red-600" size={20} />
            <input 
              type="text" 
              required
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="e.g. Toronto, ON" 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800 outline-none transition-all"
            />
          </div>
        </div>

        {/* Destination Field */}
        <div className="w-full md:w-1/3">
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Destination</label>
          <div className="relative">
            <Navigation className="absolute left-3 top-3.5 text-blue-800" size={20} />
            <input 
              type="text" 
              required
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="e.g. Niagara Falls" 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800 outline-none transition-all"
            />
          </div>
        </div>

        {/* Vehicle Selection */}
        <div className="w-full md:w-1/4">
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Vehicle Type</label>
          <div className="relative">
            <Bus className="absolute left-3 top-3.5 text-slate-500" size={20} />
            <select 
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800 outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="luxury-coach-bus-rental">Luxury Coach (56 Pax)</option>
              <option value="mini-coach-bus-rental">Mini Coach (24-36 Pax)</option>
              <option value="14-passenger-van-rental">Transit Van (14 Pax)</option>
              <option value="school-bus-rental">School Bus (48 Pax)</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full md:w-auto">
          <button type="submit" className="w-full md:w-auto bg-red-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] flex justify-center items-center gap-2 h-[50px]">
            <Search size={18} /> Search
          </button>
        </div>
      </form>
    </div>
  );
};