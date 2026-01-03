'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with zoom animation */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-100' : 'scale-110'}`}>
          <Image
            src="/images/hero/hero1.jpeg"
            alt="Équipe BTLABS en consultation"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Navigation Arrows with fade-in */}
      <button 
        className={`absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-110 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
        style={{ transitionDelay: '800ms' }}
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className={`absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-110 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
        style={{ transitionDelay: '800ms' }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Content with staggered animations */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <p 
            className={`text-white/80 text-lg italic mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            L&apos;expertise environnementale à votre service.
          </p>
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            L&apos;expertise scientifique au service de l&apos;environnement et de la santé
          </h1>
          <p 
            className={`text-white/70 text-lg mb-10 max-w-xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '600ms' }}
          >
            Surveillance environnementale, études d&apos;impact et conseil QHSE fondés sur la rigueur scientifique.
            Nous accompagnons les industries, collectivités et projets de développement vers la conformité réglementaire et la performance durable.
          </p>
          <Link
            href="/services"
            className={`btn-shine inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#37afae]/20 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '800ms' }}
          >
            Voir nos services
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator with pulse animation */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '1200ms' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
