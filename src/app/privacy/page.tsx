import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy | Blom Totaal Renovatie',
};

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('nl-NL');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading font-bold text-4xl mb-2">Privacyverklaring</h1>
      <p className="text-sm text-brand-dark/60 mb-12">
        Laatst bijgewerkt: {lastUpdated}
      </p>

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Inleiding</h2>
          <p className="text-brand-dark/80">
            {siteConfig.name} respecteert uw privacy. Deze privacyverklaring beschrijft hoe wij uw persoonsgegevens
            verzamelen, gebruiken en beschermen.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Welke gegevens verzamelen we?</h2>
          <p className="text-brand-dark/80">
            Via het offerteformulier verzamelen we de volgende gegevens:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-brand-dark/80">
            <li>Naam</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer</li>
            <li>Postcode en woonplaats (optioneel)</li>
            <li>Omschrijving van uw werkzaamheden</li>
            <li>Foto's en documenten die u uploadt (optioneel)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Waarvoor gebruiken we uw gegevens?</h2>
          <p className="text-brand-dark/80">
            Uw gegevens worden gebruikt voor:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-brand-dark/80">
            <li>Het verwerken van uw offerteaanvraag</li>
            <li>Contact met u opnemen over uw project</li>
            <li>Het versturen van een bevestiging van ontvangst</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Foto's en documenten</h2>
          <p className="text-brand-dark/80">
            Wanneer u foto's of documenten uploadt bij uw offerteaanvraag, verwerken wij deze om uw werkzaamheden
            beter te begrijpen. Deze bestanden worden niet met derden gedeeld, behalve indien nodig voor de uitvoering
            van uw project.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Derde partijen</h2>
          <p className="text-brand-dark/80">
            Bij het verwerken van uw gegevens maken we gebruik van:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-brand-dark/80">
            <li>
              <strong>Resend:</strong> Voor het verzenden van e-mails
            </li>
            <li>
              <strong>Vercel Blob:</strong> Voor het opslaan van geüploade bestanden
            </li>
            <li>
              <strong>Vercel:</strong> Voor het hosten van deze website
            </li>
          </ul>
          <p className="text-brand-dark/80 mt-3">
            Deze dienstverleners werken onder strikte vertrouwelijkheidsovereenkomsten.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Google Analytics</h2>
          <p className="text-brand-dark/80">
            Als u toestemming hebt gegeven, gebruiken we Google Analytics om te zien hoe bezoekers onze website
            gebruiken. Dit helpt ons de website te verbeteren. U kunt uw toestemming voor cookies op elk moment
            aanpassen via de footer.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Beveiliging</h2>
          <p className="text-brand-dark/80">
            Wij nemen de beveiliging van uw gegevens serieus. Alle communicatie verloopt via beveiligde verbindingen,
            en wij beperken de toegang tot uw gegevens tot noodzakelijke personeel.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Uw rechten</h2>
          <p className="text-brand-dark/80">
            U hebt het recht om uw gegevens in te zien, aan te passen of verwijderd te laten. Neem voor vragen over
            uw persoonsgegevens contact met ons op via {siteConfig.business.email}.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Contact</h2>
          <p className="text-brand-dark/80">
            Vragen over deze privacyverklaring? Neem contact met ons op:
          </p>
          <p className="text-brand-dark/80 mt-3">
            <strong>{siteConfig.name}</strong>
            <br />
            {siteConfig.business.city}
            <br />
            {siteConfig.business.email}
            <br />
            {siteConfig.business.phoneDisplay}
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-sm text-blue-900">
          <p>
            <strong>Let op:</strong> Dit is een algemene privacyverklaring. Wij adviseren u deze voor publicatie
            door een juridische specialist te laten controleren om zeker te weten dat alles voor uw specifieke
            situatie correct is.
          </p>
        </div>
      </div>
    </div>
  );
}
