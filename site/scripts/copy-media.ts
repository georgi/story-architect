import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const siteDir = path.resolve(__dirname, '..');
const repoRoot = path.resolve(siteDir, '..');
const configPath = path.join(siteDir, 'site-config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const wikiPath = path.resolve(siteDir, config.wiki_path);
const dest = path.join(siteDir, 'public', 'media');
const manifestPath = path.join(wikiPath, 'media-manifest.json');

if (!fs.existsSync(manifestPath)) {
  console.log(`No manifest at ${manifestPath}, skipping.`);
  process.exit(0);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
let copied = 0;
let skipped = 0;

for (const asset of manifest.assets) {
  if (asset.status !== 'done' && asset.status !== 'override') continue;

  const output: string = asset.output; // e.g. "media/characters/elena/voice.mp3"
  const relPath = output.replace(/^media\//, '');
  const destPath = path.join(dest, relPath);

  // Try multiple source locations in priority order:
  // 1. wiki project media dir (wiki/projects/<project>/media/...)
  // 2. repo root (media/...)
  const candidates = [
    path.join(wikiPath, 'media', relPath),
    path.join(repoRoot, output),
  ];

  const srcPath = candidates.find(c => fs.existsSync(c));
  if (!srcPath) {
    console.warn(`MISSING: ${output} (searched ${candidates.join(', ')})`);
    skipped++;
    continue;
  }

  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(srcPath, destPath);
  copied++;
}

console.log(`Copied ${copied} asset(s), ${skipped} missing.`);
