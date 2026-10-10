const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';
const screenshotDir = 'C:\\Users\\Parvej\\.gemini\\antigravity\\brain\\ccb23f0b-9aca-47ce-a62f-b8cf133c7f19';

const routes = [
  { name: 'Home', hash: '#/' },
  { name: 'How It Works', hash: '#/how-it-works' },
  { name: 'About', hash: '#/about' },
  { name: 'Services', hash: '#/services' },
  { name: 'Pricing', hash: '#/pricing' },
  { name: 'Insights', hash: '#/insights' },
  { name: 'Results', hash: '#/case-studies' },
  { name: 'Audit', hash: '#/audit' },
];

async function verifyHeadlines() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const report = [];

  for (const vp of [{ width: 1440, height: 900, label: '1440px' }, { width: 390, height: 844, label: '390px' }]) {
    await page.setViewport({ width: vp.width, height: vp.height });

    for (const r of routes) {
      await page.goto(`${BASE_URL}/${r.hash}`, { waitUntil: 'networkidle0' });
      await new Promise((res) => setTimeout(res, 800));

      const data = await page.evaluate((vpWidth) => {
        const h1 = document.querySelector('h1');
        const container = document.querySelector('.site-container');
        const intro = document.querySelector('.intro-text');
        const buttonsContainer = document.querySelector('.hero-buttons-container');
        const nav = document.querySelector('nav');
        const navLogo = document.querySelector('header img');

        const h1Rect = h1 ? h1.getBoundingClientRect() : null;
        const containerRect = container ? container.getBoundingClientRect() : null;
        const introRect = intro ? intro.getBoundingClientRect() : null;
        const buttonsRect = buttonsContainer ? buttonsContainer.getBoundingClientRect() : null;
        const logoRect = navLogo ? navLogo.getBoundingClientRect() : null;

        const h1Style = h1 ? window.getComputedStyle(h1) : null;

        const gapH1ToIntro = (h1Rect && introRect) ? Math.round(introRect.top - h1Rect.bottom) : null;
        const gapIntroToButtons = (introRect && buttonsRect) ? Math.round(buttonsRect.top - introRect.bottom) : null;

        return {
          h1Top: h1Rect ? Math.round(h1Rect.top) : null,
          h1Left: h1Rect ? Math.round(h1Rect.left) : null,
          h1Width: h1Rect ? Math.round(h1Rect.width) : null,
          containerLeft: containerRect ? Math.round(containerRect.left) : null,
          logoLeft: logoRect ? Math.round(logoRect.left) : null,
          gapH1ToIntro,
          gapIntroToButtons,
          fontSize: h1Style ? h1Style.fontSize : null,
          fontWeight: h1Style ? h1Style.fontWeight : null,
          lineHeight: h1Style ? h1Style.lineHeight : null,
          letterSpacing: h1Style ? h1Style.letterSpacing : null,
          textAlign: h1Style ? h1Style.textAlign : null,
        };
      }, vp.width);

      report.push({
        viewport: vp.label,
        page: r.name,
        ...data
      });
    }
  }

  // Also take fresh visual screenshots of Home and Results at 1440 and 390
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/#/`, { waitUntil: 'networkidle0' });
  await new Promise(res => setTimeout(res, 800));
  await page.screenshot({ path: path.join(screenshotDir, 'updated_1440_home.png') });

  await page.goto(`${BASE_URL}/#/case-studies`, { waitUntil: 'networkidle0' });
  await new Promise(res => setTimeout(res, 800));
  await page.screenshot({ path: path.join(screenshotDir, 'updated_1440_results.png') });

  await page.goto(`${BASE_URL}/#/how-it-works`, { waitUntil: 'networkidle0' });
  await new Promise(res => setTimeout(res, 800));
  await page.screenshot({ path: path.join(screenshotDir, 'updated_1440_how_it_works.png') });

  await page.setViewport({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/#/`, { waitUntil: 'networkidle0' });
  await new Promise(res => setTimeout(res, 800));
  await page.screenshot({ path: path.join(screenshotDir, 'updated_390_home.png') });

  await page.goto(`${BASE_URL}/#/case-studies`, { waitUntil: 'networkidle0' });
  await new Promise(res => setTimeout(res, 800));
  await page.screenshot({ path: path.join(screenshotDir, 'updated_390_results.png') });

  await browser.close();
  console.log(JSON.stringify(report, null, 2));
}

verifyHeadlines().catch(console.error);
