import PricingClient from './PricingClient';

export const metadata = {
  title: "Charter Bus Rental Toronto Prices & Cost in Canada | Tours Coach Charters",
  description: "How much does it cost to rent a charter bus in Canada? 2026 pricing guide for Toronto & Canada. Compare 56-passenger coach, minibus, and van rates in CAD with no hidden fees.",
  keywords: [
    'how much does it cost to rent a charter bus in canada',
    'charter bus rental toronto prices',
    'coach bus vs minibus rental for events',
    'best charter bus companies in toronto',
    'how many people fit in a coach bus',
    'charter bus rental toronto',
    'coach bus rental canada',
    '56 passenger coach bus rental',
    'minibus rental toronto'
  ],
  alternates: {
    canonical: "https://www.tourscoachcharter.com/pricing",
  },
  openGraph: {
    title: "Charter Bus Rental Toronto Prices & Cost in Canada (2026 Guide)",
    description: "Average hourly, daily, and per-km charter bus rental prices across Toronto, Ontario, and Canada. 56-passenger coaches, minibuses, and passenger vans.",
    url: "https://www.tourscoachcharter.com/pricing",
    siteName: "Tours Coach Charters",
    images: [
      {
        url: "https://www.tourscoachcharter.com/fleet-luxury.jpg",
        width: 1200,
        height: 630,
        alt: "Charter Bus Rental Pricing in Canada",
      },
    ],
    locale: "en_CA",
    type: "article",
  },
};

export default function PricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to rent a charter bus in Canada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Renting a charter bus in Canada typically costs between $140 and $225 CAD per hour, with a 4 to 5 hour minimum. Full-day rentals for a 56-passenger luxury coach range from $1,350 to $1,850 CAD, while a 24-36 passenger minibus ranges from $1,050 to $1,450 CAD per day."
        }
      },
      {
        "@type": "Question",
        "name": "What are charter bus rental Toronto prices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Toronto and the GTA, a 56-passenger luxury coach bus costs approximately $175-$225 CAD/hr, a 24-36 passenger minibus costs $140-$175 CAD/hr, a 14-passenger van costs $110-$145 CAD/hr, and a 48-56 passenger school bus costs $105-$135 CAD/hr."
        }
      },
      {
        "@type": "Question",
        "name": "Coach bus vs minibus rental for events: Which should I choose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose a 56-passenger coach bus for groups over 35 people, long-distance highway trips, heavy luggage needs, or when an onboard restroom is mandatory. Choose a 24-36 passenger minibus for local city shuttles, wedding guest loops, and tight venue navigation."
        }
      },
      {
        "@type": "Question",
        "name": "How many people fit in a coach bus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard full-size highway coach bus accommodates up to 56 adult passengers in high-back reclining seats. Mini coaches seat 24 to 36 passengers, high-roof vans seat up to 14, and school buses seat 48 adults or up to 56 children."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best charter bus companies in Toronto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best charter bus companies in Toronto operate their own late-model fleet, maintain an active Ontario CVOR safety certification with the Ministry of Transportation, carry at least $10,000,000 in commercial liability insurance, provide 24/7 Canadian live dispatch, and offer transparent all-inclusive CAD written quotes."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PricingClient />
    </>
  );
}
