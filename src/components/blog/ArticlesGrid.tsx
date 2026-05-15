import ArticleCard from '@/components/blog/ArticleCard';
import type { Article } from '@/types/article';

interface ArticlesGridProps {
  articles: Article[];
}

export default function ArticlesGrid({ articles }: ArticlesGridProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tous les articles
          </h2>
          <p className="text-gray-600">
            Analyses, actualités et événements autour de l&apos;environnement et de la conformité réglementaire.
          </p>
        </div>

        {articles.length === 0 ? (
          <p className="text-center text-gray-500 py-16">
            Aucun article publié pour le moment. Revenez bientôt.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
