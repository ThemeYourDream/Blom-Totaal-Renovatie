import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Blom Totaal Renovatie`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((s) =>
    service.relatedServices.includes(s.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-6">
        <Link href="/diensten" className="text-brand-red hover:underline text-sm">
          ← Terug naar alle diensten
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
          {service.title}
        </h1>
        <p className="text-lg text-brand-dark/70 mb-8">
          {service.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-heading font-bold text-2xl mb-4">
              Wat doen wij?
            </h2>
            <p className="text-brand-dark/70 mb-6">
              Deze dienst omvat onder andere:
            </p>
            {/* TODO: Add specific details per service */}
            <p className="text-sm text-brand-dark/50 italic">
              Details voor deze dienst volgen in uitgebreide servicepagina's
            </p>
          </div>

          <div>
            <div className="bg-brand-light rounded-lg p-8 border border-brand-red/20">
              <h3 className="font-heading font-bold text-lg mb-4">
                Interesse in {service.title.toLowerCase()}?
              </h3>
              <p className="text-sm text-brand-dark/70 mb-6">
                Laat ons weten wat u wilt realiseren en we nemen contact op.
              </p>
              <Link
                href="/offerte"
                className="inline-block w-full px-6 py-3 bg-brand-red text-white font-medium rounded text-center hover:bg-red-700 transition-colors"
              >
                Offerte aanvragen
              </Link>
            </div>
          </div>
        </div>
      </div>

      {relatedServices.length > 0 && (
        <div>
          <h2 className="font-heading font-bold text-2xl mb-6">
            Gerelateerde diensten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((related) => (
              <Link
                key={related.id}
                href={`/diensten/${related.slug}`}
                className="p-6 bg-brand-gray rounded-lg border border-gray-200 hover:border-brand-red hover:shadow-md transition-all"
              >
                <h3 className="font-heading font-bold mb-2">
                  {related.title}
                </h3>
                <p className="text-sm text-brand-dark/60">
                  {related.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
