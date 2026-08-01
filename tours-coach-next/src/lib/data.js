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
      { title: "Luxury Coach Bus", id: "luxury-coach-bus-charter" },
      { title: "Mini Coach Bus", id: "mini-coach-bus-charter" },
      { title: "14 Passenger Van", id: "14-passenger-van-service" },
      { title: "School Bus", id: "school-bus-charter" }
    ]
  },
  {
    title: "Destinations",
    id: "destinations",
    dropdown: [
      { title: "Toronto", id: "charter-bus-service-toronto" },
      { title: "Scarborough", id: "charter-bus-service-scarborough" },
      { title: "Ajax", id: "charter-bus-service-ajax" },
      { title: "Pickering", id: "charter-bus-service-pickering" },
      { title: "Hamilton", id: "charter-bus-service-hamilton" },
      { title: "North York", id: "charter-bus-service-north-york" },
      { title: "Aurora", id: "charter-bus-service-aurora" },
      { title: "Woodbridge", id: "charter-bus-service-woodbridge" },
      { title: "Vaughan", id: "charter-bus-service-vaughan" },
      { title: "Brampton", id: "charter-bus-service-brampton" },
      { title: "Milton", id: "charter-bus-service-milton" },
      { title: "Mississauga", id: "charter-bus-service-mississauga" },
      { title: "Oshawa", id: "charter-bus-service-oshawa" },
      { title: "Burlington", id: "charter-bus-service-burlington" },
      { title: "Guelph", id: "charter-bus-service-guelph" },
      { title: "Brantford", id: "charter-bus-service-brantford" },
      { title: "Bolton", id: "charter-bus-service-bolton" },
      { title: "Barrie", id: "charter-bus-service-barrie" }
    ]
  },
  {
    title: "Services",
    id: "services",
    dropdown: [
      { title: "Corporate Transportation", id: "services/corporate-transportation" },
      { title: "School Trips", id: "services/school-trip-transportation" },
      { title: "Wedding Shuttles", id: "services/wedding-shuttle" },
      { title: "Airport Transfers", id: "services/airport-group-transfers" },
      { title: "Sports Teams", id: "services/sports-team-transportation" },
      { title: "Event Shuttles", id: "services/event-shuttle-services" }
    ]
  },
  { title: "Winter", id: "winter-destinations" },
  { title: "Events", id: "events" }, // <-- Replaced FIFA with Events
  { title: "Contact Us", id: "contact" }
];

export const FLEET_DATA = {
  "luxury-coach-bus-charter": {
    name: "Luxury Coach Bus",
    pax: "56 Passengers",
    desc: "Experience ultimate comfort for long-distance group travel. Our luxury coaches are equipped with premium amenities to ensure a smooth and enjoyable ride across Canada.",
    features: ["Reclining seats", "Climate control", "Onboard restroom", "Entertainment systems", "Ample luggage space", "Wi-Fi enabled"],
    img: "/fleet-luxury.jpg",
    reviews: [
      { author: "Sarah Jenkins, Corporate Events", rating: 5, text: "Absolutely pristine coach! We chartered this for a multi-day corporate tour from Toronto to Ottawa. The Wi-Fi and comfortable seats made all the difference for our team." },
      { author: "Mark D.", rating: 5, text: "Smooth ride all the way. The onboard restroom was very clean and the driver was incredibly professional. Highly recommended for large groups." },
      { author: "Elena R., Wedding Planner", rating: 5, text: "I regularly book these 56-passenger luxury coaches for large weddings. They always arrive spotless, on time, and the climate control is perfect for summer events." }
    ]
  },
  "mini-coach-bus-charter": {
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
  "14-passenger-van-service": {
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
  "school-bus-charter": {
    name: "School Bus",
    pax: "48-56 Children / 30-40 Adults",
    desc: "The most cost-effective transportation solution for large groups, school field trips, and local events. Safe, reliable, and straightforward.",
    features: ["High passenger capacity", "Economical rates", "Safety certified", "Professional drivers", "Local route specialists"],
    img: "/fleet-school.jpg",
    reviews: [
      { author: "Principal Harding", rating: 5, text: "Tours Coach Charters is our go-to for all field trips. The drivers are great with the kids, safety is always top priority, and the buses are very clean." },
      { author: "Tom S., Camp Director", rating: 4, text: "Very affordable and reliable. We chartered three of these school buses to transport our summer campers to Wonderland. Everything went flawlessly." },
      { author: "Local Soccer Association", rating: 5, text: "We use these buses every weekend for away games. You can't beat the value for moving 40 players and coaches." }
    ]
  }
};

export const SEO_DATA = {
  "home": { title: "Charter Bus Services Canada | Tours Coach Charters", desc: "Canada's Premier Charter Bus Services. From corporate retreats to school trips, we provide reliable transportation from coast to coast." },
  "about": { title: "About Us | Tours Coach Charters", desc: "Learn about Canada Tours Coach LTD. We provide safe, reliable, and premium charter bus transportation across the country." },
  "contact": { title: "Contact Us | Tours Coach Charters", desc: "Get in touch with Canada Tours Coach LTD for quotes, questions, and group transportation logistics." },
  "events": { title: "Canadian Event & Festival Charter Bus Transportation | Tours Coach Charters", desc: "Private group bus hire, mini coach charters, and executive Sprinter van shuttles for major festivals and events across Canada." },
  "luxury-coach-bus-charter": { title: "Luxury Coach Bus Charter in Canada | Tours Coach Charters", desc: "Experience ultimate comfort for long-distance group travel with our 56 passenger luxury coaches." },
  "mini-coach-bus-charter": { title: "Mini Coach Bus Charter in Canada | Tours Coach Charters", desc: "Perfect for corporate retreats and medium-sized groups. Book a 24-36 passenger mini coach." },
  "14-passenger-van-service": { title: "14 Passenger Chauffeured Van Service | Tours Coach Charters", desc: "High-roof transit vans ideal for airport transfers, small family groups, or executive shuttle services." },
  "school-bus-charter": { title: "School Bus Charter in Canada | Tours Coach Charters", desc: "Cost-effective transportation solution for large groups and school field trips. 48-56 passengers." },
  "charter-bus-service-toronto": { title: "Toronto Coach Charters & Bus Services | Tours Coach Charters", desc: "Book premium group transportation in Toronto. Executive shuttles to Pearson (YYZ), corporate travel to the Metro Convention Centre, and FIFA 2026 logistics." },
  "charter-bus-service-scarborough": { title: "Scarborough Charter Bus Services | Tours Coach Charters", desc: "Dependable group travel throughout Scarborough. Shuttles to UTSC, Centennial College, and the Toronto Zoo." },
  "charter-bus-service-ajax": { title: "Ajax Coach & Minibus Charters | Tours Coach Charters", desc: "Group transportation and charter bus services serving the Ajax and Durham Region business sectors." },
  "charter-bus-service-pickering": { title: "Pickering Charter Bus Services | Tours Coach Charters", desc: "Group transportation from Pickering to downtown Toronto, Pearson Airport, and Pickering Casino Resort." },
  "charter-bus-service-hamilton": { title: "Hamilton Coach Charters & Event Shuttles | Tours Coach Charters", desc: "Bus charters for McMaster University, Tim Hortons Field, and FirstOntario Centre in Hamilton, Ontario." },
  "charter-bus-service-north-york": { title: "North York Charter Bus Services | Tours Coach Charters", desc: "Premium group shuttles for York University, Downsview Park, and North York corporate parks." },
  "charter-bus-service-aurora": { title: "Aurora Charter Bus & Wedding Shuttles | Tours Coach Charters", desc: "Charter services for York Region. Ideal for golf outings, weddings, and corporate events in Aurora." },
  "charter-bus-service-woodbridge": { title: "Woodbridge Event Shuttles & Coach Charters | Tours Coach Charters", desc: "Specialized group transportation for Woodbridge banquet halls, Vaughan Mills, and corporate events." },
  "charter-bus-service-vaughan": { title: "Vaughan Charter Bus Services | Tours Coach Charters", desc: "Charter services for Canada's Wonderland, Vaughan Metropolitan Centre (VMC), and local school trips." },
  "charter-bus-service-brampton": { title: "Brampton Coach & School Bus Charters | Tours Coach Charters", desc: "Group travel for Brampton sports tournaments at the CAA Centre and large family gatherings." },
  "charter-bus-service-milton": { title: "Milton Charter Bus Services | Tours Coach Charters", desc: "Expert group transportation serving Milton, the Mattamy National Cycling Centre, and Kelso Conservation Area." },
  "charter-bus-service-mississauga": { title: "Mississauga Airport Shuttles & Coach Charters | Tours Coach Charters", desc: "Direct charter bus service to Toronto Pearson Airport (YYZ), Square One, and the International Centre." },
  "charter-bus-service-oshawa": { title: "Oshawa Charter Bus Services | Tours Coach Charters", desc: "Coach charters for Ontario Tech University, Durham College, and the Tribute Communities Centre." },
  "charter-bus-service-burlington": { title: "Burlington Coach Charters | Tours Coach Charters", desc: "Premium group transportation for the Royal Botanical Gardens, lakefront festivals, and corporate events." },
  "charter-bus-service-guelph": { title: "Guelph Charter Bus & Minibus Charters | Tours Coach Charters", desc: "Expert group travel solutions for the University of Guelph, Sleeman Centre events, and brewery tours." },
  "charter-bus-service-brantford": { title: "Brantford Charter Bus Services | Tours Coach Charters", desc: "Reliable coach charters in Brantford for Wayne Gretzky Sports Centre tournaments and corporate travel." },
  "charter-bus-service-bolton": { title: "Bolton Coach Charters & Wedding Shuttles | Tours Coach Charters", desc: "Dedicated group transportation for the Caledon Equestrian Park and rustic Bolton wedding venues." },
  "charter-bus-service-barrie": { title: "Barrie Winter Charters & Bus Services | Tours Coach Charters", desc: "Premium group transportation via Highway 400 to Mount St. Louis Moonstone, Snow Valley, and Georgian College." },
  "winter-destinations": { title: "Winter Destination Charters | Tours Coach Charters", desc: "Dedicated motorcoach services for ski trips to Whistler, Blue Mountain, and Banff." }
};

export const DESTINATION_DATA = {
  "charter-bus-service-toronto": {
    city: "Toronto",
    title: "Charter Coach Bus Service in Toronto",
    subtitle: "Premium transportation for the GTA. From FIFA 2026 logistics at BMO Field to corporate summits at the Metro Toronto Convention Centre.",
    img: "/toronto-banner.jpg",
    highlights: [
      { icon: "Building2", title: "Corporate & Event Logistics", desc: "Scotiabank Arena, Rogers Centre & MTCC" },
      { icon: "Trophy", title: "Sports Teams & FIFA 2026", desc: "Direct shuttles to Toronto Stadium (BMO Field)" },
      { icon: "Plane", title: "Airport Transfers", desc: "Pearson (YYZ) Terminals 1 & 3 & Billy Bishop (YTZ)" }
    ],
    content: [
      "Tours Coach Charters is your premier partner for reliable, high-capacity charter bus services in Toronto. Whether you require an executive shuttle for VIPs arriving at Toronto Pearson International Airport (YYZ) or a massive fleet coordination for the upcoming FIFA World Cup 2026 matches at Toronto Stadium, our 56-passenger luxury coaches deliver uncompromising reliability.",
      "Navigating downtown Toronto traffic via the DVP or Gardiner Expressway requires deep local expertise. We streamline corporate travel, shuttling your teams seamlessly to the Financial District, the Metro Toronto Convention Centre, or large-scale conferences at Enercare Centre.",
      "We also provide affordable school bus charters for university tours and educational field trips to the Royal Ontario Museum (ROM), the CN Tower, and the University of Toronto (UofT) campus. Leave the complex city logistics, parking, and route management to our professional, fully insured drivers."
    ],
    faqs: [
      { q: "Are you providing shuttle services for the FIFA World Cup 2026 in Toronto?", a: "Yes, we are currently securing logistics contracts for group transportation to Toronto Stadium (BMO Field) and surrounding fan zones. We highly recommend booking your tournament transit as early as possible." },
      { q: "Can you accommodate direct pickups from Toronto Pearson (YYZ)?", a: "Absolutely. We coordinate directly with Pearson Airport (YYZ) Ground Transportation to ensure swift, curbside group pickups at both Terminal 1 and Terminal 3." },
      { q: "What size buses do you have available for charter in Toronto?", a: "Our fleet includes 56-passenger luxury motorcoaches, 24-36 passenger mini coaches for mid-sized corporate groups, and 14-passenger high-roof transit vans for private executive travel." },
      { q: "How do you handle parking at major downtown Toronto venues?", a: "Our logistics team maps out designated charter bus staging areas at venues like Scotiabank Arena and the MTCC, ensuring your group enjoys drop-off right at the entrance while our drivers manage the parking off-site." }
    ]
  },
  "charter-bus-service-scarborough": {
    city: "Scarborough",
    title: "Charter Coach Bus Service in Scarborough",
    subtitle: "Dependable group travel connecting the eastern GTA via Highway 401. Ideal for UTSC transit, Toronto Zoo field trips, and Rouge Park excursions.",
    img: "/scarborough-banner.jpg",
    highlights: [
      { icon: "Landmark", title: "Campus & University Charters", desc: "UofT Scarborough (UTSC) & Centennial College" },
      { icon: "Users", title: "School & Educational Trips", desc: "Direct routing to the Toronto Zoo" },
      { icon: "Map", title: "Nature Excursions", desc: "Scarborough Bluffs & Rouge National Urban Park" }
    ],
    content: [
      "Experience seamless group transportation with our premier charter bus service in Scarborough. From coordinating massive field trips to the Toronto Zoo to managing daily student shuttles for UofT Scarborough (UTSC) and Centennial College, we understand the specific transit needs of the eastern GTA.",
      "Navigating the Highway 401 corridor can be stressful for large groups. Our professional drivers handle the heavy lifting, providing smooth transit for corporate retreats leaving Scarborough business parks, or wedding parties heading to scenic venues near the Scarborough Bluffs.",
      "Whether you need an economical school bus charter for a local youth sports tournament or a luxury mini-coach for a private tour of Rouge National Urban Park, our diverse fleet guarantees safety, comfort, and punctuality."
    ],
    faqs: [
      { q: "Do you offer daily or weekly shuttle services for Scarborough campuses?", a: "Yes, we provide ongoing, contract-based shuttle services for universities, colleges, and corporate offices to connect students and staff efficiently to transit hubs like Scarborough Centre." },
      { q: "Can we charter a bus for a trip from Scarborough to downtown Toronto?", a: "Absolutely. We frequently route trips down the DVP into downtown Toronto for sporting events at Scotiabank Arena, theater outings, and corporate conferences." },
      { q: "What amenities are included on your buses?", a: "Our luxury motorcoaches feature fast Wi-Fi, reclining seating, climate control, and onboard restrooms, ensuring your group stays comfortable even in heavy GTA traffic." }
    ]
  },
  "charter-bus-service-ajax": {
    city: "Ajax",
    title: "Charter Coach Bus Service in Ajax",
    subtitle: "Premium group transportation serving Ajax and the Durham Region via Highway 401. Perfect for local tournaments and corporate events.",
    img: "/ajax-banner.jpg",
    highlights: [
      { icon: "Building2", title: "Corporate Travel", desc: "Durham Region business meetings and retreats" },
      { icon: "Trophy", title: "Sports Logistics", desc: "Ajax Community Centre & local arenas" },
      { icon: "Navigation", title: "Regional Excursions", desc: "Direct connections to Toronto and Oshawa" }
    ],
    content: [
      "Ajax is a vital, rapidly expanding hub in the Durham Region. We provide top-tier charter bus services to residents and businesses seeking reliable transit along the Highway 401 corridor. Whether you are organizing a corporate shuttle heading into downtown Toronto or a local outing within Ajax, our modern fleet delivers.",
      "Our drivers are deeply familiar with the Durham Region infrastructure. We specialize in coordinating high-capacity travel for minor hockey teams heading to the Ajax Community Centre, large-scale school field trips, and wedding transportation bridging venues across the region."
    ],
    faqs: [
      { q: "Can you accommodate sports teams traveling from Ajax?", a: "Yes! Our 56-passenger luxury coaches feature massive undercarriage bays, making them perfect for storing hockey bags and athletic equipment for away games." },
      { q: "Do you service corporate events in Ajax?", a: "We frequently provide shuttle services for businesses in Ajax, offering everything from single-day team-building retreat transport to long-term employee commuting contracts." }
    ]
  },
  "charter-bus-service-pickering": {
    city: "Pickering",
    title: "Charter Coach Bus Service in Pickering",
    subtitle: "Reliable motorcoach and minibus charters based in Pickering. Direct transit for Pickering Casino Resort, weddings, and Pearson Airport.",
    img: "/pickering-banner.jpg",
    highlights: [
      { icon: "Landmark", title: "Entertainment & Nightlife", desc: "Group trips to Pickering Casino Resort" },
      { icon: "Users", title: "Private Events", desc: "Wedding shuttles and large family reunions" },
      { icon: "Plane", title: "Airport Transfers", desc: "Direct routing via Highway 407 to Pearson (YYZ)" }
    ],
    content: [
      "Headquartered just east of Toronto, Pickering is an ideal launchpad for group travel. We provide modern, comfortable transportation tailored to the Durham Region, ranging from VIP shuttle services for the Pickering Casino Resort to massive local school trips.",
      "Avoid the stress of coordinating multiple vehicles or navigating Highway 401 gridlock. From luxury 56-passenger motorcoaches equipped with Wi-Fi and restrooms to agile 14-passenger transit vans for quick airport transfers to Pearson (YYZ), we match the perfect vehicle to your itinerary."
    ],
    faqs: [
      { q: "Do you provide shuttles to the Pickering Casino Resort?", a: "Yes, we frequently arrange premium group transportation to and from the casino for corporate holiday parties, private events, and social group outings." },
      { q: "Can we charter a bus from Pickering to downtown Toronto?", a: "Absolutely. We provide direct and efficient transportation from Pickering into the heart of Toronto for concerts, sporting events, and corporate conferences." }
    ]
  },
  "charter-bus-service-hamilton": {
    city: "Hamilton",
    title: "Charter Coach Bus Service in Hamilton",
    subtitle: "Expert charter bus services for Hamilton via the QEW. Servicing McMaster University, Tim Hortons Field, and FirstOntario Centre.",
    img: "/hamilton-banner.jpg",
    highlights: [
      { icon: "Landmark", title: "University Transit", desc: "McMaster University campus shuttles" },
      { icon: "Trophy", title: "Stadium Logistics", desc: "Tim Hortons Field & FirstOntario Centre" },
      { icon: "Plane", title: "Airport & Regional", desc: "John C. Munro Hamilton International (YHM)" }
    ],
    content: [
      "Hamilton is a bustling city anchoring the Golden Horseshoe, packed with massive event centers, a leading university, and stunning natural escarpment attractions. Our Hamilton charter bus service is engineered to move your group efficiently via the QEW or Highway 403, whether you're catching a CFL game at Tim Hortons Field or a major concert at FirstOntario Centre.",
      "We provide comprehensive transportation logistics for McMaster University, managing daily student shuttles, away-game transport for varsity athletics, and faculty retreat transit. Additionally, we offer streamlined airport transfers to and from John C. Munro Hamilton International Airport (YHM)."
    ],
    faqs: [
      { q: "Do you offer transportation for McMaster University events?", a: "Yes, we provide specialized routing, scheduling, and invoicing for university departments, student unions, and athletic teams." },
      { q: "Can you facilitate airport transfers to Hamilton Airport (YHM)?", a: "Certainly. We organize direct group shuttle services for corporate teams and travel groups arriving at or departing from John C. Munro Hamilton International Airport." }
    ]
  },
  "charter-bus-service-north-york": {
    city: "North York",
    title: "Charter Coach Bus Service in North York",
    subtitle: "Premium group transportation via Highway 401 and the DVP. Specializing in York University transit, Aga Khan Museum tours, and corporate shuttles.",
    img: "/northyork-banner.jpg",
    highlights: [
      { icon: "Building2", title: "Corporate Transport", desc: "Yonge-Sheppard & North York business districts" },
      { icon: "Landmark", title: "Educational Trips", desc: "York University & Aga Khan Museum" },
      { icon: "Users", title: "Social Events", desc: "Downsview Park festivals and exhibitions" }
    ],
    content: [
      "North York represents a critical commercial and cultural nexus within the GTA. Our charter bus service provides highly reliable transportation for the dense corporate offices along the Yonge-Sheppard corridor, local school districts, and private organizations.",
      "Whether you are organizing a massive music festival transport to Downsview Park, coordinating away-game athletic buses for York University, or planning an elegant group tour of the Aga Khan Museum, our diverse fleet ensures safety, punctuality, and comfort through North York's busy traffic."
    ],
    faqs: [
      { q: "Do you service the York University campus?", a: "Yes, we provide dedicated transportation for educational field trips, varsity athletic teams, and massive student events originating from or traveling to York University." },
      { q: "Are your buses equipped for corporate groups?", a: "Our luxury motorcoaches feature fast Wi-Fi, power outlets at every seat, and climate control, transforming travel time into productive hours for mobile professionals." }
    ]
  },
  "charter-bus-service-aurora": {
    city: "Aurora",
    title: "Charter Coach Bus Service in Aurora",
    subtitle: "Dependable charter bus services for Aurora and York Region. Ideal for local country club golf outings, rustic weddings, and corporate events.",
    img: "/aurora-banner.jpg",
    highlights: [
      { icon: "Trophy", title: "Golf Tournaments", desc: "Magna Golf Club & regional courses" },
      { icon: "Users", title: "Wedding Transportation", desc: "York Region banquet halls and private venues" },
      { icon: "Briefcase", title: "Corporate Retreats", desc: "Business travel via Highway 404" }
    ],
    content: [
      "Our Aurora charter bus services are perfectly tailored for groups traveling throughout York Region via the Highway 404 corridor. Aurora is surrounded by stunning event venues and exclusive golf courses, making it a highly sought-after destination for high-end weddings and corporate executive retreats.",
      "Leave the navigation and parking logistics to our professional chauffeurs. We offer competitive, customized rates on everything from 14-passenger luxury vans for intimate bridal parties to 56-passenger luxury coaches to move entire tournament fields safely and on schedule."
    ],
    faqs: [
      { q: "Can you transport a wedding party between multiple Aurora venues?", a: "Absolutely. We coordinate directly with your wedding planner to ensure guests and the bridal party are shuttled between hotels, ceremonies, and reception venues seamlessly." },
      { q: "Do you offer transportation for local minor hockey teams?", a: "Yes, our comfortable mini-coaches and economical school buses are fantastic options for minor sports teams traveling to arenas across York Region." }
    ]
  },
  "charter-bus-service-woodbridge": {
    city: "Woodbridge",
    title: "Charter Coach Bus Service in Woodbridge",
    subtitle: "Specialized group transportation for Woodbridge and Vaughan. The premier choice for banquet hall wedding shuttles and Vaughan Mills shopping tours.",
    img: "/woodbridge-banner.jpg",
    highlights: [
      { icon: "Users", title: "Wedding Transportation", desc: "Seamless transit to Woodbridge banquet halls" },
      { icon: "Map", title: "Shopping Excursions", desc: "Group tours to Vaughan Mills" },
      { icon: "Building2", title: "Corporate Events", desc: "Transit via Highway 400 & Highway 427" }
    ],
    content: [
      "Woodbridge is renowned throughout the GTA for its spectacular banquet halls and sprawling event spaces. We are the preferred charter bus partner for countless large-scale Italian weddings and social gatherings in the area, ensuring hundreds of guests travel safely and stylishly without worrying about parking.",
      "In addition to private milestone events, we provide reliable transportation for corporate groups and offer specialized, high-capacity shopping tour charters for international groups visiting local retail meccas like Vaughan Mills."
    ],
    faqs: [
      { q: "How do you handle late-night wedding transportation?", a: "We offer highly flexible scheduling to ensure safe, late-night return trips. Our drivers will run continuous loops to get your wedding guests safely back to their hotels." },
      { q: "Can we charter a bus for a corporate shopping day at Vaughan Mills?", a: "Yes, we frequently book group shopping excursions. Our luxury coaches feature massive undercarriage storage bays, easily accommodating large shopping hauls." }
    ]
  },
  "charter-bus-service-vaughan": {
    city: "Vaughan",
    title: "Charter Coach Bus Service in Vaughan",
    subtitle: "Comprehensive charter services via Highway 400. Servicing Canada's Wonderland, Vaughan Metropolitan Centre (VMC), and corporate parks.",
    img: "/vaughan-banner.jpg",
    highlights: [
      { icon: "Landmark", title: "Theme Park Trips", desc: "Large group transit to Canada's Wonderland" },
      { icon: "Building2", title: "Corporate Shuttles", desc: "Vaughan Metropolitan Centre (VMC)" },
      { icon: "Plane", title: "Airport Shuttles", desc: "Rapid transfers to Pearson (YYZ) via Highway 407" }
    ],
    content: [
      "As one of Canada's fastest-growing municipal economies, Vaughan demands reliable, scalable group transportation. Whether you are organizing a massive, multi-bus school trip to Canada's Wonderland or need sophisticated corporate shuttles for executives arriving at the Vaughan Metropolitan Centre (VMC), we have you covered.",
      "Our diverse fleet ensures that no matter your group size, we can provide a climate-controlled, comfortable ride. Our professional drivers are experts at navigating the often-congested Highway 400 and Highway 407 corridors, ensuring absolute punctuality."
    ],
    faqs: [
      { q: "Do you offer school group rates for trips to Canada's Wonderland?", a: "Yes, we offer highly competitive, discounted pricing on our school bus charters for educational and recreational end-of-year trips to the theme park." },
      { q: "Can you provide daily employee shuttles from the TTC subway?", a: "We frequently map and execute daily 'last-mile' shuttle routes connecting the Vaughan Metropolitan Centre TTC subway station to corporate offices and warehouses throughout Vaughan." }
    ]
  },
  "charter-bus-service-brampton": {
    city: "Brampton",
    title: "Charter Coach Bus Service in Brampton",
    subtitle: "Dependable group travel for Brampton. Perfect for sports tournaments at the CAA Centre, corporate events, and massive family weddings.",
    img: "/brampton-banner.jpg",
    highlights: [
      { icon: "Trophy", title: "Sports Travel", desc: "Transit to the CAA Centre & regional arenas" },
      { icon: "Users", title: "Family & Cultural Events", desc: "High-capacity transport for large weddings" },
      { icon: "Building2", title: "Corporate Shuttles", desc: "Brampton logistics and business parks" }
    ],
    content: [
      "Brampton's dynamic, fast-growing community requires highly flexible transportation solutions. We specialize in deploying high-capacity luxury coaches for large-scale cultural events and family weddings, ensuring all guests arrive at the banquet hall simultaneously.",
      "For athletic directors, we offer cost-effective motorcoaches and school buses designed for minor hockey and lacrosse tournaments heading to the CAA Centre. Let our professional drivers navigate the heavy traffic on Highway 410, ensuring your group arrives relaxed and ready to compete."
    ],
    faqs: [
      { q: "What is the best vehicle for a sports team traveling from Brampton?", a: "Our 56-passenger luxury motorcoaches are the gold standard for sports travel, offering massive undercarriage storage for equipment bags and ample legroom for taller athletes." },
      { q: "Can you accommodate very large cultural weddings with hundreds of guests?", a: "Absolutely. We are experienced in mega-event logistics and can deploy a synchronized fleet of multiple vehicles to move hundreds of guests effortlessly." }
    ]
  },
  "charter-bus-service-milton": {
    city: "Milton",
    title: "Charter Coach Bus Service in Milton",
    subtitle: "Expert group transportation serving Milton and the Halton Region. Ideal for the Mattamy National Cycling Centre, Kelso, and corporate retreats.",
    img: "/milton-banner.jpg",
    highlights: [
      { icon: "Navigation", title: "Outdoor Excursions", desc: "Conservation areas & Kelso Conservation" },
      { icon: "Trophy", title: "Sports Travel", desc: "Mattamy National Cycling Centre events" },
      { icon: "Briefcase", title: "Corporate Escapes", desc: "Team building retreats via Highway 401" }
    ],
    content: [
      "Nestled near the spectacular Niagara Escarpment, Milton is a premier destination for outdoor corporate retreats, hiking excursions, and specialized sporting events. Our charter buses provide the perfect, safe transportation solution to transition your group from the dense city to scenic nature routes.",
      "Whether you are transporting elite athletes to the Mattamy National Cycling Centre or organizing a massive school field trip to Kelso Conservation Area, our vehicles are meticulously maintained to handle both highway speeds and rural roads safely."
    ],
    faqs: [
      { q: "Can we charter a bus for a hiking trip in Milton?", a: "Yes, we regularly transport school groups and corporate teams to Kelso Conservation Area and Mountsberg, providing secure onboard storage for backpacks and gear." },
      { q: "Do you offer corporate rates for Milton-based businesses?", a: "We provide competitive quoting, priority dispatch, and dedicated account managers for recurring corporate clients situated along the Milton Highway 401 corridor." }
    ]
  },
  "charter-bus-service-mississauga": {
    city: "Mississauga",
    title: "Charter Coach Bus Service in Mississauga",
    subtitle: "Premium charter services for Mississauga and Peel Region. Direct routing to Pearson Airport (YYZ), Square One, and the International Centre.",
    img: "/mississauga-banner.jpg",
    highlights: [
      { icon: "Plane", title: "Airport Transfers", desc: "Toronto Pearson International (YYZ) logistics" },
      { icon: "Building2", title: "Corporate Shuttles", desc: "Square One & The International Centre" },
      { icon: "Trophy", title: "Sports Travel", desc: "Paramount Fine Foods Centre tournaments" }
    ],
    content: [
      "Mississauga is an economic powerhouse and a massive hub for international travel. As a leading transportation provider in the Peel Region, we specialize in high-stakes corporate shuttles, rapid airport transfers, and sports team travel.",
      "With immediate proximity to Toronto Pearson International Airport (YYZ), we provide highly coordinated shuttle services for incoming corporate teams, international tour groups, and VIPs. Trust our professional drivers to master the complex web of the 401, 403, and 410 highways, ensuring zero delays.",
      "From massive trade shows at the International Centre to major tournaments at the Paramount Fine Foods Centre, our extensive fleet ensures we have the perfect vehicle to execute your logistics flawlessly."
    ],
    faqs: [
      { q: "How do airport pickups work at Toronto Pearson (YYZ)?", a: "We actively monitor your flight status. Upon arrival, our drivers coordinate a smooth, curbside pickup at the designated commercial charter bus zones at Terminals 1 and 3." },
      { q: "Are your vehicles suitable for corporate executives?", a: "Yes, our modern fleet includes premium luxury coaches and executive 14-passenger transit vans that offer a highly professional, discreet environment perfect for executive travel." },
      { q: "Can you provide shuttle loops for trade shows at the International Centre?", a: "Certainly! We specialize in continuous shuttle loops, moving attendees from overflow parking lots and local hotels directly to the International Centre entrances." }
    ]
  },
  "charter-bus-service-oshawa": {
    city: "Oshawa",
    title: "Charter Coach Bus Service in Oshawa",
    subtitle: "Reliable coach charters for Oshawa and Durham Region. Servicing Ontario Tech University, Durham College, and the Tribute Communities Centre.",
    img: "/oshawa-banner.jpg",
    highlights: [
      { icon: "Landmark", title: "University Travel", desc: "Ontario Tech University & Durham College" },
      { icon: "Trophy", title: "Event Transportation", desc: "Tribute Communities Centre concerts & games" },
      { icon: "Building2", title: "Corporate Charters", desc: "Local business travel via Highway 401" }
    ],
    content: [
      "As the eastern anchor of the GTA, Oshawa hosts numerous major sporting events, university activities, and large corporate functions. Our charter buses provide seamless, stress-free transportation to major venues like the Tribute Communities Centre and local campuses.",
      "We offer affordable school bus charters for local Durham Region field trips, as well as premium 56-passenger motorcoaches for long-distance athletic travel, ensuring groups in Oshawa have access to the highest tier of transportation options available."
    ],
    faqs: [
      { q: "Do you provide student transportation for Ontario Tech?", a: "Yes, we regularly transport student associations, academic clubs, and varsity athletic teams for both Ontario Tech University and Durham College." },
      { q: "Can we charter a bus for a concert in Oshawa?", a: "Absolutely. We offer round-trip transportation for groups attending concerts and OHL hockey games at the Tribute Communities Centre, eliminating parking hassles." }
    ]
  },
  "charter-bus-service-burlington": {
    city: "Burlington",
    title: "Charter Coach Bus Service in Burlington",
    subtitle: "Premium group transportation for Burlington via the QEW. Ideal for Sound of Music Festival shuttles, Royal Botanical Gardens, and corporate events.",
    img: "/burlington-banner.jpg",
    highlights: [
      { icon: "Map", title: "Sightseeing Tours", desc: "Royal Botanical Gardens & Lakefront" },
      { icon: "Users", title: "Festival Logistics", desc: "Sound of Music Festival park-and-ride shuttles" },
      { icon: "Briefcase", title: "Corporate Retreats", desc: "Burlington event venues and hotels" }
    ],
    content: [
      "Burlington's stunning waterfront and world-class attractions make it a frequent destination for premium group travel. We offer dedicated motorcoach services for seniors' groups and international tours visiting the Royal Botanical Gardens, as well as high-capacity shuttles for the city's massive summer festivals.",
      "Corporate clients rely on our modern mini-coaches and transit vans for comfortable, efficient travel to business retreats and meetings throughout the Halton Region. Let our drivers handle the QEW traffic while you enjoy the scenic views."
    ],
    faqs: [
      { q: "Do you offer tour bus services for sightseeing in Burlington?", a: "Yes, our luxury motorcoaches feature large panoramic windows and onboard PA systems, making them perfect for guided sightseeing tours along the lake." },
      { q: "Can you provide shuttle service for large outdoor festivals?", a: "We are experts in event logistics and regularly design and execute park-and-ride shuttle loops for major Burlington events like the Sound of Music Festival." }
    ]
  },
  "charter-bus-service-guelph": {
    city: "Guelph",
    title: "Charter Coach Bus Service in Guelph",
    subtitle: "Expert group travel solutions for Guelph. Servicing University of Guelph athletics, agricultural tours, and Sleeman Centre events.",
    img: "/guelph-banner.jpg",
    highlights: [
      { icon: "Landmark", title: "University Charters", desc: "University of Guelph transit" },
      { icon: "Navigation", title: "Local Tours", desc: "Agricultural & regional brewery tours" },
      { icon: "Trophy", title: "Sports Transport", desc: "Sleeman Centre events & away games" }
    ],
    content: [
      "Guelph's dynamic university culture and vibrant agricultural industries make it a key location for our charter services. We are a trusted transportation provider for the University of Guelph, offering safe, reliable transit for academic field trips, varsity athletic teams, and faculty events.",
      "Beyond the university, our modern fleet serves local businesses, private brewery tours, and sports teams heading to the Sleeman Centre or traveling out of town via Highway 401 for regional tournaments."
    ],
    faqs: [
      { q: "Do you provide buses for university athletic teams?", a: "Yes, we have extensive experience transporting OUA varsity teams and intramural clubs to games across the province, with ample storage for athletic gear." },
      { q: "Can we charter a mini-coach for a private brewery tour?", a: "Absolutely. A 24-36 passenger mini-coach is a safe, responsible, and incredibly fun way to transport your group for local food, agricultural, and beverage tours." }
    ]
  },
  "charter-bus-service-brantford": {
    city: "Brantford",
    title: "Charter Coach Bus Service in Brantford",
    subtitle: "Reliable motorcoach charters in Brantford. Perfect for local minor sports tournaments at Wayne Gretzky Sports Centre and theater outings.",
    img: "/brantford-banner.jpg",
    highlights: [
      { icon: "Trophy", title: "Sports Tournaments", desc: "Transit to Wayne Gretzky Sports Centre" },
      { icon: "Users", title: "Arts & Culture", desc: "Sanderson Centre for the Performing Arts" },
      { icon: "Building2", title: "Corporate Travel", desc: "Local business charters via Highway 403" }
    ],
    content: [
      "Known as the Telephone City, Brantford hosts massive regional sports tournaments and cultural events. We provide highly dependable transportation for minor hockey and swim teams heading to the Wayne Gretzky Sports Centre, ensuring athletes travel comfortably and arrive focused.",
      "We also serve local school boards, seniors' groups, and businesses requiring transportation for theater outings to the Sanderson Centre, corporate training, and regional travel along the Highway 403 corridor."
    ],
    faqs: [
      { q: "Can we book a school bus for a local Brantford field trip?", a: "Yes, our safety-certified school buses are a highly cost-effective and popular option for local educational trips and short-distance travel within Brant County." },
      { q: "Do you offer discounts for recurring sports team travel?", a: "We work directly with athletic directors and coaches to establish competitive, contract-based pricing for entire season schedules and tournament travel." }
    ]
  },
  "charter-bus-service-bolton": {
    city: "Bolton",
    title: "Charter Coach Bus Service in Bolton",
    subtitle: "Dedicated group transportation for Bolton and Caledon. The premier choice for Caledon Equestrian Park events, rustic weddings, and nature retreats.",
    img: "/bolton-banner.jpg",
    highlights: [
      { icon: "Map", title: "Equestrian Events", desc: "Transit to Caledon Equestrian Park" },
      { icon: "Users", title: "Wedding Shuttles", desc: "Transportation for rustic Caledon venues" },
      { icon: "Briefcase", title: "Corporate Outings", desc: "Team building and retreats in nature" }
    ],
    content: [
      "Surrounded by the natural, sprawling beauty of Caledon, Bolton is a highly popular destination for scenic outdoor weddings, corporate retreats, and major international events at the Caledon Equestrian Park. Our charter bus service ensures your group navigates the winding country roads safely and efficiently.",
      "We offer a versatile range of vehicles, from 14-passenger transit vans for intimate bridal parties to 56-passenger luxury motorcoaches designed to transport massive crowds of spectators and participants to local outdoor events."
    ],
    faqs: [
      { q: "Can your large motorcoaches navigate rural roads around Bolton?", a: "Yes. Our professional drivers are highly experienced in rural navigation, and our modern vehicles are maintained to handle diverse routing and country roads safely." },
      { q: "Do you offer shuttle services for large events in Caledon?", a: "Absolutely. We specialize in designing and running continuous shuttle loops to transport attendees from remote parking areas or local hotels directly to the main event venue." }
    ]
  },
  "charter-bus-service-barrie": {
    city: "Barrie",
    title: "Charter Coach Bus Service in Barrie",
    subtitle: "Premium group transportation for Barrie and Simcoe County via Highway 400. The best choice for ski trips, Georgian College events, and waterfront festivals.",
    img: "/barrie-banner.jpg",
    highlights: [
      { icon: "Navigation", title: "Winter Sports Logistics", desc: "Direct routes to Mount St. Louis Moonstone & Snow Valley" },
      { icon: "Landmark", title: "Educational Trips", desc: "Georgian College campus transportation" },
      { icon: "Map", title: "Summer Festivals", desc: "Kempenfelt Bay & Lake Simcoe waterfront events" }
    ],
    content: [
      "Serving as the primary gateway to Ontario's cottage country and top-tier winter resorts, Barrie is a massive year-round destination for group travel. We specialize in winter ski charters via Highway 400, providing safe, snow-ready motorcoaches to Mount St. Louis Moonstone and Snow Valley.",
      "During the warmer months, we provide high-capacity transportation for summer camps heading north, Kempenfelt Bay waterfront festivals, and events at Georgian College. Let our experienced drivers handle the notoriously heavy Highway 400 traffic while your group relaxes in climate-controlled comfort."
    ],
    faqs: [
      { q: "Do your buses have storage for skis and snowboards?", a: "Yes, our luxury motorcoaches feature massive undercarriage storage bays that are perfect for safely stowing skis, snowboards, and heavy winter sports equipment." },
      { q: "Are your drivers experienced in winter driving conditions on Highway 400?", a: "Safety is our absolute priority. Our drivers undergo rigorous winter driving training, and our fleet is fully equipped and maintained for harsh Ontario winter weather." }
    ]
  }
};

export const SERVICE_DATA = {
  "corporate-transportation": {
    title: "Corporate Transportation & Executive Shuttles",
    subtitle: "Premium group transit for conferences, executive retreats, and daily employee commuting.",
    img: "/services-corporate.jpg",
    highlights: [
      { icon: "Briefcase", title: "Executive Shuttles", desc: "Wi-Fi enabled luxury coaches" },
      { icon: "Building2", title: "Conference Transit", desc: "MTCC & Enercare Centre logistics" },
      { icon: "Users", title: "Employee Commuting", desc: "Daily Last-Mile TTC connections" }
    ],
    content: [
      "Tours Coach Charters provides sophisticated, reliable corporate transportation across the Greater Toronto Area and beyond. Whether you are moving executives from Pearson (YYZ) to the Financial District or transporting hundreds of attendees to a summit at the Metro Toronto Convention Centre, our logistics team ensures flawless execution.",
      "Our modern luxury motorcoaches act as mobile offices. Equipped with fast Wi-Fi, individual power outlets, and climate control, your team can prepare for meetings or relax in transit. We also offer contract-based daily employee shuttles to bridge the gap between transit hubs (like Vaughan Metropolitan Centre) and corporate business parks."
    ],
    faqs: [
      { q: "Can we set up a recurring contract for daily employee shuttles?", a: "Yes, we specialize in long-term corporate shuttle contracts, offering dedicated account managers and priority dispatch." },
      { q: "Do the buses have Wi-Fi for working on the go?", a: "Absolutely. Our luxury fleet is fully equipped with reliable Wi-Fi and power outlets at every seat." }
    ]
  },
  "school-trip-transportation": {
    title: "School Trip & University Transportation",
    subtitle: "Safe, cost-effective, and reliable bus charters for educational field trips and campus events.",
    img: "/services-school.jpg",
    highlights: [
      { icon: "Landmark", title: "Educational Trips", desc: "ROM, Science Centre & Toronto Zoo" },
      { icon: "ShieldCheck", title: "Safety First", desc: "Fully vetted, certified drivers" },
      { icon: "Users", title: "Campus Shuttles", desc: "UofT, York, and McMaster transit" }
    ],
    content: [
      "Safety is our absolute priority when transporting students. We are the trusted transportation partner for school boards and universities across Ontario, providing reliable transit for everything from primary school visits to the Royal Ontario Museum to massive university campus tours.",
      "We offer highly affordable, high-capacity school bus charters for local excursions, as well as premium motorcoaches for out-of-town university athletic travel or overnight educational retreats."
    ],
    faqs: [
      { q: "Are your drivers certified for school transport?", a: "Yes, all drivers undergo rigorous background checks, vulnerable sector screening, and extensive safety training." },
      { q: "Can you accommodate multi-bus movements for entire grade levels?", a: "We frequently coordinate multi-bus logistics to safely transport hundreds of students simultaneously to destinations like Canada's Wonderland." }
    ]
  },
  "wedding-shuttle": {
    title: "Wedding Shuttle Services",
    subtitle: "Elegant, seamless group transportation for your guests, bridal party, and family.",
    img: "/services-wedding.jpg",
    highlights: [
      { icon: "Users", title: "Guest Shuttles", desc: "Continuous hotel-to-venue loops" },
      { icon: "Map", title: "Rustic Venues", desc: "Navigating Caledon & York Region" },
      { icon: "Award", title: "Bridal Party", desc: "Premium 14-passenger luxury vans" }
    ],
    content: [
      "Your wedding day should be stress-free. Our dedicated wedding shuttle services ensure that your guests arrive on time and get back to their hotels safely at the end of the night. From sprawling banquet halls in Woodbridge to rustic barn venues in Caledon, our drivers know exactly how to navigate the routes.",
      "We work directly with your wedding planner to map out continuous shuttle loops, late-night return trips, and private luxury transport for the bridal party. Ensure your guests can celebrate responsibly without worrying about parking or navigation."
    ],
    faqs: [
      { q: "Do you offer late-night return shuttles?", a: "Yes, we run continuous late-night loops to ensure every guest gets back to their accommodation safely." },
      { q: "Can we book a smaller vehicle for just the bridal party?", a: "Certainly. Our high-roof 14-passenger transit vans are perfect for transporting the bridal party comfortably." }
    ]
  },
  "airport-group-transfers": {
    title: "Airport Group Transfers",
    subtitle: "Punctual, stress-free group shuttles to Pearson (YYZ), Billy Bishop (YTZ), and Hamilton (YHM).",
    img: "/services-airport.jpg",
    highlights: [
      { icon: "Plane", title: "Pearson (YYZ)", desc: "Curbside at Terminals 1 & 3" },
      { icon: "Briefcase", title: "Corporate VIP", desc: "Meet and greet services available" },
      { icon: "ShieldCheck", title: "Flight Tracking", desc: "We adjust for delays automatically" }
    ],
    content: [
      "Navigating airport logistics with a large group is challenging. We eliminate the stress with coordinated, high-capacity airport transfers. Whether you are greeting an international tour group at Toronto Pearson (YYZ) or moving a corporate team to Billy Bishop (YTZ), we guarantee absolute punctuality.",
      "Our logistics team actively monitors your flight status, ensuring our luxury coaches or executive vans are staged and ready the moment your group collects their luggage. Enjoy ample undercarriage storage for heavy bags and a comfortable ride directly to your destination."
    ],
    faqs: [
      { q: "What happens if our flight is delayed?", a: "Our dispatch team tracks all inbound flights in real-time. We will adjust your pickup time automatically at no extra cost." },
      { q: "Where do we meet the bus at Pearson Airport?", a: "We coordinate pickups at the designated commercial charter bus zones at both Terminal 1 and Terminal 3." }
    ]
  },
  "sports-team-transportation": {
    title: "Sports Team Transportation",
    subtitle: "High-capacity motorcoaches designed for athletes, minor hockey tournaments, and away games.",
    img: "/services-sports.jpg",
    highlights: [
      { icon: "Trophy", title: "Tournament Travel", desc: "Transit to CAA Centre & local arenas" },
      { icon: "Users", title: "Maximum Comfort", desc: "Extra legroom for taller athletes" },
      { icon: "Briefcase", title: "Massive Storage", desc: "Undercarriage bays for all gear" }
    ],
    content: [
      "Athletes need to arrive rested and focused. Tours Coach Charters is the premier provider for sports team transportation across Canada. From minor hockey leagues traveling to the Wayne Gretzky Sports Centre to professional rosters heading to BMO Field, our fleet is built for sports transit.",
      "Our 56-passenger luxury motorcoaches feature massive undercarriage storage bays, perfectly accommodating hockey bags, lacrosse sticks, and training equipment. With climate control and spacious reclining seats, your team will enjoy maximum comfort on the road."
    ],
    faqs: [
      { q: "Is there enough room for all our hockey bags?", a: "Yes! Our luxury coaches feature massive undercarriage bays specifically designed to handle heavy sports equipment." },
      { q: "Do you offer seasonal contracts for sports leagues?", a: "We offer heavily discounted, contract-based pricing for athletic directors booking entire season schedules." }
    ]
  },
  "event-shuttle-services": {
    title: "Mega-Event Shuttle Services",
    subtitle: "Complex logistics and multi-bus fleet coordination for festivals, trade shows, and concerts.",
    img: "/services-event.jpg",
    highlights: [
      { icon: "Map", title: "Park & Ride", desc: "Continuous off-site shuttle loops" },
      { icon: "Building2", title: "Trade Shows", desc: "International Centre & Enercare transit" },
      { icon: "Users", title: "Festival Transit", desc: "Downsview Park & waterfront events" }
    ],
    content: [
      "When you are hosting an event for thousands of people, parking and traffic congestion are your biggest liabilities. We specialize in mega-event logistics, deploying synchronized fleets of motorcoaches and school buses to move massive crowds efficiently.",
      "From park-and-ride shuttle loops for summer music festivals at Downsview Park to VIP transport for international trade shows, our dedicated dispatchers ensure smooth traffic flow, minimizing wait times and maximizing attendee satisfaction."
    ],
    faqs: [
      { q: "Can you provide a dedicated on-site dispatcher?", a: "Yes, for large-scale events utilizing multiple buses, we provide on-site coordinators to manage the loading zones and keep schedules tight." },
      { q: "Do you offer wrapped buses for event branding?", a: "We can coordinate custom vinyl wrapping or signage on our coaches to promote your event while in transit." }
    ]
  }
};

export const UPCOMING_EVENTS = [
  {
    event: "Edmonton Folk Music Festival",
    location: "Edmonton, Alberta",
    date: "August 6–9, 2026",
    services: "Coach Bus, Mini Coach, Festival Shuttle",
    customers: "Music groups, community organizations, corporate groups"
  },
  {
    event: "ItalfestMTL",
    location: "Montréal, Quebec",
    date: "August 7–16, 2026",
    services: "Mini Coach, Sprinter Van, Family Group Transportation",
    customers: "Cultural associations, families, tour groups"
  },
  {
    event: "Edmonton International Fringe Theatre Festival",
    location: "Edmonton, Alberta",
    date: "August 13–23, 2026",
    services: "Mini Coach, Sprinter Van, Venue-to-Venue Shuttle",
    customers: "Theatre groups, performers, schools and tourists"
  },
  {
    event: "Canadian National Exhibition (CNE)",
    location: "Toronto, Ontario",
    date: "August 21–September 7, 2026",
    services: "School Bus, Coach Bus, Mini Coach",
    customers: "Schools, youth clubs, families, employee outings"
  },
  {
    event: "Indian Food Festival of Ottawa",
    location: "Ottawa, Ontario",
    date: "August 21–23, 2026",
    services: "School Bus, Mini Coach, Sprinter Van",
    customers: "Cultural groups, families, community organizations"
  },
  {
    event: "Calgary Pride Week & Parade",
    location: "Calgary, Alberta",
    date: "Aug 31–Sept 6, 2026 (Parade on Sept 6)",
    services: "Coach Bus, Mini Coach, Event Shuttle",
    customers: "Community groups, employers, associations and visitors"
  },
  {
    event: "Toronto International Film Festival (TIFF)",
    location: "Toronto, Ontario",
    date: "September 10–20, 2026",
    services: "Executive Sprinter Van, Mini Coach, VIP Shuttle",
    customers: "Film companies, corporate guests, production crews and hotels"
  },
  {
    event: "Kitchener-Waterloo Oktoberfest",
    location: "Kitchener-Waterloo, Ontario",
    date: "Sept 25–Oct 17, 2026 (Activities not daily)",
    services: "Coach Bus, Mini Coach, Designated Group Shuttle",
    customers: "Corporate groups, clubs, families and tour operators"
  },
  {
    event: "Vancouver International Film Festival (VIFF)",
    location: "Vancouver, BC",
    date: "October 1–11, 2026",
    services: "Sprinter Van, Mini Coach, Hotel & Airport Transfers",
    customers: "Production teams, VIP guests, corporate groups and tourists"
  },
  {
    event: "Celtic Colours International Festival",
    location: "Cape Breton Island, NS",
    date: "October 9–17, 2026",
    services: "Coach Bus, Mini Coach, Multi-Venue Shuttle",
    customers: "Cultural groups, seniors’ groups, music tours and travel clubs"
  },
  {
    event: "Royal Agricultural Winter Fair",
    location: "Toronto, Ontario",
    date: "November 6–15, 2026",
    services: "School Bus, Coach Bus, Mini Coach",
    customers: "Schools, agricultural organizations, exhibitors and families"
  },
  {
    event: "Grey Cup Festival & 113th Grey Cup",
    location: "Calgary, Alberta",
    date: "Nov 11–15, 2026 (Game on Nov 15)",
    services: "Coach Bus, Game-day Shuttle, Sprinter Van",
    customers: "Fan clubs, corporate hospitality groups, teams and sponsors"
  },
  {
    event: "Niagara Falls Winter Festival of Lights",
    location: "Niagara Falls, Ontario",
    date: "Nov 14, 2026–Jan 10, 2027",
    services: "Coach Bus, School Bus, Mini Coach",
    customers: "Schools, churches, families, senior groups and holiday tours"
  },
  {
    event: "Québec Winter Carnival",
    location: "Québec City, Quebec",
    date: "February 5–14, 2027",
    services: "Coach Bus, Mini Coach, Winter Group Shuttle",
    customers: "Schools, international tourists, corporate groups and families"
  }
];

export const EVERGREEN_EVENTS = [
  "Calgary Stampede",
  "Canada Day Celebrations (Ottawa, Toronto, Vancouver & Montréal)",
  "Toronto Caribbean Carnival",
  "Montréal International Jazz Festival",
  "Ottawa Bluesfest",
  "Canadian Tulip Festival (Ottawa)",
  "Vancouver Celebration of Light",
  "Edmonton Heritage Festival",
  "Toronto Pride, Montréal Pride, Vancouver Pride",
  "Toronto Christmas Market & Distillery Winter Village",
  "Vancouver Christmas Market",
  "Montréal en Lumière",
  "Winterlude (Ottawa–Gatineau)",
  "Fan Expo Canada",
  "Toronto International AutoShow",
  "Montréal Grand Prix Weekend"
];