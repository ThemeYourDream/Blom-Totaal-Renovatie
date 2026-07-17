export default function Methodology() {
  const steps = [
    { number: '1', title: 'Kennismaking', description: 'We leren u en uw project kennen' },
    { number: '2', title: 'Opname op locatie', description: 'Grondige inspectie en meting' },
    { number: '3', title: 'Duidelijke offerte', description: 'Heldere en eerlijke offerte' },
    { number: '4', title: 'Planning en uitvoering', description: 'Afgestemd op uw wensen' },
    { number: '5', title: 'Oplevering', description: 'Nette en zorgvuldige afwerking' },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
          Onze werkwijze
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center font-heading font-bold text-2xl">
                  {step.number}
                </div>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-brand-dark/60">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform translate-x-8 text-3xl text-brand-red/30 mt-4">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
