'use client';

import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function VideoSection() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTEwaC0ydi0yaDJ2MnptMTAgMGgtMnYtMmgydjJ6bTAgMTBoLTJ2LTJoMnYyem0tMjAtMjBoLTJ2LTJoMnYyem0wIDEwaC0ydi0yaDJ2MnptMTAtMTBoLTJ2LTJoMnYyem0wIDEwaC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={contentRef}
            className={`transition-all duration-700 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <h2 
              className={`text-3xl md:text-4xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Mesurer, analyser, agir{' '}
              <span className="text-[#37afae]">pour un environnement maîtrisé.</span>
            </h2>
            <p 
              className={`text-gray-300 text-lg leading-relaxed mb-8 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '200ms' }}
            >
              La mission principale de BTLABS est d&apos;accompagner les entreprises et les institutions dans la maîtrise de leurs impacts environnementaux et sanitaires, en fournissant des mesures fiables, des analyses scientifiques rigoureuses et des solutions adaptées pour améliorer durablement leur performance et leur conformité réglementaire.
            </p>
            <div 
              className={`flex items-center gap-4 mb-8 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className={`h-[2px] bg-[#37afae] transition-all duration-1000 ${contentVisible ? 'w-12' : 'w-0'}`} style={{ transitionDelay: '500ms' }} />
              <p className="text-gray-400 italic">Serigne Abdou Lahad YADE, CEO</p>
            </div>
            
            <Link
              href="/a-propos"
              className={`btn-shine inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-500 hover:scale-105 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Qui sommes-nous
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right - Video Player */}
          <div 
            ref={videoRef}
            className={`relative transition-all duration-700 delay-200 ${videoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: 'url("/images/hero/hero3.jpeg")',
                }}
              />
              <div className="absolute inset-0 bg-gray-900/40 transition-opacity duration-300 group-hover:bg-gray-900/30" />
              
              {/* Play Button with pulse animation */}
              <button className="absolute inset-0 flex items-center justify-center group/btn">
                <div className="relative">
                  {/* Pulse rings */}
                  <div className="absolute inset-0 w-20 h-20 bg-white/30 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                  <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover/btn:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-[#37afae] ml-1" fill="currentColor" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
