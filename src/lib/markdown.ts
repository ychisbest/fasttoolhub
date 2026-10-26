import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

marked.use({
  gfm: true,
  breaks: false,
});

let hooksReady = false;

function ensureHooks(): void {
  if (hooksReady) return;
  hooksReady = true;
  DOMPurify.addHook('afterSanitizeAttributes', (node) => {
    if (node.nodeType !== 1 || node.tagName !== 'A') return;
    const href = node.getAttribute('href') || '';
    if (/^https?:/i.test(href)) {
      node.setAttribute('target', '_blank');
      node.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

/**
 * Content files sometimes store JSON-quoted YAML strings with literal
 * backslash escapes (`\n` as two chars) instead of real newlines. Normalize
 * those before Markdown parsing so headings/lists form correctly.
 */
export function normalizeMarkdownEscapes(source: string): string {
  return source
    .replace(/\\r\\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');
}

/** Strip common Markdown markers for plain-text card UI. */
export function plainTextFromMarkdown(s: string | null | undefined): string {
  let text = normalizeMarkdownEscapes(s ?? '');
  // links [text](url) → text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  // images ![alt](url) → alt
  text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1');
  // bold/italic markers
  text = text.replace(/\*\*(.+?)\*\*/g, '$1');
  text = text.replace(/__(.+?)__/g, '$1');
  text = text.replace(/\*(.+?)\*/g, '$1');
  text = text.replace(/_(.+?)_/g, '$1');
  text = text.replace(/\*\*|__/g, '');
  // inline/code fences leftovers
  text = text.replace(/`+/g, '');
  // leading headers
  text = text.replace(/^#{1,6}\s+/gm, '');
  // list markers
  text = text.replace(/^\s*[-*+]\s+/gm, '');
  text = text.replace(/^\s*\d+\.\s+/gm, '');
  // blockquote markers
  text = text.replace(/^\s*>\s?/gm, '');
  // collapse whitespace (newlines → space)
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

/** Render Markdown to sanitized HTML safe for `set:html`. */
export function renderMarkdown(source: string | null | undefined): string {
  const raw = normalizeMarkdownEscapes(source ?? '').trim();
  if (!raw) return '';
  ensureHooks();
  const parsed = marked.parse(raw, { async: false });
  if (typeof parsed !== 'string') return '';
  return DOMPurify.sanitize(parsed, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ['target', 'rel'],
  });
}
