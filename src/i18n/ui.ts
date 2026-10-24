export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'zh';

export const ui = {
  zh: {
    siteName: 'FastToolHub',
    tagline: 'AI / 工具新词情报站',
    desk: '情报台',
    entriesCount: '条收录',
    latest: '最新',
    sourcesCount: '来源',
    slugLabel: '标识',
    filters: '筛选',
    skip: '跳到内容',
    home: '首页',
    terms: '词条',
    search: '搜索词条…',
    searchPlaceholder: '按词名、来源或摘要筛选',
    filterSource: '来源',
    allSources: '全部来源',
    score: '得分',
    source: '来源',
    date: '日期',
    originalLink: '原始链接',
    intro: '介绍',
    explain: '解释',
    usage: '用法',
    empty: '暂无词条',
    emptyHint: '内容正在写入中，稍后再来看看。',
    noResults: '没有匹配结果',
    themeLight: '浅色',
    themeDark: '深色',
    themeSystem: '跟随系统',
    language: '语言',
    backHome: '返回首页',
    timeline: '新词时间线',
    timelineDesc: '按首次出现时间倒序展示已收录的 AI / 工具新词。',
    footer: 'FastToolHub · 新词新闻聚合',
  },
  en: {
    siteName: 'FastToolHub',
    tagline: 'AI & tool neologism radar',
    desk: 'Intel desk',
    entriesCount: 'Entries',
    latest: 'Latest',
    sourcesCount: 'Sources',
    slugLabel: 'Slug',
    filters: 'Filters',
    skip: 'Skip to content',
    home: 'Home',
    terms: 'Terms',
    search: 'Search terms…',
    searchPlaceholder: 'Search name or source',
    filterSource: 'Source',
    allSources: 'All sources',
    score: 'Score',
    source: 'Source',
    date: 'Date',
    originalLink: 'Original link',
    intro: 'Intro',
    explain: 'Explain',
    usage: 'Usage',
    empty: 'No terms yet',
    emptyHint: 'Content is being written. Check back soon.',
    noResults: 'No matching results',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeSystem: 'System',
    language: 'Language',
    backHome: 'Back home',
    timeline: 'Neologism timeline',
    timelineDesc: 'AI and tool terms ordered by first-seen date (newest first).',
    footer: 'FastToolHub · Neologism news',
  },
} as const;

export function t(locale: Locale, key: keyof (typeof ui)['zh']): string {
  return ui[locale][key] ?? ui.zh[key];
}

export function normalizeLocale(value: string | undefined): Locale {
  return value === 'en' ? 'en' : 'zh';
}
