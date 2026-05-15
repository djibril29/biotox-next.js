import { defineField, defineType } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Résumé (carte & SEO)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Réglementation', value: 'Réglementation' },
          { title: 'Actualités', value: 'Actualités' },
          { title: 'Événements', value: 'Événements' },
          { title: 'Expertise', value: 'Expertise' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
      description: 'Ex: Dr. Ngom, Équipe BTLABS',
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{ type: 'block' }, { type: 'contentImage' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showPartnerSidebar',
      title: 'Afficher le partenaire dans la barre latérale',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'partnerName',
      title: 'Nom du partenaire',
      type: 'string',
      hidden: ({ parent }) => !parent?.showPartnerSidebar,
    }),
    defineField({
      name: 'partnerLogo',
      title: 'Logo du partenaire',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => !parent?.showPartnerSidebar,
    }),
    defineField({
      name: 'keywords',
      title: 'Mots-clés',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ex: EIES, qualité de l\'air, Sénégal',
    }),
    defineField({
      name: 'featured',
      title: 'Article vedette',
      type: 'boolean',
      description: 'Mettre en avant sur la page blog et l\'accueil',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
});
