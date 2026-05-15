import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import BlogPortableText from '@/components/blog/BlogPortableText';
import { client, ARTICLE_QUERY, urlFor } from '@/lib/sanity';
import { formatArticleDate } from '@/lib/format-date';
import type { Article } from '@/types/article';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE_URL = 'https://www.btlabsconsulting.com';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article: Article = await client.fetch(ARTICLE_QUERY, { slug });
  if (!article) return {};

  const pageUrl = `${BASE_URL}/blog/${slug}`;
  const imageUrl = article.coverImage
    ? urlFor(article.coverImage).width(1200).height(630).url()
    : undefined;

  return {
    title: `${article.title} — Blog BTLABS`,
    description: article.excerpt,
    keywords: [
      ...(article.keywords ?? []),
      'BTLABS',
      article.category,
      'environnement Sénégal',
    ].filter(Boolean),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: pageUrl,
      type: 'article',
      publishedTime: article.publishedAt,
      ...(imageUrl && { images: [{ url: imageUrl, width: 1200, height: 630 }] }),
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article: Article = await client.fetch(ARTICLE_QUERY, { slug });

  if (!article) notFound();

  const {
    title,
    coverImage,
    excerpt,
    publishedAt,
    category,
    author,
    content,
    showPartnerSidebar,
    partnerName,
    partnerLogo,
  } = article;

  return (
    <main className="bg-white">
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-gray-900">
        {coverImage && (
          <>
            <Image
              src={urlFor(coverImage).width(1600).height(900).url()}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20" />
          </>
        )}

        <div className="container relative z-10 pb-16 pt-40">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Tous les articles
          </Link>

          <span className="inline-block bg-[#37afae]/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {category}
          </span>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-tight max-w-3xl mb-6">
            {title}
          </h1>

          <div className="flex flex-wrap gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <Calendar size={14} className="text-[#37afae]" />
              {formatArticleDate(publishedAt)}
            </span>
            {author && (
              <span className="flex items-center gap-2">
                <User size={14} className="text-[#37afae]" />
                {author}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-[#37afae] pl-6">
                {excerpt}
              </p>

              {content && content.length > 0 && (
                <BlogPortableText value={content} />
              )}
            </div>

            <aside className="space-y-8">
              {showPartnerSidebar && partnerName && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
                    Partenaire
                  </h3>
                  {partnerLogo && (
                    <div className="relative h-16 w-40 mb-3">
                      <Image
                        src={urlFor(partnerLogo).width(320).height(128).url()}
                        alt={partnerName}
                        fill
                        sizes="160px"
                        className="object-contain object-left"
                      />
                    </div>
                  )}
                  <p className="text-gray-700 font-medium text-sm">{partnerName}</p>
                </div>
              )}

              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Une question ?</h3>
                <p className="text-white/60 text-sm mb-4">
                  Discutons de vos besoins environnementaux.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#37afae] hover:bg-[#2a9d9c] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors w-full text-center"
                >
                  Nous contacter
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
