import Link from 'next/link';

export default function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            Onze projecten
          </h2>
          <p className="text-center text-brand-dark/60 max-w-2xl mx-auto">
            Zie wat we voor anderen hebben gerealiseerd
          </p>
        </div>

        <div className="text-center py-16 bg-brand-light rounded-lg border-2 border-dashed border-brand-red/30">
          <p className="text-brand-dark/50 font-medium mb-3">
            Projecten worden binnenkort toegevoegd
          </p>
          <p className="text-sm text-brand-dark/40 mb-6">
            Zodra we projectfoto's hebben, tonen we hier ons werk
          </p>
          <Link
            href="/projecten"
            className="inline-block px-6 py-2 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors"
          >
            Alle projecten
          </Link>
        </div>
      </div>
    </section>
  );
}
