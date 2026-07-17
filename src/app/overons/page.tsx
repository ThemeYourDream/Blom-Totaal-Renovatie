import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Over ons | Blom Totaal Renovatie',
  description: 'Leer meer over Blom Totaal Renovatie en Melvin. Zes jaar ervaring in renovatie en onderhoud.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading font-bold text-4xl mb-8">Over Blom Totaal Renovatie</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <h2 className="font-heading font-bold text-2xl">Wie zijn wij?</h2>
        <p className="text-lg text-brand-dark/80">
          Melvin heeft ongeveer zes jaar ervaring binnen renovatie, onderhoud en afwerking. Vanuit Doesburg werkt
          Blom Totaal Renovatie aan kleine werkzaamheden en complete woningrenovaties.
        </p>

        <h2 className="font-heading font-bold text-2xl">Onze werkwijze</h2>
        <p className="text-lg text-brand-dark/80">
          Melvin voert veel werkzaamheden zelf uit en werkt daarnaast met een vast netwerk van vakmensen. Hierdoor
          kunnen meerdere disciplines binnen één project worden gecombineerd. U als klant houdt tijdens het volledige
          project één duidelijk aanspreekpunt.
        </p>

        <h2 className="font-heading font-bold text-2xl">Wat wij waarde hechten aan</h2>
        <ul className="space-y-3 text-lg text-brand-dark/80">
          <li>✓ Persoonlijk contact</li>
          <li>✓ Duidelijke afspraken</li>
          <li>✓ Zorgvuldige voorbereiding</li>
          <li>✓ Transparante communicatie</li>
          <li>✓ Goede afstemming van verschillende werkzaamheden</li>
          <li>✓ Een nette oplevering</li>
        </ul>

        <div className="bg-brand-light rounded-lg p-8 mt-8">
          <h3 className="font-heading font-bold text-xl mb-4">Klaar om te beginnen?</h3>
          <p className="text-brand-dark/80 mb-6">
            We helpen u graag met uw project. Laat ons weten wat u wilt realiseren en we nemen contact op.
          </p>
          <Link
            href="/offerte"
            className="inline-block px-8 py-3 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors"
          >
            Offerte aanvragen
          </Link>
        </div>
      </div>
    </div>
  );
}
