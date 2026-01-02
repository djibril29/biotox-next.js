import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactSection from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez BTLABS pour vos projets d\'études d\'impact environnemental, audits et formations QHSE au Sénégal.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}






