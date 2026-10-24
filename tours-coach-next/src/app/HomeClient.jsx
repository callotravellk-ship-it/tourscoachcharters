"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useQuote } from '../context/QuoteContext';
import { 
  Star, CalendarCheck, ShieldCheck, Map, Headphones, BusFront, 
  Users, Briefcase, Trophy, Navigation, Car, ArrowRight, 
  Phone, Clock, CheckCircle, ChevronDown, Sparkles, 
  DollarSign, Luggage, Wifi, HelpCircle, Check, Award
} from 'lucide-react';
import { TrustStatsBanner, ClientLogos } from '../components/Shared';
import { COMPANY_INFO, FLEET_DATA, PRICING_GUIDE_DATA } from '../lib/data';
import GooglePlacesInput from '../components/GooglePlacesInput';

export default function HomeClient() {
  const { quoteData, setQuoteData, setIsQuoteModalOpen } = useQuote();
  const [paxCount, setPaxCount] = useState(30);
  const [tripType, setTripType] = useState('return');
  const [pickupCity, setPickupCity] = useState('');
  const [destCity, setDestCity] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const fleetEntries = Object.entries(FLEET_DATA);

  // Dynamic vehicle suggestion based on passenger count
  const getRecommendedVehicle = (count) => {
    if (count <= 14) {
      return {
        name: "14 Passenger Executive Van",
        key: "14-passenger-van-service",
        desc: "Ideal for Pearson Airport YYZ transfers, executive VIP dinners, and small groups.",
        rate: "From $115 / hr CAD"
      };
    } else if (count <= 36) {
      return {
        name: "24 - 36 Passenger Mini Coach",
        key: "mini-coach-bus-charter",
        desc: "Perfect for corporate offsites, wedding guest shuttles, and Niagara day tours.",
        rate: "From $140 / hr CAD"
      };
    } else if (count <= 56) {
      return {
        name: "56 Passenger Luxury Coach Bus",
        key: "luxury-coach-bus-charter",
        desc: "Full-size highway motorcoach with onboard restroom, Wi-Fi, and massive luggage bays.",
        rate: "From $175 / hr CAD"
      };
    } else {
      return {
        name: "Multi-Coach Fleet / Synchronized Charter",
        key: "luxury-coach-bus-charter",
        desc: "Synchronized multiple 56-passenger motorcoaches for conventions and large groups.",
        rate: "Volume Fleet Discount"
      };
    }
  };

  const recommended = getRecommendedVehicle(paxCount);

  const handleQuickEstimate = (e) => {
    e.preventDefault();
    setQuoteData((prev) => ({
      ...prev,
      pickup: pickupCity || "Toronto, ON",
      destination: destCity || "Niagara Falls, ON",
      passengers: paxCount,
      tripType: tripType,
      departDate: travelDate || ""
    }));
    setIsQuoteModalOpen(true);
  };

  const faqs = [
    {
      q: "How much does it cost to rent a charter bus in Canada?",
      a: "Charter bus rental prices in Canada typically range from $140 to $225 CAD per hour, with most operators requiring a 4-to-5 hour minimum booking. A full-day rental for a 56-passenger luxury coach generally costs between $1,350 and $1,850 CAD, while a 24-36 passenger mini coach ranges from $1,050 to $1,450 CAD per day. Final pricing depends on total kilometers, trip duration, driver hours of service, and travel dates."
    },
    {
      q: "What are charter bus rental Toronto prices?",
      a: "In Toronto and the Greater Toronto Area (GTA), average charter bus rental prices are approximately $175-$225 CAD/hour for a 56-passenger luxury coach, $140-$175 CAD/hour for a 24-36 passenger minibus, $110-$145 CAD/hour for a 14-passenger van, and $105-$135 CAD/hour for a 48-56 passenger school bus. We provide transparent, all-inclusive written quotes with no surprise fuel surcharges."
    },
    {
      q: "Coach bus vs minibus rental for events: How do I choose?",
      a: "Choose a 56-passenger coach bus if your group exceeds 35 passengers, if you are traveling long distances (such as Toronto to Ottawa, Montreal, or Niagara), or if your passengers require an onboard restroom and large undercarriage luggage space. Choose a 24-36 passenger minibus if you have a mid-sized group doing local GTA city travel, wedding loops, or visiting tight venues where an agile turning radius is required."
    },
    {
      q: "How many people fit in a coach bus?",
      a: "A standard full-size highway coach bus seats up to 56 adult passengers comfortably with high-back reclining seats. Mid-size mini coaches accommodate between 24 and 36 passengers, high-roof passenger vans seat up to 14 passengers, and standard school buses accommodate 48 adults or up to 56 school children (3 to a bench)."
    },
    {
      q: "Are professional commercial drivers included with every rental?",
      a: "Yes. 100% of our charter rentals include a fully licensed, professional commercial driver. Our drivers hold full Ontario CVOR credentials, undergo rigorous background checks and vulnerable sector screening, and are trained in defensive driving and customer hospitality."
    },
    {
      q: "Do you service corporate events and airport transfers in Toronto?",
      a: "Yes. We specialize in corporate event bus rentals in Toronto, offering executive shuttles to the Metro Toronto Convention Centre (MTCC), Enercare Centre, and downtown corporate headquarters. We also provide direct curbside group transfers to and from Toronto Pearson Airport (YYZ Terminals 1 & 3) and Billy Bishop (YTZ)."
    },
    {
      q: "Can we book wedding shuttle bus rentals across Ontario?",
      a: "Absolutely. We provide seamless wedding transportation rentals throughout Toronto, the GTA, Caledon, Vaughan, Niagara-on-the-Lake, and Prince Edward County. We organize continuous guest loops between host hotels and wedding venues, plus safe late-night return shuttles."
    },
    {
      q: "What makes Tours Coach Charters one of the best charter bus companies in Toronto?",
      a: "We are an Ontario-based company headquartered in Pickering, operating modern, meticulously maintained vehicles with full $10,000,000 commercial liability insurance and active CVOR compliance. With 24/7 live dispatch, transparent all-inclusive CAD pricing, and a 4.9/5 nationwide customer rating, we deliver an unmatched standard of service."
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-900 bg-[url('/home-hero.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Subtle gradient overlay for superior contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Core Value Proposition & Headings */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-red-600/90 border border-red-500 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 shadow-lg backdrop-blur-sm">
                <span>🇨🇦</span> Canada's Premier Charter Bus Rentals • Based in GTA • Serving Nationwide
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 drop-shadow-md">
                Charter Bus Rental Toronto & Across Canada
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Reliable <strong>56-passenger coach bus rentals</strong>, <strong>minibuses in Toronto</strong>, and <strong>passenger vans in the GTA</strong> with professional drivers included. Transparent CAD rates, modern amenities, and 24/7 Canadian dispatch.
              </p>

              {/* 4 Trust Badges in Hero */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl text-white">
                  <div className="text-yellow-400 font-black text-lg flex items-center gap-1">
                    <Star size={18} className="fill-current" /> 4.9 / 5
                  </div>
                  <div className="text-xs text-slate-300 font-medium">480+ Canadian Reviews</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl text-white">
                  <div className="text-blue-400 font-black text-lg flex items-center gap-1">
                    <ShieldCheck size={18} /> $10M Insured
                  </div>
                  <div className="text-xs text-slate-300 font-medium">Ontario CVOR Certified</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl text-white">
                  <div className="text-green-400 font-black text-lg flex items-center gap-1">
                    <Clock size={18} /> 100% Punctual
                  </div>
                  <div className="text-xs text-slate-300 font-medium">Guaranteed On-Time</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-xl text-white">
                  <div className="text-red-400 font-black text-lg flex items-center gap-1">
                    <Users size={18} /> 14 to 56+ Pax
                  </div>
                  <div className="text-xs text-slate-300 font-medium">Fleet for Any Group</div>
                </div>
              </div>

              {/* Instant Call / Quote Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-4 px-8 rounded-xl transition-all shadow-[0_4px_20px_rgba(220,38,38,0.45)] hover:shadow-[0_6px_25px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 flex items-center gap-2 text-base group"
                >
                  Request Instant Free Quote
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <a 
                  href="tel:(416) 269-9555"
                  className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold py-4 px-6 rounded-xl transition-all backdrop-blur-md flex items-center gap-2 text-base"
                >
                  <Phone size={18} className="text-red-400" />
                  <span>Call (416) 269-9555</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Converting Interactive Rate & Vehicle Calculator Widget */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 relative">
                
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Instant Bus Matcher & Quote</h3>
                    <p className="text-xs text-slate-500">Pick your group size for instant vehicle recommendation</p>
                  </div>
                  <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                    CAD Pricing
                  </span>
                </div>

                <form onSubmit={handleQuickEstimate} className="space-y-4">
                  
                  {/* Trip Type Tabs */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
                    {['return', 'oneWay', 'multiDay'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setTripType(type)}
                        className={`py-2 rounded-lg transition-all ${tripType === type ? 'bg-white text-blue-900 shadow-sm' : 'hover:text-slate-900'}`}
                      >
                        {type === 'return' ? 'Round Trip' : type === 'oneWay' ? 'One Way' : 'Multi-Day'}
                      </button>
                    ))}
                  </div>

                  {/* Passenger Count Interactive Slider */}
                  <div>
                    <div className="flex justify-between items-center text-sm mb-1.5">
                      <label className="font-bold text-slate-700 flex items-center gap-1.5">
                        <Users size={16} className="text-red-600" /> Group Size:
                      </label>
                      <span className="font-extrabold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded-md text-sm border border-blue-100">
                        {paxCount} {paxCount === 1 ? 'Passenger' : 'Passengers'}
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="120" 
                      value={paxCount}
                      onChange={(e) => setPaxCount(parseInt(e.target.value, 10))}
                      className="w-full accent-red-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-semibold px-0.5 mt-1">
                      <span>1-14 (Van)</span>
                      <span>15-36 (Minibus)</span>
                      <span>37-56 (Coach)</span>
                      <span>57+ (Fleet)</span>
                    </div>
                  </div>

                  {/* Recommendation Highlight Pill */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-3 rounded-xl flex items-start gap-3">
                    <BusFront size={22} className="text-blue-700 mt-0.5 flex-shrink-0" />
                    <div className="text-left text-xs leading-tight">
                      <div className="font-extrabold text-slate-900 text-sm">{recommended.name}</div>
                      <div className="text-slate-600 mt-0.5">{recommended.desc}</div>
                      <div className="text-red-600 font-bold mt-1">{recommended.rate}</div>
                    </div>
                  </div>

                  {/* Location Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Pickup Location</label>
                      <GooglePlacesInput 
                        value={pickupCity}
                        onChange={(val) => setPickupCity(val)}
                        placeholder="e.g. Toronto, Mississauga, GTA" 
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Destination</label>
                      <GooglePlacesInput 
                        value={destCity}
                        onChange={(val) => setDestCity(val)}
                        placeholder="e.g. Niagara, Montreal, Pearson" 
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none"
                      />
                    </div>
                  </div>

                  {/* Date Input */}
                  <div className="text-left">
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Departure Date</label>
                    <input 
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:bg-white focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-base"
                  >
                    <span>Check Availability & Get Pricing</span>
                    <ArrowRight size={18} />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-semibold pt-1">
                    <span className="flex items-center gap-1"><Check size={14} className="text-green-600" /> No Obligation</span>
                    <span className="flex items-center gap-1"><Check size={14} className="text-green-600" /> Fast 15-Min Response</span>
                    <span className="flex items-center gap-1"><Check size={14} className="text-green-600" /> All-Inclusive CAD</span>
                  </div>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CLIENT LOGOS & CANADIAN INSTITUTIONAL TRUST */}
      <ClientLogos />

      {/* 3. BOTTOM-OF-FUNNEL COMMERCIAL FLEET SHOWCASE */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-red-600 uppercase bg-red-50 border border-red-100 px-3 py-1 rounded-full">
              Modern Canadian Fleet
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
              Charter Bus & Minibus Rentals for Any Group Size
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              From our flagship <strong>56-passenger luxury coach bus rentals</strong> to agile <strong>minibus rentals in Toronto</strong> and executive <strong>passenger van rentals in the GTA</strong>, every vehicle is chauffeured by CVOR-certified commercial drivers.
            </p>
          </div>

          {/* Fleet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {fleetEntries.map(([key, vehicle]) => (
              <div 
                key={key} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Vehicle Image with Badges */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img 
                    src={vehicle.img} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                      <Users size={13} className="text-red-400" /> {vehicle.pax}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-red-600 text-white text-xs font-extrabold px-2.5 py-1 rounded-lg shadow-md">
                      {vehicle.rate || 'Custom CAD'}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-black text-xl text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                    {vehicle.name}
                  </h3>
                  
                  <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                    {vehicle.desc}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-700 font-medium">
                    {vehicle.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-2">
                    <button 
                      onClick={() => {
                        setQuoteData((prev) => ({ ...prev, vehicle: vehicle.name }));
                        setIsQuoteModalOpen(true);
                      }}
                      className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold py-2.5 rounded-xl transition-colors text-xs flex items-center justify-center gap-1.5 shadow cursor-pointer"
                    >
                      <span>Request This Vehicle</span>
                      <ArrowRight size={14} />
                    </button>
                    
                    <Link 
                      href={`/${key}`}
                      className="text-center text-xs font-bold text-blue-800 hover:text-red-600 py-1 transition-colors"
                    >
                      View Vehicle Specs & Features →
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Direct Link to Pricing Guide */}
          <div className="text-center mt-12">
            <Link 
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-900 hover:text-red-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-6 py-3 rounded-full transition-all"
            >
              <DollarSign size={16} className="text-red-600" />
              <span>See Full 2026 Charter Bus Pricing & Cost Breakdown in Canada →</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. MID-FUNNEL SERVICE-SPECIFIC SOLUTIONS */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-blue-800 uppercase bg-blue-100/60 border border-blue-200 px-3 py-1 rounded-full">
              Specialized Group Transit
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
              Tailored Charters for Every Canadian Event
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Whether you need a <strong>corporate event bus rental in Toronto</strong>, <strong>wedding transportation rentals in Ontario</strong>, <strong>sports team bus rentals</strong>, or <strong>private bus tours to Niagara Falls</strong>, we ensure seamless group logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            
            {/* Service 1: Corporate */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-14 h-14 bg-blue-50 text-blue-800 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Briefcase size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Corporate Events & Shuttles
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                <strong>Corporate event bus rental Toronto</strong> & <strong>executive coach charter Canada</strong>. Conference transit to MTCC, Enercare, and daily employee commuting loops in the GTA.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 mb-6 mt-auto">
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Onboard Wi-Fi & 110V Outlets</li>
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Pearson YYZ Airport Meet & Greet</li>
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Priority Corporate Billing</li>
              </ul>
              <Link 
                href="/services/corporate-transportation"
                className="text-xs font-extrabold text-blue-800 hover:text-red-600 flex items-center gap-1 transition-colors"
              >
                <span>Explore Corporate Services</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Service 2: Weddings */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Users size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Wedding Shuttle Rentals
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                <strong>Wedding shuttle bus rental Toronto</strong> & <strong>wedding transportation rentals Ontario</strong>. Continuous hotel-to-venue loops across Caledon, Vaughan, and Niagara.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 mb-6 mt-auto">
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Safe Late-Night Return Loops</li>
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Rustic Winery & Barn Expertise</li>
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Executive Bridal Party Vans</li>
              </ul>
              <Link 
                href="/services/wedding-shuttle"
                className="text-xs font-extrabold text-blue-800 hover:text-red-600 flex items-center gap-1 transition-colors"
              >
                <span>Explore Wedding Shuttles</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Service 3: School & Sports */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-14 h-14 bg-yellow-50 text-yellow-700 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Trophy size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                School & Sports Team Charters
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                <strong>School bus rental Toronto</strong> & <strong>sports team bus rental Ontario</strong>. Safe, affordable educational field trips and massive hockey bag storage for tournament teams.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 mb-6 mt-auto">
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> MTO & CVOR Safety Certified</li>
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Fits 50+ Hockey Equipment Bags</li>
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Vulnerable Sector Vetted Drivers</li>
              </ul>
              <Link 
                href="/services/sports-team-transportation"
                className="text-xs font-extrabold text-blue-800 hover:text-red-600 flex items-center gap-1 transition-colors"
              >
                <span>Explore Team & School Charters</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Service 4: Private Tours */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-14 h-14 bg-green-50 text-green-700 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Navigation size={26} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                Private Tours & Niagara Charters
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                <strong>Private bus tours Toronto</strong> & <strong>Niagara Falls charter bus rental</strong>. Custom sightseeing itineraries, bilingual driver options, and panoramic window coaches.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 mb-6 mt-auto">
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> 100% Customized Itineraries</li>
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Niagara Winery & Cruise Stops</li>
                <li className="flex items-center gap-1.5"><Check size={14} className="text-green-600" /> Crisp PA Tour Guide Audio</li>
              </ul>
              <Link 
                href="/services/private-bus-tours"
                className="text-xs font-extrabold text-blue-800 hover:text-red-600 flex items-center gap-1 transition-colors"
              >
                <span>Explore Private Bus Tours</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PRICING & COST BREAKDOWN PREVIEW */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black tracking-widest text-green-700 uppercase bg-green-50 border border-green-200 px-3 py-1 rounded-full">
              Transparent Pricing (CAD)
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
              Charter Bus Rental Toronto Prices & Canada Rates
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Wondering <strong>how much does it cost to rent a charter bus in Canada</strong>? We believe in honest, upfront pricing with no surprise charges.
            </p>
          </div>

          {/* Pricing Table Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-900 text-white text-xs sm:text-sm uppercase tracking-wider font-bold">
                    <th className="py-4 px-6">Vehicle Type</th>
                    <th className="py-4 px-6">Seating Capacity</th>
                    <th className="py-4 px-6">Hourly Rate (CAD)</th>
                    <th className="py-4 px-6">Daily Rate (CAD)</th>
                    <th className="py-4 px-6">Restroom Onboard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {PRICING_GUIDE_DATA.averageRates.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                      <td className="py-4 px-6 font-bold text-slate-900">{row.vehicle}</td>
                      <td className="py-4 px-6 text-slate-600">{row.ideal.split(',')[0]}</td>
                      <td className="py-4 px-6 font-extrabold text-red-600">{row.hourly}</td>
                      <td className="py-4 px-6 font-bold text-slate-800">{row.daily}</td>
                      <td className="py-4 px-6">
                        {row.restroom.startsWith('Yes') ? (
                          <span className="inline-flex items-center gap-1 text-green-700 font-semibold text-xs bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                            <CheckCircle size={14} /> Yes
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs">No</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                * Rates are estimates in Canadian Dollars (CAD) and vary based on exact mileage, peak seasonality (May-Oct), and driver regulations.
              </div>
              <Link 
                href="/pricing"
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-red-600 text-white text-xs font-bold py-3 px-6 rounded-xl transition-colors shadow whitespace-nowrap"
              >
                <span>Read Full Canada Pricing & FAQ Guide</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TRUST & STATS BANNER */}
      <section className="py-12 sm:py-16 bg-slate-950 text-white px-4">
        <TrustStatsBanner />
      </section>

      {/* 7. WHY CHOOSE TOURS COACH CHARTERS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-xs font-black tracking-widest text-red-600 uppercase bg-red-50 border border-red-100 px-3 py-1 rounded-full">
                The Canadian Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-6 tracking-tight">
                Why Groups Trust Tours Coach Charters Across Ontario & Canada
              </h2>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                Headquartered in Pickering, Ontario and providing coast-to-coast service, we bridge local GTA expertise with nationwide long-distance capabilities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 text-red-600 p-3 rounded-xl flex-shrink-0 mt-1">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base mb-1">MTO & CVOR Safety Certified</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Every coach is maintained according to strict Ontario Ministry of Transportation safety schedules, paired with $10M in commercial liability coverage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-blue-700 p-3 rounded-xl flex-shrink-0 mt-1">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base mb-1">Guaranteed On-Time Dispatch</h4>
                    <p className="text-xs sm:text-sm text-slate-600">Our drivers arrive 15-30 minutes prior to scheduled pickup. Live GPS vehicle tracking and 24/7 Canadian dispatch keep your journey smooth.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-50 text-green-700 p-3 rounded-xl flex-shrink-0 mt-1">
                    <Award size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base mb-1">Direct Fleet Operator — Zero Middleman Fees</h4>
                    <p className="text-xs sm:text-sm text-slate-600">You communicate directly with our logistics team. No unvetted third-party brokers, no hidden markups, and clear written contracts.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md text-sm cursor-pointer"
                >
                  Book Your Group Journey
                </button>
                <a 
                  href="tel:(416) 269-9555"
                  className="text-blue-900 font-bold hover:text-red-600 text-sm flex items-center gap-1.5"
                >
                  <Phone size={16} /> (416) 269-9555
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="/home-hero.jpg" alt="Tours Coach Charters Fleet on Ontario Highway" className="w-full h-[460px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-900 text-white p-6 rounded-2xl shadow-xl max-w-xs border border-blue-800">
                <div className="text-yellow-400 font-black text-2xl mb-1 flex items-center gap-1">
                  <Star size={24} className="fill-current" /> 4.9 / 5.0
                </div>
                <div className="text-xs font-medium text-blue-100">
                  Over 15,000 successful trips and 480+ verified 5-star Canadian group reviews.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. COMPREHENSIVE SEO FAQ ACCORDION (WITH FAQPAGE SCHEMA) */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-16">
            <span className="text-xs font-black tracking-widest text-blue-800 uppercase bg-blue-100/60 border border-blue-200 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tight">
              Charter Bus Rental in Canada & Toronto: FAQs
            </h2>
            <p className="text-base text-slate-600">
              Find quick answers to common pricing, vehicle capacity, and booking questions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left font-extrabold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors text-base sm:text-lg gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`transform transition-transform text-red-600 flex-shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} 
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-2">Have a Custom Route or Event Question?</h3>
            <p className="text-sm text-slate-600 mb-6">Our Canadian charter logistics specialists are available 24/7 to help you plan your itinerary.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow text-sm cursor-pointer"
              >
                Get a Personalized Quote
              </button>
              <a 
                href="tel:(416) 269-9555"
                className="bg-slate-100 hover:bg-slate-200 text-blue-900 font-bold py-3 px-6 rounded-xl transition-all border border-slate-300 text-sm flex items-center gap-2"
              >
                <Phone size={16} /> (416) 269-9555
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 9. STICKY MOBILE CONVERSION BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 z-40 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a 
          href="tel:(416) 269-9555"
          className="flex-1 bg-blue-900 text-white font-bold py-3 px-3 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow"
        >
          <Phone size={15} />
          <span>Call (416) 269-9555</span>
        </a>
        <button 
          onClick={() => setIsQuoteModalOpen(true)}
          className="flex-1 bg-red-600 text-white font-extrabold py-3 px-3 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow-[0_2px_10px_rgba(220,38,38,0.4)] cursor-pointer"
        >
          <span>Get Free Quote</span>
          <ArrowRight size={15} />
        </button>
      </div>

    </div>
  );
}
