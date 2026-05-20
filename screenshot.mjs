import puppeteer from 'puppeteer-core';
import { mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const outDir = '/Users/mac2/Desktop/Nabuk-web/temporary-screenshots';

mkdirSync(outDir, { recursive: true });

let n = 1;
try {
  const files = readdirSync(outDir);
  const nums = files.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1])).filter(Boolean);
  if (nums.length) n = Math.max(...nums) + 1;
} catch {}

const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const outPath = join(outDir, filename);

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log(outPath);
