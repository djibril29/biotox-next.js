import Image from 'next/image';
import { Check } from 'lucide-react';

const features = [
  'Équipements certifiés et calibrés',
  'Équipe pluridisciplinaire d\'experts',
  'Conformité aux normes ISO, OMS et IFC',
  'Suivi en temps réel et reporting cloud',
];

export default function FeatureSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/services/service-1.jpeg"
                alt="Équipe BTLABS"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px] hidden lg:block">
              <div className="text-3xl font-bold text-[#37afae] mb-1">15+</div>
              <p className="text-sm text-gray-600">Années d&apos;expérience en Afrique de l&apos;Ouest</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              La solution intelligente pour vos{' '}
              <span className="text-[#37afae]">projets durables</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              BTLABS combine expertise technique de pointe et connaissance approfondie 
              du contexte régional pour vous offrir des solutions environnementales 
              sur mesure.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#37afae]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#37afae]" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partners logos */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 uppercase tracking-wide font-medium mb-8">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale">
            {['SOCOCIM', 'ICS', 'CSE', 'Banque Mondiale', 'CIRAD'].map((name, index) => (
              <div key={index} className="text-xl font-bold text-gray-400">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
