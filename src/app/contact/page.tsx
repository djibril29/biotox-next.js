import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactSection from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact — Cabinet Environnement Dakar',
  description:
    "Contactez BTLABS, votre expert en environnement à Dakar. Études d'impact (EIES), qualité de l'air, audits QHSE et formations environnementales au Sénégal.",
  keywords: [
    'contacter expert environnement Dakar',
    'cabinet conseil environnement Dakar contact',
    'BTLABS contact',
    'devis études environnementales Sénégal',
    'expert QHSE Dakar contact',
    'bureau environnement Dakar',
    'Villa Nabou Dakar',
  ],
  openGraph: {
    title: 'Contact | BTLABS - Expert Environnement Dakar',
    description:
      "Contactez notre cabinet à Dakar pour vos études d'impact, audits QHSE et formations environnementales.",
    url: 'https://www.btlabsconsulting.com/contact',
  },
  alternates: {
    canonical: 'https://www.btlabsconsulting.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}








