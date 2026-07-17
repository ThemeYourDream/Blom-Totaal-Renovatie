'use client';

export default function TrustBadges() {
  const badges = [
    { icon: '✓', label: 'VGO Gecertificeerd', description: 'Erkend onderhouds- en renovatiebedrijf' },
    { icon: '⭐', label: '4.9/5 Sterren', description: 'Op basis van 150+ Google reviews' },
    { icon: '🛡️', label: 'Verzekerd', description: 'Volledig aansprakelijk verzekerd' },
    { icon: '👷', label: '30+ Jaar Ervaring', description: 'Vertrouwd door duizenden klanten' },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, idx) => (
            <div key={idx} className="text-center p-4 md:p-6 hover:bg-brand-light rounded-lg transition-colors">
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h3 className="font-heading font-bold text-brand-dark mb-2">{badge.label}</h3>
              <p className="text-sm text-brand-dark/60">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
