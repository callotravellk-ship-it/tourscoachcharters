import React from 'react';
import { FLEET_DATA } from '../../lib/data';
import { SearchResultsClient } from './SearchResultsClient';

export const metadata = {
  title: 'Search Results | Tours Coach Charters',
  description: 'View available charter bus options for your route.',
};

export default async function SearchPage(props) {
  // Await the searchParams to strictly comply with Next.js 15 requirements
  const searchParams = await props.searchParams;
  
  // Extract the data from the URL (fallback to empty strings if missing)
  const pickup = searchParams?.pickup || 'Your Location';
  const destination = searchParams?.destination || 'Your Destination';
  const vehicleId = searchParams?.vehicle || 'luxury-coach-bus-rental';

  // Look up the vehicle details from your data file
  const selectedVehicle = FLEET_DATA[vehicleId] || FLEET_DATA['luxury-coach-bus-rental'];

  return (
    <div className="w-full bg-slate-50 min-h-screen pt-32 pb-24 font-sans">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-black text-blue-900 mb-4">Route Available!</h1>
          <p className="text-lg text-slate-600">
            We have the perfect vehicle to service your trip from <strong className="text-slate-900">{pickup}</strong> to <strong className="text-slate-900">{destination}</strong>.
          </p>
        </div>

{/* Pass vehicleId down to the client component */}
        <SearchResultsClient 
          pickup={pickup} 
          destination={destination} 
          vehicle={selectedVehicle}
          vehicleId={vehicleId} 
        />
        
      </div>
    </div>
  );
}