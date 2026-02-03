import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'settings',
    title: 'Indstillinger',
    type: 'document',
    fields: [
        defineField({
            name: 'siteName',
            title: 'Sidenavn',
            type: 'string',
            description: 'Navnet der vises i headeren (f.eks. "Rasmus")',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'navigation',
            title: 'Navigation',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'label',
                            title: 'Tekst',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'href',
                            title: 'Link',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'socialLinks',
            title: 'Sociale Medier',
            type: 'object',
            fields: [
                {
                    name: 'github',
                    title: 'GitHub URL',
                    type: 'url',
                },
                {
                    name: 'linkedin',
                    title: 'LinkedIn URL',
                    type: 'url',
                },
                {
                    name: 'email',
                    title: 'Email',
                    type: 'string',
                },
            ],
        }),
        defineField({
            name: 'footerText',
            title: 'Footer Tekst',
            type: 'string',
            description: 'Tekst i footeren (f.eks. "Alle rettigheder forbeholdes")',
        }),
    ],
    preview: {
        select: {
            title: 'siteName',
        },
    },
})
