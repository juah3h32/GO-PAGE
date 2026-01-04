/// <reference types="astro/client" />
/// <reference types="@vite-pwa/astro/info" />
/// <reference types="@vite-pwa/astro/client" />

declare module 'virtual:pwa-info' {
    export const pwaInfo: {
      webManifest: {
        href: string;
        linkTag: string;
      };
    };
  }