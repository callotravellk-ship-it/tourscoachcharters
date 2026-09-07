export const AFFILIATE_TOURS = [
  // BRITISH COLUMBIA
  {
    id: "affil-bc-1",
    province: "British Columbia",
    city: "Vancouver",
    title: "Whistler & Shannon Falls Day Tour",
    duration: "10 Hours",
    description: "Travel the Sea-to-Sky Highway with stops at Shannon Falls and ample free time in Whistler Village.",
    startingPrice: "From $1,450"
  },
  {
    id: "affil-bc-2",
    province: "British Columbia",
    city: "Victoria",
    title: "Victoria & Butchart Gardens Express",
    duration: "12 Hours",
    description: "Includes BC Ferries transit, Butchart Gardens admission, and downtown Victoria exploration.",
    startingPrice: "From $1,800"
  },
  
  // ALBERTA
  {
    id: "affil-ab-1",
    province: "Alberta",
    city: "Calgary",
    title: "Banff & Lake Louise Explorer",
    duration: "10 Hours",
    description: "Private charter from Calgary to the heart of the Rockies, featuring Lake Louise and the Banff Gondola.",
    startingPrice: "From $1,550"
  },

  // NOVA SCOTIA
  {
    id: "affil-ns-1",
    province: "Nova Scotia",
    city: "Halifax",
    title: "Peggy's Cove & Coastal Heritage",
    duration: "8 Hours",
    description: "Scenic drive to Canada's most famous lighthouse, paired with Titanic history in Halifax.",
    startingPrice: "From $1,250"
  }
  // You can continue pasting the rest of the 166 tours into this array following this exact format.
];

export const PROVINCES = [...new Set(AFFILIATE_TOURS.map(tour => tour.province))].sort();