import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fasttoolhub.com',
  base: '/',
  vite: {
    ssr: {
      external: ['isomorphic-dompurify', 'dompurify', 'jsdom'],
    },
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
