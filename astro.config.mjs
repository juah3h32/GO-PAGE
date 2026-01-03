// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  integrations: [
    react(),
    mdx(),
    sitemap(),
  ],

  vite: {
    define: {
      CESIUM_BASE_URL: JSON.stringify('/cesium')
    }
  }
});
