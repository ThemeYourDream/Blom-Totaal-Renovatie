import { siteConfig } from '@/config/site';

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Rating */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-brand-red font-bold">★</span>
              <span className="font-heading font-bold text-xl">
                {siteConfig.reviews.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-sm text-brand-dark/60">
              {siteConfig.reviews.count} Google beoordelingen
            </p>
          </div>

          {/* Experience */}
          <div>
            <p className="font-heading font-bold text-xl text-brand-red mb-1">~6 jaar</p>
            <p className="text-sm text-brand-dark/60">Ervaring in de branche</p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading font-bold text-xl text-brand-red mb-1">1</p>
            <p className="text-sm text-brand-dark/60">Vast aanspreekpunt</p>
          </div>

          {/* Service */}
          <div>
            <p className="font-heading font-bold text-xl text-brand-red mb-1">Klein tot groot</p>
            <p className="text-sm text-brand-dark/60">Alle projectgrootten</p>
          </div>
        </div>
      </div>
    </section>
  );
}
