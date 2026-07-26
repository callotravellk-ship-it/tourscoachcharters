import { SERVICE_DATA } from '../../../lib/data';
import { ServiceTemplate } from '../../../components/Templates';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const service = SERVICE_DATA[params.slug];
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

export default function ServicePage({ params }) {
  const service = SERVICE_DATA[params.slug];

  if (!service) {
    notFound(); 
  }

  return (
    <div className="min-h-screen bg-white">
      <ServiceTemplate data={service} />
    </div>
  );
}