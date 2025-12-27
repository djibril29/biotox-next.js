import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';


export default function ProjectsHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero3.jpeg"
          alt="Projets BTLABS"
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
            <span className="text-white">Nos projets</span>
          </nav>

          <p className="text-white/80 text-lg italic mb-4">
            Des projets concrets pour un impact mesurable.
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Nos Réalisations & Études d&apos;Impact
          </h1>
          <p className="text-white/70 text-lg mb-10 max-w-xl">
            Découvrez comment nous accompagnons nos partenaires dans la transition 
            écologique à travers des projets concrets et mesurables.
          </p>

          {/* Stats */}
        

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all"
          >
            Discuter de votre projet
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
