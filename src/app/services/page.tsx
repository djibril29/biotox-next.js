import type { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import Equipment from '@/components/services/Equipment';
import Methodology from '@/components/services/Methodology';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Nos Services',
  description: 'Études d\'impact environnemental, qualité de l\'air et de l\'eau, audits de conformité, formation QHSE. Solutions complètes pour votre transition écologique.',
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




