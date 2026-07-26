"use client";
import React from 'react';
import { useQuote } from '../../context/QuoteContext';
import { ArrowRight, CheckCircle, Users } from 'lucide-react';

// Notice we added vehicleId as a prop here
export const SearchResultsClient = ({ pickup, destination, vehicle, vehicleId }) => {
  // Use the new helper function from context
  const { openQuoteWithData } = useQuote();

  const handleOpenQuote = () => {
    // Pass the search parameters directly into the context before opening the modal
    openQuoteWithData(pickup, destination, vehicleId);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col md:flex-row">
      
      {/* Vehicle Image */}
      <div className="md:w-2/5 relative h-64 md:h-auto bg-slate-200">
        <img src={vehicle.img} alt={vehicle.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white/90 backdrop-blur-md text-blue-900 px-3 py-1.5 rounded-full text-sm font-bold shadow-sm flex items-center gap-1.5">
            <Users size={16} className="text-red-600" /> {vehicle.pax}
          </span>
        </div>
      </div>

      {/* Details & Action */}
      <div className="md:w-3/5 p-8 flex flex-col">
        <div className="flex items-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
          <span>{pickup}</span>
          <ArrowRight size={16} className="mx-3 text-red-600" />
          <span>{destination}</span>
        </div>
        
        <h2 className="text-3xl font-black text-slate-900 mb-3">{vehicle.name}</h2>
        <p className="text-slate-600 mb-6 line-clamp-2">{vehicle.desc}</p>
        
        <div className="mb-8 grid grid-cols-2 gap-2">
          {vehicle.features.slice(0, 4).map((feat, i) => (
            <div key={i} className="flex items-center text-sm text-slate-700">
              <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
              {feat}
            </div>
          ))}
        </div>

        <button 
          onClick={handleOpenQuote} 
          className="mt-auto w-full bg-blue-800 text-white font-bold py-4 rounded-xl hover:bg-blue-900 transition-colors shadow-lg flex justify-center items-center gap-2"
        >
          Request Exact Quote <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};