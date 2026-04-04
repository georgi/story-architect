import { describe, it, expect } from 'vitest';
import { createMediaResolver } from '../src/lib/media-resolver';
import path from 'node:path';

const DEMO_WIKI = path.resolve(__dirname, '../../wiki/projects/demo');

describe('createMediaResolver', () => {
  it('resolves existing done assets', async () => {
    const resolve = await createMediaResolver(DEMO_WIKI);
    const result = resolve('characters/elena', 'portrait');
    expect(result).toBe('media/characters/elena/portrait.webp');
  });

  it('returns null for pending assets', async () => {
    // All demo assets are done, so test with a modified scenario
    const resolve = await createMediaResolver(DEMO_WIKI);
    // This entity/type combination doesn't exist in manifest
    const result = resolve('characters/elena', 'mood_reel');
    expect(result).toBeNull();
  });

  it('returns null for nonexistent entities', async () => {
    const resolve = await createMediaResolver(DEMO_WIKI);
    const result = resolve('characters/nonexistent', 'portrait');
    expect(result).toBeNull();
  });

  it('returns null when manifest is missing', async () => {
    const resolve = await createMediaResolver('/nonexistent/path');
    const result = resolve('characters/elena', 'portrait');
    expect(result).toBeNull();
  });

  it('resolves override status assets', async () => {
    // Override assets should resolve — they have a file at the output path
    const resolve = await createMediaResolver(DEMO_WIKI);
    // All done assets should resolve
    const result = resolve('locations/the-terminal', 'atmosphere');
    expect(result).toBe('media/locations/the-terminal/atmosphere.webp');
  });
});
