import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

function toTime(value: string | Date): number {
  const t = typeof value === 'string' ? Date.parse(value) : value.getTime();
  return Number.isNaN(t) ? 0 : t;
}

export async function getTermsByLocale(locale: Locale): Promise<CollectionEntry<'terms'>[]> {
  const all = await getCollection('terms');
  return all
    .filter((e) => e.data.locale === locale)
    .sort((a, b) => toTime(b.data.date) - toTime(a.data.date));
}

export async function getTermBySlug(
  locale: Locale,
  slug: string,
): Promise<CollectionEntry<'terms'> | undefined> {
  const all = await getCollection('terms');
  return all.find((e) => e.data.locale === locale && e.data.slug === slug);
}
