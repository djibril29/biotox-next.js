'use client';

import Image from 'next/image';
import { 
  Pickaxe, 
  Factory, 
  Wheat, 
  FlaskConical, 
  HardHat, 
  Droplets, 
  Zap, 
  Building2, 
  GraduationCap 
} from 'lucide-react';

const domains = [
  {
    id: 'mines',
    number: '1',
    icon: Pickaxe,
    title: 'Industries extractives et minières',
    description: 'Exploitations minières, carrières, traitement des minerais, unités chimiques associées.',
    prestations: [
      'Suivi environnemental',
      'Qualité de l\'air et de l\'eau',
      'Études d\'impact',
      'Bruit, poussières, métaux lourds',
      'Audits HSE',
    ],
    image: '/images/services/service-1.jpeg',
  },
  {
    id: 'ciment',
    number: '2',
    icon: Factory,
    title: 'Cimenteries et industries des matériaux',
    description: 'SOCOCIM, Dangote, ICS, briqueteries, chaux, matériaux de construction.',
    prestations: [
      'Monitoring poussières (PM10, PM2.5, TSP)',
      'NOx, SO₂',
      'Bruit, vibrations',
      'EIES',
      'Plan de gestion environnementale',
    ],
    image: '/images/services/service-2.jpeg',
  },
  {
    id: 'agro',
    number: '3',
    icon: Wheat,
    title: 'Agro-industrie & agroalimentaire',
    description: 'Agropoles, usines de transformation, industries alimentaires, unités de conditionnement.',
    prestations: [
      'Qualité de l\'eau',
      'Air ambiant',
      'Nuisances sonores',
      'Maîtrise des risques',
      'Formations',
    ],
    image: '/images/projects/project-1.jpeg',
  },
  {
    id: 'chimie',
    number: '4',
    icon: FlaskConical,
    title: 'Secteur chimique & pétrochimique',
    description: 'Acide phosphorique, engrais, produits chimiques, hydrocarbures, dépôts et terminaux.',
    prestations: [
      'Mesures de polluants',
      'Monitoring en continu',
      'Évaluation des risques',
      'Conformité réglementaire',
      'EIES avancées',
    ],
    image: '/images/services/service-1.jpeg',
  },
  {
    id: 'btp',
    number: '5',
    icon: HardHat,
    title: 'Infrastructure & BTP',
    description: 'Chantiers de construction, ouvrages publics, voiries, plateformes industrielles.',
    prestations: [
      'Suivi des poussières',
      'Bruit',
      'Évaluation des impacts temporaires',
    ],
    image: '/images/projects/project-2.jpeg',
  },
  {
    id: 'eau',
    number: '6',
    icon: Droplets,
    title: 'Secteur eau & assainissement',
    description: 'Stations d\'épuration, réseaux d\'eau potable, analyse physico-chimique, qualité sanitaire.',
    prestations: [
      'Analyses d\'eau',
      'Conformité OMS/NS',
      'Audits',
      'Surveillance continue',
      'Études hydriques',
    ],
    image: '/images/services/service-2.jpeg',
  },
  {
    id: 'energie',
    number: '7',
    icon: Zap,
    title: 'Énergie & installations techniques',
    description: 'Centrales électriques, groupes, installations thermiques.',
    prestations: [
      'Combustion',
      'NO₂/CO/SO₂',
      'Efficacité énergétique',
      'Évaluation des nuisances',
      'Conformité ISO',
    ],
    image: '/images/hero/hero3.jpeg',
  },
  {
    id: 'collectivites',
    number: '8',
    icon: Building2,
    title: 'Collectivités, institutions et zones urbaines',
    description: 'Municipalités, zones côtières, zones industrielles, ports, aéroports.',
    prestations: [
      'Cartographie de la pollution',
      'Campagnes de mesures',
      'Plans d\'amélioration',
      'Formation du personnel',
    ],
    image: '/images/projects/project-1.jpeg',
  },
  {
    id: 'formation',
    number: '9',
    icon: GraduationCap,
    title: 'Formation et renforcement de capacités',
    description: 'Organismes publics, privés, ONG, industries.',
    prestations: [
      'Formations qualité de l\'air et de l\'eau',
      'Formations bruit',
      'ISO 9001/14001/45001',
      'Sécurité au travail',
      'Utilisation des équipements',
    ],
    image: '/images/services/service-1.jpeg',
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            9 Secteurs d&apos;Expertise
          </h2>
          <p className="text-gray-600">
            Une couverture complète des industries et collectivités.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                id={domain.id}
                className="card overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={domain.image}
                    alt={domain.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-[#37afae]" />
                    </div>
                    <span className="text-white/80 text-sm font-medium">#{domain.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#37afae] transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {domain.description}
                  </p>

                  {/* Prestations */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[#37afae] uppercase tracking-wide mb-2">
                      Prestations
                    </p>
                    <ul className="space-y-1.5">
                      {domain.prestations.slice(0, 4).map((prestation, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 bg-[#37afae] rounded-full mt-1.5 flex-shrink-0" />
                          {prestation}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
