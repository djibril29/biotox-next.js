import type { Metadata } from 'next';
import ProjectsHero from '@/components/projects/ProjectsHero';
import FeaturedProject from '@/components/projects/FeaturedProject';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import { client, PROJETS_QUERY, FEATURED_PROJET_QUERY } from '@/lib/sanity';
import type { Projet } from '@/types/projet';

export const metadata: Metadata = {
  title: 'Projets & Réalisations — Études Environnementales Sénégal',
  description:
    "Découvrez les réalisations de BTLABS : études d'impact environnemental et social (EIES), surveillance environnementale, qualité de l'air et QHSE au Sénégal et en Afrique de l'Ouest.",
  keywords: [
    'projets études environnementales Sénégal',
    "réalisations EIES Sénégal",
    'études environnementales et sociales',
    'projets surveillance environnementale',
    "qualité de l'air projets Dakar",
    'QHSE réalisations Sénégal',
    'projets environnement Afrique Ouest',
    'BTLABS réalisations',
  ],
  openGraph: {
    title: 'Projets & Réalisations | BTLABS - Études Environnementales',
    description:
      "Études d'impact, surveillance environnementale et QHSE — nos réalisations au Sénégal et en Afrique de l'Ouest.",
    url: 'https://www.btlabsconsulting.com/projets',
  },
  alternates: {
    canonical: 'https://www.btlabsconsulting.com/projets',
  },
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
