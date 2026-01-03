'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ProjectsHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image with zoom animation */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-100' : 'scale-110'}`}>
          <Image
            src="/images/hero/hero3.jpeg"
            alt="Projets BTLABS"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Navigation Arrows with animation */}
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
        <ChevronRightIcon size={24} />
      </button>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-16">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav 
            className={`flex items-center gap-2 text-sm text-white/60 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRightIcon size={14} />
            <span className="text-white">Nos projets</span>
          </nav>

          <p 
            className={`text-white/80 text-lg italic mb-4 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            Des projets concrets pour un impact mesurable.
          </p>
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Nos Réalisations & Études d&apos;Impact
          </h1>
          <p 
            className={`text-white/70 text-lg mb-10 max-w-xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms' }}
          >
            Découvrez comment nous accompagnons nos partenaires dans la transition 
            écologique à travers des projets concrets et mesurables.
          </p>

          <Link
            href="/contact"
            className={`btn-shine inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '600ms' }}
          >
            Discuter de votre projet
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '1000ms' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
