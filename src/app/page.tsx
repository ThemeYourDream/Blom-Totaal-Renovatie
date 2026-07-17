import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Introduction from '@/components/sections/Introduction';
import FeaturedServices from '@/components/sections/FeaturedServices';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import SingleContactPoint from '@/components/sections/SingleContactPoint';
import Methodology from '@/components/sections/Methodology';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServiceAreas from '@/components/sections/ServiceAreas';
import OfferteCall from '@/components/sections/OfferteCall';
import StructuredData from '@/components/StructuredData';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Totaalrenovatie Doesburg, Arnhem, Nijmegen`,
  description:
    'Complete renovatie, badkamer, schilderwerk en meer. Een duidelijk aanspreekpunt voor al uw werkzaamheden in regio Arnhem-Nijmegen.',
  keywords: [
    'totaalrenovatie',
    'renovatie Arnhem',
    'renovatie Nijmegen',
    'badkamerrenovatie',
    'aannemer Doesburg',
    'schilderwerk',
    'stukadoor Doesburg',
  ],
  openGraph: {
    title: `${siteConfig.name} | Totaalrenovatie Doesburg`,
    description:
      'Complete renovatie met één duidelijk aanspreekpunt. Werkzaamheden in regio Arnhem-Nijmegen.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <StructuredData
        type="LocalBusiness"
        data={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': siteConfig.url,
          name: siteConfig.name,
          image: `${siteConfig.url}${siteConfig.logo}`,
          description: siteConfig.description,
          url: siteConfig.url,
          telephone: siteConfig.business.phone,
          email: siteConfig.business.email,
          address: {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.business.city,
            addressCountry: 'NL',
          },
          priceRange: '€€',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: siteConfig.reviews.rating,
            reviewCount: siteConfig.reviews.count,
          },
          sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
        }}
      />

      <Hero />
      <TrustBar />
      <Introduction />
      <FeaturedServices />
      <FeaturedProjects />
      <SingleContactPoint />
      <Methodology />
      <ReviewsSection />
      <ServiceAreas />
      <OfferteCall />
    </>
  );
}
