"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useQuote } from '../../context/QuoteContext';
import { TourImage } from '../../components/Shared';
import { MULTI_DAY_TOURS, FLORIDA_TOURS } from '../../lib/data';
import { 
  Clock, MapPin, ArrowRight, ShieldCheck, CheckCircle, 
  Phone, Users, Calendar, Compass, Star, ChevronDown, 
  Luggage, Wifi, BusFront, FileText, Check, Award
} from 'lucide-react';

export default function MultiDayClient() {
  const { setQuoteData, setIsQuoteModalOpen } = useQuote();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);

  const allMultiDayTours = [
    ...(MULTI_DAY_TOURS || []),
    ...(FLORIDA_TOURS || [])
  ];

  const filteredTours = selectedCategory === 'all' 
    ? allMultiDayTours 
    : allMultiDayTours.filter(t => t.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handleBookTour = (tourTitle) => {
    setQuoteData((prev) => ({
      ...prev,
      destination: tourTitle,
      tripType: 'multiDay'
    }));
    setIsQuoteModalOpen(true);
  };

  const multiDayFaqs = [
    {
      q: "How are driver hotel accommodations handled on multi-day tours?",
      a: "For multi-day charters outside the GTA, the chartering group is responsible for providing the driver with a private, standard hotel room (minimum 3-star rating) to ensure adequate mandatory rest. Alternatively, Tours Coach Charters can arrange driver lodging and add the cost to your itemized quote."
    },
    {
      q: "What is the difference between direct-relay and midpoint-hotel for Florida trips?",
      a: "Direct-relay operations utilize two relief drivers working in regulated shifts to drive straight through to Florida without stopping for an overnight hotel stay. Midpoint-hotel routing schedules an overnight hotel stop (typically in Virginia or North Carolina) so your group and driver can rest before completing the journey."
    },
    {
      q: "What are the luggage limits on multi-day coach charters?",
      a: "Our 56-passenger luxury motorcoaches feature massive undercarriage luggage bays that comfortably accommodate 1 large standard suitcase (up to 50 lbs) plus 1 personal overhead carry-on bag per passenger."
    },
    {
      q: "Are your buses certified for cross-border US and Quebec travel?",
      a: "Yes. Canada Tours Coach LTD holds active operating authorities with the Ontario Ministry of Transportation (CVOR), Quebec Commission des transports, and the US Department of Transportation / Federal Motor Carrier Safety Administration (FMCSA/DOT)."
    },
    {
      q: "Can our group customize the stops along the route?",
      a: "Absolutely! Unlike scheduled public bus tours, our multi-day charters are 100% private to your group. You decide the pickup points in the GTA, meal stops, scenic photo detours, and daily departure times."
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* 1. SCENIC HERO SECTION */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-slate-900 bg-[url('/home-hero.jpg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-950/90"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 shadow">
            <span>🇨🇦</span> Canadian & Continental Expeditions • 3 to 10 Day Charters
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-md">
            Multi-Day & Continental Coach Tours
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Private group motorcoach travel connecting Ontario with <strong>Québec, Eastern Canada, and Florida</strong>. Enjoy luxury 56-passenger coaches, customized itineraries, guaranteed luggage space, and full cross-border compliance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 mb-10">
            <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 backdrop-blur-md flex items-center gap-2">
              <ShieldCheck size={16} className="text-green-400" /> Ontario CVOR & US DOT Certified
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 backdrop-blur-md flex items-center gap-2">
              <BusFront size={16} className="text-blue-400" /> 56-Pax Luxury Coaches with Restrooms
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 backdrop-blur-md flex items-center gap-2">
              <Luggage size={16} className="text-yellow-400" /> Massive Undercarriage Storage
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => handleBookTour("Custom Multi-Day Tour")}
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-lg flex items-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <span>Request Custom Multi-Day Quote</span>
              <ArrowRight size={18} />
            </button>
            <a 
              href="tel:(416) 269-9555"
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold py-3.5 px-6 rounded-xl transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <Phone size={18} className="text-red-400" />
              <span>Call Dispatch: (416) 269-9555</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. CATEGORY SELECTOR TABS */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: 'all', label: 'All Multi-Day Tours', count: allMultiDayTours.length },
              { id: 'Eastern Canada', label: '🍁 Eastern Canada & Québec', count: MULTI_DAY_TOURS.length },
              { id: 'Florida', label: '☀️ Florida & Continental Tours', count: FLORIDA_TOURS.length }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`py-2.5 px-5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${selectedCategory === tab.id ? 'bg-red-600 text-white shadow-md' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'}`}
              >
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] ${selectedCategory === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MULTI-DAY TOURS GRID */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div 
                key={tour.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col group"
              >
                {/* Image Container with Badges */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <TourImage 
                    src={tour.image} 
                    alt={tour.title} 
                    className="group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                    <span className="bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow">
                      {tour.category}
                    </span>
                    <span className="bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                      <Clock size={13} className="text-red-400" /> {tour.duration}
                    </span>
                  </div>

                  {/* Bottom Route on Image */}
                  <div className="absolute bottom-3 left-4 right-4 z-20 text-white text-xs font-medium flex items-center gap-1.5 truncate">
                    <MapPin size={14} className="text-red-400 flex-shrink-0" />
                    <span className="truncate">{tour.route}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col">
                  
                  <Link href={`/tours/${tour.id}`}>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                      {tour.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  {tour.highlights && (
                    <div className="mb-6 space-y-2">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        Tour Highlights:
                      </div>
                      <div className="space-y-1.5">
                        {tour.highlights.slice(0, 3).map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Amenities Row */}
                  <div className="flex items-center gap-3 py-3 border-y border-slate-100 text-[11px] text-slate-500 font-semibold mb-6">
                    <span className="flex items-center gap-1"><Wifi size={13} className="text-blue-600" /> Wi-Fi</span>
                    <span className="flex items-center gap-1"><BusFront size={13} className="text-red-600" /> Restroom</span>
                    <span className="flex items-center gap-1"><Luggage size={13} className="text-green-600" /> 50+ Bags</span>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-auto flex flex-col gap-2.5">
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Pricing</span>
                        <span className="text-base font-black text-slate-900">Custom Written Quote</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">All-Inclusive CAD</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link 
                        href={`/tours/${tour.id}`}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold py-3 rounded-xl text-center text-xs transition-colors"
                      >
                        View Itinerary
                      </Link>

                      <button 
                        type="button"
                        onClick={() => handleBookTour(tour.title)}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3 rounded-xl text-center text-xs transition-colors shadow flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>Get Quote</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. LONG-DISTANCE LOGISTICS & B2B REASSURANCE */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-blue-900 uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Operations & Safety
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
              How Multi-Day Charter Logistics Work
            </h2>
            <p className="text-base text-slate-600">
              Coordinating long-distance group travel requires rigorous safety compliance, experienced highway drivers, and clear operational planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">Driver Hours of Service (HOS)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We strictly adhere to Canadian Federal & US DOT driving regulations (max 13 hours driving / 14 hours on duty) with mandatory 8-hour consecutive rest to guarantee group safety.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">Private Group Freedom</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You travel exclusively with your own group. Set your custom departure point in the GTA, select your photo stops, and control your own daily sightseeing pace.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4">
                <Luggage size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">Massive Luggage Bays</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full underfloor heated luggage compartments accommodate 56 large suitcases plus personal carry-ons, leaving full legroom and passenger comfort inside the cabin.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-700 rounded-xl flex items-center justify-center mb-4">
                <Compass size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg mb-2">Relay Operations for Florida</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For long continental trips like Toronto to Orlando, choose between a swift dual-driver relay operation or comfortable midpoint-hotel overnight routing.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. MULTI-DAY FAQ ACCORDION */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Multi-Day Travel Frequently Asked Questions</h2>
            <p className="text-slate-600">Essential details regarding driver lodging, border crossing, and luggage limits.</p>
          </div>

          <div className="space-y-4">
            {multiDayFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors cursor-pointer text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`text-red-600 transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-14 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-3">Need a Custom Multi-Day Itinerary?</h3>
            <p className="text-slate-200 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              Planning a specialized tour to Boston, Chicago, New York, Washington D.C., or Atlantic Canada? Our charter logistics coordinators can build custom routes tailored to your schedule.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => handleBookTour("Custom Continental Route")}
                className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-lg text-sm cursor-pointer"
              >
                Get Custom Itinerary Quote
              </button>
              <a 
                href="tel:(416) 269-9555"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold py-3.5 px-6 rounded-xl transition-all text-sm flex items-center gap-2"
              >
                <Phone size={16} className="text-red-400" />
                <span>Call (416) 269-9555</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
