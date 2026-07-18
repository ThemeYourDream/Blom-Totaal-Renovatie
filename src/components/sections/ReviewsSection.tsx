'use client';

import { reviews } from '@/data/reviews';
import { siteConfig } from '@/config/site';
import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function ReviewsSection() {
  const { ref, isVisible } = useScrollReveal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPos = 0;
    const speed = -0.3; // negative = scroll down (reviews move down)
    const cardHeight = 260; // height of each review card + gap
    const maxScroll = reviews.length * cardHeight; // Total scrollable height
    let animationId: number;

    const scroll = () => {
      if (!isHovering) {
        scrollPos += speed;
        if (scrollPos <= -maxScroll) {
          scrollPos = 0;
        }
        container.scrollTop = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isHovering]);

  return (
    <section
      ref={ref}
      className="py-8 sm:py-16 md:py-24 bg-gradient-to-br from-brand-light via-white to-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out',
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-4 sm:mb-6">
            Wat klanten zeggen
          </h2>

          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <span className="text-2xl sm:text-4xl">★★★★★</span>
            </div>
            <p className="text-xs sm:text-sm text-brand-dark/80 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Tevreden huiseigenaren vertrouwen Blom
            </p>
            <a
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 sm:px-8 py-2 sm:py-3 bg-white border-2 border-brand-red text-brand-red font-medium rounded hover:bg-brand-light transition-all text-xs sm:text-sm"
            >
              Bekijk reviews op Google →
            </a>
          </div>
        </div>

        {/* Mobile: Vertical scroll carousel */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex flex-col gap-4 overflow-y-auto h-96 px-0"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Double the reviews for infinite loop effect */}
            {[...reviews, ...reviews].map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="flex-shrink-0 p-4 sm:p-6 bg-white rounded-lg border-2 border-brand-red/20 hover:border-brand-red/50 hover:shadow-lg transition-all min-h-60"
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-brand-red text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-brand-dark/80 mb-3 sm:mb-4 italic leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-heading font-bold text-sm text-brand-dark">
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-6 bg-white rounded-lg border-2 border-brand-red/20 hover:border-brand-red/50 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-brand-red text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-brand-dark/80 mb-4 italic leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-heading font-bold text-sm text-brand-dark">
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
