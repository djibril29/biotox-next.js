import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
    <html lang="fr" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
