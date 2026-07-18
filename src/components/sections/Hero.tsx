'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getTelLink, getWhatsAppLink } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative w-full pt-6 pb-6 sm:pt-16 md:pt-32 lg:pt-40 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/Hero.png)',
        backgroundAttachment: 'scroll',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `translateY(${offsetY * 0.3}px)`,
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 -z-10" />

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out 0.2s both; }
      `}</style>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-heading font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-3 sm:mb-5 leading-tight animate-fade-in-down">
            Uw renovatie. Strak geregeld.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/95 mb-5 sm:mb-6 leading-relaxed animate-fade-in-up">
            Schilderwerk tot complete renovaties. Één vast contactpunt, heldere afspraken, vakmannen die goed werk leveren.
          </p>

          <div className="flex flex-col gap-2 sm:gap-3 animate-fade-in-up">
            <Link
              href="/offerte"
              className="w-full px-4 sm:px-8 py-3 sm:py-4 bg-brand-red text-white font-heading font-bold rounded hover:bg-red-700 hover:shadow-lg transition-all duration-300 text-center text-sm sm:text-base"
            >
              Offerte aanvragen
            </Link>
            <Link
              href="/projecten"
              className="w-full px-4 sm:px-8 py-3 sm:py-4 border-2 border-brand-red text-brand-red font-heading font-bold rounded hover:bg-brand-red hover:text-white hover:shadow-lg transition-all duration-300 text-center text-sm sm:text-base"
            >
              Bekijk ons werk
            </Link>
          </div>

          <div className="md:hidden flex flex-col gap-2 mt-3 animate-fade-in-up">
            <a
              href={getTelLink(siteConfig.business.phone)}
              className="flex items-center justify-center gap-2 py-2.5 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-all text-xs sm:text-sm"
            >
              📞 Bel direct
            </a>
            <a
              href={getWhatsAppLink(siteConfig.business.whatsapp)}
              className="flex items-center justify-center gap-2 py-2.5 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition-all text-xs sm:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp ons
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
