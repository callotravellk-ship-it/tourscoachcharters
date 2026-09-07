import Link from 'next/link';
import { Header, Footer } from '../../components/Shared';
import { MULTI_DAY_TOURS, FLORIDA_TOURS } from '../../lib/data';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Multi-Day & Continental Tours | Tours Coach Charters',
  description: 'Private motor coach multi-day tours across Eastern Canada and Florida. Travel with your group comfortably across borders and provinces.',
};

const TourGrid = ({ tours, sectionTitle, sectionDesc }) => (
  <div className="mb-20">
    <div className="mb-10 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">{sectionTitle}</h2>
      <p className="text-lg text-slate-600">{sectionDesc}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tours.map((tour) => (
        <div key={tour.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:shadow-xl transition-shadow group">
          <Link href={`/tours/${tour.id}`} className="h-48 bg-slate-200 relative overflow-hidden block">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400"></div>
          </Link>
          <div className="p-6 flex flex-col flex-grow">
            <Link href={`/tours/${tour.id}`}>
              <h3 className="text-xl font-bold text-blue-900 mb-2 leading-tight group-hover:text-red-600 transition-colors">
                {tour.title}
              </h3>
            </Link>
            <div className="flex flex-col space-y-1 mb-4 text-xs text-slate-600 font-semibold uppercase tracking-wide">
              <span className="flex items-center"><Clock size={14} className="mr-1 text-red-600"/> {tour.duration}</span>
              <span className="flex items-center"><MapPin size={14} className="mr-1 text-red-600"/> {tour.route}</span>
            </div>
            <p className="text-sm text-slate-600 mb-6 flex-grow line-clamp-3">{tour.description}</p>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase">Pricing</span>
                <span className="text-lg font-black text-blue-800">{tour.startingPrice}</span>
              </div>
              <Link href="/request-a-quote" className="flex items-center bg-red-50 text-red-700 hover:bg-red-600 hover:text-white px-4 py-2 rounded font-bold text-sm transition-colors border border-red-100">
                Get Quote <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function MultiDayToursPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      
      <section className="pt-32 pb-20 bg-blue-900 text-white border-b-4 border-red-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Multi-Day & Continental</h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Long-distance group transportation packages connecting Ontario with Québec and Florida.
          </p>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-16">
        <TourGrid 
          tours={MULTI_DAY_TOURS} 
          sectionTitle="Eastern Canada Packages" 
          sectionDesc="Private motor coach journeys connecting Toronto, the Thousand Islands, Ottawa, Montréal, and historic Québec City." 
        />
        <TourGrid 
          tours={FLORIDA_TOURS} 
          sectionTitle="Florida Group Tours" 
          sectionDesc="Choose speed or choose savings. Direct-relay operations or midpoint-hotel routing from Toronto to Florida destinations." 
        />
      </main>

      <Footer />
    </div>
  );
}