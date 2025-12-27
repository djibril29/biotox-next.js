import Image from 'next/image';
import { Target, FlaskConical, Map, FileText, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Mesures de terrain précises et traçables',
    description: 'Données collectées à l\'aide d\'équipements certifiés, calibrés et conformes aux normes internationales.',
  },
  {
    icon: FlaskConical,
    title: 'Analyse scientifique et interprétation experte',
    description: 'Résultats analysés par des spécialistes QHSE pour une lecture claire des enjeux et des risques.',
  },
  {
    icon: Map,
    title: 'Cartographie et modélisation des impacts',
    description: 'Visualisation des zones d\'impact, dispersion des polluants et scénarios d\'évolution environnementale.',
  },
  {
    icon: FileText,
    title: 'Rapports clairs et exploitables',
    description: 'Livrables structurés facilitant la prise de décision, la communication avec les parties prenantes et la conformité réglementaire.',
  },
];

export default function ProgressSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Des données fiables pour des décisions environnementales éclairées
          </h2>
          <p className="text-gray-600 text-lg">
            Dans les projets industriels et de développement, la qualité des décisions dépend directement de la fiabilité des données.
            BTLABS produit des diagnostics environnementaux précis et exploitables, basés sur des mesures de terrain, des analyses scientifiques et des outils de modélisation avancés, afin d&apos;orienter efficacement vos choix stratégiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Points clés
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#37afae]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#37afae]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/services/service-2.jpeg"
                alt="Dashboard de suivi"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#37afae]/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#37afae] rounded-full" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Conformité</p>
                  <p className="font-bold text-gray-900">98%</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-800/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-blue-800" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Amélioration</p>
                  <p className="font-bold text-gray-900">+25%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
