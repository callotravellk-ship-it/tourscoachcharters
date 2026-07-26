import { SERVICE_DATA } from '../../../lib/data';
import { ServiceTemplate } from '../../../components/Templates';
import { notFound } from 'next/navigation';

// 1. Generate SEO Meta Tags dynamically based on the service
export async function generateMetadata({ params }) {
  const service = SERVICE_DATA[params.slug];
  
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} | Tours Coach Charters`,
    description: service.subtitle,
  };
}

// 2. Pre-build all service pages during deployment for massive speed
export function generateStaticParams() {
  return Object.keys(SERVICE_DATA).map((slug) => ({
    slug: slug,
  }));
}

// 3. Render the page using our ServiceTemplate
export default function ServicePage({ params }) {
  const service = SERVICE_DATA[params.slug];

  if (!service) {
    notFound(); // Triggers a 404 if someone types a random URL
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Hero Image */}
      <div className="w-full h-[40vh] bg-slate-800 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/60 z-10" />
        <h1 className="relative z-20 text-white text-3xl md:text-5xl font-black uppercase tracking-wider text-center px-4">
          {service.title}
        </h1>
      </div>
      
      {/* Main Template Content */}
      <ServiceTemplate data={service} />
    </div>
  );
}