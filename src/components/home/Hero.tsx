'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero1.jpeg"
          alt="Équipe BTLABS en consultation"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
        <ChevronLeft size={24} />
      </button>
      <button className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          <p className="text-white/80 text-lg italic mb-4">
            L&apos;expertise environnementale à votre service.
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          L&apos;expertise scientifique au service de l&apos;environnement et de la santé
          </h1>
          <p className="text-white/70 text-lg mb-10 max-w-xl">
          Surveillance environnementale, études d&apos;impact et conseil QHSE fondés sur la rigueur scientifique.
          Nous accompagnons les industries, collectivités et projets de développement vers la conformité réglementaire et la performance durable.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all"
          >
            Voir nos services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
