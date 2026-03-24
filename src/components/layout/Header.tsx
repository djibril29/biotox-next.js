'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { navigation, siteConfig } from '@/lib/data';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'
      }`}>
        <div className="bg-gray-900/80 backdrop-blur-sm text-white/80 text-sm">
          <div className="container flex items-center justify-between py-2">
            <div className="flex items-center gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+221 77 XXX XX XX</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} />
                <span>Lun - Ven: 08:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'top-0 bg-white shadow-lg' 
          : 'top-10 bg-transparent'
      }`}>
        <nav className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logos/logobtlabs.png"
                alt="BTLABS Consulting"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className={`text-lg font-bold leading-tight transition-colors ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  BTLABS
                </span>
                <span className={`text-xs font-medium leading-tight transition-colors ${
                  scrolled ? 'text-gray-500' : 'text-white/70'
                }`}>
                  Consulting
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    scrolled
                      ? isActive(item.href)
                        ? 'text-[#37afae] bg-[#37afae]/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      : isActive(item.href)
                        ? 'text-white bg-white/20'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all"
              >
                Demander un devis
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu with slide animation */}
        <div 
          className={`lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container py-4 space-y-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-[#37afae]/10 text-[#37afae]'
                    : 'text-gray-600 hover:bg-gray-50'
                } ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
              >
                {item.name}
              </Link>
            ))}
            <div 
              className={`pt-3 transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
              style={{ transitionDelay: mobileMenuOpen ? `${navigation.length * 50}ms` : '0ms' }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-shine block w-full text-center bg-[#37afae] hover:bg-[#2a9d9c] text-white px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
