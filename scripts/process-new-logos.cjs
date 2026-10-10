const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const darkImgPath = 'C:/Users/Parvej/.gemini/antigravity/brain/ccb23f0b-9aca-47ce-a62f-b8cf133c7f19/.user_uploaded/media_1791653753839_8f99d3e6.png';
const lightImgPath = 'C:/Users/Parvej/.gemini/antigravity/brain/ccb23f0b-9aca-47ce-a62f-b8cf133c7f19/.user_uploaded/media_1791653753854_2b785e1a.png';
const brandDir = path.join(__dirname, '..', 'public', 'assets', 'brand');
const artifactDir = 'C:\\Users\\Parvej\\.gemini\\antigravity\\brain\\ccb23f0b-9aca-47ce-a62f-b8cf133c7f19';

async function processLogos() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  const darkDataUrl = 'data:image/png;base64,' + fs.readFileSync(darkImgPath).toString('base64');
  const lightDataUrl = 'data:image/png;base64,' + fs.readFileSync(lightImgPath).toString('base64');

  const results = await page.evaluate(async (darkSrc, lightSrc) => {
    // Helper to load image
    const loadImg = (src) => new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });

    const darkImg = await loadImg(darkSrc);
    const lightImg = await loadImg(lightSrc);

    // 1. Process Dark Logo -> Transparent Background
    const darkCanvas = document.createElement('canvas');
    darkCanvas.width = darkImg.width;
    darkCanvas.height = darkImg.height;
    const darkCtx = darkCanvas.getContext('2d');
    darkCtx.drawImage(darkImg, 0, 0);

    const darkData = darkCtx.getImageData(0, 0, darkCanvas.width, darkCanvas.height);
    const dd = darkData.data;

    // Find bounding box of non-black content
    let minX = darkCanvas.width, maxX = 0, minY = darkCanvas.height, maxY = 0;

    for (let y = 0; y < darkCanvas.height; y++) {
      for (let x = 0; x < darkCanvas.width; x++) {
        const i = (y * darkCanvas.width + x) * 4;
        const r = dd[i], g = dd[i+1], b = dd[i+2];
        const maxVal = Math.max(r, g, b);

        if (maxVal > 20) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }

        // De-black transparency calculation
        // Check if pixel is red or white/gray
        const isRed = (r > 100) && (r > g * 2.2) && (r > b * 2.2);

        if (isRed) {
          // Red emblem / divider / dot
          // Red core color in image is ~ (225, 4, 8)
          const targetR = 230, targetG = 10, targetB = 14;
          const alpha = Math.min(1, Math.max(0, (r - 10) / 215));
          if (alpha < 0.04) {
            dd[i+3] = 0;
          } else {
            dd[i] = targetR;
            dd[i+1] = targetG;
            dd[i+2] = targetB;
            dd[i+3] = Math.round(alpha * 255);
          }
        } else {
          // White / gray text
          const brightness = Math.max(r, g, b);
          const alpha = Math.min(1, Math.max(0, (brightness - 12) / 240));
          if (alpha < 0.04) {
            dd[i+3] = 0;
          } else {
            dd[i] = 255;
            dd[i+1] = 255;
            dd[i+2] = 255;
            dd[i+3] = Math.round(alpha * 255);
          }
        }
      }
    }
    darkCtx.putImageData(darkData, 0, 0);

    // Crop tightly with slight comfortable padding (12px top/bottom, 16px left/right)
    const padY = 12;
    const padX = 16;
    const cropMinX = Math.max(0, minX - padX);
    const cropMaxX = Math.min(darkCanvas.width - 1, maxX + padX);
    const cropMinY = Math.max(0, minY - padY);
    const cropMaxY = Math.min(darkCanvas.height - 1, maxY + padY);

    const cropW = cropMaxX - cropMinX + 1;
    const cropH = cropMaxY - cropMinY + 1;

    const croppedDarkCanvas = document.createElement('canvas');
    croppedDarkCanvas.width = cropW;
    croppedDarkCanvas.height = cropH;
    const croppedDarkCtx = croppedDarkCanvas.getContext('2d');
    croppedDarkCtx.drawImage(darkCanvas, cropMinX, cropMinY, cropW, cropH, 0, 0, cropW, cropH);

    // Also extract the standalone Red Icon (emblem)
    // In dark image, emblem is on the left before the divider line
    // Divider line is at roughly minX + 220px. Let's find divider line.
    let dividerX = minX;
    for (let x = minX + 150; x < minX + 300; x++) {
      let redCount = 0;
      for (let y = minY; y <= maxY; y++) {
        const i = (y * darkCanvas.width + x) * 4;
        if (dd[i] > 180 && dd[i+3] > 100) redCount++;
      }
      // Divider line is thin vertical line with lots of vertical red pixels
      if (redCount > (maxY - minY) * 0.7) {
        dividerX = x;
        break;
      }
    }

    const iconCropW = (dividerX > minX ? dividerX - minX - 10 : 200);
    const iconCanvas = document.createElement('canvas');
    iconCanvas.width = iconCropW + padX * 2;
    iconCanvas.height = cropH;
    const iconCtx = iconCanvas.getContext('2d');
    iconCtx.drawImage(darkCanvas, Math.max(0, minX - padX), cropMinY, iconCanvas.width, cropH, 0, 0, iconCanvas.width, cropH);

    // 2. Process Light Logo -> Transparent Background
    const lightCanvas = document.createElement('canvas');
    lightCanvas.width = lightImg.width;
    lightCanvas.height = lightImg.height;
    const lightCtx = lightCanvas.getContext('2d');
    lightCtx.drawImage(lightImg, 0, 0);

    const lightData = lightCtx.getImageData(0, 0, lightCanvas.width, lightCanvas.height);
    const ld = lightData.data;

    for (let y = 0; y < lightCanvas.height; y++) {
      for (let x = 0; x < lightCanvas.width; x++) {
        const i = (y * lightCanvas.width + x) * 4;
        const r = ld[i], g = ld[i+1], b = ld[i+2];

        // Is pixel background white?
        if (r > 245 && g > 245 && b > 245) {
          ld[i+3] = 0;
          continue;
        }

        const isRed = (r > 120) && (r > g * 1.8) && (r > b * 1.8);

        if (isRed) {
          // Red emblem / divider / dot over white
          // Recover alpha from green/blue channel
          const targetR = 230, targetG = 10, targetB = 14;
          const bgVal = 255;
          const alpha = Math.min(1, Math.max(0, (bgVal - Math.min(g, b)) / 225));
          if (alpha < 0.05) {
            ld[i+3] = 0;
          } else {
            ld[i] = targetR;
            ld[i+1] = targetG;
            ld[i+2] = targetB;
            ld[i+3] = Math.round(alpha * 255);
          }
        } else {
          // Black / dark text over white
          const darkness = 255 - Math.min(r, g, b);
          const alpha = Math.min(1, Math.max(0, (darkness - 10) / 240));
          if (alpha < 0.05) {
            ld[i+3] = 0;
          } else {
            ld[i] = 17;
            ld[i+1] = 17;
            ld[i+2] = 17;
            ld[i+3] = Math.round(alpha * 255);
          }
        }
      }
    }
    lightCtx.putImageData(lightData, 0, 0);

    const croppedLightCanvas = document.createElement('canvas');
    croppedLightCanvas.width = cropW;
    croppedLightCanvas.height = cropH;
    const croppedLightCtx = croppedLightCanvas.getContext('2d');
    croppedLightCtx.drawImage(lightCanvas, cropMinX, cropMinY, cropW, cropH, 0, 0, cropW, cropH);

    return {
      darkFullTransparent: darkCanvas.toDataURL('image/png'),
      darkCroppedTransparent: croppedDarkCanvas.toDataURL('image/png'),
      lightCroppedTransparent: croppedLightCanvas.toDataURL('image/png'),
      iconTransparent: iconCanvas.toDataURL('image/png'),
      crop: { cropW, cropH, minX, maxX, minY, maxY, dividerX }
    };
  }, darkDataUrl, lightDataUrl);

  // Write outputs
  const saveBase64 = (dataUrl, filePath) => {
    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
    fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
    console.log('Saved:', filePath);
  };

  // 1. Update public/assets/brand/
  saveBase64(results.darkCroppedTransparent, path.join(brandDir, 'logo-dark-transparent.png'));
  saveBase64(results.lightCroppedTransparent, path.join(brandDir, 'logo-light-transparent.png'));
  saveBase64(results.iconTransparent, path.join(brandDir, 'logo-icon-red.png'));

  // Also save copy of raw uploaded logos as originals
  fs.copyFileSync(darkImgPath, path.join(brandDir, 'logo-dark-solid.png'));
  fs.copyFileSync(lightImgPath, path.join(brandDir, 'logo-light-solid.png'));

  // Save copies to artifact directory for verification review
  saveBase64(results.darkCroppedTransparent, path.join(artifactDir, 'new_logo_dark_transparent.png'));
  saveBase64(results.lightCroppedTransparent, path.join(artifactDir, 'new_logo_light_transparent.png'));

  console.log('Logo metrics:', results.crop);

  await browser.close();
}

processLogos().catch(console.error);
