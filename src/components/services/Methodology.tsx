import { Search, Target, CheckCircle } from 'lucide-react';
import { methodology } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  'search': Search,
  'target': Target,
  'check-circle': CheckCircle,
};

export default function Methodology() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notre Méthodologie
          </h2>
          <p className="text-gray-600 text-lg">
            Une démarche structurée et éprouvée pour garantir le succès de vos projets.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {methodology.map((item) => {
            const Icon = iconMap[item.icon] || Search;
            return (
              <div
                key={item.step}
                className="card-elevated p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#37afae]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#37afae]" />
                </div>
                <div className="text-sm font-bold text-[#37afae] mb-2">
                  Étape {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
