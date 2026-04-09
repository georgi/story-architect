# 08a STRUCTURE — From Character Arcs to Causal Action

## Purpose

Transform static character force fields into causal action sequences. Characters arrive with Ghost, Lie, Want, Need, Fears, Dark Side, Paradox. Structure sets them in MOTION — concrete decisions with irreversible consequences, organized into a dramatic architecture that serves the Value Conflict.

This is the phase where the medium paths diverge. TV, Film, and Game share the same character material and thematic foundation. They differ in HOW that material is organized into playable, watchable, experienceable structure.

---

## Prerequisites

Before structure begins, the following must exist (at minimum draft status):

| Entity | File | What Structure Needs From It |
|--------|------|------------------------------|
| **Theme** | `wiki/projects/[PROJECT]/theme.md` | Value Conflict, facets, message — the argument the structure dramatizes |
| **Characters** | `wiki/projects/[PROJECT]/characters/*.md` | All 9+1 dramatic units per character — the engines the structure sets in motion |
| **Ensemble** | `wiki/projects/[PROJECT]/ensemble.md` | Collision pairs, relationship matrix — the friction the structure exploits |
| **World** | `wiki/projects/[PROJECT]/world.md` | Sub-worlds, locations, power structures — the terrain the structure traverses |
| **Tone** | `wiki/projects/[PROJECT]/tone.md` | Pacing, dialogue style, emotional register — the HOW of structural execution |
| **Format** | `wiki/projects/[PROJECT]/format.md` | Medium, episode count/runtime/architecture, serialization degree — the CONTAINER the structure fills |

**If any of these are missing:** Stop. Go back. Structure without theme is plot machinery. Structure without characters is furniture arrangement. Structure without world is action in a void.

---

## The Handoff: Character Work to Structure

Characters are static force fields. Structure is those force fields colliding over time.

The handoff happens through the **Event Building Blocks** in each character file:

- **GAP Sequence** — 4 escalating attempts where the world responds differently than expected
- **CATCH** — The unwanted price of getting what you Want
- **Fatal Flaw Prognosis** — Where the pattern leads if nothing changes
- **Self-Revelation Sketch** — The potential moment of recognition (or its absence)
- **Dark Side Ladder** — 5 stages of escalation under pressure

If these building blocks don't exist yet in the character files, the first structure agent generates them. But they belong to the characters, not to the structure — they are the raw material the structure organizes.

**The structural question for every character:** Where in the timeline does each building block land? Which character's action triggers which other character's escalation? How does the GAP sequence of Character A create the pressure event for Stage 3 of Character B's Dark Side Ladder?

---

## Shared Structural Principles (All Mediums)

Before the paths diverge, these principles hold universally:

### 1. Want Curve Runs Counter to Need Curve

When the Want is closest to being achieved, the Need is furthest from being met. This IS the Crucible in motion. If both curves move in the same direction, the character has no dramatic engine.

### 2. Every Event Is Character-Driven

No events that "just happen." Every plot event traces back to a character decision. Coincidence can create problems. Coincidence cannot solve them.

### 3. Rising Costs

Each decision costs more than the last. The character pays in relationships, then reputation, then safety, then identity. If a mid-story decision costs less than an early one, the stakes are collapsing.

### 4. Turning Points Are Triggered by Other Characters

No character transforms in isolation. Every Turning Point is triggered by another character's action — specifically, from the Collision Pairs. If a transformation is triggered by coincidence, rewrite it.

### 5. The Value Conflict Is Visible in Every Structural Unit

Every sequence, episode, act, or quest must engage the theme. If a structural unit could belong to a different story with a different Value Conflict, it has no thematic function. Cut it or rewrite it.

### 6. Concreteness Mandate

Structure deals in BEATS — moments of change, not summaries. "Character realizes they were wrong" is not a beat. "Character returns the stolen money to the person they destroyed, in front of the people who trusted them" is a beat.

---

## PATH A: TV Series

### Agent Sequence

```
season-arcs → season-plot → season-validation
```

### Step 1: Season Arcs — `season-arcs` agent

**Dispatch:** Spawn `season-arcs` with the project name and all character files, theme, world, format, and ensemble.

**What it produces:** `wiki/projects/[PROJECT]/season/arcs.md`

The agent builds three layers:

#### Part 0: Event Building Blocks (per character)

For EACH major character, the agent generates or refines:
- **GAP Sequence** — 4 attempts, escalating risk. Each follows: Expectation (Lie) → Action (Want) → Reaction (opposite) → GAP (truth).
- **CATCH Test** — Setup Want → Point of No Return → CATCH (unwanted price) → Flaw-Test.
- **Fatal Flaw Prognosis** — Origin → Exhaustion → Clinging Reflex → Fatal Prognosis. The prognosis must be genuinely catastrophic — not "they'll be unhappy."
- **Self-Revelation Sketch** — Psychological recognition → Moral recognition → Proof through action. Not every character gets one. Negative arcs deepen the Lie.
- **Dark Side Ladder** — 5 stages with concrete behaviors, not moods. Stage 3 must be genuinely uncomfortable. Stage 5 must horrify the Episode 1 version of the character.

#### Part 1: Arc Structure

Each character receives an arc type (Classic / Awakening Need / Conflicting / Oscillating) and an arc outcome (Positive / Negative / Tragic). Every assignment is justified through the Value Conflict.

#### Part 2: Movement Logic

Want/Need curves mapped across 3 acts per character. Turning Points identified — each triggered by another character from a Collision Pair. The Crucible state tracked per act.

#### Part 3: Relationship Dynamics

Every Collision Pair mapped across all 3 acts. No pair stays static. Relationship arc types assigned (Alliance → Betrayal, Antagonism → Reluctant respect, etc.).

**What to check before proceeding:**
- [ ] Does every character have ALL five building blocks? No shortcuts.
- [ ] Does the Want curve run counter to the Need curve for every character?
- [ ] Is every Turning Point triggered by another character?
- [ ] Does every collision pair shift across all 3 acts?
- [ ] Can you see the Value Conflict in every arc?
- [ ] Are the Dark Side Ladders genuinely uncomfortable at Stage 3+?

### Step 2: Season Plot — `season-plot` agent

**Dispatch:** Spawn `season-plot` with the arc structure plus all project materials.

**What it produces:** `wiki/projects/[PROJECT]/season/plot.md`

The agent builds four layers:

#### Ensemble Causality Chain

The causal backbone: CHARACTER DECISION → CONSEQUENCE → NEW DECISION. Four engines drive events:
1. **Character-Driven Decisions** — Want pursuit creates unintended consequences
2. **Secrets and Revelations** — Information asymmetry, wrong conclusions, partial reveals
3. **World-Driven Events** — External forces pressure the Value Conflict
4. **Theme Externalizations** — The Value Conflict manifests as concrete events

The **Secret Economy** is planned: what is the secret, who knows it, when is it revealed, to whom, and what wrong conclusion do they draw?

#### 8 Sequences (A-H)

The season is structured into 8 sequences across 3 acts (adapted from Gulino for serialized television):
- **A-B** (Act 1): World establishment, inciting incident, point of no return
- **C-D** (Act 2a): Active pursuit, midpoint inversion (greatest external progress + greatest internal cost)
- **E-F** (Act 2b): Fallout, low point, CATCH visible, Dark Side Ladders at Stage 3-4
- **G-H** (Act 3): Climactic confrontation, Value Conflict externalized, arcs resolve

#### Episode Overview with A/B/C Storyline Interweaving

Sequences mapped to episodes. Per episode:
- **A-Story** (~50-60%): Want-driven external narrative
- **B-Story** (~30-40%): Need-driven relationship/internal narrative
- **C-Story** (~10-20%): Secondary character or facet exploration

Cliffhangers are DECISION POINTS, not action beats. They engage the Value Conflict.

#### Interweaving Map

Where B-story events trigger A-story consequences. Where C-story provides information that changes the A-story. Which episodes converge all storylines. Breathing episodes vs. pressure episodes.

**What to check before proceeding:**
- [ ] Can you trace every event to a character decision?
- [ ] Does the cost rise with every decision?
- [ ] Is every secret deployed at maximum dramatic impact?
- [ ] Does every episode end on a genuine decision point?
- [ ] Do the A and B stories interact — not just run in parallel?
- [ ] Is the Value Conflict visible in every sequence?

### Step 3: Season Validation — `season-validation` agent

**Dispatch:** Spawn `season-validation` with arcs, plot, and all project materials.

**What it produces:** `wiki/projects/[PROJECT]/season/validation.md`

The agent does NOT generate new material. It TESTS existing material through five checks:

1. **Series Sparring** — Every collision pair compared against 2-3 reference constellations from prestige TV. Where are we weaker? Where are we stronger? What are we missing? Concrete sharpening proposals.

2. **Theme Reflux** — Systematic verification:
   - Facet coverage: every facet appears through ACTION in at least one sequence
   - Climax test: the message is embodied through what characters DO
   - Per-character integration: facet → action, Want vs Need as theme engine, Crucible escalation, victim AND perpetrator

3. **Structural Integrity** — Sequence tension/resolution chains, Want/Need counter-curves, Turning Point triggers, collision pair movement, secret economy, rising costs, cliffhanger quality, storyline intersection.

4. **Anti-Sanitization Audit** — No moralizing speeches, no spontaneous redemptions, no balancing justice, Dark Side Ladders reach Stage 3+, at least one character is destroyed, language matches milieu.

Output: PASS / WEAK / FAIL per check, with specific, implementable fixes for every WEAK and FAIL.

---

## PATH B: Film

### Agent Sequence

```
film-structure → film-validation
```

### Step 1: Film Structure — `film-structure` agent

**Dispatch:** Spawn `film-structure` with all character files, theme, world, format, and ensemble.

**What it produces:** `wiki/projects/[PROJECT]/structure.md`

The agent builds four layers:

#### 8-Sequence Architecture (Gulino)

Each sequence is a mini-film with its own tension, rising action, and resolution — whose resolution creates the next sequence's tension.

| Act | Sequences | Runtime | Function |
|-----|-----------|---------|----------|
| **Act 1 — Setup** | A-B | ~25% | World before, commitment, point of no return |
| **Act 2a — Complication** | C-D | ~25% | Plan execution, MIDPOINT (greatest external success + greatest internal loss) |
| **Act 2b — Consequence** | E-F | ~25% | Fallout, low point, CATCH visible, Fatal Prognosis |
| **Act 3 — Resolution** | G-H | ~25% | Climactic Choice, aftermath, new world |

**Midpoint mechanics:** The midpoint is the structural keystone. External positive, internal negative. The character is "winning" but losing what matters. A secret or revelation reframes everything. What worked before won't work anymore.

**Climactic Choice:** The protagonist's defining decision. Active — they must DO something, not just realize something. Costly — they must sacrifice something real. Irreversible. Thematic — the choice IS the message.

#### Protagonist Arc Mapping

All event building blocks (GAP Sequence, CATCH, Fatal Flaw Prognosis, Self-Revelation, Dark Side Ladder) mapped to specific sequences. Want/Need curves tracked as opposing trajectories — they cross (or fail to cross) at the Climactic Choice.

#### Ensemble in Structure

- **Opponent arc** mapped against protagonist's. The opponent represents a genuine position in the Value Conflict.
- **B-Story relationship** tracked through all 8 sequences. Must INTERSECT with the A-story at midpoint and climax.
- **Collision pair escalation** across 3 acts: tension established → tension exploited → tension explodes or resolves.

#### Theme in Structure

Value Conflict charges tracked per sequence. Which value appears to be "winning" shifts throughout. The Idea Battle moves from latent (Act 1) to active (Act 2) to verdict (Act 3). The message is delivered through the outcome of the Climactic Choice — never stated.

**What to check before proceeding:**
- [ ] Does every sequence have its own tension AND resolution?
- [ ] Is the midpoint a genuine inversion (external positive + internal negative)?
- [ ] Is the Climactic Choice active, costly, irreversible, and thematic?
- [ ] Does the opponent genuinely challenge the protagonist's Lie?
- [ ] Do the Want/Need curves cross at the climax?
- [ ] Are the building blocks mapped to specific sequences, not floating?
- [ ] Does the B-story intersect with the A-story?

### Step 2: Film Validation — `film-validation` agent

**Dispatch:** Spawn `film-validation` with structure and all project materials.

**What it produces:** `wiki/projects/[PROJECT]/validation.md`

The agent tests through nine checks:

1. **Sequence Architecture** — Each sequence tested for tension, resolution, chain to next sequence, value charge shift.
2. **Protagonist Arc** — Full Want → Need journey verified from setup through climax.
3. **Midpoint Inversion** — External success paired with internal loss. Both positive = FAIL.
4. **Climactic Choice** — Active? Costly? Irreversible? Thematic?
5. **Theme Integration** — Value Conflict visible in climax through action, opponent challenges Lie, every facet represented, message through action.
6. **Stakes Escalation** — Tracked per sequence. Any deflation = FAIL.
7. **Pacing and Tone** — Matches format specs, breathing moments between intensity, ~25/25/25/25 distribution.
8. **Film Sparring** — Structure compared against 2-3 reference films with similar arc architecture (not similar setting). One reference from a different genre.
9. **Anti-Sanitization Audit** — No moralizing, no spontaneous redemption, real cost at climax, opponent has genuine merit, Dark Side visible, language matches milieu.

Output: PASS / WEAK / FAIL per check, priority fixes ordered by criticality.

---

## PATH C: Game

### Agent Sequence

```
narrative-design → game-validation
```

### Step 1: Narrative Design — `narrative-design` agent

**Dispatch:** Spawn `narrative-design` with all character files, theme, world, format, and ensemble.

**What it produces:** `wiki/projects/[PROJECT]/narrative/design.md`

The agent builds five layers:

#### Narrative Architecture

One of four architecture types, justified from content:
- **A. Linear Backbone with Branching Episodes** — Main spine with decision-point variations
- **B. Branching Tree** — Major decisions create genuinely divergent paths, multiple endings
- **C. Hub-and-Spoke** — Central location connecting multiple narrative threads
- **D. Hybrid** — Combined, with clear justification per section

Plus: main quest line (= protagonist's Want-arc), critical path, side quests (= facet explorations, NOT filler), environmental storytelling.

#### Player Character Arc

Two models:
- **Model A: Defined Protagonist** — Fixed Ghost, Lie, Want, Need. Player EXPERIENCES the transformation. The Crucible must be felt through gameplay mechanics, not just cutscenes.
- **Model B: Player-Defined Protagonist** — Backstory options, player-chosen Want, Need emerges through consequences. Multiple arcs possible, but ALL must engage the Value Conflict.

Event building blocks mapped to game structure. GAP sequences are subverted expectations through gameplay consequences. The CATCH happens through gameplay, not in a cutscene. The Dark Side Ladder tracks player behavior — the world reflects it.

#### Branching and Consequences

3-5 MAJOR decision points. Each engages the Value Conflict — the player chooses between Value A and Value B, not "good" and "evil." Five rules:
1. Every choice engages the Value Conflict
2. Consequences must be VISIBLE (world changes, characters react)
3. Consequences must be IRREVERSIBLE
4. FALSE CHOICES ARE FORBIDDEN — every choice must genuinely diverge
5. Every choice must COST something

Endings: 2-5, each a genuinely different answer to the Value Conflict. No "golden ending" that's obviously correct. The "worst" ending must be as narratively compelling as the "best."

#### Ensemble in Interactive Narrative

- **Companion arcs** respond to player choices with arc changes, not just approval numbers. Companions challenge choices from their facet position. Companions can be permanently lost.
- **Collision pairs** activate through player actions. The player can take sides — at a cost.
- **NPCs as facet embodiments** — every major NPC represents a position in the Idea Battle.

#### Quest Structure

**Main quests:** Each has a Want (immediate goal), character-driven obstacle, choice, irreversible consequence, arc connection, and building block mapping.

**Side quests:** Each explores a facet of the Value Conflict through a specific character's lens. No fetch quests. If removing the quest wouldn't change the player's understanding of the Value Conflict — cut it.

**Environmental storytelling:** Found documents, environmental details, ambient NPC behavior — all reinforcing the Value Conflict without exposition.

**What to check before proceeding:**
- [ ] Does every major choice engage the Value Conflict (not good vs. evil)?
- [ ] Are there ANY false choices? Test each decision point for genuine divergence.
- [ ] Does the Crucible function on EVERY path?
- [ ] Are consequences visible in the world, not just mentioned in dialogue?
- [ ] Do companion arcs respond to player choices with their own arc changes?
- [ ] Is every side quest a facet exploration?
- [ ] Are all endings dramatically valid?

### Step 2: Game Validation — `game-validation` agent

**Dispatch:** Spawn `game-validation` with narrative design and all project materials.

**What it produces:** `wiki/projects/[PROJECT]/narrative/validation.md`

The agent tests through eleven checks:

1. **Value Conflict in Every Choice** — Both values present, both have merit, both have cost.
2. **Consequence Visibility and Irreversibility** — World state changes, relationship changes, narrative changes, gameplay changes. All must be visible and permanent.
3. **False Choice Detection** — THE MOST CRITICAL CHECK. Path divergence test, content uniqueness test, cost test, NPC reaction test. Any false choice = automatic FAIL.
4. **Player Arc Across Branches** — Arc functions on every major branch. Crucible active on every path. Each branch produces a distinct arc, not the same arc in different costumes.
5. **Companion Responsiveness** — Arc responds, content rewards, challenges player, can be lost.
6. **Environmental Storytelling** — Reinforces Value Conflict, changes based on choices, rewards exploration with thematic understanding.
7. **Quest Structure** — Main quests have goals, character-driven obstacles, choices, consequences, arc connections. Side quests explore facets.
8. **Crucible Universality** — Mental playthrough of 3 divergent paths. The Crucible must function on EVERY path. If it fails on any — structural problem.
9. **Theme Reflux** — Every facet represented, message embodied through player action in every ending, Value Conflict present in every major quest.
10. **Game Sparring** — Compared against 2-3 reference games with similar narrative ambitions. At least one with a different architecture type.
11. **Anti-Sanitization Audit** — No good-vs-evil masquerading as Value Conflict, Dark Side visible, companion can be permanently lost, genuinely tragic endings exist, uncomfortable but thematically valid choices available.

Output: PASS / WEAK / FAIL, with critical failures (false choices, dead Crucibles, invisible consequences) flagged as structural problems that must be fixed before proceeding.

---

## After Validation: What Happens Next

Validation produces a report. The showrunner reads it. Three outcomes:

1. **PASS across the board** — Proceed to pitch (`process/08-pitch.md`). The structure is ready to be distilled.

2. **WEAK findings** — Targeted rework. Spawn the structure agent again with specific instructions to address the weak points. Then re-validate.

3. **FAIL findings** — Structural problems. Before re-running the structure agent, check whether the failure traces back to an upstream entity. A structural failure in theme reflux might mean the theme needs rework. A dead Crucible might mean the character's Want/Need opposition is too weak. Fix the root cause, then rebuild structure.

**The critic rhythm applies here.** After completing the structure phase, spawn the `critic` agent to update `_state.md` with a full project assessment. Structure is where upstream weaknesses become visible — the critic will find them.

---

## Quality Gate

Before leaving the structure phase:

- [ ] All event building blocks exist for every major character
- [ ] Want/Need curves run counter for every character
- [ ] Every Turning Point / decision is triggered by another character or a character's prior action
- [ ] The Value Conflict is visible in every structural unit (sequence, episode, act, quest)
- [ ] Rising costs across the narrative — no stakes deflation
- [ ] Medium-specific validation passed (season-validation / film-validation / game-validation)
- [ ] Concreteness Mandate: structure deals in beats (moments of change), not summaries
- [ ] Anti-sanitization audit passed — no moralizing, no spontaneous redemption, genuine consequences
- [ ] Critic has updated `_state.md` after structure completion

---

## Output Summary

| Medium | Structure Agent(s) | Output Location | Validation Output |
|--------|-------------------|-----------------|-------------------|
| **TV Series** | `season-arcs` → `season-plot` | `wiki/projects/[PROJECT]/season/arcs.md` + `season/plot.md` | `season/validation.md` |
| **Film** | `film-structure` | `wiki/projects/[PROJECT]/structure.md` | `validation.md` |
| **Game** | `narrative-design` | `wiki/projects/[PROJECT]/narrative/design.md` | `narrative/validation.md` |
