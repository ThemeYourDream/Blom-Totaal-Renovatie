import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Onze projecten | Blom Totaal Renovatie',
  description: 'Bekijk de projecten die we voor klanten hebben gerealiseerd.',
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading font-bold text-4xl mb-4">Onze projecten</h1>
      <p className="text-brand-dark/60 mb-12">
        Hier tonen we de werkzaamheden die we voor onze klanten hebben gerealiseerd.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-brand-light rounded-lg p-12 border-2 border-dashed border-brand-red/30 text-center">
          <p className="text-brand-dark/50 font-medium mb-3">
            Projecten worden toegevoegd
          </p>
          <p className="text-sm text-brand-dark/40">
            Zodra we projectfoto's en details hebben, tonen we hier ons werk
          </p>
        </div>
      </div>
    </div>
  );
}
