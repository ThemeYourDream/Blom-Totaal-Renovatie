import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project niet gevonden' };
  }

  return {
    title: `${project.title} | Blom Totaal Renovatie`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const allImages = [project.images.main, ...project.images.gallery];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back button */}
      <Link
        href="/projecten"
        className="inline-block mb-8 text-brand-red hover:text-red-700 font-medium"
      >
        ← Terug naar projecten
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="inline-block bg-brand-light px-4 py-2 rounded mb-4 text-sm font-medium text-brand-red">
          {project.place}, {project.year}
        </div>
        <h1 className="font-heading font-bold text-4xl mb-4">{project.title}</h1>
        <p className="text-xl text-brand-dark/70 max-w-2xl">{project.summary}</p>
      </div>

      {/* Description */}
      <div className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="font-heading font-bold text-2xl mb-4">Over dit project</h2>
        <div className="text-lg text-brand-dark/80 leading-relaxed space-y-4">
          <p>{project.description}</p>
        </div>
      </div>

      {/* Photo Gallery - Large */}
      <div className="mb-16">
        <h2 className="font-heading font-bold text-2xl mb-8">Fotogalerij</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg bg-gray-200">
              <Image
                src={image}
                alt={`${project.title} foto ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="mb-16">
        <h2 className="font-heading font-bold text-2xl mb-6">Werkzaamheden</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {project.services.map((service) => (
            <div
              key={service}
              className="bg-brand-light border border-brand-red/20 rounded-lg p-4 text-center"
            >
              <p className="font-medium text-brand-dark">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-brand-red text-white rounded-lg p-8 text-center">
        <h3 className="font-heading font-bold text-2xl mb-4">
          Soortgelijk project realiseren?
        </h3>
        <p className="text-lg mb-6">
          Laat ons weten wat u wilt en wij nemen contact op met een vrijblijvende offerte.
        </p>
        <Link
          href="/offerte"
          className="inline-block px-8 py-3 bg-white text-brand-red font-bold rounded hover:bg-gray-100 transition-colors"
        >
          Offerte aanvragen
        </Link>
      </div>
    </div>
  );
}
