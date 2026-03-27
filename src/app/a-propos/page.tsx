import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import History from '@/components/about/History';
import Values from '@/components/about/Values';
import Expertise from '@/components/about/Expertise';
import Team from '@/components/about/Team';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'À Propos — Expert Environnement Dakar',
  description:
    "Découvrez BTLABS, cabinet conseil spécialisé en environnement à Dakar. 15 ans d'expérience en études d'impact, surveillance environnementale et QHSE au Sénégal et en Afrique de l'Ouest.",
  keywords: [
    'expert environnement Dakar',
    'cabinet environnement Sénégal',
    'bureau études environnementales Dakar',
    'consultant QHSE Sénégal',
    'équipe environnement Dakar',
    'BTLABS à propos',
    'BIOTOX LABS CONSULTING',
  ],
  openGraph: {
    title: 'À Propos | BTLABS - Expert Environnement Dakar',
    description:
      "15 ans d'expertise en environnement, QHSE et études d'impact au Sénégal et en Afrique de l'Ouest.",
    url: 'https://www.btlabsconsulting.com/a-propos',
  },
  alternates: {
    canonical: 'https://www.btlabsconsulting.com/a-propos',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <History />
      <Values />
      <Expertise />
      <Team />
      <AboutCTA />
    </>
  );
}








