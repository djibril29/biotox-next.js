'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { team } from '@/lib/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const fullTeam = [
  ...team,
  {
    name: 'Dr. Aminata Diallo',
    position: 'Directrice Scientifique',
    expertise: 'Écologie & Biodiversité',
    bio: 'Docteure en écologie avec 12 ans d\'expérience en Afrique de l\'Ouest.',
    image: '/images/hero/hero1.jpeg',
    linkedin: '#',
  },
  {
    name: 'Moussa Ndiaye',
    position: 'Responsable Technique',
    expertise: 'Qualité de l\'Air',
    bio: 'Ingénieur en surveillance atmosphérique et monitoring.',
    image: '/images/hero/hero2.jpeg',
    linkedin: '#',
  },
  {
    name: 'Fatou Sow',
    position: 'Chargée de Projets',
    expertise: 'EIES & Relations',
    bio: 'Experte en consultation des parties prenantes.',
    image: '/images/hero/hero3.jpeg',
    linkedin: '#',
  },
];

export default function Team() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Équipe
          </h2>
          <p className="text-gray-600 text-lg">
            Des experts passionnés par la durabilité.
          </p>
        </div>

        {/* Team Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fullTeam.map((member, index) => (
            <div 
              key={index} 
              className={`card overflow-hidden group card-lift transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <a
                  href={member.linkedin}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#37afae] hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 group-hover:text-[#37afae] transition-colors duration-300">{member.name}</h3>
                <p className="text-[#37afae] text-sm font-medium mb-1">{member.position}</p>
                <p className="text-gray-500 text-xs">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
