import { notFound } from 'next/navigation';
import { DESTINATION_DATA, FLEET_DATA, SEO_DATA } from '../../lib/data';
import { AboutUs, ContactUs, FifaPage, GenericPage, DestinationTemplate, FleetTemplate } from '../../components/Templates';

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
    openGraph: {
      title: seo.title,
      description: seo.desc,
      url: `https://tourscoachcharter.com/${slug}`,
      siteName: 'Tours Coach Charters',
      images: [
        {
          url: 'https://tourscoachcharter.com/logo.png',
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
  if (slug === 'fifa-world-cup-2026-charters') return <FifaPage />;
  if (slug === 'winter-destinations') return <GenericPage title="Winter Destinations" subtitle="Dedicated charter services to Whistler, Blue Mountain, and Banff." bgImage="/winter-banner.jpg" />;
  
  if (DESTINATION_DATA[slug]) {
    return <DestinationTemplate data={DESTINATION_DATA[slug]} />;
  }
  
  if (FLEET_DATA[slug]) {
    return <FleetTemplate data={FLEET_DATA[slug]} />;
  }

  // If someone types a random URL that doesn't exist, Next.js throws a 404 page
  notFound();
}