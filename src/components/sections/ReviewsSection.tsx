'use client';

import { reviews } from '@/data/reviews';
import { siteConfig } from '@/config/site';
import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function ReviewsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3).concat(
    currentIndex + 3 > reviews.length ? reviews.slice(0, (currentIndex + 3) % reviews.length) : []
  );

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-br from-brand-light via-white to-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out',
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .review-card {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-6">
            Wat klanten zeggen
          </h2>

          {/* Big stats - focusing on stars not numbers */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-brand-red text-4xl">★★★★★</span>
            </div>
            <p className="text-brand-dark/80 mb-6 max-w-2xl mx-auto text-lg">
              Tevreden huiseigenaren vertrouwen Blom voor hun renovatie
            </p>
            <a
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white border-2 border-brand-red text-brand-red font-medium rounded hover:bg-brand-light transition-all hover:shadow-md"
            >
              Bekijk reviews op Google →
            </a>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="review-card p-6 bg-white rounded-lg border-2 border-brand-red/20 hover:border-brand-red/50 hover:shadow-lg transition-all"
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-brand-red text-lg">★</span>
                  ))}
                </div>
                <p className="text-brand-dark/80 mb-4 italic">
                  "{review.text}"
                </p>
                <p className="font-heading font-bold text-brand-dark">
                  {review.author}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx * 3);
                  setAutoPlay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === Math.floor(currentIndex / 3)
                    ? 'bg-brand-red w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review set ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
