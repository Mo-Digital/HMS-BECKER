// Erzeugt das Open-Graph-Vorschaubild public/og-image.png (1200×630),
// das z. B. bei WhatsApp/Facebook beim Teilen eines Links erscheint.
// Benötigt Playwright:  npx playwright install chromium  (einmalig), dann  npm run og
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  // Fallback: global installiertes Playwright (NODE_PATH)
  ({ chromium } = createRequire(import.meta.url)('playwright'));
}
const logo = readFileSync('src/components/Logo.astro', 'utf8');
const becker = logo.match(/<path fill="currentColor" d="([^"]+)"/)[1];
const vb = logo.match(/class="logo-script[^"]*" viewBox="([^"]+)"/)[1];
const font = (p) => 'data:font/woff2;base64,' + readFileSync(resolve('node_modules', p)).toString('base64');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Archivo;src:url(${font('@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2')}) format('woff2-variations');font-weight:100 900;font-stretch:62% 125%}
@font-face{font-family:Inter;src:url(${font('@fontsource-variable/inter/files/inter-latin-wght-normal.woff2')}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#00339C;color:#fff;font-family:Inter;position:relative;overflow:hidden}
.p{position:absolute;inset:0;background:repeating-linear-gradient(-55deg,rgba(207,237,254,.07) 0 3px,transparent 3px 30px)}
.g{position:absolute;right:-200px;top:-200px;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,rgba(207,237,254,.22),transparent 65%)}
.w{position:absolute;inset:70px 80px;display:flex;flex-direction:column;justify-content:space-between}
.top{display:flex;align-items:center;gap:22px}
.top small{display:block;font-family:Archivo;font-weight:800;letter-spacing:.24em;font-size:22px;color:#CFEDFE}
h1{font-family:Archivo;font-stretch:90%;font-weight:900;font-size:92px;line-height:.95;letter-spacing:-.02em}
h1 span{color:#CFEDFE;box-shadow:inset 0 -14px 0 #E4572E}
.bot{display:flex;justify-content:space-between;align-items:flex-end}
.tel{font-family:Archivo;font-weight:800;font-size:54px}
.tel em{font-style:normal;font-size:22px;letter-spacing:.2em;color:#CFEDFE;display:block;font-weight:700}
.tags{font-size:24px;color:#CFEDFE;text-align:right;line-height:1.5}
</style></head><body><div class="p"></div><div class="g"></div><div class="w">
<div class="top"><svg width="88" height="88" viewBox="0 0 48 48"><rect width="48" height="48" rx="13" fill="#fff"/><path d="M11.5 25.5 24 14l12.5 11.5" fill="none" stroke="#00339C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 23.5V32M32 23.5V27" fill="none" stroke="#00339C" stroke-width="4" stroke-linecap="round"/><path d="M12 37.5c7.5 2.6 16.5 2.4 25-3.5" fill="none" stroke="#E4572E" stroke-width="4" stroke-linecap="round"/></svg>
<div><small>HAUSMEISTER-SERVICE</small><svg viewBox="${vb}" height="66"><path fill="#fff" d="${becker}"/></svg></div></div>
<h1>Hausmeisterservice<br><span>in Heilbronn.</span></h1>
<div class="bot"><div class="tel"><em>TELEFON</em>07131 / 62 82 20</div><div class="tags">Hausmeisterdienst · Kehrwoche · Winterdienst<br>Grünpflege · Wasser- &amp; Brandschäden</div></div>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(async () => { await Promise.all([...document.fonts].map((f) => f.load().catch(() => null))); await document.fonts.ready; });
await page.screenshot({ path: 'public/og-image.png' });
await browser.close();
console.log('✓ public/og-image.png');
