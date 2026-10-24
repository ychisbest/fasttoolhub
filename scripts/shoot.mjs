import puppeteer from 'puppeteer-core';
import { mkdir } from 'node:fs/promises';

const round = process.argv[2] || '1';
const out = `screenshots/round-${round}`;
await mkdir(out, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage', '--font-render-hinting=none'],
});

const shots = [
  { path: '/', name: 'home-zh', dark: false },
  { path: '/en/', name: 'home-en', dark: false },
  { path: '/terms/muse-wonder/', name: 'term-zh', dark: false },
  { path: '/en/terms/muse-wonder/', name: 'term-en', dark: false },
  { path: '/', name: 'home-zh-dark', dark: true },
  { path: '/en/', name: 'home-en-dark', dark: true },
  { path: '/terms/muse-wonder/', name: 'term-zh-dark', dark: true },
  { path: '/en/terms/muse-wonder/', name: 'term-en-dark', dark: true },
];

for (const shot of shots) {
  for (const width of [1280, 390]) {
    const page = await browser.newPage();
    const height = width === 390 ? 900 : shot.name.startsWith('term') ? 1200 : 1000;
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.evaluateOnNewDocument((dark) => {
      localStorage.setItem('fth-theme', dark ? 'dark' : 'light');
    }, shot.dark);
    await page.goto(`http://127.0.0.1:4321${shot.path}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await page.evaluate(async () => {
      if (document.fonts?.ready) {
        await Promise.race([
          document.fonts.ready,
          new Promise((resolve) => setTimeout(resolve, 2500)),
        ]);
      }
    });
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return doc.scrollWidth - doc.clientWidth;
    });
    const file = `${out}/${shot.name}-${width}.png`;
    await page.screenshot({ path: file, fullPage: shot.name.startsWith('term') });
    await page.close();
    console.log(`${file} overflow=${overflow}`);
  }
}

await browser.close();
