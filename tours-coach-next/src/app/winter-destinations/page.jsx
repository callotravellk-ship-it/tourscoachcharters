import React from 'react';
import Link from 'next/link';
// We must import the QuoteForm directly or through a client component if needed. 
// Note: Since this file contains metadata, we will make a wrapper or keep it simple.
import WinterDestinationsClient from './WinterClient'; // We'll put the interactive UI here

// 1. DYNAMIC SERVER-SIDE METADATA FOR GOOGLE SEO
export const metadata = {
  title: "Winter & Ski Group Bus Charters Canada | Tours Coach Charters",
  description: "Safe, winter-ready group bus charters to Blue Mountain, Mont-Tremblant, Banff, and Niagara Lights. Heated coaches with luggage bays for skis and boards.",
  alternates: {
    canonical: "https://www.tourscoachcharter.com/winter-destinations",
  },
  openGraph: {
    title: "Winter & Ski Group Bus Charters Canada | Tours Coach Charters",
    description: "Safe, winter-ready group bus charters to Blue Mountain, Mont-Tremblant, Banff, and Niagara Lights. Heated coaches with luggage bays for skis and boards.",
    url: "https://www.tourscoachcharter.com/winter-destinations",
    siteName: 'Tours Coach Charters',
    images: [
      {
        url: 'https://www.tourscoachcharter.com/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};

export default function WinterDestinationsPage() {
  return <WinterDestinationsClient />;
}