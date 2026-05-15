import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenu')
    .items([
      S.listItem()
        .title('Projets')
        .child(S.documentTypeList('projet').title('Projets')),
      S.listItem()
        .title('Blog')
        .child(S.documentTypeList('article').title('Articles')),
    ])
