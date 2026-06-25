import HomeClient from './HomeClient';

// THIS HANDLES ALL THE INVISIBLE SEO FOR GOOGLE
export const metadata = {
  title: "Trusted Coach Charters for Group Travel in Canada | Tours Coach Charters",
  description: "Canada's Premier Charter Bus Rentals. Greater Toronto Area and beyond.",
  alternates: {
    canonical: "https://www.tourscoachcharter.com", // This forces Google to index the www. version
  },
  openGraph: {
    title: "Trusted Coach Charters for Group Travel in Canada",
    description: "Canada's Premier Charter Bus Rentals. Greater Toronto Area and beyond.",
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