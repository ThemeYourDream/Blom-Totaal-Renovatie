import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-heading font-bold text-6xl text-brand-red mb-4">404</h1>
        <p className="font-heading font-bold text-2xl mb-2">Pagina niet gevonden</p>
        <p className="text-brand-dark/60 mb-8">
          De pagina die u zoekt, bestaat niet of is verplaatst.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors"
        >
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
