export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/crm/'],
    },
    sitemap: 'https://www.tourscoachcharter.com/sitemap.xml',
  };
}
