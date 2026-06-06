export default function handler(req, res) {
  const BASE_URL = 'https://www.tourscoachcharter.com';

  // These are all the clean SEO routes from your App.jsx
  const routes = [
    '', // Homepage
    '/luxury-coach-bus-rental',
    '/mini-coach-bus-rental',
    '/14-passenger-van-rental',
    '/school-bus-rental',
    '/charter-bus-rental-toronto',
    '/charter-bus-rental-scarborough',
    '/charter-bus-rental-ajax',
    '/charter-bus-rental-pickering',
    '/charter-bus-rental-hamilton',
    '/charter-bus-rental-north-york',
    '/charter-bus-rental-aurora',
    '/charter-bus-rental-woodbridge',
    '/charter-bus-rental-vaughan',
    '/charter-bus-rental-brampton',
    '/charter-bus-rental-milton',
    '/charter-bus-rental-mississauga',
    '/charter-bus-rental-oshawa',
    '/charter-bus-rental-burlington',
    '/charter-bus-rental-guelph',
    '/charter-bus-rental-brantford',
    '/charter-bus-rental-bolton',
    '/charter-bus-rental-barrie',
    '/winter-destinations',
    '/fifa-world-cup-2026-charters'
  ];

  // Generate the XML structure
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map(route => `
        <url>
          <loc>${BASE_URL}${route}</loc>
          <changefreq>weekly</changefreq>
          <priority>${route === '' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>`;

  // Tell the browser and Googlebot that this is an XML file, not a webpage
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(sitemap);
}