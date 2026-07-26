import { SERVICE_DATA } from '../../../lib/data';
import { ServiceTemplate } from '../../../components/Templates';
import { notFound } from 'next/navigation';

export async function generateMetadata(props) {
  // Await the params to support Next.js 15
  const params = await props.params;
  const service = SERVICE_DATA[params?.slug];
  
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | Tours Coach Charters`,
    description: service.subtitle,
  };
}

export function generateStaticParams() {
  return Object.keys(SERVICE_DATA).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage(props) {
  // Await the params to ensure the URL slug is read correctly before checking the data
  const params = await props.params;
  const service = SERVICE_DATA[params?.slug];

  // If the slug doesn't match our data, return the 404 page
  if (!service) {
    notFound(); 
  }

  return (
    <div className="min-h-screen bg-white">
      <ServiceTemplate data={service} />
    </div>
  );
}