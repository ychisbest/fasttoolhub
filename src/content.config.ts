import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const terms = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/terms',
    // frontmatter.slug is shared across locales; include locale so ids stay unique
    generateId: ({ data, entry }) => {
      const locale = typeof data.locale === 'string' ? data.locale : 'zh';
      const slug =
        typeof data.slug === 'string'
          ? data.slug
          : entry.replace(/\.(md|mdx)$/i, '').replace(/\\/g, '/');
      return `${locale}/${slug}`;
    },
  }),
  schema: z.object({
    slug: z.string(),
    term: z.string(),
    locale: z.enum(['zh', 'en']),
    date: z.union([z.string(), z.coerce.date()]),
    source: z.string(),
    score: z.number(),
    url: z.string().url().or(z.string()),
    excerpt: z.string(),
    intro: z.string(),
    explain: z.string(),
    usage: z.string(),
  }),
});

export const collections = { terms };
