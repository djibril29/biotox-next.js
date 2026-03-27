import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/layout/SiteChrome';
import JsonLd from '@/components/JsonLd';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.btlabsconsulting.com'),
  title: {
    default: 'BTLABS - Cabinet Conseil Environnement Sénégal',
    template: '%s | BTLABS Consulting',
  },
  description: 'Cabinet spécialisé en études d\'impact environnemental et social (EIES/PGES), qualité de l\'air, QHSE et surveillance environnementale au Sénégal et en Afrique de l\'Ouest.',
  keywords: [
    'études environnementales et sociales',
    'cabinet environnement Sénégal',
    'expert environnement Dakar',
    'qualité de l\'air Sénégal',
    'QHSE Afrique de l\'Ouest',
    'EIES Sénégal',
    'PGES Sénégal',
    'études impact environnemental',
    'surveillance environnementale',
    'audit environnemental Dakar',
    'consulting environnement',
    'BTLABS',
  ],
  authors: [{ name: 'BTLABS Consulting' }],
  openGraph: {
    title: 'BTLABS - Cabinet Conseil Environnement Sénégal',
    description: 'Expert en études d\'impact environnemental, qualité de l\'air, QHSE et surveillance environnementale au Sénégal.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.btlabsconsulting.com',
    siteName: 'BTLABS Consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BTLABS - Cabinet Conseil Environnement Sénégal',
    description: 'Expert en études d\'impact environnemental, qualité de l\'air et QHSE au Sénégal.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={dmSans.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <JsonLd />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
