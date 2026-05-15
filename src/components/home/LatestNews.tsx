import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ArticleCard from '@/components/blog/ArticleCard';
import { client, LATEST_ARTICLES_QUERY } from '@/lib/sanity';
import type { Article } from '@/types/article';

export default async function LatestNews() {
  const articles: Article[] = await client.fetch(LATEST_ARTICLES_QUERY);

  if (articles.length === 0) return null;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dernières actualités
          </h2>
          <p className="text-gray-600">
            Restez informé des dernières tendances et actualités du secteur environnemental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#37afae] font-semibold hover:gap-3 transition-all"
          >
            Voir tous les articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
