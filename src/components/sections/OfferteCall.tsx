import Link from 'next/link';

export default function OfferteCall() {
  return (
    <section className="py-16 md:py-24 bg-brand-red text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
          Plannen voor een renovatie of onderhoudswerkzaamheden?
        </h2>

        <p className="text-lg mb-8 opacity-90">
          Vertel kort wat er moet gebeuren en voeg eventueel foto's toe. Melvin neemt vervolgens contact met u op om de mogelijkheden te bespreken.
        </p>

        <Link
          href="/offerte"
          className="inline-block px-10 py-4 bg-white text-brand-red font-heading font-bold rounded hover:bg-gray-100 transition-colors"
        >
          Offerte aanvragen
        </Link>
      </div>
    </section>
  );
}
