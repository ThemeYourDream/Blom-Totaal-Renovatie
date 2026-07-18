import Link from 'next/link';
import Image from 'next/image';

export default function AboutBlom() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-brand-light via-white to-white overflow-hidden">
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Tekst */}
          <div className="animate-slide-in-left">
            <div className="mb-6">
              <div className="inline-block">
                <span className="text-brand-red font-heading font-bold text-sm tracking-wide">
                  OVER BLOM TOTAAL RENOVATIE
                </span>
              </div>
            </div>

            <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark mb-6 leading-tight">
              Renovatie met passie en vakmanschap
            </h2>

            <p className="text-lg text-brand-dark/80 mb-6 leading-relaxed">
              Melvin startte Blom Totaal Renovatie met een simpel ideaal: huiseigenaren helpen hun droomhuis te realiseren. Niet met grote beloften, maar met eerlijk werk en duidelijke communicatie.
            </p>

            <p className="text-lg text-brand-dark/80 mb-8 leading-relaxed">
              Elk project wordt persoonlijk aangestuurd. Van eerste gesprek tot oplevering, u spreekt met diegene die het werk doet, niet met een callcenter. Dat maakt het verschil. Dat maakt het beter.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="text-brand-red text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-heading font-bold text-brand-dark mb-1">Persoonlijk contact</h3>
                  <p className="text-brand-dark/70">Één vast aanspreekpunt van start tot finish</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-brand-red text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-heading font-bold text-brand-dark mb-1">Vakkundig werk</h3>
                  <p className="text-brand-dark/70">Vakmannen die hun vak beheersen en ervan houden</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-brand-red text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-heading font-bold text-brand-dark mb-1">Transparant en eerlijk</h3>
                  <p className="text-brand-dark/70">Geen verrassingen, geen onverwachte kosten</p>
                </div>
              </div>
            </div>

            <p className="text-brand-dark/70 mb-8 italic">
              "Wij geloven niet in grote kantoren en bureaucratie. Wij geloven in goed werk, helder contact en tevreden klanten. Dat is Blom."
            </p>

            <Link
              href="/contacteer-ons/"
              className="inline-block px-8 py-4 bg-brand-red text-white font-heading font-bold rounded hover:bg-red-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Leren wij elkaar kennen?
            </Link>
          </div>

          {/* Right: Image with Quote Overlay */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/About-blom.png"
              alt="Blom Totaal Renovatie"
              fill
              className="object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Quote card */}
            <div className="absolute inset-0 flex flex-col justify-end items-center p-6 md:p-8">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-brand-red/10 max-w-sm w-full">
                <p className="text-brand-dark/80 mb-4 leading-relaxed italic">
                  "Een renovatie is meer dan alleen werk. Het gaat om het vertrouwen dat u in ons stelt."
                </p>
                <p className="font-heading font-bold text-brand-dark">
                  Melvin
                </p>
                <p className="text-sm text-brand-dark/60">
                  Oprichter Blom Totaal Renovatie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
