/** Structured character data parsed from wiki markdown */
export interface Character {
  slug: string;
  name: string;
  quote: string | null;
  facet: string | null;
  enneagramType: string | null;
  sections: {
    ghost: string | null;
    lie: string | null;
    want: string | null;
    need: string | null;
    crucible: string | null;
    fears: string | null;
    darkSide: string | null;
    lifeLessons: string | null;
    paradox: string | null;
    hereAndNow: string | null;
  };
}

/** Dark Side stage parsed from the Dark Side section */
export interface DarkSideStage {
  stage: number;
  title: string;
  description: string;
}

/** Location data parsed from world.md sub-worlds */
export interface Location {
  slug: string;
  name: string;
  location: string | null;
  atmosphere: string | null;
  rules: string | null;
  powerStructure: string | null;
  themeExpression: string | null;
  characters: string | null;
}

/** Relationship between two characters */
export interface Relationship {
  characterA: string;
  characterB: string;
  type: string;
  dynamic: string;
}

/** Collision pair from ensemble */
export interface CollisionPair {
  characterA: string;
  characterB: string;
  collisionType: string;
  whyTheyCollide: string;
  themeExpression: string;
}

/** Asset entry from media-manifest.json */
export interface MediaAsset {
  entity: string;
  type: string;
  model: string;
  prompt: string;
  negativePrompt?: string;
  voiceParams?: Record<string, string>;
  output: string;
  status: 'pending' | 'generating' | 'done' | 'failed' | 'skipped' | 'override';
}

/** Full media manifest */
export interface MediaManifest {
  project: string;
  toneDirective: string;
  styleSeed: string;
  assets: MediaAsset[];
}

/** Site configuration */
export interface SiteConfig {
  project: string;
  wiki_path: string;
  mode: 'private' | 'public';
  title: string;
  logline: string;
  theme: {
    palette: string;
    font: string;
  };
  audio: {
    autoplay: boolean;
    ambient: boolean;
  };
  visibility: {
    dark_side: boolean;
    ghost_lie: boolean;
    relationships: boolean;
    mood_reels: boolean;
  };
}
