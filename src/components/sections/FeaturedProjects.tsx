'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function FeaturedProjects() {
  const { ref, isVisible } = useScrollReveal();
  const featuredProjects = projects.filter((p) => p.published).slice(0, 6);
  const carouselProjects = [...featuredProjects, ...featuredProjects];

  // Mobile: full viewport width (375px - 24px padding = 327px, minus margins)
  const itemWidthMobile = 300;
  const itemWidthDesktop = 256 + 16;
  const totalItemsMobile = carouselProjects.length * itemWidthMobile;
  const totalItemsDesktop = carouselProjects.length * itemWidthDesktop;

  return (
    <section
      ref={ref}
      className="py-8 sm:py-16 md:py-24 bg-white overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out',
      }}
    >
      <style>{`
        @keyframes scroll-carousel-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalItemsMobile / 2}px); }
        }
        @keyframes scroll-carousel-desktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalItemsDesktop / 2}px); }
        }
        .carousel-scroll-mobile {
          display: flex;
          animation: scroll-carousel-mobile 50s linear infinite;
        }
        .carousel-scroll-desktop {
          display: flex;
          animation: scroll-carousel-desktop 55s linear infinite;
        }
        .carousel-scroll-mobile:hover,
        .carousel-scroll-desktop:hover {
          animation-play-state: paused;
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

        {/* Mobile: Full-width auto-scroll carousel */}
        <div className="md:hidden -mx-3 px-3 overflow-hidden">
          <div className="carousel-scroll-mobile gap-4 pb-4">
            {carouselProjects.map((project, idx) => (
              <Link key={`${project.id}-${idx}`} href={`/projecten/${project.slug}`} className="group flex-shrink-0 snap-start">
                <div className="relative overflow-hidden rounded-lg bg-gray-200 h-48 w-72 group-hover:shadow-xl transition-shadow">
                  <Image
                    src={project.images.main}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop: Original carousel */}
        <div className="hidden md:block px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-light to-white rounded-lg border-2 border-brand-red/20 p-12 overflow-hidden">
            <div className="carousel-scroll-desktop gap-4 mb-12">
              {carouselProjects.map((project, idx) => (
                <Link key={`${project.id}-${idx}`} href={`/projecten/${project.slug}`} className="group flex-shrink-0">
                  <div className="relative overflow-hidden rounded-lg bg-gray-200 h-48 w-64 group-hover:shadow-xl transition-shadow">
                    <Image
                      src={project.images.main}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
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
