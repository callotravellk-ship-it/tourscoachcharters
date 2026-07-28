import React from 'react';
import { QuoteForm, TrustStatsBanner } from '../../components/Shared';
import { Star, ShieldCheck, Phone, CheckCircle, Headphones, Award } from 'lucide-react';

// SEO & Campaign Metadata
export const metadata = {
  title: "Request a Free Charter Bus Quote | Canada Tours Coach",
  description: "Get an instant, customized charter bus quote for your group travel across Canada. Guaranteed price beat by 5%. Fast 24/7 support.",
  alternates: {
    canonical: "https://www.tourscoachcharter.com/request-a-quote",
  },
};

export default function RequestQuotePage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pt-28 pb-20 font-sans">
      
      {/* Hero Header Banner */}
      <section className="bg-blue-900 text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
        <img 
          src="/home-hero.jpg" 
          alt="Charter Bus Rental" 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
        />
        <div className="relative z-20 container mx-auto max-w-5xl text-center">
          <div className="inline-block bg-red-600 text-white font-bold px-4 py-1 rounded-full text-xs md:text-sm mb-4 uppercase tracking-wider shadow-md">
            Fast & Free Charter Quotes
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            Get Your Instant Quote
          </h1>
          <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Fill out the form below for guaranteed competitive pricing, coast-to-coast availability, and 24/7 dedicated support.
          </p>
        </div>
      </section>

      {/* Main Form & Trust Highlights Section */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Column: Form Wrapper */}
          <div className="lg:w-7/12 w-full">
            <div className="shadow-2xl rounded-2xl border border-slate-100 overflow-hidden">
              <QuoteForm />
            </div>
          </div>

          {/* Right Column: Campaign Conversion Incentives */}
          <div className="lg:w-5/12 w-full space-y-8 sticky top-28">
            
            {/* Direct Call Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 text-center">
              <h3 className="text-xl font-black text-slate-900 mb-2">Prefer to Speak with an Agent?</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Need immediate booking assistance or managing complex multi-bus itineraries? Call our dispatch office directly.
              </p>
              <a 
                href="tel:4162699555" 
                className="w-full bg-blue-800 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-900 transition-all shadow-lg flex items-center justify-center gap-2 text-lg"
              >
                <Phone size={22} className="text-red-400" /> (416) 269-9555
              </a>
            </div>

            {/* Price Beat Guarantee Card */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-blue-800 text-white p-3 rounded-xl flex-shrink-0">
                <Award size={28} />
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg mb-1">Price-Beat Guarantee</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We promise to beat any competitor's comparable written quote by <strong>5%</strong>.
                </p>
              </div>
            </div>

            {/* Why Book With Us Checklist */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
              <h3 className="text-lg font-black text-slate-900 mb-4 border-b border-slate-100 pb-3">
                Why Choose Canada Tours Coach?
              </h3>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Fully Insured & Certified:</strong> Professional, background-checked commercial drivers.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Modern Diverse Fleet:</strong> From 14-passenger executive vans to 56-passenger luxury motorcoaches.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Coast-to-Coast Coverage:</strong> Servicing Greater Toronto Area, Ontario, and nationwide Canadian routes.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="container mx-auto px-4 pt-8">
        <TrustStatsBanner />
      </section>

    </div>
  );
}