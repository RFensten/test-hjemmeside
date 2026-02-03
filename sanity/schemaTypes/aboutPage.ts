import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'Om Mig Side',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Sidetitel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'profileImage',
            title: 'Profilbillede',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'bioParagraph1',
            title: 'Bio - Afsnit 1',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'bioParagraph2',
            title: 'Bio - Afsnit 2',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'bioParagraph3',
            title: 'Bio - Afsnit 3',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'skillsTitle',
            title: 'Kompetencer Overskrift',
            type: 'string',
            initialValue: 'Kompetencer',
        }),
        defineField({
            name: 'skills',
            title: 'Kompetencer',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Liste over dine kompetencer',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})
