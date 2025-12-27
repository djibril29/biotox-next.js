'use client';

import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wLTEwaC0ydi0yaDJ2MnptMTAgMGgtMnYtMmgydjJ6bTAgMTBoLTJ2LTJoMnYyem0tMjAtMjBoLTJ2LTJoMnYyem0wIDEwaC0ydi0yaDJ2MnptMTAtMTBoLTJ2LTJoMnYyem0wIDEwaC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Mesurer, analyser, agir{' '}
              <span className="text-[#37afae]">pour un environnement maîtrisé.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              La mission principale de BTLABS est d'accompagner les entreprises et les institutions dans la maîtrise de leurs impacts environnementaux et sanitaires, en fournissant des mesures fiables, des analyses scientifiques rigoureuses et des solutions adaptées pour améliorer durablement leur performance et leur conformité réglementaire.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-[#37afae]" />
              <p className="text-gray-400 italic">Serigne Abdou Lahad YADE, CEO</p>
            </div>
            
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all"
            >
              Qui sommes-nous
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right - Video Player */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url("/images/hero/hero3.jpeg")',
                }}
              />
              <div className="absolute inset-0 bg-gray-900/40" />
              
              {/* Play Button */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-[#37afae] ml-1" fill="currentColor" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
