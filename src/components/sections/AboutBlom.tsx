'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function AboutBlom() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-8 sm:py-16 md:py-32 bg-gradient-to-br from-brand-light via-white to-white overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-out',
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text */}
          <div>
            <div className="mb-4">
              <span className="text-brand-red font-heading font-bold text-xs sm:text-sm tracking-wide">
                OVER MELVIN
              </span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-brand-dark mb-4 sm:mb-6 leading-tight">
              Renovatie met passie
            </h2>

            <p className="text-sm sm:text-base text-brand-dark/80 mb-4 sm:mb-6 leading-relaxed">
              Melvin startte Blom Totaal Renovatie met één ideaal: huiseigenaren helpen hun droomhuis te realiseren. Eerlijk werk. Duidelijke communicatie.
            </p>

            <p className="text-sm sm:text-base text-brand-dark/80 mb-6 sm:mb-8 leading-relaxed">
              Elk project wordt persoonlijk aangestuurd. U spreekt met diegene die het werk doet, niet met een callcenter.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex gap-3">
                <div className="text-brand-red text-xl flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h3 className="font-heading font-bold text-brand-dark text-sm sm:text-base">Persoonlijk contact</h3>
                  <p className="text-xs sm:text-sm text-brand-dark/70">Één vast aanspreekpunt</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-brand-red text-xl flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h3 className="font-heading font-bold text-brand-dark text-sm sm:text-base">Vakkundig werk</h3>
                  <p className="text-xs sm:text-sm text-brand-dark/70">Vakmannen die hun vak beheersen</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-brand-red text-xl flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h3 className="font-heading font-bold text-brand-dark text-sm sm:text-base">Transparant</h3>
                  <p className="text-xs sm:text-sm text-brand-dark/70">Geen verrassingen, eerlijke prijzen</p>
                </div>
              </div>
            </div>

            <p className="text-brand-dark/70 mb-6 sm:mb-8 italic text-xs sm:text-sm">
              "Wij geloven in goed werk, helder contact en tevreden klanten. Dat is Blom."
            </p>

            <Link
              href="/contacteer-ons/"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-brand-red text-white font-heading font-bold rounded hover:bg-red-700 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Leren wij elkaar kennen?
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/about-blom.png"
              alt="Blom Totaal Renovatie"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end items-center p-4 sm:p-6">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-brand-red/10 max-w-sm w-full">
                <p className="text-brand-dark/80 mb-3 leading-relaxed italic text-xs sm:text-sm">
                  "Een renovatie is meer dan alleen werk. Het gaat om het vertrouwen dat u in ons stelt."
                </p>
                <p className="font-heading font-bold text-brand-dark text-sm">Melvin</p>
                <p className="text-xs text-brand-dark/60">Oprichter Blom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
