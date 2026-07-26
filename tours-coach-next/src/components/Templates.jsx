"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useQuote } from '../context/QuoteContext';
import { COMPANY_INFO } from '../lib/data';
import { TrustStatsBanner } from './Shared';
import { CheckCircle, Route, ShieldCheck, Star, Map, Phone, Mail, ArrowRight, ChevronDown, Users, Trophy, CalendarCheck, Send } from 'lucide-react';
import * as Icons from 'lucide-react';

export const AboutUs = () => {
  const { setIsQuoteModalOpen } = useQuote();
  return (
    <div className="w-full bg-slate-50 flex flex-col font-sans">
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-800 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="/about-banner.jpg" alt="About Canada Tours Coach" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.src = "/home-hero.jpg" }} />
        <div className="relative z-20 container mx-auto px-4 animate-fade-in-up">
          <div className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm mb-6 uppercase tracking-wider">Our Story</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Driven By Excellence</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">Canada Tours Coach LTD has been the trusted partner for group transportation across the nation, delivering safety, comfort, and reliability on every journey.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight">Canada's Premier Transportation Partner</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">At Canada Tours Coach LTD, we believe that the journey is just as important as the destination. For over 15 years, we have specialized in providing top-tier charter bus rentals, corporate shuttles, and specialized event transportation.</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">Headquartered in Pickering, Ontario, we proudly service the Greater Toronto Area and coordinate long-distance travel from coast to coast. From intimate family gatherings to massive corporate conventions and the upcoming FIFA 2026 World Cup, our logistics experts and professional drivers ensure your group moves effortlessly.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setIsQuoteModalOpen(true)} className="inline-flex items-center justify-center bg-red-600 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Book Your Journey <ArrowRight size={18} className="ml-2" />
              </button>
              <a href="tel:4162699555" className="inline-flex items-center justify-center bg-white text-blue-800 font-bold py-3.5 px-8 rounded-xl border-2 border-blue-800 hover:bg-blue-50 transition-all duration-300 shadow-sm">
                <Phone size={18} className="mr-2" /> Call (416) 269-9555
              </a>
            </div>
            
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl translate-x-4 translate-y-4 -z-10 opacity-20"></div>
            <img src="/home-hero.jpg" alt="Our Fleet on the road" className="rounded-3xl shadow-xl w-full object-cover h-[400px]" />
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Safety First", icon: ShieldCheck, desc: "Every vehicle is rigorously maintained and every driver is fully certified. Your group's safety is our uncompromising priority." },
            { title: "Premium Comfort", icon: Star, desc: "Modern amenities, spacious seating, and climate control ensure that your passengers can relax and enjoy the ride." },
            { title: "Reliable Logistics", icon: Route, desc: "From multi-bus event coordination to simple airport transfers, our dispatch team ensures punctuality down to the minute." }
          ].map((value, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-50 text-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6"><value.icon size={32} /></div>
              <h3 className="font-bold text-2xl mb-4 text-slate-900">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-16"><TrustStatsBanner /></div>
    </div>
  );
};

export const ContactUs = () => {
  const { setIsQuoteModalOpen } = useQuote();
  const [submitted, setSubmitted] = useState(false);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full bg-slate-50 flex flex-col font-sans">
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-800 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="/contact-banner.jpg" alt="Contact Canada Tours Coach" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.src = "/home-hero.jpg" }} />
        <div className="relative z-20 container mx-auto px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">Whether you need a quick quote, have a question about our fleet, or want to coordinate a massive event, our team is here to help 24/7.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-5/12">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10 opacity-70"></div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Contact Details</h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-blue-50 p-4 rounded-2xl mr-5 group-hover:bg-blue-100 transition-colors text-blue-800"><Map size={24} /></div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Head Office</h3>
                    <p className="text-slate-600 leading-relaxed text-sm"><strong>Canada Tours Coach LTD</strong><br/>1315 Pickering Parkway, Suite 300<br/>Pickering, ON L1V 7G5</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-blue-50 p-4 rounded-2xl mr-5 group-hover:bg-blue-100 transition-colors text-blue-800"><Phone size={24} /></div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone Number</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">Call us anytime for immediate assistance or booking inquiries.<br/><a href="tel:4162699555" className="text-blue-800 font-bold hover:text-red-600 transition-colors text-lg mt-1 block">(416) 269-9555</a></p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-blue-50 p-4 rounded-2xl mr-5 group-hover:bg-blue-100 transition-colors text-blue-800"><Mail size={24} /></div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email Address</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">Send us an email and our logistics team will respond promptly.<br/><a href="mailto:info@tourscoachcharter.com" className="text-blue-800 font-bold hover:text-red-600 transition-colors block mt-1">info@tourscoachcharter.com</a></p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col gap-3">
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-0.5 text-lg flex justify-center items-center gap-2">
                  Get an Instant Quote <ArrowRight size={20} />
                </button>
                <a href="tel:4162699555" className="w-full bg-white text-slate-700 font-bold py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex justify-center items-center gap-2 shadow-sm text-lg">
                  <Phone size={20} className="text-blue-800" /> Or call (416) 269-9555
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12">
             <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 h-full">
               <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Send Us a Message</h2>
               <p className="text-slate-500 mb-8">Have a general question? Drop us a note below.</p>
               {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-2xl text-center my-12 animate-fade-in-up">
                    <CheckCircle className="mx-auto mb-4" size={56} />
                    <h4 className="font-bold text-xl">Message Sent!</h4>
                    <p className="text-sm mt-2">Thank you for reaching out. A member of our team will contact you shortly.</p>
                  </div>
                ) : (
                 <form onSubmit={handleMessageSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div><label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Name</label><input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800 focus:bg-white outline-none transition-all" placeholder="John Doe" /></div>
                     <div><label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label><input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800 focus:bg-white outline-none transition-all" placeholder="john@example.com" /></div>
                   </div>
                   <div><label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label><input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800 focus:bg-white outline-none transition-all" placeholder="(555) 123-4567" /></div>
                   <div><label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">How can we help?</label><textarea required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800 focus:bg-white outline-none transition-all" rows="5" placeholder="Write your message here..."></textarea></div>
                   <button type="submit" className="w-full sm:w-auto bg-slate-900 text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-800 transition-colors shadow-md flex justify-center items-center group">
                     Send Message <Send size={18} className="ml-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                 </form>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FifaPage = () => {
  const { setIsQuoteModalOpen } = useQuote();
  return (
    <div className="w-full bg-gray-50 flex flex-col font-sans overflow-hidden">
      <style>{`
        @keyframes kenBurns { 0% { transform: scale(1); } 100% { transform: scale(1.12); } }
        .animate-ken-burns { animation: kenBurns 20s ease-out forwards; transform-origin: center; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-150 { animation-delay: 150ms; } .delay-300 { animation-delay: 300ms; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .animate-float { animation: float 3.5s ease-in-out infinite; }
        @keyframes shine { 0% { left: -100%; } 20% { left: 200%; } 100% { left: 200%; } }
        .animate-shine::after { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%); transform: skewX(-20deg); animation: shine 4s infinite; }
      `}</style>
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-800 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src="/fifa-banner.jpg" alt="FIFA World Cup 2026 Banner" className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        <div className="relative z-20 container mx-auto px-4">
          <div className="inline-block bg-red-600 text-white font-bold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.5)] animate-fade-in-up" style={{ opacity: 0 }}>Official Event Transportation</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg animate-fade-in-up delay-150" style={{ opacity: 0 }}>FIFA World Cup 2026™ <br className="hidden md:block"/> Coach Charters</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-300" style={{ opacity: 0 }}>Premium group transportation and logistics for matches in Toronto and Vancouver.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-black text-blue-800 mb-6">Experience the Global Game in Canada</h2>
            <p className="text-gray-700 mb-5 leading-relaxed text-lg">The FIFA World Cup 2026™ is coming to North America, and Canada is proud to host matches in Toronto and Vancouver. With millions of fans, corporate sponsors, and teams descending on these cities, reliable group transportation is absolutely essential.</p>
            <p className="text-gray-700 mb-5 leading-relaxed text-lg">Tours Coach Charters offers comprehensive charter bus solutions for the tournament. Whether you need VIP corporate shuttles to BMO Field in Toronto, large-scale fan transfers to BC Place in Vancouver, or complete team logistics, our modern fleet is ready.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-transparent hover:border-red-600 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,51,160,0.15)] transition-all duration-300 group">
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center group-hover:text-red-600 transition-colors"><Map className="text-red-600 mr-2" size={24} /> Toronto Stadium</h3>
                <p className="text-gray-600 text-sm mb-3">Providing dedicated shuttles from Pearson Airport (YYZ), downtown hotels, and fan zones directly to Toronto Stadium. Avoid game-day traffic and transit crowding.</p>
                <div className="bg-slate-50 p-3 rounded text-sm text-slate-700 border border-slate-100">
                  <strong className="block mb-2 text-blue-900 border-b border-slate-200 pb-1">Official Match Schedule:</strong>
                  <ul className="space-y-1">
                    <li><strong>Jun 12:</strong> Canada vs. Bosnia and Herzegovina</li>
                    <li><strong>Jun 17:</strong> Ghana vs. Panama</li>
                    <li><strong>Jun 20:</strong> Germany vs. Cote d'Ivoire</li>
                    <li><strong>Jun 23:</strong> Panama vs. Croatia</li>
                    <li><strong>Jun 26:</strong> Senegal vs. Iraq</li>
                    <li><strong>Jul 2:</strong> Round of 32 Match</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-transparent hover:border-red-600 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,51,160,0.15)] transition-all duration-300 group">
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center group-hover:text-red-600 transition-colors"><Map className="text-red-600 mr-2" size={24} /> Vancouver Stadium</h3>
                <p className="text-gray-600 text-sm mb-3">Seamless transportation across the Lower Mainland. Shuttles from YVR Airport and downtown Vancouver straight to BC Place, ensuring your group arrives together, safely, and on time.</p>
                <div className="bg-slate-50 p-3 rounded text-sm text-slate-700 border border-slate-100">
                  <strong className="block mb-2 text-blue-900 border-b border-slate-200 pb-1">Official Match Schedule:</strong>
                  <ul className="space-y-1">
                    <li><strong>Jun 13:</strong> Türkiye vs. Australia</li>
                    <li><strong>Jun 18:</strong> Qatar vs. Canada</li>
                    <li><strong>Jun 21:</strong> Egypt vs. New Zealand</li>
                    <li><strong>Jun 24:</strong> Switzerland vs. Canada</li>
                    <li><strong>Jun 26:</strong> Belgium vs. New Zealand</li>
                    <li><strong>Jul 2:</strong> Round of 32 Match</li>
                    <li><strong>Jul 7:</strong> Round of 16 Match</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-blue-800 rounded-xl shadow-2xl border border-blue-700 p-8 sticky top-32 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-red-600 rounded-full blur-[60px] opacity-40 pointer-events-none"></div>
              <Trophy size={56} className="text-red-500 mb-6 animate-float drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]" />
              <h3 className="text-2xl font-bold mb-4">High Demand Alert</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">Transportation inventory for the FIFA World Cup 2026™ is booking up rapidly. We strongly advise corporate groups, travel agencies, and large fan clubs to secure their charter buses immediately.</p>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center text-sm bg-white/10 backdrop-blur-sm p-3 rounded border border-white/5"><Users className="text-red-400 mr-3" size={20} /> Group Sizes: 14 to 56+</div>
                <div className="flex items-center text-sm bg-white/10 backdrop-blur-sm p-3 rounded border border-white/5"><CalendarCheck className="text-red-400 mr-3" size={20} /> Multi-Day Charters Available</div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 relative z-10 flex flex-col gap-3">
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition shadow-[0_0_20px_rgba(220,38,38,0.4)] flex justify-center items-center overflow-hidden relative animate-shine group">
                  <span className="relative z-10 flex items-center">Secure Your Fleet <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" /></span>
                </button>
                <a href="tel:4162699555" className="w-full bg-blue-900 text-white font-bold py-3.5 rounded-lg hover:bg-blue-950 transition border border-blue-700 flex justify-center items-center gap-2">
                  <Phone size={18} /> Call (416) 269-9555
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FleetTemplate = ({ data }) => {
  const { setIsQuoteModalOpen } = useQuote();
  return (
    <div className="pt-32 pb-24 w-full bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row mb-16 border border-slate-100 transform transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] relative">
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[500px] group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 opacity-60"></div>
            <img src={data.img} alt={data.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-white/90 backdrop-blur-md text-blue-900 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border border-white/20">
                <Users size={18} className="text-red-600" /> {data.pax}
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center relative bg-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">{data.name}</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">{data.desc}</p>
            <div className="mb-12">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Premium Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.features.map((feat, i) => (
                  <li key={i} className="flex items-center bg-slate-50 border border-slate-100 p-3.5 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-colors group cursor-default">
                    <div className="bg-white p-1.5 rounded-full shadow-sm mr-3 group-hover:scale-110 transition-transform"><CheckCircle size={16} className="text-green-500" /></div>
                    <span className="text-slate-700 font-medium text-sm">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <button onClick={() => setIsQuoteModalOpen(true)} className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-0.5 text-lg flex justify-center items-center gap-2">
                Request a Quote <ArrowRight size={20} />
              </button>
              <a href="tel:4162699555" className="w-full sm:w-auto bg-white text-slate-700 font-bold py-4 px-8 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex justify-center items-center gap-2 text-lg">
                <Phone size={20} className="text-blue-800" /> (416) 269-9555
              </a>
            </div>

          </div>
        </div>
        <div className="mb-20"><TrustStatsBanner /></div>
        {data.reviews && data.reviews.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4 tracking-tight">Client Experiences</h2>
              <p className="text-slate-600 text-lg">Hear directly from groups who have traveled aboard the {data.name}.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.reviews.map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-blue-600"></div>
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(review.rating)].map((_, j) => (<Star key={j} size={18} className="fill-current" />))}
                  </div>
                  <p className="text-slate-700 mb-8 flex-grow leading-relaxed font-medium">"{review.text}"</p>
                  <div className="flex items-center pt-4 border-t border-slate-100 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-3">{review.author.charAt(0)}</div>
                    <p className="font-bold text-sm text-slate-900">{review.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const GenericPage = ({ title, subtitle, bgImage }) => {
  const { setIsQuoteModalOpen } = useQuote();
  return (
    <div className="w-full min-h-screen pt-24 bg-gray-50 flex flex-col">
      <div className="relative py-24 bg-blue-800 text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src={bgImage || "/destination-default.jpg"} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{title}</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Plan Your Group Transportation</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            At Tours Coach Charters, we specialize in providing tailored charter solutions for this specific destination or event. Our dedicated logistics team will ensure your itinerary runs flawlessly. Contact us to discuss group sizes, specific pick-up locations, and special requirements.
          </p>
          <div className="bg-blue-50 border-l-4 border-red-600 p-6 rounded-r-lg flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-bold text-lg mb-1">Ready to book your trip to {title}?</h3>
              <p className="text-sm text-gray-700">Fill out our quote form or call us directly at <strong>{COMPANY_INFO.phone}</strong>.</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <button onClick={() => setIsQuoteModalOpen(true)} className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-900 transition font-bold shadow-md whitespace-nowrap">
                Get a Free Quote
              </button>
              <a href="tel:4162699555" className="text-center font-bold text-blue-800 hover:text-red-600 transition flex items-center justify-center gap-2">
                <Phone size={16} /> Call (416) 269-9555
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export const DestinationTemplate = ({ data }) => {
  const { setIsQuoteModalOpen } = useQuote();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full bg-gray-50 flex flex-col font-sans">
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-800 text-center">
         <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img src={data.img} alt={`${data.city} Banner`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-20 container mx-auto px-4">
            <div className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm mb-6 uppercase tracking-wider">PREMIER {data.city} SERVICE</div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{data.title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">{data.subtitle}</p>
          </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-black text-blue-800 mb-6">Compact Luxury & Maximum Comfort in {data.city}</h2>
            {data.content.map((p, i) => (<p key={i} className="text-gray-700 mb-5 leading-relaxed text-lg">{p}</p>))}

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {data.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                    <button className="w-full px-6 py-4 text-left font-bold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      {faq.q}
                      <ChevronDown size={20} className={`transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (<div className="px-6 pb-4 pt-2 text-gray-600 bg-gray-50 border-t border-gray-100">{faq.a}</div>)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 sticky top-32 border-t-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Specialized {data.city} Services</h3>
              <div className="space-y-6">
                {data.highlights.map((item, i) => {
                  const IconComp = Icons[item.icon];
                  return (
                  <div key={i} className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mr-4 flex-shrink-0">
                      {IconComp ? <IconComp size={24} /> : <Map size={24} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                )})}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
                <p className="text-sm text-gray-600 mb-2 text-center">Ready to arrange your {data.city} transportation?</p>
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-blue-800 text-white font-bold py-4 rounded-lg hover:bg-blue-900 transition shadow-lg flex justify-center items-center">
                  Request a Quote <ArrowRight size={18} className="ml-2" />
                </button>
                <a href="tel:4162699555" className="w-full bg-white text-blue-800 font-bold py-3.5 rounded-lg hover:bg-gray-50 transition border border-gray-200 shadow-sm flex justify-center items-center gap-2">
                  <Phone size={18} /> Call (416) 269-9555
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceTemplate = ({ data }) => {
  const { setIsQuoteModalOpen } = useQuote();

  return (
    <div className="w-full bg-slate-50 flex flex-col font-sans min-h-screen">
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-800 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src={data.img} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 container mx-auto px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg">{data.title}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md leading-relaxed">{data.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex-grow">
        {/* Highlights Grid overlaying the banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 -mt-24 relative z-30">
          {data.highlights.map((item, i) => {
            const IconComp = Icons[item.icon] || Icons.CheckCircle;
            return (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-800 rounded-xl flex items-center justify-center mb-6">
                  <IconComp size={28} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-black text-blue-900 mb-6 tracking-tight">Premium {data.title}</h2>
            <div className="space-y-6 mb-12 text-lg text-slate-700 leading-relaxed">
              {data.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {data.faqs.map((faq, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-lg text-blue-800 mb-2 flex items-start">
                      <Icons.ChevronRight className="text-red-600 mr-2 flex-shrink-0 mt-1" size={20} />
                      {faq.q}
                    </h4>
                    <p className="text-slate-600 pl-7 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky CTA Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-blue-900 rounded-3xl shadow-2xl border border-blue-800 p-8 text-center sticky top-32">
              <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-600/30">
                <Icons.CalendarCheck size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Book Your Fleet</h3>
              <p className="text-blue-200 mb-8 leading-relaxed text-sm">
                Contact our logistics team today to secure premium transportation for your upcoming event or corporate requirement.
              </p>
              <div className="flex flex-col gap-3">
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-0.5 flex justify-center items-center gap-2">
                  Get an Instant Quote <ArrowRight size={20} />
                </button>
                <a href="tel:4162699555" className="w-full bg-blue-800 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-blue-950 transition-all border border-blue-700 flex justify-center items-center gap-2">
                  <Phone size={18} /> Call (416) 269-9555
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};