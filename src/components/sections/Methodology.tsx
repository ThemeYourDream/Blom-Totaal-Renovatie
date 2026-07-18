'use client';

import { useEffect, useState, useMemo } from 'react';

export default function Methodology() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = useMemo(() => [
    { number: '1', title: 'Leren elkaar kennen', description: 'Persoonlijk gesprek', details: 'Wij komen langs, praten over uw plan. Geen formulieren, gewoon begrijpen.' },
    { number: '2', title: 'Kijken goed', description: 'Controleren en opmeten', details: 'Inspectie ter plaatse. Geen verrassingen. Wij weten precies wat nodig is.' },
    { number: '3', title: 'Helder aanbod', description: 'Eerlijke prijs', details: 'Offerte die u snapt. Geen verborgen kosten. Wat u ziet is wat u krijgt.' },
    { number: '4', title: 'Pakken het aan', description: 'Vakkundig werk', details: 'Uitvoering zoals afgesproken. Regelmatig contact. Melvin staat ervoor.' },
    { number: '5', title: 'Klaar en blij', description: 'Tevreden klant', details: 'Werk af. U geniet ervan. Wij zeggen pas klaar als u tevreden bent.' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('methodology-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionStart = rect.top;
      const windowHeight = window.innerHeight;

      const inView = sectionStart < windowHeight && rect.bottom > 0;
      setIsVisible(inView);

      if (inView) {
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionStart) / (windowHeight + rect.height)));
        const stepIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
        setActiveStep(stepIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="methodology-section" className="relative bg-brand-gray">
      <div className="max-w-3xl mx-auto px-3 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-16 md:mb-24 pt-8 sm:pt-12 sticky top-0 bg-brand-gray py-6 sm:py-8">
          Onze werkwijze
        </h2>

        {/* Vertical steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`py-4 sm:py-8 md:py-24 flex items-center justify-center transition-all duration-500 ${
                index <= activeStep ? 'opacity-100' : 'opacity-30'
              }`}
            >
              <div className="text-center max-w-md">
                <div className="mb-3 sm:mb-6 flex justify-center">
                  <div
                    className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center font-heading font-bold text-2xl sm:text-3xl md:text-4xl transition-colors duration-500 ${
                      index <= activeStep
                        ? 'bg-brand-red text-white scale-100'
                        : 'bg-gray-300 text-gray-500 scale-75'
                    }`}
                  >
                    {step.number}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-2xl md:text-3xl mb-2 sm:mb-3 text-brand-dark">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-base md:text-lg text-brand-dark/80 mb-2 sm:mb-3">
                  {step.description}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-brand-dark/60">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed progress dots - only visible in methodology section */}
      <div
        className={`hidden md:flex fixed right-8 top-1/2 transform -translate-y-1/2 flex-col gap-4 bg-white px-4 py-6 rounded-full shadow-lg transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              index <= activeStep
                ? 'bg-brand-red text-white scale-125'
                : 'bg-gray-300 text-gray-500'
            }`}
            title={step.title}
          >
            {step.number}
          </div>
        ))}
      </div>
    </section>
  );
}
