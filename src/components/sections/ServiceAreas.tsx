import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function ServiceAreas() {
  return (
    <section className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          Ons werkgebied
        </h2>
        <p className="text-center text-brand-dark/60 max-w-2xl mx-auto mb-12">
          Wij werken vooral in de regio Arnhem-Nijmegen
        </p>

        <div className="bg-white rounded-lg p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {siteConfig.serviceAreas.map((area) => (
              <div
                key={area}
                className="p-4 bg-brand-light rounded border border-brand-red/20 text-center"
              >
                <p className="font-medium text-brand-dark">{area}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-sm text-brand-dark/70 mb-4">
            Voor passende projecten voeren wij ook werkzaamheden buiten deze regio en door heel Nederland uit.
          </p>
          <Link
            href="/werkgebied"
            className="inline-block text-brand-red font-medium hover:underline"
          >
            Meer informatie over ons werkgebied →
          </Link>
        </div>
      </div>
    </section>
  );
}
