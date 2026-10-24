"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useQuote } from '../context/QuoteContext';
import { 
  Phone, Mail, ChevronDown, Menu, X, 
  ShieldCheck, CalendarCheck, Map, Headphones, BusFront, Users, 
  Briefcase, Trophy, Navigation, Car, Star, CheckCircle, ArrowRight,
  Plane, Landmark, Building2, ChevronLeft, ChevronRight,
  Award, Route, Send,
  ArrowLeftRight, Clock, Sparkles, AlertCircle, Check, Calendar, Minus, Plus
} from 'lucide-react';

// --- GOOGLE PLACES AUTOCOMPLETE ---
import GooglePlacesInput from './GooglePlacesInput';

// --- FIREBASE IMPORTS ---
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// --- DATEPICKER IMPORTS ---
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const COMPANY_INFO = {
  name: "Canada Tours Coach LTD",
  phone: "(416) 269-9555",
  email: "info@tourscoachcharter.com",
  address: "1315 Pickering Parkway, Suite 300, Pickering, ON L1V 7G5"
};

const NAV_LINKS = [
  { title: "Tours", id: "tours" },
  { title: "Multi-Day", id: "multi-day-tours" },
  { 
    title: "Our Fleet", 
    id: "fleet",
    dropdown: [
      { title: "56 Passenger Luxury Coach", id: "luxury-coach-bus-charter" },
      { title: "24-36 Mini Coach Bus", id: "mini-coach-bus-charter" },
      { title: "14 Passenger Van", id: "14-passenger-van-service" },
      { title: "School Bus Charter", id: "school-bus-charter" }
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
  { title: "Winter", id: "winter-destinations" }
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
  "about": { title: "About Us | Tours Coach Charters", desc: "Learn about Canada Tours Coach LTD. We provide safe, reliable, and premium charter bus transportation across the country." },
  "contact": { title: "Contact Us | Tours Coach Charters", desc: "Get in touch with Canada Tours Coach LTD for quotes, questions, and group transportation logistics." },
  "luxury-coach-bus-rental": { title: "Luxury Coach Bus Rental in Canada | Tours Coach Charters", desc: "Experience ultimate comfort for long-distance group travel with our 56 passenger luxury coaches." },
  "mini-coach-bus-rental": { title: "Mini Coach Bus Rental in Canada | Tours Coach Charters", desc: "Perfect for corporate retreats and medium-sized groups. Book a 24-36 passenger mini coach." },
  "14-passenger-van-rental": { title: "14 Passenger Van Rental in Canada | Tours Coach Charters", desc: "High-roof transit vans ideal for airport transfers, small family groups, or executive shuttle services." },
  "school-bus-rental": { title: "School Bus Rental in Canada | Tours Coach Charters", desc: "Cost-effective transportation solution for large groups and school field trips. 48-56 passengers." },
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

const DESTINATION_DATA = {
  "charter-bus-rental-toronto": {
    city: "Toronto",
    title: "Charter Coach Bus Service in Toronto",
    subtitle: "Reliable group transportation for the GTA. From corporate events at the Metro Convention Centre to airport transfers at YYZ.",
    img: "/toronto-banner.jpg",
    highlights: [
      { icon: Building2, title: "Corporate Shuttles", desc: "Downtown & Financial District" },
      { icon: Landmark, title: "School Trips", desc: "ROM, Zoo & Science Centre" },
      { icon: Plane, title: "Airport Transfers", desc: "Pearson (YYZ) & Billy Bishop (YTZ)" }
    ],
    content: [
      "Tours Coach Charters is your premier partner for reliable and professional charter bus service in Toronto. Whether you're planning a large corporate event, a school trip to a city landmark, or group transportation for a wedding, we offer modern, comfortable coaches to meet all your needs. We are dedicated to providing a seamless travel experience for groups of any size, ensuring your journey through the GTA is safe and stress-free.",
      "Our service is perfect for corporate travel, shuttling your team to conferences, meetings, or company events at venues like the Metro Toronto Convention Centre or downtown office towers. We also provide safe and reliable transportation for school and university trips to attractions like the Royal Ontario Museum, the Toronto Zoo, or local campuses.",
      "Travel with confidence and leave the navigation to us. Our professional drivers are experts at navigating Toronto's busy streets, ensuring a timely and comfortable journey for your entire group."
    ],
    faqs: [
      { q: "What types of events do you provide charter bus service for in Toronto?", a: "We offer professional charter bus service for a wide range of events in the Toronto area. This includes corporate events, school trips, sports team transportation, wedding guest shuttles, airport transfers to and from Pearson (YYZ), and private group tours." },
      { q: "What size buses do you have available for charter in Toronto?", a: "Our fleet includes a variety of vehicles to accommodate any group size. For larger groups, we offer our 56-passenger luxury coach bus. For mid-sized groups, our mini coach buses seat between 24 and 36 passengers, and our 14-passenger vans are perfect for smaller groups and private shuttles." },
      { q: "Are your drivers certified and familiar with the Toronto area?", a: "Yes, all of our drivers are fully certified, licensed, and have extensive experience navigating the traffic and routes in Toronto and the Greater Toronto Area (GTA). Your safety and comfort are our top priorities." },
      { q: "How far in advance should I book a charter bus for my Toronto trip?", a: "We recommend booking as early as possible, especially for peak seasons like summer and holidays, to ensure availability. We suggest booking at least 3-6 months in advance for major events, but we will always do our best to accommodate last-minute requests." }
    ]
  },
  "charter-bus-rental-scarborough": {
    city: "Scarborough",
    title: "Charter Coach Bus Service in Scarborough",
    subtitle: "Dependable group travel throughout Scarborough and the eastern GTA. Ideal for local events, university shuttles, and private tours.",
    img: "/scarborough-banner.jpg",
    highlights: [
      { icon: Landmark, title: "University Charters", desc: "UofT Scarborough & Centennial College" },
      { icon: Building2, title: "Corporate Events", desc: "East GTA Business Parks" },
      { icon: Map, title: "Local Excursions", desc: "Scarborough Bluffs & Rouge Park" }
    ],
    content: [
      "Experience seamless group transportation with our premier charter bus service in Scarborough. Whether you are coordinating a field trip, a corporate retreat, or a wedding at one of Scarborough's beautiful venues, we provide a modern fleet to get you there safely. From the stunning Scarborough Bluffs to the bustling campuses of UTSC and Centennial College, our drivers know the eastern GTA inside and out.",
      "We cater to all group sizes and itineraries. Need a daily shuttle for your employees? Looking for reliable transport for your sports team's away games? Our flexible fleet of luxury coaches, mini-buses, and passenger vans are ready to serve your specific needs.",
      "Our commitment to safety and customer satisfaction makes us the trusted choice for Scarborough residents and businesses. Let us handle the traffic and logistics while you sit back and enjoy the ride."
    ],
    faqs: [
      { q: "Do you offer daily or weekly shuttle services in Scarborough?", a: "Yes, we provide ongoing shuttle contracts for universities, corporate offices, and construction sites throughout Scarborough and the eastern GTA." },
      { q: "Can we book a bus for a trip from Scarborough to downtown Toronto?", a: "Absolutely. We frequently handle trips from Scarborough to downtown Toronto for sporting events, theater outings, corporate conferences, and nightlife." },
      { q: "What amenities are included on your buses?", a: "Our luxury coaches feature Wi-Fi, reclining seats, climate control, and onboard restrooms. Mini-coaches and vans offer comfortable seating, AC, and plenty of luggage space." }
    ]
  },
  "charter-bus-rental-ajax": {
    city: "Ajax",
    title: "Charter Coach Bus Service in Ajax",
    subtitle: "Premium group transportation serving Ajax and the broader Durham Region. Ideal for corporate outings, school trips, and private travel.",
    img: "/ajax-banner.jpg",
    highlights: [
      { icon: Building2, title: "Corporate Travel", desc: "Business meetings and retreats" },
      { icon: Trophy, title: "Sports Teams", desc: "Ajax Community Centre events" },
      { icon: Navigation, title: "Local Excursions", desc: "Durham region tours" }
    ],
    content: [
      "Ajax is a rapidly growing hub in the Durham Region, and we are proud to offer top-tier charter bus services to its residents and businesses. Whether you are organizing a corporate shuttle to downtown Toronto or a local trip within Ajax, our fleet is equipped to handle it.",
      "Our experienced drivers are familiar with all major routes including Highway 401, ensuring your group arrives on time and in comfort. We specialize in coordinating logistics for sports teams, school field trips, and wedding parties in the Ajax area."
    ],
    faqs: [
      { q: "Can you accommodate sports teams traveling from Ajax?", a: "Yes! Our luxury coaches have ample undercarriage storage for equipment, making them perfect for sports teams traveling to tournaments across Ontario." },
      { q: "Do you service corporate events in Ajax?", a: "We frequently provide shuttle services for businesses in Ajax for corporate events, team-building retreats, and daily employee commuting." }
    ]
  },
  "charter-bus-rental-pickering": {
    city: "Pickering",
    title: "Charter Coach Bus Service in Pickering",
    subtitle: "Reliable coach and minibus rentals based in Pickering. Perfect for casino trips, weddings, and regional transportation.",
    img: "/pickering-banner.jpg",
    highlights: [
      { icon: Landmark, title: "Entertainment", desc: "Pickering Casino Resort Trips" },
      { icon: Users, title: "Private Events", desc: "Weddings and family reunions" },
      { icon: Plane, title: "Airport Transfers", desc: "Direct to Pearson Airport" }
    ],
    content: [
      "Located just east of Toronto, Pickering is an ideal starting point for any group journey. We provide modern, comfortable transportation for events ranging from Pickering Casino Resort outings to local school trips.",
      "Our Pickering charter bus service ensures that your group doesn't have to worry about parking or navigating traffic. From luxury 56-passenger coaches to 14-passenger vans, we match the right vehicle to your itinerary."
    ],
    faqs: [
      { q: "Do you provide shuttles to the Pickering Casino Resort?", a: "Yes, we frequently arrange group transportation to and from the casino for corporate events, parties, and social groups." },
      { q: "Can we charter a bus from Pickering to downtown Toronto?", a: "Absolutely. We provide direct and efficient transportation from Pickering into the heart of Toronto for any type of event." }
    ]
  },
  "charter-bus-rental-hamilton": {
    city: "Hamilton",
    title: "Charter Coach Bus Service in Hamilton",
    subtitle: "Expert charter bus rentals for Hamilton and the surrounding areas. Servicing universities, sports teams, and large events.",
    img: "/hamilton-banner.jpg",
    highlights: [
      { icon: Landmark, title: "University Shuttles", desc: "McMaster University" },
      { icon: Trophy, title: "Major Events", desc: "FirstOntario Centre & Tim Hortons Field" },
      { icon: Map, title: "Nature Tours", desc: "Hamilton Waterfalls and trails" }
    ],
    content: [
      "Hamilton is a vibrant city with busy event centers, a major university, and beautiful natural attractions. Our Hamilton charter bus service is designed to move your group efficiently, whether you're heading to a concert at FirstOntario Centre or a football game at Tim Hortons Field.",
      "We also provide comprehensive transportation for students and staff at McMaster University, offering everything from campus shuttles to away-game transportation for sports teams."
    ],
    faqs: [
      { q: "Do you offer transportation for McMaster University events?", a: "Yes, we offer specialized rates and scheduling for university departments, student groups, and athletic teams." },
      { q: "Can we book a multi-day trip originating in Hamilton?", a: "We regularly organize multi-day charters leaving from Hamilton to destinations across Canada and the United States." }
    ]
  },
  "charter-bus-rental-north-york": {
    city: "North York",
    title: "Charter Coach Bus Service in North York",
    subtitle: "Premium group transportation in North York. Specializing in corporate shuttles, school trips, and private group travel.",
    img: "/northyork-banner.jpg",
    highlights: [
      { icon: Building2, title: "Corporate Transport", desc: "North York business districts" },
      { icon: Landmark, title: "Educational Trips", desc: "York University & Aga Khan Museum" },
      { icon: Users, title: "Social Events", desc: "Downsview Park festivals" }
    ],
    content: [
      "North York represents a major commercial and cultural hub within the GTA. Our charter bus service provides reliable transportation for corporate offices, schools, and private groups based in the area.",
      "Whether you're organizing a large-scale event at Downsview Park or coordinating daily shuttles for York University, our diverse fleet ensures safety, punctuality, and comfort."
    ],
    faqs: [
      { q: "Do you service the York University campus?", a: "Yes, we provide transportation for field trips, athletic teams, and large student events starting from or traveling to York University." },
      { q: "Are your buses equipped for corporate groups?", a: "Our luxury coaches feature Wi-Fi, power outlets, and climate control, making them perfect for mobile professionals." }
    ]
  },
  "charter-bus-rental-aurora": {
    city: "Aurora",
    title: "Charter Coach Bus Service in Aurora",
    subtitle: "Dependable charter bus and minibus rentals for Aurora and York Region. Ideal for golf outings, weddings, and local events.",
    img: "/aurora-banner.jpg",
    highlights: [
      { icon: Trophy, title: "Golf Tournaments", desc: "Local country clubs and resorts" },
      { icon: Users, title: "Weddings", desc: "Banquet halls and private venues" },
      { icon: Briefcase, title: "Corporate Retreats", desc: "York region business travel" }
    ],
    content: [
      "Our Aurora charter bus services are perfectly suited for groups traveling throughout York Region and beyond. Aurora is home to beautiful venues and golf courses, making it a prime destination for weddings and corporate retreats.",
      "Leave the driving to our professional chauffeurs so your group can relax. We offer competitive rates on everything from 14-passenger vans for intimate groups to 56-passenger luxury coaches for large-scale events."
    ],
    faqs: [
      { q: "Can you transport a wedding party in Aurora?", a: "Absolutely. We coordinate with your wedding planner to ensure guests are shuttled between hotels, ceremonies, and reception venues on time." },
      { q: "Do you offer transportation for local sports teams?", a: "Yes, our comfortable coaches and school buses are great options for local and away games." }
    ]
  },
  "charter-bus-rental-woodbridge": {
    city: "Woodbridge",
    title: "Charter Coach Bus Service in Woodbridge",
    subtitle: "Specialized group transportation for Woodbridge. Your top choice for wedding shuttles, corporate events, and shopping tours.",
    img: "/woodbridge-banner.jpg",
    highlights: [
      { icon: Users, title: "Wedding Transportation", desc: "Woodbridge banquet halls" },
      { icon: Map, title: "Shopping Excursions", desc: "Vaughan Mills and local centers" },
      { icon: Building2, title: "Corporate Events", desc: "Local business centers" }
    ],
    content: [
      "Woodbridge is renowned for stunning banquet halls and event spaces. We are the preferred charter bus partner for countless weddings and large social gatherings in the area, ensuring guests travel safely and stylishly.",
      "In addition to private events, we provide reliable transportation for corporate groups and offer specialized shopping tour charters for groups visiting local retail hubs like Vaughan Mills."
    ],
    faqs: [
      { q: "How do you handle late-night wedding transportation?", a: "We offer flexible scheduling to ensure safe, late-night return trips for your wedding guests back to their hotels or homes." },
      { q: "Can we book a bus for a corporate shopping day?", a: "Yes, we frequently book group shopping excursions, utilizing our buses' ample undercarriage storage for purchases." }
    ]
  },
  "charter-bus-rental-vaughan": {
    city: "Vaughan",
    title: "Charter Coach Bus Service in Vaughan",
    subtitle: "Comprehensive charter rentals for Vaughan. Servicing Canada's Wonderland, Vaughan Metro Centre, and corporate parks.",
    img: "/vaughan-banner.jpg",
    highlights: [
      { icon: Landmark, title: "Theme Park Trips", desc: "Canada's Wonderland" },
      { icon: Building2, title: "Corporate Shuttles", desc: "Vaughan Metropolitan Centre" },
      { icon: Plane, title: "Airport Shuttles", desc: "Transfers to YYZ" }
    ],
    content: [
      "As one of Canada's fastest-growing cities, Vaughan demands reliable group transportation. Whether you are organizing a massive school trip to Canada's Wonderland or need corporate shuttles for offices in the Vaughan Metropolitan Centre, we have you covered.",
      "Our diverse fleet ensures that no matter your group size, we can provide a comfortable, climate-controlled ride with a professional driver who knows the Vaughan area intimately."
    ],
    faqs: [
      { q: "Do you offer school group rates for trips to Canada's Wonderland?", a: "Yes, we offer special pricing on our school buses and motorcoaches for educational and recreational trips to the park." },
      { q: "Can you provide daily employee shuttles from the subway?", a: "We frequently set up daily shuttle routes from the TTC subway stations to corporate offices throughout Vaughan." }
    ]
  },
  "charter-bus-rental-brampton": {
    city: "Brampton",
    title: "Charter Coach Bus Service in Brampton",
    subtitle: "Dependable group travel for Brampton. Perfect for sports tournaments, corporate events, and large family gatherings.",
    img: "/brampton-banner.jpg",
    highlights: [
      { icon: Trophy, title: "Sports Travel", desc: "CAA Centre & local arenas" },
      { icon: Users, title: "Family Events", desc: "Large weddings and reunions" },
      { icon: Building2, title: "Corporate Shuttles", desc: "Brampton business parks" }
    ],
    content: [
      "Brampton's dynamic community requires flexible transportation solutions. We provide high-capacity luxury coaches for large family weddings, as well as cost-effective school buses for local field trips and sports tournaments.",
      "With heavy traffic often surrounding the Brampton area, letting our professional drivers navigate ensures that your group arrives relaxed and on schedule, whether heading to the CAA Centre or an out-of-town retreat."
    ],
    faqs: [
      { q: "What is the best vehicle for a sports team traveling from Brampton?", a: "Our 56-passenger luxury coaches are ideal, offering ample storage for gear under the bus and plenty of legroom for athletes." },
      { q: "Can you accommodate very large family events?", a: "Absolutely. We can deploy multiple vehicles from our fleet simultaneously to accommodate hundreds of guests." }
    ]
  },
  "charter-bus-rental-milton": {
    city: "Milton",
    title: "Charter Coach Bus Service in Milton",
    subtitle: "Expert group transportation serving Milton. Ideal for outdoor excursions, sporting events, and corporate travel.",
    img: "/milton-banner.jpg",
    highlights: [
      { icon: Navigation, title: "Outdoor Excursions", desc: "Conservation areas & Kelso" },
      { icon: Trophy, title: "Sports Travel", desc: "Mattamy National Cycling Centre" },
      { icon: Briefcase, title: "Corporate Escapes", desc: "Retreats outside the city" }
    ],
    content: [
      "Nestled near the Niagara Escarpment, Milton is a popular destination for outdoor corporate retreats and sporting events. Our charter buses provide the perfect transportation solution to get your group from the city to the scenery.",
      "Whether you are heading to the Mattamy National Cycling Centre or taking a school group to a local conservation area, our vehicles are maintained to the highest safety standards."
    ],
    faqs: [
      { q: "Can we book a bus for a hiking trip in Milton?", a: "Yes, we regularly transport groups to Kelso Conservation Area and other local trails, providing secure storage for gear." },
      { q: "Do you offer corporate rates for Milton-based businesses?", a: "We provide competitive quoting and dedicated account managers for recurring corporate clients in the area." }
    ]
  },
  "charter-bus-rental-mississauga": {
    city: "Mississauga",
    title: "Charter Coach Bus Service in Mississauga",
    subtitle: "Premium charter rentals for Mississauga and Peel Region. Perfect for Pearson Airport transfers, corporate meetings, and sports travel.",
    img: "/mississauga-banner.jpg",
    highlights: [
      { icon: Plane, title: "Airport Transfers", desc: "Toronto Pearson International (YYZ)" },
      { icon: Building2, title: "Corporate Shuttles", desc: "Mississauga Business District & Square One" },
      { icon: Trophy, title: "Sports Travel", desc: "Paramount Fine Foods Centre" }
    ],
    content: [
      "Mississauga is a major hub for business, travel, and events, and our charter bus service is here to support your group's transportation needs. As a leading provider in the Peel Region, we specialize in corporate shuttles, airport transfers, and sports team travel.",
      "With close proximity to Toronto Pearson International Airport (YYZ), we provide prompt and professional airport shuttle services for incoming corporate teams, tour groups, and large families. Trust our professional drivers to navigate the 401, 403, and local routes smoothly, ensuring your group arrives on time and in maximum comfort.",
      "From large-scale conferences at the International Centre to private weddings near Port Credit, our extensive fleet ensures we have the perfect vehicle to match your group size and budget."
    ],
    faqs: [
      { q: "How do airport pickups work at Toronto Pearson (YYZ)?", a: "We monitor your flight status and our drivers will coordinate a smooth pickup at the designated charter bus area at Pearson Airport, ensuring minimal waiting time for your group." },
      { q: "Are your vehicles suitable for corporate executives?", a: "Yes, our modern fleet includes premium luxury coaches and executive mini-buses that offer a professional, comfortable environment perfect for corporate travel." },
      { q: "Do you travel outside of Mississauga?", a: "Certainly! While we offer local Mississauga charters, we frequently transport groups across Ontario and across Canada depending on your itinerary." }
    ]
  },
  "charter-bus-rental-oshawa": {
    city: "Oshawa",
    title: "Charter Coach Bus Service in Oshawa",
    subtitle: "Reliable coach rentals for Oshawa and Durham Region. Servicing universities, arenas, and local corporate events.",
    img: "/oshawa-banner.jpg",
    highlights: [
      { icon: Landmark, title: "University Travel", desc: "Ontario Tech University & Durham College" },
      { icon: Trophy, title: "Event Transportation", desc: "Tribute Communities Centre" },
      { icon: Building2, title: "Corporate Charters", desc: "Local business travel" }
    ],
    content: [
      "As the eastern anchor of the GTA, Oshawa hosts numerous events, university activities, and corporate functions. Our charter buses provide seamless transportation to venues like the Tribute Communities Centre and local campuses.",
      "We offer affordable school bus rentals for local field trips and premium motorcoaches for long-distance travel, ensuring groups in Oshawa have access to the best transportation options available."
    ],
    faqs: [
      { q: "Do you provide student transportation for Ontario Tech?", a: "Yes, we regularly transport student groups, clubs, and athletic teams for universities and colleges in Oshawa." },
      { q: "Can we rent a bus for a concert in Oshawa?", a: "Absolutely. We offer round-trip transportation for groups attending concerts and hockey games at local arenas." }
    ]
  },
  "charter-bus-rental-burlington": {
    city: "Burlington",
    title: "Charter Coach Bus Service in Burlington",
    subtitle: "Premium group transportation for Burlington. Ideal for lakefront festivals, botanical garden tours, and corporate events.",
    img: "/burlington-banner.jpg",
    highlights: [
      { icon: Map, title: "Sightseeing", desc: "Royal Botanical Gardens & Lakefront" },
      { icon: Users, title: "Festivals", desc: "Sound of Music Festival shuttles" },
      { icon: Briefcase, title: "Corporate Retreats", desc: "Burlington event venues" }
    ],
    content: [
      "Burlington's beautiful waterfront and attractions make it a frequent destination for group travel. We offer dedicated charter services for tours visiting the Royal Botanical Gardens, as well as shuttles for the city's popular summer festivals.",
      "Corporate clients also rely on our modern mini-coaches and vans for comfortable, efficient travel to business retreats and meetings throughout the Halton Region."
    ],
    faqs: [
      { q: "Do you offer tour bus services for sightseeing in Burlington?", a: "Yes, our luxury coaches feature large panoramic windows perfect for sightseeing tours along the lake and local gardens." },
      { q: "Can you provide shuttle service for large outdoor festivals?", a: "We specialize in event logistics and can set up park-and-ride shuttles for major Burlington festivals." }
    ]
  },
  "charter-bus-rental-guelph": {
    city: "Guelph",
    title: "Charter Coach Bus Service in Guelph",
    subtitle: "Expert group travel solutions for Guelph. Servicing university events, agricultural tours, and sports teams.",
    img: "/guelph-banner.jpg",
    highlights: [
      { icon: Landmark, title: "University Charters", desc: "University of Guelph" },
      { icon: Navigation, title: "Local Tours", desc: "Agricultural & brewery tours" },
      { icon: Trophy, title: "Sports Transport", desc: "Sleeman Centre events" }
    ],
    content: [
      "Guelph's dynamic university culture and vibrant local industries make it a key location for our charter services. We are a trusted provider for the University of Guelph, offering safe transportation for field trips, athletic teams, and faculty events.",
      "Beyond the university, our modern fleet serves local businesses, private tours, and sports teams heading to the Sleeman Centre or out-of-town tournaments."
    ],
    faqs: [
      { q: "Do you provide buses for university athletic teams?", a: "Yes, we have extensive experience transporting varsity and intramural teams to games across the province." },
      { q: "Can we rent a mini-coach for a private brewery tour?", a: "Absolutely. A mini-coach is a safe and fun way to transport your group for local food and beverage tours." }
    ]
  },
  "charter-bus-rental-brantford": {
    city: "Brantford",
    title: "Charter Coach Bus Service in Brantford",
    subtitle: "Reliable coach rentals in Brantford. Perfect for local sports tournaments, theater outings, and corporate travel.",
    img: "/brantford-banner.jpg",
    highlights: [
      { icon: Trophy, title: "Sports Tournaments", desc: "Wayne Gretzky Sports Centre" },
      { icon: Users, title: "Arts & Culture", desc: "Sanderson Centre for the Performing Arts" },
      { icon: Building2, title: "Corporate Travel", desc: "Local business charters" }
    ],
    content: [
      "Known as the Telephone City, Brantford hosts numerous sports tournaments and cultural events. We provide dependable transportation for teams heading to the Wayne Gretzky Sports Centre, ensuring athletes travel comfortably and arrive ready to compete.",
      "We also serve local schools, seniors' groups, and businesses requiring transportation for theater outings, corporate training, and regional travel."
    ],
    faqs: [
      { q: "Can we book a school bus for a local Brantford field trip?", a: "Yes, school buses are a highly cost-effective option for local trips and short-distance travel within the region." },
      { q: "Do you offer discounts for recurring sports team travel?", a: "We can work with athletic directors and coaches to establish competitive pricing for entire season schedules." }
    ]
  },
  "charter-bus-rental-bolton": {
    city: "Bolton",
    title: "Charter Coach Bus Service in Bolton",
    subtitle: "Dedicated group transportation for Bolton and Caledon. Ideal for equestrian events, weddings, and nature retreats.",
    img: "/bolton-banner.jpg",
    highlights: [
      { icon: Map, title: "Equestrian Events", desc: "Caledon Equestrian Park" },
      { icon: Users, title: "Weddings", desc: "Rustic venues and retreats" },
      { icon: Briefcase, title: "Corporate Outings", desc: "Team building outside the city" }
    ],
    content: [
      "Surrounded by the natural beauty of Caledon, Bolton is a popular destination for scenic weddings, outdoor corporate retreats, and major events at the Caledon Equestrian Park. Our charter bus service ensures your group navigates the country roads safely.",
      "We offer a range of vehicles, from 14-passenger vans for intimate wedding parties to large motorcoaches for transporting spectators and participants to local events."
    ],
    faqs: [
      { q: "Can your buses navigate rural roads around Bolton?", a: "Our professional drivers are highly experienced and our vehicles are maintained to handle diverse routing safely." },
      { q: "Do you offer shuttle services for large events in Caledon?", a: "Yes, we can provide continuous shuttle loops to transport attendees from parking areas or hotels to the main event venue." }
    ]
  },
  "charter-bus-rental-barrie": {
    city: "Barrie",
    title: "Charter Coach Bus Service in Barrie",
    subtitle: "Premium group transportation for Barrie and Simcoe County. The best choice for ski trips, college events, and waterfront festivals.",
    img: "/barrie-banner.jpg",
    highlights: [
      { icon: Navigation, title: "Winter Sports", desc: "Mount St. Louis & Snow Valley" },
      { icon: Landmark, title: "Educational Trips", desc: "Georgian College" },
      { icon: Map, title: "Summer Festivals", desc: "Lake Simcoe waterfront events" }
    ],
    content: [
      "As a gateway to cottage country and winter resorts, Barrie is a year-round destination for group travel. We specialize in winter ski charters, providing safe, snow-ready motorcoaches equipped to handle heavy winter gear.",
      "During the warmer months, we provide transportation for summer camps, waterfront festivals, and events at Georgian College. Let our experienced drivers handle the Highway 400 traffic while your group relaxes."
    ],
    faqs: [
      { q: "Do your buses have storage for skis and snowboards?", a: "Yes, our luxury motorcoaches feature massive undercarriage storage bays perfect for all your winter sports equipment." },
      { q: "Are your drivers experienced in winter driving conditions?", a: "Safety is our priority. Our drivers undergo rigorous winter driving training and our vehicles are fully equipped for harsh weather." }
    ]
  }
};

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
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition font-bold shadow-md inline-block text-center"
          >
            Get Free Quote
          </button>
        </div>

        <button className="lg:hidden text-blue-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

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
                className="bg-red-600 text-white w-full py-3 rounded-md font-bold mt-4 shadow-md hover:bg-red-700 block text-center"
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
  <footer className="bg-slate-950 text-slate-300 py-16 border-t-4 border-red-600">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      
      {/* Col 1: Brand & Credentials */}
      <div className="lg:col-span-2">
        <Link href="/" className="mb-6 bg-white inline-block p-2 rounded-lg cursor-pointer block w-max">
          <img src="/logo.png" alt="Tours Coach Charters Logo" className="h-10 w-auto object-contain" />
        </Link>
        <p className="text-sm text-slate-400 mb-6 max-w-sm leading-relaxed">
          Canada's Premier Charter Bus Company. Operating 56-passenger luxury coaches, executive minibuses, and passenger vans across Toronto, Ontario, and nationwide.
        </p>
        
        <div className="text-xs text-slate-400 bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1.5 max-w-sm">
          <p><strong className="text-white font-bold">CANADA TOURS COACH LTD.</strong></p>
          <p className="text-slate-400">{COMPANY_INFO.address}</p>
          <p className="text-slate-300 font-mono text-[11px] pt-1 border-t border-slate-800">
            BN: 833253503 | Ontario CVOR Certified | $10M Insured
          </p>
        </div>

        <div className="mt-4 flex items-center gap-4 text-sm text-slate-300">
          <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1.5 hover:text-red-400 font-bold">
            <Phone size={16} className="text-red-500" /> {COMPANY_INFO.phone}
          </a>
          <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-red-400">
            <Mail size={16} className="text-red-500" /> {COMPANY_INFO.email}
          </a>
        </div>
      </div>
      
      {/* Col 2: Fleet Charters */}
      <div>
        <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
          Charter Fleet
        </h4>
        <ul className="space-y-2.5 text-xs">
          <li><Link href="/luxury-coach-bus-charter" className="hover:text-red-400 transition">56 Passenger Luxury Coach</Link></li>
          <li><Link href="/mini-coach-bus-charter" className="hover:text-red-400 transition">24 - 36 Passenger Minibus</Link></li>
          <li><Link href="/14-passenger-van-service" className="hover:text-red-400 transition">14 Passenger Sprinter Van</Link></li>
          <li><Link href="/school-bus-charter" className="hover:text-red-400 transition">48 - 56 Passenger School Bus</Link></li>
          <li><Link href="/pricing" className="hover:text-red-400 transition font-bold text-red-400">Charter Bus Rates & Pricing →</Link></li>
        </ul>
      </div>

      {/* Col 3: Specialized Services */}
      <div>
        <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
          Charter Services
        </h4>
        <ul className="space-y-2.5 text-xs">
          <li><Link href="/services/corporate-transportation" className="hover:text-red-400 transition">Corporate Event Bus Rental</Link></li>
          <li><Link href="/services/wedding-shuttle" className="hover:text-red-400 transition">Wedding Shuttle Rentals</Link></li>
          <li><Link href="/services/school-trip-transportation" className="hover:text-red-400 transition">School Field Trip Buses</Link></li>
          <li><Link href="/services/sports-team-transportation" className="hover:text-red-400 transition">Sports Team Bus Rentals</Link></li>
          <li><Link href="/services/private-bus-tours" className="hover:text-red-400 transition">Private Bus Tours & Niagara</Link></li>
          <li><Link href="/services/airport-group-transfers" className="hover:text-red-400 transition">Pearson YYZ Airport Transfers</Link></li>
        </ul>
      </div>

      {/* Col 4: Top Destinations & Contact */}
      <div>
        <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
          Destinations & Guides
        </h4>
        <ul className="space-y-2.5 text-xs">
          <li><Link href="/charter-bus-rental-toronto" className="hover:text-red-400 transition font-semibold text-white">Charter Bus Rental Toronto</Link></li>
          <li><Link href="/pricing" className="hover:text-red-400 transition">Cost to Rent a Bus in Canada</Link></li>
          <li><Link href="/tours" className="hover:text-red-400 transition">Ontario Group Day Tours</Link></li>
          <li><Link href="/charter-bus-service-mississauga" className="hover:text-red-400 transition">Mississauga Charter Bus</Link></li>
          <li><Link href="/charter-bus-service-brampton" className="hover:text-red-400 transition">Brampton Coach Bus</Link></li>
          <li><Link href="/about" className="hover:text-red-400 transition">About Canada Tours Coach</Link></li>
          <li><Link href="/contact" className="hover:text-red-400 transition">Contact & 24/7 Dispatch</Link></li>
        </ul>
      </div>

    </div>
    
    <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div>
        &copy; {new Date().getFullYear()} Tours Coach Charters (Canada Tours Coach LTD). All rights reserved.
      </div>
      <div className="flex gap-4">
        <Link href="/pricing" className="hover:text-slate-300">Pricing Guide</Link>
        <Link href="/sitemap.xml" className="hover:text-slate-300">Sitemap</Link>
      </div>
    </div>
  </footer>
);

export const QuoteForm = ({ onClose }) => {
  const router = useRouter(); 
  const { quoteData, setQuoteData } = useQuote();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [tripType, setTripType] = useState('return');
  const [step, setStep] = useState(1);
  const [passengers, setPassengers] = useState(quoteData.passengers || '45');
  const [selectedVehicle, setSelectedVehicle] = useState(quoteData.vehicle || 'luxury-coach-bus-charter');
  
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [pickupTime, setPickupTime] = useState('09:00');
  const [returnTime, setReturnTime] = useState('18:00');
  const [specialNotes, setSpecialNotes] = useState('');
  const [errors, setErrors] = useState({});

  const today = new Date();

  // Quick preset data
  const QUICK_PICKUPS = [
    "Toronto / GTA",
    "Mississauga",
    "Brampton",
    "Markham",
    "YYZ Airport",
    "Pickering / Durham"
  ];

  const QUICK_DESTINATIONS = [
    "Niagara Falls, ON",
    "Downtown Toronto",
    "Montreal, QC",
    "Ottawa, ON",
    "Blue Mountain",
    "Muskoka / Algonquin"
  ];

  const PASSENGER_PRESETS = [
    { label: "1-14", count: "14", vehicle: "14-passenger-van-service" },
    { label: "15-28", count: "28", vehicle: "mini-coach-bus-charter" },
    { label: "29-36", count: "36", vehicle: "mini-coach-bus-charter" },
    { label: "37-56", count: "56", vehicle: "luxury-coach-bus-charter" },
    { label: "56+", count: "100", vehicle: "luxury-coach-bus-charter" }
  ];

  const FLEET_TYPES = [
    {
      id: "luxury-coach-bus-charter",
      name: "Luxury Coach Bus",
      seats: "47 - 56 Seats",
      icon: BusFront,
      tag: "Most Popular",
      desc: "Restroom, Wi-Fi, 110V outlets & large luggage hold"
    },
    {
      id: "mini-coach-bus-charter",
      name: "Executive Mini Coach",
      seats: "24 - 36 Seats",
      icon: BusFront,
      tag: "Corporate & Weddings",
      desc: "Leather seating, panoramic windows, overhead luggage"
    },
    {
      id: "14-passenger-van-service",
      name: "14-Passenger Van",
      seats: "Up to 14 Seats",
      icon: Car,
      tag: "Airport & VIP",
      desc: "High-roof Mercedes Sprinter, airport luggage"
    },
    {
      id: "school-bus-charter",
      name: "Standard School Bus",
      seats: "Up to 70 Seats",
      icon: BusFront,
      tag: "Budget Friendly",
      desc: "Economical & safe student or team transit"
    },
    {
      id: "any",
      name: "Best Value Match",
      seats: "Optimal Fleet",
      icon: Sparkles,
      tag: "Lowest Price",
      desc: "Dispatch team selects optimal vehicle"
    }
  ];

  const TIME_PRESETS = [
    { label: "Morning (8:00 AM)", value: "08:00" },
    { label: "Midday (11:00 AM)", value: "11:00" },
    { label: "Afternoon (2:00 PM)", value: "14:00" },
    { label: "Evening (5:00 PM)", value: "17:00" }
  ];

  const QUICK_TAGS = [
    "Airport Luggage Assistance",
    "Multiple Scheduled Stops",
    "Luggage Trailer Required",
    "Wedding Shuttle Timetable",
    "Wheelchair Accessibility Lift"
  ];

  const formatDateForCRM = (dateObj) => {
    if (!dateObj) return '';
    const d = dateObj.getDate().toString().padStart(2, '0');
    const m = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const y = dateObj.getFullYear();
    return `${d}/${m}/${y}`;
  };

  const formatDateDisplay = (dateObj) => {
    if (!dateObj) return '';
    return dateObj.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Adjust passenger count via stepper
  const adjustPassengers = (delta) => {
    const current = parseInt(passengers) || 45;
    const next = Math.max(1, current + delta);
    setPassengers(next.toString());
    setErrors(prev => ({ ...prev, passengers: undefined }));
    
    // Auto-recommend vehicle
    if (next <= 14) setSelectedVehicle("14-passenger-van-service");
    else if (next <= 36) setSelectedVehicle("mini-coach-bus-charter");
    else setSelectedVehicle("luxury-coach-bus-charter");
  };

  // Swap pickup & destination
  const handleSwapLocations = () => {
    const currentPickup = quoteData.pickup || '';
    const currentDest = quoteData.destination || '';
    setQuoteData({
      ...quoteData,
      pickup: currentDest,
      destination: currentPickup
    });
    setErrors(prev => ({ ...prev, pickup: undefined, destination: undefined }));
  };

  // Smart Date Preset
  const handleDatePreset = (presetType) => {
    const d = new Date();
    if (presetType === 'tomorrow') {
      d.setDate(d.getDate() + 1);
      setDepartDate(d);
      if (tripType === 'return') {
        const ret = new Date(d);
        ret.setDate(ret.getDate() + 1);
        setReturnDate(ret);
      }
    } else if (presetType === 'weekend') {
      const day = d.getDay();
      const diff = (6 - day + 7) % 7 || 7;
      d.setDate(d.getDate() + diff);
      setDepartDate(d);
      if (tripType === 'return') {
        const ret = new Date(d);
        ret.setDate(ret.getDate() + 1);
        setReturnDate(ret);
      }
    } else if (presetType === 'next-weekend') {
      const day = d.getDay();
      const diff = ((6 - day + 7) % 7 || 7) + 7;
      d.setDate(d.getDate() + diff);
      setDepartDate(d);
      if (tripType === 'return') {
        const ret = new Date(d);
        ret.setDate(ret.getDate() + 1);
        setReturnDate(ret);
      }
    } else if (presetType === 'next-month') {
      d.setDate(d.getDate() + 30);
      setDepartDate(d);
      if (tripType === 'return') {
        const ret = new Date(d);
        ret.setDate(ret.getDate() + 2);
        setReturnDate(ret);
      }
    }
    setErrors(prev => ({ ...prev, departDate: undefined, returnDate: undefined }));
  };

  // Append a quick tag to the notes
  const handleAddTag = (tag) => {
    setSpecialNotes(prev => {
      if (prev.includes(tag)) return prev;
      return prev ? `${prev}; ${tag}` : tag;
    });
  };

  // Validation before step 2 (without annoying alert popups)
  const handleNextStep = () => {
    const newErrors = {};
    if (!quoteData.pickup || quoteData.pickup.trim() === '') {
      newErrors.pickup = "Please enter or pick a pickup location";
    }
    if (!quoteData.destination || quoteData.destination.trim() === '') {
      newErrors.destination = "Please enter or pick a destination";
    }
    if (!departDate) {
      newErrors.departDate = "Please choose a departure date";
    }
    if (tripType === 'return' && !returnDate) {
      newErrors.returnDate = "Please choose a return date";
    }
    if (!passengers || parseInt(passengers) < 1) {
      newErrors.passengers = "Please enter the number of passengers";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return; 

    setIsSending(true);
    const form = e.target;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    payload.pickup = quoteData.pickup;
    payload.destination = quoteData.destination;
    payload.tripType = tripType;
    payload.passengers = passengers;
    payload.vehicle = selectedVehicle;
    payload.pickupTime = pickupTime;
    payload.info = specialNotes ? (payload.info ? `${payload.info}\nSpecial Notes: ${specialNotes}` : specialNotes) : (payload.info || '');
    
    payload.departDate = formatDateForCRM(departDate);
    if (tripType === 'return') {
      payload.returnDate = formatDateForCRM(returnDate);
      payload.returnTime = returnTime;
    } else {
      payload.returnDate = "N/A";
      payload.returnTime = "N/A";
    }

    try {
      if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
        await addDoc(collection(db, "leads"), {
          ...payload,
          status: "New",
          createdAt: serverTimestamp(),
          quotedPrice: null,
          assignedVehicle: selectedVehicle,
        });
      }

      fetch('/api/send-auto-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(err => console.error("Auto-reply failed to send:", err));

      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Charter Bus Quote Request',
          currency: 'CAD'
        });
      }

      setIsSuccess(true);

      setTimeout(() => {
        if (onClose) onClose();
        router.push('/thank-you');
      }, 2000);

    } catch (error) {
      console.error("Error saving lead to CRM:", error);
      alert("Error submitting request. Please try again or call dispatch at (647) 948-8424.");
      setIsSending(false); 
    }
  };

  return (
    <div className="bg-white p-5 sm:p-7 md:p-8 rounded-2xl shadow-2xl relative z-10 border-t-4 border-red-600 max-h-[92vh] overflow-y-auto">
      
      <style>{`
        .react-datepicker-wrapper { width: 100%; }
      `}</style>

      {onClose && (
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 hover:bg-gray-100 p-1.5 rounded-full transition-colors z-20"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>
      )}

      {/* Header & Guaranteed Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pr-8">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-blue-900 tracking-tight flex items-center gap-2">
            Request a Free Quote
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
            {step === 1 ? "Step 1 of 2: Trip route & group size" : "Step 2 of 2: Contact & dispatch confirmation"}
          </p>
        </div>
        <div className="self-start sm:self-center">
          <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full border border-red-200">
            <Clock size={12} className="text-red-600 animate-pulse" /> 15-Min Response
          </span>
        </div>
      </div>

      {/* Interactive Step Navigation Tabs */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        <button
          type="button"
          onClick={() => setStep(1)}
          className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition ${
            step === 1
              ? 'bg-blue-900 text-white shadow-sm ring-1 ring-blue-900'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black ${
            step === 1 ? 'bg-red-600 text-white' : 'bg-slate-300 text-slate-700'
          }`}>1</span>
          <span>1. Trip Details</span>
        </button>
        <button
          type="button"
          onClick={() => {
            if (step === 1) handleNextStep();
          }}
          className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition ${
            step === 2
              ? 'bg-blue-900 text-white shadow-sm ring-1 ring-blue-900'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black ${
            step === 2 ? 'bg-red-600 text-white' : 'bg-slate-300 text-slate-700'
          }`}>2</span>
          <span>2. Contact Info</span>
        </button>
      </div>

      {/* SUCCESS STATE CELEBRATION */}
      {isSuccess ? (
        <div className="py-8 text-center animate-fade-in-up">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <CheckCircle size={36} />
          </div>
          <h4 className="text-2xl font-black text-slate-900 mb-2">Quote Request Dispatched!</h4>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Thank you! Our operations dispatch team is currently reviewing your route details. A custom quote has been sent to our dispatchers for rapid turnaround.
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5 text-slate-700">
            <div className="flex justify-between font-bold text-slate-900 pb-1 border-b border-slate-200">
              <span>Status:</span> <span className="text-green-600">Pending Review</span>
            </div>
            <div className="flex justify-between">
              <span>Departure:</span> <span>{formatDateDisplay(departDate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Group Size:</span> <span>{passengers} Passengers</span>
            </div>
          </div>
          <div className="mt-6 flex justify-center items-center text-xs text-slate-500 gap-1">
            <Clock size={13} className="animate-spin text-blue-900" /> Redirecting to confirmation page...
          </div>
        </div>
      ) : (

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* ================= STEP 1: TRIP DETAILS ================= */}
          <div className={step === 1 ? 'block space-y-4 animate-fade-in-up' : 'hidden'}>
            
            {/* Interactive Trip Type Toggle */}
            <div className="flex items-center justify-between bg-slate-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setTripType('return')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                  tripType === 'return' 
                    ? 'bg-blue-900 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ArrowLeftRight size={13} /> Round Trip
              </button>
              <button
                type="button"
                onClick={() => setTripType('oneway')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                  tripType === 'oneway' 
                    ? 'bg-blue-900 text-white shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ArrowRight size={13} /> One Way
              </button>
            </div>

            {/* PICKUP LOCATION */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide">
                  Pickup Location <span className="text-red-500 font-semibold normal-case tracking-normal ml-0.5">(Required)</span>
                </label>
                {quoteData.pickup && (
                  <button 
                    type="button" 
                    onClick={() => setQuoteData({ ...quoteData, pickup: '' })}
                    className="text-[11px] text-slate-400 hover:text-red-600 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className={`relative w-full bg-white border rounded-lg focus-within:ring-2 focus-within:ring-blue-800 transition text-sm ${
                errors.pickup ? 'border-red-500 bg-red-50/30' : 'border-gray-300 hover:border-gray-400'
              }`}>
                <GooglePlacesInput
                  placeholder="Enter city, airport, hotel, or street address..."
                  value={quoteData.pickup}
                  onChange={(val) => {
                    setQuoteData(prev => ({ ...prev, pickup: val }));
                    if (val) setErrors(prev => ({ ...prev, pickup: undefined }));
                  }}
                  className="w-full px-3.5 py-2.5 text-sm outline-none bg-transparent text-gray-900 rounded-lg placeholder-slate-400"
                />
              </div>
              {errors.pickup && (
                <p className="text-xs text-red-600 font-semibold mt-1 flex items-center">
                  <AlertCircle size={13} className="mr-1 flex-shrink-0" /> {errors.pickup}
                </p>
              )}

              {/* Quick Pickup Location Chips */}
              <div className="flex items-center flex-wrap gap-1.5 mt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">Popular:</span>
                {QUICK_PICKUPS.map(city => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => {
                      setQuoteData({ ...quoteData, pickup: city });
                      setErrors(prev => ({ ...prev, pickup: undefined }));
                    }}
                    className={`text-[11px] px-2 py-0.5 rounded-full border transition cursor-pointer ${
                      quoteData.pickup === city 
                        ? 'bg-blue-900 text-white border-blue-900 font-bold' 
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-900'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* INTERACTIVE SWAP BUTTON */}
            <div className="flex items-center justify-center my-0.5">
              <div className="h-px bg-slate-200 flex-1"></div>
              <button
                type="button"
                onClick={handleSwapLocations}
                className="mx-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition shadow-2xs active:scale-95 cursor-pointer"
                title="Swap Pickup and Destination"
              >
                <ArrowLeftRight size={12} className="text-red-600" />
                <span>Swap Route</span>
              </button>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            {/* DESTINATION LOCATION */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide">
                  Destination <span className="text-red-500 font-semibold normal-case tracking-normal ml-0.5">(Required)</span>
                </label>
                {quoteData.destination && (
                  <button 
                    type="button" 
                    onClick={() => setQuoteData({ ...quoteData, destination: '' })}
                    className="text-[11px] text-slate-400 hover:text-red-600 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
              <div className={`relative w-full bg-white border rounded-lg focus-within:ring-2 focus-within:ring-blue-800 transition text-sm ${
                errors.destination ? 'border-red-500 bg-red-50/30' : 'border-gray-300 hover:border-gray-400'
              }`}>
                <GooglePlacesInput
                  placeholder="Enter destination, event venue, or landmark..."
                  value={quoteData.destination}
                  onChange={(val) => {
                    setQuoteData(prev => ({ ...prev, destination: val }));
                    if (val) setErrors(prev => ({ ...prev, destination: undefined }));
                  }}
                  className="w-full px-3.5 py-2.5 text-sm outline-none bg-transparent text-gray-900 rounded-lg placeholder-slate-400"
                />
              </div>
              {errors.destination && (
                <p className="text-xs text-red-600 font-semibold mt-1 flex items-center">
                  <AlertCircle size={13} className="mr-1 flex-shrink-0" /> {errors.destination}
                </p>
              )}

              {/* Quick Destination Location Chips */}
              <div className="flex items-center flex-wrap gap-1.5 mt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">Popular:</span>
                {QUICK_DESTINATIONS.map(city => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => {
                      setQuoteData({ ...quoteData, destination: city });
                      setErrors(prev => ({ ...prev, destination: undefined }));
                    }}
                    className={`text-[11px] px-2 py-0.5 rounded-full border transition cursor-pointer ${
                      quoteData.destination === city 
                        ? 'bg-blue-900 text-white border-blue-900 font-bold' 
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-blue-900'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* DATES WITH SMART SHORTCUTS */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                <div className="w-full">
                  <label className="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide flex items-center gap-1">
                    <Calendar size={13} className="text-blue-900" /> Departure Date <span className="text-red-500 font-semibold normal-case tracking-normal ml-0.5">*</span>
                  </label>
                  <DatePicker 
                    selected={departDate}
                    onChange={(date) => {
                      setDepartDate(date);
                      setErrors(prev => ({ ...prev, departDate: undefined }));
                      if (tripType === 'return' && (!returnDate || returnDate < date)) {
                        setReturnDate(date);
                      }
                    }}
                    dateFormat="dd/MM/yyyy"
                    minDate={today}
                    placeholderText="dd/mm/yyyy"
                    className={`w-full px-3 py-2 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-sm transition ${
                      errors.departDate ? 'border-red-500 bg-red-50/40' : 'border-gray-300 hover:border-gray-400 bg-white'
                    }`}
                  />
                  {errors.departDate && (
                    <p className="text-xs text-red-600 font-semibold mt-1 flex items-center">
                      <AlertCircle size={13} className="mr-1 flex-shrink-0" /> {errors.departDate}
                    </p>
                  )}
                </div>
                {tripType === 'return' && (
                  <div className="animate-fade-in-up w-full">
                    <label className="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide flex items-center gap-1">
                      <Calendar size={13} className="text-blue-900" /> Return Date <span className="text-red-500 font-semibold normal-case tracking-normal ml-0.5">*</span>
                    </label>
                    <DatePicker 
                      selected={returnDate}
                      onChange={(date) => {
                        setReturnDate(date);
                        setErrors(prev => ({ ...prev, returnDate: undefined }));
                      }}
                      dateFormat="dd/MM/yyyy"
                      minDate={departDate || today}
                      placeholderText="dd/mm/yyyy"
                      className={`w-full px-3 py-2 bg-white border rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-sm transition ${
                        errors.returnDate ? 'border-red-500 bg-red-50/40' : 'border-gray-300 hover:border-gray-400'
                      }`}
                    />
                    {errors.returnDate && (
                      <p className="text-xs text-red-600 font-semibold mt-1 flex items-center">
                        <AlertCircle size={13} className="mr-1 flex-shrink-0" /> {errors.returnDate}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Quick Date Presets */}
              <div className="flex items-center flex-wrap gap-1.5 pt-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">Quick Date:</span>
                <button
                  type="button"
                  onClick={() => handleDatePreset('tomorrow')}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition cursor-pointer"
                >
                  Tomorrow
                </button>
                <button
                  type="button"
                  onClick={() => handleDatePreset('weekend')}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition cursor-pointer"
                >
                  This Saturday
                </button>
                <button
                  type="button"
                  onClick={() => handleDatePreset('next-weekend')}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition cursor-pointer"
                >
                  Next Weekend
                </button>
                <button
                  type="button"
                  onClick={() => handleDatePreset('next-month')}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition cursor-pointer"
                >
                  In 30 Days
                </button>
              </div>
            </div>

            {/* PASSENGERS & VEHICLE TYPE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Interactive Passenger Stepper */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide">
                    Passengers <span className="text-red-500 font-semibold normal-case tracking-normal ml-0.5">(Required)</span>
                  </label>
                  <span className="text-[11px] font-bold text-blue-900">
                    {parseInt(passengers) > 56 ? "Multi-Coach Fleet" : parseInt(passengers) > 36 ? "Full Coach" : parseInt(passengers) > 14 ? "Mini Coach" : "Van"}
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5">
                  <button 
                    type="button"
                    onClick={() => adjustPassengers(-5)}
                    className="h-10 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 transition active:scale-95 cursor-pointer"
                    title="Decrease 5"
                  >
                    -5
                  </button>
                  <button 
                    type="button"
                    onClick={() => adjustPassengers(-1)}
                    className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold border border-slate-300 transition active:scale-95 cursor-pointer"
                    title="Decrease 1"
                  >
                    <Minus size={14} />
                  </button>
                  
                  <input 
                    value={passengers} 
                    onChange={(e) => {
                      setPassengers(e.target.value);
                      setErrors(prev => ({ ...prev, passengers: undefined }));
                    }} 
                    type="number" 
                    min="1" 
                    className={`w-full text-center font-black text-base py-2 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-800 outline-none transition ${
                      errors.passengers ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                    }`} 
                    placeholder="45" 
                  />

                  <button 
                    type="button"
                    onClick={() => adjustPassengers(1)}
                    className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold border border-slate-300 transition active:scale-95 cursor-pointer"
                    title="Increase 1"
                  >
                    <Plus size={14} />
                  </button>
                  <button 
                    type="button"
                    onClick={() => adjustPassengers(5)}
                    className="h-10 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 transition active:scale-95 cursor-pointer"
                    title="Increase 5"
                  >
                    +5
                  </button>
                </div>

                {errors.passengers && (
                  <p className="text-xs text-red-600 font-semibold mt-1 flex items-center">
                    <AlertCircle size={13} className="mr-1 flex-shrink-0" /> {errors.passengers}
                  </p>
                )}

                {/* Quick Passenger Group Size Pills */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {PASSENGER_PRESETS.map((p) => {
                    const isSelected = passengers === p.count;
                    return (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => {
                          setPassengers(p.count);
                          setSelectedVehicle(p.vehicle);
                          setErrors(prev => ({ ...prev, passengers: undefined }));
                        }}
                        className={`px-2 py-0.5 rounded text-[11px] font-semibold transition cursor-pointer ${
                          isSelected
                            ? 'bg-blue-900 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {p.label} pax
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Vehicle Type Selection */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-gray-800 uppercase tracking-wide">
                    Vehicle Type <span className="text-slate-400 font-normal normal-case tracking-normal ml-0.5">(Optional)</span>
                  </label>
                  <span className="text-[11px] text-green-700 font-bold flex items-center gap-1">
                    <Check size={11} /> Matched
                  </span>
                </div>
                <select 
                  name="vehicle" 
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full px-3 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none bg-white text-sm font-semibold cursor-pointer"
                >
                  <option value="luxury-coach-bus-charter">🚌 Luxury Highway Coach (47-56 Seats)</option>
                  <option value="mini-coach-bus-charter">🚐 Executive Mini Coach (24-36 Seats)</option>
                  <option value="14-passenger-van-service">🚐 14-Passenger Sprinter Van (Up to 14)</option>
                  <option value="school-bus-charter">🚍 Standard School Bus (Up to 70)</option>
                  <option value="any">✨ Best Match (Let Dispatch Optimize Rate)</option>
                </select>
                <p className="text-[11px] text-slate-500 mt-1.5 leading-snug">
                  {FLEET_TYPES.find(f => f.id === selectedVehicle)?.desc || "Full fleet available across Canada."}
                </p>
              </div>
            </div>

            {/* CONTINUE BUTTON */}
            <button 
              type="button" 
              onClick={handleNextStep}
              className="w-full bg-blue-800 text-white font-black py-3.5 px-4 rounded-xl hover:bg-blue-900 transition shadow-lg mt-3 flex justify-center items-center gap-2 group text-sm sm:text-base cursor-pointer"
            >
              <span>Next Step: Contact Details</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>

          {/* ================= STEP 2: CONTACT & QUOTE DISPATCH ================= */}
          <div className={step === 2 ? 'block space-y-4 animate-fade-in-up' : 'hidden'}>
            
            {/* Interactive Trip Summary Pill */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
              <div className="space-y-1">
                <div className="flex items-center text-xs font-black text-blue-950 uppercase tracking-wide">
                  <span className="bg-blue-900 text-white px-2 py-0.5 rounded text-[10px] mr-2">
                    {tripType === 'return' ? 'Round Trip' : 'One Way'}
                  </span>
                  <span>{quoteData.pickup || 'Pickup'} ➔ {quoteData.destination || 'Destination'}</span>
                </div>
                <div className="text-xs text-blue-800 flex flex-wrap gap-x-3 gap-y-1 font-semibold">
                  <span>👥 {passengers} Pax</span>
                  <span>🚌 {FLEET_TYPES.find(f => f.id === selectedVehicle)?.name || 'Charter Coach'}</span>
                  <span>📅 {formatDateDisplay(departDate)}{tripType === 'return' && returnDate ? ` → ${formatDateDisplay(returnDate)}` : ''}</span>
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => setStep(1)}
                className="text-xs font-bold text-red-600 hover:text-red-700 bg-white px-2.5 py-1 rounded-md border border-red-200 hover:border-red-300 shadow-2xs transition whitespace-nowrap self-end sm:self-center cursor-pointer"
              >
                ✏️ Edit Route
              </button>
            </div>

            {/* NAME INPUT */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide flex items-center gap-1.5">
                <Users size={13} className="text-blue-900" /> Full Name <span className="text-red-500 font-semibold normal-case tracking-normal ml-0.5">(Required)</span>
              </label>
              <input 
                required={step === 2} 
                name="fullName" 
                type="text" 
                className="w-full px-3.5 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-sm bg-white" 
                placeholder="e.g. Sarah Jenkins" 
              />
            </div>

            {/* EMAIL & PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide flex items-center gap-1.5">
                  <Mail size={13} className="text-blue-900" /> Email Address <span className="text-red-500 font-semibold normal-case tracking-normal ml-0.5">(Required)</span>
                </label>
                <input 
                  required={step === 2} 
                  name="email" 
                  type="email" 
                  className="w-full px-3.5 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-sm bg-white" 
                  placeholder="sarah@company.com" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide flex items-center gap-1.5">
                  <Phone size={13} className="text-blue-900" /> Phone Number <span className="text-red-500 font-semibold normal-case tracking-normal ml-0.5">(Required)</span>
                </label>
                <input 
                  required={step === 2} 
                  name="phone" 
                  type="tel" 
                  className="w-full px-3.5 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-sm bg-white" 
                  placeholder="(416) 123-4567" 
                />
              </div>
            </div>

            {/* PICKUP & RETURN TIMES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide flex items-center gap-1.5">
                  <Clock size={13} className="text-blue-900" /> Pickup Time <span className="text-red-500 font-semibold normal-case tracking-normal ml-0.5">(Required)</span>
                </label>
                <input 
                  required={step === 2} 
                  name="pickupTime" 
                  type="time" 
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-sm bg-white font-semibold" 
                />
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {TIME_PRESETS.map(t => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setPickupTime(t.value)}
                      className={`text-[10px] px-2 py-0.5 rounded border transition cursor-pointer ${
                        pickupTime === t.value 
                          ? 'bg-blue-900 text-white border-blue-900 font-bold' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {tripType === 'return' && (
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide flex items-center gap-1.5">
                    <Clock size={13} className="text-blue-900" /> Return Time <span className="text-red-500 font-semibold normal-case tracking-normal ml-0.5">(Required)</span>
                  </label>
                  <input 
                    required={step === 2} 
                    name="returnTime" 
                    type="time" 
                    value={returnTime}
                    onChange={(e) => setReturnTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-sm bg-white font-semibold" 
                  />
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {TIME_PRESETS.map(t => (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setReturnTime(t.value)}
                        className={`text-[10px] px-2 py-0.5 rounded border transition cursor-pointer ${
                          returnTime === t.value 
                            ? 'bg-blue-900 text-white border-blue-900 font-bold' 
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SPECIAL REQUESTS & QUICK TAGS */}
            <div>
              <label className="block text-xs font-bold text-gray-800 mb-1 uppercase tracking-wide">
                Special Requests & Itinerary Notes <span className="text-gray-400 normal-case tracking-normal font-normal ml-1">(Optional)</span>
              </label>
              
              {/* Quick Tag Insert Buttons */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider self-center">Add:</span>
                {QUICK_TAGS.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleAddTag(tag)}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition font-medium cursor-pointer"
                  >
                    + {tag}
                  </button>
                ))}
              </div>

              <textarea 
                name="info" 
                value={specialNotes}
                onChange={(e) => setSpecialNotes(e.target.value)}
                className="w-full px-3.5 py-2.5 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 outline-none text-sm bg-white" 
                rows="2" 
                placeholder="Flight numbers, intermediate stops, wedding party details, or special requests..."
              ></textarea>
            </div>

            {/* GUARANTEE & DISPATCH BADGES */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                <span className="font-semibold text-slate-800">5% Price Beat Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-blue-800 flex-shrink-0" />
                <span className="font-semibold text-slate-800">CVOR & DOT Fully Certified</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 pt-1">
              <button 
                type="button" 
                onClick={() => setStep(1)}
                className="w-1/3 bg-slate-100 text-slate-700 font-bold py-3.5 px-3 rounded-xl hover:bg-slate-200 transition flex justify-center items-center text-sm border border-slate-200 cursor-pointer"
              >
                <ChevronLeft size={16} className="mr-1" /> Back
              </button>
              <button 
                disabled={isSending} 
                type="submit" 
                className={`w-2/3 bg-red-600 text-white font-black py-3.5 px-4 rounded-xl hover:bg-red-700 transition shadow-lg flex justify-center items-center text-sm sm:text-base gap-2 cursor-pointer ${
                  isSending ? 'opacity-80 cursor-wait' : ''
                }`}
              >
                {isSending ? (
                  <>
                    <Clock size={16} className="animate-spin" />
                    <span>Dispatching Quote...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Free Quote</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="pt-2 text-center text-[11px] text-gray-500 flex items-center justify-center gap-3">
            <span className="flex items-center">
              <ShieldCheck size={13} className="text-green-600 mr-1" /> 256-Bit SSL Encrypted
            </span>
            <span>•</span>
            <span className="flex items-center">
              <Phone size={11} className="text-blue-900 mr-1" /> Immediate Dispatch: <a href="tel:(647)948-8424" className="font-bold text-blue-900 ml-0.5 hover:underline">(647) 948-8424</a>
            </span>
          </div>
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
    const numValue = parseInt(value, 10) || 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOut * numValue));
      if (percentage < 1) window.requestAnimationFrame(step);
      else setCount(numValue);
    };
    window.requestAnimationFrame(step);
  }, [value, duration, isVisible]);

  return <span ref={domRef}>{count.toLocaleString()}{suffix}</span>;
};

export const TrustStatsBanner = () => {
  const STATS = [
    {
      value: "15",
      suffix: "+",
      label: "Years Experience",
      badge: "EST. 2011",
      icon: Award,
      iconBg: "bg-red-500/15 text-red-400 border-red-500/30",
      accent: "from-red-500 via-rose-500 to-amber-500",
      desc: "Delivering safe, punctual group travel across Ontario, Québec, and cross-border US destinations."
    },
    {
      value: "5000",
      suffix: "+",
      label: "Successful Trips",
      badge: "COAST-TO-COAST",
      icon: Route,
      iconBg: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      accent: "from-blue-500 via-indigo-500 to-cyan-400",
      desc: "Punctual arrivals for corporate summits, wedding parties, varsity athletics, and multi-day tours."
    },
    {
      value: "100",
      suffix: "%",
      label: "Fully Insured",
      badge: "MTO & USDOT",
      icon: ShieldCheck,
      iconBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      accent: "from-emerald-500 via-teal-500 to-cyan-400",
      desc: "$10M commercial liability coverage, CVOR Master rated, with rigorous preventative safety inspections."
    },
    {
      value: "24",
      suffix: "/7",
      label: "Client Support",
      badge: "LIVE DISPATCH",
      icon: Headphones,
      iconBg: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      accent: "from-amber-500 via-orange-500 to-red-500",
      desc: "Dedicated Toronto logistics coordinators on call around the clock for route updates and emergency dispatch."
    }
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl p-6 sm:p-8 md:p-12 my-6">
      {/* Dynamic ambient radial lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-red-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950/20 via-transparent to-transparent"></div>
      </div>

      {/* Header section with Canadian Trust Kicker */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs font-bold text-red-400 uppercase tracking-wider mb-3 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Ontario & Canada Fleet Metrics
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
          Canada's Most Reliable Charter Fleet
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mt-2.5 leading-relaxed">
          Punctual, safety-first group transportation backed by licensed drivers, certified coaches, and dedicated 24/7 dispatch.
        </p>
      </div>

      {/* 4 Interactive Stat Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map((stat, i) => {
          const IconComp = stat.icon;
          return (
            <div 
              key={i}
              className="relative group bg-slate-800/60 hover:bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Top Accent Gradient Line */}
              <div className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${stat.accent} opacity-60 group-hover:opacity-100 transition-opacity rounded-full`}></div>

              <div>
                {/* Icon & Micro Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${stat.iconBg} transition-transform duration-300 group-hover:scale-110 shadow-md`}>
                    <IconComp size={22} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/70">
                    {stat.badge}
                  </span>
                </div>

                {/* Animated Number */}
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1 flex items-baseline">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Metric Label */}
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-200 mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {stat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Trust Verification Strip */}
      <div className="relative z-10 mt-10 pt-7 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-between gap-y-3 gap-x-6 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-slate-300">CVOR & USDOT Safety Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={15} className="text-blue-400" />
          <span>$10,000,000 Commercial Liability</span>
        </div>
        <div className="flex items-center gap-2">
          <Star size={15} className="text-yellow-400 fill-yellow-400" />
          <span className="font-semibold text-slate-300">4.9/5 Rating Across 800+ Groups</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base leading-none">🍁</span>
          <span>100% Canadian Owned & Operated</span>
        </div>
      </div>
    </div>
  );
};

// NEW REUSABLE CLIENT LOGOS COMPONENT
export const ClientLogos = () => (
  <section className="py-12 bg-white overflow-hidden border-b border-gray-100">
    <div className="container mx-auto px-4 max-w-6xl">
      <h3 className="text-slate-800 font-bold uppercase tracking-wider text-lg mb-8 text-left">
        Customers We've Served:
      </h3>
      <div className="flex flex-wrap items-center justify-start gap-8 md:gap-14">
        <img src="/deloitte.png" alt="Deloitte" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
        <img src="/loblaws.png" alt="Loblaws" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
        <img src="/shoppers.png" alt="Shoppers Drug Mart" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
        <img src="/uoft.png" alt="University of Toronto" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
        <img src="/yorku.png" alt="York University" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
        <img src="/td.png" alt="TD Bank" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
        <img src="/amadeus.png" alt="Amadeus" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
        <img src="/rogers.png" alt="Rogers" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
        <img src="/humber.png" alt="Humber" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
        <img src="/scotiabank.png" alt="Scotiabank" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
        <img src="/peel.png" alt="Peel District School Board" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
        <img src="/accenture.png" alt="Accenture" className="h-8 md:h-12 object-contain hover:scale-105 transition-transform" />
      </div>
    </div>
  </section>
);

export const ChatWidget = () => null;

export const TourImage = ({ src, alt, className = "", isHero = false }) => {
  const [currentSrc, setCurrentSrc] = useState(src || "/service-tours.jpg");
  const [hasError, setHasError] = useState(false);

  const fallback = isHero ? "/home-hero.jpg" : "/service-tours.jpg";

  return (
    <div className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden">
      <img 
        src={hasError ? fallback : currentSrc} 
        alt={alt || "Tours Coach Charters"} 
        className={`${className} w-full h-full object-cover transition-transform duration-700`}
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setCurrentSrc(fallback);
          }
        }}
      />
    </div>
  );
};

export const AboutUs = ({ setIsQuoteModalOpen }) => (
  <div className="w-full bg-slate-50 flex flex-col font-sans">
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-blue-800 text-center overflow-hidden">
       <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="/about-banner.jpg" 
          alt="About Canada Tours Coach" 
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.target.src = "/home-hero.jpg" }} // Fallback if no specific banner exists
        />
        <div className="relative z-20 container mx-auto px-4 animate-fade-in-up">
          <div className="inline-block bg-red-600 text-white font-bold px-3 py-1 rounded-full text-sm mb-6 uppercase tracking-wider">
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Driven By Excellence</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Canada Tours Coach LTD has been the trusted partner for group transportation across the nation, delivering safety, comfort, and reliability on every journey.
          </p>
        </div>
    </div>

    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto mb-20">
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight">Canada's Premier Transportation Partner</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            At Canada Tours Coach LTD, we believe that the journey is just as important as the destination. For over 15 years, we have specialized in providing top-tier charter bus rentals, corporate shuttles, and specialized event transportation.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Headquartered in Pickering, Ontario, we proudly service the Greater Toronto Area and coordinate long-distance travel from coast to coast. From intimate family gatherings to massive corporate conventions and the upcoming FIFA 2026 World Cup, our logistics experts and professional drivers ensure your group moves effortlessly.
          </p>
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="inline-flex items-center justify-center bg-red-600 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Your Journey <ArrowRight size={18} className="ml-2" />
          </button>
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
            <div className="w-16 h-16 bg-blue-50 text-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <value.icon size={32} />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-slate-900">{value.title}</h3>
            <p className="text-slate-600 leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="mb-16">
      <TrustStatsBanner />
    </div>
  </div>
);

export const ContactUs = ({ setIsQuoteModalOpen }) => {
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
          <img 
            src="/contact-banner.jpg" 
            alt="Contact Canada Tours Coach" 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.target.src = "/home-hero.jpg" }}
          />
          <div className="relative z-20 container mx-auto px-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Whether you need a quick quote, have a question about our fleet, or want to coordinate a massive event, our team is here to help 24/7.
            </p>
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
                  <div className="bg-blue-50 p-4 rounded-2xl mr-5 group-hover:bg-blue-100 transition-colors text-blue-800">
                    <Map size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Head Office</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      <strong>Canada Tours Coach LTD</strong><br/>
                      1315 Pickering Parkway, Suite 300<br/>
                      Pickering, ON L1V 7G5
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-50 p-4 rounded-2xl mr-5 group-hover:bg-blue-100 transition-colors text-blue-800">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone Number</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Call us anytime for immediate assistance or booking inquiries.<br/>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="text-blue-800 font-bold hover:text-red-600 transition-colors text-lg mt-1 block">
                        {COMPANY_INFO.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-blue-50 p-4 rounded-2xl mr-5 group-hover:bg-blue-100 transition-colors text-blue-800">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email Address</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Send us an email and our logistics team will respond promptly.<br/>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-800 font-bold hover:text-red-600 transition-colors block mt-1">
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 space-y-4">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-0.5 text-lg flex justify-center items-center gap-2"
                >
                  Get an Instant Quote <ArrowRight size={20} />
                </button>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`} 
                  className="w-full flex items-center justify-center border-2 border-slate-200 text-blue-900 font-bold rounded-xl px-6 py-4 hover:bg-slate-50 transition-colors text-lg"
                >
                  <Phone size={20} className="mr-2 text-blue-700" />
                  Or call {COMPANY_INFO.phone}
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
                     <div>
                       <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Your Name</label>
                       <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800 focus:bg-white outline-none transition-all" placeholder="John Doe" />
                     </div>
                     <div>
                       <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                       <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800 focus:bg-white outline-none transition-all" placeholder="john@example.com" />
                     </div>
                   </div>
                   
                   <div>
                     <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                     <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800 focus:bg-white outline-none transition-all" placeholder="(555) 123-4567" />
                   </div>

                   <div>
                     <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">How can we help?</label>
                     <textarea required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-800 focus:bg-white outline-none transition-all" rows="5" placeholder="Write your message here..."></textarea>
                   </div>

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

export const FifaPage = ({ setIsQuoteModalOpen }) => {
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
                  <Map className="text-red-600 mr-2" size={24} /> Toronto Stadium (BMO Field)
                </h3>
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
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center group-hover:text-red-600 transition-colors">
                  <Map className="text-red-600 mr-2" size={24} /> Vancouver Stadium (BC Place)
                </h3>
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

export const Home = ({ setPage, setIsQuoteModalOpen }) => {
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
            
            {/* The Embedded Quote Form in the Hero Section */}
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
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  
                  <div className="bg-white/20 backdrop-blur-md text-white w-14 h-14 rounded-full flex items-center justify-center mb-6 border border-white/30 transform group-hover:scale-110 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500 shadow-lg">
                    <service.icon size={26} />
                  </div>
                  
                  <h3 className="font-bold text-2xl text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {service.title}
                  </h3>
                  
                  <div className="overflow-hidden">
                     <p className="text-slate-200 text-sm mb-4 transform translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out leading-relaxed">
                       {service.desc}
                     </p>
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
            
            <div className="md:w-1/2 relative min-h-[400px] md:min-h-[480px] overflow-hidden bg-slate-100">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent z-10 pointer-events-none"></div>
              
              <img 
                key={`img-${currentFleetIdx}`} 
                src={fleetList[currentFleetIdx][1].img} 
                alt={fleetList[currentFleetIdx][1].name} 
                className="absolute inset-0 w-full h-full object-cover animate-soft-fade" 
              />
              
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

            <div className="md:w-1/2 p-8 lg:p-14 flex flex-col justify-center relative bg-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>

              <div key={`content-${currentFleetIdx}`} className="animate-soft-fade">
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
                  <a 
                    href={`/${fleetList[currentFleetIdx][0]}`}
                    onClick={(e) => { e.preventDefault(); setPage(fleetList[currentFleetIdx][0]); window.scrollTo(0,0); }} 
                    className="inline-flex items-center justify-center w-full sm:w-auto bg-slate-900 text-white font-bold py-3.5 px-7 rounded-xl hover:bg-red-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group/btn"
                  >
                    View Vehicle Details <ArrowRight size={18} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  
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

      <ClientLogos />

    </div>
  );
};

export const FleetTemplate = ({ data, setPage, setIsQuoteModalOpen }) => (
  <div className="pt-32 pb-24 w-full bg-slate-50 min-h-screen">
    <div className="container mx-auto px-4">
      
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden flex flex-col lg:flex-row mb-16 border border-slate-100 transform transition-all duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] relative">
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[500px] group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 opacity-60"></div>
          <img 
            src={data.img} 
            alt={data.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-white/90 backdrop-blur-md text-blue-900 px-5 py-2.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 border border-white/20">
              <Users size={18} className="text-red-600" /> 
              {data.pax}
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

export const GenericPage = ({ title, subtitle, bgImage, setPage, setIsQuoteModalOpen }) => (
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
            <p className="text-sm text-gray-700">Fill out our quote form or call us directly at <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-blue-800 hover:underline">{COMPANY_INFO.phone}</a>.</p>
          </div>
          <button onClick={() => setIsQuoteModalOpen(true)} className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-900 transition font-bold shadow-md whitespace-nowrap">
            Get a Free Quote
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const DestinationTemplate = ({ data, setIsQuoteModalOpen }) => {
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
                {data.highlights.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mr-4 flex-shrink-0"><item.icon size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-4 text-center">Ready to arrange your {data.city} transportation?</p>
                <button onClick={() => setIsQuoteModalOpen(true)} className="w-full bg-blue-800 text-white font-bold py-4 rounded-lg hover:bg-blue-900 transition shadow-lg flex justify-center items-center">
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

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, ''); 
      return path && SEO_DATA[path] ? path : 'home';
    }
    return 'home';
  });
  
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state && e.state.page) {
        setCurrentPage(e.state.page);
      } else {
        const path = window.location.pathname.replace('/', '');
        if (path && SEO_DATA[path]) setCurrentPage(path);
        else setCurrentPage('home');
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
    } catch (err) {}
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === 'home') return <Home setPage={setCurrentPage} setIsQuoteModalOpen={setIsQuoteModalOpen} />;
    if (currentPage === 'about') return <AboutUs setIsQuoteModalOpen={setIsQuoteModalOpen} />;
    if (currentPage === 'contact') return <ContactUs setIsQuoteModalOpen={setIsQuoteModalOpen} />;
    if (FLEET_DATA[currentPage]) return <FleetTemplate data={FLEET_DATA[currentPage]} setPage={setCurrentPage} setIsQuoteModalOpen={setIsQuoteModalOpen} />;
    if (DESTINATION_DATA[currentPage]) return <DestinationTemplate data={DESTINATION_DATA[currentPage]} setIsQuoteModalOpen={setIsQuoteModalOpen} />;
    
    switch(currentPage) {
      case 'fifa-world-cup-2026-charters':
        return <FifaPage setIsQuoteModalOpen={setIsQuoteModalOpen} />;
      case 'winter-destinations':
        return <GenericPage title="Winter Destinations" subtitle="Dedicated charter services to Whistler, Blue Mountain, and Banff." bgImage="/winter-banner.jpg" setPage={setCurrentPage} setIsQuoteModalOpen={setIsQuoteModalOpen} />;
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
      
      <Footer setPage={setCurrentPage} />

      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
          <div className="w-full max-w-2xl my-auto animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <QuoteForm onClose={() => setIsQuoteModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}