'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollAnimation, useCounterAnimation } from '@/hooks/useScrollAnimation';

export default function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });
  const { count: yearsCount, ref: counterRef } = useCounterAnimation(15, 2000);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background Image with zoom animation */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 transition-transform duration-[2000ms] ease-out ${isLoaded ? 'scale-100' : 'scale-110'}`}>
            <Image
              src="/images/hero/hero1.jpeg"
              alt="Équipe BTLABS"
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
              <span className="text-white">À propos</span>
            </nav>

            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Qui sommes-nous ?
            </h1>
            <p 
              className={`text-white/80 text-lg max-w-xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              Cabinet spécialisé en surveillance environnementale, études d&apos;impact et conseil QHSE.
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

      {/* About Content Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container">
          <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className={`transition-all duration-700 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                BTLABS <span className="text-[#37afae]">(BIOTOX LABS CONSULTING)</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {[
                  <p key="1">
                    BTLABS est un cabinet spécialisé en <strong>surveillance environnementale</strong>, 
                    <strong> études d&apos;impact environnemental et social (EIES/PGES)</strong> et <strong>conseil QHSE</strong>.
                  </p>,
                  <p key="2">
                    Nous accompagnons les industries, les collectivités et les projets de développement 
                    dans la maîtrise de leurs performances environnementales, sanitaires et sociales.
                  </p>,
                  <p key="3">
                    Nous réalisons des mesures professionnelles de la qualité de l&apos;air, de l&apos;eau, 
                    du bruit et des vibrations, en nous appuyant sur des équipements certifiés, 
                    des systèmes d&apos;information géographique (SIG) et des outils de modélisation avancée.
                  </p>,
                  <p key="4">
                    BTLABS propose également des programmes de <strong>formation et de renforcement de capacités</strong>, 
                    alignés sur les standards internationaux ISO, OMS et IFC.
                  </p>,
                  <p key="5">
                    Grâce à une équipe d&apos;experts qualifiés et une approche scientifique rigoureuse, 
                    nous fournissons des solutions fiables, innovantes et conformes aux exigences 
                    réglementaires du Sénégal et de la sous-région.
                  </p>,
                ].map((paragraph, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    {paragraph}
                  </div>
                ))}
              </div>
             
            </div>

            {/* Image */}
            <div 
              className={`relative transition-all duration-700 delay-300 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl img-zoom">
                <Image
                  src="/images/team/ceo.jpeg"
                  alt="Équipe BTLABS en action"
                  fill
                  className="object-cover transition-transform duration-700"
                />
              </div>
              {/* Floating card with counter */}
              <div 
                className={`absolute -bottom-6 -left-6 bg-[#37afae] text-white rounded-2xl p-6 max-w-[200px] shadow-xl hidden lg:block transition-all duration-700 delay-500 ${contentVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
              >
                <p ref={counterRef as React.RefObject<HTMLParagraphElement>} className="text-3xl font-bold mb-1">
                  {yearsCount}+
                </p>
                <p className="text-white/80 text-sm">Années d&apos;expertise au Sénégal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
