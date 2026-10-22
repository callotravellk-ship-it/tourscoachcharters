import MultiDayClient from './MultiDayClient';

export const metadata = {
  title: 'Multi-Day & Continental Coach Tours | Tours Coach Charters',
  description: 'Private motorcoach multi-day tours connecting Ontario with Québec, Eastern Canada, and Florida. 56-passenger luxury coaches with restrooms, Wi-Fi, and professional drivers.',
  keywords: [
    'multi-day coach tours canada',
    'charter bus toronto to montreal',
    'charter bus toronto to quebec city',
    'toronto to ottawa bus charter',
    'bus charter toronto to florida',
    '56 passenger coach bus rental',
    'private group tours ontario',
    'continental bus charter canada'
  ],
  alternates: {
    canonical: 'https://www.tourscoachcharter.com/multi-day-tours',
  },
  openGraph: {
    title: 'Multi-Day & Continental Coach Tours | Tours Coach Charters',
    description: 'Private motorcoach multi-day tours connecting Ontario with Québec, Eastern Canada, and Florida. Custom itineraries with professional drivers.',
    url: 'https://www.tourscoachcharter.com/multi-day-tours',
    siteName: 'Tours Coach Charters',
    images: [
      {
        url: 'https://www.tourscoachcharter.com/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Multi-Day Coach Tours in Canada',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
};

export default function MultiDayToursPage() {
  return <MultiDayClient />;
}
