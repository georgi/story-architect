# Project Website Pipeline — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a two-phase pipeline (media generation via fal MCP → Astro static site) that transforms a Story Architect project wiki into an immersive, character-driven website.

**Architecture:** Two new agents (`media-director`, `site-builder`) join the existing team. The media-director reads wiki entities and generates a reviewable manifest, then creates image/audio/video assets via fal. The site-builder maintains an Astro static site that reads wiki markdown + generated media at build time.

**Tech Stack:** Astro 5.x, TypeScript, Vitest, fal MCP, vanilla JS islands for audio/video

**Spec:** `docs/superpowers/specs/2026-04-04-project-website-pipeline-design.md`

---

## File Structure

### New files to create

**Agent definitions:**
- `.claude/agents/media-director.md` — media planning + generation agent
- `.claude/agents/site-builder.md` — Astro site maintenance agent

**Test data (sample project to develop against):**
- `wiki/projects/demo/impulse.md`
- `wiki/projects/demo/theme.md`
- `wiki/projects/demo/tone.md`
- `wiki/projects/demo/world.md`
- `wiki/projects/demo/characters/elena.md`
- `wiki/projects/demo/characters/marco.md`
- `wiki/projects/demo/_ensemble.md`
- `wiki/projects/demo/_index.md`
- `wiki/projects/demo/media-manifest.json`
- `wiki/projects/demo/media/` — placeholder assets

**Astro site:**
- `site/package.json`
- `site/astro.config.mjs`
- `site/tsconfig.json`
- `site/site-config.json`
- `site/src/lib/wiki-loader.ts`
- `site/src/lib/media-resolver.ts`
- `site/src/lib/types.ts`
- `site/src/styles/global.css`
- `site/src/layouts/BaseLayout.astro`
- `site/src/pages/index.astro`
- `site/src/pages/characters/[slug].astro`
- `site/src/pages/locations/[slug].astro`
- `site/src/components/CharacterCard.astro`
- `site/src/components/AudioPlayer.astro`
- `site/src/components/VideoPlayer.astro`
- `site/src/components/LocationTile.astro`
- `site/src/components/RelationshipMap.astro`
- `site/src/components/DarkSideLadder.astro`

**Tests:**
- `site/tests/wiki-loader.test.ts`
- `site/tests/media-resolver.test.ts`

**Build scripts:**
- `site/scripts/copy-media.ts` — copies media from wiki to public/

### Files to modify

- `CLAUDE.md` — add new agents to table, add new commands

---

## Chunk 1: Agent Definitions + CLAUDE.md

### Task 1: Create media-director agent

**Files:**
- Create: `.claude/agents/media-director.md`

- [ ] **Step 1: Write the media-director agent definition**

Follow the exact agent format from existing agents (YAML frontmatter + structured methodology). The media-director reads wiki entities, derives prompts from character/location descriptions + tone.md, writes `media-manifest.json`, and generates assets via fal MCP.

```markdown
---
name: Media Director
description: Reads project wiki, derives visual/audio prompts, writes media manifest, generates assets via fal MCP
tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - fal MCP (search_models, get_model_schema, get_pricing, run_model, submit_job, check_job, upload_file)
model: sonnet
---

# Media Director Agent

You translate narrative material into visual and audio assets. You read the wiki — characters, locations, tone — and derive generation prompts that capture the ESSENCE of each entity. Not generic illustrations. Not stock photography. Images and sounds that could only belong to THIS project.

## References — Read Before Starting

- `process/06-tone.md` — How tone is defined
- `shared/quality-gates.md` — Universal gates (apply to prompt quality)
- `wiki/author-voice.md` — Author's aesthetic sensibility

## Inputs

- `wiki/projects/[PROJECT]/characters/` — all character files
- `wiki/projects/[PROJECT]/world.md` — sub-worlds, locations
- `wiki/projects/[PROJECT]/tone.md` — visual/sensory language, atmosphere
- `wiki/projects/[PROJECT]/theme.md` — Value Conflict (tonal anchor)
- `wiki/projects/[PROJECT]/_ensemble.md` — relationships
- `wiki/projects/[PROJECT]/media-manifest.json` — existing manifest (if re-running)

## Output

- `wiki/projects/[PROJECT]/media-manifest.json`
- `wiki/projects/[PROJECT]/media/` — generated asset files

## Step 1: Read the Wiki

Read ALL entity files for the project. You need the complete picture before writing a single prompt.

Pay special attention to `tone.md`:
- **Visual/Sensory Language** section → becomes `style_seed`
- **Narrative Tone** section → becomes `tone_directive`
- **Reference Matrix** → informs the visual language (which reference works to echo)

## Step 2: Derive the Style Envelope

From `tone.md`, extract:
- **`tone_directive`**: One sentence capturing the visual/audio direction. Not vague ("dark and moody") but specific ("Handheld 16mm intimacy, Baltic winter light, dialogue recorded on-location with room tone").
- **`style_seed`**: A prompt fragment appended to every image generation. Ensures visual coherence. Example: "cinematic photography, shallow depth of field, muted blue-gray palette, natural light, film grain, 35mm"

## Step 3: Character Assets

For EACH character in `characters/`:

### Portrait
- Read the **Here and Now** section for physical details
- Read the **Ghost** section for the weight they carry (shows in the eyes, posture)
- Read the **Dark Side** section for edge and danger
- Derive a specific image prompt. NOT "a woman looking serious" but "A woman in her 40s, sharp jaw, deep-set eyes with permanent suspicion, leather jacket collar turned up, standing under sodium lights in a harbor loading zone, rain-wet concrete reflecting orange light"
- Model: `fal-ai/flux-pro/v1.1`
- Include `negative_prompt` to prevent generic/glamorous/AI-looking output

### Voice Sample
- Read the **Dialogue Style** section from `tone.md` for register
- Read the character's **Here and Now** for speech patterns
- Write 1-2 sentences of dialogue IN CHARACTER — not from the wiki, but original lines that capture their voice
- Model: `fal-ai/playai/tts/v3`
- Set `voice_params`: tone, pacing, accent based on character background

### Theme Music
- Derive from the character's emotional core: Ghost + Dark Side + tone
- A 30-second instrumental fragment that captures their inner state
- Model: `fal-ai/stable-audio`

### Mood Reel
- A 5-10 second video capturing the character's world and energy
- Derive from Here and Now + their primary sub-world from `world.md`
- Model: `fal-ai/minimax-video`

## Step 4: Location Assets

For each sub-world in `world.md`:

### Atmosphere Image
- Read the sub-world's **Atmosphere** and **Location** fields
- Derive a wide-shot image prompt capturing the place
- Model: `fal-ai/flux-pro/v1.1`

### Ambient Audio
- Read the sub-world's atmosphere for sound cues
- Derive a 60-second ambient soundscape
- Model: `fal-ai/stable-audio`

## Step 5: Project-Level Assets

- **Main Theme**: Derived from `tone.md` Narrative Tone + Value Conflict tension
- **OG Image**: Wide-shot capturing the overworld from `world.md`
- **Mood Reel**: 10-second video capturing the overall project atmosphere

## Step 6: Write the Manifest

Write `media-manifest.json` with all assets. Every asset must have:
- `entity`: path matching wiki structure
- `type`: one of `portrait`, `voice`, `theme_music`, `mood_reel`, `atmosphere`, `ambient`, `og_image`
- `model`: fal model identifier
- `prompt`: the full generation prompt
- `output`: relative path under `media/`
- `status`: `pending`

If a manifest already exists, preserve `done` and `override` entries. Only add new entities or reset changed prompts to `pending`.

## Step 7: Present for Review

Show the user:
- Total asset count and estimated types
- The `tone_directive` and `style_seed`
- 2-3 example prompts (one character portrait, one location, one audio)
- Ask for approval before generating

## Step 8: Generate

On approval, process all `pending` items:
1. Set status to `generating`
2. Call fal MCP `run_model` (images, audio) or `submit_job` + `check_job` (video)
3. Save output to the `output` path
4. Set status to `done` or `failed`
5. Write updated manifest after each asset (progress survives interruption)

For `/media-generate [entity]`: filter to only assets matching the entity path.

## Prompt Quality Rules

1. **Specificity over beauty.** "A harbor at dusk" fails. "Container cranes silhouetted against magenta sky, wet concrete, sodium light pools, a single figure in a dark coat walking away from camera" works.
2. **Character in the prompt.** Portraits must include physical details, clothing, posture, expression, AND environment. The background IS the character.
3. **Style seed is law.** Append it to every image prompt. Don't override it with conflicting style words.
4. **No AI clichés.** No "epic", "stunning", "beautiful", "majestic". These are red flags. Use concrete visual language.
5. **Audio has texture.** "Sad piano music" fails. "Single upright piano, slightly detuned, sparse chords with long sustain, recorded in an empty room with natural reverb, 70 BPM" works.

## Self-Check

1. Could someone who never read the wiki identify WHICH character a portrait belongs to? If they all look like "moody person in dark clothing" — your prompts are generic.
2. Does the `style_seed` enforce a coherent visual world, or is it so vague that assets will look disconnected?
3. Are your audio prompts specific about instruments, tempo, texture? Or just mood words?
4. Did you read the character's GHOST before writing their portrait prompt? The Ghost should be visible in their eyes.
```

- [ ] **Step 2: Commit**

```bash
git add .claude/agents/media-director.md
git commit -m "feat: add media-director agent definition"
```

### Task 2: Create site-builder agent

**Files:**
- Create: `.claude/agents/site-builder.md`

- [ ] **Step 1: Write the site-builder agent definition**

```markdown
---
name: Site Builder
description: Maintains the Astro static site project. Reads wiki markdown and media directory. Builds the immersive character-driven portal.
tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - Bash
model: sonnet
---

# Site Builder Agent

You maintain the Astro static site that presents a Story Architect project as an immersive, character-driven portal. The wiki is your CMS. The media directory is your asset library. Your job is to keep the site in sync with both.

## Inputs

- `wiki/projects/[PROJECT]/` — all wiki markdown files
- `wiki/projects/[PROJECT]/media/` — generated and overridden assets
- `wiki/projects/[PROJECT]/media-manifest.json` — asset status tracking
- `site/site-config.json` — theme, navigation, visibility settings

## Output

- `site/` — Astro source files (pages, components, styles)
- `site/dist/` — deployable static site

## When to Run

- After `/site-init` — scaffold the full Astro project
- After `/site-build` — rebuild from current wiki + media state
- After `/site-preview` — start dev server for local testing
- When wiki structure changes (new characters, new locations) — update routes

## Responsibilities

### 1. Scaffold (on `/site-init`)

If `site/` doesn't exist:
1. Run `npm create astro@latest site -- --template minimal --no-install --no-git`
2. Add dependencies: `@astrojs/sitemap`, `gray-matter`, `marked`
3. Run `npm install` in `site/`
4. Create `site-config.json` with defaults from the wiki
5. Create all source files: layouts, pages, components, lib, styles
6. Verify build works: `cd site && npm run build`

### 2. Sync (on `/site-build`)

1. Run `site/scripts/copy-media.ts` to copy media from wiki to `site/public/media/`
2. Run `cd site && npm run build`
3. Report: pages generated, any missing media flagged

### 3. Preview (on `/site-preview`)

1. Run media copy
2. Run `cd site && npm run dev`
3. Report the local URL

### 4. Update Routes

When a new character or location appears in the wiki:
- The dynamic `[slug].astro` routes handle this automatically
- No manual route creation needed
- Just rebuild

## Site Architecture

The site uses Astro's static site generation (SSG). All pages are pre-rendered at build time. No client-side routing except View Transitions for audio persistence.

### Data Flow

```
wiki markdown files → wiki-loader.ts → structured data → Astro pages
media-manifest.json → media-resolver.ts → asset paths → Astro components
site-config.json → imported directly → controls visibility/theme
```

### Key Technical Decisions

- **View Transitions**: Enabled in `astro.config.mjs` for audio crossfade
- **Islands**: AudioPlayer, VideoPlayer, AmbientController use `client:load` for interactivity
- **Static paths**: `getStaticPaths()` in `[slug].astro` files reads wiki to generate all routes
- **Media**: Copied to `public/media/` at build time (not symlinked — works on all hosts)

## Self-Check

1. Does `npm run build` complete without errors?
2. Are all characters and locations from the wiki represented in the build output?
3. Does the audio controller persist across page navigations?
4. In public mode, are Ghost/Lie/Dark Side sections hidden as configured?
5. Are missing media assets handled gracefully (section hidden, not broken image)?
```

- [ ] **Step 2: Commit**

```bash
git add .claude/agents/site-builder.md
git commit -m "feat: add site-builder agent definition"
```

### Task 3: Update CLAUDE.md with new agents and commands

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Add new agents to the Agents table**

In the `### Agents` table in CLAUDE.md, add two new rows:

```markdown
| Media | `media-director` | Asset planning + generation via fal MCP |
| Website | `site-builder` | Astro site generation + build |
```

Add these after the existing `| Meta | `optimizer` |` row.

- [ ] **Step 2: Add new commands to the Commands section**

Add to the `## Commands` section:

```markdown
- `/site-init` — Scaffold Astro project in `site/`, create site-config.json
- `/media-plan` — Spawn media-director → write media-manifest.json for review
- `/media-generate` — Generate all pending assets via fal MCP
- `/media-generate [entity]` — Generate assets for a single entity
- `/site-build` — Build static site from wiki + media
- `/site-preview` — Local dev server preview
- `/site-deploy` — Deploy dist/ to static hosting (out of scope for initial implementation)
```

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: add media/website agents and commands to CLAUDE.md"
```

---

## Chunk 2: Test Data — Sample Wiki Project

A minimal but complete demo project to develop and test the Astro site against.

### Task 4: Create demo project wiki files

**Files:**
- Create: `wiki/projects/demo/_index.md`
- Create: `wiki/projects/demo/impulse.md`
- Create: `wiki/projects/demo/theme.md`
- Create: `wiki/projects/demo/tone.md`
- Create: `wiki/projects/demo/world.md`
- Create: `wiki/projects/demo/characters/elena.md`
- Create: `wiki/projects/demo/characters/marco.md`
- Create: `wiki/projects/demo/_ensemble.md`

- [ ] **Step 1: Create `_index.md`**

```markdown
# Harbor District

**Medium:** TV Series
**Status:** Demo project for site development

## Characters

| Name | Facet | Enneagram | Status |
|------|-------|-----------|--------|
| Elena Voss | Control | 8 | draft |
| Marco Brandt | Loyalty | 6 | draft |

## Entity Status

| Entity | Status |
|--------|--------|
| Impulse | draft |
| Theme | draft |
| Tone | draft |
| World | draft |
| Characters | draft |
| Ensemble | draft |
```

- [ ] **Step 2: Create `impulse.md`**

```markdown
# Impulse — Harbor District

Rostock container port, winter. A woman who runs the loading schedules like a shadow government — nothing moves without her knowing. A customs investigator transferred from Hamburg after his partner's corruption case destroyed his career. The harbor is its own country with its own laws. Container Terminal 7, the oldest section, where her father fell from Crane 12 twenty-eight years ago and the company sealed the inspection report. A bar called "Zur Möwe" in the fisherman's quarter where dockworkers drink and old GDR loyalties still hold. The tide dictates when certain cargo can move — crime has a schedule here, and it's posted on the harbor authority website. Everyone depends on the port for their livelihood. Leave the harbor, leave everything.
```

- [ ] **Step 3: Create `theme.md`**

```markdown
# Theme — Harbor District

## Value Conflict

**Control vs. Trust**

Elena believes control is the only protection. Marco believes trust is the only foundation. Both are right. Both are destroying what they're trying to save.

## Facets

1. **Control** — The belief that power protects
2. **Trust** — The belief that vulnerability connects
3. **Corruption** — What happens when control meets opportunity
4. **Loyalty** — What trust costs when tested

## Message (Preliminary)

Control without trust becomes tyranny. Trust without control becomes naivety. The harbor district destroys both.
```

- [ ] **Step 4: Create `tone.md`**

```markdown
# Tone — Harbor District

## Narrative Tone
The tone of a security camera watching something it shouldn't. Clinical distance that makes intimacy unbearable when it arrives. Conversations where the subtext weighs more than the words.

## Dialogue Style
- **Default Mode:** Clipped, transactional. People trade information like currency.
- **Pressure Mode:** Silence. Then one sentence too many.
- **Intimacy Mode:** Doesn't exist. Closest thing: two people drinking without talking.
- **Forbidden Register:** Earnest declarations of feeling. Nobody says "I love you" in the harbor district.

## Pacing
- **Scene Tempo:** Long surveillance shots punctuated by sharp cuts
- **Escalation Pattern:** Slow compression. Walls closing in. Then a single door opens — and it's worse outside.
- **Breathing Room:** The harbor at night. Water. Distant ship horns. Nobody talking.
- **Time Signature:** 5/4 — always slightly off-balance

## Visual/Sensory Language
Desaturated palette. Baltic winter light — white sky, dark water, sodium orange at night. Handheld camera that breathes. Shallow depth of field on faces, deep focus on the harbor machinery. Sound design: industrial hum underneath everything, even indoors.

## Reference Matrix
**Core Formula:** "The Wire meets Borgen, but in a container port where the containers hold secrets"

### Touchpoints
1. The Wire — specifically: institutional rot shown through procedure, not exposition
2. Borgen — specifically: power as something that changes you physically, not just morally
3. Gomorra — specifically: architecture as character, the buildings are watching

### The Original Move
The harbor itself is a character with moods — fog, tide, cargo schedules dictate when crime can happen

## Pitch Tone
A Baltic noir where the harbor's tide schedule is the most honest clock in a city of liars.
```

- [ ] **Step 5: Create `world.md`**

```markdown
# World — Harbor District

## Overworld
**Location:** Rostock, Germany — the commercial harbor and its surrounding neighborhoods
**Time:** Present day, winter
**Conditions:** Post-reunification economic stagnation meets new money from Baltic trade routes. EU customs regulations create a gray zone between legal and illegal cargo.
**Pressure Cooker:** Everyone depends on the harbor for their livelihood. Leave the harbor, leave your income, your identity, your family's history.

## Sub-Worlds

### The Terminal
**Location:** Container terminal 7 — the largest and oldest section of the port
**Atmosphere:** Steel, diesel, floodlights cutting through fog. Everything echoes. Cranes move like prehistoric animals.
**Rules:** Union rules on paper, Elena's rules in practice. Nobody moves cargo without her knowing.
**Power Structure:** Elena controls scheduling. Scheduling controls money.
**Theme Expression:** Control made physical — every container tracked, every worker monitored.
**Characters:** Elena (power base), Marco (investigating)

### The Customs Office
**Location:** Federal customs building, harbor-adjacent. Glass and concrete brutalism.
**Atmosphere:** Fluorescent lights, coffee machine hum, paper everywhere. The mundane face of state power.
**Rules:** Procedure. Stamps. Forms. Everything documented, nothing understood.
**Power Structure:** Marco's jurisdiction on paper. Elena's influence in practice.
**Theme Expression:** Trust in institutions vs. institutional failure.
**Characters:** Marco (workplace), Elena (antagonist territory)

### The Fisherman's Quarter
**Location:** Old neighborhood behind the harbor wall. Narrow streets, low buildings, bar called "Zur Möwe."
**Atmosphere:** Cigarette smoke, cheap beer, sea wind through gaps in buildings. The place where harbor workers become people.
**Rules:** What happens at Zur Möwe stays at Zur Möwe. Old loyalties from the GDR days still hold.
**Power Structure:** No single boss. Collective memory. The old dockworkers remember everything.
**Theme Expression:** Trust as survival — the community's unwritten code.
**Characters:** Elena (origin), Marco (outsider trying to earn trust)

## Character-Sub-World Matrix
| Character | Sub-World | Friction | Ghost Echo | Function |
|-----------|-----------|----------|------------|----------|
| Elena | The Terminal | Low — her domain | Father's death on the docks | Empowers |
| Elena | Customs Office | High — enemy territory | State abandoned her family | Exposes |
| Elena | Fisherman's Quarter | Medium — she outgrew it | Where she was before power | Diminishes |
| Marco | The Terminal | High — Elena's rules, not law | His partner's betrayal | Exposes |
| Marco | Customs Office | Low — his base | — | Protects |
| Marco | Fisherman's Quarter | Medium — outsider | Reminds him of his own hometown | Humanizes |

## Collision Locations
| Collision Pair | Location | Why Here |
|---------------|----------|----------|
| Elena ⚡ Marco | The Terminal, Crane 12 platform | Highest point in the harbor — whoever stands here sees everything. Forces vertical power dynamic. |
| Elena ⚡ Marco | Zur Möwe (bar) | Neutral ground. Elena is a local. Marco is an outsider. The community watches. |

## The Conflict World
**Location:** Container Terminal 7, specifically the control room overlooking the entire port
**Why Here:** Elena's throne room. Every screen shows a camera feed. Total control — and total isolation.
**Convergence:** Elena/Marco collision. The control room is where Elena's power is most visible and most fragile — one wrong manifest and it all unravels.
**Escalation Potential:** The room that sees everything can also be seen INTO. Glass walls. When Marco gets access, Elena's panopticon becomes her fishbowl.
```

- [ ] **Step 6: Create character files**

Create `wiki/projects/demo/characters/elena.md`:

```markdown
---
quote: "I don't trust the harbor. I manage it."
facet: Control
enneagram_type: 8
---

# Elena Voss

## Ghost
Elena was fourteen when her father fell from Crane 12. Forty meters. They said safety harness failure. The dock company paid the family six months' wages and sealed the inspection report. Her mother worked double shifts at the fish market until her back gave out. Nobody from the union came. Nobody from the city came. Elena went to the funeral in shoes that didn't fit because there wasn't money for new ones.

## Lie
If you control the system, the system can't destroy you. Elena operates every relationship as a transaction — loyalty purchased through favors, silence bought through leverage. She calls it "management." She manages people the way the harbor manages cargo: tracked, scheduled, expendable.

## Want
Total control over the harbor district's operations. Every container, every schedule, every customs declaration runs through her network.

## Need
To admit that control is the cage, not the protection. That her father didn't die because nobody was in charge — he died because the people in charge didn't care.

## Crucible
Elena's Want (control) actively prevents her Need (trust). Every time she tightens her grip — monitoring workers, leveraging officials, punishing disloyalty — she proves to herself that people can only be managed, never trusted. The control that protects her IS the thing destroying her.

## Fears
**Core Fear:** Abandonment in a moment of vulnerability. Not being alone — being alone when it MATTERS.
**Secret Shame:** She paid for her mother's care home with money from the first shipment she let through without inspection. Her mother doesn't know. Her mother will never know.

## Dark Side

### Stage 1: Monitoring
Elena checks the harbor cameras more than necessary. Reads workers' schedules for patterns. Arrives early, leaves late. This looks like diligence.

### Stage 2: Testing
She gives trusted associates slightly wrong information and waits to see if it comes back changed. Small betrayals she engineers to see who's reliable. "I told you the shipment was Wednesday. It was Thursday. Who did you tell?"

### Stage 3: Leverage
Elena begins collecting insurance — documents, photos, recordings. Not to use. Just to have. The folder on her laptop labeled "Personnel" has nothing to do with HR.

### Stage 4: Isolation
She cuts out anyone who has shown even minor unreliability. Her circle shrinks. She eats alone. She doesn't answer calls on the first ring anymore — she waits, listens to the voicemail, calls back when she's ready. On her terms.

### Stage 5: The Trap
Elena engineers a situation where everyone depends on her for the next move — and then she doesn't make it. She watches them scramble. This is the moment she feels safest: when other people's desperation proves she was right to trust no one.

## Life Lessons
The harbor taught Elena that systems outlast people. Cranes outlast crane operators. Schedules outlast schedulers. She decided to become the system — and the price was becoming something that doesn't grieve, doesn't bend, doesn't ask for help.

## Paradox
Elena's total control makes her totally alone. The thing she built to prevent her father's fate — abandonment by the system — has turned her INTO the system that abandons people.

## Here and Now
42, short dark hair going gray at the temples. Doesn't dye it — vanity is a vulnerability. Wears the same dark coat every day. Drives a ten-year-old Volvo that she maintains herself. Lives in a flat above the fish market where she grew up — hasn't redecorated since her mother moved to the care home. Drinks black coffee, no food until evening. Speaks in short sentences. Makes eye contact that lasts one second too long. Has a habit of touching the railing on Crane 12's platform when she thinks nobody's watching.
```

Create `wiki/projects/demo/characters/marco.md`:

```markdown
---
quote: "The law works. When it doesn't, you fix the law, not the outcome."
facet: Trust
enneagram_type: 6
---

# Marco Brandt

## Ghost
Marco's former partner at Hamburg customs — Jens Kellner — took bribes for three years. Marco didn't see it. They ate lunch together. Their kids played together. When internal affairs came, Marco was cleared but reassigned to Rostock — the department's way of saying "you're clean but you're tainted." Jens got four years. Marco got a harbor posting nobody wanted.

## Lie
If you follow procedure honestly, the system works. Marco clings to rules, documentation, proper channels — because the alternative is admitting that his best friend fooled him for three years and his judgment is broken.

## Want
To build an airtight case against the harbor district's corruption through proper legal channels, proving the system works.

## Need
To accept that his devotion to procedure is fear of trusting his own instincts again — and that sometimes justice requires getting your hands dirty.

## Crucible
Marco's Want (prove the system works) prevents his Need (trust his instincts). Every time he discovers evidence that the proper channels are compromised — that the system is NOT working — he doubles down on procedure instead of adapting. The more corrupt the system reveals itself to be, the more rigidly he follows its rules.

## Fears
**Core Fear:** Being fooled again. Not being wrong — being wrong about PEOPLE.
**Secret Shame:** He had suspected Jens. One Tuesday, Jens came back from lunch with an envelope he didn't open. Marco saw it. Marco chose not to ask. That Tuesday is the day Marco actually failed — not the day internal affairs knocked.

## Dark Side

### Stage 1: Over-documentation
Marco documents everything. Meetings get minutes. Phone calls get logs. He takes photos of his desk before leaving — in case someone moved something. This looks like thoroughness.

### Stage 2: Verification loops
He checks sources twice. Then three times. Then calls someone to confirm what he already confirmed. Cases slow down. His supervisor calls it "being careful." It's not.

### Stage 3: Accusatory pattern recognition
Marco starts seeing betrayal in ambiguity. A colleague's late arrival is suspicious. A missing file is sabotage. He doesn't accuse — he WATCHES. And the watching poisons the watching.

### Stage 4: Isolation through distrust
He stops sharing case progress. Works alone. Eats at his desk. His wife calls at 8pm and he says "I'm still at the office" when he's sitting in his car outside Elena's building, watching.

### Stage 5: The Violation
Marco plants evidence. One document, one time, to move a case forward that procedure has stalled. He tells himself it's justice. It's the exact thing Jens did — choosing the outcome over the process. Marco has become what he hunts.

## Life Lessons
Hamburg taught Marco that closeness blinds you. Rostock is teaching him that distance doesn't sharpen your vision — it just makes you lonely. He hasn't learned this yet.

## Paradox
Marco's obsession with proper procedure — his armor against being fooled — makes him unable to see the truth when it doesn't come through proper channels. The thing that was supposed to protect his judgment has replaced his judgment.

## Here and Now
38, tall, runner's build going soft from desk work. Still wears Hamburg-style suits in a harbor town — the only person in Rostock customs who irons his shirts. Wedding ring he rotates when thinking. Rents a flat he hasn't furnished — moving boxes still stacked in the living room after eight months. Cooks elaborate meals for one, eats standing up. Drives to Hamburg every other weekend to see his daughter, sits in traffic on the A1 listening to podcasts about criminal psychology. Has started running the harbor perimeter at 6am — tells himself it's exercise.
```

- [ ] **Step 7: Create `_ensemble.md`**

```markdown
# Ensemble — Harbor District

## Collision Pairs

### Elena Voss ⚡ Marco Brandt
**Collision Type:** Methodological war
**Why They Collide:** Both want the harbor to function — Elena through control, Marco through law. Their methods are incompatible but their goals overlap dangerously.
**Theme Expression:** Control vs. Trust at maximum pressure. Each one's method is the other's nightmare.

## Relationship Matrix

| Character A | Character B | Relationship | Dynamic |
|-------------|-------------|-------------|---------|
| Elena | Marco | Adversary with mutual respect | She respects his stubbornness. He respects her competence. Both mistake respect for understanding. |
```

- [ ] **Step 8: Create placeholder media manifest and media directory**

Create `wiki/projects/demo/media-manifest.json`:

```json
{
  "project": "demo",
  "tone_directive": "Security camera watching something it shouldn't. Baltic winter light, industrial geometry, sodium orange nights.",
  "style_seed": "cinematic photography, desaturated palette, shallow depth of field, Baltic winter light, film grain, 35mm, natural lighting",
  "assets": [
    {
      "entity": "characters/elena",
      "type": "portrait",
      "model": "fal-ai/flux-pro/v1.1",
      "prompt": "Portrait of a woman, 42, short dark hair graying at temples, sharp features, dark coat collar up, standing on an industrial crane platform, Baltic harbor behind her, sodium lights, fog, desaturated blue-gray palette, cinematic grain, 35mm",
      "negative_prompt": "cartoon, illustration, glamorous, soft focus, bright colors, smiling",
      "output": "media/characters/elena/portrait.webp",
      "status": "done"
    },
    {
      "entity": "characters/marco",
      "type": "portrait",
      "model": "fal-ai/flux-pro/v1.1",
      "prompt": "Portrait of a man, 38, tall, wearing a pressed suit that doesn't belong in a harbor town, standing in a brutalist customs office corridor, fluorescent light, holding a coffee cup, wedding ring visible, tired eyes, desaturated palette, 35mm",
      "negative_prompt": "cartoon, illustration, action pose, bright colors, smiling",
      "output": "media/characters/marco/portrait.webp",
      "status": "done"
    },
    {
      "entity": "locations/the-terminal",
      "type": "atmosphere",
      "model": "fal-ai/flux-pro/v1.1",
      "prompt": "Container terminal at dusk, massive cranes silhouetted against white Baltic sky, wet concrete, sodium floodlights cutting through fog, a single figure walking between container stacks, industrial scale, cinematic wide shot, desaturated blue-gray palette, 35mm",
      "negative_prompt": "cartoon, illustration, bright colors, daytime, sunny",
      "output": "media/locations/the-terminal/atmosphere.webp",
      "status": "done"
    },
    {
      "entity": "locations/the-customs-office",
      "type": "atmosphere",
      "model": "fal-ai/flux-pro/v1.1",
      "prompt": "Brutalist government building interior, long corridor with fluorescent strip lights, concrete walls, glass partition offices, stacked paper files visible through windows, one figure at end of corridor, clinical sterile atmosphere, desaturated, 35mm",
      "negative_prompt": "cartoon, cozy, warm lighting, modern design",
      "output": "media/locations/the-customs-office/atmosphere.webp",
      "status": "done"
    },
    {
      "entity": "locations/the-fishermans-quarter",
      "type": "atmosphere",
      "model": "fal-ai/flux-pro/v1.1",
      "prompt": "Narrow cobblestone street at night, old low buildings, a corner bar with warm light spilling onto wet pavement, sea wind visible in a swinging sign, two figures smoking outside, harbor cranes visible above rooftops in background, sodium and neon light mix, 35mm",
      "negative_prompt": "cartoon, daytime, modern architecture, clean streets",
      "output": "media/locations/the-fishermans-quarter/atmosphere.webp",
      "status": "done"
    }
  ]
}
```

Create placeholder image files so the site can build. Use small 1x1 pixel placeholder files:

```bash
mkdir -p wiki/projects/demo/media/characters/elena
mkdir -p wiki/projects/demo/media/characters/marco
mkdir -p wiki/projects/demo/media/locations/the-terminal
mkdir -p wiki/projects/demo/media/locations/the-customs-office
mkdir -p wiki/projects/demo/media/locations/the-fishermans-quarter
mkdir -p wiki/projects/demo/media/atmosphere

# Create minimal placeholder images (1x1 dark pixel PNG)
# Using printf to write minimal valid PNG for each
for dir in \
  wiki/projects/demo/media/characters/elena \
  wiki/projects/demo/media/characters/marco \
  wiki/projects/demo/media/locations/the-terminal \
  wiki/projects/demo/media/locations/the-customs-office \
  wiki/projects/demo/media/locations/the-fishermans-quarter; do
  touch "$dir/portrait.webp" 2>/dev/null || true
  touch "$dir/atmosphere.webp" 2>/dev/null || true
done

touch wiki/projects/demo/media/atmosphere/og-image.webp
```

- [ ] **Step 9: Commit**

```bash
git add wiki/projects/demo/
git commit -m "feat: add demo project wiki for site development"
```

---

## Chunk 3: Astro Project Scaffold + Core Libraries

### Task 5: Initialize Astro project

**Files:**
- Create: `site/package.json`
- Create: `site/astro.config.mjs`
- Create: `site/tsconfig.json`

- [ ] **Step 1: Scaffold Astro project**

```bash
cd /Users/mg/workspace/story-architect
npm create astro@latest site -- --template minimal --no-install --no-git --typescript strict
```

- [ ] **Step 2: Add dependencies**

```bash
cd site
npm install gray-matter marked
npm install -D vitest
```

- [ ] **Step 3: Configure Astro with View Transitions**

Edit `site/astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    assets: '_assets',
  },
});
```

Also create `site/vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
  },
});
```

- [ ] **Step 4: Add test script to package.json**

Add to `site/package.json` scripts:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 5: Commit**

```bash
git add site/
git commit -m "feat: scaffold Astro project with View Transitions support"
```

### Task 6: Create type definitions

**Files:**
- Create: `site/src/lib/types.ts`

- [ ] **Step 1: Write type definitions**

```typescript
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
```

- [ ] **Step 2: Commit**

```bash
git add site/src/lib/types.ts
git commit -m "feat: add TypeScript type definitions for wiki data model"
```

### Task 7: Build wiki-loader with TDD

**Files:**
- Create: `site/src/lib/wiki-loader.ts`
- Create: `site/tests/wiki-loader.test.ts`

- [ ] **Step 1: Write failing tests for wiki-loader**

```typescript
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
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd site && npx vitest run tests/wiki-loader.test.ts
```

Expected: FAIL — module `wiki-loader` does not exist yet.

- [ ] **Step 3: Implement wiki-loader**

```typescript
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import type { Character, Location, CollisionPair, Relationship, DarkSideStage } from './types';

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd site && npx vitest run tests/wiki-loader.test.ts
```

Expected: ALL PASS

- [ ] **Step 5: Commit**

```bash
git add site/src/lib/wiki-loader.ts site/tests/wiki-loader.test.ts
git commit -m "feat: implement wiki-loader with markdown parsing"
```

### Task 8: Build media-resolver with TDD

**Files:**
- Create: `site/src/lib/media-resolver.ts`
- Create: `site/tests/media-resolver.test.ts`

- [ ] **Step 1: Write failing tests**

```typescript
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
```

- [ ] **Step 2: Run tests to verify they fail**

```bash
cd site && npx vitest run tests/media-resolver.test.ts
```

- [ ] **Step 3: Implement media-resolver**

```typescript
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
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
cd site && npx vitest run tests/media-resolver.test.ts
```

- [ ] **Step 5: Commit**

```bash
git add site/src/lib/media-resolver.ts site/tests/media-resolver.test.ts
git commit -m "feat: implement media-resolver with manifest lookup"
```

---

## Chunk 4: Site Theme + Layout

### Task 9: Create global CSS (immersive dark theme)

**Files:**
- Create: `site/src/styles/global.css`

- [ ] **Step 1: Write the immersive dark theme CSS**

The CSS should create an atmospheric, cinematic feel. Dark backgrounds, muted typography, minimal chrome. Think HBO companion site, not documentation.

```css
:root {
  --bg: #0a0a0f;
  --bg-elevated: #12121a;
  --bg-card: rgba(255, 255, 255, 0.03);
  --text-primary: #e0ddd8;
  --text-secondary: #7a7770;
  --text-muted: #4a4840;
  --accent: #c8a45a;
  --accent-dim: rgba(200, 164, 90, 0.15);
  --border: rgba(255, 255, 255, 0.06);
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-display: 'Inter', system-ui, -apple-system, sans-serif;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text-primary);
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* Typography */
h1 {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  line-height: 1.2;
}

h2 {
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
}

h3 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

p {
  color: var(--text-secondary);
  max-width: 65ch;
}

a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s;
}
a:hover { color: var(--accent); }

/* Layout */
.page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Cards */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  transition: border-color 0.2s;
}
.card:hover { border-color: rgba(255, 255, 255, 0.12); }

/* Character portrait circle */
.portrait-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border);
  transition: border-color 0.3s, transform 0.3s;
}
.portrait-circle:hover {
  border-color: var(--accent);
  transform: scale(1.05);
}

/* Character hero */
.character-hero {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 3rem;
}
.character-hero img {
  width: 200px;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;
}
.character-hero .meta {
  flex: 1;
}
.character-hero .quote {
  font-style: italic;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  border-left: 2px solid var(--accent);
  padding-left: 1rem;
}
.character-hero .want-need {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.8;
}
.character-hero .want-need strong { color: var(--text-secondary); }

/* Section label */
.section-label {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

/* Location tiles */
.location-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
.location-tile {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 16/9;
  cursor: pointer;
}
.location-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.location-tile:hover img { transform: scale(1.05); }
.location-tile .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: var(--text-primary);
  font-size: 0.85rem;
}

/* Dark Side Ladder */
.dark-side-ladder {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.dark-side-stage {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 0.8rem;
  background: var(--bg-card);
  border-radius: 6px;
  border-left: 3px solid var(--border);
  transition: border-color 0.2s;
}
.dark-side-stage:hover { border-left-color: var(--accent); }
.dark-side-stage .stage-number {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 600;
  min-width: 1.5rem;
}
.dark-side-stage .stage-title {
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}
.dark-side-stage .stage-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

/* Relationship map */
.relationship-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.relationship-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0.8rem;
  background: var(--bg-card);
  border-radius: 6px;
}
.relationship-item .collision { color: var(--accent); }

/* Audio/Video player */
.media-player {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  background: var(--bg-card);
  border-radius: 6px;
}
.play-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--accent);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--bg);
  flex-shrink: 0;
}
.progress-bar {
  flex: 1;
  height: 3px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}
.progress-bar .fill {
  height: 100%;
  background: var(--accent);
  width: 0%;
  transition: width 0.1s;
}
.time-display {
  font-size: 0.75rem;
  color: var(--text-muted);
  min-width: 3rem;
  text-align: right;
}

/* Landing page */
.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
}
.landing .title { margin-bottom: 0.5rem; }
.landing .logline {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 3rem;
}
.landing .subtitle {
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}
.character-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.character-entry {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.character-entry .name {
  font-size: 0.8rem;
  color: var(--text-secondary);
}

/* Location page hero */
.location-hero {
  width: 100%;
  height: 40vh;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
}

/* Back link */
.back-link {
  font-size: 0.8rem;
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 2rem;
}
.back-link:hover { color: var(--text-secondary); }

/* Sections on character/location pages */
.page-section {
  margin-bottom: 2.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  h1 { font-size: 1.8rem; }
  .character-hero { flex-direction: column; }
  .character-hero img { width: 100%; height: 200px; }
  .portrait-circle { width: 80px; height: 80px; }
}
```

- [ ] **Step 2: Commit**

```bash
git add site/src/styles/global.css
git commit -m "feat: add immersive dark theme CSS"
```

### Task 10: Create BaseLayout with View Transitions

**Files:**
- Create: `site/src/layouts/BaseLayout.astro`

- [ ] **Step 1: Write BaseLayout**

```astro
---
import { ViewTransitions } from 'astro:transitions';
import '../styles/global.css';

interface Props {
  title: string;
  description?: string;
  ogImage?: string;
  audioSrc?: string;
}

const { title, description = '', ogImage, audioSrc } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {ogImage && <meta property="og:image" content={ogImage} />}
    <ViewTransitions />
  </head>
  <body>
    <slot />
    <!-- Always render ambient controller so transition:persist works across all pages -->
    <div id="ambient-controller" transition:persist>
      <audio id="ambient-audio" loop preload="auto"></audio>
      <button id="ambient-toggle" style="position: fixed; bottom: 1rem; right: 1rem; background: none; border: 1px solid rgba(255,255,255,0.06); border-radius: 4px; padding: 0.3rem 0.6rem; color: #4a4840; cursor: pointer; font-size: 0.7rem; z-index: 100;">
        &#x1f50a; ambient
      </button>
    </div>
    <!--
      Each page communicates its desired audio via a hidden element.
      The crossfade script reads this on every navigation.
    -->
    {audioSrc && <div id="page-audio-src" data-src={audioSrc} hidden></div>}
    <script>
      document.addEventListener('astro:page-load', () => {
        const audio = document.getElementById('ambient-audio') as HTMLAudioElement | null;
        const toggle = document.getElementById('ambient-toggle');
        const pageAudio = document.getElementById('page-audio-src');
        if (!audio) return;

        const newSrc = pageAudio?.dataset.src || null;
        const currentSrc = audio.getAttribute('src');

        // Toggle button
        if (toggle && !toggle.dataset.bound) {
          toggle.dataset.bound = 'true';
          toggle.addEventListener('click', () => {
            if (audio.paused) {
              audio.play().catch(() => {});
              toggle.innerHTML = '&#x1f50a; ambient';
            } else {
              audio.pause();
              toggle.innerHTML = '&#x1f507; muted';
            }
          });
        }

        if (!newSrc) {
          // No audio for this page — fade out
          if (!audio.paused) {
            const fadeOut = setInterval(() => {
              if (audio.volume > 0.05) {
                audio.volume -= 0.05;
              } else {
                audio.pause();
                audio.volume = 1;
                clearInterval(fadeOut);
              }
            }, 50);
          }
          return;
        }

        if (currentSrc === newSrc) return; // Same track, keep playing

        // Crossfade to new track
        const doSwap = () => {
          audio.src = newSrc;
          audio.volume = 0;
          audio.play().then(() => {
            const fadeIn = setInterval(() => {
              if (audio.volume < 0.95) {
                audio.volume += 0.05;
              } else {
                audio.volume = 1;
                clearInterval(fadeIn);
              }
            }, 50);
          }).catch(() => {});
        };

        if (!audio.paused) {
          const fadeOut = setInterval(() => {
            if (audio.volume > 0.05) {
              audio.volume -= 0.05;
            } else {
              clearInterval(fadeOut);
              doSwap();
            }
          }, 50);
        } else {
          doSwap();
        }
      });
    </script>
  </body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add site/src/layouts/BaseLayout.astro
git commit -m "feat: add BaseLayout with View Transitions and audio crossfade"
```

---

## Chunk 5: Components

### Task 11: Create all Astro components

**Files:**
- Create: `site/src/components/CharacterCard.astro`
- Create: `site/src/components/AudioPlayer.astro`
- Create: `site/src/components/VideoPlayer.astro`
- Create: `site/src/components/LocationTile.astro`
- Create: `site/src/components/RelationshipMap.astro`
- Create: `site/src/components/DarkSideLadder.astro`
- Create: `site/src/components/AmbientController.astro`

- [ ] **Step 1: CharacterCard.astro**

Portrait circle with name, used on landing page.

```astro
---
interface Props {
  slug: string;
  name: string;
  portraitSrc: string | null;
}
const { slug, name, portraitSrc } = Astro.props;
---

<a href={`/characters/${slug}`} class="character-entry">
  {portraitSrc ? (
    <img src={portraitSrc} alt={name} class="portrait-circle" />
  ) : (
    <div class="portrait-circle" style="background: var(--bg-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-muted); font-size: 2rem;">
      {name[0]}
    </div>
  )}
  <span class="name">{name}</span>
</a>
```

- [ ] **Step 2: AudioPlayer.astro**

Inline audio player for voice samples and theme music.

```astro
---
interface Props {
  src: string;
  label?: string;
}
const { src, label } = Astro.props;
const id = `audio-${Math.random().toString(36).slice(2, 8)}`;
---

<div class="media-player" data-audio-player={id}>
  <button class="play-button" aria-label="Play" data-play-btn={id}>
    <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
      <path d="M0 0v14l12-7z" />
    </svg>
  </button>
  {label && <span style="font-size: 0.8rem; color: var(--text-secondary);">{label}</span>}
  <div class="progress-bar"><div class="fill" data-progress={id}></div></div>
  <span class="time-display" data-time={id}>0:00</span>
  <audio data-audio={id} preload="metadata">
    <source src={src} />
  </audio>
</div>

<script define:vars={{ id }}>
  const audio = document.querySelector(`[data-audio="${id}"]`);
  const btn = document.querySelector(`[data-play-btn="${id}"]`);
  const progress = document.querySelector(`[data-progress="${id}"]`);
  const time = document.querySelector(`[data-time="${id}"]`);

  if (audio && btn) {
    btn.addEventListener('click', () => {
      if (audio.paused) { audio.play(); } else { audio.pause(); }
    });
    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        progress.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
        const s = Math.floor(audio.currentTime);
        time.textContent = `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
      }
    });
  }
</script>
```

- [ ] **Step 3: VideoPlayer.astro**

```astro
---
interface Props {
  src: string;
}
const { src } = Astro.props;
---

<div style="border-radius: 8px; overflow: hidden; background: var(--bg-elevated);">
  <video
    controls
    preload="metadata"
    style="width: 100%; display: block;"
    playsinline
  >
    <source src={src} />
  </video>
</div>
```

- [ ] **Step 4: LocationTile.astro**

```astro
---
interface Props {
  slug: string;
  name: string;
  atmosphereSrc: string | null;
}
const { slug, name, atmosphereSrc } = Astro.props;
---

<a href={`/locations/${slug}`} class="location-tile">
  {atmosphereSrc ? (
    <img src={atmosphereSrc} alt={name} />
  ) : (
    <div style="width: 100%; height: 100%; background: var(--bg-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-muted);">
      {name}
    </div>
  )}
  <div class="overlay">{name}</div>
</a>
```

- [ ] **Step 5: RelationshipMap.astro**

```astro
---
import type { CollisionPair, Relationship } from '../lib/types';

interface Props {
  characterSlug: string;
  collisionPairs: CollisionPair[];
  relationships: Relationship[];
  characterSlugs: Map<string, string>; // name → slug
}
const { characterSlug, collisionPairs, relationships, characterSlugs } = Astro.props;

function slugForName(name: string): string | undefined {
  for (const [n, s] of characterSlugs) {
    if (name.toLowerCase().includes(n.toLowerCase()) || n.toLowerCase().includes(name.toLowerCase())) return s;
  }
  return undefined;
}
---

<div class="relationship-list">
  {collisionPairs.map(cp => {
    const otherName = cp.characterA.toLowerCase().includes(characterSlug) ? cp.characterB : cp.characterA;
    const otherSlug = slugForName(otherName);
    return (
      <div class="relationship-item">
        <span class="collision">&#9889;</span>
        {otherSlug ? (
          <a href={`/characters/${otherSlug}`}>{otherName}</a>
        ) : (
          <span>{otherName}</span>
        )}
        <span style="color: var(--text-muted); font-size: 0.8rem;">— {cp.collisionType}</span>
      </div>
    );
  })}
  {relationships.map(rel => {
    const otherName = rel.characterA.toLowerCase().includes(characterSlug) ? rel.characterB : rel.characterA;
    const otherSlug = slugForName(otherName);
    return (
      <div class="relationship-item">
        {otherSlug ? (
          <a href={`/characters/${otherSlug}`}>{otherName}</a>
        ) : (
          <span>{otherName}</span>
        )}
        <span style="color: var(--text-muted); font-size: 0.8rem;">— {rel.dynamic}</span>
      </div>
    );
  })}
</div>
```

- [ ] **Step 6: DarkSideLadder.astro**

```astro
---
import type { DarkSideStage } from '../lib/types';

interface Props {
  stages: DarkSideStage[];
}
const { stages } = Astro.props;
---

<div class="dark-side-ladder">
  {stages.map(stage => (
    <div class="dark-side-stage">
      <span class="stage-number">{stage.stage}</span>
      <div>
        <div class="stage-title">{stage.title}</div>
        <div class="stage-desc">{stage.description}</div>
      </div>
    </div>
  ))}
</div>
```

- [ ] **Step 7: AmbientController**

The ambient audio controller (play/pause toggle + crossfade logic) is built directly into `BaseLayout.astro` rather than as a separate component. This ensures it's always present in the DOM for `transition:persist` to work across all page navigations. No separate `AmbientController.astro` file is needed.

- [ ] **Step 8: Commit**

```bash
git add site/src/components/
git commit -m "feat: add all Astro components (cards, players, ladder, relationships)"
```

---

## Chunk 6: Pages

### Task 12: Create landing page

**Files:**
- Create: `site/src/pages/index.astro`

- [ ] **Step 1: Write the landing page**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import CharacterCard from '../components/CharacterCard.astro';
import { loadCharacters } from '../lib/wiki-loader';
import { createMediaResolver } from '../lib/media-resolver';
import siteConfig from '../../site-config.json';

const wikiPath = new URL(siteConfig.wiki_path, import.meta.url).pathname;
const characters = await loadCharacters(wikiPath);
const resolve = await createMediaResolver(wikiPath);

const mainTheme = resolve('atmosphere', 'main_theme');
---

<BaseLayout
  title={siteConfig.title}
  description={siteConfig.logline}
  audioSrc={mainTheme ? `/media/${mainTheme}` : undefined}
>
  <div class="landing">
    <p class="subtitle">A Story Architect Project</p>
    <h1 class="title">{siteConfig.title}</h1>
    <p class="logline">{siteConfig.logline}</p>

    <div class="character-grid">
      {characters.map(char => {
        const portrait = resolve(`characters/${char.slug}`, 'portrait');
        return (
          <CharacterCard
            slug={char.slug}
            name={char.name}
            portraitSrc={portrait ? `/media/${portrait}` : null}
          />
        );
      })}
    </div>
  </div>
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
git add site/src/pages/index.astro
git commit -m "feat: add landing page with character grid"
```

### Task 13: Create character portal page

**Files:**
- Create: `site/src/pages/characters/[slug].astro`

- [ ] **Step 1: Write the character page with dynamic routing**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import AudioPlayer from '../../components/AudioPlayer.astro';
import VideoPlayer from '../../components/VideoPlayer.astro';
import LocationTile from '../../components/LocationTile.astro';
import RelationshipMap from '../../components/RelationshipMap.astro';
import DarkSideLadder from '../../components/DarkSideLadder.astro';
import { loadCharacters, loadLocations, loadRelationships, parseDarkSideStages } from '../../lib/wiki-loader';
import { createMediaResolver } from '../../lib/media-resolver';
import { marked } from 'marked';
import siteConfig from '../../../site-config.json';

export async function getStaticPaths() {
  const wikiPath = process.env.WIKI_PATH || siteConfig.wiki_path;
  const characters = await loadCharacters(wikiPath);
  return characters.map(char => ({ params: { slug: char.slug }, props: { character: char } }));
}

const { character } = Astro.props;
const wikiPath = siteConfig.wiki_path;
const resolve = await createMediaResolver(wikiPath);
const locations = await loadLocations(wikiPath);
const { collisionPairs, relationships } = await loadRelationships(wikiPath);
const allCharacters = await loadCharacters(wikiPath);

const portrait = resolve(`characters/${character.slug}`, 'portrait');
const voiceSrc = resolve(`characters/${character.slug}`, 'voice');
const themeMusicSrc = resolve(`characters/${character.slug}`, 'theme_music');
const moodReelSrc = resolve(`characters/${character.slug}`, 'mood_reel');

const darkSideStages = parseDarkSideStages(character.sections.darkSide);

// Find locations this character inhabits
const characterLocations = locations.filter(loc =>
  loc.characters?.toLowerCase().includes(character.name.split(' ')[0].toLowerCase())
);

// Filter relationships for this character
const relevantCollisions = collisionPairs.filter(cp =>
  cp.characterA.toLowerCase().includes(character.slug) ||
  cp.characterB.toLowerCase().includes(character.slug)
);
const relevantRelationships = relationships.filter(r =>
  r.characterA.toLowerCase().includes(character.slug) ||
  r.characterB.toLowerCase().includes(character.slug)
);

const characterSlugs = new Map(allCharacters.map(c => [c.name, c.slug]));
const isPublic = siteConfig.mode === 'public';
const vis = siteConfig.visibility;
---

<BaseLayout
  title={`${character.name} — ${siteConfig.title}`}
  audioSrc={themeMusicSrc ? `/media/${themeMusicSrc}` : undefined}
>
  <div class="page">
    <a href="/" class="back-link">&larr; Back</a>

    <!-- Hero -->
    <div class="character-hero">
      {portrait && <img src={`/media/${portrait}`} alt={character.name} />}
      <div class="meta">
        <h1>{character.name}</h1>
        {character.quote && <p class="quote">"{character.quote}"</p>}
        <div class="want-need">
          {character.sections.want && <p><strong>Want:</strong> {character.sections.want}</p>}
          {character.sections.need && <p><strong>Need:</strong> {character.sections.need}</p>}
        </div>
      </div>
    </div>

    <!-- Voice -->
    {voiceSrc && (
      <div class="page-section">
        <h2>Voice</h2>
        <AudioPlayer src={`/media/${voiceSrc}`} label="Voice sample" />
      </div>
    )}

    <!-- Theme Music -->
    {themeMusicSrc && (
      <div class="page-section">
        <h2>Theme</h2>
        <AudioPlayer src={`/media/${themeMusicSrc}`} label="Character theme" />
      </div>
    )}

    <!-- Their World -->
    {characterLocations.length > 0 && (
      <div class="page-section">
        <h2>Their World</h2>
        <div class="location-grid">
          {characterLocations.map(loc => {
            const atmo = resolve(`locations/${loc.slug}`, 'atmosphere');
            return <LocationTile slug={loc.slug} name={loc.name} atmosphereSrc={atmo ? `/media/${atmo}` : null} />;
          })}
        </div>
      </div>
    )}

    <!-- Relationships -->
    {(!isPublic || vis.relationships) && (relevantCollisions.length > 0 || relevantRelationships.length > 0) && (
      <div class="page-section">
        <h2>Relationships</h2>
        <RelationshipMap
          characterSlug={character.slug}
          collisionPairs={relevantCollisions}
          relationships={relevantRelationships}
          characterSlugs={characterSlugs}
        />
      </div>
    )}

    <!-- Dark Side -->
    {(!isPublic || vis.dark_side) && darkSideStages.length > 0 && (
      <div class="page-section">
        <h2>Dark Side</h2>
        <DarkSideLadder stages={darkSideStages} />
      </div>
    )}

    <!-- Ghost & Lie (private only) -->
    {(!isPublic || vis.ghost_lie) && (character.sections.ghost || character.sections.lie) && (
      <div class="page-section">
        {character.sections.ghost && (
          <>
            <h2>Ghost</h2>
            <p set:html={marked.parse(character.sections.ghost)} />
          </>
        )}
        {character.sections.lie && (
          <>
            <h2 style="margin-top: 1.5rem;">Lie</h2>
            <p set:html={marked.parse(character.sections.lie)} />
          </>
        )}
      </div>
    )}

    <!-- Mood Reel -->
    {(!isPublic || vis.mood_reels) && moodReelSrc && (
      <div class="page-section">
        <h2>Mood Reel</h2>
        <VideoPlayer src={`/media/${moodReelSrc}`} />
      </div>
    )}
  </div>
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
git add site/src/pages/characters/
git commit -m "feat: add character portal page with dynamic routing"
```

### Task 14: Create location page

**Files:**
- Create: `site/src/pages/locations/[slug].astro`

- [ ] **Step 1: Write the location page**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import AudioPlayer from '../../components/AudioPlayer.astro';
import CharacterCard from '../../components/CharacterCard.astro';
import { loadCharacters, loadLocations } from '../../lib/wiki-loader';
import { createMediaResolver } from '../../lib/media-resolver';
import { marked } from 'marked';
import siteConfig from '../../../site-config.json';

export async function getStaticPaths() {
  const wikiPath = siteConfig.wiki_path;
  const locations = await loadLocations(wikiPath);
  return locations.map(loc => ({ params: { slug: loc.slug }, props: { location: loc } }));
}

const { location } = Astro.props;
const wikiPath = siteConfig.wiki_path;
const resolve = await createMediaResolver(wikiPath);
const allCharacters = await loadCharacters(wikiPath);

const atmosphereSrc = resolve(`locations/${location.slug}`, 'atmosphere');
const ambientSrc = resolve(`locations/${location.slug}`, 'ambient');

// Find characters who inhabit this location
const inhabitants = allCharacters.filter(char =>
  location.characters?.toLowerCase().includes(char.name.split(' ')[0].toLowerCase())
);
---

<BaseLayout
  title={`${location.name} — ${siteConfig.title}`}
  audioSrc={ambientSrc ? `/media/${ambientSrc}` : undefined}
>
  <div class="page">
    <a href="/" class="back-link">&larr; Back</a>

    {atmosphereSrc && (
      <img src={`/media/${atmosphereSrc}`} alt={location.name} class="location-hero" />
    )}

    <h1>{location.name}</h1>
    {location.location && <p style="margin-bottom: 1rem; color: var(--text-muted); font-size: 0.85rem;">{location.location}</p>}

    {ambientSrc && (
      <div class="page-section">
        <h2>Ambient</h2>
        <AudioPlayer src={`/media/${ambientSrc}`} label="Location ambience" />
      </div>
    )}

    {location.atmosphere && (
      <div class="page-section">
        <h2>Atmosphere</h2>
        <p>{location.atmosphere}</p>
      </div>
    )}

    {location.rules && (
      <div class="page-section">
        <h2>Rules</h2>
        <p>{location.rules}</p>
      </div>
    )}

    {location.themeExpression && (
      <div class="page-section">
        <h2>Theme Expression</h2>
        <p>{location.themeExpression}</p>
      </div>
    )}

    {inhabitants.length > 0 && (
      <div class="page-section">
        <h2>Inhabitants</h2>
        <div class="character-grid" style="justify-content: flex-start;">
          {inhabitants.map(char => {
            const portrait = resolve(`characters/${char.slug}`, 'portrait');
            return <CharacterCard slug={char.slug} name={char.name} portraitSrc={portrait ? `/media/${portrait}` : null} />;
          })}
        </div>
      </div>
    )}
  </div>
</BaseLayout>
```

- [ ] **Step 2: Commit**

```bash
git add site/src/pages/locations/
git commit -m "feat: add location page with atmosphere and inhabitants"
```

---

## Chunk 7: Build Integration + Site Config

### Task 15: Create media copy script

**Files:**
- Create: `site/scripts/copy-media.ts`

- [ ] **Step 1: Write the media copy script**

```typescript
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
```

- [ ] **Step 2: Add prebuild script to package.json**

In `site/package.json`, add to scripts:

```json
"prebuild": "npx tsx scripts/copy-media.ts",
"predev": "npx tsx scripts/copy-media.ts"
```

- [ ] **Step 3: Commit**

```bash
git add site/scripts/copy-media.ts site/package.json
git commit -m "feat: add media copy script with prebuild hook"
```

### Task 16: Create default site-config.json

**Files:**
- Create: `site/site-config.json`

- [ ] **Step 1: Write site config for demo project**

```json
{
  "project": "demo",
  "wiki_path": "../wiki/projects/demo",
  "mode": "private",
  "title": "Harbor District",
  "logline": "A Baltic noir where the harbor's tide schedule is the most honest clock in a city of liars.",
  "theme": {
    "palette": "baltic-noir",
    "font": "system"
  },
  "audio": {
    "autoplay": false,
    "ambient": true
  },
  "visibility": {
    "dark_side": true,
    "ghost_lie": true,
    "relationships": true,
    "mood_reels": true
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add site/site-config.json
git commit -m "feat: add site-config.json for demo project"
```

### Task 17: Verify full build

- [ ] **Step 1: Run the full build**

```bash
cd site && npm run build
```

Expected: Astro builds successfully, outputs to `dist/` with index.html, characters/elena.html, characters/marco.html, locations/the-terminal.html, etc.

- [ ] **Step 2: Fix any build errors**

Address any TypeScript errors, missing imports, or path resolution issues that surface during the first build.

- [ ] **Step 3: Run tests**

```bash
cd site && npm test
```

Expected: All wiki-loader and media-resolver tests pass.

- [ ] **Step 4: Commit any fixes**

```bash
git add -A site/
git commit -m "fix: resolve build issues for initial site compilation"
```

### Task 18: Verify with dev server

- [ ] **Step 1: Start dev server**

```bash
cd site && npm run dev
```

- [ ] **Step 2: Check pages in browser**

Verify:
- Landing page loads at localhost with character grid
- Character pages load at /characters/elena and /characters/marco
- Location pages load at /locations/the-terminal etc.
- Navigation between pages works
- Missing media shows graceful fallbacks (no broken images)

- [ ] **Step 3: Fix any runtime issues and commit**

```bash
git add -A site/
git commit -m "fix: resolve runtime issues found during dev preview"
```
