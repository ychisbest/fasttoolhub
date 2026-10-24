import type { Locale } from './ui';
import { defaultLocale } from './ui';

/** Home path for a locale (zh → `/`, en → `/en/`). */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

/** Term detail path. */
export function termPath(locale: Locale, slug: string): string {
  return locale === defaultLocale ? `/terms/${slug}/` : `/${locale}/terms/${slug}/`;
}

/**
 * Switch locale while keeping the current path shape.
 * Examples: `/terms/foo` + en → `/en/terms/foo`
 *           `/en/terms/foo` + zh → `/terms/foo`
 */
export function switchLocalePath(currentPath: string, target: Locale): string {
  const clean = currentPath.replace(/\/+$/, '') || '/';
  const withoutLocale = clean.replace(/^\/en(?=\/|$)/, '') || '/';

  if (target === 'en') {
    if (withoutLocale === '/') return '/en/';
    return `/en${withoutLocale}/`;
  }
  // zh (default, no prefix)
  if (withoutLocale === '/') return '/';
  return `${withoutLocale}/`;
}

export function formatDate(value: string | Date, locale: Locale): string {
  const d = typeof value === 'string' ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
