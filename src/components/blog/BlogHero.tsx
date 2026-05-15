'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BlogHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[75vh] overflow-hidden">
      <div className="absolute inset-0 flex flex-col lg:flex-row pointer-events-none">
        <div className="order-2 lg:order-1 flex-1 bg-gray-900" />
        <div className="order-1 lg:order-2 flex-1 relative overflow-hidden">
          <div className={`absolute inset-0 transition-transform duration-[8000ms] ease-out ${isLoaded ? 'scale-110' : 'scale-100'}`}>
            <Image
              src="/images/hero/hero2.jpeg"
              alt="Blog BTLABS"
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

      <div className="container relative z-10 flex flex-col lg:flex-row min-h-[75vh]">
        <div className="order-2 lg:order-1 w-full lg:w-1/2 flex flex-col justify-center pt-32 pb-16">
          <nav
            className={`flex items-center gap-2 text-sm text-white/60 mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRightIcon size={14} />
            <span className="text-white">Blog</span>
          </nav>

          <h1
            className={`text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '250ms' }}
          >
            Actualités &<br />
            <span className="text-[#37afae]">Expertise environnementale</span>
          </h1>

          <p
            className={`text-white/60 text-base lg:text-lg leading-relaxed mb-10 max-w-md transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Restez informé des dernières tendances, réglementations et actualités du secteur environnemental.
          </p>

          <div
            className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '550ms' }}
          >
            <Link
              href="/contact"
              className="btn-shine inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider transition-colors duration-300 hover:shadow-xl hover:shadow-[#37afae]/25"
            >
              Nous contacter
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 w-full lg:w-1/2 h-48 sm:h-64 lg:h-auto" />
      </div>
    </section>
  );
}
