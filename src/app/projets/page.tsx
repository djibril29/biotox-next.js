import type { Metadata } from 'next';
import ProjectsHero from '@/components/projects/ProjectsHero';
import FeaturedProject from '@/components/projects/FeaturedProject';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import { client, PROJETS_QUERY, FEATURED_PROJET_QUERY } from '@/lib/sanity';
import type { Projet } from '@/types/projet';

export const metadata: Metadata = {
  title: 'Nos Projets & Réalisations',
  description: "Découvrez nos études d'impact environnemental, projets de surveillance et réalisations au Sénégal et en Afrique de l'Ouest.",
};

export default async function ProjectsPage() {
  const [projets, featured]: [Projet[], Projet] = await Promise.all([
    client.fetch(PROJETS_QUERY),
    client.fetch(FEATURED_PROJET_QUERY),
  ]);

  return (
    <>
      <ProjectsHero />
      {featured && <FeaturedProject projet={featured} />}
      <ProjectsGrid projets={projets} />
      <ProjectsCTA />
    </>
  );
}
