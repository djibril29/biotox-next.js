'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container">
        <div 
          ref={ref}
          className={`bg-gray-900 rounded-3xl p-10 md:p-16 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* Background decoration with animation */}
          <div className={`absolute top-0 right-0 w-1/2 h-full bg-[#37afae]/10 rounded-l-full transition-transform duration-1000 delay-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`} />
          <div className={`absolute bottom-0 left-0 w-64 h-64 bg-[#37afae]/5 rounded-full -translate-x-1/2 translate-y-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />

          <div className="relative max-w-2xl mx-auto text-center">
            <h2 
              className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Prêt à discuter de votre projet ?
            </h2>
            <p 
              className={`text-gray-300 text-lg mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Notre équipe d&apos;experts est disponible pour analyser vos besoins 
              et vous proposer des solutions adaptées.
            </p>
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <Link href="/contact" className="btn-primary btn-shine hover:scale-105 transition-transform">
                Demander un devis
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-white rounded-lg font-medium text-sm border border-white/20 hover:bg-white/10 hover:scale-105 transition-all"
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
