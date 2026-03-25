'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const magnetic = useMagnetic<HTMLDivElement>();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden mt-9">

      {/* ── Left / Content Panel ── */}
      <div className="relative z-10 flex flex-col justify-center order-2 lg:order-1 w-full lg:w-1/2 bg-gray-900 px-4 sm:px-12 lg:px-16 xl:px-24 pt-10 pb-16 lg:pt-32 lg:pb-20 lg:min-h-screen">

        {/* Badge */}
      

        {/* Headline */}
        <h1
          className={`text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          style={{ transitionDelay: '250ms' }}
        >
          L&apos;expertise scientifique au service de{' '}
          <span className="text-[#37afae]">l&apos;environnement</span>
        </h1>

        {/* Subtext */}
        <p
          className={`text-white/60 text-base lg:text-lg leading-relaxed mb-10 max-w-md transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          style={{ transitionDelay: '400ms' }}
        >
          Surveillance environnementale, études d&apos;impact et conseil QHSE fondés sur
          la rigueur scientifique — au Sénégal et en Afrique de l&apos;Ouest.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap items-center gap-4 mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          style={{ transitionDelay: '550ms' }}
        >
          <div
            ref={magnetic.ref}
            style={magnetic.style}
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
            className="inline-block"
          >
            <Link
              href="/services"
              className="btn-shine inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider transition-colors duration-300 hover:shadow-xl hover:shadow-[#37afae]/25"
            >
              Nos services
              <ArrowRight size={16} />
            </Link>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium transition-colors duration-300"
          >
            Nous contacter
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

       
      </div>

      {/* ── Right / Image Panel ── */}
      <div className="relative order-1 lg:order-2 w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto lg:min-h-screen">

        {/* Ken Burns image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute inset-0 transition-transform duration-[8000ms] ease-out ${isLoaded ? 'scale-110' : 'scale-100'}`}
          >
            <Image
              src="/images/hero/hero1.jpeg"
              alt="BTLABS expertise terrain"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Fade toward left panel on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-gray-900 lg:via-transparent lg:to-transparent" />
          {/* Fade toward content on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 lg:hidden" />
        </div>

        {/* Diagonal divider — desktop only */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 w-20 z-10 bg-gray-900"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-8 lg:left-1/4 lg:-translate-x-1/2 z-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '1200ms' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
