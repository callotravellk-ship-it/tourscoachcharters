import HomeClient from './HomeClient';

// THIS HANDLES ALL THE INVISIBLE SEO FOR GOOGLE
export const metadata = {
  title: "Trusted Coach Charters & Chauffeured Services in Canada | Tours Coach Charters",
  description: "Canada's premier private bus charters and group transportation services with professional drivers included. Serving the Greater Toronto Area and beyond.",
  keywords: [
    'Charter bus with driver',
    'Chauffeured coach bus',
    'Private bus charter',
    'Passenger van with driver',
    'Chauffeured Sprinter van',
    'Driver inclusive mini coach',
    'Group transportation service',
    'Private shuttle service with driver'
  ],
  alternates: {
    canonical: "https://www.tourscoachcharter.com", // This forces Google to index the www. version
  },
  openGraph: {
    title: "Trusted Coach Charters & Chauffeured Services in Canada",
    description: "Canada's premier private bus charters and group transportation services with professional drivers included. Serving the Greater Toronto Area and beyond.",
    url: "https://www.tourscoachcharter.com",
    siteName: "Tours Coach Charters",
    images: [
      {
        url: "https://www.tourscoachcharter.com/home-hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

// THIS LOADS YOUR ACTUAL VISUAL HOMEPAGE
export default function Page() {
  return <HomeClient />;
}