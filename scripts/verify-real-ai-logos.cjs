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

  // Desktop 1440x900
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/#/`, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(screenshotDir, 'real_ai_logos_hero_1440.png') });

  // Mobile 390x844
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(`${BASE_URL}/#/`, { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(screenshotDir, 'real_ai_logos_mobile_390.png') });

  await browser.close();
  console.log('Capture finished successfully.');
}

verify().catch(console.error);
