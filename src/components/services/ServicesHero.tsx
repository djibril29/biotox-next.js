'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight as ChevronRightIcon } from 'lucide-react';
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
      {/* ── Hero Section ── */}
      <section className="relative min-h-[75vh] overflow-hidden">

        {/* Background panels */}
        <div className="absolute inset-0 flex flex-col lg:flex-row pointer-events-none">
          <div className="order-2 lg:order-1 flex-1 bg-gray-900" />
          <div className="order-1 lg:order-2 flex-1 relative overflow-hidden">
            <div className={`absolute inset-0 transition-transform duration-[8000ms] ease-out ${isLoaded ? 'scale-110' : 'scale-100'}`}>
              <Image
                src="/images/hero/hero2.jpeg"
                alt="Services environnementaux BTLABS"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-gray-900 via-gray-900/20 to-transparent hidden lg:block" />
            <div className="absolute z-10 inset-0 bg-gradient-to-b from-transparent to-gray-900 lg:hidden" />
            <div
              className="hidden lg:block absolute inset-y-0 left-0 w-20 z-10 bg-gray-900"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="container relative z-10 flex flex-col lg:flex-row min-h-[75vh]">
          <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col justify-center pt-32 pb-16">

            {/* Breadcrumb */}
            <nav
              className={`flex items-center gap-2 text-sm text-white/60 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <ChevronRightIcon size={14} />
              <span className="text-white">Nos services</span>
            </nav>

            <h1
              className={`text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '250ms' }}
            >
              EIES · Mesures Air, Eau, Sol,<br />
              <span className="text-[#37afae]">Bruit, Vibrations &amp; QHSE</span>
            </h1>

            <p
              className={`text-white/60 text-base lg:text-lg leading-relaxed max-w-md transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              QHSE, surveillance environnementale et accompagnement des industries.
            </p>
          </div>

          <div className="order-1 lg:order-2 w-full lg:w-1/2 h-48 sm:h-64 lg:h-auto" />
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 lg:left-1/4 -translate-x-1/2 z-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '1000ms' }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
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
