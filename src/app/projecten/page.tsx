import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Onze projecten | Blom Totaal Renovatie',
  description: 'Bekijk de projecten die we voor klanten hebben gerealiseerd in Arnhem, Nijmegen en omgeving.',
};

export default function ProjectsPage() {
  const publishedProjects = projects.filter((p) => p.published);
  const groupedByPlace = publishedProjects.reduce(
    (acc, project) => {
      if (!acc[project.place]) {
        acc[project.place] = [];
      }
      acc[project.place].push(project);
      return acc;
    },
    {} as Record<string, typeof projects>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading font-bold text-4xl mb-4">Onze projecten</h1>
      <p className="text-brand-dark/60 mb-12">
        Dit is ons werk. Diverse projecten in verschillende plaatsen.
      </p>

      {Object.entries(groupedByPlace).map(([place, placeProjects]) => (
        <div key={place} className="mb-16">
          <h2 className="font-heading font-bold text-2xl mb-6 text-brand-red">
            {place}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projecten/${project.slug}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-200 h-64 mb-3">
                  <Image
                    src={project.images.main}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-brand-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-brand-dark/60">
                  {project.services.slice(0, 2).join(', ')}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
