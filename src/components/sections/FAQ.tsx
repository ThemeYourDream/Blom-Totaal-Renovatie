'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Hoe verloopt het proces?',
      answer: 'Wij beginnen met een persoonlijk gesprek om uw wensen en project goed te begrijpen. Daarna maken wij een gedetailleerde opname ter plaatse. Vervolgens sturen wij een duidelijke offerte. Als u akkoord gaat, plannen wij het werk in en voeren wij het uit met regelmatig contact.',
    },
    {
      question: 'Hoe lang duurt een renovatie?',
      answer: 'Dat verschilt per project. Een badkamerrenovatie kan enkele weken zijn, een volledige woningrenovatie kan maanden zijn. Tijdens de eerste afspraak geven wij een realistische planning. Wij houden ons eraan.',
    },
    {
      question: 'Kunt u tussentijds aanpassingen doen?',
      answer: 'Ja, maar wij bespreken dit meteen. Kleine aanpassingen kunnen, maar grote wijzigingen beïnvloeden kosten en planning. Wij zijn transparant hierover en houden u op de hoogte.',
    },
    {
      question: 'Wat als u niet tevreden bent?',
      answer: 'Wij voeren werk uit tot u tevreden bent. Dit behoort tot onze standaard. Mocht er iets niet naar wens zijn, herstellen wij het. Uw tevredenheid is onze prioriteit.',
    },
    {
      question: 'Bent u verzekerd?',
      answer: 'Ja, wij zijn volledig verzekerd met een aansprakelijkheidsverzekering. Dit geeft u zekerheid en bescherming.',
    },
    {
      question: 'Welke gebieden dekt u?',
      answer: 'Wij werken in de regio Arnhem-Nijmegen en omgeving. Wij voeren projecten uit voor particulieren, bedrijven en VvE\'s.',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease-out',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-lg text-brand-dark/60">
            Antwoorden op vragen die klanten vaker stellen
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-brand-red/20 rounded-lg overflow-hidden hover:border-brand-red/40 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-4 md:py-5 bg-white hover:bg-brand-light/50 flex items-center justify-between transition-colors"
              >
                <span className="font-heading font-bold text-left text-brand-dark text-lg">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl text-brand-red flex-shrink-0 ml-4 transition-transform ${
                    openIndex === idx ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 bg-brand-light/30 border-t border-brand-red/10">
                  <p className="text-brand-dark/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-brand-light rounded-xl border border-brand-red/20 text-center">
          <p className="text-brand-dark/80 mb-4">
            Uw vraag staat er niet bij?
          </p>
          <a
            href="/contacteer-ons/"
            className="inline-block px-8 py-3 bg-brand-red text-white font-medium rounded hover:bg-red-700 hover:shadow-lg transition-all hover:scale-105"
          >
            Neem contact op
          </a>
        </div>
      </div>
    </section>
  );
}
