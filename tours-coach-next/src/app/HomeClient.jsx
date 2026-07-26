"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useQuote } from '../context/QuoteContext';
import { Star, CalendarCheck, ShieldCheck, Map, Headphones, BusFront, Users, Briefcase, Trophy, Navigation, Car, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { QuoteForm, TrustStatsBanner } from '../components/Shared';
import { FLEET_DATA } from '../lib/data';
import { HeroSearch } from '../components/HeroSearch'; // <-- Import your Hero Search Bar

export default function HomePage() {
  const { setIsQuoteModalOpen } = useQuote();
  const [currentFleetIdx, setCurrentFleetIdx] = useState(0);
  const fleetList = Object.entries(FLEET_DATA);

  const nextFleet = () => setCurrentFleetIdx((prev) => (prev + 1) % fleetList.length);
  const prevFleet = () => setCurrentFleetIdx((prev) => (prev - 1 + fleetList.length) % fleetList.length);

  return (
    <div className="w-full">
      <section className="relative pt-32 pb-28 lg:pt-40 lg:pb-36 bg-blue-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img src="/home-hero.jpg" alt="Coach bus on road" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <div className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm mb-6">Canada's Premier Charter Bus Rentals</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">Trusted Coach Charters for Group Travel in Canada.</h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">Whether you need a coach for a large group or a minibus for a smaller trip, we've got you covered anywhere in Canada. Greater Toronto Area and beyond.</p>
              <div className="bg-white/15 backdrop-blur-md border border-white/20 p-4 rounded-lg flex items-start">
                <Star className="text-yellow-400 mr-4 flex-shrink-0 mt-1 fill-current" />
                <p className="text-sm font-medium italic">"With our price-beat guarantee, we promise to beat any competitor's comparable quote by 5%."</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full max-w-md lg:max-w-none">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* HERO SEARCH BAR OVERLAY */}
      <div className="container mx-auto px-4">
        <HeroSearch />
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CalendarCheck, title: "Easy Booking", desc: "Simple, efficient process to get your group on the road quickly." },
              { icon: ShieldCheck, title: "Keeping You Safe", desc: "Fully qualified and background-checked drivers for peace of mind." },
              { icon: Map, title: "Nationwide Coverage", desc: "Available in towns and cities across Canada, coast to coast." },
              { icon: Headphones, title: "Friendly Support", desc: "24/7 assistance from our dedicated customer care team." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4"><item.icon size={32} /></div>
                <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Charter Services for Every Occasion</h2>
            <p className="text-lg text-slate-600">No matter the size of your group or the destination, we have the perfect vehicle and service package to meet your specific needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: BusFront, title: "School Bus Rental", img: "/service-school.jpg", desc: "Safe, reliable, and cost-effective transportation for student field trips and local events." },
              { icon: Users, title: "Wedding & Engagements", img: "/service-wedding.jpg", desc: "Elegant shuttles ensuring your guests arrive safely and on time to your special day." },
              { icon: Briefcase, title: "Corporate Travel", img: "/service-corporate.jpg", desc: "Executive coaches equipped with Wi-Fi and power for meetings, events, and retreats." },
              { icon: Trophy, title: "Sports Groups", img: "/service-sports.jpg", desc: "Spacious undercarriage storage for equipment and comfortable legroom for athletes." },
              { icon: Navigation, title: "Tours & Excursions", img: "/service-tours.jpg", desc: "Panoramic windows and comfortable seating perfect for scenic sightseeing journeys." },
              { icon: Car, title: "Private Travel", img: "/service-private.jpg", desc: "Customized itineraries and flexible scheduling for family reunions and private groups." }
            ].map((service, i) => (
              <div key={i} className="group relative h-[360px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500" onClick={() => setIsQuoteModalOpen(true)}>
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-white/20 backdrop-blur-md text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 border border-white/30 transform group-hover:scale-110 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500 shadow-lg">
                    <service.icon size={26} />
                  </div>
                  <h3 className="font-bold text-2xl text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">{service.title}</h3>
                  <div className="overflow-hidden">
                     <p className="text-slate-200 text-sm mb-4 transform translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="flex items-center text-white font-bold text-sm uppercase tracking-wider group-hover:text-red-400 transition-colors duration-300">
                    Get a Quote <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Meet Our Modern Fleet</h2>
            <p className="text-lg text-slate-600">From luxury motorcoaches to efficient passenger vans, we have the perfect vehicle to accommodate your group size and travel needs safely and comfortably.</p>
          </div>
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row relative border border-slate-100 group/slider">
            <div className="md:w-1/2 relative min-h-[400px] md:min-h-[480px] overflow-hidden bg-slate-100">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10 pointer-events-none"></div>
              <img key={`img-${currentFleetIdx}`} src={fleetList[currentFleetIdx][1].img} alt={fleetList[currentFleetIdx][1].name} className="absolute inset-0 w-full h-full object-cover animate-soft-fade" />
              <button onClick={prevFleet} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md shadow-lg hover:bg-white hover:text-red-600 text-blue-900 p-3.5 rounded-full transition-all duration-300 hover:scale-110 opacity-100 md:opacity-0 md:group-hover/slider:opacity-100">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextFleet} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md shadow-lg hover:bg-white hover:text-red-600 text-blue-900 p-3.5 rounded-full transition-all duration-300 hover:scale-110 opacity-100 md:opacity-0 md:group-hover/slider:opacity-100">
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="md:w-1/2 p-8 lg:p-14 flex flex-col justify-center relative bg-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>
              <div key={`content-${currentFleetIdx}`} className="animate-soft-fade">
                <div className="inline-flex items-center bg-blue-50 border border-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                  <Users size={16} className="mr-2 text-red-600" /> Capacity: {fleetList[currentFleetIdx][1].pax}
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5 tracking-tight">{fleetList[currentFleetIdx][1].name}</h3>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">{fleetList[currentFleetIdx][1].desc}</p>
                <div className="mt-auto">
                  <Link href={`/${fleetList[currentFleetIdx][0]}`} className="inline-flex items-center justify-center w-full sm:w-auto bg-slate-900 text-white font-bold py-3.5 px-7 rounded-xl hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group/btn">
                    View Vehicle Details <ArrowRight size={18} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex space-x-3 mt-10 items-center">
                    {fleetList.map((_, idx) => (
                      <button key={idx} onClick={() => setCurrentFleetIdx(idx)} className={`h-2.5 rounded-full transition-all duration-500 ease-out ${idx === currentFleetIdx ? 'w-10 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.4)]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`} aria-label={`Go to slide ${idx + 1}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4 border-b border-gray-200"><TrustStatsBanner /></section>
    </div>
  );
}