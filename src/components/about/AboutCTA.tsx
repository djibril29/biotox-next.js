import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#37afae]/10 rounded-l-full" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Discutons de vos objectifs de développement durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contactez-nous
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/projets"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-white rounded-full font-medium text-sm border border-white/20 hover:bg-white/10 transition-colors"
              >
                <FileText size={18} />
                Nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
