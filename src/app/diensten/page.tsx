import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Alle diensten | Blom Totaal Renovatie',
  description: 'Totaalrenovatie, badkamer, schilderwerk, stucwerk, tegelwerk en meer. Alle werkzaamheden op één plek.',
};

export default function ServicesList() {
  const grouped = services.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading font-bold text-4xl mb-4">Onze diensten</h1>
      <p className="text-brand-dark/60 mb-12">
        Wij voeren een breed scala aan werkzaamheden uit. Klik op een dienst voor meer informatie.
      </p>

      {Object.entries(grouped).map(([category, categoryServices]) => (
        <div key={category} className="mb-12">
          <h2 className="font-heading font-bold text-2xl mb-6 text-brand-red">
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryServices.map((service) => (
              <Link
                key={service.id}
                href={`/diensten/${service.slug}`}
                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-brand-red hover:shadow-md transition-all"
              >
                <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-brand-red">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-dark/60">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
