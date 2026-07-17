import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.published).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            Onze projecten
          </h2>
          <p className="text-center text-brand-dark/60 max-w-2xl mx-auto">
            Zie wat we voor anderen hebben gerealiseerd in de regio
          </p>
        </div>

        <div className="bg-gradient-to-br from-brand-light to-white rounded-lg border-2 border-brand-red/20 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/projecten/${project.slug}`} className="group">
                <div className="relative overflow-hidden rounded-lg bg-gray-200 h-40 md:h-48">
                  <Image
                    src={project.images.main}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:opacity-80 transition-opacity"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">
              Projecten in Arnhem, Nijmegen en omgeving
            </h3>
            <p className="text-brand-dark/60 mb-8 max-w-md mx-auto">
              Bekijk ons complete portfolio met renovatieprojecten, gevelwerk en meer
            </p>
            <Link
              href="/projecten"
              className="inline-block px-8 py-3 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors"
            >
              Alle projecten bekijken
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
