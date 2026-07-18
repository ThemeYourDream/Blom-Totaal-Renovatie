import Link from 'next/link';
import { services } from '@/data/services';

const featuredServiceIds = [
  'totaalrenovatie',
  'badkamer',
  'keuken',
  'schilderwerk',
  'stucwerk',
  'glas',
];

export default function FeaturedServices() {
  const featured = services.filter((s) => featuredServiceIds.includes(s.id));

  return (
    <section className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            Onze diensten
          </h2>
          <p className="text-center text-brand-dark/60 max-w-2xl mx-auto">
            Van complete renovaties tot specifieke werkzaamheden. Wij voeren alle disciplines uit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featured.map((service) => (
            <Link
              key={service.id}
              href={`/diensten/${service.slug}`}
              className="group p-4 md:p-6 bg-white rounded-lg border border-gray-200 hover:border-brand-red hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2 md:mb-3">
                <h3 className="font-heading font-bold text-base md:text-lg group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                <span className="text-brand-red font-heading font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
              <p className="hidden md:block text-sm text-brand-dark/60 group-hover:text-brand-dark transition-colors">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/diensten"
            className="inline-block px-8 py-3 border-2 border-brand-red text-brand-red font-medium rounded hover:bg-brand-red hover:text-white transition-colors"
          >
            Alle diensten bekijken
          </Link>
        </div>
      </div>
    </section>
  );
}
