import TorontoClient from './TorontoClient';

export const metadata = {
  title: "Charter Bus Rental Toronto | Coach Bus & Minibus Charters GTA",
  description: "Premier charter bus rental in Toronto & the GTA. 56 passenger luxury coaches, 24-36 minibuses, and passenger vans with professional drivers. Get a fast CAD quote.",
  keywords: [
    'charter bus rental toronto',
    'rent a coach bus toronto',
    'minibus rental toronto',
    '56 passenger coach bus rental',
    'passenger van rental GTA',
    'luxury coach charter ontario',
    'corporate event bus rental toronto',
    'wedding shuttle bus rental toronto',
    'school bus rental toronto',
    'sightseeing coach bus toronto',
    'niagara falls charter bus rental'
  ],
  alternates: {
    canonical: "https://www.tourscoachcharter.com/charter-bus-rental-toronto",
  },
  openGraph: {
    title: "Charter Bus Rental Toronto | Coach Bus & Minibus Charters GTA",
    description: "Canada's top-rated Toronto charter bus rental service. 56-passenger coach buses, executive minibuses, and passenger vans with professional drivers.",
    url: "https://www.tourscoachcharter.com/charter-bus-rental-toronto",
    siteName: "Tours Coach Charters",
    images: [
      {
        url: "https://www.tourscoachcharter.com/toronto-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Charter Bus Rental in Toronto",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

export default function TorontoPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tours Coach Charters Toronto",
    "image": "https://www.tourscoachcharter.com/toronto-banner.jpg",
    "telephone": "(416) 269-9555",
    "email": "info@tourscoachcharter.com",
    "url": "https://www.tourscoachcharter.com/charter-bus-rental-toronto",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1315 Pickering Parkway, Suite 300",
      "addressLocality": "Pickering",
      "addressRegion": "ON",
      "postalCode": "L1V 7G5",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.8354,
      "longitude": -79.0890
    },
    "areaServed": [
      "Toronto", "Scarborough", "North York", "Etobicoke", 
      "Mississauga", "Brampton", "Vaughan", "Markham", 
      "Pickering", "Ajax", "Oshawa", "Hamilton"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "480"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <TorontoClient />
    </>
  );
}
