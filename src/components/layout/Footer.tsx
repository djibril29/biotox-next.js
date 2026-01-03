'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { siteConfig, contact, services, navigation } from '@/lib/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer className="bg-gray-900 text-gray-300 overflow-hidden">
      {/* Main Footer */}
      <div className="container py-16">
        <div ref={footerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand - Takes 4 columns */}
          <div 
            className={`lg:col-span-4 transition-all duration-700 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Image
                src="/images/logos/logobtlabs.png"
                alt="BTLABS Consulting"
                width={50}
                height={50}
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">BTLABS</span>
                <span className="text-xs font-medium text-gray-400 leading-tight">Consulting</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {siteConfig.description}. Votre partenaire pour une excellence environnementale durable.
            </p>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm font-medium text-white mb-3">Restez informé</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#37afae] transition-colors duration-300"
                />
                <button className="btn-shine px-4 py-2.5 bg-[#37afae] rounded-lg hover:bg-[#2a9d9c] hover:scale-105 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={contact.linkedin}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#37afae] hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={contact.facebook}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#37afae] hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={contact.twitter}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#37afae] hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services - Takes 2 columns */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <h4 className="text-white font-semibold mb-5">Nos Services</h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 5).map((service, index) => (
                <li 
                  key={service.id}
                  className={`transition-all duration-500 ${footerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${200 + index * 50}ms` }}
                >
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-[#37afae] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation - Takes 2 columns */}
          <div 
            className={`lg:col-span-2 transition-all duration-700 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h4 className="text-white font-semibold mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm">
              {navigation.map((item, index) => (
                <li 
                  key={item.name}
                  className={`transition-all duration-500 ${footerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <Link
                    href={item.href}
                    className="hover:text-[#37afae] hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Takes 4 columns */}
          <div 
            className={`lg:col-span-4 transition-all duration-700 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li 
                className={`flex items-start gap-3 transition-all duration-500 ${footerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: '400ms' }}
              >
                <MapPin size={18} className="text-[#37afae] mt-0.5 flex-shrink-0" />
                <span>{contact.address}</span>
              </li>
              <li 
                className={`flex items-start gap-3 transition-all duration-500 ${footerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: '450ms' }}
              >
                <Phone size={18} className="text-[#37afae] mt-0.5 flex-shrink-0" />
                <span>{contact.phone}</span>
              </li>
              <li 
                className={`flex items-start gap-3 transition-all duration-500 ${footerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: '500ms' }}
              >
                <Mail size={18} className="text-[#37afae] mt-0.5 flex-shrink-0" />
                <span>{contact.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} {siteConfig.name}. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#37afae] transition-colors">
                Mentions Légales
              </Link>
              <Link href="#" className="hover:text-[#37afae] transition-colors">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
