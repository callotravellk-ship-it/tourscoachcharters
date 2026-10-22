"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useQuote } from '../../context/QuoteContext';
import { 
  Calculator, Check, ArrowRight, Phone, ShieldCheck, 
  HelpCircle, ChevronDown, CheckCircle, AlertCircle, 
  Users, DollarSign, Calendar, Clock, BusFront, FileText, Star
} from 'lucide-react';
import { PRICING_GUIDE_DATA } from '../../lib/data';

export default function PricingClient() {
  const { setQuoteData, setIsQuoteModalOpen } = useQuote();

  // Interactive Calculator State
  const [selectedVehicle, setSelectedVehicle] = useState('coach-56');
  const [selectedDuration, setSelectedDuration] = useState('fullday');
  const [customPax, setCustomPax] = useState(50);
  const [activeFaq, setActiveFaq] = useState(null);

  // Pricing Model (CAD)
  const vehiclePricing = {
    'coach-56': {
      name: "56 Passenger Luxury Coach",
      seats: 56,
      rates: {
        'halfday': { min: 800, max: 1050, label: "Half-Day (4-5 hrs)" },
        'fullday': { min: 1450, max: 1850, label: "Full-Day (8-10 hrs)" },
        'weekend': { min: 2800, max: 3600, label: "2-Day Weekend" },
        'multiday': { min: 4200, max: 5400, label: "3-Day Tour" }
      },
      desc: "Full-size highway motorcoach with clean onboard restroom, Wi-Fi, 110V power outlets, and massive undercarriage luggage bays for 56 suitcases."
    },
    'mini-32': {
      name: "24 - 36 Passenger Mini Coach",
      seats: 32,
      rates: {
        'halfday': { min: 650, max: 850, label: "Half-Day (4-5 hrs)" },
        'fullday': { min: 1150, max: 1450, label: "Full-Day (8-10 hrs)" },
        'weekend': { min: 2200, max: 2800, label: "2-Day Weekend" },
        'multiday': { min: 3300, max: 4200, label: "3-Day Tour" }
      },
      desc: "Mid-size executive coach offering superior downtown Toronto maneuverability, plush seating, and overhead luggage racks."
    },
    'van-14': {
      name: "14 Passenger High-Roof Van",
      seats: 14,
      rates: {
        'halfday': { min: 450, max: 600, label: "Half-Day (3-4 hrs)" },
        'fullday': { min: 850, max: 1050, label: "Full-Day (8-10 hrs)" },
        'weekend': { min: 1600, max: 2000, label: "2-Day Weekend" },
        'multiday': { min: 2400, max: 3000, label: "3-Day Tour" }
      },
      desc: "High-roof transit van with walk-in standing clearance, rear cargo luggage compartment, and Pearson YYZ airport priority."
    },
    'school-56': {
      name: "48 - 56 Passenger School Bus",
      seats: 56,
      rates: {
        'halfday': { min: 420, max: 550, label: "Half-Day (3-4 hrs)" },
        'fullday': { min: 750, max: 950, label: "Full-Day (6-8 hrs)" },
        'weekend': { min: 1400, max: 1800, label: "2-Day Weekend" },
        'multiday': { min: 2100, max: 2700, label: "3-Day Tour" }
      },
      desc: "The most economical per-passenger transport across Ontario. Safety certified for school field trips and youth camp outings."
    }
  };

  const currentVehicle = vehiclePricing[selectedVehicle];
  const currentRate = currentVehicle.rates[selectedDuration];
  const avgCost = Math.round((currentRate.min + currentRate.max) / 2);
  const costPerPerson = Math.round(avgCost / (customPax > 0 ? customPax : 1));

  const handleOpenQuote = () => {
    setQuoteData((prev) => ({
      ...prev,
      vehicle: currentVehicle.name,
      passengers: customPax
    }));
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800">
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-slate-900 bg-[url('/home-hero.jpg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-red-600/90 text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 shadow">
            <span>🇨🇦</span> 2026 Canadian Charter Bus Pricing Guide
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-md">
            Charter Bus Rental Toronto Prices & Canada Rates
          </h1>
          
          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transparent, all-inclusive pricing in Canadian Dollars (CAD). Learn how much it costs to rent a 56-passenger coach bus, minibus, or passenger van across Toronto, Ontario, and Canada.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleOpenQuote}
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Get Your Custom Written Quote</span>
              <ArrowRight size={18} />
            </button>
            <a 
              href="tel:(416) 269-9555"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold py-3.5 px-6 rounded-xl transition-all flex items-center gap-2"
            >
              <Phone size={18} className="text-red-400" />
              <span>Call (416) 269-9555</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CAD CHARTER BUS COST CALCULATOR */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-blue-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                  <Calculator size={16} /> Interactive Estimator
                </span>
                <h2 className="text-2xl sm:text-3xl font-black">Canadian Charter Bus Cost Estimator</h2>
              </div>
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                Prices in $ CAD
              </span>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Controls */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Vehicle Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    1. Select Vehicle Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {Object.entries(vehiclePricing).map(([key, v]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setSelectedVehicle(key);
                          setCustomPax(v.seats);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${selectedVehicle === key ? 'border-red-600 bg-red-50/50 shadow-sm' : 'border-slate-200 hover:border-slate-300 bg-white'}`}
                      >
                        <div className="font-extrabold text-sm text-slate-900">{v.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">Up to {v.seats} Passengers</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    2. Select Trip Duration
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'halfday', name: 'Half Day', sub: '4-5 hrs' },
                      { id: 'fullday', name: 'Full Day', sub: '8-10 hrs' },
                      { id: 'weekend', name: '2 Days', sub: 'Weekend' },
                      { id: 'multiday', name: '3+ Days', sub: 'Multi-Day' }
                    ].map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setSelectedDuration(d.id)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${selectedDuration === d.id ? 'border-blue-900 bg-blue-50 text-blue-900 font-extrabold shadow-sm' : 'border-slate-200 hover:border-slate-300 text-slate-700'}`}
                      >
                        <div className="text-xs font-bold">{d.name}</div>
                        <div className="text-[10px] text-slate-500">{d.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Passenger Count Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                    <span>3. Anticipated Group Size:</span>
                    <span className="text-red-600 text-sm">{customPax} Passengers</span>
                  </div>
                  <input 
                    type="range"
                    min="5"
                    max={currentVehicle.seats}
                    value={customPax}
                    onChange={(e) => setCustomPax(parseInt(e.target.value, 10))}
                    className="w-full accent-red-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>5 pax</span>
                    <span>Max: {currentVehicle.seats} pax</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {currentVehicle.desc}
                </p>

              </div>

              {/* Right Summary Box */}
              <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Estimated Price Range (CAD)
                  </div>
                  
                  <div className="text-3xl sm:text-4xl font-black text-white mt-1 mb-2">
                    ${currentRate.min} – ${currentRate.max} <span className="text-xs font-medium text-slate-300">CAD</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 mb-6 border border-white/15">
                    <div className="text-xs text-slate-300">Estimated Cost Per Passenger:</div>
                    <div className="text-xl sm:text-2xl font-black text-green-400 mt-0.5">
                      ~${costPerPerson} CAD <span className="text-xs font-normal text-slate-300">per person</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      (Divided across {customPax} passengers)
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-200 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                      <span>Professional CVOR driver included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                      <span>$10M Commercial passenger insurance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                      <span>Standard fuel & vehicle preparation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                      <span>24/7 Canadian dispatch support</span>
                    </div>
                  </div>
                </div>

                <div>
                  <button 
                    onClick={handleOpenQuote}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <span>Request Exact Quote for This Trip</span>
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    No credit card required • 15-minute response time
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. IN-DEPTH LONG-TAIL PRICING GUIDE CONTENT */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">

          {/* Section 1: How much does it cost to rent a charter bus in Canada */}
          <article className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
              How Much Does It Cost to Rent a Charter Bus in Canada?
            </h2>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              On average, renting a charter bus in Canada costs between <strong>$140 and $225 CAD per hour</strong>, or <strong>$1,250 to $1,850 CAD per full day</strong> for a standard 56-passenger luxury coach. For mid-sized groups, a 24 to 36 passenger minibus rental ranges from <strong>$140 to $175 CAD per hour</strong>, while school bus charters average <strong>$95 to $135 CAD per hour</strong>.
            </p>
            <p className="text-base text-slate-700 leading-relaxed mb-6">
              Unlike rideshare services or car rentals, charter bus pricing is all-inclusive of a certified professional commercial driver, comprehensive commercial insurance ($10,000,000+), and standard operating fuel. On a per-passenger basis, chartering a bus is consistently the most economical way to move large groups in Ontario and across Canada.
            </p>

            {/* Average Rates Summary Table */}
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse border border-slate-200 rounded-xl overflow-hidden text-sm">
                <thead className="bg-slate-100 text-slate-900 font-bold">
                  <tr>
                    <th className="p-3 border-b">Vehicle Type</th>
                    <th className="p-3 border-b">Capacity</th>
                    <th className="p-3 border-b">Hourly Rate (CAD)</th>
                    <th className="p-3 border-b">Daily Rate (CAD)</th>
                    <th className="p-3 border-b">Per-Km (Long Distance)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {PRICING_GUIDE_DATA.averageRates.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">{r.vehicle}</td>
                      <td className="p-3 text-slate-600">{r.ideal.split(',')[0]}</td>
                      <td className="p-3 text-red-600 font-bold">{r.hourly}</td>
                      <td className="p-3 text-slate-800 font-medium">{r.daily}</td>
                      <td className="p-3 text-slate-600">{r.perKm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* Section 2: Charter Bus Rental Toronto Prices */}
          <article className="prose prose-slate max-w-none pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
              Charter Bus Rental Toronto Prices & GTA Rates
            </h2>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              Charter bus rental prices in Toronto and the Greater Toronto Area (GTA) are influenced by local traffic patterns, venue drop-off permits, and minimum hourly rules:
            </p>
            <ul className="space-y-3 text-slate-700 text-base mb-6">
              <li>
                <strong>Minimum Hour Requirements:</strong> Most reputable Toronto charter companies require a 4 to 5-hour minimum booking for local GTA charters. Even if your transfer takes only 45 minutes (e.g. Pearson Airport to Downtown Toronto), the minimum fee covers driver staging, pre-trip vehicle safety inspection, and deadhead mileage.
              </li>
              <li>
                <strong>Downtown Toronto Logistics:</strong> Major venues like the Metro Toronto Convention Centre (MTCC), Scotiabank Arena, and Rogers Centre have specific commercial charter bus marshaling yards. Tours Coach Charters manages all drop-off staging and off-site staging permits seamlessly.
              </li>
              <li>
                <strong>Highway 407 ETR Tolls:</strong> If your group requests express routing across York Region, Peel, or Durham via Highway 407, toll charges will be clearly itemized on your quote.
              </li>
            </ul>
          </article>

          {/* Section 3: Coach Bus vs Minibus Rental for Events */}
          <article className="prose prose-slate max-w-none pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
              Coach Bus vs Minibus Rental for Events: How to Choose
            </h2>
            <p className="text-base text-slate-700 leading-relaxed mb-6">
              Choosing between a full-size 56-passenger coach bus and a 24 to 36 passenger minibus depends primarily on group size, trip distance, and restroom requirements:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-slate-200 rounded-xl overflow-hidden text-sm">
                <thead className="bg-blue-900 text-white font-bold">
                  <tr>
                    <th className="p-3.5">Feature</th>
                    <th className="p-3.5">56-Passenger Coach Bus</th>
                    <th className="p-3.5">24 - 36 Passenger Minibus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {PRICING_GUIDE_DATA.comparisonCoachVsMini.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-3.5 font-bold text-slate-900">{c.feature}</td>
                      <td className="p-3.5 text-slate-700">{c.coach}</td>
                      <td className="p-3.5 text-slate-700">{c.mini}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base text-slate-700 leading-relaxed mt-4">
              <strong>Rule of Thumb:</strong> If your group has more than 35 passengers or is traveling longer than 2 hours outside Toronto, book a 56-passenger luxury coach for the onboard restroom and expansive legroom. For shorter local wedding shuttles, corporate team dinners, or navigating tight winery lanes in Niagara, the minibus is agile, elegant, and cost-effective.
            </p>
          </article>

          {/* Section 4: How Many People Fit in a Coach Bus? */}
          <article className="prose prose-slate max-w-none pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
              How Many People Fit in a Coach Bus? Complete Seating Capacity Guide
            </h2>
            <p className="text-base text-slate-700 leading-relaxed mb-6">
              When booking group transportation, accurately matching your passenger headcount prevents paying for empty seats or leaving guests behind. Here is the exact capacity breakdown:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {PRICING_GUIDE_DATA.capacityGuide.map((cap, i) => (
                <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <div className="font-extrabold text-lg text-slate-900 mb-1">{cap.type}</div>
                  <div className="text-red-600 font-bold text-sm mb-2">
                    Seats: {cap.adultCap} Adults {cap.childCap !== cap.adultCap ? `/ Up to ${cap.childCap} Children` : ''}
                  </div>
                  <div className="text-xs text-slate-600 mb-1">
                    <strong>Luggage:</strong> {cap.bags} Suitcases
                  </div>
                  <div className="text-xs text-slate-600">
                    <strong>Best for:</strong> {cap.bestUse}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Section 5: Best Charter Bus Companies in Toronto: What to Look For */}
          <article className="prose prose-slate max-w-none pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
              Best Charter Bus Companies in Toronto: 6 Critical Things to Look For
            </h2>
            <p className="text-base text-slate-700 leading-relaxed mb-6">
              Not all bus companies operate to the same safety and reliability standards. Before signing a charter agreement, verify these 6 factors:
            </p>

            <div className="space-y-4">
              {PRICING_GUIDE_DATA.checklistCompanies.map((check, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base mb-1">{check.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{check.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Section 6: Key Cost Factors in Canada */}
          <article className="prose prose-slate max-w-none pt-8 border-t border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
              6 Key Factors That Determine Your Charter Bus Quote
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRICING_GUIDE_DATA.costFactors.map((f, i) => (
                <div key={i} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600"></span>
                    {f.factor}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </article>

        </div>
      </section>

      {/* 4. PRICING FAQ ACCORDION */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Pricing Frequently Asked Questions</h2>
            <p className="text-slate-600">Clear answers to common payment, deposit, and rate inquiries.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is included in my charter bus rental quote?",
                a: "Your quote includes the bus, a professional licensed driver, standard commercial fuel, full passenger liability insurance ($10M), and vehicle preparation. Overnight driver lodging, road tolls (like 407 ETR), venue parking fees, and 13% Ontario HST are clearly itemized."
              },
              {
                q: "Is a deposit required to reserve a bus?",
                a: "Yes. A standard deposit (typically 20% to 30%) is required to lock in vehicle availability on your dates. The remaining balance is due prior to trip departure."
              },
              {
                q: "What is your cancellation policy?",
                a: "Trips canceled 14 or more days prior to departure receive a full refund minus a nominal administrative fee. Cancellations made within 14 days may forfeit the deposit. Detailed terms are clearly outlined in your agreement."
              },
              {
                q: "Is driver gratuity included in the price?",
                a: "Driver gratuity is not automatically included unless requested. Industry standard gratuity in Canada is 10% to 15% of the charter cost, given directly to your driver for exceptional service."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors cursor-pointer"
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

          <div className="mt-12 bg-blue-900 text-white rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-black mb-3">Ready to Lock In the Best Rate for Your Trip?</h3>
            <p className="text-slate-200 max-w-xl mx-auto mb-6 text-sm">
              Our Canadian charter dispatchers review every route individually to ensure you receive the most competitive price without sacrificing safety or comfort.
            </p>
            <button 
              onClick={handleOpenQuote}
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 px-8 rounded-xl transition-all shadow-lg text-sm cursor-pointer"
            >
              Get Your Free Custom Quote Now
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
