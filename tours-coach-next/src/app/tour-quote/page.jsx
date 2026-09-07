"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, MapPin, Calendar, Users } from 'lucide-react';

function TourQuoteFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    tourName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    groupSize: '',
    pickupLocation: '',
    message: ''
  });

  // Automatically pull the tour name from the URL if they clicked from a tour page
  useEffect(() => {
    const tourQuery = searchParams.get('tour');
    if (tourQuery) {
      setFormData(prev => ({ ...prev, tourName: tourQuery }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., Formspree, API route, or email)
    alert("Thank you! Your tour quote request has been sent. Our team will contact you shortly.");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden my-12">
      <div className="bg-blue-900 p-8 text-white text-center">
        <h1 className="text-3xl font-black mb-2">Tour Booking Request</h1>
        <p className="text-blue-200">Fill out the details below to receive a custom quote for your group.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8">
        {/* Selected Tour */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-slate-700 mb-2">Selected Tour Package</label>
          <input 
            type="text" 
            name="tourName"
            value={formData.tourName}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 text-blue-900 font-bold rounded-lg px-4 py-3 outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
            placeholder="e.g. Niagara Falls Experience"
            readOnly={!!searchParams.get('tour')} // Make read-only if it auto-filled
          />
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">First Name *</label>
            <input required type="text" name="firstName" onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-900" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Last Name *</label>
            <input required type="text" name="lastName" onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-900" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
            <input required type="email" name="email" onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-900" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
            <input required type="tel" name="phone" onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-900" />
          </div>
        </div>

        {/* Tour Specifics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center"><Calendar size={16} className="mr-1 text-red-600"/> Target Date</label>
            <input type="date" name="date" onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-900" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center"><Users size={16} className="mr-1 text-red-600"/> Group Size</label>
            <input type="number" name="groupSize" placeholder="Est. Passengers" onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-900" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center"><MapPin size={16} className="mr-1 text-red-600"/> Pickup City</label>
            <input type="text" name="pickupLocation" placeholder="e.g. Toronto" onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-900" />
          </div>
        </div>

        {/* Additional Notes */}
        <div className="mb-8">
          <label className="block text-sm font-bold text-slate-700 mb-2">Customizations or Special Requests</label>
          <textarea 
            name="message" 
            rows="4" 
            onChange={handleChange}
            placeholder="Let us know if you need specific stops, mobility accommodations, or different vehicle types..."
            className="w-full border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-blue-900 resize-none"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-red-600 text-white font-black text-lg py-4 rounded-lg hover:bg-red-700 transition shadow-lg flex justify-center items-center">
          Submit Tour Request <Send size={20} className="ml-2" />
        </button>
      </form>
    </div>
  );
}

export default function TourQuotePage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 px-4 pb-20">
      <Suspense fallback={<div className="text-center py-20 text-blue-900 font-bold">Loading form...</div>}>
        <TourQuoteFormContent />
      </Suspense>
    </div>
  );
}