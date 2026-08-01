"use client";
import React from 'react';
import { useQuote } from '../../context/QuoteContext';
import { 
  Snowflake, Mountain, ShieldCheck, MapPin, Users, 
  ArrowRight, Flame, CheckCircle, 
  BusFront, PhoneCall 
} from 'lucide-react';

export default function WinterDestinationsClient() {
  const { setIsQuoteModalOpen, setQuoteData } = useQuote();

  const handleBookWinterTrip = (destinationName) => {
    if (setQuoteData) {
      setQuoteData(prev => ({
        ...prev,
        info: `Winter Charter Inquiry for: ${destinationName}`
      }));
    }
    setIsQuoteModalOpen(true);
  };

  const winterDestinations = [
    {
      name: "Blue Mountain Resort",
      location: "Collingwood, Ontario",
      tag: "Top Ontario Ski Hub",
      img: "/blue-mountain.jpg",
      desc: "Ontario's premier alpine resort. Perfect for corporate ski days, school ski clubs, and weekend family retreats from the GTA.",
      features: ["Large ski equipment bays", "Highway 400/26 route specialists", "Village drop-off & pickup"]
    },
    {
      name: "Mount St. Louis Moonstone & Snow Valley",
      location: "Barrie / Coldwater, Ontario",
      tag: "Day Trips & School Clubs",
      img: "/snow-valley.jpg",
      desc: "Ideal for quick day trips from Toronto. Popular for youth sports groups, school field trips, and beginner-to-intermediate ski tours.",
      features: ["Rapid 90-min GTA transit", "High-capacity school bus & coach options", "On-time return loops"]
    },
    {
      name: "Mont-Tremblant & Laurentians",
      location: "Mont-Tremblant, Québec",
      tag: "Multi-Day Luxury Escapes",
      img: "/mont-tremblant.jpg",
      desc: "World-class ski village experience. We provide comfortable multi-day motorcoach charters from Ontario and Quebec urban hubs.",
      features: ["56-passenger luxury coaches", "Onboard restrooms & Wi-Fi", "Interstate winter certified"]
    },
    {
      name: "Niagara Falls Festival of Lights",
      location: "Niagara Falls, Ontario",
      tag: "Holiday & Senior Tours",
      img: "/niagara-lights.jpg",
      desc: "Experience Canada's largest outdoor light festival. Scenic evening tours for church groups, senior associations, and holiday family outings.",
      features: ["Panoramic window coaches", "Heated climate control", "Custom illumination route stops"]
    },
    {
      name: "Banff & Lake Louise",
      location: "Banff National Park, Alberta",
      tag: "Rocky Mountain Expeditions",
      img: "/banff-winter.jpg",
      desc: "Breathtaking mountain scenery and powder skiing. Executive charter shuttles connecting Calgary Airport (YYC) to Banff lodges.",
      features: ["Airport arrival greeting", "Heavy equipment storage", "Extreme winter traction equipped"]
    },
    {
      name: "Whistler Blackcomb",
      location: "Whistler, British Columbia",
      tag: "Premier West Coast Skiing",
      img: "/whistler-winter.jpg",
      desc: "Sea-to-Sky Highway group transit for international tour groups, corporate hospitality trips, and ski teams.",
      features: ["Experienced mountain drivers", "Luxury executive vans & coaches", "Flight status tracking"]
    }
  ];

  const winterFeatures = [
    {
      icon: Flame,
      title: "Heated & Climate Controlled",
      desc: "Keep your group warm and comfortable with high-capacity heating systems on every vehicle."
    },
    {
      icon: ShieldCheck,
      title: "Snow-Ready & Safety Certified",
      desc: "All coaches feature winter traction tires, rigorous maintenance inspections, and expert snow-weather drivers."
    },
    {
      icon: Mountain,
      title: "Massive Undercarriage Storage",
      desc: "Dedicated bays designed specifically to transport skis, snowboards, boots, and heavy luggage safely."
    },
    {
      icon: Users,
      title: "Professional Uniformed Drivers",
      desc: "Relax and enjoy the scenery while our fully insured, professional drivers navigate winter highway conditions."
    }
  ];

  const winterFaqs = [
    {
      q: "Is there extra charge for carrying ski and snowboard gear?",
      a: "No! All our 56-passenger luxury motorcoaches and mini coaches feature undercarriage storage bays included in your charter price."
    },
    {
      q: "How do you ensure safety during winter snowstorms?",
      a: "Safety is our top priority. Our drivers receive specialized winter driving training, and our dispatch team continuously monitors weather conditions and road closures to adjust timing proactively."
    },
    {
      q: "Can we book one-day round trips for school ski clubs or corporate retreats?",
      a: "Yes. We regularly run early morning departures to resorts like Blue Mountain or Mount St. Louis Moonstone, with evening return loops."
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-36 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-10"></div>
          <img src="/home-hero.jpg" alt="Winter Highway Transit" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-20">
          <div className="inline-flex items-center bg-blue-600/30 border border-blue-400/30 text-blue-200 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
            <Snowflake size={16} className="mr-2 text-blue-400 animate-spin-slow" /> Winter Group Charters
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-3xl">
            Safe & Comfortable Charter Transit to Canada's Premier Winter Destinations
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
            From daily ski trips to Blue Mountain to multi-day resort retreats in Tremblant and Banff. Leave the snowy driving and mountain parking to our experienced, professional chauffeurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleBookWinterTrip('General Winter Trip')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center text-base"
            >
              Get Free Winter Quote <ArrowRight size={18} className="ml-2" />
            </button>
            <a
              href="tel:4162699555"
              className="bg-slate-800/80 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl border border-slate-700 transition flex items-center justify-center text-base"
            >
              <PhoneCall size={18} className="mr-2 text-red-500" /> (416) 269-9555
            </a>
          </div>
        </div>
      </section>

      {/* 2. WINTER ADVANTAGES */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {winterFeatures.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 hover:shadow-md transition">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DESTINATIONS GRID */}
      <section className="py-20 container mx-auto max-w-6xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Popular Canadian Winter Charter Routes
          </h2>
          <p className="text-slate-600 text-base">
            We operate fully equipped group buses across key winter corridors in Ontario, Quebec, Alberta, and British Columbia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winterDestinations.map((dest, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300">
              <div className="h-52 relative overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-all z-10"></div>
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  onError={(e) => { e.target.src = '/home-hero.jpg'; }} // Fallback image
                />
                <span className="absolute top-4 left-4 z-20 bg-blue-900/90 backdrop-blur-md text-white font-bold text-xs px-3 py-1.5 rounded-full border border-blue-700">
                  {dest.tag}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center text-slate-500 text-xs font-semibold mb-1">
                    <MapPin size={14} className="mr-1 text-red-600" /> {dest.location}
                  </div>
                  <h3 className="font-black text-slate-900 text-xl mb-2">{dest.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{dest.desc}</p>
                  
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {dest.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center">
                        <CheckCircle size={14} className="text-green-600 mr-2 shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleBookWinterTrip(dest.name)}
                  className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors duration-300 flex items-center justify-center text-sm shadow-sm"
                >
                  Book Trip to {dest.name.split(' ')[0]} <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DRIVER NOTICE BANNER */}
      <section className="container mx-auto max-w-6xl px-4 mb-16">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 text-white p-3 rounded-xl shrink-0 mt-1 md:mt-0">
              <BusFront size={24} />
            </div>
            <div>
              <h4 className="font-bold text-blue-950 text-base">Professional Driver Included With Every Charter</h4>
              <p className="text-blue-800 text-sm mt-0.5">
                All winter trips include a fully licensed, professional driver experienced in winter highway conditions. We do not offer self-drive rentals.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs px-5 py-3 rounded-lg shrink-0 transition"
          >
            Request Winter Itinerary
          </button>
        </div>
      </section>

      {/* 5. WINTER FAQS */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl px-4 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Winter Travel FAQs</h2>
            <p className="text-slate-600 text-sm">Everything you need to know about booking group winter charters.</p>
          </div>

          <div className="space-y-4">
            {winterFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-slate-900 text-base mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}