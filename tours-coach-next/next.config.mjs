/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // --- EXISTING LEGACY REDIRECTS (Updated to point to new URLs) ---
      {
        source: '/luxury-coach-bus-56-passengers',
        destination: '/luxury-coach-bus-charter',
        permanent: true,
      },
      {
        source: '/luxury-coach-bus-56-passengers/', 
        destination: '/luxury-coach-bus-charter',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blue-mountain-coach-charters',
        destination: '/winter-destinations',
        permanent: true,
      },
      {
        source: '/blue-mountain-coach-charters/',
        destination: '/winter-destinations',
        permanent: true,
      },

      // --- NEW SEO REDIRECTS (Rental -> Charter/Service) ---
      
      // Fleet Redirects
      { source: '/luxury-coach-bus-rental', destination: '/luxury-coach-bus-charter', permanent: true },
      { source: '/mini-coach-bus-rental', destination: '/mini-coach-bus-charter', permanent: true },
      { source: '/14-passenger-van-rental', destination: '/14-passenger-van-service', permanent: true },
      { source: '/school-bus-rental', destination: '/school-bus-charter', permanent: true },
      
      // Destination Redirects
      { source: '/charter-bus-rental-toronto', destination: '/charter-bus-service-toronto', permanent: true },
      { source: '/charter-bus-rental-scarborough', destination: '/charter-bus-service-scarborough', permanent: true },
      { source: '/charter-bus-rental-ajax', destination: '/charter-bus-service-ajax', permanent: true },
      { source: '/charter-bus-rental-pickering', destination: '/charter-bus-service-pickering', permanent: true },
      { source: '/charter-bus-rental-hamilton', destination: '/charter-bus-service-hamilton', permanent: true },
      { source: '/charter-bus-rental-north-york', destination: '/charter-bus-service-north-york', permanent: true },
      { source: '/charter-bus-rental-aurora', destination: '/charter-bus-service-aurora', permanent: true },
      { source: '/charter-bus-rental-woodbridge', destination: '/charter-bus-service-woodbridge', permanent: true },
      { source: '/charter-bus-rental-vaughan', destination: '/charter-bus-service-vaughan', permanent: true },
      { source: '/charter-bus-rental-brampton', destination: '/charter-bus-service-brampton', permanent: true },
      { source: '/charter-bus-rental-milton', destination: '/charter-bus-service-milton', permanent: true },
      { source: '/charter-bus-rental-mississauga', destination: '/charter-bus-service-mississauga', permanent: true },
      { source: '/charter-bus-rental-oshawa', destination: '/charter-bus-service-oshawa', permanent: true },
      { source: '/charter-bus-rental-burlington', destination: '/charter-bus-service-burlington', permanent: true },
      { source: '/charter-bus-rental-guelph', destination: '/charter-bus-service-guelph', permanent: true },
      { source: '/charter-bus-rental-brantford', destination: '/charter-bus-service-brantford', permanent: true },
      { source: '/charter-bus-rental-bolton', destination: '/charter-bus-service-bolton', permanent: true },
      { source: '/charter-bus-rental-barrie', destination: '/charter-bus-service-barrie', permanent: true }
    ];
  },
};

export default nextConfig;