'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

export default function TrustBadges() {
  const { ref, isVisible } = useScrollReveal();
  const badges = [
    {
      icon: (
        <svg className="w-12 h-12 mx-auto text-brand-red" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      label: 'VGO Gecertificeerd',
      description: 'Erkend onderhouds- en renovatiebedrijf',
    },
    {
      icon: (
        <svg className="w-12 h-12 mx-auto text-brand-red" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      label: '5.0/5 Sterren',
      description: 'Op basis van 11 Google reviews',
    },
    {
      icon: (
        <svg className="w-12 h-12 mx-auto text-brand-red" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      label: 'Volledig Verzekerd',
      description: 'Aansprakelijkheidsverzekering voor uw zekerheid',
    },
    {
      icon: <div className="text-4xl font-bold text-brand-red">€</div>,
      label: 'Transparante Prijzen',
      description: 'Duidelijke offerte zonder verrassingen',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-light/30 to-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-out',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md border border-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${idx * 0.1}s`,
              }}
            >
              <div className="mb-4 flex justify-center">{badge.icon}</div>
              <h3 className="font-heading font-bold text-lg text-brand-dark mb-2">{badge.label}</h3>
              <p className="text-sm text-brand-dark/60 leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
