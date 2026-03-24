import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

const articles = [
  {
    title: 'Nouvelles normes de qualité de l\'air au Sénégal',
    excerpt: 'Tout ce que vous devez savoir sur les récentes mises à jour réglementaires.',
    image: '/images/services/service-1.jpeg',
    date: '12 Déc 2024',
    author: 'Dr. Ngom',
    category: 'Réglementation',
  },
  {
    title: 'Partenariat stratégique avec le CSE',
    excerpt: 'BTLABS renforce sa collaboration avec le Centre de Suivi Écologique.',
    image: '/images/services/service-2.jpeg',
    date: '8 Déc 2024',
    author: 'Équipe BTLABS',
    category: 'Actualités',
  },
  {
    title: 'Webinaire: Monitoring environnemental 2025',
    excerpt: 'Inscrivez-vous à notre prochain webinaire sur les tendances du secteur.',
    image: '/images/hero/hero3.jpeg',
    date: '5 Déc 2024',
    author: 'Formation BTLABS',
    category: 'Événements',
  },
];

export default function LatestNews() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dernières actualités
          </h2>
          <p className="text-gray-600">
            Restez informé des dernières tendances et actualités du secteur environnemental.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article key={index} className="card overflow-hidden group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#37afae] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-[#37afae] text-sm font-semibold hover:gap-2 transition-all"
                >
                  Lire plus
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
