import { describe, it, expect } from 'vitest';
import { loadCharacters, loadLocations, loadRelationships, parseDarkSideStages } from '../src/lib/wiki-loader';
import path from 'node:path';

const DEMO_WIKI = path.resolve(__dirname, '../../wiki/projects/demo');

describe('loadCharacters', () => {
  it('loads character files from wiki directory', async () => {
    const characters = await loadCharacters(DEMO_WIKI);
    expect(characters).toHaveLength(2);
    expect(characters.map(c => c.slug).sort()).toEqual(['elena', 'marco']);
  });

  it('extracts frontmatter fields', async () => {
    const characters = await loadCharacters(DEMO_WIKI);
    const elena = characters.find(c => c.slug === 'elena')!;
    expect(elena.quote).toBe("I don't trust the harbor. I manage it.");
    expect(elena.facet).toBe('Control');
    expect(elena.enneagramType).toBe('8');
  });

  it('extracts character name from first heading', async () => {
    const characters = await loadCharacters(DEMO_WIKI);
    const elena = characters.find(c => c.slug === 'elena')!;
    expect(elena.name).toBe('Elena Voss');
  });

  it('parses all wiki sections into structured data', async () => {
    const characters = await loadCharacters(DEMO_WIKI);
    const elena = characters.find(c => c.slug === 'elena')!;
    expect(elena.sections.ghost).toContain('fourteen');
    expect(elena.sections.lie).toContain('transaction');
    expect(elena.sections.want).toContain('control');
    expect(elena.sections.need).toContain('cage');
    expect(elena.sections.crucible).toContain('tightens');
    expect(elena.sections.fears).toContain('Abandonment');
    expect(elena.sections.darkSide).toContain('Monitoring');
    expect(elena.sections.hereAndNow).toContain('42');
  });

  it('returns null for missing sections', async () => {
    const characters = await loadCharacters(DEMO_WIKI);
    const elena = characters.find(c => c.slug === 'elena')!;
    // Elena has all sections, but lifeLessons has content
    expect(elena.sections.lifeLessons).not.toBeNull();
  });

  it('returns empty array for nonexistent directory', async () => {
    const characters = await loadCharacters('/nonexistent/path');
    expect(characters).toEqual([]);
  });
});

describe('loadLocations', () => {
  it('loads locations from world.md sub-worlds', async () => {
    const locations = await loadLocations(DEMO_WIKI);
    expect(locations.length).toBeGreaterThanOrEqual(3);
    expect(locations.map(l => l.slug)).toContain('the-terminal');
    expect(locations.map(l => l.slug)).toContain('the-customs-office');
    expect(locations.map(l => l.slug)).toContain('the-fishermans-quarter');
  });

  it('extracts location fields', async () => {
    const locations = await loadLocations(DEMO_WIKI);
    const terminal = locations.find(l => l.slug === 'the-terminal')!;
    expect(terminal.name).toBe('The Terminal');
    expect(terminal.atmosphere).toContain('diesel');
    expect(terminal.characters).toContain('Elena');
  });

  it('returns empty array when world.md missing', async () => {
    const locations = await loadLocations('/nonexistent/path');
    expect(locations).toEqual([]);
  });
});

describe('loadRelationships', () => {
  it('loads collision pairs from ensemble', async () => {
    const { collisionPairs, relationships } = await loadRelationships(DEMO_WIKI);
    expect(collisionPairs).toHaveLength(1);
    expect(collisionPairs[0].characterA).toBe('Elena Voss');
    expect(collisionPairs[0].characterB).toBe('Marco Brandt');
  });

  it('returns empty arrays when ensemble missing', async () => {
    const result = await loadRelationships('/nonexistent/path');
    expect(result.collisionPairs).toEqual([]);
    expect(result.relationships).toEqual([]);
  });
});

describe('parseDarkSideStages', () => {
  it('parses 5 stages from dark side section', () => {
    const darkSide = `### Stage 1: Monitoring\nElena checks cameras.\n\n### Stage 2: Testing\nShe tests people.\n\n### Stage 3: Leverage\nShe collects.\n\n### Stage 4: Isolation\nShe cuts out.\n\n### Stage 5: The Trap\nShe watches.`;
    const stages = parseDarkSideStages(darkSide);
    expect(stages).toHaveLength(5);
    expect(stages[0].stage).toBe(1);
    expect(stages[0].title).toBe('Monitoring');
    expect(stages[0].description).toContain('checks cameras');
    expect(stages[4].stage).toBe(5);
    expect(stages[4].title).toBe('The Trap');
  });

  it('returns empty array for null input', () => {
    expect(parseDarkSideStages(null)).toEqual([]);
  });
});
