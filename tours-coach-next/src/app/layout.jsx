"use client";
import './globals.css';
import { QuoteProvider, useQuote } from '../context/QuoteContext';
import { Header, Footer, ChatWidget, QuoteForm } from '../components/Shared';

function AppContent({ children }) {
  const { isQuoteModalOpen, setIsQuoteModalOpen } = useQuote();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-red-600 selection:text-white relative">
      <Header />
      
      <main className="flex-grow w-full overflow-x-hidden pt-20">
        {children}
      </main>
      
      <Footer />
      <ChatWidget />
      
      {/* This makes sure the Quote Form can pop up over any page! */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
          <div className="w-full max-w-2xl my-auto animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <QuoteForm onClose={() => setIsQuoteModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <title>Charter Bus Rentals Canada | Tours Coach Charters</title>
         <meta name="description" content="Canada's Premier Charter Bus Rentals. From corporate retreats to school trips, we provide reliable transportation from coast to coast." />
      </head>
      <body>
        <QuoteProvider>
          <AppContent>{children}</AppContent>
        </QuoteProvider>
      </body>
    </html>
  );
}