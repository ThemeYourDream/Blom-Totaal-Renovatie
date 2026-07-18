'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function FeaturedProjects() {
  const { ref, isVisible } = useScrollReveal();
  const featuredProjects = projects.filter((p) => p.published).slice(0, 6);
  const carouselProjects = [...featuredProjects, ...featuredProjects];

  // Each item is 300px + 1rem gap = ~316px per item
  // 6 items = ~1896px for one set
  const scrollDistance = 1896;

  return (
    <section
      ref={ref}
      className="py-8 sm:py-16 md:py-24 bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out',
      }}
    >
      <style>{`
        @keyframes carouselScroll {
          0% { transform: translateX(0px); }
          100% { transform: translateX(-${scrollDistance}px); }
        }

        .carousel-container {
          overflow: hidden;
          width: 100%;
        }

        .carousel-track {
          display: flex;
          gap: 1rem;
          animation: carouselScroll 60s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        .carousel-item {
          flex: 0 0 300px;
          min-width: 300px;
        }

        @media (min-width: 768px) {
          .carousel-item {
            flex: 0 0 280px;
            min-width: 280px;
          }
        }
      `}</style>

      <div className="mx-auto">
        <div className="px-3 sm:px-6 lg:px-8 mb-6 sm:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-2 sm:mb-4">
            Onze projecten
          </h2>
          <p className="text-center text-xs sm:text-sm md:text-base text-brand-dark/60 max-w-2xl mx-auto">
            Zie wat wij hebben gerealiseerd
          </p>
        </div>

        {/* Mobile: Continuous horizontal scroll */}
        <div className="md:hidden carousel-container px-3">
          <div className="carousel-track">
            {carouselProjects.map((project, idx) => (
              <div key={`${project.id}-${idx}`} className="carousel-item">
                <Link href={`/projecten/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-lg bg-gray-200 h-48 group-hover:shadow-xl transition-shadow">
                    <Image
                      src={project.images.main}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-brand-dark mt-2 truncate">
                    {project.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Static grid */}
        <div className="hidden md:block px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-light to-white rounded-lg border-2 border-brand-red/20 p-12 overflow-hidden">
            <div className="grid grid-cols-3 gap-6 mb-8">
              {featuredProjects.map((project) => (
                <Link key={project.id} href={`/projecten/${project.slug}`} className="group">
                  <div className="relative overflow-hidden rounded-lg bg-gray-200 h-48 group-hover:shadow-xl transition-shadow">
                    <Image
                      src={project.images.main}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm font-medium text-brand-dark mt-2">
                    {project.title}
                  </p>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-brand-dark mb-2">
                Projecten in Arnhem, Nijmegen en omgeving
              </h3>
              <Link href="/projecten" className="text-brand-red hover:underline text-sm">
                Zie meer →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
