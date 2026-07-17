import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getTelLink, getWhatsAppLink } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-brand-light via-white to-white pt-4 pb-8 md:pt-32 md:pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
      `}</style>

      {/* Background accent blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-8 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-brand-red opacity-5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-tight animate-fade-in-down">
              Uw renovatie in goede handen
            </h1>

            <p className="text-lg text-brand-dark/80 mb-8 leading-relaxed animate-fade-in-up">
              Van schilderwerk tot complete woningrenovaties — wij doen het allemaal. Met één vast contactpunt, heldere afspraken en vakmannen die goed werk leveren. Voor particulieren, bedrijven en VvE's in de regio Arnhem-Nijmegen.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up">
              <Link
                href="/offerte"
                className="inline-block px-8 py-4 bg-brand-red text-white font-heading font-bold rounded hover:bg-red-700 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                Offerte aanvragen
              </Link>
              <Link
                href="/projecten"
                className="inline-block px-8 py-4 border-2 border-brand-red text-brand-red font-heading font-bold rounded hover:bg-brand-red hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
              >
                Bekijk ons werk
              </Link>
            </div>

            {/* Mobile Quick Actions */}
            <div className="md:hidden flex flex-col gap-2 animate-fade-in-up">
              <a
                href={getTelLink(siteConfig.business.phone)}
                className="flex items-center justify-center gap-2 py-3 bg-brand-red text-white font-medium rounded hover:bg-red-700 hover:shadow-lg transition-all duration-300"
              >
                📞 Bel direct
              </a>
              <a
                href={getWhatsAppLink(siteConfig.business.whatsapp)}
                className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white font-medium rounded hover:bg-green-600 hover:shadow-lg transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp ons
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
