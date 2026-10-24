import './globals.css';
import Script from 'next/script';
import AppClientWrapper from '../components/AppClientWrapper';

export const metadata = {
  metadataBase: new URL('https://www.tourscoachcharter.com'),
  title: {
    default: "Charter Bus Rental Toronto & Canada | Tours Coach Charters",
    template: "%s | Tours Coach Charters"
  },
  description: "Canada's premier charter bus rental & chauffeured coach services. 56-passenger luxury coaches, minibus rental in Toronto, and passenger vans across the GTA & Ontario. 24/7 Canadian dispatch.",
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
    description: "Canada's #1 charter bus rental & coach bus company. 56-passenger luxury coaches, minibus rental in Toronto, and passenger vans across the GTA & Ontario. Fast, all-inclusive CAD quotes.",
    url: "https://www.tourscoachcharter.com",
    siteName: "Tours Coach Charters",
    images: [
      {
        url: "https://www.tourscoachcharter.com/home-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Charter Bus Rental in Canada",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Canada Tours Coach LTD",
    "alternateName": "Tours Coach Charters",
    "url": "https://www.tourscoachcharter.com",
    "logo": "https://www.tourscoachcharter.com/logo.png",
    "image": "https://www.tourscoachcharter.com/home-hero.jpg",
    "description": "Canada's Premier Charter Bus Rentals. Providing reliable group transportation, corporate travel, wedding shuttles, school trips, and private charters across the Greater Toronto Area and nationwide.",
    "telephone": "(416) 269-9555",
    "email": "info@tourscoach.ca",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "480",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "Country", "name": "Canada" },
      { "@type": "AdministrativeArea", "name": "Ontario" },
      { "@type": "City", "name": "Toronto" },
      { "@type": "City", "name": "Mississauga" },
      { "@type": "City", "name": "Brampton" },
      { "@type": "City", "name": "Scarborough" },
      { "@type": "City", "name": "Vaughan" },
      { "@type": "City", "name": "Markham" },
      { "@type": "City", "name": "Pickering" },
      { "@type": "City", "name": "Hamilton" },
      { "@type": "City", "name": "Ottawa" },
      { "@type": "City", "name": "Niagara Falls" }
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "56 Passenger Luxury Coach Bus Rental",
          "description": "Full-size highway motorcoach charter with clean onboard restroom, Wi-Fi, and massive luggage bays."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Minibus Rental Toronto",
          "description": "24 to 36 passenger executive mini coach rentals for corporate offsites, wedding shuttles, and wine tours."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Event Bus Rental Toronto",
          "description": "Executive transportation for conferences at MTCC, Enercare, and corporate commuter shuttle services in the GTA."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Shuttle Bus Rental Toronto & Ontario",
          "description": "Continuous guest loops and safe late-night return transportation for Ontario weddings."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sports Team Bus Rental Ontario",
          "description": "Spacious motorcoach charters with massive undercarriage storage for hockey bags and athletic tournaments."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private Bus Tours Toronto & Niagara Falls",
          "description": "Custom sightseeing coach charters to Niagara Falls, Toronto landmarks, and scenic Ontario destinations."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Combined Google Analytics & Google Ads */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-18421379566" 
          strategy="afterInteractive" 
        />
        <Script 
          id="google-tags-init" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-42VZGH60KM');
              gtag('config', 'AW-18421379566');
              gtag('config', 'AW-18421379566/hkc2COWC-fAcEO7j_89E', {
                'phone_conversion_number': '(416) 269-9555'
              });
            `
          }}
        />

        {/* Meta Pixel */}
        <Script 
          id="meta-pixel" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              
              fbq('init', '968344975840291');
              fbq('track', 'PageView');
            `
          }}
        />

        {/* Microsoft Clarity */}
        <Script 
          id="microsoft-clarity" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "msfluq1gc6");
            `
          }}
        />

        {/* Google Maps JavaScript API with Places Library */}
        <Script 
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ0nthZfylJV4cO3hWgxVnKiOHQkzERM8&libraries=places" 
          strategy="afterInteractive" 
          data-gmaps-places="true"
        />
      </head>
      <body>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=968344975840291&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <AppClientWrapper>
          {children}
        </AppClientWrapper>
      </body>
    </html>
  );
}
