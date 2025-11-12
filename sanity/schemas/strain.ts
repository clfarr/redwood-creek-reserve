import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'strain',
  title: 'Cannabis Strain',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Strain Name',
      type: 'string',
      description: 'e.g., South Fork OG, Trinity Gold',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      description: 'The unique URL part (click Generate)',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Strain Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Sativa', value: 'sativa'},
          {title: 'Indica', value: 'indica'},
          {title: 'Hybrid', value: 'hybrid'},
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'profile',
      title: 'Tasting & Effect Profile',
      type: 'text',
      description: 'A short, evocative description of the flavor and effects',
      rows: 4,
      validation: Rule => Rule.required().min(50).max(300),
    }),
    defineField({
      name: 'flavorNotes',
      title: 'Flavor Notes',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      description: 'e.g., Pine, Citrus, Earthy, Diesel',
    }),
    defineField({
      name: 'thcContent',
      title: 'THC Content (%)',
      type: 'string',
      description: 'e.g., "22-26%"',
    }),
    defineField({
      name: 'harvestDate',
      title: 'Harvest Date',
      type: 'date',
      description: 'When this batch was harvested',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Strain',
      type: 'boolean',
      description: 'Show this strain on the homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      media: 'image',
    },
  },
})
