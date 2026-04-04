import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import type { Character, Location, CollisionPair, Relationship, DarkSideStage } from './types';

function slugify(name: string): string {
  return name.toLowerCase().replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const SECTION_MAP: Record<string, keyof Character['sections']> = {
  'ghost': 'ghost',
  'lie': 'lie',
  'want': 'want',
  'need': 'need',
  'crucible': 'crucible',
  'fears': 'fears',
  'dark side': 'darkSide',
  'life lessons': 'lifeLessons',
  'paradox': 'paradox',
  'here and now': 'hereAndNow',
};

function parseSections(content: string): Record<string, string> {
  const sections: Record<string, string> = {};
  const lines = content.split('\n');
  let currentSection: string | null = null;
  let currentContent: string[] = [];

  for (const line of lines) {
    const h2Match = line.match(/^## (.+)$/);
    if (h2Match) {
      if (currentSection) {
        sections[currentSection] = currentContent.join('\n').trim();
      }
      currentSection = h2Match[1].trim().toLowerCase();
      currentContent = [];
    } else if (currentSection) {
      currentContent.push(line);
    }
  }
  if (currentSection) {
    sections[currentSection] = currentContent.join('\n').trim();
  }
  return sections;
}

export async function loadCharacters(wikiPath: string): Promise<Character[]> {
  const charactersDir = path.join(wikiPath, 'characters');
  let files: string[];
  try {
    files = await fs.readdir(charactersDir);
  } catch {
    return [];
  }

  const characters: Character[] = [];
  for (const file of files) {
    if (!file.endsWith('.md') || file.startsWith('_')) continue;
    const filePath = path.join(charactersDir, file);
    const raw = await fs.readFile(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(raw);

    const slug = file.replace('.md', '');
    const nameMatch = content.match(/^# (.+)$/m);
    const name = nameMatch ? nameMatch[1].trim() : slug;

    const rawSections = parseSections(content);
    const sections: Character['sections'] = {
      ghost: null, lie: null, want: null, need: null, crucible: null,
      fears: null, darkSide: null, lifeLessons: null, paradox: null, hereAndNow: null,
    };
    for (const [rawKey, value] of Object.entries(rawSections)) {
      const mapped = SECTION_MAP[rawKey];
      if (mapped && value) {
        sections[mapped] = value;
      }
    }

    characters.push({
      slug,
      name,
      quote: frontmatter.quote ?? null,
      facet: frontmatter.facet ?? null,
      enneagramType: frontmatter.enneagram_type?.toString() ?? null,
      sections,
    });
  }
  return characters;
}

function parseSubWorlds(content: string): Location[] {
  const subWorldsMatch = content.match(/## Sub-Worlds\n([\s\S]*?)(?=\n## [^#]|$)/);
  if (!subWorldsMatch) return [];

  const subWorldsContent = subWorldsMatch[1];
  const locations: Location[] = [];
  const locationBlocks = subWorldsContent.split(/(?=### )/);

  for (const block of locationBlocks) {
    const nameMatch = block.match(/^### (.+)$/m);
    if (!nameMatch) continue;

    const name = nameMatch[1].trim();
    const slug = slugify(name);

    const getField = (label: string): string | null => {
      const match = block.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+?)(?=\\n\\*\\*|$)`, 's'));
      return match ? match[1].trim() : null;
    };

    locations.push({
      slug,
      name,
      location: getField('Location'),
      atmosphere: getField('Atmosphere'),
      rules: getField('Rules'),
      powerStructure: getField('Power Structure'),
      themeExpression: getField('Theme Expression'),
      characters: getField('Characters'),
    });
  }
  return locations;
}

export async function loadLocations(wikiPath: string): Promise<Location[]> {
  const worldPath = path.join(wikiPath, 'world.md');
  try {
    const content = await fs.readFile(worldPath, 'utf-8');
    return parseSubWorlds(content);
  } catch {
    return [];
  }
}

export async function loadRelationships(wikiPath: string): Promise<{
  collisionPairs: CollisionPair[];
  relationships: Relationship[];
}> {
  const ensemblePath = path.join(wikiPath, '_ensemble.md');
  try {
    const content = await fs.readFile(ensemblePath, 'utf-8');
    const collisionPairs: CollisionPair[] = [];
    const relationships: Relationship[] = [];

    // Parse collision pairs (### heading format)
    const collisionBlocks = content.split(/(?=### [^#])/);
    for (const block of collisionBlocks) {
      const nameMatch = block.match(/^### (.+?)\s*⚡\s*(.+?)$/m);
      if (!nameMatch) continue;

      const getField = (label: string): string => {
        const match = block.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+?)(?=\\n\\*\\*|$)`, 's'));
        return match ? match[1].trim() : '';
      };

      collisionPairs.push({
        characterA: nameMatch[1].trim(),
        characterB: nameMatch[2].trim(),
        collisionType: getField('Collision Type'),
        whyTheyCollide: getField('Why They Collide'),
        themeExpression: getField('Theme Expression'),
      });
    }

    // Parse relationship matrix table
    const tableMatch = content.match(/\| Character A.*\n\|[-| ]+\n((?:\|.*\n)*)/);
    if (tableMatch) {
      const rows = tableMatch[1].trim().split('\n');
      for (const row of rows) {
        const cells = row.split('|').map(c => c.trim()).filter(Boolean);
        if (cells.length >= 4) {
          relationships.push({
            characterA: cells[0],
            characterB: cells[1],
            type: cells[2],
            dynamic: cells[3],
          });
        }
      }
    }

    return { collisionPairs, relationships };
  } catch {
    return { collisionPairs: [], relationships: [] };
  }
}

export function parseDarkSideStages(darkSide: string | null): DarkSideStage[] {
  if (!darkSide) return [];
  const stages: DarkSideStage[] = [];
  const stageBlocks = darkSide.split(/(?=### Stage \d)/);

  for (const block of stageBlocks) {
    const match = block.match(/^### Stage (\d+): (.+)$/m);
    if (!match) continue;
    const description = block.replace(/^### .+$/m, '').trim();
    stages.push({
      stage: parseInt(match[1]),
      title: match[2].trim(),
      description,
    });
  }
  return stages;
}
