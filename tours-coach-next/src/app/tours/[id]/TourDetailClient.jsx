"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useQuote } from '../../../context/QuoteContext';
import { TourImage } from '../../../components/Shared';
import { 
  Clock, MapPin, CheckCircle, XCircle, ArrowRight, 
  ShieldCheck, Phone, Users, Star, BusFront, Luggage, 
  Wifi, HelpCircle, ChevronRight, AlertTriangle, Check, 
  Sparkles, Calendar, Share2
} from 'lucide-react';

export default function TourDetailClient({ tour, relatedTours = [] }) {
  const { setQuoteData, setIsQuoteModalOpen } = useQuote();
  const [selectedVehicle, setSelectedVehicle] = useState('56-coach');

  const isCustomQuote = tour.startingPrice?.toLowerCase().includes('quote');

  const handleRequestQuote = () => {
    setQuoteData((prev) => ({
      ...prev,
      destination: tour.title,
      tripType: tour.category ? 'multiDay' : 'return'
    }));
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO BANNER */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-slate-900 text-white overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <TourImage src={tour.image} alt={tour.title} isHero={true} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-950/90 z-10"></div>

        <div className="container mx-auto px-4 relative z-20 max-w-6xl">
          
          {/* Breadcrumb Trail */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-slate-500" />
            <Link 
              href={tour.category ? "/multi-day-tours" : "/tours"} 
              className="hover:text-white transition-colors"
            >
              {tour.category ? "Multi-Day Tours" : "Day Tours"}
            </Link>
            <ChevronRight size={12} className="text-slate-500" />
            <span className="text-red-400 truncate max-w-xs">{tour.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow">
              <span>🇨🇦</span> {tour.category || "Ontario Private Day Tour"}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-md">
              {tour.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold text-slate-200">
              <span className="flex items-center bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/20 backdrop-blur-md">
                <Clock size={15} className="mr-2 text-red-400" /> {tour.duration}
              </span>
              <span className="flex items-center bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/20 backdrop-blur-md">
                <MapPin size={15} className="mr-2 text-red-400" /> {tour.route}
              </span>
              <span className="flex items-center bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/20 backdrop-blur-md">
                <Star size={15} className="mr-1 text-yellow-400 fill-current" /> 4.9 Rating
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MAIN DETAIL CONTENT & STICKY BOOKING CARD */}
      <main className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Narrative, Highlights, Milestones, Vehicles, Inclusions */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Overview Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                Tour Overview & Experience
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-6">
                {tour.description}
              </p>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm text-blue-900 leading-relaxed">
                <Sparkles size={20} className="text-blue-700 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>100% Private Group Charter:</strong> Your group travels exclusively together in a dedicated vehicle with a professional driver. No sharing with strangers, and complete flexibility to adjust photo stops and meal breaks.
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            {tour.highlights && tour.highlights.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                  Itinerary Highlights & Key Stops
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {tour.highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-300 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm font-bold text-slate-800">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Milestones / How the Day Unfolds */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
                How Your Group's Journey Unfolds
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                
                <div className="relative flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center font-black text-xs z-10 flex-shrink-0 shadow">
                    1
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Convenient GTA Pickup</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Your driver arrives 15 minutes early at your designated pickup address in Toronto or the GTA.</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center font-black text-xs z-10 flex-shrink-0 shadow">
                    2
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Scenic Highway Transit</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Relax in plush reclining seats with climate control, Wi-Fi, and panoramic views while our CVOR driver manages traffic.</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center font-black text-xs z-10 flex-shrink-0 shadow">
                    3
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Landmarks & Sightseeing</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Enjoy seamless drop-off directly at attraction entrances. Your coach stages nearby for effortless re-boarding.</p>
                  </div>
                </div>

                <div className="relative flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-900 text-white flex items-center justify-center font-black text-xs z-10 flex-shrink-0 shadow">
                    4
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm">Comfortable Return Journey</h4>
                    <p className="text-xs text-slate-600 mt-0.5">After an unforgettable tour, your group relaxes aboard the coach for a safe, timely drop-off back home.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Vehicle Options for This Tour */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Choose the Vehicle for Your Group Size
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Every vehicle in our fleet is available for this tour package.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: '56-coach',
                    title: '56-Pax Luxury Coach',
                    seats: '35 - 56 Pax',
                    desc: 'Full-size coach with onboard restroom, Wi-Fi & underfloor luggage bays.'
                  },
                  {
                    id: '32-mini',
                    title: '24-36 Pax Mini Coach',
                    seats: '15 - 36 Pax',
                    desc: 'Agile executive coach with plush seats, overhead storage & PA audio.'
                  },
                  {
                    id: '14-van',
                    title: '14-Pax Sprinter Van',
                    seats: '1 - 14 Pax',
                    desc: 'High-roof executive van with stand-up clearance and rear luggage area.'
                  }
                ].map((veh) => (
                  <button
                    key={veh.id}
                    type="button"
                    onClick={() => setSelectedVehicle(veh.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${selectedVehicle === veh.id ? 'border-red-600 bg-red-50/40 shadow-sm' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
                  >
                    <div className="text-xs font-bold text-red-600 uppercase mb-0.5">{veh.seats}</div>
                    <div className="font-extrabold text-sm text-slate-900 mb-1">{veh.title}</div>
                    <div className="text-[11px] text-slate-500 leading-snug">{veh.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-3xl">
                <h4 className="font-extrabold text-emerald-900 mb-3 flex items-center gap-2 text-base">
                  <CheckCircle size={18} className="text-emerald-700" /> What's Included
                </h4>
                <ul className="space-y-2 text-xs text-emerald-800 leading-relaxed">
                  <li>• Private charter vehicle dedicated solely to your group</li>
                  <li>• Professional, CVOR-certified commercial driver</li>
                  <li>• Door-to-door GTA pickup and return service</li>
                  <li>• Vehicle waiting and staging during your stops</li>
                  <li>• Standard operating fuel and preparation</li>
                  <li>• $10,000,000 commercial liability coverage</li>
                </ul>
              </div>

              <div className="bg-rose-50 border border-rose-200 p-6 rounded-3xl">
                <h4 className="font-extrabold text-rose-900 mb-3 flex items-center gap-2 text-base">
                  <XCircle size={18} className="text-rose-700" /> Not Included
                </h4>
                <ul className="space-y-2 text-xs text-rose-800 leading-relaxed">
                  <li>• Admission tickets to paid attractions (unless requested)</li>
                  <li>• Meals, beverages, or personal shopping</li>
                  <li>• Highway 407 ETR toll charges (optional routing)</li>
                  <li>• Driver gratuity (customarily 10%–15%)</li>
                  <li>• Overtime hours beyond confirmed booking window</li>
                </ul>
              </div>

            </div>

          </div>

          {/* Right Column (5 cols): Sticky Booking & Pricing Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800">
              
              <div className="flex justify-between items-start pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Charter Price (CAD)
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white">
                    {tour.startingPrice} {!isCustomQuote && <span className="text-sm font-normal text-slate-400">+ HST</span>}
                  </div>
                </div>
                <span className="bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase">
                  Private Group
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                All quotes are tailored to your group's exact pickup address, date, and preferred vehicle size. Transparent all-inclusive pricing with zero hidden surcharges.
              </p>

              <div className="space-y-3 mb-6">
                <button
                  type="button"
                  onClick={handleRequestQuote}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  <span>Request Quote for This Tour</span>
                  <ArrowRight size={18} />
                </button>

                <a 
                  href="tel:(416) 269-9555"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Phone size={16} className="text-red-400" />
                  <span>Call Dispatch: (416) 269-9555</span>
                </a>
              </div>

              {/* Trust list */}
              <div className="pt-6 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-green-400" />
                  <span>Instant 15-minute written quote turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-green-400" />
                  <span>Ontario CVOR & MTO Safety Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-green-400" />
                  <span>$10M Commercial Passenger Liability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-green-400" />
                  <span>Rated 4.9/5 by 480+ Canadian organizers</span>
                </div>
              </div>

            </div>

            {/* Help Callout */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
              <h4 className="font-extrabold text-slate-900 text-sm mb-1">Have Custom Stops or Questions?</h4>
              <p className="text-xs text-slate-500 mb-4">Our tour logistics specialists can adjust itineraries, add multi-point pickups, or coordinate special accessibility requirements.</p>
              <a 
                href="mailto:info@tourscoachcharter.com"
                className="text-xs font-bold text-blue-900 hover:text-red-600 underline"
              >
                info@tourscoachcharter.com
              </a>
            </div>

          </div>

        </div>

        {/* 3. RELATED / RECOMMENDED TOURS SECTION */}
        {relatedTours && relatedTours.length > 0 && (
          <section className="mt-20 pt-16 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black tracking-widest text-red-600 uppercase bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                More Adventures
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-2">
                Explore Other Popular Group Charters
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Discover more scenic Ontario day trips and long-distance excursions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTours.map((rel) => (
                <div 
                  key={rel.id} 
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
                >
                  <Link href={`/tours/${rel.id}`} className="relative h-44 overflow-hidden block bg-slate-900">
                    <TourImage src={rel.image} alt={rel.title} className="group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                        {rel.duration}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5 flex-grow flex flex-col">
                    <Link href={`/tours/${rel.id}`}>
                      <h4 className="font-bold text-base text-slate-900 group-hover:text-red-600 transition-colors mb-2 line-clamp-1">
                        {rel.title}
                      </h4>
                    </Link>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                      {rel.description}
                    </p>
                    <div className="mt-auto pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                      <span className="font-black text-slate-900">{rel.startingPrice}</span>
                      <Link href={`/tours/${rel.id}`} className="text-red-600 font-extrabold hover:underline flex items-center gap-1">
                        View Tour →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

    </div>
  );
}
