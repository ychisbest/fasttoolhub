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

/** Render Markdown to sanitized HTML safe for `set:html`. */
export function renderMarkdown(source: string | null | undefined): string {
  const raw = (source ?? '').replace(/\r\n/g, '\n').trim();
  if (!raw) return '';
  ensureHooks();
  const parsed = marked.parse(raw, { async: false });
  if (typeof parsed !== 'string') return '';
  return DOMPurify.sanitize(parsed, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ['target', 'rel'],
  });
}
