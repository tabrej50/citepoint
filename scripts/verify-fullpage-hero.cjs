const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';
const screenshotDir = 'C:\\Users\\Parvej\\.gemini\\antigravity\\brain\\ccb23f0b-9aca-47ce-a62f-b8cf133c7f19';

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Desktop 1440x900 initial viewport
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/#/`, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(screenshotDir, 'fullpage_hero_1440x900.png') });

  // Mobile 390x844 initial viewport
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/#/`, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(screenshotDir, 'fullpage_hero_mobile_390.png') });

  // Measure hero element bounding box
  await page.setViewport({ width: 1440, height: 900 });
  const heroBox = await page.evaluate(() => {
    const hero = document.getElementById('hero');
    if (!hero) return null;
    const rect = hero.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      top: rect.top,
      bottom: rect.bottom,
      viewportHeight: window.innerHeight
    };
  });

  console.log('Hero metrics at 1440x900:', JSON.stringify(heroBox));

  await browser.close();
  console.log('Capture finished successfully.');
}

verify().catch(console.error);
