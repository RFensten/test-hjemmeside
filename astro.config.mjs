import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    keystatic(),
    markdoc()
  ],
  output: 'server',
  adapter: vercel(),
  site: 'https://test-hjemmeside.vercel.app',
});
