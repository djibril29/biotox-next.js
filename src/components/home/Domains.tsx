import { Activity, FileText, FlaskConical, Map, Shield, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Activity,
    title: 'Surveillance & Monitoring',
    description: 'Mesures continues ou ponctuelles de la qualité de l\'air, de l\'eau, du bruit et des vibrations pour suivre l\'état de l\'environnement.',
    href: '/services#monitoring',
    color: 'primary',
  },
  {
    icon: FileText,
    title: 'Études d\'Impact (EIES/PGES)',
    description: 'Études réglementaires complètes pour identifier, évaluer et maîtriser les impacts environnementaux et sociaux des projets.',
    href: '/services#eies',
    color: 'teal',
  },
  {
    icon: FlaskConical,
    title: 'Analyses Spécialisées',
    description: 'Analyses techniques de la qualité de l\'air, de l\'eau, du bruit et des vibrations avec équipements certifiés.',
    href: '/services#analyses',
    color: 'sky',
  },
  {
    icon: Map,
    title: 'Cartographie & Modélisation',
    description: 'Cartographie des pollutions via SIG, drones et GPS, combinée à la modélisation atmosphérique et simulation.',
    href: '/services#cartographie',
    color: 'violet',
  },
  {
    icon: Shield,
    title: 'Audit & Conseil QHSE',
    description: 'Audits environnementaux et accompagnement QHSE pour assurer la conformité réglementaire et la performance.',
    href: '/services#audit',
    color: 'teal',
  },
  {
    icon: GraduationCap,
    title: 'Formation & Capacitation',
    description: 'Formations techniques sur la surveillance environnementale, normes ISO, sécurité au travail et équipements.',
    href: '/services#formation',
    color: 'amber',
  },
];

const colorClasses: Record<string, { bg: string; icon: string; hover: string }> = {
  primary: { bg: 'bg-blue-50', icon: 'text-blue-800', hover: 'group-hover:bg-blue-100' },
  sky: { bg: 'bg-sky-50', icon: 'text-sky-600', hover: 'group-hover:bg-sky-100' },
  teal: { bg: 'bg-[#37afae]/10', icon: 'text-[#37afae]', hover: 'group-hover:bg-[#37afae]/20' },
  violet: { bg: 'bg-violet-50', icon: 'text-violet-600', hover: 'group-hover:bg-violet-100' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', hover: 'group-hover:bg-amber-100' },
};

export default function Domains() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos services
          </h2>
          <p className="text-gray-600 text-lg">
            Des solutions complètes pour accompagner vos projets de la conception 
            jusqu&apos;au suivi opérationnel.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];
            return (
              <Link
                key={index}
                href={service.href}
                className="group card p-8 hover:border-gray-200"
              >
                <div className={`w-14 h-14 ${colors.bg} ${colors.hover} rounded-xl flex items-center justify-center mb-5 transition-colors`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#37afae] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
