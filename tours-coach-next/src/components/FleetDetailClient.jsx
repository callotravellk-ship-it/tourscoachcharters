"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useQuote } from '../context/QuoteContext';
import { ClientLogos, TrustStatsBanner } from './Shared';
import { 
  Users, Luggage, Wifi, Zap, Phone, ArrowRight, ShieldCheck, 
  CheckCircle, Star, Calendar, Clock, DollarSign, ChevronDown, 
  ChevronUp, Sparkles, MapPin, BusFront, Car, Music, Wind, 
  Coffee, Info, Check, HelpCircle, Award, Compass, Shield, 
  AlertCircle, ChevronRight, FileText
} from 'lucide-react';

export default function FleetDetailClient({ data, slug }) {
  const { openQuoteWithData, setIsQuoteModalOpen } = useQuote();
  const [activeFaq, setActiveFaq] = useState(0);
  const [calcDuration, setCalcDuration] = useState('8h'); // '4h', '8h', '12h', '2d'

  const currentSlug = slug || (data.name.includes("56") ? "luxury-coach-bus-charter" : data.name.includes("Mini") ? "mini-coach-bus-charter" : data.name.includes("14") ? "14-passenger-van-service" : "school-bus-charter");

  // Dynamic cost estimates based on vehicle tier
  const getCalcMetrics = () => {
    const isLuxury = currentSlug === 'luxury-coach-bus-charter' || currentSlug === 'luxury-coach-bus-rental';
    const isMini = currentSlug === 'mini-coach-bus-charter' || currentSlug === 'mini-coach-bus-rental';
    const isVan = currentSlug === '14-passenger-van-service' || currentSlug === '14-passenger-van-rental';
    const isSchool = currentSlug === 'school-bus-charter' || currentSlug === 'school-bus-rental';

    let baseRate = 175;
    let maxPax = 56;
    let minPrices = { '4h': 750, '8h': 1450, '12h': 1850, '2d': 2950 };
    let maxPrices = { '4h': 950, '8h': 1750, '12h': 2250, '2d': 3600 };

    if (isMini) {
      baseRate = 140;
      maxPax = 32;
      minPrices = { '4h': 590, '8h': 1150, '12h': 1490, '2d': 2350 };
      maxPrices = { '4h': 750, '8h': 1390, '12h': 1790, '2d': 2850 };
    } else if (isVan) {
      baseRate = 115;
      maxPax = 14;
      minPrices = { '4h': 460, '8h': 850, '12h': 1150, '2d': 1750 };
      maxPrices = { '4h': 580, '8h': 1050, '12h': 1350, '2d': 2100 };
    } else if (isSchool) {
      baseRate = 105;
      maxPax = 48;
      minPrices = { '4h': 440, '8h': 750, '12h': 990, '2d': 1550 };
      maxPrices = { '4h': 540, '8h': 920, '12h': 1190, '2d': 1850 };
    }

    const minPrice = minPrices[calcDuration];
    const maxPrice = maxPrices[calcDuration];
    const perPaxEstimate = Math.round(minPrice / maxPax);

    return { minPrice, maxPrice, perPaxEstimate, maxPax };
  };

  const { minPrice, maxPrice, perPaxEstimate, maxPax } = getCalcMetrics();

  const handleOpenQuote = () => {
    openQuoteWithData("Toronto, ON", "", currentSlug);
  };

  // Structured Amenity Pillars
  const amenityPillars = [
    {
      title: "Seating & Interior Comfort",
      icon: Users,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      items: [
        data.name.includes("56") ? "56 Reclining high-back plush seating" : data.name.includes("Mini") ? "24 - 36 Ergonomic leather seats" : data.name.includes("14") ? "14 Individual contoured bucket seats" : "48 Adult / 56 Student bench seats",
        "Individual overhead reading lights & air vents",
        "Deep tinted UV-filtering privacy windows",
        "Spacious center walking aisle for easy boarding",
        "Optimal multi-zone heating and A/C climate control"
      ]
    },
    {
      title: "Luggage & Cargo Capacity",
      icon: Luggage,
      color: "text-red-600 bg-red-50 border-red-200",
      items: [
        data.luggage || "Ample luggage space for your group",
        data.name.includes("56") ? "Heated undercarriage bays (56+ large bags)" : data.name.includes("Mini") ? "Dedicated rear cargo trunk + overhead racks" : data.name.includes("14") ? "Deep rear luggage bay for 14 airport suitcases" : "In-cabin equipment and under-seat storage",
        "Full capacity for golf clubs, hockey bags, and ski equipment",
        "Weatherproof, secure, lockable storage compartments"
      ]
    },
    {
      title: "Audio, Tech & Connectivity",
      icon: Zap,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      items: [
        data.name.includes("56") ? "110V AC household outlets at every seat row" : "USB fast-charging power ports",
        "High-speed 5G Wi-Fi onboard",
        "Integrated PA microphone system for tour guides and hosts",
        data.name.includes("56") ? "Multi-screen flat panel video display monitors" : "Premium Bluetooth and AUX audio sound system",
        "GPS satellite tracking and dispatch connectivity"
      ]
    },
    {
      title: "Commercial Safety & Compliance",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      items: [
        "Ontario CVOR Master Rated Commercial Operator",
        "USDOT Authorized for Canadian-US Cross-Border Travel",
        "$10,000,000 Comprehensive Commercial Liability Insurance",
        "Fully Vetted, Licensed, Professional Commercial Drivers",
        "Strict 30-Day Preventative Ministry (MTO) Safety Inspections"
      ]
    }
  ];

  // Specific FAQs for this fleet model
  const fleetFaqs = data.faqs || [
    {
      q: `What is included in the rental price for the ${data.name}?`,
      a: `Every quote includes the vehicle charter, a certified professional commercial driver, all fuel costs, $10,000,000 commercial liability coverage, and pre-trip mechanical inspections. Highway 407 ETR tolls and parking fees can be included upon request or billed at actual cost.`
    },
    {
      q: `How far in advance should we reserve this vehicle?`,
      a: `For peak travel seasons in Ontario (May through October for weddings, conferences, and tours, and winter weekends for ski charters), we strongly recommend reserving 3 to 6 weeks in advance. However, our 24/7 dispatch team can accommodate last-minute bookings subject to fleet availability.`
    },
    {
      q: `Can we bring food and beverages aboard?`,
      a: `Yes! Guests are welcome to enjoy non-alcoholic beverages in capped containers and light dry snacks. We simply request that groups keep the vehicle reasonably clean. Alcoholic beverage consumption requires special municipal permitting.`
    },
    {
      q: `Is the driver's accommodation covered for overnight or multi-day trips?`,
      a: `For multi-day or overnight charters outside the Greater Toronto Area, the chartering group is asked to provide a private standard hotel room for the driver, or our dispatch office can arrange lodging and include it transparently as a flat reimbursement on your quote.`
    },
    {
      q: `What happens if our event schedule runs later than planned?`,
      a: `Our dispatchers and drivers are accustomed to dynamic event schedules. Overtime is billed at a straightforward hourly rate specified in your charter agreement, provided it complies with mandatory Canadian driver hours-of-service regulations.`
    }
  ];

  // Fleet Comparison Data
  const ALL_FLEET = [
    {
      slug: "14-passenger-van-service",
      name: "14-Passenger Van",
      pax: "14 Passengers",
      luggage: "14 Bags",
      restroom: "No",
      power: "USB Outlets",
      rate: "From $115/hr",
      bestFor: "Airport & VIP Shuttles"
    },
    {
      slug: "mini-coach-bus-charter",
      name: "24-36 Mini Coach",
      pax: "24-36 Passengers",
      luggage: "30 Bags",
      restroom: "Select Models",
      power: "USB & Power",
      rate: "From $140/hr",
      bestFor: "Corporate & Weddings"
    },
    {
      slug: "school-bus-charter",
      name: "48-56 School Bus",
      pax: "48 Adults / 56 Kids",
      luggage: "In-Cabin",
      restroom: "No",
      power: "No",
      rate: "From $105/hr",
      bestFor: "Field Trips & Camps"
    },
    {
      slug: "luxury-coach-bus-charter",
      name: "56 Luxury Coach Bus",
      pax: "56 Passengers",
      luggage: "56+ Large Bays",
      restroom: "Yes (Sanitized)",
      power: "110V & USB Every Row",
      rate: "From $175/hr",
      bestFor: "Conferences & Long Tours"
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-28 pb-20 font-sans">
      
      {/* 1. BREADCRUMB & TOP HEADER BAR */}
      <div className="container mx-auto px-4 max-w-6xl mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-4">
          <nav className="flex items-center space-x-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-blue-900 transition">Home</Link>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-slate-400">Our Fleet</span>
            <ChevronRight size={13} className="text-slate-400" />
            <span className="text-blue-900 font-bold">{data.shortName || data.name}</span>
          </nav>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 font-bold border border-red-200">
            <span>🍁</span>
            <span>Ontario CVOR & USDOT Safety Certified</span>
          </div>
        </div>

        {/* Executive Headline & Trust Line */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-black uppercase tracking-wider mb-2.5 border border-blue-100">
              <Sparkles size={12} className="text-red-600" />
              <span>{data.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {data.name}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5 max-w-3xl leading-relaxed font-normal">
              {data.desc}
            </p>
          </div>
          <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-200 flex-shrink-0">
            <div className="flex items-center gap-1.5 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-current" />
              ))}
              <span className="text-slate-900 font-black text-sm ml-1">4.9 / 5.0</span>
            </div>
            <span className="text-xs text-slate-500 font-semibold">Over 500+ Verified Group Charters</span>
          </div>
        </div>
      </div>

      {/* 2. MODERN ASYMMETRIC FLEET SHOWCASE */}
      <section className="container mx-auto px-4 max-w-6xl mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Widescreen Vehicle Showcase & Spec Matrix (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Widescreen Vehicle Photography */}
            <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-950">
              <img 
                src={data.img} 
                alt={data.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Capacity Badge */}
              <div className="absolute top-5 left-5 z-20">
                <span className="bg-white/95 backdrop-blur-md text-blue-950 px-4 py-2 rounded-full text-xs font-black shadow-lg flex items-center gap-2 border border-white/40">
                  <Users size={15} className="text-red-600" /> {data.pax}
                </span>
              </div>

              {/* Highway Fleet Spec Badge */}
              <div className="absolute bottom-5 right-5 z-20">
                <span className="bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-white/20">
                  Ontario Highway Fleet Spec
                </span>
              </div>
            </div>

            {/* Clean Amenity Specification Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-2 text-slate-400 mb-1">
                  <Users size={15} className="text-blue-900" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Seating</span>
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-900 truncate">
                  {data.pax}
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-2 text-slate-400 mb-1">
                  <Luggage size={15} className="text-amber-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Luggage</span>
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-900 truncate">
                  {data.luggage?.split('(')[0] || "Ample Space"}
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-2 text-slate-400 mb-1">
                  <Sparkles size={15} className="text-red-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Restroom</span>
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-900 truncate">
                  {data.name.includes("56") ? "Yes (Lavatory)" : data.name.includes("Mini") ? "Select Models" : "Rest Stops"}
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-2 text-slate-400 mb-1">
                  <Zap size={15} className="text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Tech</span>
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-900 truncate">
                  {data.name.includes("56") ? "110V & 5G Wi-Fi" : "USB & Wi-Fi"}
                </div>
              </div>
            </div>

            {/* Executive Highlights Row */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-600 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80">
                <CheckCircle size={13} className="text-green-600" /> Reclining plush seating
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80">
                <CheckCircle size={13} className="text-green-600" /> Multi-zone climate control
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80">
                <CheckCircle size={13} className="text-green-600" /> Professional driver included
              </span>
            </div>

          </div>

          {/* Right Column: Executive Rate & Reservation Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-blue-900 to-red-600"></div>

            {/* Pricing Header */}
            <div className="mb-6 pb-6 border-b border-slate-100">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                Charter Rate Breakdown
              </span>
              <div className="flex items-baseline justify-between gap-2">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
                    {data.rate}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 font-semibold block">Full Day Flat Rate</span>
                  <span className="text-base sm:text-lg font-black text-slate-800">
                    {data.dailyRate || "From $1,450 / day"}
                  </span>
                </div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 text-red-700 text-xs font-bold border border-red-100">
                <Award size={13} className="text-red-600 flex-shrink-0" />
                <span>Price Beat Guarantee: 5% Below Any Competitor</span>
              </div>
            </div>

            {/* Transparent Inclusions */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block">
                Standard Inclusions:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-green-600 flex-shrink-0" />
                  <span>Licensed Commercial Driver Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-green-600 flex-shrink-0" />
                  <span>Standard Fuel & GTA Mileage Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-green-600 flex-shrink-0" />
                  <span>$10,000,000 Commercial Liability Coverage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-green-600 flex-shrink-0" />
                  <span>Routine Ministry (MTO) Safety Inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-green-600 flex-shrink-0" />
                  <span>Flexible Date Changes & Free Quote Inquiry</span>
                </li>
              </ul>
            </div>

            {/* Direct Booking Actions */}
            <div className="space-y-3 pt-2">
              <button 
                onClick={handleOpenQuote}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 px-6 rounded-2xl transition shadow-lg flex justify-center items-center gap-2 text-base cursor-pointer hover:shadow-red-600/30 active:scale-98"
              >
                <span>Request Free Quote for This Bus</span>
                <ArrowRight size={18} />
              </button>
              <a 
                href="tel:(647)948-8424" 
                className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold py-3.5 px-5 rounded-2xl border border-slate-200 transition flex justify-center items-center gap-2 text-sm cursor-pointer"
              >
                <Phone size={16} className="text-blue-900" />
                <span>Call 24/7 Dispatch: (647) 948-8424</span>
              </a>
            </div>

            {/* Live Availability Status */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for Ontario Dispatch
              </span>
              <span className="font-medium text-slate-400">15-Min Response</span>
            </div>

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE BUS RENTAL COST ESTIMATOR */}
      <section className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mb-8">
            <span className="text-xs font-black text-red-400 uppercase tracking-widest bg-red-950/60 border border-red-800/40 px-3 py-1 rounded-full">
              Transparent Pricing Estimator
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-3 tracking-tight">
              Instant Rental Cost Calculator for the {data.shortName || data.name}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              Select your expected itinerary duration below to view estimated flat rates and per-passenger cost breakdowns.
            </p>
          </div>

          {/* Duration Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
            {[
              { id: '4h', label: '4-Hour Half Day', sub: 'Local Event / Shuttle' },
              { id: '8h', label: '8-Hour Full Day', sub: 'GTA & Niagara Falls' },
              { id: '12h', label: '12-Hour Day Trip', sub: 'Blue Mtn / Muskoka' },
              { id: '2d', label: '2-Day Weekend', sub: 'Montreal / Ottawa' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setCalcDuration(tab.id)}
                className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                  calcDuration === tab.id
                    ? 'bg-blue-600 text-white border-blue-400 shadow-lg ring-2 ring-blue-400/30'
                    : 'bg-slate-800/60 text-slate-300 border-slate-700/60 hover:bg-slate-800'
                }`}
              >
                <div className="font-bold text-xs sm:text-sm">{tab.label}</div>
                <div className="text-[11px] text-slate-300 mt-0.5 opacity-80">{tab.sub}</div>
              </button>
            ))}
          </div>

          {/* Calculator Output Grid */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Charter Total (CAD)</span>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()} <span className="text-sm font-bold text-slate-400">CAD</span>
              </div>
              <div className="text-xs text-emerald-400 font-semibold flex items-center justify-center md:justify-start gap-1 pt-1">
                <Check size={14} /> Works out to only ~<strong className="text-white">${perPaxEstimate} CAD</strong> per passenger for a full group!
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={handleOpenQuote}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black py-3.5 px-6 rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Lock In This Rate</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Included Features Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-400" /> Commercial Driver Included</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-400" /> Standard Fuel & Mileage Included</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-400" /> $10M Liability Coverage</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-green-400" /> Zero Hidden Surcharges</span>
          </div>

        </div>
      </section>

      {/* 4. COMPREHENSIVE AMENITY & SPEC PILLARS */}
      <section className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black text-blue-900 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Detailed Technical Specifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Engineered for Group Comfort & Performance
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Every vehicle in our fleet is maintained to rigorous MTO mechanical standards and sanitized before every dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {amenityPillars.map((pillar, i) => {
            const IconComp = pillar.icon;
            return (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${pillar.color}`}>
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900">{pillar.title}</h3>
                </div>
                <ul className="space-y-3">
                  {pillar.items.map((item, j) => (
                    <li key={j} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <CheckCircle size={16} className="text-green-600 mr-2.5 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. POPULAR USE CASES FOR THIS FLEET */}
      <section className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="bg-slate-100/70 border border-slate-200 rounded-3xl p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black text-red-600 uppercase tracking-widest bg-red-50 border border-red-100 px-3 py-1 rounded-full">
              Ideal Charter Applications
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
              Who Rents the {data.shortName || data.name}?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Customized itineraries tailored for various group sizes and trip logistics across Ontario.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Corporate Conferences",
                desc: "Delegates traveling to the Metro Toronto Convention Centre, Beanfield Centre, and hotel summits.",
                tag: "B2B Events"
              },
              {
                title: "Weddings & Celebrations",
                desc: "Seamless bridal party transfers, rehearsal dinners, and guest shuttles to Caledon & Niagara wineries.",
                tag: "Weddings"
              },
              {
                title: "Athletics & Teams",
                desc: "University sports squads, hockey tournaments, and ski trips requiring generous gear and stick space.",
                tag: "Sports"
              },
              {
                title: "Multi-Day Tour Expeditions",
                desc: "Sightseeing itineraries connecting Toronto with Niagara Falls, Ottawa, Montreal, and Algonquin Park.",
                tag: "Sightseeing"
              }
            ].map((uc, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {uc.tag}
                  </span>
                  <h4 className="text-base font-black text-slate-900 mt-2.5 mb-1.5">{uc.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ALL FLEET COMPARISON TABLE */}
      <section className="container mx-auto px-4 max-w-6xl mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-black text-blue-900 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Side-By-Side Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
            Compare Our Full Fleet Lineup
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Not sure if the {data.shortName || data.name} is the right size? Compare all vehicle options below.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white border-b border-slate-800">
                <th className="p-4 font-black">Vehicle Model</th>
                <th className="p-4 font-black">Capacity</th>
                <th className="p-4 font-black">Luggage</th>
                <th className="p-4 font-black">Restroom</th>
                <th className="p-4 font-black">Amenities</th>
                <th className="p-4 font-black">Starting Rate</th>
                <th className="p-4 font-black text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ALL_FLEET.map((f, i) => {
                const isCurrent = currentSlug === f.slug;
                return (
                  <tr key={i} className={`transition ${isCurrent ? 'bg-blue-50/70 font-semibold' : 'hover:bg-slate-50'}`}>
                    <td className="p-4">
                      <div className="font-black text-slate-900 flex items-center gap-2">
                        {f.name}
                        {isCurrent && (
                          <span className="bg-blue-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-500 font-normal">{f.bestFor}</span>
                    </td>
                    <td className="p-4 text-slate-700">{f.pax}</td>
                    <td className="p-4 text-slate-700">{f.luggage}</td>
                    <td className="p-4 text-slate-700">{f.restroom}</td>
                    <td className="p-4 text-slate-700">{f.power}</td>
                    <td className="p-4 font-black text-blue-900">{f.rate}</td>
                    <td className="p-4 text-right">
                      {isCurrent ? (
                        <button 
                          onClick={handleOpenQuote}
                          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-3 rounded-lg text-xs transition cursor-pointer shadow-xs"
                        >
                          Quote
                        </button>
                      ) : (
                        <Link 
                          href={`/${f.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-700 bg-white border border-slate-200 hover:border-blue-300 px-3 py-1.5 rounded-lg transition"
                        >
                          <span>View</span>
                          <ArrowRight size={12} />
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. TRUST AND STATS BANNER */}
      <section className="container mx-auto px-4 max-w-6xl mb-16">
        <TrustStatsBanner />
      </section>

      {/* 8. CLIENT REVIEWS */}
      {data.reviews && data.reviews.length > 0 && (
        <section className="container mx-auto px-4 max-w-6xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black text-blue-900 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Verified Client Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
              What Group Organizers Say About the {data.shortName || data.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.reviews.map((rev, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between relative hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(rev.rating || 5)].map((_, j) => (
                      <Star key={j} size={15} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{rev.text}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center flex-shrink-0">
                    {rev.author.charAt(0)}
                  </div>
                  <span className="font-bold text-xs text-slate-900">{rev.author}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="container mx-auto px-4 max-w-4xl mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest bg-red-50 border border-red-100 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Common logistical questions about chartering the {data.shortName || data.name}.
          </p>
        </div>

        <div className="space-y-3">
          {fleetFaqs.map((faq, i) => {
            const isOpen = activeFaq === i;
            return (
              <div 
                key={i} 
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : i)}
                  className="w-full py-4 px-5 text-left font-bold text-sm text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition cursor-pointer"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle size={16} className="text-blue-900 flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown size={18} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. INSTITUTIONAL CLIENT LOGOS */}
      <div className="mb-12">
        <ClientLogos />
      </div>

      {/* 11. FINAL HIGH-CONVERSION CTA BANNER */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-blue-900">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="bg-red-600 text-white font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
              Guaranteed Best Price in Ontario
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
              Ready to Reserve the {data.shortName || data.name}?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Lock in your dates with zero stress. Get a transparent, customized flat-rate CAD quote delivered to your inbox within 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-3">
              <button
                onClick={handleOpenQuote}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:shadow-red-600/40 text-base"
              >
                <span>Request Free Quote Now</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="tel:(647)948-8424"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl border border-white/20 transition flex items-center justify-center gap-2 text-sm"
              >
                <Phone size={16} /> (647) 948-8424
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
