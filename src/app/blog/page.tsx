import type { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import ArticlesGrid from '@/components/blog/ArticlesGrid';
import { client, ARTICLES_QUERY } from '@/lib/sanity';
import type { Article } from '@/types/article';

export const metadata: Metadata = {
  title: 'Blog — Actualités Environnementales Sénégal',
  description:
    'Actualités, réglementation et expertise environnementale par BTLABS : EIES, qualité de l\'air, QHSE et surveillance environnementale au Sénégal.',
  keywords: [
    'blog environnement Sénégal',
    'actualités EIES Sénégal',
    'réglementation environnementale',
    'expertise environnementale Dakar',
    'BTLABS actualités',
  ],
  openGraph: {
    title: 'Blog | BTLABS - Actualités Environnementales',
    description:
      'Restez informé des tendances et actualités du secteur environnemental en Afrique de l\'Ouest.',
    url: 'https://www.btlabsconsulting.com/blog',
  },
  alternates: {
    canonical: 'https://www.btlabsconsulting.com/blog',
  },
};

export default async function BlogPage() {
  const articles: Article[] = await client.fetch(ARTICLES_QUERY);

  return (
    <>
      <BlogHero />
      <ArticlesGrid articles={articles} />
    </>
  );
}
