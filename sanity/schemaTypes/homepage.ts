import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homepage',
    title: 'Forside',
    type: 'document',
    fields: [
        defineField({
            name: 'welcomeTag',
            title: 'Velkomst Tag',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroTitle',
            title: 'Hero Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Hero Undertitel',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroButtonText',
            title: 'Knap Tekst',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Billede',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'content',
            title: 'Ekstra indhold',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'heroTitle',
        },
    },
})
