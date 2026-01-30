import type { APIRoute } from 'astro';
import fs from 'fs/promises';
import path from 'path';

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const { type, id, data, content } = body;

        if (type === 'project') {
            // Save project file
            const filePath = path.join(process.cwd(), 'src/content/projects', `${id}.mdoc`);

            const frontmatter = `---
title: ${data.title}
shortDescription: ${data.shortDescription}
link: '${data.link}'
year: '${data.year}'
tags:
${data.tags.map((tag: string) => `  - ${tag}`).join('\n')}
highlight: ${data.highlight}
---`;

            const fileContent = `${frontmatter}\n${content || ''}\n`;
            await fs.writeFile(filePath, fileContent, 'utf-8');

        } else if (type === 'homepage') {
            // Save homepage file
            const filePath = path.join(process.cwd(), 'src/content/homepage/homepage.mdoc');

            const frontmatter = `---
welcomeTag: ${data.welcomeTag}
heroTitle: ${data.heroTitle}
heroSubtitle: >-
  ${data.heroSubtitle}
heroButtonText: ${data.heroButtonText}
heroImage: ${data.heroImage}
---`;

            const fileContent = `${frontmatter}\n${content || ''}\n`;
            await fs.writeFile(filePath, fileContent, 'utf-8');
        }

        return new Response(
            JSON.stringify({ success: true }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    } catch (error) {
        console.error('Save error:', error);
        return new Response(
            JSON.stringify({ error: 'Failed to save content' }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
};
