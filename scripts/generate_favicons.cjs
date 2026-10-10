const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

function createIcoFromPngs(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerLength = 6;
  const entryLength = 16;
  let offset = headerLength + count * entryLength;

  const header = Buffer.alloc(headerLength);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // icon type
  header.writeUInt16LE(count, 4); // count

  const entries = [];
  const datas = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(entryLength);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(item.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset

    entries.push(entry);
    datas.push(item.buffer);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...datas]);
}

(async () => {
  const masterPath = 'public/assets/brand/_backup_gold/logo-icon-transparent.png';
  if (!fs.existsSync(masterPath)) {
    console.error('Master file not found:', masterPath);
    process.exit(1);
  }
  const masterBuf = fs.readFileSync(masterPath);
  const masterB64 = masterBuf.toString('base64');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage();

  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <body>
        <canvas id="canvas"></canvas>
      </body>
    </html>
  `);

  // Function to resize image using HTML5 Canvas in browser
  const resizeImage = async (size) => {
    return await page.evaluate(async (b64, s) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.getElementById('canvas');
          canvas.width = s;
          canvas.height = s;
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, s, s);
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, s, s);
          const dataUrl = canvas.toDataURL('image/png');
          resolve(dataUrl.split(',')[1]);
        };
        img.src = 'data:image/png;base64,' + b64;
      });
    }, masterB64, size);
  };

  console.log('Generating resized PNGs from gold master...');
  const png16B64 = await resizeImage(16);
  const png32B64 = await resizeImage(32);
  const png48B64 = await resizeImage(48);
  const png180B64 = await resizeImage(180);
  const png512B64 = await resizeImage(512);

  const png16 = Buffer.from(png16B64, 'base64');
  const png32 = Buffer.from(png32B64, 'base64');
  const png48 = Buffer.from(png48B64, 'base64');
  const png180 = Buffer.from(png180B64, 'base64');
  const png512 = Buffer.from(png512B64, 'base64');

  // 1. Write public/favicon-16x16.png
  fs.writeFileSync('public/favicon-16x16.png', png16);
  console.log('Wrote public/favicon-16x16.png (16x16)');

  // 2. Write public/favicon-32x32.png
  fs.writeFileSync('public/favicon-32x32.png', png32);
  console.log('Wrote public/favicon-32x32.png (32x32)');

  // 3. Write public/favicon.png (512x512)
  fs.writeFileSync('public/favicon.png', png512);
  console.log('Wrote public/favicon.png (512x512)');

  // 4. Write public/apple-touch-icon.png (180x180)
  fs.writeFileSync('public/apple-touch-icon.png', png180);
  console.log('Wrote public/apple-touch-icon.png (180x180)');

  // 5. Write public/assets/brand/logo-icon-gold.png & logo-icon-transparent.png
  fs.writeFileSync('public/assets/brand/logo-icon-gold.png', masterBuf);
  fs.writeFileSync('public/assets/brand/logo-icon-transparent.png', masterBuf);
  console.log('Updated public/assets/brand/logo-icon-gold.png and logo-icon-transparent.png with master');

  // 6. Write public/favicon.ico
  const icoBuf = createIcoFromPngs([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 }
  ]);
  fs.writeFileSync('public/favicon.ico', icoBuf);
  console.log('Wrote public/favicon.ico with 16x16, 32x32, 48x48');

  // 7. Write public/favicon.svg embedding the high-res 512x512 gold PNG
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <!-- Transparent background Champagne Gold Citepoint icon mark -->
  <image href="data:image/png;base64,${png512B64}" width="512" height="512" />
</svg>
`;
  fs.writeFileSync('public/favicon.svg', svgContent, 'utf8');
  console.log('Wrote public/favicon.svg');

  await browser.close();
  console.log('Favicon generation completed successfully!');
})();
