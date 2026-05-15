'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from '@/components/ui/CustomCursor';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  useEffect(() => {
    const html = document.documentElement;
    if (isStudio) {
      html.removeAttribute('data-custom-cursor');
    } else {
      html.setAttribute('data-custom-cursor', '');
    }
    return () => html.removeAttribute('data-custom-cursor');
  }, [isStudio]);

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
