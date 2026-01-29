import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: import.meta.env.PROD
        ? {
            kind: 'github',
            repo: 'RFensten/test-hjemmeside',
        }
        : {
            kind: 'local',
        },
    collections: {
        projects: collection({
            label: 'Projekter',
            slugField: 'title',
            path: 'src/content/projects/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Titel' } }),
                shortDescription: fields.text({
                    label: 'Kort beskrivelse',
                    multiline: true,
                }),
                link: fields.url({ label: 'Link til projekt' }),
                year: fields.text({ label: 'Årstal' }),
                tags: fields.array(
                    fields.text({ label: 'Tag (f.eks. "AI", "Web")' }),
                    {
                        label: 'Tags',
                        itemLabel: props => props.value
                    }
                ),
                highlight: fields.checkbox({
                    label: 'Fremhævet på forsiden?',
                    defaultValue: false
                }),
                content: fields.document({
                    label: 'Detaljeret beskrivelse (Valgfri)',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: true,
                }),
            },
        }),
    },
    singletons: {
        homepage: singleton({
            label: 'Forside',
            path: 'src/content/homepage/homepage',
            format: { contentField: 'content' },
            schema: {
                welcomeTag: fields.text({ label: 'Velkomst Tag (f.eks. Portfolio 2026)' }),
                heroTitle: fields.text({ label: 'Overskrift (Navn)' }),
                heroSubtitle: fields.text({
                    label: 'Underoverskrift',
                    multiline: true
                }),
                heroButtonText: fields.text({ label: 'Knap Tekst (Se Projekter)' }),
                heroImage: fields.image({
                    label: 'Portræt Billede',
                    directory: 'public',
                    publicPath: '/',
                }),
                content: fields.document({
                    label: 'Ekstra indhold',
                    formatting: true,
                }),
            },
        }),
    },
});
