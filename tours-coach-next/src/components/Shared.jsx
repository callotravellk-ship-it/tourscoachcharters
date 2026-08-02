"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useQuote } from '../context/QuoteContext';
import { Phone, Mail, ChevronDown, Menu, X, ShieldCheck, Map, Headphones, Award, Route, Send, ArrowRight, CheckCircle } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../lib/data';

// --- GEOAPIFY IMPORTS ---
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

// --- FIREBASE IMPORTS ---
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const Facebook = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
export const Twitter = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
export const Youtube = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const { setIsQuoteModalOpen } = useQuote();

  const currentPath = pathname.replace(/^\/+/, '') || 'home';

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="bg-blue-800 text-white py-2 px-4 md:px-8 text-sm flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-6 mb-2 sm:mb-0">
          <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center hover:text-red-400 transition">
            <Mail size={16} className="mr-2" /> {COMPANY_INFO.email}
          </a>
          <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center hover:text-red-400 transition font-bold">
            <Phone size={16} className="mr-2" /> {COMPANY_INFO.phone}
          </a>
        </div>
        <div className="flex space-x-4">
          <Facebook size={18} className="cursor-pointer hover:text-red-400" />
          <Twitter size={18} className="cursor-pointer hover:text-red-400" />
          <Youtube size={18} className="cursor-pointer hover:text-red-400" />
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Tours Coach Charters Logo" className="h-10 md:h-12 w-auto object-contain cursor-pointer" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8 font-semibold text-gray-700">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.id} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <button className={`flex items-center hover:text-blue-800 transition ${currentPath === link.id ? 'text-blue-800' : ''}`}>
                  {link.title}
                  <ChevronDown size={16} className="ml-1" />
                </button>
              ) : (
                <Link href={`/${link.id}`} className={`flex items-center hover:text-blue-800 transition ${currentPath === link.id ? 'text-blue-800' : ''}`}>
                  {link.title}
                </Link>
              )}

              {link.dropdown && activeDropdown === link.id && (
                <div className="absolute top-full left-0 pt-2">
                  <div className={`${link.dropdown.length > 5 ? 'w-96 grid grid-cols-2 p-2 gap-1' : 'w-48 py-2'} bg-white shadow-xl rounded-md border border-gray-100`}>
                    {link.dropdown.map(drop => (
                      <Link
                        key={drop.id}
                        href={`/${drop.id}`}
                        className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-800 transition text-sm rounded-md"
                      >
                        {drop.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition font-bold shadow-md"
          >
            Get Free Quote
          </button>
        </div>

        <button className="lg:hidden text-blue-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* --- UPDATED MOBILE MENU CONTAINER --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl h-[calc(100vh-100px)] overflow-y-auto pb-28">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_LINKS.map(link => (
              <div key={link.id}>
                {link.dropdown ? (
                  <button className="font-bold text-gray-800 text-left w-full hover:text-blue-800">
                    {link.title}
                  </button>
                ) : (
                  <Link 
                    href={`/${link.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-bold text-gray-800 text-left w-full hover:text-blue-800"
                  >
                    {link.title}
                  </Link>
                )}
                {link.dropdown && (
                  <div className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-red-600">
                    {link.dropdown.map(drop => (
                      <Link
                        key={drop.id}
                        href={`/${drop.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-left text-gray-600 hover:text-blue-800 py-1"
                      >
                        {drop.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
              <button 
                onClick={() => { setIsQuoteModalOpen(true); setIsMobileMenuOpen(false); }}
                className="bg-red-600 text-white w-full py-3 rounded-md font-bold mt-4 shadow-md hover:bg-red-700"
              >
                Get Free Quote
              </button>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-red-600">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <Link href="/" className="mb-6 bg-white inline-block p-2 rounded-lg cursor-pointer block">
          <img src="/logo.png" alt="Tours Coach Charters Logo" className="h-10 w-auto object-contain" />
        </Link>
        <p className="text-sm mb-4">Canada's Premier Charter Bus Service. From corporate retreats to school trips, we provide reliable transportation from coast to coast.</p>
      </div>
      
      <div>
        <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start"><Map size={18} className="mr-2 text-red-600 mt-1 flex-shrink-0" /> {COMPANY_INFO.address}</li>
          <li className="flex items-center"><Phone size={18} className="mr-2 text-red-600" /> {COMPANY_INFO.phone}</li>
          <li className="flex items-center"><Mail size={18} className="mr-2 text-red-600" /> {COMPANY_INFO.email}</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm flex flex-col items-start">
          <li><Link href="/about" className="hover:text-red-500 transition">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-red-500 transition">Contact Us</Link></li>
          <li><Link href="/luxury-coach-bus-charter" className="hover:text-red-500 transition">Our Fleet</Link></li>
          <li><Link href="/charter-bus-service-toronto" className="hover:text-red-500 transition">Destinations</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold text-lg mb-4">Newsletter</h4>
        <p className="text-sm mb-4">Get the latest news and travel tips straight to your inbox.</p>
        <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your Email Address" className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-600 text-white" />
          <button className="bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700 transition">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-sm text-center">
      &copy; {new Date().getFullYear()} Canada Tours Coach LTD. All rights reserved.
    </div>
  </footer>
);

export const QuoteForm = ({ onClose }) => {
  const { quoteData, setQuoteData } = useQuote();
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [tripType, setTripType] = useState('return');
  
  const [departDate, setDepartDate] = useState('');
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!quoteData.pickup || !quoteData.destination) {
      alert("Please ensure both Pickup and Destination locations are selected.");
      return;
    }

    setIsSending(true);
    const form = e.target;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    payload.pickup = quoteData.pickup;
    payload.destination = quoteData.destination;
    payload.tripType = tripType;

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Email sending failed");
      }

      if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
        addDoc(collection(db, "leads"), {
          ...payload,
          status: "New",
          createdAt: serverTimestamp(),
          quotedPrice: null,
          assignedVehicle: "",
        }).catch(err => console.error("Firebase save error:", err));
      } else {
        console.warn("Firebase API Key missing in environment variables. CRM save skipped.");
      }

      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Charter Bus Quote Request',
          currency: 'CAD'
        });
      }

      setSubmitted(true);
      form.reset();
      setTripType('return');
      setDepartDate('');
      setQuoteData({ pickup: '', destination: '', vehicle: 'luxury-coach-bus-charter' });
      setTimeout(() => setSubmitted(false), 5000);

    } catch (error) {
      console.error(error);
      alert("Network error. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`bg-white p-6 md:p-8 rounded-lg shadow-2xl relative z-10 border-t-4 border-red-600 ${onClose ? 'max-h-[600px] overflow-y-auto custom-scrollbar' : ''}`}>
      
      <style>{`
        .geoapify-autocomplete-input { width: 100%; padding: 0.5rem 0.75rem; font-size: 0.875rem; border: none; outline: none; background: transparent; }
        .geoapify-autocomplete-items { position: absolute; z-index: 99; width: 100%; background: white; border: 1px solid #e2e8f0; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); margin-top: 4px; }
        .geoapify-autocomplete-item { padding: 0.5rem 0.75rem; cursor: pointer; font-size: 0.875rem; color: #334155; line-height: 1.4; }
        .geoapify-autocomplete-item:hover { background-color: #f1f5f9; color: #1e3a8a; font-weight: 600; }
        .geoapify-close-button { display: none; }
      `}</style>

      {onClose && (
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-20">
          <X size={24} />
        </button>
      )}
      <h3 className="text-2xl font-bold text-blue-800 mb-2">Request a Charter Quote</h3>
      <p className="text-gray-600 text-sm mb-6">Fill out the details below to get your accurate price.</p>

{/* --- SELF-DRIVE DETERRENT BADGE --- */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6 rounded-r-lg shadow-sm">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-0.5">
            <span className="text-lg leading-none">🛡️</span>
          </div>
          <div className="ml-3">
            <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wide">
              Professional Driver Included
            </h3>
            <p className="mt-1 text-xs text-blue-800 leading-snug">
              Please note: All Tours Coach Charters include a professional, uniformed driver. <strong>We do not offer self-drive services.</strong>
            </p>
          </div>
        </div>
      </div>
      
      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-lg text-center my-12 animate-fade-in-up">
          <CheckCircle className="mx-auto mb-4" size={56} />
          <h4 className="font-bold text-xl">Request Received!</h4>
          <p className="text-sm mt-2">Our logistics team is calculating your quote and will contact you via email or phone shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                First Name <span className="text-red-600 normal-case tracking-normal font-normal ml-1">(Required)</span>
              </label>
              <input required name="firstName" type="text" className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="John" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                Last Name <span className="text-red-600 normal-case tracking-normal font-normal ml-1">(Required)</span>
              </label>
              <input required name="lastName" type="text" className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="Doe" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                Email Address <span className="text-red-600 normal-case tracking-normal font-normal ml-1">(Required)</span>
              </label>
              <input required name="email" type="email" className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                Phone Number <span className="text-red-600 normal-case tracking-normal font-normal ml-1">(Required)</span>
              </label>
              <input required name="phone" type="tel" className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="(555) 123-4567" />
            </div>
          </div>

          <GeoapifyContext apiKey={process.env.NEXT_PUBLIC_GEOAPIFY_KEY || ""}>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                  Pickup Location <span className="text-red-600 normal-case tracking-normal font-normal ml-1">(Required)</span>
                </label>
                <div className="relative w-full bg-white border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-800 transition-all text-sm">
                  <GeoapifyGeocoderAutocomplete
                    placeholder="Start typing an address..."
                    filterByCountryCode={["ca"]}
                    value={quoteData.pickup}
                    placeSelect={(place) => {
                      if(place) setQuoteData({ ...quoteData, pickup: place.properties.formatted });
                    }}
                    onUserInput={(value) => {
                      setQuoteData({ ...quoteData, pickup: value });
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                  Destination <span className="text-red-600 normal-case tracking-normal font-normal ml-1">(Required)</span>
                </label>
                <div className="relative w-full bg-white border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-800 transition-all text-sm">
                  <GeoapifyGeocoderAutocomplete
                    placeholder="Start typing an address..."
                    filterByCountryCode={["ca"]}
                    value={quoteData.destination}
                    placeSelect={(place) => {
                      if(place) setQuoteData({ ...quoteData, destination: place.properties.formatted });
                    }}
                    onUserInput={(value) => {
                      setQuoteData({ ...quoteData, destination: value });
                    }}
                  />
                </div>
              </div>
            </div>
          </GeoapifyContext>

          <div className="flex space-x-6 py-1">
            <label className="flex items-center text-sm font-bold text-gray-700 cursor-pointer">
              <input type="radio" name="tripType" value="return" checked={tripType === 'return'} onChange={() => setTripType('return')} className="mr-2 w-4 h-4 text-blue-800 border-gray-300" />
              Round Trip
            </label>
            <label className="flex items-center text-sm font-bold text-gray-700 cursor-pointer">
              <input type="radio" name="tripType" value="oneway" checked={tripType === 'oneway'} onChange={() => setTripType('oneway')} className="mr-2 w-4 h-4 text-blue-800 border-gray-300" />
              One Way
            </label>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                Departure Date <span className="text-red-600 normal-case tracking-normal font-normal ml-1">(Required)</span>
              </label>
              <input 
                required 
                name="departDate" 
                type="date" 
                min={today}
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" 
              />
            </div>
            {tripType === 'return' && (
              <div className="animate-fade-in-up">
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                  Return Date <span className="text-red-600 normal-case tracking-normal font-normal ml-1">(Required)</span>
                </label>
                <input 
                  required 
                  name="returnDate" 
                  type="date" 
                  min={departDate || today} 
                  className="w-full px-3 py-2 bg-white border border-gray-300 text-gray-900 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" 
                />
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                Pick Up Time <span className="text-red-600 normal-case tracking-normal font-normal ml-1">(Required)</span>
              </label>
              <input required name="pickupTime" type="time" className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" />
            </div>
            {tripType === 'return' && (
              <div className="animate-fade-in-up">
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                  Return Time <span className="text-red-600 normal-case tracking-normal font-normal ml-1">(Required)</span>
                </label>
                <input 
                  required 
                  name="returnTime" 
                  type="time" 
                  className="w-full px-3 py-2 bg-white border border-gray-300 text-gray-900 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" 
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                Passengers <span className="text-red-600 normal-case tracking-normal font-normal ml-1">(Required)</span>
              </label>
              <input required name="passengers" type="number" min="1" className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="e.g. 45" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
                Select Charter Fleet Type <span className="text-gray-400 normal-case tracking-normal font-normal ml-1">(Optional)</span>
              </label>
              <select 
                name="vehicle" 
                value={quoteData.vehicle}
                onChange={(e) => setQuoteData({ ...quoteData, vehicle: e.target.value })}
                className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none bg-white text-sm"
              >
                <option value="any">No Preference</option>
                <option value="luxury-coach-bus-charter">Luxury Coach (Driver Included)</option>
                <option value="mini-coach-bus-charter">Mini Coach (Driver Included)</option>
                <option value="14-passenger-van-service">Passenger Van (Driver Included)</option>
                <option value="school-bus-charter">School Bus</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">
              Additional Information <span className="text-gray-400 normal-case tracking-normal font-normal ml-1">(Optional)</span>
            </label>
            <textarea name="info" className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" rows="3" placeholder="Any specific requirements, stops, or itinerary details?"></textarea>
          </div>
          <button disabled={isSending} type="submit" className={`w-full bg-blue-800 text-white font-bold py-3 rounded-md hover:bg-blue-900 transition shadow-lg mt-4 flex justify-center items-center ${isSending ? 'opacity-75 cursor-not-allowed' : ''}`}>
            {isSending ? 'Sending Request...' : <>Submit Charter Request <ArrowRight className="ml-2" size={18} /></>}
          </button>
          <p className="text-xs text-center text-gray-500 mt-2">
            <ShieldCheck size={12} className="inline mr-1 text-green-600" /> Your information is secure.
          </p>
        </form>
      )}
    </div>
  );
};

export const AnimatedCounter = ({ value, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOut * value));
      if (percentage < 1) window.requestAnimationFrame(step);
      else setCount(value);
    };
    window.requestAnimationFrame(step);
  }, [value, duration, isVisible]);

  return <span ref={domRef}>{count}{suffix}</span>;
};

export const TrustStatsBanner = () => (
  <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl py-16 px-6 md:px-12 my-8">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-[-30%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-30%] right-[-10%] w-[50%] h-[50%] bg-red-600/20 blur-[120px] rounded-full"></div>
    </div>
    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 lg:gap-12 text-center">
      {[
        { value: 15, suffix: "+", label: "Years Experience", icon: Award },
        { value: 5000, suffix: "+", label: "Successful Trips", icon: Route },
        { value: 100, suffix: "%", label: "Fully Insured", icon: ShieldCheck },
        { value: 24, suffix: "/7", label: "Client Support", icon: Headphones }
      ].map((stat, i) => (
        <div key={i} className="flex flex-col items-center group cursor-default">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-red-600 rounded-full blur opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-red-600 group-hover:border-red-500 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 shadow-xl">
              <stat.icon size={28} />
            </div>
          </div>
          <div className="text-5xl md:text-5xl lg:text-6xl font-black bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent mb-3 leading-none tracking-tight group-hover:scale-105 transition-transform duration-500">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors duration-300">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'CHAT_WIDGET_STATE') setIsChatOpen(event.data.isOpen);
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe 
      src="https://multi-agent-chat-rho.vercel.app/?mode=embed&site=Coach+Charter" 
      title="Live Support"
      allowtransparency="true"
      style={{
        position: 'fixed', bottom: '0', right: '0', 
        width: isChatOpen ? '400px' : '150px', height: isChatOpen ? '600px' : '150px', 
        border: 'none', zIndex: 999999, background: 'transparent', pointerEvents: 'auto', transition: 'all 0.3s ease-in-out'
      }}
    />
  );
};