import type { Locale } from './ui';
import { defaultLocale } from './ui';

/** Astro base without a trailing slash (`''` at domain root). */
function basePrefix(): string {
  const base = import.meta.env.BASE_URL || '/';
  if (base === '/') return '';
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

/** Prefix an absolute path with the configured site base. */
export function withBase(path: string): string {
  const prefix = basePrefix();
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (!prefix) return normalized;
  if (normalized === '/') return `${prefix}/`;
  return `${prefix}${normalized}`;
}

/** Home path for a locale (zh → `/`, en → `/en/`, plus base). */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? withBase('/') : withBase(`/${locale}/`);
}

/** Term detail path. */
export function termPath(locale: Locale, slug: string): string {
  return locale === defaultLocale
    ? withBase(`/terms/${slug}/`)
    : withBase(`/${locale}/terms/${slug}/`);
}

/**
 * Switch locale while keeping the current path shape.
 * Examples: `/terms/foo` + en → `/en/terms/foo`
 *           `/en/terms/foo` + zh → `/terms/foo`
 */
export function switchLocalePath(currentPath: string, target: Locale): string {
  const prefix = basePrefix();
  let clean = currentPath.replace(/\/+$/, '') || '/';
  if (prefix && (clean === prefix || clean.startsWith(`${prefix}/`))) {
    clean = clean.slice(prefix.length) || '/';
  }
  const withoutLocale = clean.replace(/^\/en(?=\/|$)/, '') || '/';

  if (target === 'en') {
    if (withoutLocale === '/') return withBase('/en/');
    return withBase(`/en${withoutLocale}/`);
  }
  if (withoutLocale === '/') return withBase('/');
  return withBase(`${withoutLocale}/`);
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
