import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fasttoolhub.com',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
