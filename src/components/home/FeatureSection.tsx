'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { useScrollAnimation, useCounterAnimation } from '@/hooks/useScrollAnimation';

const features = [
  'Équipements certifiés et calibrés',
  'Équipe pluridisciplinaire d\'experts',
  'Conformité aux normes ISO, OMS et IFC',
  'Suivi en temps réel et reporting cloud',
];

export default function FeatureSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: logoRef, isVisible: logoVisible } = useScrollAnimation({ threshold: 0.2 });
  const { count: yearsCount, ref: counterRef } = useCounterAnimation(15, 2000);

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div 
            className={`relative order-2 lg:order-1 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl img-zoom">
              <Image
                src="/images/services/service-1.jpeg"
                alt="Équipe BTLABS"
                fill
                className="object-cover transition-transform duration-700"
              />
            </div>
            {/* Floating card with counter animation */}
            <div 
              className={`absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px] hidden lg:block transition-all duration-700 delay-300 ${sectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
            >
              <div ref={counterRef as React.RefObject<HTMLDivElement>} className="text-3xl font-bold text-[#37afae] mb-1">
                {yearsCount}+
              </div>
              <p className="text-sm text-gray-600">Années d&apos;expérience en Afrique de l&apos;Ouest</p>
            </div>
          </div>

          {/* Content */}
          <div 
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Des solutions SMART et respectueuses de l&apos;environnement{' '}
              <span className="text-[#37afae]">pour des projets durables</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              BTLABS combine expertise technique de pointe et connaissance approfondie 
              du contexte régional pour vous offrir des solutions environnementales 
              sur mesure.
            </p>

            {/* Features list with staggered animation */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className={`flex items-center gap-3 transition-all duration-500 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-[#37afae]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-[#37afae]" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners logos with staggered fade-in */}
        <div ref={logoRef} className="mt-20 pt-12 border-t border-gray-200">
          <p 
            className={`text-center text-sm text-gray-500 uppercase tracking-wide font-medium mb-8 transition-all duration-500 ${logoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {[
              { src: '/images/logos/soccocim.jpg', alt: 'SOCOCIM Industries', width: 'w-32' },
              { src: '/images/logos/dangote.png', alt: 'Dangote', width: 'w-28' },
              { src: '/images/logos/ICS.png', alt: 'Industries Chimiques du Sénégal', width: 'w-24' },
              { src: '/images/logos/CSE.png', alt: 'Centre de Suivi Ecologique', width: 'w-32' },
              { src: '/images/logos/AGL.png', alt: 'Africa Global Logistics', width: 'w-28' },
              { src: '/images/logos/agrpole.jpeg', alt: 'Agropole du Sénégal', width: 'w-28' },
            ].map((logo, index) => (
              <div 
                key={index}
                className={`relative h-16 ${logo.width} hover:scale-110 transition-all duration-500 ${logoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
