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

  try {
    const page = await browser.newPage();

    // 1. Desktop Top (1440x900)
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/#/`, { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1500));

    await page.screenshot({
      path: path.join(screenshotDir, 'liquid_glass_header_desktop.png'),
      clip: { x: 0, y: 0, width: 1440, height: 350 }
    });
    console.log('Saved liquid_glass_header_desktop.png');

    // 2. Button Hover State
    const btn = await page.$('.btn-liquid-glass');
    if (btn) {
      await btn.hover();
      await new Promise(r => setTimeout(r, 500));
      await page.screenshot({
        path: path.join(screenshotDir, 'liquid_glass_btn_hover.png'),
        clip: { x: 900, y: 0, width: 540, height: 200 }
      });
      console.log('Saved liquid_glass_btn_hover.png');
    }

    // 3. Scrolled State (shows backdrop distortion over content)
    await page.evaluate(() => window.scrollTo(0, 500));
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({
      path: path.join(screenshotDir, 'liquid_glass_header_scrolled.png'),
      clip: { x: 0, y: 0, width: 1440, height: 350 }
    });
    console.log('Saved liquid_glass_header_scrolled.png');

    // 4. Mobile (390x844)
    await page.setViewport({ width: 390, height: 844 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: path.join(screenshotDir, 'liquid_glass_mobile.png'),
      clip: { x: 0, y: 0, width: 390, height: 300 }
    });
    console.log('Saved liquid_glass_mobile.png');

    // 5. Mobile Open Drawer
    const mobileBtn = await page.$('button[aria-label="Toggle Navigation Menu"]');
    if (mobileBtn) {
      await mobileBtn.click();
      await new Promise(r => setTimeout(r, 600));
      await page.screenshot({
        path: path.join(screenshotDir, 'liquid_glass_mobile_open.png'),
        clip: { x: 0, y: 0, width: 390, height: 500 }
      });
      console.log('Saved liquid_glass_mobile_open.png');
    }

  } finally {
    await browser.close();
  }
  console.log('All liquid glass verifications complete.');
}

verify().catch(console.error);
