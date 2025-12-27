'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Activity, 
  Wind, 
  Volume2, 
  Vibrate, 
  MapPin, 
  Map, 
  Cloud, 
  Droplets,
  FlaskConical,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const equipment = [
  {
    number: '1',
    icon: Activity,
    title: 'Stations de mesure de la qualité de l\'air',
    subtitle: 'SGA, Zwinsoft, autres plateformes',
    description: 'Stations intelligentes permettant la mesure continue des polluants atmosphériques (PM2.5, PM10, SO₂, NO₂, CO, COV…) avec enregistrement automatique, transmission cloud, alarmes, analyse des tendances et reporting.',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80',
  },
  {
    number: '2',
    icon: Wind,
    title: 'Analyseurs de gaz & poussières',
    subtitle: 'ENVEA, SGA, Sauermann',
    description: 'Analyseurs haute précision pour les gaz réglementés et particules fines. Analyse des rejets de combustion : CO, CO₂, O₂, NOx, rendement énergétique, pertes à la cheminée. Optimisation énergétique et conformité ISO.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
  },
  {
    number: '3',
    icon: Volume2,
    title: 'Sonomètres & analyse du bruit',
    subtitle: 'PCE 322A, AWA, Oceanus, Sonichek Pro',
    description: 'Mesure du bruit ambiant et des postes de travail (dB(A), dB(C), Fast/Slow). Sonomètres intégrateurs classe 1, dataloggers 24h, logiciels d\'analyse acoustique. Traitement ISO 9612, calcul du niveau d\'exposition.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    number: '4',
    icon: Vibrate,
    title: 'Vibromètre / Vibrations industrielles',
    subtitle: 'Conformité ISO 2631 & ISO 4866',
    description: 'Outil spécialisé pour mesurer les vibrations mécaniques sur les machines, structures, zones industrielles et chantiers. Diagnostic préventif, sécurité des structures, détection d\'anomalies mécaniques.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
  },
  {
    number: '5',
    icon: MapPin,
    title: 'GPS & Drones',
    subtitle: 'Géolocalisation haute précision',
    description: 'GPS différentiel pour relevé de coordonnées exactes des points de mesure, zones sensibles, sources d\'émissions. Drones pour photogrammétrie, orthophotos, surveillance des sites, cartographie du relief et modélisation 3D.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80',
  },
  {
    number: '6',
    icon: Map,
    title: 'Systèmes d\'Information Géographique (SIG)',
    subtitle: 'QGIS, ArcGIS',
    description: 'Cartographie avancée pour intégrer les mesures de terrain, analyser les données spatiales, produire des cartes de pollution, zones d\'impact, roses des vents, plans de gestion. Supports EIES/PGES et modélisation environnementale.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    number: '7',
    icon: Cloud,
    title: 'Modélisation atmosphérique',
    subtitle: 'AERMOD, CALPUFF, ADMS',
    description: 'Simulation de la dispersion des polluants, études d\'impact (fumées, poussières, gaz), prévision des concentrations selon la météo. Aide à la décision pour réduire les émissions.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
  },
  {
    number: '8',
    icon: Droplets,
    title: 'Analyseurs d\'eau',
    subtitle: 'PCE PHD 1 et équipements associés',
    description: 'Sondes multiparamètres et spectrophotomètres pour mesurer pH, conductivité, turbidité, oxygène dissous, température. Contrôle qualité eau potable, industrielle et rejets. Conformité OMS et normes nationales.',
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80',
  },
  {
    number: '9',
    icon: FlaskConical,
    title: 'Instruments de laboratoire',
    subtitle: 'Équipements complémentaires',
    description: 'Balances de précision (PM10/PM2.5 - pesée des filtres), pompes d\'échantillonnage, supports de filtres, accessoires pour prélèvement d\'air, eau et sols. Analyses en laboratoire et vérification des niveaux de polluants.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
  },
];

export default function Equipment() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      return () => scrollContainer.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 400;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -cardWidth : cardWidth);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section-padding bg-gray-900 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Des équipements <span className="text-[#37afae]">modernes et certifiés</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              BIOTOX LABS CONSULTING dispose d&apos;un parc d&apos;équipements garantissant des mesures 
              précises et conformes aux standards internationaux (ISO, OMS, IFC, NS 05062).
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all cursor-pointer ${
                canScrollLeft 
                  ? 'bg-white/20 hover:bg-white/30' 
                  : 'bg-white/5 opacity-50 cursor-not-allowed'
              }`}
              aria-label="Défiler à gauche"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all cursor-pointer ${
                canScrollRight 
                  ? 'bg-[#37afae] hover:bg-[#2a9d9c]' 
                  : 'bg-[#37afae]/50 opacity-50 cursor-not-allowed'
              }`}
              aria-label="Défiler à droite"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 px-4 md:px-8 lg:px-16"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory'
        }}
      >
        {equipment.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.number}
              className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl overflow-hidden group"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-[#37afae]" />
                  </div>
                  <span className="text-white font-bold text-lg">#{item.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#37afae] font-medium mb-3">{item.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Dots */}
      <div className="container mt-6">
        <div className="flex justify-center gap-2">
          {equipment.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = 400;
                  scrollRef.current.scrollTo({
                    left: index * cardWidth,
                    behavior: 'smooth',
                  });
                }
              }}
              className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-colors"
              aria-label={`Aller à l'équipement ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Certification Banner */}
      <div className="container mt-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-wrap items-center justify-center gap-8">
          <span className="text-white/70 text-sm uppercase tracking-wide">Conformité :</span>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-white font-bold text-lg">ISO</span>
            <span className="text-white/30">|</span>
            <span className="text-white font-bold text-lg">OMS</span>
            <span className="text-white/30">|</span>
            <span className="text-white font-bold text-lg">IFC</span>
            <span className="text-white/30">|</span>
            <span className="text-white font-bold text-lg">NS 05062</span>
          </div>
        </div>
      </div>
    </section>
  );
}
