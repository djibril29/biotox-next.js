import Image from 'next/image';
import { Eye, Target, CheckCircle } from 'lucide-react';

const ambitions = [
  'Développer des centres d\'excellence en surveillance environnementale',
  'Renforcer l\'innovation technologique (modélisation, data, capteurs intelligents)',
  'Accompagner les industries et les territoires vers des pratiques durables et conformes aux standards internationaux',
  'Former une nouvelle génération d\'experts QHSE',
  'Contribuer durablement à l\'amélioration de la qualité de vie des populations grâce à des diagnostics fiables et des solutions opérationnelles',
];

export default function History() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Vision */}
          <div className="card-elevated p-8 lg:p-10">
            <div className="w-14 h-14 bg-[#37afae]/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-[#37afae]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Notre Vision
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Devenir une <strong>référence nationale et sous-régionale</strong> en surveillance 
              environnementale et en conseil QHSE, en proposant des solutions innovantes, 
              fiables et scientifiquement rigoureuses au service de la protection de 
              l&apos;environnement, de la santé publique et du développement durable.
            </p>
          </div>

          {/* Ambition */}
          <div className="card-elevated p-8 lg:p-10">
            <div className="w-14 h-14 bg-blue-800/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-blue-800" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Notre Ambition
            </h2>
            <p className="text-gray-600 mb-6">
              S&apos;imposer comme un <strong>acteur clé de la transition environnementale en Afrique de l&apos;Ouest</strong> en :
            </p>
            <ul className="space-y-3">
              {ambitions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#37afae] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Banner */}
        <div className="mt-12 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/services/service-2.jpeg"
            alt="BTLABS - Vision pour l'avenir"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent flex items-center">
            <div className="container">
              <div className="max-w-lg text-white">
                <p className="text-2xl md:text-3xl font-bold leading-tight">
                  Ensemble, construisons un avenir <span className="text-[#37afae]">durable</span> pour le Sénégal et l&apos;Afrique de l&apos;Ouest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
