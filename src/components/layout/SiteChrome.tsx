'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from '@/components/ui/CustomCursor';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) return <>{children}</>;

  return (
    <>
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
