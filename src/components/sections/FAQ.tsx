'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Hoe werkt het proces?',
      answer: 'Persoonlijk gesprek → opname ter plaatse → offerte → planning → uitvoering → oplevering. U hoort regelmatig hoe het gaat.',
    },
    {
      question: 'Hoe lang duurt het?',
      answer: 'Badkamer: enkele weken. Volledige renovatie: maanden. Wij geven realistische tijdsplanning en houden ons eraan.',
    },
    {
      question: 'Mag het anders dan afgesproken?',
      answer: 'Kleine aanpassingen zijn mogelijk. Grote wijzigingen beïnvloeden kosten en planning. Wij zijn transparant hierover.',
    },
    {
      question: 'Wat als het niet goed is?',
      answer: 'Wij voeren werk uit tot u tevreden bent. Uw tevredenheid is onze prioriteit. Dit hoort tot onze standaard.',
    },
    {
      question: 'Bent u verzekerd?',
      answer: 'Ja. Volledige aansprakelijkheidsverzekering. Dit geeft u zekerheid en bescherming.',
    },
    {
      question: 'Waar werken jullie?',
      answer: 'Primair: Arnhem-Nijmegen regio. Voor geschikte projecten: heel Nederland. Neem contact op als u twijfelt.',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-8 sm:py-16 md:py-32 bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out',
      }}
    >
      <div className="max-w-3xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-brand-dark mb-2 sm:mb-3">
            Veelgestelde vragen
          </h2>
          <p className="text-xs sm:text-sm text-brand-dark/60">
            Antwoorden op vragen die klanten stellen
          </p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-brand-red/20 rounded-lg overflow-hidden hover:border-brand-red/40 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white hover:bg-brand-light/50 flex items-center justify-between transition-colors"
              >
                <span className="font-heading font-bold text-left text-brand-dark text-sm sm:text-base">
                  {faq.question}
                </span>
                <span
                  className={`text-lg sm:text-2xl text-brand-red flex-shrink-0 ml-3 transition-transform ${
                    openIndex === idx ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-brand-light/30 border-t border-brand-red/10">
                  <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-brand-light rounded-xl border border-brand-red/20 text-center">
          <p className="text-xs sm:text-sm text-brand-dark/80 mb-3 sm:mb-4">
            Uw vraag staat er niet bij?
          </p>
          <a
            href="/contacteer-ons/"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-brand-red text-white font-medium rounded hover:bg-red-700 hover:shadow-lg transition-all text-xs sm:text-sm"
          >
            Neem contact op
          </a>
        </div>
      </div>
    </section>
  );
}
