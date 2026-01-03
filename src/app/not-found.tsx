import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-[#37afae]">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all"
          >
            <Home size={18} />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all"
          >
            <ArrowLeft size={18} />
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}

