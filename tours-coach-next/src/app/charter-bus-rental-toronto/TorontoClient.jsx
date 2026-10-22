"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useQuote } from '../../context/QuoteContext';
import { 
  Building2, Plane, Trophy, Users, ShieldCheck, Clock, 
  Star, ArrowRight, Phone, CheckCircle, BusFront, MapPin, 
  Sparkles, DollarSign, ChevronDown
} from 'lucide-react';
import { FLEET_DATA } from '../../lib/data';

export default function TorontoClient() {
  const { setQuoteData, setIsQuoteModalOpen } = useQuote();
  const [activeFaq, setActiveFaq] = useState(null);

  const torontoFaqs = [
    {
      q: "Where do your charter buses pick up at Toronto Pearson Airport (YYZ)?",
      a: "At Toronto Pearson International Airport (YYZ), commercial charter buses stage in the designated Ground Transportation Charter Bus bays at Terminal 1 (Ground Level, Columns Q-R) and Terminal 3 (Arrivals Level). Our dispatch team tracks inbound flights in real time to stage your vehicle right as your passengers claim their luggage."
    },
    {
      q: "Can you provide charter bus rentals to downtown Toronto convention centres?",
      a: "Yes. We frequently transport groups to the Metro Toronto Convention Centre (MTCC - North and South buildings) and the Enercare Centre at Exhibition Place. Our drivers are experienced in navigating downtown Toronto streets (Gardiner Expressway, Lakeshore Blvd, and Front St) and coordinating with convention marshaling yards."
    },
    {
      q: "What is the minimum rental time for a charter bus in Toronto?",
      a: "Local charter bus rentals in Toronto and the GTA typically carry a 4-to-5 hour minimum booking. This ensures dedicated vehicle preparation, sanitization, and driver staging."
    },
    {
      q: "Do you provide 56 passenger coach bus rentals in Toronto?",
      a: "Yes! Our 56 passenger luxury motorcoaches are our most popular option in Toronto for corporate conferences, large wedding guest shuttles, university athletics, and school field trips. Equipped with Wi-Fi, 110V power outlets, climate control, and an onboard restroom."
    },
    {
      q: "How quickly can I get a quote for charter bus rental in Toronto?",
      a: "Our Toronto dispatch team responds to quote requests within 15 to 30 minutes during standard business hours. For immediate bookings, call us directly at (416) 269-9555."
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO BANNER */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-slate-900 bg-[url('/toronto-banner.jpg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl text-left">
          <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 shadow">
            <span>🇨🇦</span> Greater Toronto Area (GTA) Hub • Local & Long Distance Charters
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-md">
            Charter Bus Rental Toronto & GTA Coach Charters
          </h1>

          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-3xl leading-relaxed">
            Need to <strong>rent a coach bus in Toronto</strong>? Tours Coach Charters is your premier partner for <strong>56 passenger coach bus rentals</strong>, executive <strong>minibus rentals in Toronto</strong>, and <strong>passenger van rentals across the GTA</strong> with professional drivers included.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
              <div className="font-extrabold text-sm text-yellow-400">Pearson (YYZ)</div>
              <div className="text-xs text-slate-300">Curbside Terminals 1 & 3</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
              <div className="font-extrabold text-sm text-blue-400">MTCC & Enercare</div>
              <div className="text-xs text-slate-300">Convention Logistics</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
              <div className="font-extrabold text-sm text-green-400">Scotiabank & BMO</div>
              <div className="text-xs text-slate-300">Sports & FIFA 2026</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl">
              <div className="font-extrabold text-sm text-red-400">4.9/5 Rating</div>
              <div className="text-xs text-slate-300">480+ Canadian Reviews</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => {
                setQuoteData((prev) => ({ ...prev, pickup: "Toronto, ON" }));
                setIsQuoteModalOpen(true);
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-lg flex items-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <span>Get Free Toronto Charter Quote</span>
              <ArrowRight size={18} />
            </button>
            <a 
              href="tel:(416) 269-9555"
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold py-3.5 px-6 rounded-xl transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <Phone size={18} className="text-red-400" />
              <span>Call Toronto Dispatch: (416) 269-9555</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. TORONTO FLEET OPTIONS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black tracking-widest text-red-600 uppercase bg-red-50 border border-red-100 px-3 py-1 rounded-full">
              Available Fleet
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-3">
              Toronto Charter Bus Fleet Options
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Select the ideal vehicle for your Toronto group transfer, corporate summit, or regional tour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(FLEET_DATA).map(([key, v]) => (
              <div key={key} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden p-5 flex flex-col hover:shadow-lg transition-all">
                <img src={v.img} alt={v.name} className="w-full h-40 object-cover rounded-xl mb-4" />
                <div className="text-xs font-bold text-red-600 uppercase mb-1">{v.category}</div>
                <h3 className="font-extrabold text-lg text-slate-900 mb-1">{v.name}</h3>
                <div className="text-xs font-semibold text-blue-900 mb-3">{v.pax} • {v.rate}</div>
                <p className="text-xs text-slate-600 mb-4 line-clamp-2">{v.desc}</p>
                <div className="mt-auto pt-3 border-t border-slate-200 flex flex-col gap-2">
                  <button 
                    onClick={() => {
                      setQuoteData((prev) => ({ ...prev, vehicle: v.name, pickup: "Toronto, ON" }));
                      setIsQuoteModalOpen(true);
                    }}
                    className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold py-2 rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Request Vehicle
                  </button>
                  <Link href={`/${key}`} className="text-center text-xs text-blue-800 hover:text-red-600 font-semibold">
                    View Specs →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. KEY TORONTO CHARTER HUBS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
              Where We Operate in Toronto & The GTA
            </h2>
            <p className="text-slate-600">
              Full coverage across downtown Toronto and every municipality in the Greater Toronto Area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-800 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Plane size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Pearson Airport (YYZ) & Billy Bishop (YTZ)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct commercial curbside shuttles to Terminal 1, Terminal 3, and Billy Bishop Island Airport. Live flight tracking for stress-free international delegation arrivals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Building2 size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Conventions & Conferences</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Metro Toronto Convention Centre (MTCC), Enercare Centre, and International Centre. Coordinated multi-coach shuttles for conventions up to 5,000+ attendees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-700 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Trophy size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Sports Arenas & FIFA 2026</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scotiabank Arena, Rogers Centre, CAA Centre, and Toronto Stadium (BMO Field). Dedicated group bus staging for sports tournaments and FIFA 2026 matches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-green-50 text-green-700 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">GTA Corporate Campuses</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Daily and event shuttles connecting Union Station, Vaughan Metropolitan Centre (VMC), Mississauga, Markham, and Pickering business parks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center mb-4 font-bold">
                <Star size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">GTA Wedding Venues</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reliable guest transportation to banquet halls in Woodbridge, rustic estates in Caledon, and wine country in Niagara-on-the-Lake.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center mb-4 font-bold">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">University Campus Charters</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                University of Toronto (St. George, Scarborough, Mississauga), York University, Humber College, and Seneca campus field trips and athletic travel.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TORONTO FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-2">
              Toronto Charter Bus Rental FAQs
            </h2>
            <p className="text-slate-600">Answers to common Toronto and GTA charter bus questions.</p>
          </div>

          <div className="space-y-4">
            {torontoFaqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`text-red-600 transform transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-200 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900 text-white rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black mb-3">Book Your Toronto Charter Bus Today</h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-6 text-sm">
              Call our Toronto dispatch office at <strong>(416) 269-9555</strong> or submit your itinerary online for an instant, transparent CAD quote.
            </p>
            <button 
              onClick={() => {
                setQuoteData((prev) => ({ ...prev, pickup: "Toronto, ON" }));
                setIsQuoteModalOpen(true);
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-lg text-sm cursor-pointer"
            >
              Get Free Toronto Charter Quote
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
