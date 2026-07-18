'use client';

import { useMemo } from 'react';

export default function Methodology() {
  const steps = useMemo(() => [
    { number: '1', title: 'Leren elkaar kennen', description: 'Persoonlijk gesprek over uw plan.' },
    { number: '2', title: 'Kijken goed', description: 'Inspectie ter plaatse, opmeten.' },
    { number: '3', title: 'Helder aanbod', description: 'Eerlijke prijs, duidelijke offerte.' },
    { number: '4', title: 'Pakken het aan', description: 'Vakkundig werk, regelmatig contact.' },
    { number: '5', title: 'Klaar en blij', description: 'Werk af, u geniet ervan.' },
  ], []);

  return (
    <section className="relative bg-brand-gray py-8 sm:py-16 md:py-32">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 md:mb-16">
          Onze werkwijze
        </h2>

        {/* Mobile: Stacked cards */}
        <div className="md:hidden grid grid-cols-1 gap-3">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-lg p-4 border-l-4 border-brand-red">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-sm text-brand-dark">{step.title}</h3>
                  <p className="text-xs text-brand-dark/70 mt-1">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Original scroll animation */}
        <div id="methodology-section" className="hidden md:block relative">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="py-24 flex items-center justify-center group">
                <div className="text-center max-w-md">
                  <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-brand-red text-white flex items-center justify-center font-heading font-bold text-4xl group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-3xl mb-4 text-brand-dark">
                    {step.title}
                  </h3>
                  <p className="text-lg text-brand-dark/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
