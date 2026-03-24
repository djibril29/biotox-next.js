import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="bg-[#37afae] rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Nos experts sont prêts à analyser vos besoins et vous proposer des solutions 
            adaptées à vos enjeux environnementaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#37afae] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Discuter avec un expert
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/projets"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/10 transition-colors"
            >
              <FileText size={18} />
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
