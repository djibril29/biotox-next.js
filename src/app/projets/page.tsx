import type { Metadata } from 'next';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectFilters from '@/components/projects/ProjectFilters';
import FeaturedProject from '@/components/projects/FeaturedProject';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsCTA from '@/components/projects/ProjectsCTA';

export const metadata: Metadata = {
  title: 'Nos Projets & Réalisations',
  description: 'Découvrez nos études d\'impact environnemental, projets de surveillance et réalisations au Sénégal et en Afrique de l\'Ouest.',
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <FeaturedProject />
      <ProjectsGrid />
      <ProjectsCTA />
    </>
  );
}




