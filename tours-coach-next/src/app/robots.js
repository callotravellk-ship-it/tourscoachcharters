export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/crm/', '/thank-you'],
    },
    sitemap: 'https://www.tourscoachcharter.com/sitemap.xml',
  };
}
