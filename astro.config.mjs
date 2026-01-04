import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://example.com',
  output: 'server', 

  integrations: [
    react(),
    mdx(),
    sitemap(),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'GO',
        short_name: 'GO',
        description: 'UI GO',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 45000000, // Soporta archivos de hasta 45MB
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
      }
    })
  ],

  vite: {
    define: {
      CESIUM_BASE_URL: JSON.stringify('/cesium')
    }
  },

  adapter: node({
    mode: 'standalone'
  })
});