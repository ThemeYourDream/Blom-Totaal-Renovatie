'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { useEffect, useRef, useState } from 'react';

export default function FeaturedProjects() {
  const { ref, isVisible } = useScrollReveal();
  const featuredProjects = projects.filter((p) => p.published).slice(0, 6);
  const carouselProjects = [...featuredProjects, ...featuredProjects];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPos = 0;
    const speed = 1; // pixels per frame
    const maxScroll = 1896; // 6 items * 316px

    const scroll = () => {
      if (!isHovering) {
        scrollPos += speed;
        if (scrollPos >= maxScroll) {
          scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
      }
    };

    const interval = setInterval(scroll, 50);

    return () => clearInterval(interval);
  }, [isHovering]);

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
      <div className="mx-auto">
        <div className="px-3 sm:px-6 lg:px-8 mb-6 sm:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-2 sm:mb-4">
            Onze projecten
          </h2>
          <p className="text-center text-xs sm:text-sm md:text-base text-brand-dark/60 max-w-2xl mx-auto">
            Zie wat wij hebben gerealiseerd
          </p>
        </div>

        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-3"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ scrollBehavior: 'smooth' }}
          >
            {carouselProjects.map((project, idx) => (
              <div key={`${project.id}-${idx}`} className="flex-shrink-0 w-80">
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
