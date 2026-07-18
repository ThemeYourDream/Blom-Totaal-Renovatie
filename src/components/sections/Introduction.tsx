'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

export default function Introduction() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="py-8 sm:py-12 md:py-24 bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-8 md:mb-12">
          Alles onder één dak
        </h2>

        <div className="space-y-4 sm:space-y-6">
          <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
            Melvin doet veel zelf: schilderwerk, badkamerrenovatie, tegelwerk. Wat hij niet doet, regelt hij met vertrouwde vakmensen. Geen vreemden, geen communicatierompslomp.
          </p>

          <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
            Één vast contactpunt. Heldere afspraken. Duidelijke verantwoordelijkheden. Dat maakt het verschil.
          </p>

          <div className="bg-brand-light rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
            <p className="text-sm sm:text-base text-brand-dark/80 leading-relaxed">
              Schilderwerk, verbouwing, tegelwerk - alles combineren in één project. Éen vast team, geen gedoe, goed werk van begin tot eind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
