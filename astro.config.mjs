// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Die spätere Live-Adresse – wichtig für Sitemap, Canonical-Links und Open Graph.
  site: 'https://www.hms-becker.de',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(danke|404|fehler)\/?$/.test(page),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
