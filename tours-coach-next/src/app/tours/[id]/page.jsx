import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../../../components/Shared';
import { FEATURED_TOURS } from '../../../lib/data';
import { Clock, MapPin, CheckCircle, XCircle, ArrowRight, AlertTriangle } from 'lucide-react';

export async function generateStaticParams() {
  return FEATURED_TOURS.map((tour) => ({
    id: tour.id,
  }));
}

export async function generateMetadata({ params }) {
  // Await params for Next.js 15 compatibility
  const resolvedParams = await params;
  const tour = FEATURED_TOURS.find((t) => t.id === resolvedParams.id);
  
  if (!tour) return { title: 'Tour Not Found | Tours Coach Charters' };
  
  return {
    title: `${tour.title} | Tours Coach Charters`,
    description: tour.description,
  };
}

export default async function TourDetailPage({ params }) {
  // Await params for Next.js 15 compatibility
  const resolvedParams = await params;
  const tour = FEATURED_TOURS.find((t) => t.id === resolvedParams.id);

  if (!tour) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      
      {/* Tour Hero Banner */}
      <section className="pt-32 pb-16 bg-blue-900 text-white border-b-4 border-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-800 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <Link href="/tours" className="text-blue-300 hover:text-white text-sm font-bold uppercase tracking-widest mb-6 inline-block transition-colors">
              &larr; Back to All Tours
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-md">
              {tour.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-wider text-blue-100">
              <span className="flex items-center bg-blue-800/80 px-4 py-2 rounded-md border border-blue-700 backdrop-blur-sm">
                <Clock size={16} className="mr-2 text-red-500"/> {tour.duration}
              </span>
              <span className="flex items-center bg-blue-800/80 px-4 py-2 rounded-md border border-blue-700 backdrop-blur-sm">
                <MapPin size={16} className="mr-2 text-red-500"/> {tour.route}
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-blue-900 mb-4">Tour Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {tour.description}
              </p>

              <h3 className="text-xl font-bold text-blue-900 mb-4 border-b border-slate-100 pb-2">Itinerary Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-red-600 mr-3 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-900 mb-4 flex items-center">
                  <CheckCircle className="mr-2" size={18} /> What's Included
                </h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• Private charter vehicle and professional driver</li>
                  <li>• Pickup and return service based on confirmed itinerary</li>
                  <li>• Vehicle waiting time within booked charter duration</li>
                  <li>• Pre-trip itinerary and operational review</li>
                  <li>• Standard vehicle operating costs</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-900 mb-4 flex items-center">
                  <XCircle className="mr-2" size={18} /> Not Included
                </h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>• Attraction, cruise, event, or activity tickets</li>
                  <li>• Meals, accommodation, or guide services</li>
                  <li>• Parking, road tolls, venue fees, or permits</li>
                  <li>• Overtime or itinerary changes beyond confirmed hours</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl sticky top-28 border border-slate-800">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Starting From</h3>
              <div className="text-5xl font-black text-white mb-2">
                {tour.startingPrice} <span className="text-xl text-slate-400 font-medium">+ HST</span>
              </div>
              <p className="text-sm text-slate-400 mb-8 pb-8 border-b border-slate-700">
                Final pricing depends on travel dates, group size, and vehicle selection.
              </p>

              <Link 
                href="/request-a-quote" 
                className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition shadow-lg flex justify-center items-center mb-4"
              >
                Request a Custom Quote <ArrowRight className="ml-2" size={18} />
              </Link>
              
              <div className="bg-slate-800 p-4 rounded-lg flex items-start mt-6 text-xs text-slate-400 leading-relaxed">
                <AlertTriangle size={16} className="text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                <p>
                  Prices shown are starting rates in CAD. A written quote from Canada Tours Coach Ltd is required to confirm availability and price.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}