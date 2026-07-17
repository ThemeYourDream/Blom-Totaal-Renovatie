import { reviews } from '@/data/reviews';
import { siteConfig } from '@/config/site';

export default function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            Wat klanten zeggen
          </h2>
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-brand-red font-bold text-xl">★</span>
              <span className="font-heading font-bold text-lg">
                {siteConfig.reviews.rating.toFixed(1)} / 5 sterren
              </span>
            </div>
            <p className="text-sm text-brand-dark/60">
              Op basis van {siteConfig.reviews.count} beoordelingen
            </p>
            <a
              href={siteConfig.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-brand-red font-medium hover:underline"
            >
              Bekijk alle beoordelingen op Google →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review) => (
            <div
              key={review.id}
              className="p-6 bg-brand-light rounded-lg border border-brand-red/10"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-brand-red">★</span>
                ))}
              </div>
              <p className="text-sm text-brand-dark/80 mb-4 line-clamp-4">
                {review.text}
              </p>
              <p className="text-sm font-medium text-brand-dark">
                {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
