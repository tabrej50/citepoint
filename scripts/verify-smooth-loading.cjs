const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';
const screenshotDir = 'C:\\Users\\Parvej\\.gemini\\antigravity\\brain\\ccb23f0b-9aca-47ce-a62f-b8cf133c7f19';

async function testSmoothLoading() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const start = Date.now();
    await page.goto(`${BASE_URL}/#/`, { waitUntil: 'domcontentloaded' });
    const domTime = Date.now() - start;
    console.log(`DOMContentLoaded in ${domTime}ms`);

    // Capture immediately after DOM ready (Frame 0 test - zero flash & instant background)
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({
      path: path.join(screenshotDir, 'smooth_load_frame0.png')
    });
    console.log('Saved smooth_load_frame0.png');

    // Wait for video/interactive state
    await new Promise(r => setTimeout(r, 1200));
    await page.screenshot({
      path: path.join(screenshotDir, 'smooth_load_interactive.png')
    });
    console.log('Saved smooth_load_interactive.png');

    // Test smooth scroll to 800px (verifies hardware-accelerated parallax)
    await page.evaluate(() => window.scrollTo(0, 800));
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({
      path: path.join(screenshotDir, 'smooth_load_scrolled.png')
    });
    console.log('Saved smooth_load_scrolled.png');

    // Test route prefetch and navigation to Services
    const navItem = await page.$('.header-six nav button');
    if (navItem) {
      await navItem.hover();
      console.log('Hovered Services nav button (prefetch triggered)');
      await new Promise(r => setTimeout(r, 300));
      await navItem.click();
      console.log('Clicked Services');
      await new Promise(r => setTimeout(r, 600));
      await page.screenshot({
        path: path.join(screenshotDir, 'smooth_load_services_page.png')
      });
      console.log('Saved smooth_load_services_page.png');
    }

  } finally {
    await browser.close();
  }
  console.log('Smooth loading test finished.');
}

testSmoothLoading().catch(console.error);
