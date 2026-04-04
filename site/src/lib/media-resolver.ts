import fs from 'node:fs/promises';
import path from 'node:path';
import type { MediaManifest } from './types';

export type ResolveFunction = (entity: string, type: string) => string | null;

export async function createMediaResolver(wikiPath: string): Promise<ResolveFunction> {
  const manifestPath = path.join(wikiPath, 'media-manifest.json');
  let manifest: MediaManifest;

  try {
    const raw = await fs.readFile(manifestPath, 'utf-8');
    const parsed = JSON.parse(raw);
    manifest = {
      project: parsed.project,
      toneDirective: parsed.tone_directive,
      styleSeed: parsed.style_seed,
      assets: parsed.assets.map((a: Record<string, unknown>) => ({
        entity: a.entity,
        type: a.type,
        model: a.model,
        prompt: a.prompt,
        negativePrompt: a.negative_prompt,
        voiceParams: a.voice_params,
        output: a.output,
        status: a.status,
      })),
    };
  } catch {
    return () => null;
  }

  const lookup = new Map<string, string>();
  for (const asset of manifest.assets) {
    if (asset.status === 'done' || asset.status === 'override') {
      lookup.set(`${asset.entity}:${asset.type}`, asset.output as string);
    }
  }

  return (entity: string, type: string): string | null => {
    return lookup.get(`${entity}:${type}`) ?? null;
  };
}
