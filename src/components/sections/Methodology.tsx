'use client';

import { useEffect, useState } from 'react';

export default function Methodology() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { number: '1', title: 'Kennismaking', description: 'We leren u en uw project kennen', details: 'Persoonlijk contact met u als klant. Wij nemen de tijd om alles goed te begrijpen.' },
    { number: '2', title: 'Opname op locatie', description: 'Grondige inspectie en meting', details: 'We bezoeken ter plaatse en maken een gedetailleerde opname van het werk.' },
    { number: '3', title: 'Duidelijke offerte', description: 'Heldere en eerlijke offerte', details: 'Transparante prijsopgave zonder verrassingen. Alles duidelijk uitgelegd.' },
    { number: '4', title: 'Planning en uitvoering', description: 'Afgestemd op uw wensen', details: 'Vakkundig werk met duidelijke planning en regelmatig contact.' },
    { number: '5', title: 'Oplevering', description: 'Nette en zorgvuldige afwerking', details: 'Volledig afgewerkt werk. U bent tevreden en we hebben het beloofd werk gedaan.' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('methodology-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionStart = rect.top;
      const windowHeight = window.innerHeight;

      if (sectionStart < windowHeight && rect.bottom > 0) {
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
      <div className="min-h-screen flex items-center justify-center py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-16">
            Onze werkwijze
          </h2>

          <div className="hidden md:block">
            {/* Desktop: Grid view */}
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`text-center transition-all duration-500 ${
                    index <= activeStep ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
                  }`}
                >
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-heading font-bold text-2xl transition-colors duration-500 ${
                        index <= activeStep
                          ? 'bg-brand-red text-white'
                          : 'bg-gray-300 text-gray-500'
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-brand-dark/60">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Single step view */}
          <div className="md:hidden">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-brand-red text-white rounded-full flex items-center justify-center font-heading font-bold text-3xl">
                  {steps[activeStep].number}
                </div>
              </div>
              <h3 className="font-heading font-bold text-2xl text-center mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-center text-brand-dark/80 mb-6">
                {steps[activeStep].details}
              </p>
              <div className="text-center text-sm text-brand-dark/60">
                Stap {activeStep + 1} van {steps.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index <= activeStep ? 'bg-brand-red' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
