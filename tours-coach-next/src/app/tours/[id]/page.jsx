import { notFound } from 'next/navigation';
import TourDetailClient from './TourDetailClient';
import { FEATURED_TOURS, MULTI_DAY_TOURS, FLORIDA_TOURS, SEO_DATA } from '../../../lib/data';

// Combine all tour categories so every single tour route is recognized
const ALL_TOURS = [
  ...FEATURED_TOURS,
  ...(MULTI_DAY_TOURS || []),
  ...(FLORIDA_TOURS || [])
];

export async function generateStaticParams() {
  return ALL_TOURS.map((tour) => ({
    id: tour.id,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const tour = ALL_TOURS.find((t) => t.id === resolvedParams.id);
  const seoInfo = SEO_DATA ? SEO_DATA[resolvedParams.id] : null;

  if (!tour) return { title: 'Tour Not Found | Tours Coach Charters' };

  return {
    title: seoInfo ? seoInfo.title : `${tour.title} | Tours Coach Charters`,
    description: seoInfo ? seoInfo.desc : tour.description,
    alternates: {
      canonical: `https://www.tourscoachcharter.com/tours/${resolvedParams.id}`,
    },
    openGraph: {
      title: `${tour.title} | Tours Coach Charters`,
      description: tour.description,
      url: `https://www.tourscoachcharter.com/tours/${resolvedParams.id}`,
      siteName: 'Tours Coach Charters',
      images: [
        {
          url: tour.image?.startsWith('http') ? tour.image : `https://www.tourscoachcharter.com${tour.image || '/service-tours.jpg'}`,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
  };
}

export default async function TourDetailPage({ params }) {
  const resolvedParams = await params;
  const tour = ALL_TOURS.find((t) => t.id === resolvedParams.id);

  if (!tour) {
    notFound();
  }

  // Get 3 related tours (excluding current tour)
  const relatedTours = ALL_TOURS
    .filter((t) => t.id !== tour.id && (tour.category ? t.category === tour.category : !t.category))
    .slice(0, 3);

  // Schema.org structured data for TouristTrip / Service
  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tour.title,
    "description": tour.description,
    "touristType": ["Group", "Family", "Corporate", "Students"],
    "provider": {
      "@type": "TravelAgency",
      "name": "Tours Coach Charters (Canada Tours Coach LTD)",
      "url": "https://www.tourscoachcharter.com",
      "telephone": "(416) 269-9555"
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": (tour.highlights || []).map((h, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": h
      }))
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "CAD",
      "price": tour.startingPrice?.replace(/[^0-9]/g, '') || "1200",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }}
      />
      <TourDetailClient tour={tour} relatedTours={relatedTours} />
    </>
  );
}
