'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import ProjectCard from '@/components/ui/ProjectCard';
import type { Projet } from '@/types/projet';

interface ProjectsGridProps {
  projets: Projet[];
}

export default function ProjectsGrid({ projets }: ProjectsGridProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-padding bg-gray-50 overflow-hidden">
      <div className="container">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explorez notre portefeuille de projets dans différents secteurs.
          </p>
        </div>

        {projets.length === 0 ? (
          <p className="text-center text-gray-400 py-20">Aucun projet disponible pour le moment.</p>
        ) : (
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projets.map((projet, index) => (
              <div
                key={projet._id}
                className={`transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectCard projet={projet} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
