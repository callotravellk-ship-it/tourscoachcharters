"use client";
import React, { createContext, useState, useContext } from 'react';

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  return (
    <QuoteContext.Provider value={{ isQuoteModalOpen, setIsQuoteModalOpen }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  return useContext(QuoteContext);
}