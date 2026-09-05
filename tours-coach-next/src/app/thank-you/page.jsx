import Link from 'next/link';
import { Header, Footer } from '../../components/Shared';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Request Received | Tours Coach Charters',
  description: 'Your charter bus quote request has been successfully submitted.',
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 w-full text-center animate-fade-in-up">
          <div className="bg-white p-8 md:p-14 rounded-2xl shadow-xl border-t-4 border-red-600">
            <CheckCircle className="mx-auto text-green-500 mb-6" size={72} strokeWidth={1.5} />
            
            <h1 className="text-3xl md:text-4xl font-black text-blue-800 mb-4 tracking-tight">
              Quote Request Received!
            </h1>
            
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Thank you for choosing Tours Coach Charters. Our logistics team is currently reviewing your itinerary details and checking our fleet availability.
            </p>
            
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-8 text-left">
              <h3 className="font-bold text-blue-900 mb-3 uppercase tracking-wide text-sm">
                What happens next?
              </h3>
              <ul className="space-y-3 text-sm text-blue-800">
                <li className="flex items-start">
                  <span className="font-black mr-2">1.</span> 
                  An agent will calculate your official flat-rate pricing.
                </li>
                <li className="flex items-start">
                  <span className="font-black mr-2">2.</span> 
                  You will receive an email with your custom quote shortly.
                </li>
                <li className="flex items-start">
                  <span className="font-black mr-2">3.</span> 
                  If you need immediate assistance, please call us directly.
                </li>
              </ul>
            </div>

            <Link 
              href="/"
              className="inline-flex items-center justify-center bg-blue-800 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-900 transition shadow-lg w-full sm:w-auto"
            >
              Return to Homepage <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}