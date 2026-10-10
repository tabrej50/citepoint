const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3000';
const screenshotDir = 'C:\\Users\\Parvej\\.gemini\\antigravity\\brain\\ccb23f0b-9aca-47ce-a62f-b8cf133c7f19';

const pagesToCapture = [
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

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const p of pagesToCapture) {
    // 1440px
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`${BASE_URL}/${p.hash}`, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(screenshotDir, `audit_1440_${p.name}.png`) });

    // 390px
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}/${p.hash}`, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: path.join(screenshotDir, `audit_390_${p.name}.png`) });
  }

  await browser.close();
  console.log('Done capturing screenshots');
}

capture().catch(console.error);
