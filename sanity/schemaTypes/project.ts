import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Projekt',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'shortDescription',
            title: 'Kort beskrivelse',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'url',
        }),
        defineField({
            name: 'year',
            title: 'Årstal',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'highlight',
            title: 'Fremhævet på forsiden',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({
            name: 'content',
            title: 'Detaljeret beskrivelse',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'year',
        },
    },
})
