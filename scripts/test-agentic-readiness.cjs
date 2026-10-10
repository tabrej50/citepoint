const fs = require('fs');
const http = require('http');

async function testUrl(path, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path,
      method: 'GET',
      headers
    }, (res) => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body
        });
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function runAudit() {
  console.log('=== CITEPONT AGENTIC READINESS AUDIT SUITE ===\n');

  let passed = 0;
  let total = 0;

  function assert(condition, message) {
    total++;
    if (condition) {
      console.log(`[PASS] ${message}`);
      passed++;
    } else {
      console.error(`[FAIL] ${message}`);
    }
  }

  // 1. Content is available without JavaScript (> 500 chars raw text, H1 present)
  const indexHtml = fs.readFileSync('dist/index.html', 'utf8');
  const cleanIndex = indexHtml
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '');
  const rawText = cleanIndex.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  assert(rawText.length >= 500, `Raw HTML homepage text length is ${rawText.length} chars (>= 500)`);
  assert(/<h1[^>]*>.*?<\/h1>/i.test(indexHtml), 'Homepage has an explicit H1 heading');
  assert(/<h2[^>]*>.*?<\/h2>/i.test(indexHtml), 'Homepage has sequential H2 headings');

  // 2. Metadata completeness (canonical, lang, og:image, og:type)
  assert(/<link[^>]+rel=["']canonical["'][^>]+href=["']https:\/\/citepoint\.xyz\/["']/i.test(indexHtml), 'Homepage has <link rel="canonical" href="https://citepoint.xyz/">');
  assert(/<html[^>]+lang=["']en["']/i.test(indexHtml), 'Homepage has <html lang="...">');
  assert(/<meta[^>]+property=["']og:image["'][^>]+content=["']https:\/\/citepoint\.xyz\/assets\/brand\/og-image\.png["']/i.test(indexHtml), 'Homepage has absolute <meta property="og:image">');
  assert(/<meta[^>]+property=["']og:type["'][^>]+content=["']website["']/i.test(indexHtml), 'Homepage has <meta property="og:type">');

  // 3. Organization schema completeness (contactPoint, address)
  assert(indexHtml.includes('"contactPoint"') && indexHtml.includes('"telephone"'), 'Organization JSON-LD includes contactPoint with telephone/email');
  assert(indexHtml.includes('"address"') && indexHtml.includes('"PostalAddress"'), 'Organization JSON-LD includes PostalAddress');

  // 4. Agent instruction / when-to-use in llms.txt
  assert(fs.existsSync('dist/llms.txt'), 'dist/llms.txt exists');
  const llmsTxt = fs.readFileSync('dist/llms.txt', 'utf8');
  assert(llmsTxt.includes('## When to Use Citepoint'), 'llms.txt contains "When to Use Citepoint" section');
  assert(llmsTxt.includes('## When NOT to Use Citepoint'), 'llms.txt contains "When NOT to Use Citepoint" section');
  assert(llmsTxt.includes('## How Agents Should Call & Interact with Citepoint'), 'llms.txt details how agents call/interact with Citepoint');
  assert(llmsTxt.length >= 1000, `llms.txt has detailed content (${llmsTxt.length} chars)`);

  // 5. Trust anchor pages (about, contact, privacy) >= 500 chars
  for (const anchor of ['about', 'contact', 'privacy']) {
    const file = `dist/${anchor}/index.html`;
    assert(fs.existsSync(file), `${file} exists`);
    const content = fs.readFileSync(file, 'utf8')
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
      .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    assert(content.length >= 500, `/${anchor} raw content length is ${content.length} chars (>= 500)`);
  }

  // 6. Markdown content negotiation (acceptmarkdown.com) via local dev server
  const mdRes = await testUrl('/', { 'Accept': 'text/markdown' });
  assert(mdRes.statusCode === 200, `GET / with Accept: text/markdown returns HTTP 200 (got ${mdRes.statusCode})`);
  assert(mdRes.headers['content-type'] && mdRes.headers['content-type'].includes('text/markdown'), `Content-Type is text/markdown (got ${mdRes.headers['content-type']})`);
  assert(mdRes.headers['vary'] && mdRes.headers['vary'].includes('Accept'), `Vary header includes Accept (got ${mdRes.headers['vary']})`);
  assert(mdRes.body.includes('# Citepoint') && mdRes.body.length > 500, `Nonempty Markdown body returned (${mdRes.body.length} chars)`);

  const htmlRes = await testUrl('/', { 'Accept': 'text/html' });
  assert(htmlRes.statusCode === 200, `GET / with Accept: text/html returns HTTP 200 (got ${htmlRes.statusCode})`);
  assert(htmlRes.headers['content-type'] && htmlRes.headers['content-type'].includes('text/html'), `Content-Type is text/html (got ${htmlRes.headers['content-type']})`);
  assert(htmlRes.headers['vary'] && htmlRes.headers['vary'].includes('Accept'), `HTML response has Vary: Accept (got ${htmlRes.headers['vary']})`);

  // 7. Agent-friendly 404s with Accept: text/markdown
  const probe404 = await testUrl('/__ora-404-probe-7uixj9pc', { 'Accept': 'text/markdown' });
  assert(probe404.statusCode === 404, `Probed non-existent path returns HTTP 404 (got ${probe404.statusCode})`);
  assert(probe404.headers['content-type'] && probe404.headers['content-type'].includes('text/markdown'), `404 Content-Type is text/markdown (got ${probe404.headers['content-type']})`);
  assert(probe404.body.length >= 20, `Markdown 404 body has at least 20 chars (got ${probe404.body.length})`);
  assert(probe404.body.includes('llms.txt') || probe404.body.includes('sitemap.xml'), 'Markdown 404 body includes links to docs/sitemap/llms.txt');

  console.log(`\nAUDIT RESULT: ${passed}/${total} checks passed (${Math.round((passed/total)*100)}%)\n`);

  if (passed === total) {
    console.log('ALL AGENTIC READINESS CHECKS PASSED PERFECTLY!');
  } else {
    process.exitCode = 1;
  }
}

runAudit().catch(err => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
