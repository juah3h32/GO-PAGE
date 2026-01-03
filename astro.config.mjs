import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// 1. Importamos el plugin de PWA
import AstroPWA from '@vite-pwa/astro'; 

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // OJO: Asegúrate de poner aquí tu dominio real final

  integrations: [
    react(),
    mdx(),
    sitemap(),
    
    // 2. Configuración de la APP (PWA)
    AstroPWA({
      registerType: 'autoUpdate', 
      manifest: {
        name: 'Nombre de Tu App', // Cámbialo por el nombre real
        short_name: 'TuApp',      // Nombre corto para el icono del celular
        description: 'Descripción de tu aplicación con Astro',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',    // CRUCIAL: Esto quita la barra del navegador
        orientation: 'portrait',  // Opcional: Fuerza la app en vertical
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png', // Debes crear esta imagen en la carpeta public
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // Debes crear esta imagen en la carpeta public
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' // Ayuda a que el icono se vea bien en Android
          }
        ]
      },
      workbox: {
        // Estrategia de caché
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        // Como usas Cesium, quizás quieras excluir archivos muy pesados del caché inicial
        // o aumentar el límite de tamaño, pero por ahora esto funcionará.
        maximumFileSizeToCacheInBytes: 5000000, // Aumentado a 5MB por si usas assets grandes
      }
    })
  ],

  vite: {
    define: {
      CESIUM_BASE_URL: JSON.stringify('/cesium')
    }
  }
});