import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        shortDescription: z.string(),
        link: z.string().optional(),
        year: z.string(),
        tags: z.array(z.string()),
        highlight: z.boolean().default(false),
    }),
});

const homepage = defineCollection({
    type: 'content',
    schema: z.object({
        welcomeTag: z.string(),
        heroTitle: z.string(),
        heroSubtitle: z.string(),
        heroButtonText: z.string(),
        heroImage: z.string(),
    }),
});

export const collections = {
    projects,
    homepage,
};
