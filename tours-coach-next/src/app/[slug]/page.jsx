import { notFound } from 'next/navigation';
import { DESTINATION_DATA, FLEET_DATA, SEO_DATA } from '../../lib/data';
import { AboutUs, ContactUs, DestinationTemplate, FleetTemplate } from '../../components/Templates';

// 1. DYNAMIC SERVER-SIDE METADATA FOR GOOGLE SEO
export async function generateMetadata({ params }) {
  // NEW: We must await params in Next.js 15+
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const seo = SEO_DATA[slug];
  
  if (!seo) return { title: 'Not Found | Tours Coach Charters' };
  
  return {
    title: seo.title,
    description: seo.desc,
    // FORCE GOOGLE TO INDEX WWW VERSION VIA CANONICAL
    alternates: {
      canonical: `https://www.tourscoachcharter.com/${slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.desc,
      url: `https://www.tourscoachcharter.com/${slug}`, // Added www.
      siteName: 'Tours Coach Charters',
      images: [
        {
          url: 'https://www.tourscoachcharter.com/logo.png', // Added www.
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    },
  };
}

// 2. PAGE RENDERER - FINDS THE RIGHT TEMPLATE BASED ON THE URL
export default async function DynamicPage({ params }) {
  // NEW: We must await params here too, and make the function async
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (slug === 'about') return <AboutUs />;
  if (slug === 'contact') return <ContactUs />;
  
  if (DESTINATION_DATA[slug]) {
    return <DestinationTemplate data={DESTINATION_DATA[slug]} />;
  }
  
  if (FLEET_DATA[slug]) {
    return <FleetTemplate data={FLEET_DATA[slug]} />;
  }

  // If someone types a random URL that doesn't exist, Next.js throws a 404 page
  notFound();
}