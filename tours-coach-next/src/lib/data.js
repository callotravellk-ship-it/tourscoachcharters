export const COMPANY_INFO = {
  name: "Canada Tours Coach LTD",
  phone: "(416) 269-9555",
  email: "info@tourscoachcharter.com",
  address: "1315 Pickering Parkway, Suite 300, Pickering, ON L1V 7G5"
};

export const NAV_LINKS = [
  { title: "Home", id: "" },
  { title: "About Us", id: "about" },
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
  { title: "FIFA 2026", id: "fifa-world-cup-2026-charters" },
  { title: "Contact Us", id: "contact" }
];

export const FLEET_DATA = {
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

export const SEO_DATA = {
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

export const DESTINATION_DATA = {
  "charter-bus-rental-toronto": {
    city: "Toronto",
    title: "Charter Coach Bus Service in Toronto",
    subtitle: "Reliable group transportation for the GTA. From corporate events at the Metro Convention Centre to airport transfers at YYZ.",
    img: "/toronto-banner.jpg",
    highlights: [
      { icon: "Building2", title: "Corporate Shuttles", desc: "Downtown & Financial District" },
      { icon: "Landmark", title: "School Trips", desc: "ROM, Zoo & Science Centre" },
      { icon: "Plane", title: "Airport Transfers", desc: "Pearson (YYZ) & Billy Bishop (YTZ)" }
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
      { icon: "Landmark", title: "University Charters", desc: "UofT Scarborough & Centennial College" },
      { icon: "Building2", title: "Corporate Events", desc: "East GTA Business Parks" },
      { icon: "Map", title: "Local Excursions", desc: "Scarborough Bluffs & Rouge Park" }
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
      { icon: "Building2", title: "Corporate Travel", desc: "Business meetings and retreats" },
      { icon: "Trophy", title: "Sports Teams", desc: "Ajax Community Centre events" },
      { icon: "Navigation", title: "Local Excursions", desc: "Durham region tours" }
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
      { icon: "Landmark", title: "Entertainment", desc: "Pickering Casino Resort Trips" },
      { icon: "Users", title: "Private Events", desc: "Weddings and family reunions" },
      { icon: "Plane", title: "Airport Transfers", desc: "Direct to Pearson Airport" }
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
      { icon: "Landmark", title: "University Shuttles", desc: "McMaster University" },
      { icon: "Trophy", title: "Major Events", desc: "FirstOntario Centre & Tim Hortons Field" },
      { icon: "Map", title: "Nature Tours", desc: "Hamilton Waterfalls and trails" }
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
      { icon: "Building2", title: "Corporate Transport", desc: "North York business districts" },
      { icon: "Landmark", title: "Educational Trips", desc: "York University & Aga Khan Museum" },
      { icon: "Users", title: "Social Events", desc: "Downsview Park festivals" }
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
      { icon: "Trophy", title: "Golf Tournaments", desc: "Local country clubs and resorts" },
      { icon: "Users", title: "Weddings", desc: "Banquet halls and private venues" },
      { icon: "Briefcase", title: "Corporate Retreats", desc: "York region business travel" }
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
      { icon: "Users", title: "Wedding Transportation", desc: "Woodbridge banquet halls" },
      { icon: "Map", title: "Shopping Excursions", desc: "Vaughan Mills and local centers" },
      { icon: "Building2", title: "Corporate Events", desc: "Local business centers" }
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
      { icon: "Landmark", title: "Theme Park Trips", desc: "Canada's Wonderland" },
      { icon: "Building2", title: "Corporate Shuttles", desc: "Vaughan Metropolitan Centre" },
      { icon: "Plane", title: "Airport Shuttles", desc: "Transfers to YYZ" }
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
      { icon: "Trophy", title: "Sports Travel", desc: "CAA Centre & local arenas" },
      { icon: "Users", title: "Family Events", desc: "Large weddings and reunions" },
      { icon: "Building2", title: "Corporate Shuttles", desc: "Brampton business parks" }
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
      { icon: "Navigation", title: "Outdoor Excursions", desc: "Conservation areas & Kelso" },
      { icon: "Trophy", title: "Sports Travel", desc: "Mattamy National Cycling Centre" },
      { icon: "Briefcase", title: "Corporate Escapes", desc: "Retreats outside the city" }
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
      { icon: "Plane", title: "Airport Transfers", desc: "Toronto Pearson International (YYZ)" },
      { icon: "Building2", title: "Corporate Shuttles", desc: "Mississauga Business District & Square One" },
      { icon: "Trophy", title: "Sports Travel", desc: "Paramount Fine Foods Centre" }
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
      { icon: "Landmark", title: "University Travel", desc: "Ontario Tech University & Durham College" },
      { icon: "Trophy", title: "Event Transportation", desc: "Tribute Communities Centre" },
      { icon: "Building2", title: "Corporate Charters", desc: "Local business travel" }
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
      { icon: "Map", title: "Sightseeing", desc: "Royal Botanical Gardens & Lakefront" },
      { icon: "Users", title: "Festivals", desc: "Sound of Music Festival shuttles" },
      { icon: "Briefcase", title: "Corporate Retreats", desc: "Burlington event venues" }
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
      { icon: "Landmark", title: "University Charters", desc: "University of Guelph" },
      { icon: "Navigation", title: "Local Tours", desc: "Agricultural & brewery tours" },
      { icon: "Trophy", title: "Sports Transport", desc: "Sleeman Centre events" }
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
      { icon: "Trophy", title: "Sports Tournaments", desc: "Wayne Gretzky Sports Centre" },
      { icon: "Users", title: "Arts & Culture", desc: "Sanderson Centre for the Performing Arts" },
      { icon: "Building2", title: "Corporate Travel", desc: "Local business charters" }
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
      { icon: "Map", title: "Equestrian Events", desc: "Caledon Equestrian Park" },
      { icon: "Users", title: "Weddings", desc: "Rustic venues and retreats" },
      { icon: "Briefcase", title: "Corporate Outings", desc: "Team building outside the city" }
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
      { icon: "Navigation", title: "Winter Sports", desc: "Mount St. Louis & Snow Valley" },
      { icon: "Landmark", title: "Educational Trips", desc: "Georgian College" },
      { icon: "Map", title: "Summer Festivals", desc: "Lake Simcoe waterfront events" }
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