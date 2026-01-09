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
        
        // --- CONFIGURACIÓN DE NAVEGACIÓN ---
        start_url: '/',
        scope: '/',  // <--- ¡ESTA ES LA LÍNEA NUEVA IMPORTANTE!
        // -----------------------------------

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
        maximumFileSizeToCacheInBytes: 45000000, 
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        
        // Estrategia de caché para SSR (Server Side Rendering)
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 1 semana
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          }
        ],
      }
    })
  ],

  vite: {
    server: {
      allowedHosts: true, 
      host: true 
    },
    define: {
      CESIUM_BASE_URL: JSON.stringify('/cesium')
    }
  },

  adapter: node({
    mode: 'standalone'
  })
});