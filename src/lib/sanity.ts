export { client } from '@/sanity/lib/client';
export { urlFor } from '@/sanity/lib/image';

// GROQ queries
export const FEATURED_PROJET_QUERY = `*[_type == "projet" && featured == true][0] {
  _id,
  title,
  slug,
  coverImage,
  sector,
  client,
  clientLogo,
  year,
  city,
  zone,
  summary,
  services,
  standards,
}`;

export const PROJETS_QUERY = `*[_type == "projet"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  coverImage,
  sector,
  client,
  clientLogo,
  year,
  city,
  summary,
  services,
}`;

export const PROJET_QUERY = `*[_type == "projet" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  coverImage,
  sector,
  client,
  clientLogo,
  year,
  city,
  zone,
  summary,
  services,
  standards,
  context,
  intervention,
  valeurAjoutee,
  keywords,
}`;

export const ARTICLES_QUERY = `*[_type == "article"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  coverImage,
  excerpt,
  publishedAt,
  category,
  author,
}`;

export const LATEST_ARTICLES_QUERY = `*[_type == "article"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  coverImage,
  excerpt,
  publishedAt,
  category,
  author,
}`;

export const FEATURED_ARTICLE_QUERY = `*[_type == "article" && featured == true][0] {
  _id,
  title,
  slug,
  coverImage,
  excerpt,
  publishedAt,
  category,
  author,
}`;

export const ARTICLE_QUERY = `*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  coverImage,
  excerpt,
  publishedAt,
  category,
  author,
  content,
  showPartnerSidebar,
  partnerName,
  partnerLogo,
  keywords,
}`;
