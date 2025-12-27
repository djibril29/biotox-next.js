import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import History from '@/components/about/History';
import Values from '@/components/about/Values';
import Expertise from '@/components/about/Expertise';
import Team from '@/components/about/Team';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'À Propos',
  description: 'Découvrez BTLABS, votre partenaire en surveillance environnementale au Sénégal. Notre histoire, nos valeurs et notre équipe d\'experts.',
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




