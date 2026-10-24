import { defineConfig } from 'astro/config';

const pages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: pages ? 'https://hypackel.xyz' : 'https://fasttoolhub.com',
  base: pages ? '/fasttoolhub' : '/',
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
