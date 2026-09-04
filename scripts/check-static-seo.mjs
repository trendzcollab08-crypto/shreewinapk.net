import fs from 'node:fs';
import path from 'node:path';

const outputDir = path.resolve('out');
const htmlFiles = [];

function walk(directory) {
  for (const name of fs.readdirSync(directory)) {
    const file = path.join(directory, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) walk(file);
    else if (name.endsWith('.html')) htmlFiles.push(file);
  }
}

function count(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

function localTarget(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || clean.startsWith('/_next/') || path.extname(clean)) return null;
  return clean === '/' ? path.join(outputDir, 'index.html') : path.join(outputDir, clean, 'index.html');
}

if (!fs.existsSync(outputDir)) {
  console.error('Static output is missing. Run npm run build:static first.');
  process.exit(1);
}

walk(outputDir);
const errors = [];
const indexableTitles = new Map();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const relative = path.relative(outputDir, file);
  const noindex = /<meta name="robots" content="[^"]*noindex/i.test(html);
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1]?.replace(/&amp;/g, '&').trim();

  if (count(html, /<h1\b/gi) !== 1) errors.push(`${relative}: expected exactly one H1`);
  if (!title) errors.push(`${relative}: missing title`);
  if (!/<meta name="description" content="[^"]+"/i.test(html)) errors.push(`${relative}: missing meta description`);
  if (!/<link rel="canonical" href="https:\/\/shreewinapk\.net\/[^"]*"/i.test(html)) errors.push(`${relative}: missing production canonical`);

  if (!noindex && title) {
    if (indexableTitles.has(title)) errors.push(`${relative}: duplicate title also used by ${indexableTitles.get(title)}`);
    indexableTitles.set(title, relative);
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/gi)) {
    const target = localTarget(match[1]);
    if (target && !fs.existsSync(target)) errors.push(`${relative}: broken internal link ${match[1]}`);
  }
}

if (!fs.existsSync(path.join(outputDir, 'sitemap.xml'))) errors.push('sitemap.xml is missing');
if (!fs.existsSync(path.join(outputDir, 'robots.txt'))) errors.push('robots.txt is missing');

if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exit(1);
}

console.log(`Static SEO check passed: ${htmlFiles.length} HTML files, unique indexable titles and no broken internal links.`);
