'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ServicesHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with zoom animation */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-100' : 'scale-110'}`}>
            <Image
              src="/images/hero/hero2.jpeg"
              alt="Services environnementaux BTLABS"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

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
              <span className="text-white">Nos services</span>
            </nav>

            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Nos Domaines d&apos;Intervention
            </h1>
            <p 
              className={`text-white/80 text-lg max-w-xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              QHSE, surveillance environnementale et accompagnement des industries.
            </p>
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

      {/* Introduction Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container">
          <div 
            ref={introRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              <strong className="text-gray-900">BIOTOX LABS CONSULTING</strong> intervient dans plusieurs secteurs clés 
              liés à la qualité, l&apos;hygiène, la sécurité, la santé et l&apos;environnement. 
              Nos domaines d&apos;activités couvrent l&apos;ensemble des secteurs où la gestion 
              environnementale et la maîtrise des impacts environnementaux sont essentielles.
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
}
