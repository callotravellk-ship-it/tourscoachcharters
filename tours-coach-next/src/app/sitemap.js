import { FLEET_DATA, NAV_LINKS, SERVICE_DATA, DESTINATION_DATA } from '../lib/data';

export default function sitemap() {
  const baseUrl = "https://www.tourscoachcharter.com";

  // High-priority core landing routes
  const coreRoutes = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    { route: "/charter-bus-rental-toronto", priority: 0.95, changeFrequency: "weekly" },
    { route: "/pricing", priority: 0.95, changeFrequency: "weekly" },
    { route: "/request-a-quote", priority: 0.9, changeFrequency: "weekly" },
    { route: "/tours", priority: 0.85, changeFrequency: "weekly" },
    { route: "/multi-day-tours", priority: 0.85, changeFrequency: "weekly" },
    { route: "/winter-destinations", priority: 0.8, changeFrequency: "monthly" },
    { route: "/events", priority: 0.8, changeFrequency: "weekly" },
    { route: "/about", priority: 0.7, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" }
  ];

  const allUrls = coreRoutes.map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: new Date(),
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // Add all fleet vehicles
  if (FLEET_DATA) {
    Object.keys(FLEET_DATA).forEach((key) => {
      allUrls.push({
        url: `${baseUrl}/${key}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });
  }

  // Add all services
  if (SERVICE_DATA) {
    Object.keys(SERVICE_DATA).forEach((key) => {
      allUrls.push({
        url: `${baseUrl}/services/${key}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      });
    });
  }

  // Add all destination hubs
  if (DESTINATION_DATA) {
    Object.keys(DESTINATION_DATA).forEach((key) => {
      allUrls.push({
        url: `${baseUrl}/${key}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  }

  // Deduplicate
  const seen = new Set();
  return allUrls.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}
