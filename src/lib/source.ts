export type SourceKind = 'x' | 'hf' | 'gh' | 'mix' | 'other';

/** Map a free-form source label onto a stable color family. */
export function sourceKind(source: string): SourceKind {
  const s = source.toLowerCase();
  const x = /(?:^|[^a-z])x(?:[^a-z]|$)/.test(s) || s.includes('twitter');
  const hf = s.includes('hugging') || /(?:^|[^a-z])hf(?:[^a-z]|$)/.test(s);
  const gh = s.includes('github');
  const hits = Number(x) + Number(hf) + Number(gh);
  if (hits > 1) return 'mix';
  if (x) return 'x';
  if (hf) return 'hf';
  if (gh) return 'gh';
  return 'other';
}

/** Card copy sometimes stores YAML-escaped quotes as literal backslashes. */
export function displayText(value: string): string {
  return value.replace(/\\(["'])/g, '$1');
}
