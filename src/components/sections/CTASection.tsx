'use client';

import Link from 'next/link';
import { getTelLink } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-brand-red to-red-700 text-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.95)',
        transition: 'all 0.7s ease-out',
      }}
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
          Zin in een gesprek?
        </h2>
        <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 text-red-50 max-w-2xl mx-auto">
          Laat ons weten wat u wilt. Wij kijken graag of wij u kunnen helpen.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link
            href="/offerte"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-red font-heading font-bold rounded hover:bg-red-50 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            Offerte aanvragen
          </Link>
          <a
            href={getTelLink(siteConfig.business.phone)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-heading font-bold rounded hover:bg-red-600 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
          >
            Bel ons
          </a>
        </div>
      </div>
    </section>
  );
}
