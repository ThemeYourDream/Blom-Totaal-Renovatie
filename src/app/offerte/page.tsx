import type { Metadata } from 'next';
import OfferteForm from '@/components/forms/OfferteForm';

export const metadata: Metadata = {
  title: 'Offerte aanvragen | Blom Totaal Renovatie',
  description:
    'Vraag vrijblijvend een offerte aan voor uw werkzaamheden. Voeg foto's toe en wij nemen contact met u op.',
};

export default function OffertePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="font-heading font-bold text-4xl mb-4">
          Offerte aanvragen
        </h1>
        <p className="text-lg text-brand-dark/70">
          Vertel ons wat u wilt realiseren en voeg eventueel foto's toe. We nemen vervolgens contact
          met u op om de mogelijkheden te bespreken.
        </p>
      </div>

      <OfferteForm />
    </div>
  );
}
