import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="bg-gray-900 rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#37afae]/10 rounded-l-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#37afae]/5 rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à discuter de votre projet ?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Notre équipe d&apos;experts est disponible pour analyser vos besoins 
              et vous proposer des solutions adaptées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Demander un devis
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-white rounded-full font-medium text-sm border border-white/20 hover:bg-white/10 transition-colors"
              >
                <Phone size={18} />
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
