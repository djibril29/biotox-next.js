import { Microscope, Lightbulb, Shield, Heart, Users } from 'lucide-react';
import { values } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  microscope: Microscope,
  lightbulb: Lightbulb,
  shield: Shield,
  heart: Heart,
  users: Users,
};

export default function Values() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Valeurs
          </h2>
          <p className="text-gray-600 text-lg">
            Les principes qui guident chacune de nos actions.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon] || Shield;
            return (
              <div
                key={index}
                className="card p-6 text-center group hover:border-[#37afae]/30"
              >
                <div className="w-14 h-14 bg-[#37afae]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#37afae]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#37afae]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
