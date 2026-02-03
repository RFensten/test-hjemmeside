import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'newsletterPage',
    title: 'Nyhedsbrev Side',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Sidetitel',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Beskrivelse',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'contactSectionTitle',
            title: 'Kontakt Sektion Titel',
            type: 'string',
            initialValue: 'Send mig en direkte besked',
        }),
        defineField({
            name: 'contactEmail',
            title: 'Kontakt Email',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})
