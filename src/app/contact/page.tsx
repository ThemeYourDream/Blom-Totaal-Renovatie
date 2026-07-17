import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { getTelLink, getMailLink, getWhatsAppLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact | Blom Totaal Renovatie',
  description: 'Neem contact met ons op via telefoon, e-mail of WhatsApp. Wij helpen u graag.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading font-bold text-4xl mb-4">Contact</h1>
      <p className="text-lg text-brand-dark/70 mb-12">
        Vragen? Neem gerust contact met ons op. Melvin helpt u graag verder.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Phone */}
        <div className="p-8 bg-brand-light rounded-lg">
          <h3 className="font-heading font-bold text-xl mb-4">Bel ons</h3>
          <a
            href={getTelLink(siteConfig.business.phone)}
            className="text-2xl font-bold text-brand-red hover:text-red-700 transition-colors"
          >
            {siteConfig.business.phoneDisplay}
          </a>
          <p className="text-sm text-brand-dark/60 mt-3">
            Bel ons voor directe contact
          </p>
        </div>

        {/* Email */}
        <div className="p-8 bg-brand-light rounded-lg">
          <h3 className="font-heading font-bold text-xl mb-4">E-mail</h3>
          <a
            href={getMailLink(siteConfig.business.email)}
            className="text-lg font-bold text-brand-red hover:text-red-700 transition-colors break-all"
          >
            {siteConfig.business.email}
          </a>
          <p className="text-sm text-brand-dark/60 mt-3">
            Stuur ons een bericht
          </p>
        </div>

        {/* WhatsApp */}
        <div className="p-8 bg-brand-light rounded-lg">
          <h3 className="font-heading font-bold text-xl mb-4">WhatsApp</h3>
          <a
            href={getWhatsAppLink(siteConfig.business.whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-brand-red hover:text-red-700 transition-colors"
          >
            Stuur een berichtje
          </a>
          <p className="text-sm text-brand-dark/60 mt-3">
            Snelle communicatie via WhatsApp
          </p>
        </div>

        {/* Location */}
        <div className="p-8 bg-brand-light rounded-lg">
          <h3 className="font-heading font-bold text-xl mb-4">Vestiging</h3>
          <p className="font-bold text-brand-dark mb-1">
            {siteConfig.business.city}
          </p>
          <p className="text-sm text-brand-dark/60">
            Arnhem-Nijmegen regio
          </p>
        </div>
      </div>

      <div className="bg-white border-l-4 border-brand-red p-6 rounded mb-12">
        <p className="text-brand-dark/70">
          Heeft u vragen over uw project? Stuur ons een bericht via WhatsApp, e-mail of bel ons direct.
          Melvin neemt graag contact met u op.
        </p>
      </div>

      <div className="text-center">
        <h3 className="font-heading font-bold text-xl mb-4">
          Klaar om te starten?
        </h3>
        <p className="text-brand-dark/70 mb-6">
          Vraag vrijblijvend een offerte aan
        </p>
        <Link
          href="/offerte"
          className="inline-block px-8 py-3 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors"
        >
          Offerte aanvragen
        </Link>
      </div>
    </div>
  );
}
