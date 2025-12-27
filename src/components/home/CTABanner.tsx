import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-16 bg-[#37afae]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Besoin d&apos;un accompagnement ?
            </h2>
            <p className="text-white/80">
              Discutons de vos enjeux environnementaux et sociaux.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#37afae] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contacter un expert
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
