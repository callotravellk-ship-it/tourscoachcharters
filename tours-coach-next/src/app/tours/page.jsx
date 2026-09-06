import Link from 'next/link';
import { Header, Footer } from '../../components/Shared';
import { FEATURED_TOURS } from '../../lib/toursData';
import { Clock, MapPin, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Ontario Group Tours & Day Trips | Tours Coach Charters',
  description: 'Private group day tours and event transportation from the GTA. Travel with your group—not the crowd.',
};

export default function ToursPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-blue-900 text-white border-b-4 border-red-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Explore Ontario Together</h1>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Private group day tours and event transportation from the GTA. Travel with your group—not the crowd.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-wider text-blue-100 mb-8">
            <span className="bg-blue-800/50 px-4 py-2 rounded-full border border-blue-700">7 Featured Packages</span>
            <span className="bg-blue-800/50 px-4 py-2 rounded-full border border-blue-700">3 Vehicle Categories</span>
            <span className="bg-blue-800/50 px-4 py-2 rounded-full border border-blue-700">GTA Convenient Pickup</span>
          </div>
          <Link href="/request-a-quote" className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition font-bold shadow-lg">
            Request a Custom Quote
          </Link>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-16">
        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {FEATURED_TOURS.map((tour) => (
            <div key={tour.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 flex flex-col hover:shadow-xl transition-shadow">
              <div className="h-48 bg-slate-200 relative">
                {/* Fallback gradient if images aren't loaded yet */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400"></div>
                {/* Uncomment when images are ready: <img src={tour.image} alt={tour.title} className="w-full h-full object-cover relative z-10" /> */}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-900 mb-2 leading-tight">{tour.title}</h3>
                <div className="flex flex-col space-y-1 mb-4 text-xs text-slate-600 font-semibold uppercase tracking-wide">
                  <span className="flex items-center"><Clock size={14} className="mr-1 text-red-600"/> {tour.duration}</span>
                  <span className="flex items-center"><MapPin size={14} className="mr-1 text-red-600"/> {tour.route}</span>
                </div>
                <p className="text-sm text-slate-600 mb-6 flex-grow">{tour.description}</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase">Starting From</span>
                    <span className="text-lg font-black text-blue-800">{tour.startingPrice} <span className="text-xs font-normal text-slate-500">+ HST</span></span>
                  </div>
                  <Link href="/request-a-quote" className="bg-slate-100 text-blue-800 hover:bg-blue-800 hover:text-white px-4 py-2 rounded font-bold text-sm transition-colors border border-slate-200">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How Booking Works Section */}
        <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
          <h2 className="text-2xl font-black text-center text-blue-900 mb-8">How Booking Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center font-black text-xl mb-4">1</div>
              <p className="text-sm text-blue-900">Tell us your date, pickup location, group size, and preferred stops.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center font-black text-xl mb-4">2</div>
              <p className="text-sm text-blue-900">We confirm the right vehicle, itinerary feasibility, operating hours, and final price.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center font-black text-xl mb-4">3</div>
              <p className="text-sm text-blue-900">Approve the quote and secure the reservation under CTC's booking terms.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}