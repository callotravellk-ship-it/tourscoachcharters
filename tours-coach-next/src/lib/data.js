export const COMPANY_INFO = {
  name: "Canada Tours Coach LTD",
  phone: "(416) 269-9555",
  email: "info@tourscoachcharter.com",
  address: "1315 Pickering Parkway, Suite 300, Pickering, ON L1V 7G5"
};

export const NAV_LINKS = [
  { title: "Home", id: "" },
  { 
    title: "Fleet", 
    id: "fleet",
    dropdown: [
      { title: "56 Passenger Luxury Coach", id: "luxury-coach-bus-charter" },
      { title: "Mini Coach Bus (24-36)", id: "mini-coach-bus-charter" },
      { title: "14 Passenger Van", id: "14-passenger-van-service" },
      { title: "School Bus Charter", id: "school-bus-charter" }
    ]
  },
  {
    title: "Services",
    id: "services",
    dropdown: [
      { title: "Corporate Transportation", id: "services/corporate-transportation" },
      { title: "Wedding Shuttles", id: "services/wedding-shuttle" },
      { title: "School Field Trips", id: "services/school-trip-transportation" },
      { title: "Sports Teams", id: "services/sports-team-transportation" },
      { title: "Private Bus Tours", id: "services/private-bus-tours" },
      { title: "Airport Transfers", id: "services/airport-group-transfers" },
      { title: "Mega-Event Shuttles", id: "services/event-shuttle-services" }
    ]
  },
  { title: "Pricing & Rates", id: "pricing" },
  { title: "Toronto Charters", id: "charter-bus-rental-toronto" },
  { title: "Tours", id: "tours" },
  { title: "Multi-Day", id: "multi-day-tours" },
  {
    title: "Destinations",
    id: "destinations",
    dropdown: [
      { title: "Toronto", id: "charter-bus-service-toronto" },
      { title: "Scarborough", id: "charter-bus-service-scarborough" },
      { title: "Mississauga", id: "charter-bus-service-mississauga" },
      { title: "Brampton", id: "charter-bus-service-brampton" },
      { title: "Vaughan", id: "charter-bus-service-vaughan" },
      { title: "North York", id: "charter-bus-service-north-york" },
      { title: "Pickering", id: "charter-bus-service-pickering" },
      { title: "Ajax", id: "charter-bus-service-ajax" },
      { title: "Hamilton", id: "charter-bus-service-hamilton" },
      { title: "Burlington", id: "charter-bus-service-burlington" },
      { title: "Oshawa", id: "charter-bus-service-oshawa" },
      { title: "Barrie", id: "charter-bus-service-barrie" }
    ]
  },
  { title: "Winter", id: "winter-destinations" },
  { title: "Events", id: "events" }
];

export const FLEET_DATA = {
  "luxury-coach-bus-charter": {
    name: "56 Passenger Luxury Coach Bus",
    shortName: "56-Passenger Coach",
    category: "Full Size Motorcoach",
    pax: "56 Passengers",
    luggage: "56 Large Suitcases (Heated Bays) + 56 Overhead Bins",
    rate: "From $175 / hr (CAD)",
    dailyRate: "From $1,450 / day (CAD)",
    searchKeywords: "56 passenger coach bus rental, luxury coach charter ontario, rent a coach bus toronto, coach bus rental canada, charter bus rental canada",
    desc: "The gold standard for long-distance group travel across Canada and large-scale Ontario corporate movements. Our 56 passenger luxury coach bus rental fleet offers supreme highway comfort, panoramic sightseeing windows, an onboard restroom, high-speed Wi-Fi, 110V power outlets at every seat, and massive undercarriage luggage storage.",
    features: [
      "56 Reclining High-Back Plush Seats with Armrests",
      "Clean, Sanitized Onboard Restroom / Lavatory",
      "High-Speed Wi-Fi & 110V/USB Charging at Every Seat",
      "Massive Heated Undercarriage Storage (56+ Large Suitcases)",
      "Multi-Zone Climate Control (Optimal A/C & Heating)",
      "Dual PA Microphone System & Flat-Screen Video Monitors",
      "Professional, Vetted & Insured Commercial Driver Included",
      "Ontario CVOR Certified & $10M Commercial Liability Insurance"
    ],
    idealFor: "Corporate conferences at MTCC, wedding guest transportation, sports tournaments, university teams, multi-day tours to Montreal, Ottawa, and Niagara Falls.",
    img: "/fleet-luxury.jpg",
    reviews: [
      { author: "Sarah Jenkins, Corporate Events Director", rating: 5, text: "Pristine 56-passenger coach! We chartered two buses for a corporate summit from Toronto to Ottawa. The Wi-Fi, power outlets, and comfortable reclining seats allowed our executives to work in complete comfort." },
      { author: "Coach Mike D., Varsity Athletics", rating: 5, text: "The undercarriage bays easily fit all our hockey equipment bags and sticks. The bus was right on time, spotless, and the driver handled winter highway conditions expertly." },
      { author: "Elena R., Wedding Planner (GTA)", rating: 5, text: "I regularly book the 56-passenger luxury coaches for large weddings across Caledon and Niagara. Seamless guest shuttles, sparkling clean, and wonderful drivers." }
    ]
  },
  "mini-coach-bus-charter": {
    name: "24 - 36 Passenger Mini Coach Bus",
    shortName: "Mini Coach / Minibus",
    category: "Mid-Size Executive Bus",
    pax: "24 - 36 Passengers",
    luggage: "25-30 Suitcases + Overhead Racks",
    rate: "From $140 / hr (CAD)",
    dailyRate: "From $1,150 / day (CAD)",
    searchKeywords: "minibus rental toronto, coach bus vs minibus rental for events, corporate shuttle services GTA",
    desc: "The ultimate balance of maneuverability, luxury, and capacity. Our 24 to 36 passenger mini coach bus rental is ideal for corporate offsites, wedding parties, golf trips, and regional tours throughout Toronto, the GTA, and Niagara. Enjoy full coach amenities in a nimble package.",
    features: [
      "24 to 36 Ergonomic Reclining Leather Seats",
      "Dedicated Rear Luggage Bay + Overhead Racks",
      "High-Output Dual Air Conditioning & Heating",
      "PA Announcement System & Premium Bluetooth Sound",
      "Individual LED Reading Lights & USB Charge Ports",
      "Tinted Privacy Windows with Thermal UV Shield",
      "Agile Navigation for Downtown Toronto Hotel Drop-Offs",
      "Professional Driver with Full CVOR Certification"
    ],
    idealFor: "Corporate department retreats, wedding party & family shuttles, Niagara-on-the-Lake wine tours, golf outings, and airport group transfers.",
    img: "/fleet-mini.jpg",
    reviews: [
      { author: "David T., Tech Offsite Coordinator", rating: 5, text: "The 32-passenger minibus was ideal for our team's offsite in Niagara. Easy to board, smooth ride, and nimble enough to navigate tight winery driveways that full coaches couldn't reach." },
      { author: "Jessica Wong, Social Event Committee", rating: 5, text: "Booked this for our 30-person family reunion trip. The PA system was crisp for announcements and the seats were super comfortable. Unbeatable service!" },
      { author: "St. Mary's Seniors Club", rating: 5, text: "We used the mini coach for our day trip to the Royal Botanical Gardens. The driver was so patient, courteous, and the low-entry step made boarding easy for everyone." }
    ]
  },
  "14-passenger-van-service": {
    name: "14 Passenger Chauffeured Van",
    shortName: "14 Passenger Sprinter Van",
    category: "Executive High-Roof Van",
    pax: "Up to 14 Passengers",
    luggage: "14 Large Bags + Carry-Ons",
    rate: "From $115 / hr (CAD)",
    dailyRate: "From $850 / day (CAD)",
    searchKeywords: "passenger van rental GTA, executive coach charter canada, airport shuttle toronto",
    desc: "Premium chauffeured passenger van rental in the Greater Toronto Area. High-roof design allows passengers to stand comfortably, while dedicated rear cargo space accommodates airport luggage with ease. Perfect for VIP corporate transfers and small group outings.",
    features: [
      "High-Roof Walk-In Clearance (Stand Up Inside)",
      "14 Individual Plush Seats with 3-Point Seatbelts",
      "Generous Rear Cargo Compartment for Luggage",
      "Front and Rear Heavy-Duty Climate Control",
      "Tinted Dark Privacy Windows",
      "Curbside Pearson Airport (YYZ) Express Drop-Off",
      "Licensed Commercial Driver Included"
    ],
    idealFor: "Toronto Pearson Airport (YYZ) & Billy Bishop transfers, executive VIP dinners, small family gatherings, and wedding bridal party shuttles.",
    img: "/fleet-van.jpg",
    reviews: [
      { author: "Michael C., Family Travel", rating: 5, text: "Booked this high-roof van for our 12-person family trip to Pearson Airport. All 14 suitcases fit into the back easily and the driver arrived 15 minutes early." },
      { author: "Amanda L., Executive Assistant", rating: 5, text: "We use these vans for executive shuttles between our Mississauga and downtown Toronto Financial District offices. Immaculate condition and dependable drivers." }
    ]
  },
  "school-bus-charter": {
    name: "48 - 56 Passenger School Bus",
    shortName: "Yellow School Bus",
    category: "Economical Group Transport",
    pax: "48 Adults / 56 Children",
    luggage: "Under-seat / In-cabin space",
    rate: "From $105 / hr (CAD)",
    dailyRate: "From $750 / day (CAD)",
    searchKeywords: "school bus rental toronto, affordable school field trip bus canada, sports team bus rental ontario",
    desc: "The most budget-friendly, dependable group transportation solution across Ontario. Safe, robust, and certified for school field trips, day camps, sports leagues, and festival park-and-ride shuttles. Driven by fully screened, professional school bus drivers.",
    features: [
      "High Capacity: 48 Adults or 56 Children",
      "Most Cost-Effective Rate per Passenger in Canada",
      "Ontario Ministry of Transportation (MTO) Safety Certified",
      "Vetted Drivers with Vulnerable Sector Screening",
      "High-Visibility Yellow Bus with Stop Arm Safety",
      "Dual Heating Systems for Canadian Winters"
    ],
    idealFor: "K-12 School field trips to the ROM, Toronto Zoo & Science Centre, youth sports tournaments, summer camps, and community festivals.",
    img: "/fleet-school.jpg",
    reviews: [
      { author: "Principal Harding, TDSB", rating: 5, text: "Tours Coach Charters is our primary choice for school excursions. The drivers are patient and punctual, safety is impeccable, and the buses are thoroughly inspected." },
      { author: "Tom S., Camp Director", rating: 4, text: "We chartered four school buses for our 200 campers to visit Canada's Wonderland. Flawless timing, great communication, and unbeatable pricing." }
    ]
  }
};


// Aliases for legacy/alternate routes
FLEET_DATA["luxury-coach-bus-rental"] = FLEET_DATA["luxury-coach-bus-charter"];
FLEET_DATA["mini-coach-bus-rental"] = FLEET_DATA["mini-coach-bus-charter"];
FLEET_DATA["14-passenger-van-rental"] = FLEET_DATA["14-passenger-van-service"];
FLEET_DATA["school-bus-rental"] = FLEET_DATA["school-bus-charter"];

export const SEO_DATA = {
  "pricing": { title: "Charter Bus Rental Toronto Prices & Cost in Canada | Tours Coach Charters", desc: "How much does it cost to rent a charter bus in Canada? Transparent pricing guide for Toronto & Canada. Compare 56-passenger coach, minibus, and van rates in CAD." },
  "charter-bus-rental-toronto": { title: "Charter Bus Rental Toronto | Coach Bus & Minibus Charters GTA", desc: "Premier charter bus rental in Toronto & the GTA. 56 passenger luxury coaches, minibus rentals, and passenger vans with professional drivers. Get an instant CAD quote." },
  "services/private-bus-tours": { title: "Private Bus Tours Toronto & Niagara Falls Charter Bus Rental", desc: "Book private bus tours in Toronto and Niagara Falls charter bus rentals with professional drivers. Custom itineraries for private groups and corporate sightseeing." },
  "home": { title: "Charter Bus Services Canada | Tours Coach Charters", desc: "Canada's Premier Charter Bus Services. From corporate retreats to school trips, we provide reliable transportation from coast to coast." },
  "about": { title: "About Us | Tours Coach Charters", desc: "Learn about Canada Tours Coach LTD. We provide safe, reliable, and premium charter bus transportation across the country." },
  "tours": { title: "Ontario Group Tours & Day Trips | Tours Coach Charters", desc: "Private group day tours and event transportation from the GTA. Travel with your group—not the crowd." },
  "contact": { title: "Contact Us | Tours Coach Charters", desc: "Get in touch with Canada Tours Coach LTD for quotes, questions, and group transportation logistics." },
  "events": { title: "Canadian Event & Festival Charter Bus Transportation | Tours Coach Charters", desc: "Private group bus hire, mini coach charters, and executive Sprinter van shuttles for major festivals and events across Canada." },
  "luxury-coach-bus-charter": { title: "56 Passenger Luxury Coach Bus Rental Toronto & Canada | Tours Coach", desc: "Rent a 56 passenger luxury coach bus in Toronto, Ontario & Canada. Features reclining seats, onboard restroom, high-speed Wi-Fi, 110V power outlets, and massive luggage bays." },
  "mini-coach-bus-charter": { title: "24-36 Passenger Mini Coach Bus Rental Toronto & GTA | Tours Coach", desc: "Executive 24 to 36 passenger mini coach bus rental in Toronto & Ontario. Perfect for corporate retreats, wedding guest shuttles, and airport group transfers." },
  "14-passenger-van-service": { title: "14 Passenger Chauffeured Van Rental Toronto & GTA | Tours Coach", desc: "High-roof 14 passenger van rental with professional chauffeur. High walk-in clearance, dedicated airport luggage cargo, and plush seating for Pearson airport & VIP transfers." },
  "school-bus-charter": { title: "School Bus Rental Toronto & Ontario (48-56 Pax) | Tours Coach", desc: "Affordable, MTO-certified 48 to 56 passenger school bus rental in Toronto & Ontario. Safe, dependable transportation for school field trips, sports teams, and day camps." },
  "luxury-coach-bus-rental": { title: "56 Passenger Luxury Coach Bus Rental Toronto & Canada | Tours Coach", desc: "Rent a 56 passenger luxury coach bus in Toronto, Ontario & Canada. Features reclining seats, onboard restroom, high-speed Wi-Fi, 110V power outlets, and massive luggage bays." },
  "mini-coach-bus-rental": { title: "24-36 Passenger Mini Coach Bus Rental Toronto & GTA | Tours Coach", desc: "Executive 24 to 36 passenger mini coach bus rental in Toronto & Ontario. Perfect for corporate retreats, wedding guest shuttles, and airport group transfers." },
  "14-passenger-van-rental": { title: "14 Passenger Chauffeured Van Rental Toronto & GTA | Tours Coach", desc: "High-roof 14 passenger van rental with professional chauffeur. High walk-in clearance, dedicated airport luggage cargo, and plush seating for Pearson airport & VIP transfers." },
  "school-bus-rental": { title: "School Bus Rental Toronto & Ontario (48-56 Pax) | Tours Coach", desc: "Affordable, MTO-certified 48 to 56 passenger school bus rental in Toronto & Ontario. Safe, dependable transportation for school field trips, sports teams, and day camps." },
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
  "winter-destinations": { title: "Winter Destination Charters | Tours Coach Charters", desc: "Dedicated motorcoach services for ski trips to Whistler, Blue Mountain, and Banff." },
  
  // DOCUMENT IMPLEMENTATION: NEW TOUR SEO TITLES
  "toronto-highlights": { title: "Private Toronto City Tour & Group Charter from the GTA | Tours Coach Charters", desc: "Discover Toronto your way with private group transportation and a flexible itinerary." },
  "niagara-falls-experience": { title: "Private Niagara Falls Bus Tour from Toronto & the GTA | Tours Coach Charters", desc: "Experience the power of Niagara Falls and the charm of Niagara-on-the-Lake in one private day trip." },
  "muskoka-algonquin-escape": { title: "Muskoka & Algonquin Group Day Trip Transportation | Tours Coach Charters", desc: "Trade the city for lakes, forests, and classic Ontario scenery with private day trip transportation." },
  "ottawa-capital-tour": { title: "Private Ottawa Group Tour Transportation from Toronto | Tours Coach Charters", desc: "Visit Canada's capital with private round-trip group transportation from the GTA." },
  "kingston-thousand-islands": { title: "Kingston & Thousand Islands Group Charter Tour | Tours Coach Charters", desc: "Combine Kingston's historic waterfront with the beauty of the Thousand Islands." },
  "blue-mountain-getaway": { title: "Blue Mountain & Collingwood Group Transportation | Tours Coach Charters", desc: "Plan a refreshing group getaway to Blue Mountain and Collingwood with private transportation." },
  "toronto-sports-events": { title: "Toronto Sports & Event Group Transportation | Tours Coach Charters", desc: "Keep your group together from pickup to the final whistle with private event transportation." },
  "prince-edward-county": { title: "Prince Edward County & Sandbanks Group Day Tour | Tours Coach Charters", desc: "Discover the beaches, rural scenery, and welcoming towns of Prince Edward County." },
  "tobermory-bruce-peninsula": { title: "Tobermory & Bruce Peninsula Group Transportation | Tours Coach Charters", desc: "Travel to the clear waters, rugged shoreline, and harbour scenery of the Bruce Peninsula." },
  "elora-gorge-fergus": { title: "Elora Gorge & Fergus Private Group Tour | Tours Coach Charters", desc: "Pair dramatic Grand River scenery with the limestone architecture of Elora and Fergus." },
  "stratford-theatre": { title: "Stratford Theatre Group Transportation from the GTA | Tours Coach Charters", desc: "Enjoy Stratford's theatre culture, gardens, and walkable heritage district." },
  "st-jacobs-market": { title: "St. Jacobs Market Group Bus Tour | Tours Coach Charters", desc: "Plan an easy group outing to the St. Jacobs market district, village shops, and Waterloo Region." },
  "hamilton-waterfalls": { title: "Hamilton Waterfalls & Gardens Group Tour | Tours Coach Charters", desc: "Create a nature-focused day around Hamilton's escarpment scenery and the gardens of Burlington." },
  "peterborough-kawarthas": { title: "Peterborough & Kawarthas Group Day Trip | Tours Coach Charters", desc: "Explore lift-lock heritage, lakeside communities, trails, and local food stops." },
  "wasaga-beach": { title: "Wasaga Beach Group Transportation from the GTA | Tours Coach Charters", desc: "Make your group beach day simple with private round-trip transportation to Wasaga Beach." },
  "african-lion-safari": { title: "African Lion Safari Group Transportation | Tours Coach Charters", desc: "Give your group a full day of wildlife experiences with comfortable round-trip transportation." },
  "canadas-wonderland": { title: "Canada's Wonderland Group Transportation | Tours Coach Charters", desc: "Keep your group together with scheduled transportation to and from Canada's Wonderland." }
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
    subtitle: "Expert group travel solutions for the University of Guelph, Sleeman Centre events, and brewery tours.",
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
    title: "Corporate Event Bus Rental Toronto & Executive Coach Charter Canada",
    subtitle: "Executive coach charters, corporate shuttle services GTA, and seamless conference transportation for meetings, retreats, and daily employee commuting across Canada.",
    img: "/services-corporate.jpg",
    highlights: [
      { icon: "Briefcase", title: "Executive Coach Charter Canada", desc: "Wi-Fi, 110V outlets & mobile productivity" },
      { icon: "Building2", title: "Corporate Event Bus Rental Toronto", desc: "Direct shuttles to MTCC, Enercare & Financial District" },
      { icon: "Users", title: "Corporate Shuttle Services GTA", desc: "Employee commute loops & transit station connections" }
    ],
    content: [
      "Tours Coach Charters is Canada's premier partner for corporate event bus rental in Toronto and executive coach charters across Canada. Whether you are transferring 500 convention delegates from Toronto Pearson (YYZ) to the Metro Toronto Convention Centre (MTCC) or coordinating executive transportation to a strategic retreat in Muskoka or Niagara, our modern fleet delivers punctuality, discretion, and executive luxury.",
      "Our corporate shuttle services in the GTA bridge the critical last-mile gap between major transit stations (such as Vaughan Metropolitan Centre, Union Station, and Kipling) and corporate headquarters throughout Mississauga, Markham, and Pickering. Equipped with fast Wi-Fi, individual 110V power outlets, USB ports, and ergonomic reclining seats, our 56-passenger coaches and executive minibuses keep your team connected and productive while on the move.",
      "We provide customized billing, dedicated corporate account managers, GPS-monitored fleet tracking, and flexible long-term corporate shuttle contracts tailored to Canadian business schedules."
    ],
    faqs: [
      { q: "Do you offer corporate event bus rental in Toronto with multiple pickup locations?", a: "Yes. Our dispatch team coordinates multi-point pickups across the GTA, including downtown Toronto hotels, Pearson Airport, and suburban corporate campuses." },
      { q: "What amenities are included on your executive coach charter in Canada?", a: "Our executive coaches include high-speed Wi-Fi, power outlets at every seat, reclining leather seats, climate control, an onboard clean lavatory, and flat-screen presentation monitors." },
      { q: "Can we set up ongoing corporate shuttle services in the GTA for employee commutes?", a: "Yes, we specialize in recurring daily and weekly corporate commuter shuttles with priority dispatch, backup fleet coverage, and monthly corporate invoicing." },
      { q: "Are your drivers trained for executive VIP protocol?", a: "Every driver is professionally suited, thoroughly vetted, CVOR certified, and trained in discreet, punctual executive hospitality." }
    ]
  },
  "wedding-shuttle": {
    title: "Wedding Shuttle Bus Rental Toronto & Ontario Transportation",
    subtitle: "Guest shuttle for wedding GTA, luxury wedding transportation rentals Ontario, and seamless hotel-to-venue loops across Caledon, Vaughan, Niagara, and Prince Edward County.",
    img: "/services-wedding.jpg",
    highlights: [
      { icon: "Users", title: "Guest Shuttle for Wedding GTA", desc: "Safe, continuous loops between hotels and venues" },
      { icon: "Map", title: "Wedding Transportation Rentals Ontario", desc: "Expert navigation for rustic estates, wineries & barns" },
      { icon: "Award", title: "Bridal Party Shuttles", desc: "Executive 14-passenger vans & luxury minibuses" }
    ],
    content: [
      "Your wedding day should be celebratory and stress-free. With Tours Coach Charters' wedding shuttle bus rental in Toronto and premier wedding transportation rentals across Ontario, your loved ones travel in complete comfort and safety. From grand banquet halls in Woodbridge to scenic vineyard weddings in Niagara-on-the-Lake and rustic estate barns in Caledon, our experienced drivers know every route.",
      "We specialize in guest shuttle service for weddings throughout the GTA. We coordinate custom continuous loops from host hotels to ceremony and reception sites, followed by safe late-night return trips so every guest can celebrate without worrying about designated drivers, parking shortages, or late-night ride-shares.",
      "From high-roof 14-passenger Sprinter vans for the bridal party to 56-passenger luxury motorcoaches for out-of-town guests, we provide clean, climate-controlled, beautifully presented vehicles that match the elegance of your wedding."
    ],
    faqs: [
      { q: "How does a guest shuttle for a wedding in the GTA work?", a: "We establish a scheduled loop between your host hotel(s) and the venue. Before the ceremony, we run 2-3 departures to get all guests seated on time. During the evening and reception end, we run continuous or hourly return shuttles." },
      { q: "Can your buses navigate rustic barn or vineyard venues outside Toronto?", a: "Yes! Our drivers are experienced with rural Ontario roads, winding country lanes in Caledon, Prince Edward County, and Niagara wineries. We verify site access and turning radius beforehand." },
      { q: "Can we play our own music on the wedding bus?", a: "Absolutely! Our mini coaches and luxury buses feature Bluetooth audio systems so you can play your custom wedding playlist." },
      { q: "When should we reserve wedding transportation rentals in Ontario?", a: "Ontario wedding dates (especially May through October) fill up fast. We recommend booking 4 to 8 months in advance to ensure preferred vehicle availability." }
    ]
  },
  "school-trip-transportation": {
    title: "School Bus Rental Toronto & Field Trip Transportation Canada",
    subtitle: "Affordable school field trip bus Canada, certified school bus rental Toronto, and safe, compliant group travel for Ontario school boards and universities.",
    img: "/services-school.jpg",
    highlights: [
      { icon: "ShieldCheck", title: "Safety First & MTO Certified", desc: "Rigorous background checks & CVOR compliant" },
      { icon: "Landmark", title: "School Bus Rental Toronto", desc: "Field trips to ROM, Science Centre & Toronto Zoo" },
      { icon: "Users", title: "Affordable School Field Trip Bus Canada", desc: "Budget-friendly per-student group rates" }
    ],
    content: [
      "Safety, punctuality, and affordability are the foundations of our school bus rental services in Toronto and across Canada. We are the trusted transportation partner for school boards (including TDSB, TCDSB, PDSB, and DDSB), private academies, and universities across Ontario.",
      "Looking for an affordable school field trip bus in Canada? We offer economical 48-to-56 passenger yellow school buses for local educational day trips to the Royal Ontario Museum (ROM), Ontario Science Centre, Toronto Zoo, Ripley's Aquarium, and Pioneer Village. For longer journeys, university band tours, or sports excursions, our 56-passenger luxury motorcoaches provide onboard restrooms and climate-controlled comfort.",
      "All drivers undergo comprehensive vulnerable sector screening, criminal background checks, and annual defensive driving audits. Every vehicle in our fleet exceeds strict Ontario Ministry of Transportation (MTO) commercial safety standards."
    ],
    faqs: [
      { q: "Are your drivers screened for school transportation in Ontario?", a: "Yes, 100% of our drivers have completed vulnerable sector screening, clear background checks, and valid Ontario commercial licenses." },
      { q: "What makes your school bus rental in Toronto affordable for field trips?", a: "With up to 56 passenger capacity per bus and competitive local charter rates, our cost per student is significantly lower than alternative transportation methods." },
      { q: "Can you accommodate multi-bus charters for entire grade levels?", a: "Yes, we regularly deploy synchronized fleets of 5 to 15 buses for massive school outings to Canada's Wonderland, conservation parks, and athletic competitions." }
    ]
  },
  "sports-team-transportation": {
    title: "Sports Team Bus Rental Ontario & Tournament Charters",
    subtitle: "High-capacity 56-passenger coach buses with massive hockey bag storage for sports teams in Toronto, Ontario, and nationwide competitions.",
    img: "/services-sports.jpg",
    highlights: [
      { icon: "Trophy", title: "Sports Team Bus Rental Ontario", desc: "Tournaments at CAA Centre, Gretzky Centre & arenas" },
      { icon: "Briefcase", title: "Massive Hockey Bag Storage", desc: "Spacious undercarriage luggage bays for all gear" },
      { icon: "Users", title: "Athlete Comfort & Legroom", desc: "High-back reclining seats & climate control" }
    ],
    content: [
      "Athletes perform best when they arrive rested, hydrated, and focused. Tours Coach Charters is the premier choice for sports team bus rental in Ontario and across Canada. From minor hockey associations traveling to the Silver Stick tournament to university varsity rosters heading to OUA championships, our fleet is built for athletic travel.",
      "Our 56-passenger luxury coach buses feature oversized undercarriage luggage bays that effortlessly fit dozens of goalie bags, hockey sticks, training equipment, and coolers. Inside, players enjoy ample legroom, reclining high-back seats, Wi-Fi to review game film, and power outlets at every seat.",
      "We provide door-to-door transit to major sports complexes across Ontario, including the CAA Centre in Brampton, Wayne Gretzky Sports Centre in Brantford, Paramount Fine Foods Centre in Mississauga, and Scotiabank Arena in downtown Toronto."
    ],
    faqs: [
      { q: "Can your sports team bus rental in Ontario fit all our hockey equipment?", a: "Yes. Our 56-passenger coaches feature massive underfloor luggage compartments specifically engineered to fit 50+ hockey bags, sticks, and team equipment without taking up passenger seats." },
      { q: "Do you offer tournament shuttle packages spanning a whole weekend?", a: "Yes, we provide full weekend tournament packages including hotel-to-arena shuttles, team dinner transit, and return travel." },
      { q: "Can parents and coaches ride together on the same bus?", a: "Definitely. Our 56-seat coaches provide plenty of space for players, coaching staff, and chaperones to travel as one united group." }
    ]
  },
  "private-bus-tours": {
    title: "Private Bus Tours Toronto & Niagara Falls Charter Bus Rental",
    subtitle: "Private bus tours Toronto, Niagara Falls charter bus rental, and luxury sightseeing coach bus Toronto with custom itineraries across Canada.",
    img: "/service-tours.jpg",
    highlights: [
      { icon: "Navigation", title: "Private Bus Tours Toronto", desc: "Customized city sightseeing & architectural tours" },
      { icon: "Map", title: "Niagara Falls Charter Bus Rental", desc: "Day trips, wine tastings & Hornblower cruises" },
      { icon: "BusFront", title: "Sightseeing Coach Bus Toronto", desc: "Panoramic windows, PA audio & climate control" }
    ],
    content: [
      "Discover the best of Ontario on your own terms with Tours Coach Charters' private bus tours in Toronto and luxury Niagara Falls charter bus rentals. Unlike rigid public tours, our private charter buses let your group set the schedule, choose your photo stops, and travel in exclusive comfort.",
      "Our sightseeing coach bus in Toronto takes you to iconic landmarks including the CN Tower, Casa Loma, Distillery District, Royal Ontario Museum, and Harbourfront. For excursions outside the city, our private Niagara Falls charter bus rental includes scenic stops along the Niagara Parkway, Whirlpool Rapids, floral clock, and wine tastings in charming Niagara-on-the-Lake.",
      "Whether you are hosting international corporate guests, extended families, or community associations, our knowledgeable drivers and comfortable motorcoaches deliver an unforgettable sightseeing experience."
    ],
    faqs: [
      { q: "Can we customize our itinerary for private bus tours in Toronto?", a: "Yes, 100%! You decide the pickup time, pickup locations, attraction stops, meal breaks, and tour duration. We drive your schedule." },
      { q: "What is included with a Niagara Falls charter bus rental?", a: "We provide private round-trip transportation from anywhere in the GTA to Niagara Falls and Niagara-on-the-Lake, with driver staging and scenic stops along the way." },
      { q: "Can our guide use the onboard PA audio system?", a: "Yes, all our luxury coaches and mini coaches come equipped with crystal-clear PA microphone systems for your step-on tour guide." }
    ]
  },
  "airport-group-transfers": {
    title: "Toronto Airport Group Transfers & Pearson (YYZ) Shuttles",
    subtitle: "Punctual, stress-free group shuttles to Pearson (YYZ), Billy Bishop (YTZ), and Hamilton (YHM).",
    img: "/services-airport.jpg",
    highlights: [
      { icon: "Plane", title: "Pearson (YYZ) Curbside", desc: "Designated commercial charter bays at Terminals 1 & 3" },
      { icon: "ShieldCheck", title: "Live Flight Tracking", desc: "Automatic schedule adjustments for flight delays" },
      { icon: "Briefcase", title: "Massive Luggage Capacity", desc: "Dedicated cargo space for all passenger bags" }
    ],
    content: [
      "Navigating airport logistics with a large group is challenging. Tours Coach Charters eliminates the stress with coordinated, high-capacity airport transfers. Whether greeting an international delegation at Toronto Pearson (YYZ) or moving a corporate team to Billy Bishop (YTZ), we guarantee absolute punctuality.",
      "Our logistics team actively monitors your flight status in real time, ensuring our luxury coaches or executive vans are staged and ready the moment your group collects their luggage."
    ],
    faqs: [
      { q: "What happens if our inbound flight to Pearson is delayed?", a: "Our dispatchers monitor live flight tracking data. We adjust your bus staging time automatically with zero hassle." },
      { q: "Where do we meet our charter bus at Toronto Pearson (YYZ)?", a: "We coordinate pickups at the designated commercial bus bays at both Terminal 1 and Terminal 3." }
    ]
  },
  "event-shuttle-services": {
    title: "Mega-Event Shuttle Services & Festival Fleet Coordination",
    subtitle: "Complex logistics and multi-bus fleet coordination for festivals, trade shows, FIFA 2026, and concerts.",
    img: "/services-event.jpg",
    highlights: [
      { icon: "Map", title: "Park & Ride Loops", desc: "Continuous off-site parking shuttle coordination" },
      { icon: "Building2", title: "Trade Shows & Conventions", desc: "Direct transit to International Centre & MTCC" },
      { icon: "Users", title: "FIFA 2026 & Stadium Transit", desc: "High-capacity crowd movement to BMO Field" }
    ],
    content: [
      "When hosting events with thousands of attendees, parking and traffic congestion are your biggest liabilities. We specialize in mega-event logistics, deploying synchronized fleets of motorcoaches and mini buses to move massive crowds safely and efficiently.",
      "From park-and-ride loops for summer music festivals to VIP transport for international conventions, our dedicated on-site dispatchers keep schedules tight and attendee satisfaction high."
    ],
    faqs: [
      { q: "Can you provide dedicated on-site dispatch coordinators?", a: "Yes, for multi-bus event operations, we assign experienced on-site managers to supervise loading zones and dispatch." },
      { q: "Are you providing shuttle services for FIFA 2026 matches in Toronto?", a: "Yes, we are actively reserving group charter fleets for Toronto Stadium (BMO Field) matches and fan festivals." }
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

export const FEATURED_TOURS = [
  {
    id: "toronto-highlights",
    title: "Toronto Highlights Private City Tour",
    duration: "Up to 8 hours",
    route: "GTA pickup • Toronto • GTA return",
    startingPrice: "$1,150",
    description: "Discover Toronto your way with private group transportation and a flexible itinerary. Choose the landmarks that suit your group, and enjoy convenient pickup and return service from the Greater Toronto Area.",
    highlights: ["CN Tower", "Ripley's Aquarium of Canada", "Royal Ontario Museum", "Casa Loma", "Toronto Islands", "Distillery District", "Toronto Zoo", "High Park"],
    image: "/tours/toronto.jpg"
  },
  {
    id: "niagara-falls-experience",
    title: "Niagara Falls & Niagara-on-the-Lake Experience",
    duration: "Up to 8 hours",
    route: "GTA pickup • Niagara Region • GTA return",
    startingPrice: "$1,250",
    description: "Experience the power of Niagara Falls and the charm of Niagara-on-the-Lake in one private day trip. Your group chooses the stops while CTC provides comfortable round-trip transportation from the GTA.",
    highlights: ["Niagara Falls", "Niagara City Cruises", "Journey Behind the Falls", "Skylon Tower", "Niagara-on-the-Lake", "Niagara wineries"],
    image: "/tours/niagara.jpg"
  },
  {
    id: "muskoka-algonquin-escape",
    title: "Muskoka & Algonquin Scenic Escape",
    duration: "Custom full-day charter",
    route: "GTA pickup • selected region stops • GTA return",
    startingPrice: "$1,650",
    description: "Trade the city for lakes, forests, and classic Ontario scenery. Build a private day trip around Muskoka, Huntsville, or Algonquin Provincial Park with transportation sized for your group.",
    highlights: ["Muskoka", "Algonquin Provincial Park", "Muskoka Wharf", "Huntsville"],
    image: "/tours/muskoka.jpg"
  },
  {
    id: "ottawa-capital-tour",
    title: "Ottawa Capital Day Tour",
    duration: "Extended full-day charter",
    route: "GTA pickup • Ottawa • GTA return",
    startingPrice: "$2,400",
    description: "Visit Canada's capital with private round-trip group transportation from the GTA. Explore national landmarks, museums, markets, and waterfront scenery on a custom itinerary.",
    highlights: ["Parliament Hill", "Rideau Canal", "ByWard Market", "Canadian Museum of History"],
    image: "/tours/ottawa.jpg"
  },
  {
    id: "kingston-thousand-islands",
    title: "Kingston & Thousand Islands Discovery",
    duration: "Full-day charter",
    route: "GTA pickup • Kingston region • GTA return",
    startingPrice: "$1,700",
    description: "Combine Kingston's historic waterfront with the beauty of the Thousand Islands. This private charter gives your group the freedom to select its preferred attractions and travel together comfortably.",
    highlights: ["Thousand Islands", "Fort Henry", "Kingston Waterfront"],
    image: "/tours/kingston.jpg"
  },
  {
    id: "blue-mountain-getaway",
    title: "Blue Mountain & Collingwood Getaway",
    duration: "Full-day charter",
    route: "GTA pickup • Blue Mountain/Collingwood • GTA return",
    startingPrice: "$1,600",
    description: "Plan a refreshing group getaway to Blue Mountain and Collingwood. Enjoy private transportation for a day of village activities, scenic experiences, dining, or seasonal recreation.",
    highlights: ["Blue Mountain Village", "Scenic Caves Nature Adventures", "Collingwood waterfront", "Seasonal resort activities"],
    image: "/tours/bluemountain.jpg"
  },
  {
    id: "toronto-sports-events",
    title: "Toronto Sports & Event Transportation",
    duration: "Up to 8 hours",
    route: "GTA pickup/hotel • venue • return",
    startingPrice: "$1,300",
    description: "Keep your group together from pickup to the final whistle. CTC provides private event transportation with scheduled waiting time and return service for games, concerts, and major Toronto events.",
    highlights: ["BMO Field", "Rogers Centre", "Scotiabank Arena", "Other GTA venues by request"],
    image: "/tours/events.jpg"
  },
  {
    id: "prince-edward-county",
    title: "Prince Edward County & Sandbanks Escape",
    duration: "Full-day charter",
    route: "GTA pickup • Prince Edward County • GTA return",
    startingPrice: "$1,750",
    description: "Discover the beaches, rural scenery, galleries, and welcoming towns of Prince Edward County on a flexible private group day trip.",
    highlights: ["Sandbanks Provincial Park", "Picton", "Wellington", "Local galleries and shops"],
    image: "/tours/pec.jpg"
  },
  {
    id: "tobermory-bruce-peninsula",
    title: "Tobermory & Bruce Peninsula Adventure",
    duration: "Extended full-day charter",
    route: "GTA pickup • Bruce Peninsula • GTA return",
    startingPrice: "$2,200",
    description: "Travel to the clear waters, rugged shoreline, and harbour scenery of the Bruce Peninsula with private transportation for your group.",
    highlights: ["Tobermory Harbour", "Bruce Peninsula National Park", "The Grotto area", "Flowerpot Island cruise option"],
    image: "/tours/tobermory.jpg"
  },
  {
    id: "elora-gorge-fergus",
    title: "Elora Gorge & Fergus Heritage Tour",
    duration: "Up to 8 hours",
    route: "GTA pickup • Elora/Fergus • GTA return",
    startingPrice: "$1,250",
    description: "Pair dramatic Grand River scenery with the limestone architecture and small-town character of Elora and Fergus.",
    highlights: ["Elora Gorge Conservation Area", "Downtown Elora", "Fergus heritage district", "Templin Gardens"],
    image: "/tours/elora.jpg"
  },
  {
    id: "stratford-theatre",
    title: "Stratford Theatre & Heritage Day Trip",
    duration: "Up to 10 hours",
    route: "GTA pickup • Stratford • GTA return",
    startingPrice: "$1,450",
    description: "Enjoy Stratford's theatre culture, gardens, restaurants, and walkable heritage district with convenient private group transportation.",
    highlights: ["Stratford Festival theatres", "Avon River", "Downtown Stratford", "Shakespearean Gardens"],
    image: "/tours/stratford.jpg"
  },
  {
    id: "st-jacobs-market",
    title: "St. Jacobs Market & Mennonite Country Tour",
    duration: "Up to 8 hours",
    route: "GTA pickup • St. Jacobs • GTA return",
    startingPrice: "$1,200",
    description: "Plan an easy group outing to the St. Jacobs market district, village shops, and Waterloo Region countryside.",
    highlights: ["St. Jacobs Farmers' Market", "Village of St. Jacobs", "Local shops and bakeries", "Waterloo Region countryside"],
    image: "/tours/stjacobs.jpg"
  },
  {
    id: "hamilton-waterfalls",
    title: "Hamilton Waterfalls & Royal Botanical Gardens Tour",
    duration: "Up to 8 hours",
    route: "GTA pickup • Hamilton/Burlington • GTA return",
    startingPrice: "$1,200",
    description: "Create a nature-focused day around Hamilton's escarpment scenery and the gardens and trails of Burlington and Hamilton.",
    highlights: ["Royal Botanical Gardens", "Webster's Falls area", "Dundas Valley", "Hamilton waterfront"],
    image: "/tours/hamilton.jpg"
  },
  {
    id: "peterborough-kawarthas",
    title: "Peterborough & Kawarthas Discovery",
    duration: "Full-day charter",
    route: "GTA pickup • Peterborough/Kawarthas • GTA return",
    startingPrice: "$1,450",
    description: "Explore lift-lock heritage, lakeside communities, trails, and local food stops across Peterborough and the Kawarthas.",
    highlights: ["Peterborough Lift Lock", "Canadian Canoe Museum", "Lakefield", "Kawarthas food and bakery stops"],
    image: "/tours/peterborough.jpg"
  },
  {
    id: "wasaga-beach",
    title: "Wasaga Beach & Georgian Bay Day Trip",
    duration: "Up to 10 hours",
    route: "GTA pickup • Wasaga Beach • GTA return",
    startingPrice: "$1,500",
    description: "Make your group beach day simple with private round-trip transportation to Wasaga Beach and optional Georgian Bay stops.",
    highlights: ["Wasaga Beach Provincial Park", "Beachfront areas", "Nancy Island Historic Site", "Optional Collingwood stop"],
    image: "/tours/wasaga.jpg"
  },
  {
    id: "african-lion-safari",
    title: "African Lion Safari Group Adventure",
    duration: "Up to 8 hours",
    route: "GTA pickup • Cambridge • GTA return",
    startingPrice: "$1,200",
    description: "Give families, schools, or community groups a full day of wildlife experiences with comfortable round-trip transportation to African Lion Safari.",
    highlights: ["Safari Tour Bus", "Game reserves", "Scenic railway", "Presentations and family attractions"],
    image: "/tours/safari.jpg"
  },
  {
    id: "canadas-wonderland",
    title: "Canada's Wonderland Group Transportation",
    duration: "Up to 10 hours",
    route: "GTA pickup • Vaughan • GTA return",
    startingPrice: "$1,250",
    description: "Keep school, youth, family, and corporate groups together with scheduled transportation to and from Canada's Wonderland.",
    highlights: ["Canada's Wonderland", "Seasonal festivals", "Group entrance coordination", "Scheduled return pickup"],
    image: "/tours/wonderland.jpg"
  }
];

export const MULTI_DAY_TOURS = [
  {
    id: "eastern-canada-express",
    title: "Eastern Canada Express",
    duration: "3 Days / 2 Nights",
    route: "Toronto • Thousand Islands • Ottawa • Montréal • Québec City",
    startingPrice: "Custom Quote",
    description: "A compact highlights tour for groups that want to experience the Thousand Islands, Canada’s capital, Montréal, and Québec City in three days. This package ends in Québec City.",
    highlights: ["Thousand Islands cruise option", "Parliament Hill & ByWard Market", "Old Montréal & Old Port", "Old Québec & Dufferin Terrace"],
    image: "/tours/eastern-express.jpg",
    category: "Eastern Canada"
  },
  {
    id: "eastern-canada-grand-circuit",
    title: "Eastern Canada Grand Circuit",
    duration: "4 Days / 3 Nights",
    route: "Toronto • Thousand Islands • Ottawa • Montréal • Québec City • Toronto",
    startingPrice: "Custom Quote",
    description: "A practical four-day round trip covering the major highlights of Eastern Ontario and Québec. This is the minimum recommended duration for completing the full route and returning to Toronto.",
    highlights: ["Parliament Hill surroundings", "Montréal downtown & Old Port", "Québec City Place-Royale", "Direct return journey to Toronto"],
    image: "/tours/eastern-circuit.jpg",
    category: "Eastern Canada"
  },
  {
    id: "eastern-canada-signature",
    title: "Eastern Canada Signature Tour",
    duration: "5 Days / 4 Nights",
    route: "Toronto • Thousand Islands • Ottawa • Montréal • Québec City • Toronto",
    startingPrice: "Custom Quote",
    description: "The strongest all-around package for leisure, school, community, and international groups. Five days provide a better balance of travel time, city sightseeing, and rest.",
    highlights: ["2 Nights in Montréal", "Extended Mount Royal & Old Montréal visits", "Montmorency Falls option in Québec", "Comfortable return to GTA"],
    image: "/tours/eastern-signature.jpg",
    category: "Eastern Canada"
  }
];

export const FLORIDA_TOURS = [
  {
    id: "orlando-essential",
    title: "Orlando Essential",
    duration: "7 Days / 6 Nights",
    route: "Toronto • Orlando • Theme parks",
    startingPrice: "Custom Quote",
    description: "Entry package for groups prioritizing Orlando. Choose between a fast direct-relay driving operation or a comfortable midpoint-hotel overnight journey.",
    highlights: ["2 Full Theme Park Days", "Kennedy Space Center option", "Flexible transportation strategy"],
    image: "/tours/florida-essential.jpg",
    category: "Florida"
  },
  {
    id: "orlando-family-explorer",
    title: "Orlando Family Explorer",
    duration: "8 Days / 7 Nights",
    route: "Orlando • Kennedy Space Center • Cocoa Beach",
    startingPrice: "Custom Quote",
    description: "Recommended minimum for Orlando plus Kennedy Space Center. Direct-relay service provides more recovery time than the midpoint plan.",
    highlights: ["Dedicated Space Coast Day", "Cocoa Beach time", "2 Full Orlando Attraction Days"],
    image: "/tours/florida-explorer.jpg",
    category: "Florida"
  },
  {
    id: "orlando-gulf-coast-discovery",
    title: "Orlando & Gulf Coast Discovery",
    duration: "9 Days / 8 Nights",
    route: "Orlando • Kennedy Space Center • Tampa Bay",
    startingPrice: "Custom Quote",
    description: "Combines Central Florida with a Gulf Coast day. A strong all-around package for groups wanting variety without moving hotels within Florida.",
    highlights: ["Tampa Bay waterfront day trip", "Kennedy Space Center", "Central Florida Theme Parks"],
    image: "/tours/florida-discovery.jpg",
    category: "Florida"
  },
  {
    id: "florida-signature-tour",
    title: "Florida Signature Tour",
    duration: "10 Days / 9 Nights",
    route: "Orlando • Kennedy Space Center • Tampa Bay • Miami option",
    startingPrice: "Custom Quote",
    description: "Premium program with the most flexibility. Includes an optional Miami extension for groups willing to expand their itinerary.",
    highlights: ["Optional Miami extension", "Gulf Coast attraction", "Extended Orlando leisure time"],
    image: "/tours/florida-signature.jpg",
    category: "Florida"
  }
];

export const PRICING_GUIDE_DATA = {
  title: "Charter Bus Rental Toronto Prices & Cost in Canada",
  subtitle: "Everything you need to know about charter bus costs, pricing factors, vehicle comparisons, and seating capacities in Canadian Dollars (CAD).",
  averageRates: [
    {
      vehicle: "56 Passenger Luxury Coach Bus",
      hourly: "$165 - $225 / hr",
      minHours: "4 - 5 hrs minimum",
      daily: "$1,350 - $1,850 / day",
      perKm: "$3.50 - $4.50 / km",
      ideal: "Large corporate groups, conventions, weddings, athletic teams, multi-day tours",
      luggage: "56 Large Bags (Undercarriage) + 56 Overhead Bins",
      restroom: "Yes (Clean Onboard Lavatory)"
    },
    {
      vehicle: "24 - 36 Passenger Mini Coach Bus",
      hourly: "$135 - $175 / hr",
      minHours: "4 hrs minimum",
      daily: "$1,050 - $1,450 / day",
      perKm: "$2.90 - $3.75 / km",
      ideal: "Medium corporate offsites, wedding guest shuttles, Niagara wine tours",
      luggage: "25 - 30 Bags (Dedicated Rear Cargo)",
      restroom: "No (Stops on request)"
    },
    {
      vehicle: "14 Passenger High-Roof Van",
      hourly: "$110 - $145 / hr",
      minHours: "3 - 4 hrs minimum",
      daily: "$750 - $1,050 / day",
      perKm: "$2.20 - $2.80 / km",
      ideal: "Pearson Airport YYZ transfers, executive VIP dinners, small family groups",
      luggage: "14 Large Suitcases",
      restroom: "No"
    },
    {
      vehicle: "48 - 56 Passenger School Bus",
      hourly: "$95 - $135 / hr",
      minHours: "3 - 4 hrs minimum",
      daily: "$650 - $950 / day",
      perKm: "$2.40 - $3.00 / km",
      ideal: "K-12 Field trips, summer camps, budget youth sports tournaments",
      luggage: "Cabin / In-seat storage",
      restroom: "No"
    }
  ],
  costFactors: [
    {
      factor: "Trip Duration & Distance",
      desc: "Local trips within Toronto and the GTA are usually billed by the hour (with a standard 4 to 5 hour minimum). Long-distance or multi-day charters (e.g. Toronto to Montreal, Ottawa, or Algonquin) are billed by total mileage/kilometres or a fixed flat daily rate."
    },
    {
      factor: "Vehicle Type & Luxury Amenities",
      desc: "A full-sized 56-passenger luxury motorcoach with an onboard restroom, Wi-Fi, and underfloor luggage carries a higher hourly rate than a 32-passenger minibus or standard yellow school bus. However, on a per-seat basis, the 56-passenger coach often offers the lowest cost per person."
    },
    {
      factor: "Seasonality & Time of Year",
      desc: "Peak demand in Ontario runs from May through October (wedding season, school field trips, and summer tourism). Booking 2 to 6 months in advance locks in preferred rates and guarantees vehicle availability."
    },
    {
      factor: "Driver Regulations (Hours of Service)",
      desc: "Under Canadian Federal and Ontario Ministry of Transportation (MTO) regulations, a commercial coach driver can drive a maximum of 13 hours per day (14 hours on duty) followed by 8 consecutive hours of mandatory rest. Trips requiring longer travel days require a relief driver or scheduled overnight stop."
    },
    {
      factor: "Driver Accommodations & Meals",
      desc: "For overnight charters (e.g. multi-day trips to Quebec, New York, or Florida), the chartering group is responsible for providing the driver with a private hotel room and a standard daily meal per diem."
    },
    {
      factor: "Tolls, Parking & 13% Ontario HST",
      desc: "Highway 407 ETR toll charges, municipal parking permits at venues (such as downtown Toronto or Niagara Parks), and 13% Ontario Harmonized Sales Tax (HST) are detailed clearly on our quotes so there are never hidden surprises."
    }
  ],
  comparisonCoachVsMini: [
    { feature: "Passenger Seating", coach: "Up to 56 adult passengers", mini: "24 to 36 passengers" },
    { feature: "Onboard Restroom", coach: "Standard (Fully equipped lavatory)", mini: "Not available on most minibuses" },
    { feature: "Luggage Space", coach: "Massive underfloor cargo bays (56+ large suitcases)", mini: "Rear cargo area (25-30 bags)" },
    { feature: "Maneuverability", coach: "Best for highways & designated bus zones", mini: "Highly agile for downtown Toronto hotel loops & wineries" },
    { feature: "Wi-Fi & 110V Outlets", coach: "Standard at every seat row", mini: "Available upon request" },
    { feature: "Ideal Trip Type", coach: "Long distance, interstate, conventions, athletics", mini: "Local GTA transfers, weddings, department retreats" }
  ],
  capacityGuide: [
    { type: "56 Passenger Coach Bus", adultCap: 56, childCap: 56, bags: 56, bestUse: "Conferences, weddings, sports teams, interstate tours" },
    { type: "36 Passenger Midicoach", adultCap: 36, childCap: 36, bags: 30, bestUse: "Corporate department offsites, Niagara day tours" },
    { type: "24 Passenger Minibus", adultCap: 24, childCap: 24, bags: 20, bestUse: "Wedding party shuttles, golf trips, private celebrations" },
    { type: "14 Passenger Sprinter Van", adultCap: 14, childCap: 14, bags: 14, bestUse: "Pearson Airport VIP shuttles, executive dinners" },
    { type: "School Bus", adultCap: 48, childCap: 56, bags: "Cabin only", bestUse: "School field trips, day camps, local tournament shuttles" }
  ],
  checklistCompanies: [
    { title: "Valid Ontario CVOR Safety Rating", desc: "Ensure the operator has an active Commercial Vehicle Operator's Registration (CVOR) with a Satisfactory or Excellent safety rating from the Ontario Ministry of Transportation." },
    { title: "$10M+ Commercial Passenger Liability Insurance", desc: "Legitimate Canadian coach companies carry a minimum of $10,000,000 in commercial passenger liability insurance. Always request a Certificate of Insurance (COI)." },
    { title: "Direct Fleet Operator vs Unvetted Broker", desc: "Booking directly with an operator like Tours Coach Charters gives you direct communication with dispatch, transparent pricing, and guaranteed vehicle assignment without third-party markups." },
    { title: "24/7 Live Canadian Dispatch", desc: "Flight delays and traffic changes happen. A reputable company maintains 24/7 live dispatch support to adjust pickups and support your group in real time." },
    { title: "Modern, Well-Maintained Vehicles", desc: "Ask about the age and amenities of the fleet. Premium operators run late-model coaches equipped with functional A/C, heating, clean restrooms, and Wi-Fi." },
    { title: "Transparent, All-Inclusive Written Quotes", desc: "Look for comprehensive quotes that itemize the driver, fuel, mileage, and taxes so you avoid surprise fees at the end of your trip." }
  ]
};
