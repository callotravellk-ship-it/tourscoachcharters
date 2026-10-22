"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useQuote } from '../../context/QuoteContext';
import { TourImage } from '../../components/Shared';
import { FEATURED_TOURS } from '../../lib/data';
import { 
  Clock, MapPin, CheckCircle, ArrowRight, Phone, 
  Star, Users, ShieldCheck, BusFront, Compass, Calendar
} from 'lucide-react';

export default function ToursDirectoryClient() {
  const { setQuoteData, setIsQuoteModalOpen } = useQuote();
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = [
    { id: 'all', label: 'All Day Tours', count: FEATURED_TOURS.length },
    { id: 'niagara', label: 'Niagara & Wine', filter: (t) => t.id.includes('niagara') || t.title.toLowerCase().includes('niagara') },
    { id: 'nature', label: 'Lakes & Nature', filter: (t) => ['muskoka-algonquin-escape', 'tobermory-bruce-peninsula', 'hamilton-waterfalls', 'wasaga-beach', 'peterborough-kawarthas'].includes(t.id) },
    { id: 'culture', label: 'City & Heritage', filter: (t) => ['toronto-highlights', 'ottawa-capital-tour', 'kingston-thousand-islands', 'elora-gorge-fergus', 'stratford-theatre', 'st-jacobs-market', 'prince-edward-county'].includes(t.id) },
    { id: 'attractions', label: 'Family & Attractions', filter: (t) => ['canadas-wonderland', 'african-lion-safari', 'blue-mountain-getaway'].includes(t.id) }
  ];

  const currentCat = categories.find(c => c.id === selectedTag);
  const filteredTours = selectedTag === 'all' 
    ? FEATURED_TOURS 
    : FEATURED_TOURS.filter(currentCat?.filter || (() => true));

  const handleBookTour = (tourTitle) => {
    setQuoteData((prev) => ({
      ...prev,
      destination: tourTitle,
      tripType: 'return'
    }));
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO BANNER */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-slate-900 bg-[url('/toronto-banner.jpg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 shadow">
            <span>🇨🇦</span> 17 Curated Ontario Destinations • Private Group Charters
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-md">
            Explore Ontario with Private Group Charters
          </h1>

          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Private day tours and excursion transportation from anywhere in the Greater Toronto Area. Travel comfortably with your group—not the crowd.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleBookTour("Custom Ontario Day Trip")}
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-lg text-sm sm:text-base cursor-pointer"
            >
              Request Custom Itinerary Quote
            </button>
            <Link
              href="/multi-day-tours"
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold py-3.5 px-6 rounded-xl transition-all text-sm sm:text-base"
            >
              View Multi-Day & Continental Tours →
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FILTER PILLS */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedTag(cat.id)}
                className={`py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${selectedTag === cat.id ? 'bg-red-600 text-white shadow' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOURS GRID */}
      <main className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div 
              key={tour.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col group"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <TourImage src={tour.image} alt={tour.title} className="group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock size={12} className="text-red-400" /> {tour.duration}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded-lg shadow">
                    From {tour.startingPrice} <span className="text-[10px] font-normal">+ HST</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                  <MapPin size={12} className="text-red-600" /> {tour.route}
                </div>

                <Link href={`/tours/${tour.id}`}>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-red-600 transition-colors mb-2.5 leading-tight">
                    {tour.title}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 mb-6 leading-relaxed line-clamp-3">
                  {tour.description}
                </p>

                {tour.highlights && (
                  <div className="space-y-1.5 mb-6 text-xs text-slate-700">
                    {tour.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={13} className="text-green-600 flex-shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <Link 
                    href={`/tours/${tour.id}`}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 rounded-xl text-center text-xs transition-colors"
                  >
                    View Details
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleBookTour(tour.title)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-center text-xs transition-colors shadow flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* 4. HOW BOOKING WORKS */}
        <div className="mt-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black mb-2">How Private Group Booking Works</h3>
            <p className="text-sm text-slate-300">Simple 3-step process to get your group on the road.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white font-black text-base flex items-center justify-center mx-auto mb-3">1</div>
              <h4 className="font-bold text-base mb-1">Pick Your Tour & Group Size</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Tell us your preferred date, pickup location anywhere in the GTA, and estimated passenger headcount.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white font-black text-base flex items-center justify-center mx-auto mb-3">2</div>
              <h4 className="font-bold text-base mb-1">Receive Instant Written Quote</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Our dispatch team verifies route feasibility and emails a transparent all-inclusive CAD quote in 15 minutes.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white font-black text-base flex items-center justify-center mx-auto mb-3">3</div>
              <h4 className="font-bold text-base mb-1">Enjoy a Flawless Day Trip</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Your professional driver arrives early. Sit back, relax, and make memories with your group.</p>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
