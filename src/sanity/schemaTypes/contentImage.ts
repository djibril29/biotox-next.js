import { defineField, defineType } from 'sanity';

export const contentImage = defineType({
  name: 'contentImage',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Texte alternatif',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Légende',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'alt', media: 'image' },
  },
});
