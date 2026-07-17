import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies | Blom Totaal Renovatie',
};

export default function CookiesPage() {
  const lastUpdated = new Date().toLocaleDateString('nl-NL');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading font-bold text-4xl mb-2">Cookieverklaring</h1>
      <p className="text-sm text-brand-dark/60 mb-12">
        Laatst bijgewerkt: {lastUpdated}
      </p>

      <div className="prose prose-lg max-w-none space-y-6">
        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Wat zijn cookies?</h2>
          <p className="text-brand-dark/80">
            Cookies zijn kleine tekstbestandjes die op uw apparaat worden opgeslagen als u onze website bezoekt.
            Ze helpen ons uw voorkeur te onthouden en de website te verbeteren.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Welke cookies gebruiken wij?</h2>

          <div className="mt-4">
            <h3 className="font-heading font-bold text-lg mb-2 text-brand-red">
              1. Noodzakelijke cookies
            </h3>
            <p className="text-brand-dark/80 mb-2">
              Deze cookies zijn essentieel voor de werking van de website:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-brand-dark/80">
              <li>Sessiecookies voor beveiligde formulieren</li>
              <li>Cookies voor uw cookietoestemming</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-heading font-bold text-lg mb-2 text-brand-red">
              2. Analytische cookies
            </h3>
            <p className="text-brand-dark/80 mb-2">
              Deze cookies helpen ons te begrijpen hoe bezoekers onze website gebruiken:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-brand-dark/80">
              <li>Google Analytics: Voor het meten van bezoekers en paginagebruik</li>
            </ul>
            <p className="text-brand-dark/80 mt-2">
              Deze cookies worden <strong>alleen</strong> ingesteld als u daarvoor toestemming hebt gegeven.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Uw toestemming</h2>
          <p className="text-brand-dark/80">
            Bij uw eerste bezoek vraagt de website om toestemming voor analytische cookies. U kunt kiezen tussen:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-brand-dark/80 mt-3">
            <li>
              <strong>Accepteren:</strong> Alle cookies worden ingesteld, ook analytische cookies
            </li>
            <li>
              <strong>Weigeren:</strong> Alleen noodzakelijke cookies worden ingesteld
            </li>
          </ul>
          <p className="text-brand-dark/80 mt-4">
            U kunt uw keuze op elk moment wijzigen via de footer van deze website.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Cookie gegevens</h2>
          <p className="text-brand-dark/80">
            De gegevens uit analytische cookies worden niet voor reclame doeleinden verkocht. Ze helpen ons alleen
            om de website beter te maken.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Cookies verwijderen</h2>
          <p className="text-brand-dark/80">
            U kunt cookies op elk moment via uw browserinstellingen verwijderen. Raadpleeg uw browser voor meer
            informatie over hoe u dit doet.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-bold text-2xl mb-3">Meer informatie</h2>
          <p className="text-brand-dark/80">
            Voor meer informatie over privacy, zie onze privacyverklaring.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-sm text-blue-900">
          <p>
            <strong>Let op:</strong> Dit is een algemene cookieverklaring. Wij adviseren u deze voor publicatie
            door een juridische specialist te laten controleren.
          </p>
        </div>
      </div>
    </div>
  );
}
