const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';

const routes = [
  { name: 'home', hash: '#/' },
  { name: 'services', hash: '#/services' },
  { name: 'how-it-works', hash: '#/how-it-works' },
  { name: 'pricing', hash: '#/pricing' },
  { name: 'case-studies', hash: '#/case-studies' },
  { name: 'insights', hash: '#/insights' },
  { name: 'about', hash: '#/about' },
  { name: 'contact', hash: '#/contact' },
  { name: 'audit', hash: '#/audit' },
];

async function runAudit() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const results = [];

  for (const vp of [{ width: 1440, height: 900, label: '1440px' }, { width: 390, height: 844, label: '390px' }]) {
    await page.setViewport({ width: vp.width, height: vp.height });

    for (const r of routes) {
      const url = `${BASE_URL}/${r.hash}`;
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
      // wait a tiny bit for animations/fonts
      await new Promise((res) => setTimeout(res, 500));

      const evaluation = await page.evaluate((isDesktop) => {
        // Check horizontal overflow
        const hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth + 1;

        // Check container
        const containers = Array.from(document.querySelectorAll('.site-container'));
        const containerRects = containers.map((el) => {
          const r = el.getBoundingClientRect();
          return { width: Math.round(r.width), left: Math.round(r.left), right: Math.round(r.right) };
        });

        // Check nav
        const nav = document.querySelector('nav');
        const navRect = nav ? nav.getBoundingClientRect() : null;

        // Check H1
        const h1 = document.querySelector('h1');
        const h1Style = h1 ? window.getComputedStyle(h1) : null;
        const h1Info = h1 ? {
          fontSize: h1Style.fontSize,
          fontWeight: h1Style.fontWeight,
          lineHeight: h1Style.lineHeight,
          letterSpacing: h1Style.letterSpacing,
          rectLeft: Math.round(h1.getBoundingClientRect().left),
          rectTop: Math.round(h1.getBoundingClientRect().top)
        } : null;

        // Check PageHeader top clearance
        const pageHeader = document.querySelector('.page-header, .site-header-clearance');
        const headerPaddingTop = pageHeader ? window.getComputedStyle(pageHeader).paddingTop : null;

        // Check eyebrows
        const eyebrows = Array.from(document.querySelectorAll('.eyebrow-label'));
        const hasSlashInEyebrows = eyebrows.some(el => el.textContent.includes('//'));

        // Check buttons
        const primaryButtons = Array.from(document.querySelectorAll('.btn-primary, button.btn-primary'));
        const buttonHeights = primaryButtons.map(b => Math.round(b.getBoundingClientRect().height));

        return {
          hasHorizontalScroll,
          containerCount: containers.length,
          firstContainerWidth: containerRects[0]?.width,
          firstContainerLeft: containerRects[0]?.left,
          navHeight: navRect ? Math.round(navRect.height) : null,
          navTop: navRect ? Math.round(navRect.top) : null,
          h1Info,
          headerPaddingTop,
          hasSlashInEyebrows,
          eyebrowCount: eyebrows.length,
          buttonHeights: buttonHeights.slice(0, 3)
        };
      }, vp.width >= 1024);

      results.push({
        viewport: vp.label,
        route: r.name,
        evaluation
      });
    }
  }

  // Also take screenshots of key pages at 1440 and 390 for visual proof
  const screenshotDir = 'C:\\Users\\Parvej\\.gemini\\antigravity\\brain\\ccb23f0b-9aca-47ce-a62f-b8cf133c7f19';
  
  // 1440 Home & About
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/#/`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(screenshotDir, 'apple_layout_1440_home.png') });

  await page.goto(`${BASE_URL}/#/about`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(screenshotDir, 'apple_layout_1440_about.png') });

  await page.goto(`${BASE_URL}/#/case-studies`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(screenshotDir, 'apple_layout_1440_results.png') });

  await page.goto(`${BASE_URL}/#/how-it-works`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(screenshotDir, 'apple_layout_1440_how_it_works.png') });

  // 390 Mobile Home & About
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/#/`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(screenshotDir, 'apple_layout_390_home.png') });

  await page.goto(`${BASE_URL}/#/about`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(screenshotDir, 'apple_layout_390_about.png') });

  await page.goto(`${BASE_URL}/#/case-studies`, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(screenshotDir, 'apple_layout_390_results.png') });

  await browser.close();

  console.log(JSON.stringify(results, null, 2));
}

runAudit().catch(err => {
  console.error(err);
  process.exit(1);
});
