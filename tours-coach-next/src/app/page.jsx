import HomeClient from './HomeClient';

// HIGHEST-INTENT COMMERCIAL SEO METADATA TO RANK #1 IN GOOGLE CANADA
export const metadata = {
  title: "Charter Bus Rental Toronto & Canada | Tours Coach Charters",
  description: "Canada's #1 charter bus rental & coach bus company. 56-passenger luxury coaches, minibus rental in Toronto, and passenger vans across the GTA & Ontario. Fast, all-inclusive CAD quotes.",
  keywords: [
    'charter bus rental toronto',
    'coach bus rental canada',
    'charter bus rental canada',
    'minibus rental toronto',
    'luxury coach charter ontario',
    'rent a coach bus toronto',
    '56 passenger coach bus rental',
    'passenger van rental GTA',
    'corporate event bus rental toronto',
    'executive coach charter canada',
    'corporate shuttle services GTA',
    'wedding shuttle bus rental toronto',
    'wedding transportation rentals ontario',
    'guest shuttle for wedding GTA',
    'school bus rental toronto',
    'sports team bus rental ontario',
    'affordable school field trip bus canada',
    'private bus tours toronto',
    'niagara falls charter bus rental',
    'sightseeing coach bus toronto',
    'how much does it cost to rent a charter bus in canada',
    'charter bus rental toronto prices',
    'coach bus vs minibus rental for events',
    'best charter bus companies in toronto',
    'how many people fit in a coach bus'
  ],
  alternates: {
    canonical: "https://www.tourscoachcharter.com",
  },
  openGraph: {
    title: "Charter Bus Rental Toronto & Across Canada | Tours Coach Charters",
    description: "Canada's #1 charter bus rental & coach bus company. 56-passenger luxury coaches, minibus rental in Toronto, and passenger vans across the GTA & Ontario. Instant CAD quotes.",
    url: "https://www.tourscoachcharter.com",
    siteName: "Tours Coach Charters",
    images: [
      {
        url: "https://www.tourscoachcharter.com/home-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Tours Coach Charters Luxury Coach Bus in Canada",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charter Bus Rental Toronto & Canada | Tours Coach Charters",
    description: "Top-rated 56-passenger coach buses, minibuses in Toronto, and passenger vans in the GTA. Instant CAD quotes.",
    images: ["https://www.tourscoachcharter.com/home-hero.jpg"],
  },
};

export default function Page() {
  return <HomeClient />;
}
