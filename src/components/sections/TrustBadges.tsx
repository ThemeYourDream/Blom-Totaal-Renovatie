'use client';

export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-12 h-12 mx-auto text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      description: 'Google reviews van tevreden klanten',
    },
    {
      icon: (
        <svg className="w-12 h-12 mx-auto text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Volledig Verzekerd',
      description: 'Aansprakelijkheidsverzekering voor uw zekerheid',
    },
    {
      icon: (
        <svg className="w-12 h-12 mx-auto text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Transparante Prijzen',
      description: 'Duidelijke offerte zonder verrassingen',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-brand-light/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md border border-brand-red/10 hover:border-brand-red/30 transition-all duration-300"
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
