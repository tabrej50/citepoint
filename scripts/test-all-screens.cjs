const puppeteer = require('puppeteer-core');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';

const viewports = [
  { label: 'Mobile Small', width: 320, height: 600 },
  { label: 'Mobile Standard', width: 375, height: 667 },
  { label: 'Mobile Modern', width: 390, height: 844 },
  { label: 'Mobile Large', width: 430, height: 932 },
  { label: 'Tablet Portrait', width: 768, height: 1024 },
  { label: 'Tablet Landscape', width: 1024, height: 768 },
  { label: 'Laptop', width: 1280, height: 800 },
  { label: 'Desktop 1440', width: 1440, height: 900 },
  { label: 'Large Display 1920', width: 1920, height: 1080 }
];

const routes = [
  { name: 'Home', hash: '#/' },
  { name: 'Services', hash: '#/services' },
  { name: 'How It Works', hash: '#/how-it-works' },
  { name: 'Pricing', hash: '#/pricing' },
  { name: 'Results', hash: '#/case-studies' },
  { name: 'Insights', hash: '#/insights' },
  { name: 'About', hash: '#/about' },
  { name: 'Contact', hash: '#/contact' },
  { name: 'Audit', hash: '#/audit' },
];

async function runTests() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const issues = [];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });

    for (const r of routes) {
      await page.goto(`${BASE_URL}/${r.hash}`, { waitUntil: 'networkidle0' });
      await new Promise(res => setTimeout(res, 400));

      const res = await page.evaluate((vpWidth) => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const hasHorizontalScroll = docWidth > winWidth + 1;

        // Check buttons minimum touch target
        const buttons = Array.from(document.querySelectorAll('button:not([hidden]), a.btn-primary, a.btn-secondary'));
        const smallTouchButtons = buttons
          .filter(b => {
            const rect = b.getBoundingClientRect();
            // visible buttons
            return rect.width > 0 && rect.height > 0 && (rect.height < 43.5);
          })
          .map(b => ({
            tag: b.tagName,
            text: b.textContent.trim().slice(0, 30),
            height: Math.round(b.getBoundingClientRect().height),
            width: Math.round(b.getBoundingClientRect().width)
          }));

        // Check for any overflowing elements
        const allElements = Array.from(document.querySelectorAll('body *'));
        const overflowingElements = allElements
          .filter(el => {
            const rect = el.getBoundingClientRect();
            // elements sticking out on right
            return rect.right > winWidth + 2 && rect.width > 0 && !el.closest('.animate-ticker-marquee') && !el.closest('.marquee-strip');
          })
          .slice(0, 5)
          .map(el => ({
            tag: el.tagName,
            className: el.className?.slice ? el.className.slice(0, 50) : '',
            right: Math.round(el.getBoundingClientRect().right)
          }));

        // Check body text size
        const paragraphs = Array.from(document.querySelectorAll('p:not(.type-small)'));
        const smallParagraphs = paragraphs.filter(p => {
          const fs = parseFloat(window.getComputedStyle(p).fontSize);
          return fs < 15.5; // under 16px
        }).length;

        // Check hamburger menu presence on mobile (< 1024px)
        const hamburger = document.querySelector('button[aria-label="Toggle Navigation Menu"]');
        const isHamburgerVisible = hamburger ? (window.getComputedStyle(hamburger).display !== 'none') : false;

        return {
          hasHorizontalScroll,
          docWidth,
          winWidth,
          smallTouchButtonsCount: smallTouchButtons.length,
          smallTouchButtons: smallTouchButtons.slice(0, 3),
          overflowingElementsCount: overflowingElements.length,
          overflowingElements,
          smallParagraphsCount: smallParagraphs,
          isHamburgerVisible
        };
      }, vp.width);

      if (res.hasHorizontalScroll || res.smallTouchButtonsCount > 0 || res.overflowingElementsCount > 0 || (vp.width < 1024 && !res.isHamburgerVisible)) {
        issues.push({
          viewport: `${vp.label} (${vp.width}px)`,
          route: r.name,
          ...res
        });
      }
    }
  }

  await browser.close();
  console.log('Issues found:', issues.length);
  if (issues.length > 0) {
    console.log(JSON.stringify(issues, null, 2));
  } else {
    console.log('ALL SCREEN SIZES PASSED PERFECTLY!');
  }
}

runTests().catch(console.error);
