import { FLEET_DATA } from '../lib/data'; // Adjust path if needed

export default function sitemap() {
  const baseUrl = "https://www.tourscoachcharter.com";

  // 1. Define your core static pages here
  // (Add any extra service or destination pages you create to this list)
  const coreRoutes = [
    "", // This represents your homepage (/)
    "/about",
    "/contact",
    "/search",
    "/charter-bus-rental-toronto",
    // Add additional routes like "/fifa-2026-charter-bus" here when ready
  ];

  const corePages = coreRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamically pull all your fleet vehicles from your data file
  // This ensures your sitemap always matches your live inventory
  const fleetPages = Object.keys(FLEET_DATA || {}).map((vehicleId) => ({
    url: `${baseUrl}/${vehicleId}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // 3. Combine everything and return it to Next.js
  return [...corePages, ...fleetPages];
}