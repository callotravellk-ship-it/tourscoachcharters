import { 
  FLEET_DATA, 
  SERVICE_DATA, 
  DESTINATION_DATA, 
  FEATURED_TOURS, 
  MULTI_DAY_TOURS, 
  FLORIDA_TOURS 
} from '../lib/data';

export default function sitemap() {
  const baseUrl = "https://www.tourscoachcharter.com";
  const now = new Date();

  // 1. High-priority core landing & commercial conversion routes
  const coreRoutes = [
    { route: "", priority: 1.0, changeFrequency: "daily" },
    { route: "/charter-bus-rental-toronto", priority: 0.95, changeFrequency: "daily" },
    { route: "/pricing", priority: 0.95, changeFrequency: "weekly" },
    { route: "/request-a-quote", priority: 0.9, changeFrequency: "weekly" },
    { route: "/tours", priority: 0.9, changeFrequency: "weekly" },
    { route: "/multi-day-tours", priority: 0.9, changeFrequency: "weekly" },
    { route: "/winter-destinations", priority: 0.85, changeFrequency: "weekly" },
    { route: "/events", priority: 0.85, changeFrequency: "weekly" },
    { route: "/about", priority: 0.7, changeFrequency: "monthly" },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { route: "/tour-quote", priority: 0.8, changeFrequency: "weekly" },
    { route: "/affiliate-tours", priority: 0.75, changeFrequency: "monthly" }
  ];

  const allUrls = coreRoutes.map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // 2. Canonical Fleet Vehicle Pages (High priority for commercial searches)
  const canonicalFleet = [
    "luxury-coach-bus-charter",
    "mini-coach-bus-charter",
    "14-passenger-van-service",
    "school-bus-charter"
  ];
  canonicalFleet.forEach((key) => {
    allUrls.push({
      url: `${baseUrl}/${key}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });

  // 3. Dedicated Service Pages (Mid-funnel commercial keywords)
  if (SERVICE_DATA) {
    Object.keys(SERVICE_DATA).forEach((key) => {
      allUrls.push({
        url: `${baseUrl}/services/${key}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    });
  }

  // 4. Regional Destination Hub Pages (GTA & Ontario local SEO)
  if (DESTINATION_DATA) {
    Object.keys(DESTINATION_DATA).forEach((key) => {
      allUrls.push({
        url: `${baseUrl}/${key}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  }

  // 5. Day, Regional & Multi-Day Tour Itineraries (All 24 Tours)
  const allTours = [
    ...(FEATURED_TOURS || []),
    ...(MULTI_DAY_TOURS || []),
    ...(FLORIDA_TOURS || [])
  ];

  allTours.forEach((tour) => {
    allUrls.push({
      url: `${baseUrl}/tours/${tour.id}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // Deduplicate URLs
  const seen = new Set();
  return allUrls.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}
