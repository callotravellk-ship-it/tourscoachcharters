import ToursDirectoryClient from './ToursDirectoryClient';

export const metadata = {
  title: 'Ontario Group Tours & Day Trips | Tours Coach Charters',
  description: 'Private group day tours and event transportation from the GTA. Niagara Falls, Toronto City Tour, Algonquin, Prince Edward County & more.',
  keywords: [
    'ontario group day tours',
    'private bus tours toronto',
    'niagara falls charter bus rental',
    'sightseeing coach bus toronto',
    'algonquin park group tour bus',
    'group transportation gta'
  ],
  alternates: {
    canonical: 'https://www.tourscoachcharter.com/tours',
  },
  openGraph: {
    title: 'Ontario Group Tours & Day Trips | Tours Coach Charters',
    description: 'Private group day tours and event transportation from the GTA. Travel with your group—not the crowd.',
    url: 'https://www.tourscoachcharter.com/tours',
    siteName: 'Tours Coach Charters',
    images: [
      {
        url: 'https://www.tourscoachcharter.com/service-tours.jpg',
        width: 1200,
        height: 630,
        alt: 'Ontario Group Tours and Charters',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
};

export default function ToursPage() {
  return <ToursDirectoryClient />;
}
