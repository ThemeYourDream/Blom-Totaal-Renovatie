import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getTelLink, getWhatsAppLink } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-brand-light to-white pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-tight">
              Jouw renovatie, ons afspreekpunt
            </h1>

            <p className="text-lg text-brand-dark/80 mb-8 leading-relaxed">
              Wij voeren alles uit: van schilderwerk tot complete woningrenovaties. Met één vast contact, duidelijke afspraken en vakmannen die je kunt vertrouwen. Voor particulieren, bedrijven en VvE's in de regio Arnhem-Nijmegen.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/offerte"
                className="inline-block px-8 py-4 bg-brand-red text-white font-heading font-bold rounded hover:bg-red-700 transition-colors text-center"
              >
                Vraag vrijblijvend een offerte aan
              </Link>
              <Link
                href="/projecten"
                className="inline-block px-8 py-4 border-2 border-brand-red text-brand-red font-heading font-bold rounded hover:bg-brand-light transition-colors text-center"
              >
                Bekijk onze projecten
              </Link>
            </div>

            {/* Mobile Quick Actions */}
            <div className="md:hidden flex flex-col gap-2">
              <a
                href={getTelLink(siteConfig.business.phone)}
                className="flex items-center justify-center gap-2 py-3 bg-gray-100 text-brand-dark font-medium rounded hover:bg-gray-200 transition-colors"
              >
                📞 Bel ons
              </a>
              <a
                href={getWhatsAppLink(siteConfig.business.whatsapp)}
                className="flex items-center justify-center gap-2 py-3 bg-gray-100 text-brand-dark font-medium rounded hover:bg-gray-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="hidden lg:block">
            <div className="relative w-full h-96 bg-gradient-to-br from-brand-red/10 to-brand-dark/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-brand-red/30">
              <div className="text-center">
                <p className="text-brand-dark/50 font-medium">
                  Projectfoto hier
                </p>
                <p className="text-sm text-brand-dark/40 mt-2">
                  (Voeg echte foto toe)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
