'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { useEffect, useRef } from 'react';

export default function FeaturedProjects() {
  const { ref, isVisible } = useScrollReveal();
  const featuredProjects = projects.filter((p) => p.published).slice(0, 6);
  const carouselProjects = [...featuredProjects, ...featuredProjects];
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per millisecond
    const maxScroll = 1896; // Half of total width (6 items)

    let frameCount = 0;
    const animate = () => {
      position += speed;
      if (position >= maxScroll) {
        position = 0;
      }
      track.style.transform = `translateX(-${position}px)`;
      frameCount++;
      if (frameCount % 60 === 0) {
        console.log('Projects animating:', position.toFixed(2), 'px');
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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

        {/* Mobile: Continuous horizontal scroll */}
        <div className="md:hidden overflow-hidden px-3">
          <div
            ref={trackRef}
            className="flex gap-4 will-change-transform"
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
