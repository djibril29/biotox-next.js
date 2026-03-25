import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/layout/SiteChrome';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'BTLABS - BIOTOX LABS CONSULTING',
    template: '%s | BTLABS',
  },
  description: 'Structure spécialisée dans la surveillance environnementale et les études d\'impact (EIES/PGES). Accompagnement des industries vers l\'excellence environnementale au Sénégal et en Afrique de l\'Ouest.',
  keywords: ['environnement', 'consulting', 'EIES', 'PGES', 'qualité air', 'qualité eau', 'bruit', 'vibrations', 'Sénégal', 'Afrique', 'QHSE'],
  authors: [{ name: 'BTLABS' }],
  openGraph: {
    title: 'BTLABS - BIOTOX LABS CONSULTING',
    description: 'Expertise environnementale pour un avenir durable',
    type: 'website',
    locale: 'fr_FR',
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
