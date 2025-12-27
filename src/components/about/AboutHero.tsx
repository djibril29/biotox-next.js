import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight as ChevronRightIcon } from 'lucide-react';

export default function AboutHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero1.jpeg"
            alt="Équipe BTLABS"
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
              <span className="text-white">À propos</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Qui sommes-nous ?
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Cabinet spécialisé en surveillance environnementale, études d&apos;impact et conseil QHSE.
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                BTLABS <span className="text-[#37afae]">(BIOTOX LABS CONSULTING)</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BTLABS est un cabinet spécialisé en <strong>surveillance environnementale</strong>, 
                  <strong> études d&apos;impact environnemental et social (EIES/PGES)</strong> et <strong>conseil QHSE</strong>.
                </p>
                <p>
                  Nous accompagnons les industries, les collectivités et les projets de développement 
                  dans la maîtrise de leurs performances environnementales, sanitaires et sociales.
                </p>
                <p>
                  Nous réalisons des mesures professionnelles de la qualité de l&apos;air, de l&apos;eau, 
                  du bruit et des vibrations, en nous appuyant sur des équipements certifiés, 
                  des systèmes d&apos;information géographique (SIG) et des outils de modélisation avancée.
                </p>
                <p>
                  BTLABS propose également des programmes de <strong>formation et de renforcement de capacités</strong>, 
                  alignés sur les standards internationaux ISO, OMS et IFC.
                </p>
                <p>
                  Grâce à une équipe d&apos;experts qualifiés et une approche scientifique rigoureuse, 
                  nous fournissons des solutions fiables, innovantes et conformes aux exigences 
                  réglementaires du Sénégal et de la sous-région.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#37afae] hover:bg-[#2a9d9c] text-white px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all mt-8"
              >
                Contactez-nous
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/services/service-1.jpeg"
                  alt="Équipe BTLABS en action"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-[#37afae] text-white rounded-2xl p-6 max-w-[200px] shadow-xl hidden lg:block">
                <p className="text-3xl font-bold mb-1">15+</p>
                <p className="text-white/80 text-sm">Années d&apos;expertise au Sénégal</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
