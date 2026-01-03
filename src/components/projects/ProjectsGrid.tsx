'use client';

import Image from 'next/image';
import { MapPin, Calendar } from 'lucide-react';
import { projects } from '@/lib/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProjectsGrid() {
  const otherProjects = projects.filter((p) => !p.featured);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Autres Réalisations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez notre portefeuille de projets dans différents secteurs.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              className={`card overflow-hidden group card-lift transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-xs">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} />
                      {project.location.split(',')[0]}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-medium text-[#37afae] uppercase tracking-wide mb-2">
                  {project.sector}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#37afae] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.services.slice(0, 2).map((service, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-[#37afae]/10 hover:text-[#37afae] transition-colors duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
