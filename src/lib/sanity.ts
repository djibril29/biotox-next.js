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
