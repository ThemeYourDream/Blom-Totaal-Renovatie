export default function Introduction() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
          Eén aanspreekpunt, veel mogelijkheden
        </h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-brand-dark/80 mb-6 leading-relaxed">
            Blom Totaal Renovatie combineert verschillende werkzaamheden binnen één project. Melvin voert veel werkzaamheden zelf uit en werkt daarnaast met een vast netwerk van vertrouwde vakmensen.
          </p>

          <p className="text-lg text-brand-dark/80 mb-6 leading-relaxed">
            Hierdoor kunnen verschillende disciplines goed op elkaar worden afgestemd, terwijl u als klant één duidelijk aanspreekpunt houdt. Geen gedoe met verschillende aannemer of miscommunicatie tussen partijen — wij coördineren alles voor u.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="p-6 bg-brand-light rounded-lg">
              <h3 className="font-heading font-bold text-xl mb-3 text-brand-red">
                Voor particulieren
              </h3>
              <p className="text-brand-dark/80 text-sm">
                Van kleine verfwerkzaamheden tot complete woningrenovaties. U krijgt één vast aanspreekpunt en duidelijke afspraken.
              </p>
            </div>

            <div className="p-6 bg-brand-light rounded-lg">
              <h3 className="font-heading font-bold text-xl mb-3 text-brand-red">
                Voor bedrijven en VvE's
              </h3>
              <p className="text-brand-dark/80 text-sm">
                Vakkundig onderhoud en renovatie met aandacht voor planning en minimale overlast voor bewoners of gebruikers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
