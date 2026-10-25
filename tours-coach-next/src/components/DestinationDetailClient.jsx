"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useQuote } from '../context/QuoteContext';
import { TrustStatsBanner, ClientLogos } from './Shared';
import GooglePlacesInput from './GooglePlacesInput';
import { 
  Building2, Trophy, Plane, Landmark, Users, Map, Navigation, Briefcase,
  MapPin, Calendar, Clock, ShieldCheck, CheckCircle, Star, Phone, ArrowRight,
  ChevronRight, ChevronDown, Sparkles, Award, Bus, Car, Zap,
  Luggage, DollarSign, ArrowLeftRight, Check, Shield, Compass,
  AlertCircle, ChevronUp
} from 'lucide-react';

// Icon resolver for dynamic highlights from data.js
const ICON_MAP = {
  Building2,
  Trophy,
  Plane,
  Landmark,
  Users,
  Map,
  Navigation,
  Briefcase
};

// Available Fleet in Ontario
const DESTINATION_FLEET = [
  {
    slug: "luxury-coach-bus-charter",
    name: "56 Passenger Luxury Coach Bus",
    tagline: "Flagship Highway Motorcoach",
    pax: "56 Passengers",
    luggage: "56+ Large Undercarriage Bags",
    restroom: "Yes (Sanitized Lavatory)",
    power: "110V & USB Every Row",
    rate: "From $175 / hr",
    daily: "From $1,450 / day",
    img: "/fleet-luxury.jpg",
    features: [
      "Plush reclining high-back seating",
      "Massive climate-controlled luggage bays",
      "High-speed 5G Wi-Fi & PA microphone",
      "Multi-screen flat-panel entertainment"
    ],
    bestFor: "Corporate summits, long tours & athletics"
  },
  {
    slug: "mini-coach-bus-charter",
    name: "24-36 Passenger Mini Coach",
    tagline: "Executive Mid-Size Bus",
    pax: "24 - 36 Passengers",
    luggage: "30 Bags + Overhead Racks",
    restroom: "Select Models / Scheduled",
    power: "USB Outlets & Wi-Fi",
    rate: "From $140 / hr",
    daily: "From $1,150 / day",
    img: "/fleet-mini.jpg",
    features: [
      "Ergonomic executive leather seating",
      "Panoramic tinted UV privacy windows",
      "Dedicated rear luggage compartment",
      "Nimble urban & downtown maneuverability"
    ],
    bestFor: "Wedding shuttles, airport transfers & offsites"
  },
  {
    slug: "14-passenger-van-service",
    name: "14 Passenger Executive Transit Van",
    tagline: "VIP Group & Airport Sprinter",
    pax: "14 Passengers",
    luggage: "14 Large Airport Suitcases",
    restroom: "Rest Stops Scheduled",
    power: "USB Fast-Charging Ports",
    rate: "From $115 / hr",
    daily: "From $850 / day",
    img: "/fleet-van.jpg",
    features: [
      "High-roof walk-in standing clearance",
      "Individual contoured comfort seats",
      "Deep rear luggage storage bay",
      "Direct curbside terminal drop-off"
    ],
    bestFor: "Airport VIPs, golf trips & small executive groups"
  },
  {
    slug: "school-bus-charter",
    name: "48-56 Passenger School Bus",
    tagline: "Safe & Affordable Group Travel",
    pax: "48 Adults / 56 Students",
    luggage: "In-Cabin & Under-Seat Storage",
    restroom: "Rest Stops Scheduled",
    power: "Standard Heating & Air",
    rate: "From $105 / hr",
    daily: "From $750 / day",
    img: "/fleet-school.jpg",
    features: [
      "Ontario Ministry (MTO) certified safety",
      "Reinforced steel safety cell construction",
      "Vetted, background-checked professional driver",
      "Most economical per-seat group transit"
    ],
    bestFor: "School field trips, summer camps & community events"
  }
];

// Nearby Popular Cities for Inter-Linking & SEO
const NEARBY_CITIES = [
  { name: "Toronto", slug: "charter-bus-service-toronto" },
  { name: "Mississauga", slug: "charter-bus-service-mississauga" },
  { name: "Scarborough", slug: "charter-bus-service-scarborough" },
  { name: "Brampton", slug: "charter-bus-service-brampton" },
  { name: "Vaughan", slug: "charter-bus-service-vaughan" },
  { name: "Hamilton", slug: "charter-bus-service-hamilton" },
  { name: "Markham", slug: "charter-bus-service-north-york" },
  { name: "Pickering", slug: "charter-bus-service-pickering" },
  { name: "Ajax", slug: "charter-bus-service-ajax" },
  { name: "Oshawa", slug: "charter-bus-service-oshawa" },
  { name: "Burlington", slug: "charter-bus-service-burlington" },
  { name: "Guelph", slug: "charter-bus-service-guelph" },
  { name: "Barrie", slug: "charter-bus-service-barrie" },
  { name: "Aurora", slug: "charter-bus-service-aurora" },
  { name: "Milton", slug: "charter-bus-service-milton" },
  { name: "Woodbridge", slug: "charter-bus-service-woodbridge" }
];

export default function DestinationDetailClient({ data, slug }) {
  const { openQuoteWithData, setIsQuoteModalOpen } = useQuote();
  const [openFaq, setOpenFaq] = useState(0);
  const [targetDestination, setTargetDestination] = useState('');
  const [bannerSrc, setBannerSrc] = useState(data.img || "/toronto-banner.jpg");

  const cityName = data.city || "Ontario";

  // Quick route presets for this destination
  const handlePresetRoute = (destName) => {
    openQuoteWithData(`${cityName}, ON`, destName, 'luxury-coach-bus-rental');
  };

  const handleStartCustomQuote = (e) => {
    e.preventDefault();
    openQuoteWithData(`${cityName}, ON`, targetDestination || "Greater Toronto Area", 'luxury-coach-bus-rental');
  };

  const handleSelectFleet = (vehicleKey) => {
    openQuoteWithData(`${cityName}, ON`, "", vehicleKey);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-28 pb-20 font-sans">
      
      {/* 1. BREADCRUMBS & ONTARIO REGIONAL BADGE */}
      <div className="container mx-auto px-4 max-w-6xl mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-3">
          <nav className="flex items-center space-x-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-blue-900 transition">Home</Link>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-slate-400">Destinations & Service Areas</span>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-blue-900 font-bold">{cityName} Charter Bus</span>
          </nav>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 font-bold border border-red-200">
            <span>🍁</span>
            <span>Ontario CVOR Master Rated Commercial Operator</span>
          </div>
        </div>
      </div>

      {/* 2. EXECUTIVE HERO BANNER */}
      <section className="container mx-auto px-4 max-w-6xl mb-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-slate-800 text-white min-h-[440px] flex flex-col justify-end p-6 sm:p-10 lg:p-12">
          
          {/* Background Photography with Gradient Overlay */}
          <img 
            src={bannerSrc} 
            alt={`${cityName} Charter Bus Service`} 
            onError={() => setBannerSrc("/toronto-banner.jpg")}
            className="absolute inset-0 w-full h-full object-cover opacity-35 transition-transform duration-1000 scale-100 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40 pointer-events-none"></div>

          {/* Top Pill & Star Rating */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/90 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-md">
              <Sparkles size={13} />
              <span>Premier {cityName} Service Corridor</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
              </div>
              <span className="font-bold text-white ml-1">4.9 / 5.0 Rating</span>
              <span className="text-slate-400 hidden sm:inline">(500+ Verified Charters)</span>
            </div>
          </div>

          {/* Headline & Description */}
          <div className="relative z-20 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              {data.title}
            </h1>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-3xl mb-8 font-normal">
              {data.subtitle}
            </p>

            {/* Quick Live Operational Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider block">Fleet Base</span>
                <span className="text-xs sm:text-sm font-black text-white mt-0.5 block truncate">{cityName} & GTA Hub</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider block">Quote Response</span>
                <span className="text-xs sm:text-sm font-black text-white mt-0.5 block truncate flex items-center gap-1">
                  <Clock size={13} className="text-red-400" /> 15-Minute Guarantee
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider block">Commercial Safety</span>
                <span className="text-xs sm:text-sm font-black text-white mt-0.5 block truncate flex items-center gap-1">
                  <ShieldCheck size={13} className="text-emerald-400" /> $10M Liability Insured
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider block">Charter Pricing</span>
                <span className="text-xs sm:text-sm font-black text-white mt-0.5 block truncate flex items-center gap-1">
                  <Award size={13} className="text-amber-400" /> Price Beat Guarantee
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INSTANT DESTINATION QUOTE ESTIMATOR BAR */}
      <section className="container mx-auto px-4 max-w-6xl mb-14">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Instant Charter Estimator
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
                Plan Your {cityName} Bus Charter
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Enter your destination below or select a popular Ontario route preset for an immediate free quote.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Live Canadian Dispatch Active</span>
            </div>
          </div>

          <form onSubmit={handleStartCustomQuote} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Pickup (Locked to current destination) */}
            <div className="md:col-span-4">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                Pickup City / Region
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3.5 text-red-600 z-10" size={18} />
                <input 
                  type="text" 
                  readOnly
                  value={`${cityName}, ON`} 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 text-sm focus:outline-none cursor-default"
                />
              </div>
            </div>

            {/* Destination Field with Google Places Autocomplete */}
            <div className="md:col-span-5">
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                Dropoff Destination / Event Venue
              </label>
              <div className="relative">
                <Navigation className="absolute left-3.5 top-3.5 text-blue-900 z-10" size={18} />
                <GooglePlacesInput 
                  value={targetDestination}
                  onChange={(val) => setTargetDestination(val)}
                  placeholder="e.g. Pearson Airport (YYZ), MTCC, Niagara Falls..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl font-medium text-slate-900 text-sm focus:ring-2 focus:ring-blue-900 outline-none transition"
                />
              </div>
            </div>

            {/* Action CTA */}
            <div className="md:col-span-3 pt-1 md:pt-5">
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-3.5 px-6 rounded-xl transition shadow-lg shadow-red-600/20 hover:shadow-red-600/40 flex justify-center items-center gap-2 text-sm sm:text-base cursor-pointer active:scale-98"
              >
                <span>Request Free Quote</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </form>

          {/* Popular Route Presets */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-100 text-xs">
            <span className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mr-1">Popular Corridors:</span>
            {[
              { label: `Toronto Pearson (YYZ)`, dest: "Toronto Pearson International Airport (YYZ)" },
              { label: `Downtown Toronto (MTCC / Scotiabank)`, dest: "Metro Toronto Convention Centre (MTCC), Toronto" },
              { label: `Niagara Falls & Wine Country`, dest: "Niagara Falls, ON" },
              { label: `Montreal / Ottawa Tours`, dest: "Ottawa, ON" }
            ].map(r => (
              <button
                key={r.label}
                type="button"
                onClick={() => handlePresetRoute(r.dest)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-900 border border-slate-200 transition cursor-pointer font-medium"
              >
                <span>{r.label}</span>
                <ArrowRight size={12} className="text-slate-400" />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 4. MAIN CONTENT & KEY SPECIALIZED VENUES GRID */}
      <section className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column (8 Cols): Editorial & Regional Hubs */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Editorial Overview */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <span className="text-xs font-black uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Logistics & Local Expertise
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-6 tracking-tight">
                Compact Luxury & High-Capacity Fleet Charters in {cityName}
              </h2>
              <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {data.content.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Informative Callout Box */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-100 flex items-start gap-4">
                <ShieldCheck size={28} className="text-blue-900 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-blue-950 uppercase tracking-wide">
                    Full Compliance With Ontario Ministry of Transportation (MTO)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Every bus operating in {cityName} undergoes mandatory 30-day CVOR mechanical safety inspections. Drivers follow strict Canadian federal hours-of-service regulations, ensuring your travelers enjoy uncompromised safety and punctual arrivals.
                  </p>
                </div>
              </div>
            </div>

            {/* Specialized Venues & Highlights Card Matrix */}
            <div>
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                  Regional Transit Hubs
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
                  Specialized {cityName} Charter Corridors
                </h3>
                <p className="text-slate-600 text-sm mt-1">
                  Our professional drivers possess route familiarity with key venues, highways, and terminal staging areas across {cityName}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {data.highlights.map((item, i) => {
                  const IconComp = ICON_MAP[item.icon] || MapPin;
                  return (
                    <div 
                      key={i} 
                      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition group hover:-translate-y-1 duration-200"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4 group-hover:bg-red-50 group-hover:text-red-600 transition">
                        <IconComp size={24} />
                      </div>
                      <h4 className="text-base font-black text-slate-900 mb-2 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Local Charter Use Cases */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">
                Common Group Charter Requests in {cityName}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 font-black text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm">Corporate Conferences & Offsites</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Continuous employee shuttles, convention transfers to MTCC / Enercare, and VIP executive transportation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 font-black text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm">Weddings & Private Celebrations</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Dedicated hotel-to-venue loops keeping wedding guests punctual, safe, and free from late-night driving worries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 font-black text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm">Sports Teams & Tournaments</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Massive undercarriage storage for hockey bags, athletic gear, and direct arena drop-offs for tournaments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 font-black text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm">School Excursions & University Tours</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Affordable school bus and coach rentals with background-checked drivers for educational museums, zoos, and campuses.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column (4 Cols): Sticky Executive Reservation Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-blue-900 to-red-600"></div>

              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                  {cityName} Charter Booking
                </span>
                <div className="text-2xl font-black text-blue-950 tracking-tight">
                  Instant Dispatch Quote
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Guaranteed fast response from our 24/7 Canadian dispatch team.
                </p>
              </div>

              {/* Price Beat Guarantee Pill */}
              <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-100 flex items-center gap-2.5 text-xs text-red-800 font-bold">
                <Award size={16} className="text-red-600 flex-shrink-0" />
                <span>We Beat Any Written Quote by 5%</span>
              </div>

              {/* Inclusions List */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">
                  Included in Every Charter:
                </span>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                    <span>Certified Professional Commercial Driver</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                    <span>All Standard Fuel & Local Mileage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                    <span>$10,000,000 Commercial Liability Insurance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                    <span>Pre-Trip Ministry Mechanical Inspection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                    <span>Curbside Flight Tracking for Airport Pickups</span>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <button 
                  onClick={() => openQuoteWithData(`${cityName}, ON`, "", "luxury-coach-bus-rental")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 px-6 rounded-2xl transition shadow-lg shadow-red-600/30 flex justify-center items-center gap-2 text-base cursor-pointer active:scale-98"
                >
                  <span>Request Quote for {cityName}</span>
                  <ArrowRight size={18} />
                </button>
                <a 
                  href="tel:(647)948-8424" 
                  className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold py-3.5 px-5 rounded-2xl border border-slate-200 transition flex justify-center items-center gap-2 text-sm cursor-pointer"
                >
                  <Phone size={16} className="text-blue-900" />
                  <span>Direct Dispatch: (647) 948-8424</span>
                </a>
              </div>

              {/* Live Status */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active in {cityName}
                </span>
                <span className="font-medium text-slate-400">15-Min Response</span>
              </div>

            </div>

            {/* Direct Contact Card */}
            <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-3xl p-6 shadow-lg">
              <h4 className="font-black text-base mb-1">Planning a Complex Multi-Day Itinerary?</h4>
              <p className="text-xs text-blue-200 leading-relaxed mb-4">
                Our senior charter planners can organize multi-coach convoys, customized staging schedules, and hotel accommodations for drivers.
              </p>
              <a 
                href="mailto:info@tourscoach.ca" 
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-2 rounded-xl transition"
              >
                <span>Email Logistics Team: info@tourscoach.ca</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FULL-FLEET OPTIONS AVAILABLE IN THIS DESTINATION */}
      <section className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Fleet Selection
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
            Charter Buses Available in {cityName}
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Select the perfect vehicle capacity for your group. All vehicles include professional commercial drivers, fuel, and full insurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATION_FLEET.map((bus) => (
            <div 
              key={bus.slug}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Vehicle Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img 
                    src={bus.img} 
                    alt={bus.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-blue-950 font-black text-[11px] px-2.5 py-1 rounded-full shadow">
                    {bus.pax}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {bus.rate}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-600 block mb-1">
                    {bus.tagline}
                  </span>
                  <h3 className="font-black text-slate-900 text-base leading-snug mb-3">
                    {bus.name}
                  </h3>

                  {/* Feature Chips */}
                  <div className="space-y-1.5 mb-4 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Luggage size={13} className="text-amber-600 flex-shrink-0" />
                      <span className="truncate">{bus.luggage}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Sparkles size={13} className="text-blue-900 flex-shrink-0" />
                      <span className="truncate">{bus.restroom}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Zap size={13} className="text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{bus.power}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed border-t border-slate-100 pt-2.5">
                    <strong>Best for:</strong> {bus.bestFor}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => handleSelectFleet(bus.slug)}
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
                >
                  <span>Book for {cityName}</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 6. TRANSPARENT PRICING & RATE BREAKDOWN FOR THIS CITY */}
      <section className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mb-8">
            <span className="text-xs font-black text-red-400 uppercase tracking-widest bg-red-950/60 border border-red-800/40 px-3 py-1 rounded-full">
              Budget Planning
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 tracking-tight">
              Estimated Charter Bus Rental Rates for {cityName}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Transparent, all-inclusive Canadian dollar estimates based on standard itinerary lengths.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-3">Vehicle Class</th>
                  <th className="py-3 px-3">Capacity</th>
                  <th className="py-3 px-3">4-Hour Half Day</th>
                  <th className="py-3 px-3">8-Hour Full Day</th>
                  <th className="py-3 px-3">Est. Per Passenger</th>
                  <th className="py-3 px-3 text-right">Instant Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-200">
                <tr>
                  <td className="py-3.5 px-3 font-bold text-white">56 Passenger Luxury Coach</td>
                  <td className="py-3.5 px-3">56 Pax</td>
                  <td className="py-3.5 px-3">$750 – $950</td>
                  <td className="py-3.5 px-3 font-semibold text-emerald-400">$1,450 – $1,750</td>
                  <td className="py-3.5 px-3 text-slate-300">~$26 / person</td>
                  <td className="py-3.5 px-3 text-right">
                    <button 
                      onClick={() => handleSelectFleet('luxury-coach-bus-rental')}
                      className="text-xs font-bold text-red-400 hover:text-white underline cursor-pointer"
                    >
                      Select Bus
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-bold text-white">24-36 Passenger Mini Coach</td>
                  <td className="py-3.5 px-3">24-36 Pax</td>
                  <td className="py-3.5 px-3">$590 – $750</td>
                  <td className="py-3.5 px-3 font-semibold text-emerald-400">$1,150 – $1,390</td>
                  <td className="py-3.5 px-3 text-slate-300">~$35 / person</td>
                  <td className="py-3.5 px-3 text-right">
                    <button 
                      onClick={() => handleSelectFleet('mini-coach-bus-rental')}
                      className="text-xs font-bold text-red-400 hover:text-white underline cursor-pointer"
                    >
                      Select Bus
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-bold text-white">14 Passenger Transit Van</td>
                  <td className="py-3.5 px-3">14 Pax</td>
                  <td className="py-3.5 px-3">$460 – $580</td>
                  <td className="py-3.5 px-3 font-semibold text-emerald-400">$850 – $1,050</td>
                  <td className="py-3.5 px-3 text-slate-300">~$60 / person</td>
                  <td className="py-3.5 px-3 text-right">
                    <button 
                      onClick={() => handleSelectFleet('14-passenger-van-rental')}
                      className="text-xs font-bold text-red-400 hover:text-white underline cursor-pointer"
                    >
                      Select Bus
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-bold text-white">48-56 School Bus Charter</td>
                  <td className="py-3.5 px-3">48-56 Pax</td>
                  <td className="py-3.5 px-3">$420 – $520</td>
                  <td className="py-3.5 px-3 font-semibold text-emerald-400">$750 – $920</td>
                  <td className="py-3.5 px-3 text-slate-300">~$15 / person</td>
                  <td className="py-3.5 px-3 text-right">
                    <button 
                      onClick={() => handleSelectFleet('school-bus-rental')}
                      className="text-xs font-bold text-red-400 hover:text-white underline cursor-pointer"
                    >
                      Select Bus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>* All rates include commercial driver, fuel, and liability insurance. 407 ETR tolls and parking fees are billed at actual cost.</span>
            <span className="text-emerald-400 font-bold">Price Beat Guarantee Applied</span>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
              {cityName} Charter Bus FAQs
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Find answers to the most common questions regarding booking, parking permits, and driver logistics in {cityName}.
            </p>
          </div>

          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div 
                key={i} 
                className="border border-slate-200 rounded-2xl overflow-hidden transition"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition cursor-pointer text-sm sm:text-base"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-blue-900' : ''}`} 
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed bg-slate-50 border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-black text-slate-900 text-sm">Have a question specific to your {cityName} itinerary?</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Our local dispatch team is available 24/7 to confirm route logistics and parking staging.
              </p>
            </div>
            <a 
              href="tel:(647)948-8424"
              className="bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Phone size={14} /> Call (647) 948-8424
            </a>
          </div>

        </div>
      </section>

      {/* 8. NEARBY ONTARIO SERVICE AREAS & INTER-LINKING */}
      <section className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div className="mb-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-1">
              Ontario Regional Network
            </span>
            <h4 className="text-lg font-black text-slate-900">
              Other Popular Charter Bus Service Areas Near {cityName}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {NEARBY_CITIES.filter(c => c.name.toLowerCase() !== cityName.toLowerCase()).map(c => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="text-xs px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-900 border border-slate-200 transition font-medium"
              >
                Charter Bus {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TRUST STATS BANNER */}
      <section className="container mx-auto px-4 max-w-6xl mb-12">
        <TrustStatsBanner />
      </section>

      {/* 10. CLIENT LOGOS */}
      <div className="container mx-auto px-4 max-w-6xl">
        <ClientLogos />
      </div>

    </div>
  );
}
