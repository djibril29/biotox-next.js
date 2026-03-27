import type { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import Equipment from '@/components/services/Equipment';
import Methodology from '@/components/services/Methodology';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Services — EIES, Qualité Air, QHSE au Sénégal',
  description:
    "BTLABS propose des études d'impact environnemental (EIES/PGES), mesures de qualité de l'air, qualité de l'eau, bruit & vibrations, audits QHSE et formations à Dakar, Sénégal.",
  keywords: [
    "études d'impact environnemental Sénégal",
    "qualité de l'air Sénégal",
    "qualité de l'eau Sénégal",
    'EIES Sénégal',
    'PGES Sénégal',
    'QHSE Dakar',
    'audit environnemental Sénégal',
    'bruit vibrations mesure Sénégal',
    'formation environnementale Dakar',
    'surveillance environnementale Sénégal',
    'ISO 14001 Sénégal',
    'ISO 45001 Sénégal',
  ],
  openGraph: {
    title: 'Nos Services | BTLABS - EIES, Qualité Air, QHSE Sénégal',
    description:
      "Études d'impact, qualité de l'air et de l'eau, audits QHSE et formations environnementales au Sénégal.",
    url: 'https://www.btlabsconsulting.com/services',
  },
  alternates: {
    canonical: 'https://www.btlabsconsulting.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <Equipment />
      <Methodology />
      <ServicesCTA />
    </>
  );
}




