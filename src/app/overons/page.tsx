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
          Wij zijn Blom Totaal Renovatie. Al jaren voeren wij renovaties en onderhoudswerkzaamheden uit vanuit Doesburg. Van klein schilderwerk tot complete woningrenovaties. Wij doen het.
        </p>

        <h2 className="font-heading font-bold text-2xl">Hoe werken wij?</h2>
        <p className="text-lg text-brand-dark/80">
          Veel werk voeren wij zelf uit. Voor gespecialiseerde klussen werken we met vakmensen die we goed kennen. Dat geeft ons flexibiliteit en zorgt ervoor dat alles goed op elkaar afgestemd is. En het betekent dat jij als opdrachtgever één vast aanspreekpunt hebt.
        </p>
        <p className="text-lg text-brand-dark/80">
          Van voorbereiding tot oplevering: wij doen wat wij beloven. Duidelijke afspraken, eerlijke prijzen, netjes werk.
        </p>

        <h2 className="font-heading font-bold text-2xl">Dit is belangrijk voor ons</h2>
        <p className="text-lg text-brand-dark/80">
          Persoonlijk contact. Duidelijke communicatie van begin tot eind. Goed voorbereide werkzaamheden. Afstemming zodat verschillende disciplines goed in elkaar passen. Vakkundig werk met oog voor detail. En respect voor jouw huis en jouw tijd.
        </p>

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
