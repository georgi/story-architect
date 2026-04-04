import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const siteDir = path.resolve(__dirname, '..');
const configPath = path.join(siteDir, 'site-config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const source = path.resolve(siteDir, config.wiki_path, 'media');
const dest = path.join(siteDir, 'public', 'media');

function copyDir(src: string, dst: string) {
  if (!fs.existsSync(src)) {
    console.log(`No media directory at ${src}, skipping.`);
    return;
  }
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const dstPath = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, dstPath);
    } else {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
}

console.log(`Copying media from ${source} to ${dest}`);
copyDir(source, dest);
console.log('Done.');
