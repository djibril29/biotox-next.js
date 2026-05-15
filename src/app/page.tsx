import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';

export const metadata: Metadata = {
  title: 'Cabinet Conseil Environnement Sénégal | BTLABS Consulting',
  description:
    "BTLABS est le cabinet de référence en études d'impact environnemental (EIES), qualité de l'air, QHSE et surveillance environnementale à Dakar, Sénégal et en Afrique de l'Ouest.",
  keywords: [
    'cabinet environnement Sénégal',
    'expert environnement Dakar',
    'études environnementales et sociales',
    "qualité de l'air Sénégal",
    'QHSE Sénégal',
    'EIES Sénégal',
    'PGES Sénégal',
    'surveillance environnementale Dakar',
    'consulting environnement Afrique',
    'études impact environnemental Dakar',
    'BTLABS',
    'BIOTOX LABS CONSULTING',
  ],
  openGraph: {
    title: 'BTLABS - Cabinet Conseil Environnement Sénégal',
    description:
      "Expert en études d'impact environnemental, qualité de l'air et QHSE au Sénégal et en Afrique de l'Ouest.",
    url: 'https://www.btlabsconsulting.com',
  },
  alternates: {
    canonical: 'https://www.btlabsconsulting.com',
  },
};
import VideoSection from '@/components/home/VideoSection';
import Marquee from '@/components/ui/Marquee';
import Domains from '@/components/home/Domains';
import CTABanner from '@/components/home/CTABanner';
import FeatureSection from '@/components/home/FeatureSection';
import Testimonials from '@/components/home/Testimonials';
import ProgressSection from '@/components/home/ProgressSection';
import LatestNews from '@/components/home/LatestNews';
import ZoneIntervention from '@/components/home/ZoneIntervention';
import CTA from '@/components/home/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <VideoSection />
      <Domains />
      <CTABanner />
      <FeatureSection />
      <ZoneIntervention />
      <Testimonials />
      <ProgressSection />
      <LatestNews />
      <CTA />
    </>
  );
}
