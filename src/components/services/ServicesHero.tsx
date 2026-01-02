import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight as ChevronRightIcon } from 'lucide-react';

export default function ServicesHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero2.jpeg"
            alt="Services environnementaux BTLABS"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="container relative z-10 pt-20">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <ChevronRightIcon size={14} />
              <span className="text-white">Nos services</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Nos Domaines d&apos;Intervention
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              QHSE, surveillance environnementale et accompagnement des industries.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              <strong className="text-gray-900">BIOTOX LABS CONSULTING</strong> intervient dans plusieurs secteurs clés 
              liés à la qualité, l&apos;hygiène, la sécurité, la santé et l&apos;environnement. 
              Nos domaines d&apos;activités couvrent l&apos;ensemble des secteurs où la gestion 
              environnementale et la maîtrise des impacts environnementaux sont essentielles.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all mt-8"
            >
              Demander un devis
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
