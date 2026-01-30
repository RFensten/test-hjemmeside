import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';

export const GET: APIRoute = async () => {
    try {
        // Get all projects
        const projects = await getCollection('projects');

        // Get homepage content
        const homepage = await getEntry('homepage', 'homepage');

        return new Response(
            JSON.stringify({
                projects: projects.map(p => ({
                    id: p.id,
                    ...p.data,
                    content: p.body
                })),
                homepage: {
                    ...homepage?.data,
                    content: homepage?.body
                }
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Failed to load content' }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
};
