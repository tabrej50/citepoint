const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function walk(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(walk(full));
    } else if (full.endsWith('.jsx') || full.endsWith('.js') || full.endsWith('.css')) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(srcDir);
const fixedWidthMatches = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    // Check for fixed width classes that are >= 300px and lack responsive prefixes
    const match = line.match(/\b(w-\[\d{3,}px\]|min-w-\[\d{3,}px\])/g);
    if (match) {
      // Check if it's not prefixed with sm:, md:, lg:, xl:
      const rawClasses = line.match(/className=["']([^"']+)["']/);
      if (rawClasses) {
        const classes = rawClasses[1].split(/\s+/);
        classes.forEach(cls => {
          if (/^(w|min-w)-\[\d{3,}px\]$/.test(cls)) {
            const val = parseInt(cls.match(/\d+/)[0], 10);
            if (val > 300) {
              fixedWidthMatches.push({ file: path.relative(srcDir, file), line: idx + 1, cls });
            }
          }
        });
      }
    }
  });
}

console.log('Fixed width matches > 300px without breakpoint:');
console.log(JSON.stringify(fixedWidthMatches, null, 2));
