"use client";
import './globals.css';
import { QuoteProvider, useQuote } from '../context/QuoteContext';
import { Header, Footer, ChatWidget, QuoteForm } from '../components/Shared';

function AppContent({ children }) {
  const { isQuoteModalOpen, setIsQuoteModalOpen } = useQuote();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-red-600 selection:text-white relative">
      <Header />
      
      <main className="flex-grow w-full overflow-x-hidden pt-20">
        {children}
      </main>
      
      <Footer />
      <ChatWidget />
      
      {/* This makes sure the Quote Form can pop up over any page! */}
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

export default function RootLayout({ children }) {
  // DEFINE THE SCHEMA OBJECT
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Canada Tours Coach LTD",
    "alternateName": "Tours Coach Charters",
    "url": "https://www.tourscoachcharter.com",
    "logo": "https://www.tourscoachcharter.com/logo.png",
    "image": "https://www.tourscoachcharter.com/home-hero.jpg",
    "description": "Canada's Premier Charter Bus Rentals. Providing reliable group transportation, corporate travel, and private charters across the Greater Toronto Area and nationwide.",
    "telephone": "(416) 269-9555",
    "email": "info@tourscoach.ca",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Canada"
      }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Bus Charters"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Transportation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sports Team Travel"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
         <title>Charter Bus Rentals Canada | Tours Coach Charters</title>
         <meta name="description" content="Canada's Premier Charter Bus Rentals. From corporate retreats to school trips, we provide reliable transportation from coast to coast." />
         
         {/* INJECT THE SCHEMA INTO THE HEAD */}
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />
      </head>
      <body>
        <QuoteProvider>
          <AppContent>{children}</AppContent>
        </QuoteProvider>
      </body>
    </html>
  );
}