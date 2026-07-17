import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Werkgebied | Blom Totaal Renovatie',
  description: 'We werken in regio Arnhem-Nijmegen en omgeving. Voor passende projecten ook elders in Nederland.',
};

export default function ServiceAreasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading font-bold text-4xl mb-4">Ons werkgebied</h1>
      <p className="text-lg text-brand-dark/70 mb-12">
        Blom Totaal Renovatie is gevestigd in Doesburg en werkt voornamelijk in de regio Arnhem-Nijmegen.
      </p>

      <div className="prose prose-lg max-w-none">
        <h2 className="font-heading font-bold text-2xl mb-4">Primaire werkgebied</h2>
        <p className="mb-6">
          We werken regelmatig in de volgende plaatsen:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {siteConfig.serviceAreas.map((area) => (
            <div key={area} className="p-3 bg-brand-light rounded border border-brand-red/20">
              <p className="font-medium text-brand-dark">{area}</p>
            </div>
          ))}
        </div>

        <h2 className="font-heading font-bold text-2xl mb-4">Buiten dit gebied</h2>
        <p className="mb-6">
          Voor passende projecten voeren wij ook werkzaamheden buiten deze regio en door heel Nederland uit. Neem
          gerust contact met ons op als u buiten dit werkgebied bent. We zien graag of we u kunnen helpen.
        </p>

        <h2 className="font-heading font-bold text-2xl mb-4">Waarom regio Arnhem-Nijmegen?</h2>
        <p>
          Door in deze regio te werken, kennen we de plaatselijke omstandigheden en kunnen we sneller ter plaatse zijn.
          Dit maakt de communicatie efficiënter en zorgt voor betere afstemming met uw project.
        </p>
      </div>
    </div>
  );
}
