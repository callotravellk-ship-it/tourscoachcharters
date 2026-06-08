import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, Mail, ChevronDown, Menu, X, 
  ShieldCheck, CalendarCheck, Map, Headphones, BusFront, Users, 
  Briefcase, Trophy, Navigation, Car, Star, CheckCircle, ArrowRight,
  Plane, Landmark, Building2, ChevronLeft, ChevronRight,
  Award, Route
} from 'lucide-react';

// Custom Brand Icons
const Facebook = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const Twitter = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const Youtube = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);

const COMPANY_INFO = {
  name: "Tours Coach Charters",
  phone: "(416) 269-9555",
  email: "info@tourscoachcharter.com",
  address: "1315 Pickering Parkway, Suite 300, Pickering, ON L1V 7G5"
};

const NAV_LINKS = [
  { title: "Home", id: "home" },
  { 
    title: "Our Fleet", 
    id: "fleet",
    dropdown: [
      { title: "Luxury Coach Bus", id: "luxury-coach-bus-rental" },
      { title: "Mini Coach Bus", id: "mini-coach-bus-rental" },
      { title: "14 Passenger Van", id: "14-passenger-van-rental" },
      { title: "School Bus", id: "school-bus-rental" }
    ]
  },
  {
    title: "Destinations",
    id: "destinations",
    dropdown: [
      { title: "Toronto", id: "charter-bus-rental-toronto" },
      { title: "Scarborough", id: "charter-bus-rental-scarborough" },
      { title: "Ajax", id: "charter-bus-rental-ajax" },
      { title: "Pickering", id: "charter-bus-rental-pickering" },
      { title: "Hamilton", id: "charter-bus-rental-hamilton" },
      { title: "North York", id: "charter-bus-rental-north-york" },
      { title: "Aurora", id: "charter-bus-rental-aurora" },
      { title: "Woodbridge", id: "charter-bus-rental-woodbridge" },
      { title: "Vaughan", id: "charter-bus-rental-vaughan" },
      { title: "Brampton", id: "charter-bus-rental-brampton" },
      { title: "Milton", id: "charter-bus-rental-milton" },
      { title: "Mississauga", id: "charter-bus-rental-mississauga" },
      { title: "Oshawa", id: "charter-bus-rental-oshawa" },
      { title: "Burlington", id: "charter-bus-rental-burlington" },
      { title: "Guelph", id: "charter-bus-rental-guelph" },
      { title: "Brantford", id: "charter-bus-rental-brantford" },
      { title: "Bolton", id: "charter-bus-rental-bolton" },
      { title: "Barrie", id: "charter-bus-rental-barrie" }
    ]
  },
  { title: "Winter", id: "winter-destinations" },
  { title: "FIFA 2026", id: "fifa-world-cup-2026-charters" }
];

const FLEET_DATA = {
  "luxury-coach-bus-rental": {
    name: "Luxury Coach Bus",
    pax: "56 Passengers",
    desc: "Experience ultimate comfort for long-distance group travel. Our luxury coaches are equipped with premium amenities to ensure a smooth and enjoyable ride across Canada.",
    features: ["Reclining seats", "Climate control", "Onboard restroom", "Entertainment systems", "Ample luggage space", "Wi-Fi enabled"],
    img: "/fleet-luxury.jpg",
    reviews: [
      { author: "Sarah Jenkins, Corporate Events", rating: 5, text: "Absolutely pristine coach! We rented this for a multi-day corporate tour from Toronto to Ottawa. The Wi-Fi and comfortable seats made all the difference for our team." },
      { author: "Mark D.", rating: 5, text: "Smooth ride all the way. The onboard restroom was very clean and the driver was incredibly professional. Highly recommended for large groups." },
      { author: "Elena R., Wedding Planner", rating: 5, text: "I regularly book these 56-passenger luxury coaches for large weddings. They always arrive spotless, on time, and the climate control is perfect for summer events." }
    ]
  },
  "mini-coach-bus-rental": {
    name: "Mini Coach Bus",
    pax: "24 - 36 Passengers",
    desc: "Perfect for corporate retreats, medium-sized groups, and regional travel. The mini coach offers the amenities of a larger bus in a more compact, agile package.",
    features: ["Comfortable seating", "Overhead storage", "Climate control", "PA System", "Reading lights"],
    img: "/fleet-mini.jpg",
    reviews: [
      { author: "David T.", rating: 5, text: "The perfect size for our department's offsite meeting in Niagara. Easy to board, surprisingly spacious, and the overhead storage handled all our gear." },
      { author: "Jessica Wong", rating: 4, text: "Great vehicle for a mid-sized group. The PA system was very helpful for our tour guide. Would definitely book the mini coach again." },
      { author: "St. Mary's Seniors Club", rating: 5, text: "We used the mini coach for our day trip to the Royal Botanical Gardens. The driver was so patient and the ride was exceptionally comfortable." }
    ]
  },
  "14-passenger-van-rental": {
    name: "14 Passenger Van",
    pax: "Up to 14 Passengers",
    desc: "High-roof transit vans ideal for airport transfers, small family groups, or executive shuttle services. Easy to board and surprisingly spacious.",
    features: ["High-roof design", "Air conditioning", "Tinted windows", "Rear luggage area", "Easy access steps"],
    img: "/fleet-van.jpg",
    reviews: [
      { author: "Michael C.", rating: 5, text: "Booked this van for a family airport transfer to Pearson. Plenty of room for 12 of us plus all our heavy luggage. Took away all the pre-flight stress!" },
      { author: "Amanda L., Executive Assistant", rating: 5, text: "We use these vans for executive shuttles between our Mississauga and downtown Toronto offices. The high roof makes a big difference for comfort." }
    ]
  },
  "school-bus-rental": {
    name: "School Bus",
    pax: "48-56 Children / 30-40 Adults",
    desc: "The most cost-effective transportation solution for large groups, school field trips, and local events. Safe, reliable, and straightforward.",
    features: ["High passenger capacity", "Economical rates", "Safety certified", "Professional drivers", "Local route specialists"],
    img: "/fleet-school.jpg",
    reviews: [
      { author: "Principal Harding", rating: 5, text: "Tours Coach Charters is our go-to for all field trips. The drivers are great with the kids, safety is always top priority, and the buses are very clean." },
      { author: "Tom S., Camp Director", rating: 4, text: "Very affordable and reliable. We used three of these school buses to transport our summer campers to Wonderland. Everything went flawlessly." },
      { author: "Local Soccer Association", rating: 5, text: "We use these buses every weekend for away games. You can't beat the price for moving 40 players and coaches." }
    ]
  }
};

const SEO_DATA = {
  "home": { title: "Charter Bus Rentals Canada | Tours Coach Charters", desc: "Canada's Premier Charter Bus Rentals. From corporate retreats to school trips, we provide reliable transportation from coast to coast." },
  "luxury-coach-bus-rental": { title: "Luxury Coach Bus Rental | Tours Coach Charters", desc: "Experience ultimate comfort for long-distance group travel with our 56 passenger luxury coaches." },
  "mini-coach-bus-rental": { title: "Mini Coach Bus Rental | Tours Coach Charters", desc: "Perfect for corporate retreats and medium-sized groups. Book a 24-36 passenger mini coach." },
  "14-passenger-van-rental": { title: "14 Passenger Van Rental | Tours Coach Charters", desc: "High-roof transit vans ideal for airport transfers, small family groups, or executive shuttle services." },
  "school-bus-rental": { title: "School Bus Rental | Tours Coach Charters", desc: "Cost-effective transportation solution for large groups and school field trips. 48-56 passengers." },
  "charter-bus-rental-toronto": { title: "Toronto Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Toronto, Ontario." },
  "charter-bus-rental-scarborough": { title: "Scarborough Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Scarborough, Ontario." },
  "charter-bus-rental-ajax": { title: "Ajax Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Ajax, Ontario." },
  "charter-bus-rental-pickering": { title: "Pickering Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Pickering, Ontario." },
  "charter-bus-rental-hamilton": { title: "Hamilton Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Hamilton, Ontario." },
  "charter-bus-rental-north-york": { title: "North York Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from North York, Ontario." },
  "charter-bus-rental-aurora": { title: "Aurora Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Aurora, Ontario." },
  "charter-bus-rental-woodbridge": { title: "Woodbridge Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Woodbridge, Ontario." },
  "charter-bus-rental-vaughan": { title: "Vaughan Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Vaughan, Ontario." },
  "charter-bus-rental-brampton": { title: "Brampton Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Brampton, Ontario." },
  "charter-bus-rental-milton": { title: "Milton Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Milton, Ontario." },
  "charter-bus-rental-mississauga": { title: "Mississauga Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Mississauga, Ontario." },
  "charter-bus-rental-oshawa": { title: "Oshawa Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Oshawa, Ontario." },
  "charter-bus-rental-burlington": { title: "Burlington Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Burlington, Ontario." },
  "charter-bus-rental-guelph": { title: "Guelph Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Guelph, Ontario." },
  "charter-bus-rental-brantford": { title: "Brantford Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Brantford, Ontario." },
  "charter-bus-rental-bolton": { title: "Bolton Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Bolton, Ontario." },
  "charter-bus-rental-barrie": { title: "Barrie Coach Charters | Tours Coach Charters", desc: "Group transportation and charter bus rentals starting from Barrie, Ontario." },
  "winter-destinations": { title: "Winter Destination Charters | Tours Coach Charters", desc: "Dedicated charter services to Whistler, Blue Mountain, and Banff." },
  "fifa-world-cup-2026-charters": { title: "FIFA World Cup 2026 Charters | Tours Coach Charters", desc: "Group transportation solutions for FIFA World Cup matches in Toronto and Vancouver." }
};

const Header = ({ currentPage, setPage, setIsQuoteModalOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
        <div 
          className="cursor-pointer"
          onClick={() => setPage('home')}
        >
          <img src="/logo.png" alt="Tours Coach Charters Logo" className="h-10 md:h-12 w-auto object-contain" />
        </div>

        <div className="hidden lg:flex items-center space-x-8 font-semibold text-gray-700">
          {NAV_LINKS.map((link) => (
            <div 
              key={link.id} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => !link.dropdown && setPage(link.id)}
                className={`flex items-center hover:text-blue-800 transition ${currentPage === link.id ? 'text-blue-800' : ''}`}
              >
                {link.title}
                {link.dropdown && <ChevronDown size={16} className="ml-1" />}
              </button>

              {link.dropdown && activeDropdown === link.id && (
                <div className="absolute top-full left-0 pt-2">
                  <div className={`${link.dropdown.length > 5 ? 'w-96 grid grid-cols-2 p-2 gap-1' : 'w-48 py-2'} bg-white shadow-xl rounded-md border border-gray-100`}>
                    {link.dropdown.map(drop => (
                      <button
                        key={drop.id}
                        onClick={() => setPage(drop.id)}
                        className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-800 transition text-sm rounded-md"
                      >
                        {drop.title}
                      </button>
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

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_LINKS.map(link => (
              <div key={link.id}>
                <button 
                  onClick={() => { if(!link.dropdown) { setPage(link.id); setIsMobileMenuOpen(false); }}}
                  className="font-bold text-gray-800 text-left w-full hover:text-blue-800"
                >
                  {link.title}
                </button>
                {link.dropdown && (
                  <div className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-red-600">
                    {link.dropdown.map(drop => (
                      <button
                        key={drop.id}
                        onClick={() => { setPage(drop.id); setIsMobileMenuOpen(false); }}
                        className="text-left text-gray-600 hover:text-blue-800"
                      >
                        {drop.title}
                      </button>
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

const QuoteForm = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [tripType, setTripType] = useState('return'); // State for One Way / Round Trip

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    const form = e.target;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTripType('return'); // Reset the toggle back to default
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("There was a problem sending your quote. Please try calling us instead.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl relative z-10 border-t-4 border-red-600 max-h-[600px] overflow-y-auto custom-scrollbar">
      {onClose && (
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-20"
        >
          <X size={24} />
        </button>
      )}
      <h3 className="text-2xl font-bold text-blue-800 mb-2">Request a Quote</h3>
      <p className="text-gray-600 text-sm mb-6">Fill out the details below to get your accurate price.</p>
      
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
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">First Name *</label>
              <input required name="firstName" type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="John" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Last Name *</label>
              <input required name="lastName" type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="Doe" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Email Address *</label>
              <input required name="email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Phone Number *</label>
              <input required name="phone" type="tel" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="(555) 123-4567" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Pickup Location *</label>
              <input required name="pickup" type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="City or Address" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Destination *</label>
              <input required name="destination" type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="City or Address" />
            </div>
          </div>

          {/* NEW: Trip Type Toggle Radio Buttons */}
          <div className="flex space-x-6 py-1">
            <label className="flex items-center text-sm font-bold text-gray-700 cursor-pointer">
              <input 
                type="radio" 
                name="tripType" 
                value="return" 
                checked={tripType === 'return'}
                onChange={() => setTripType('return')}
                className="mr-2 w-4 h-4 text-blue-800 focus:ring-blue-800 border-gray-300"
              />
              Round Trip
            </label>
            <label className="flex items-center text-sm font-bold text-gray-700 cursor-pointer">
              <input 
                type="radio" 
                name="tripType" 
                value="oneway" 
                checked={tripType === 'oneway'}
                onChange={() => setTripType('oneway')}
                className="mr-2 w-4 h-4 text-blue-800 focus:ring-blue-800 border-gray-300"
              />
              One Way
            </label>
          </div>

          {/* DYNAMIC DATES: Layout changes based on the toggle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={tripType === 'oneway' ? "md:col-span-2 transition-all duration-300" : "transition-all duration-300"}>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Departure Date *</label>
              <input required name="departDate" type="date" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" />
            </div>
            
            {/* The Return Date field only renders if 'return' is selected */}
            {tripType === 'return' && (
              <div className="animate-fade-in-up">
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Return Date *</label>
                <input required name="returnDate" type="date" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Passengers *</label>
              <input required name="passengers" type="number" min="1" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" placeholder="e.g. 45" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Vehicle Preference</label>
              <select name="vehicle" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none bg-white text-sm">
                <option value="any">No Preference</option>
                <option value="luxury">Luxury Coach (56 pax)</option>
                <option value="mini">Mini Coach (24-36 pax)</option>
                <option value="van">Passenger Van (14 pax)</option>
                <option value="school">School Bus</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wide">Additional Information</label>
            <textarea name="info" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-800 outline-none text-sm" rows="3" placeholder="Any specific requirements, stops, or itinerary details?"></textarea>
          </div>

          <button disabled={isSending} type="submit" className={`w-full bg-blue-800 text-white font-bold py-3 rounded-md hover:bg-blue-900 transition shadow-lg mt-4 flex justify-center items-center ${isSending ? 'opacity-75 cursor-not-allowed' : ''}`}>
            {isSending ? 'Sending Request...' : <>Submit Quote Request <ArrowRight className="ml-2" size={18} /></>}
          </button>
          <p className="text-xs text-center text-gray-500 mt-2">
            <ShieldCheck size={12} className="inline mr-1 text-green-600" /> Your information is secure.
          </p>
        </form>
      )}
    </div>
  );
};

const AnimatedCounter = ({ value, suffix = "", duration = 2000 }) => {
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
      
      if (percentage < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration, isVisible]);

  return <span ref={domRef}>{count}{suffix}</span>;
};

const TrustStatsBanner = () => (
  <div className="bg-[#2442a8] rounded-xl py-12 px-6 shadow-md relative overflow-hidden w-full max-w-6xl mx-auto border border-blue-900/30">
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
      <div className="relative w-[300px] h-full">
        <div className="absolute top-[10%] left-[25%] w-6 h-6 bg-white/[0.07] rounded-full"></div>
        <div className="absolute top-[25%] left-[50%] w-4 h-4 bg-white/[0.07] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[30%] w-5 h-5 bg-white/[0.07] rounded-full"></div>
        <div className="absolute top-[-10%] left-[40%] w-10 h-10 bg-white/[0.07] rounded-full"></div>
        <div className="absolute top-[40%] left-[65%] w-8 h-8 bg-white/[0.07] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[55%] w-3 h-3 bg-white/[0.07] rounded-full"></div>
        <div className="absolute top-[15%] right-[25%] w-5 h-5 bg-white/[0.07] rounded-full"></div>
        <div className="absolute bottom-[25%] right-[15%] w-6 h-6 bg-white/[0.07] rounded-full"></div>
        <div className="absolute top-[65%] right-[25%] w-3 h-3 bg-white/[0.07] rounded-full"></div>
        <div className="absolute top-[30%] right-[10%] w-2 h-2 bg-white/[0.07] rounded-full"></div>
        <div className="absolute bottom-[5%] right-[40%] w-4 h-4 bg-white/[0.07] rounded-full"></div>
      </div>
    </div>
    
    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center items-center">
      {[
        { value: 15, suffix: "+", label: "Years", icon: Award },
        { value: 5000, suffix: "+", label: "Trips", icon: Route },
        { value: 100, suffix: "%", label: "Insured", icon: ShieldCheck },
        { value: 24, suffix: "/7", label: "Support", icon: Headphones }
      ].map((stat, i) => (
        <div key={i} className="flex flex-col items-center justify-center group">
          <stat.icon size={36} className="text-white/80 mb-3 group-hover:scale-110 transition-transform duration-300" />
          <div className="text-5xl md:text-[54px] font-black text-[#f24e4e] mb-2 leading-none tracking-tight">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-[13px] md:text-sm font-bold uppercase tracking-[0.2em] text-white">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const Home = ({ setPage, setIsQuoteModalOpen }) => {
  const [currentFleetIdx, setCurrentFleetIdx] = useState(0);
  const fleetList = Object.entries(FLEET_DATA);

  const nextFleet = () => setCurrentFleetIdx((prev) => (prev + 1) % fleetList.length);
  const prevFleet = () => setCurrentFleetIdx((prev) => (prev - 1 + fleetList.length) % fleetList.length);

  return (
    <div className="w-full">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/home-hero.jpg" 
            alt="Coach bus on road" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <div className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm mb-6">
                Canada's Premier Charter Bus Rentals
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Trusted Coach Charters for Group Travel in Canada.
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                Whether you need a coach for a large group or a minibus for a smaller trip, we've got you covered anywhere in Canada. Greater Toronto Area and beyond.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-lg flex items-start">
                <Star className="text-yellow-400 mr-4 flex-shrink-0 mt-1 fill-current" />
                <p className="text-sm font-medium italic">
                  "With our price-beat guarantee, we promise to beat any competitor's comparable quote by 5%."
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full max-w-md lg:max-w-none">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

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
                <div className="w-16 h-16 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} />
                </div>
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
              <div 
                key={i} 
                className="group relative h-[360px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                {/* Full Background Image */}
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                
                {/* Content Container positioned at the bottom */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  
                  {/* Frosted Glass Icon that turns Red on hover */}
                  <div className="bg-white/20 backdrop-blur-md text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 border border-white/30 transform group-hover:scale-110 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500 shadow-lg">
                    <service.icon size={26} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-2xl text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {service.title}
                  </h3>
                  
                  {/* Sliding Description (Hidden by default, slides up on hover) */}
                  <div className="overflow-hidden">
                     <p className="text-slate-200 text-sm mb-4 transform translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out leading-relaxed">
                       {service.desc}
                     </p>
                  </div>

                  {/* Call to Action Link */}
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
        {/* Injecting a quick animation style for the slider transitions */}
        <style>{`
          @keyframes softFade {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-soft-fade {
            animation: softFade 0.5s ease-out forwards;
          }
        `}</style>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Meet Our Modern Fleet</h2>
            <p className="text-lg text-slate-600">From luxury motorcoaches to efficient passenger vans, we have the perfect vehicle to accommodate your group size and travel needs safely and comfortably.</p>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row relative border border-slate-100 group/slider">
            
            {/* Image Side with Hover Navigation */}
            <div className="md:w-1/2 relative min-h-[400px] md:min-h-[480px] overflow-hidden bg-slate-100">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10 pointer-events-none"></div>
              
              <img 
                key={`img-${currentFleetIdx}`} 
                src={fleetList[currentFleetIdx][1].img} 
                alt={fleetList[currentFleetIdx][1].name} 
                className="absolute inset-0 w-full h-full object-cover animate-soft-fade" 
              />
              
              {/* Floating Frosted Navigation Arrows */}
              <button 
                onClick={prevFleet} 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md shadow-lg hover:bg-white hover:text-red-600 text-blue-900 p-3.5 rounded-full transition-all duration-300 hover:scale-110 opacity-100 md:opacity-0 md:group-hover/slider:opacity-100"
                aria-label="Previous Vehicle"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextFleet} 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-md shadow-lg hover:bg-white hover:text-red-600 text-blue-900 p-3.5 rounded-full transition-all duration-300 hover:scale-110 opacity-100 md:opacity-0 md:group-hover/slider:opacity-100"
                aria-label="Next Vehicle"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 p-8 lg:p-14 flex flex-col justify-center relative bg-white">
              {/* Decorative Background Blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>

              <div key={`content-${currentFleetIdx}`} className="animate-soft-fade">
                {/* Modern Pill Badge */}
                <div className="inline-flex items-center bg-blue-50 border border-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
                  <Users size={16} className="mr-2 text-red-600" /> Capacity: {fleetList[currentFleetIdx][1].pax}
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-5 tracking-tight">
                  {fleetList[currentFleetIdx][1].name}
                </h3>
                
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  {fleetList[currentFleetIdx][1].desc}
                </p>
                
                <div className="mt-auto">
                  {/* Upgraded CTA Button */}
                  <button 
                    onClick={() => { setPage(fleetList[currentFleetIdx][0]); window.scrollTo(0,0); }} 
                    className="inline-flex items-center justify-center w-full sm:w-auto bg-slate-900 text-white font-bold py-3.5 px-7 rounded-xl hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group/btn"
                  >
                    View Vehicle Details <ArrowRight size={18} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  
                  {/* Modern Slider Dots */}
                  <div className="flex space-x-3 mt-10 items-center">
                    {fleetList.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setCurrentFleetIdx(idx)} 
                        className={`h-2.5 rounded-full transition-all duration-500 ease-out ${idx === currentFleetIdx ? 'w-10 bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.4)]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 px-4 border-b border-gray-200">
        <TrustStatsBanner />
      </section>

      <section className="py-12 bg-gray-50 border-b border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <h3 className="text-gray-500 font-semibold uppercase tracking-widest text-sm">Trusted by Industry Leaders</h3>
        </div>
        
        {/* Logo Container */}
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70">
            {/* Make sure these images exist in your public/ folder */}
            <img 
              src="/accenture.png" 
              alt="Accenture" 
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105" 
            />
            <img 
              src="/uoft.png" 
              alt="UofT" 
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105" 
            />
            <img 
              src="/yorku.png" 
              alt="YorkU" 
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105" 
            />
            <img 
              src="/deloitte.png" 
              alt="Deloitte" 
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105" 
            />
            <img 
              src="/loblaws.png" 
              alt="Loblaws" 
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105" 
            />
            <img 
              src="/shoppers.png" 
              alt="Shoppers Drug Mart" 
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105" 
            />
            <img 
              src="/td.png" 
              alt="TD Bank" 
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105" 
            />
            <img 
              src="/rogers.png" 
              alt="Rogers" 
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FleetTemplate = ({ data, setPage, setIsQuoteModalOpen }) => (
  <div className="pt-32 pb-24 w-full bg-slate-50 min-h-screen">
    <div className="container mx-auto px-4">
      
      {/* Main Vehicle Card - Modernized */}
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row mb-16 border border-slate-100 transform transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] relative">
        
        {/* Image Section with Overlay & Hover Zoom */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[500px] group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 opacity-60"></div>
          <img 
            src={data.img} 
            alt={data.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          {/* Floating Frosted Glass Capacity Badge */}
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-white/90 backdrop-blur-md text-blue-900 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border border-white/20">
              <Users size={18} className="text-red-600" /> 
              {data.pax}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center relative bg-white">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>

          <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            {data.name}
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            {data.desc}
          </p>
          
          <div className="mb-12">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Premium Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.features.map((feat, i) => (
                <li key={i} className="flex items-center bg-slate-50 border border-slate-100 p-3.5 rounded-xl hover:bg-blue-50 hover:border-blue-200 transition-colors group cursor-default">
                  <div className="bg-white p-1.5 rounded-full shadow-sm mr-3 group-hover:scale-110 transition-transform">
                    <CheckCircle size={16} className="text-green-500" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="w-full sm:w-auto mt-auto bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-0.5 text-lg flex justify-center items-center gap-2"
          >
            Request a Quote <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="mb-20">
        <TrustStatsBanner />
      </div>

      {/* Modernized Reviews Section */}
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
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={18} className="fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 flex-grow leading-relaxed font-medium">"{review.text}"</p>
                <div className="flex items-center pt-4 border-t border-slate-100 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-3">
                    {review.author.charAt(0)}
                  </div>
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

const GenericPage = ({ title, subtitle, bgImage, setPage, setIsQuoteModalOpen }) => (
  <div className="w-full min-h-screen pt-24 bg-gray-50 flex flex-col">
    <div className="relative py-24 bg-blue-800 text-center">
       <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src={bgImage || "/destination-default.jpg"} 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
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
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-900 transition font-bold shadow-md whitespace-nowrap"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </div>
  </div>
);

const DestinationTemplate = ({ data, setIsQuoteModalOpen }) => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="w-full bg-gray-50 flex flex-col font-sans">
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-800 text-center">
         <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src={data.img} 
            alt={`${data.city} Banner`} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4">
            <div className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm mb-6 uppercase tracking-wider">
              PREMIER {data.city} SERVICE
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{data.title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">{data.subtitle}</p>
          </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-black text-blue-800 mb-6">Compact Luxury & Maximum Comfort in {data.city}</h2>
            {data.content.map((p, i) => (
              <p key={i} className="text-gray-700 mb-5 leading-relaxed text-lg">{p}</p>
            ))}

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {data.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
                    <button 
                      className="w-full px-6 py-4 text-left font-bold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      {faq.q}
                      <ChevronDown size={20} className={`transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-4 pt-2 text-gray-600 bg-gray-50 border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 sticky top-32 border-t-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Specialized {data.city} Services</h3>
              <div className="space-y-6">
                {data.highlights.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mr-4 flex-shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-4 text-center">Ready to arrange your {data.city} transportation?</p>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-blue-800 text-white font-bold py-4 rounded-lg hover:bg-blue-900 transition shadow-lg flex justify-center items-center"
                >
                  Request a Quote <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FifaPage = ({ setIsQuoteModalOpen }) => {
  return (
    <div className="w-full bg-gray-50 flex flex-col font-sans overflow-hidden">
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.12); }
        }
        .animate-ken-burns {
          animation: kenBurns 20s ease-out forwards;
          transform-origin: center;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-150 { animation-delay: 150ms; }
        .delay-300 { animation-delay: 300ms; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
        .animate-shine::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-20deg);
          animation: shine 4s infinite;
        }
      `}</style>

      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-800 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="/fifa-banner.jpg" 
          alt="FIFA World Cup 2026 Banner" 
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        <div className="relative z-20 container mx-auto px-4">
          <div className="inline-block bg-red-600 text-white font-bold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.5)] animate-fade-in-up" style={{ opacity: 0 }}>
            Official Event Transportation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg animate-fade-in-up delay-150" style={{ opacity: 0 }}>
            FIFA World Cup 2026™ <br className="hidden md:block"/> Coach Charters
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up delay-300" style={{ opacity: 0 }}>
            Premium group transportation and logistics for matches in Toronto and Vancouver.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-black text-blue-800 mb-6">Experience the Global Game in Canada</h2>
            <p className="text-gray-700 mb-5 leading-relaxed text-lg">
              The FIFA World Cup 2026™ is coming to North America, and Canada is proud to host matches in Toronto and Vancouver. With millions of fans, corporate sponsors, and teams descending on these cities, reliable group transportation is absolutely essential.
            </p>
            <p className="text-gray-700 mb-5 leading-relaxed text-lg">
              Tours Coach Charters offers comprehensive charter bus solutions for the tournament. Whether you need VIP corporate shuttles to BMO Field in Toronto, large-scale fan transfers to BC Place in Vancouver, or complete team logistics, our modern fleet is ready.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-transparent hover:border-red-600 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,51,160,0.15)] transition-all duration-300 group">
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center group-hover:text-red-600 transition-colors">
                  <Map className="text-red-600 mr-2" size={24} /> Toronto Host City
                </h3>
                <p className="text-gray-600 text-sm">Providing dedicated shuttles from Pearson Airport (YYZ), downtown hotels, and fan zones directly to Toronto Stadium (BMO Field). Avoid game-day traffic and transit crowding with our dedicated professional drivers.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-transparent hover:border-red-600 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,51,160,0.15)] transition-all duration-300 group">
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center group-hover:text-red-600 transition-colors">
                  <Map className="text-red-600 mr-2" size={24} /> Vancouver Host City
                </h3>
                <p className="text-gray-600 text-sm">Seamless transportation across the Lower Mainland. Shuttles from YVR Airport and downtown Vancouver straight to BC Place, ensuring your group arrives together, safely, and on time.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-800 mb-6">Why Book With Us for FIFA 2026?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start group">
                <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5 group-hover:bg-green-200 transition-colors">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={18} />
                </div>
                <div>
                  <strong className="block text-gray-800">Advanced Booking Priority</strong>
                  <span className="text-gray-600 text-sm">Secure your vehicles well in advance before fleet availability runs out across the country. Demand is expected to be unprecedented.</span>
                </div>
              </li>
              <li className="flex items-start group">
                 <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5 group-hover:bg-green-200 transition-colors">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={18} />
                </div>
                <div>
                  <strong className="block text-gray-800">Custom Tournament Itineraries</strong>
                  <span className="text-gray-600 text-sm">Flexible scheduling for multi-day rentals, training camp transfers, airport pick-ups, and post-match celebrations.</span>
                </div>
              </li>
              <li className="flex items-start group">
                 <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5 group-hover:bg-green-200 transition-colors">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={18} />
                </div>
                <div>
                  <strong className="block text-gray-800">VIP & Corporate Hospitality</strong>
                  <span className="text-gray-600 text-sm">Premium luxury coaches and executive mini-buses designed to impress corporate guests, sponsors, and international dignitaries.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-blue-800 rounded-xl shadow-2xl border border-blue-700 p-8 sticky top-32 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-red-600 rounded-full blur-[60px] opacity-40 pointer-events-none"></div>
              
              <Trophy size={56} className="text-red-500 mb-6 animate-float drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]" />
              <h3 className="text-2xl font-bold mb-4">High Demand Alert</h3>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Transportation inventory for the FIFA World Cup 2026™ is booking up rapidly. We strongly advise corporate groups, travel agencies, and large fan clubs to secure their charter buses immediately to guarantee availability.
              </p>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center text-sm bg-white/10 backdrop-blur-sm p-3 rounded border border-white/5">
                  <Users className="text-red-400 mr-3" size={20} /> Group Sizes: 14 to 56+
                </div>
                <div className="flex items-center text-sm bg-white/10 backdrop-blur-sm p-3 rounded border border-white/5">
                  <CalendarCheck className="text-red-400 mr-3" size={20} /> Multi-Day Charters Available
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition shadow-[0_0_20px_rgba(220,38,38,0.4)] flex justify-center items-center overflow-hidden relative animate-shine group"
                >
                  <span className="relative z-10 flex items-center">
                    Secure Your Fleet <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-red-600">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div className="mb-6 bg-white inline-block p-2 rounded-lg">
          <img src="/logo.png" alt="Tours Coach Charters Logo" className="h-10 w-auto object-contain" />
        </div>
        <p className="text-sm mb-4">Canada's Premier Charter Bus Rentals. From corporate retreats to school trips, we provide reliable transportation from coast to coast.</p>
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
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-red-500 transition">Our Fleet</a></li>
          <li><a href="#" className="hover:text-red-500 transition">Destinations</a></li>
          <li><a href="#" className="hover:text-red-500 transition">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-red-500 transition">Privacy Policy</a></li>
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
      &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
    </div>
  </footer>
);

// The Newly Updated Chat Widget with dynamic resize logic
const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'CHAT_WIDGET_STATE') {
        setIsChatOpen(event.data.isOpen);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe 
      src="https://multi-agent-chat-rho.vercel.app/?mode=embed&site=Coach+Charter" 
      title="Live Support"
      allowTransparency={true}
      style={{
        position: 'fixed', 
        bottom: '0', 
        right: '0', 
        width: isChatOpen ? '400px' : '150px', 
        height: isChatOpen ? '600px' : '150px', 
        border: 'none', 
        zIndex: 999999, 
        background: 'transparent', 
        pointerEvents: 'auto',
        transition: 'all 0.3s ease-in-out'
      }}
    />
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state && e.state.page) {
        setCurrentPage(e.state.page);
      } else {
        const path = window.location.pathname.replace('/', '');
        if (path && SEO_DATA[path]) {
          setCurrentPage(path);
        } else {
          setCurrentPage('home');
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const seo = SEO_DATA[currentPage] || { title: "Tours Coach Charters", desc: "Reliable transportation across Canada." };
    document.title = seo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = seo.desc;

    try {
      const newUrl = currentPage === 'home' ? '/' : `/${currentPage}`;
      if (window.location.pathname !== newUrl) {
        window.history.pushState({ page: currentPage }, seo.title, newUrl);
      }
    } catch (err) {
      console.warn("History API restricted in this environment.");
    }
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === 'home') return <Home setPage={setCurrentPage} setIsQuoteModalOpen={setIsQuoteModalOpen} />;
    if (FLEET_DATA[currentPage]) return <FleetTemplate data={FLEET_DATA[currentPage]} setPage={setCurrentPage} setIsQuoteModalOpen={setIsQuoteModalOpen} />;
    if (DESTINATION_DATA[currentPage]) return <DestinationTemplate data={DESTINATION_DATA[currentPage]} setIsQuoteModalOpen={setIsQuoteModalOpen} />;
    
    switch(currentPage) {
      case 'fifa-world-cup-2026-charters':
        return <FifaPage setIsQuoteModalOpen={setIsQuoteModalOpen} />;
      case 'winter-destinations':
        return <GenericPage 
                  title="Winter Destinations" 
                  subtitle="Dedicated charter services to Whistler, Blue Mountain, and Banff." 
                  bgImage="/winter-banner.jpg" 
                  setPage={setCurrentPage}
                  setIsQuoteModalOpen={setIsQuoteModalOpen}
                />;
      default:
        return <Home setPage={setCurrentPage} setIsQuoteModalOpen={setIsQuoteModalOpen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-red-600 selection:text-white relative">
      <Header currentPage={currentPage} setPage={setCurrentPage} setIsQuoteModalOpen={setIsQuoteModalOpen} />
      
      <main className="flex-grow w-full overflow-x-hidden">
        {renderPage()}
      </main>
      
      <Footer />
      
      {/* Dynamic Chat Widget rendered on every page */}
      <ChatWidget />

      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
          <div 
            className="w-full max-w-2xl my-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <QuoteForm onClose={() => setIsQuoteModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}