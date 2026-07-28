/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/luxury-coach-bus-56-passengers',
        destination: '/luxury-coach-bus-rental',
        permanent: true,
      },
      {
        source: '/luxury-coach-bus-56-passengers/', 
        destination: '/luxury-coach-bus-rental',
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
      }
    ];
  },
};

export default nextConfig;