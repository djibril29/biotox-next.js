import Image from 'next/image';
import { Check } from 'lucide-react';

const expertises = [
  'Études d\'Impact Environnemental et Social',
  'Audits de conformité réglementaire',
  'Restauration écologique et reboisement',
  'Formation et renforcement des capacités',
];

export default function Expertise() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Expertise
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Une équipe pluridisciplinaire combinant expertise scientifique, 
              connaissance terrain et maîtrise des standards internationaux.
            </p>

            <ul className="space-y-4">
              {expertises.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#37afae]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#37afae]" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/services/service-1.jpeg"
                alt="Équipe d'experts BTLABS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
