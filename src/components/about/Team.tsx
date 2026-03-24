'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface TeamMember {
  name: string;
  position: string;
  expertise: string;
  image?: string;
}

const members: TeamMember[] = [
  {
    name: 'Abdoul Lahad Yade',
    position: 'CEO',
    expertise: 'Expert en Toxicologie',
    image: '/images/team/ceo.jpeg',
  },
  {
    name: 'Abdoul Aziz Ngom',
    position: 'Expert',
    expertise: 'Expert en QSHE',
    image: '/images/team/aziz.jpeg',
  },
  {
    name: 'El Hadji Djibril Ngom',
    position: 'Responsable Digitale',
    expertise: 'Digital & Innovation',
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

        {/* Team Grid — 3 cards centred */}
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {members.map((member, index) => (
            <div
              key={index}
              className={`card overflow-hidden group card-lift transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {member.image ? (
                  <>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#37afae]/20 to-[#2a9d9c]/10">
                    <div className="w-24 h-24 rounded-full bg-[#37afae]/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-[#37afae]">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 group-hover:text-[#37afae] transition-colors duration-300">
                  {member.name}
                </h3>
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
