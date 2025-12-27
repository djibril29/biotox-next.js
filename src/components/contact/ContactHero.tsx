import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero2.jpeg"
          alt="Contact BTLABS"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
        <ChevronLeft size={24} />
      </button>
      <button className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all">
        <ChevronRightIcon size={24} />
      </button>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRightIcon size={14} />
            <span className="text-white">Contact</span>
          </nav>

          <p className="text-white/80 text-lg italic mb-4">
            Nous sommes à votre écoute.
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Prêt à discuter de votre projet ?
          </h1>
          <p className="text-white/70 text-lg mb-10 max-w-xl">
            Notre équipe d&apos;experts est disponible pour répondre à vos questions 
            et vous accompagner dans vos projets environnementaux.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+221770000000"
              className="inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all"
            >
              Appelez-nous
              <ArrowRight size={18} />
            </a>
            <a
              href="mailto:contact@btlabs.sn"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all border border-white/30"
            >
              Envoyez un email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
