"use client";
import React, { createContext, useContext, useState } from 'react';

const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  // NEW: State to hold pre-filled form data
  const [quoteData, setQuoteData] = useState({
    pickup: '',
    destination: '',
    vehicle: 'luxury-coach-bus-rental'
  });

  // NEW: Helper function to set the data and open the modal simultaneously
  const openQuoteWithData = (pickup, destination, vehicleId) => {
    setQuoteData({ pickup, destination, vehicle: vehicleId });
    setIsQuoteModalOpen(true);
  };

  return (
    <QuoteContext.Provider value={{ 
      isQuoteModalOpen, 
      setIsQuoteModalOpen,
      quoteData,         // Expose the data
      setQuoteData,      // Expose the setter
      openQuoteWithData  // Expose the helper function
    }}>
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => useContext(QuoteContext);