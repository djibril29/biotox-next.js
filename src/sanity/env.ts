// Ces valeurs sont publiques par nature (préfixe NEXT_PUBLIC_ : elles sont
// de toute façon incluses dans le bundle client). Les fallbacks garantissent
// que le build ne casse pas sur un hébergeur où les variables d'environnement
// ne sont pas configurées (Hostinger, CI, etc.).
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-03-25'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'oibmai6m'
