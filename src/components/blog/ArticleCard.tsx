import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { urlFor } from '@/lib/sanity';
import { formatArticleDate } from '@/lib/format-date';
import type { Article } from '@/types/article';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { title, slug, coverImage, excerpt, publishedAt, category, author } = article;

  return (
    <article className="card overflow-hidden group">
      <Link href={`/blog/${slug.current}`} className="block">
        <div className="relative h-48 overflow-hidden">
          {coverImage ? (
            <Image
              src={urlFor(coverImage).width(600).height(400).url()}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-200" />
          )}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatArticleDate(publishedAt)}
            </div>
            {author && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {author}
              </div>
            )}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#37afae] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
          <span className="inline-flex items-center gap-1 text-[#37afae] text-sm font-semibold group-hover:gap-2 transition-all">
            Lire plus
            <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </article>
  );
}
