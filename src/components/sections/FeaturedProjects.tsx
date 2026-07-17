import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.published).slice(0, 6);
  // Duplicate for seamless loop
  const carouselProjects = [...featuredProjects, ...featuredProjects];

  // Calculate item width and total width
  const itemWidthMobile = 160 + 8; // w-40 (160px) + gap-2 (8px)
  const itemWidthDesktop = 256 + 16; // w-64 (256px) + gap-4 (16px)
  const totalItemsMobile = carouselProjects.length * itemWidthMobile;
  const totalItemsDesktop = carouselProjects.length * itemWidthDesktop;

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <style>{`
        @keyframes scroll-carousel-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalItemsMobile / 2}px); }
        }
        @keyframes scroll-carousel-desktop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalItemsDesktop / 2}px); }
        }
        .carousel-scroll {
          animation: scroll-carousel-mobile 40s linear infinite;
        }
        @media (min-width: 768px) {
          .carousel-scroll {
            animation: scroll-carousel-desktop 45s linear infinite;
          }
        }
        .carousel-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            Onze projecten
          </h2>
          <p className="text-center text-brand-dark/60 max-w-2xl mx-auto">
            Zie wat we voor anderen hebben gerealiseerd in de regio
          </p>
        </div>

        <div className="bg-gradient-to-br from-brand-light to-white rounded-lg border-2 border-brand-red/20 p-4 md:p-12 overflow-hidden">
          <div className="carousel-scroll flex gap-2 md:gap-4 mb-12">
            {carouselProjects.map((project, idx) => (
              <Link key={`${project.id}-${idx}`} href={`/projecten/${project.slug}`} className="group flex-shrink-0">
                <div className="relative overflow-hidden rounded-lg bg-gray-200 h-32 md:h-48 w-40 md:w-64 group-hover:shadow-xl transition-shadow">
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
