'use client';

import { reviews } from '@/data/reviews';
import { siteConfig } from '@/config/site';
import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function ReviewsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [currentPage, setCurrentPage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, totalPages]);

  const visibleReviews = reviews.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

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
      <style>{`
        @keyframes slideUpReview {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .review-card {
          animation: slideUpReview 0.8s ease-out;
        }
      `}</style>

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

        {/* Reviews Carousel - Vertical on mobile, Grid on desktop */}
        <div className="relative">
          {/* Mobile: Vertical carousel */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 min-h-96">
              {visibleReviews.map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="review-card p-4 sm:p-6 bg-white rounded-lg border-2 border-brand-red/20 hover:border-brand-red/50 hover:shadow-lg transition-all"
                  onMouseEnter={() => setAutoPlay(false)}
                  onTouchStart={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  onTouchEnd={() => setAutoPlay(true)}
                >
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-brand-red text-lg">★</span>
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
              {reviews.slice(0, 3).map((review, idx) => (
                <div
                  key={`${review.id}-${idx}`}
                  className="p-6 bg-white rounded-lg border-2 border-brand-red/20 hover:border-brand-red/50 hover:shadow-lg transition-all"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-brand-red text-lg">★</span>
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

          {/* Navigation dots - Mobile only */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentPage(idx);
                  setAutoPlay(false);
                }}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                  idx === currentPage
                    ? 'bg-brand-red w-6 sm:w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
