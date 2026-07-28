import { FLEET_DATA, NAV_LINKS } from '../lib/data'; // Adjust path if needed

export default function sitemap() {
  const baseUrl = "https://www.tourscoachcharter.com";

  // 1. Add your Homepage, Search page, and any hidden "standalone" pages here
  // (e.g., if the FIFA page isn't in your top menu, add "/fifa-2026-charter-bus" here)
  const allRoutes = [
    "", 
    "/search",
    "/request-a-quote" // <-- Added your new lead campaign page here
  ];

  // 2. Automatically loop through your entire Navigation Menu (NAV_LINKS)
  if (NAV_LINKS) {
    NAV_LINKS.forEach((link) => {
      // If the nav item is a direct link (like About or Contact)
      if (!link.dropdown) {
        allRoutes.push(`/${link.id}`);
      }
      
      // If the nav item has a dropdown (like Services or Destinations), grab ALL sub-pages
      if (link.dropdown) {
        link.dropdown.forEach((drop) => {
           allRoutes.push(`/${drop.id}`);
        });
      }
    });
  }

  // Remove any accidental duplicates just to be safe
  const uniqueRoutes = [...new Set(allRoutes)];

  // Map the routes into the XML format Google requires
  const corePages = uniqueRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 3. Dynamically pull all your fleet vehicles
  const fleetPages = [];
  if (FLEET_DATA) {
    Object.keys(FLEET_DATA).forEach((vehicleId) => {
      // Check to make sure we didn't already add it from the NAV_LINKS loop
      if (!uniqueRoutes.includes(`/${vehicleId}`)) {
        fleetPages.push({
          url: `${baseUrl}/${vehicleId}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.9,
        });
      }
    });
  }

  // 4. Combine everything into the final sitemap
  return [...corePages, ...fleetPages];
}