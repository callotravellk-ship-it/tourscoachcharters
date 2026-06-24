import { DESTINATION_DATA, FLEET_DATA } from '../lib/data';

export default async function sitemap() {
  const baseUrl = 'https://tourscoachcharter.com';

  // 1. Static routes
  const routes = ['', '/about', '/contact', '/fifa-world-cup-2026-charters', '/winter-destinations'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // 2. Dynamic Destination routes
  const destinations = Object.keys(DESTINATION_DATA).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
  }));

  // 3. Dynamic Fleet routes
  const fleet = Object.keys(FLEET_DATA).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...destinations, ...fleet];
}