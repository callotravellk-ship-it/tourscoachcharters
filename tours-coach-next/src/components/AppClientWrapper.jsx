"use client";
import React, { useEffect } from 'react';
import { QuoteProvider, useQuote } from '../context/QuoteContext';
import { Header, Footer, QuoteForm } from './Shared';

function AppContent({ children }) {
  const { isQuoteModalOpen, setIsQuoteModalOpen } = useQuote();

  useEffect(() => {
    const handleExitIntent = (e) => {
      if (e.clientY <= 0) {
        const hasSeenPopup = sessionStorage.getItem('exitIntentShown');
        if (!hasSeenPopup) {
          setIsQuoteModalOpen(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleExitIntent);
    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, [setIsQuoteModalOpen]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-red-600 selection:text-white relative">
      <Header />
      
      <main className="flex-grow w-full overflow-x-hidden pt-20">
        {children}
      </main>
      
      <Footer />
      
      {/* Quote Form Modal */}
      {isQuoteModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
          onClick={() => setIsQuoteModalOpen(false)}
        >
          <div className="w-full max-w-2xl my-auto animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <QuoteForm onClose={() => setIsQuoteModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function AppClientWrapper({ children }) {
  return (
    <QuoteProvider>
      <AppContent>{children}</AppContent>
    </QuoteProvider>
  );
}
