import Link from 'next/link';
import { getTelLink } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-brand-red to-red-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
          Zin in een goed gesprek?
        </h2>
        <p className="text-lg mb-8 text-red-50 max-w-2xl mx-auto">
          Bel ons of vraag een offerte aan. Geen druk, geen verplichtingen . we gaan erover praten en kijken hoe we je kunnen helpen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/offerte"
            className="px-8 py-4 bg-white text-brand-red font-heading font-bold rounded hover:bg-red-50 hover:shadow-lg transition-all duration-300"
          >
            Offerte aanvragen
          </Link>
          <a
            href={getTelLink(siteConfig.business.phone)}
            className="px-8 py-4 border-2 border-white text-white font-heading font-bold rounded hover:bg-red-600 hover:shadow-lg transition-all duration-300"
          >
            Bel ons direct
          </a>
        </div>
      </div>
    </section>
  );
}
