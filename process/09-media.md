# 09 MEDIA — Asset Generation

## When

After pitch (or earlier if visual exploration aids development). Media generation is independent of narrative phase — you can generate assets for any entity that has enough wiki content.

## Prerequisites

- Characters at draft+ (need Here and Now, Ghost, Dark Side for portraits/voice)
- Locations at draft+ (need Atmosphere field for images/audio)
- Tone at draft+ (need Visual/Sensory Language for style coherence)

## Agent

`media-director` — reads the wiki, derives prompts, writes the manifest, generates via fal MCP.

## Process

### Step 1: Plan (`/media-plan`)

The media-director reads all wiki entities and `tone.md`. From this it derives:

- **tone_directive**: One sentence visual/audio direction from tone.md
- **style_seed**: Prompt fragment appended to every image prompt for visual coherence

For each entity, it creates asset entries with:
- fal model selection (Flux Pro for images, Stable Audio for music/ambient, PlayAI TTS for voice, MiniMax for video)
- Generation prompt derived from wiki content
- Output path following the standard media directory structure

Output: `wiki/projects/[PROJECT]/media-manifest.json`

### Step 2: Review

The user reviews the manifest:
- Check prompts for specificity (no generic descriptions)
- Verify style_seed enforces coherent visual world
- Edit prompts, skip items, or change models
- Estimate cost before generation

### Step 3: Generate (`/media-generate`)

Processes all `pending` items in the manifest:
- Sets status to `generating`
- Calls fal MCP
- Saves output file
- Updates status to `done` or `failed`

Incremental: re-running only processes `pending` and `failed` items.

### Step 4: Override

Any generated asset can be replaced:
1. Place your file at the same output path
2. Set the manifest entry status to `override`

The site builder treats all assets identically regardless of origin.

## Asset Types

| Entity | Type | Model | Output |
|---|---|---|---|
| Character | Portrait | fal-ai/flux-pro | media/characters/[name]/portrait.webp |
| Character | Voice sample | fal-ai/playai/tts | media/characters/[name]/voice-sample.mp3 |
| Character | Theme music | fal-ai/stable-audio | media/characters/[name]/theme-music.mp3 |
| Character | Mood reel | fal-ai/minimax-video | media/characters/[name]/mood-reel.mp4 |
| Location | Atmosphere | fal-ai/flux-pro | media/locations/[name]/atmosphere.webp |
| Location | Ambient audio | fal-ai/stable-audio | media/locations/[name]/ambient.mp3 |
| Project | Main theme | fal-ai/stable-audio | media/atmosphere/main-theme.mp3 |
| Project | OG image | fal-ai/flux-pro | media/atmosphere/og-image.webp |

## Prompt Quality Rules

1. **Specificity over beauty.** "A harbor at dusk" fails. "Container cranes silhouetted against magenta sky, wet concrete, sodium light pools" works.
2. **Character in portrait.** Physical details, clothing, posture, expression, AND environment.
3. **Style seed is law.** Append to every image prompt. Don't override with conflicting style words.
4. **No AI clichés.** No "epic", "stunning", "beautiful". Concrete visual language only.
5. **Audio has texture.** "Sad piano" fails. "Single upright piano, slightly detuned, sparse chords, 70 BPM" works.
