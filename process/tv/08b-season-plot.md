# 08b SEASON PLOT — Plot Structure (TV)

## Purpose

Transform character arcs into a plotted season. Character decisions drive the plot — not external events. The ensemble causality chain connects every storyline through character psychology.

---

## Prerequisites

- `wiki/projects/[PROJECT]/season/arcs.md` — All character arcs defined
- `wiki/projects/[PROJECT]/world.md` — Collision locations
- `wiki/projects/[PROJECT]/format.md` — Episode count and structure

---

## 9b.1: Ensemble Causality Chain

### Principle
Every plot event is caused by a character decision. Every decision is caused by that character's psychology (Want, Lie, Fears). The plot is a CHAIN of character-driven cause and effect.

**Not:** "An earthquake destroys the city" (external event).
**But:** "Maria decides to falsify the safety report because admitting failure would confirm her Secret Shame" (character decision → consequence).

### Four Tools for Generating Plot

#### Tool 1: Character Decisions
The primary engine. A character makes a decision based on their Want/Lie → the decision has consequences → those consequences become another character's problem → that character makes their own decision.

Map the chain: Decision A → Consequence → Problem for B → Decision B → Consequence → Problem for C...

#### Tool 2: Secrets and Revelations
Information asymmetry drives drama. Manage the secret economy:
- **Plant:** Establish the secret (audience may or may not know)
- **Pressure:** The secret becomes harder to keep
- **Reveal:** The secret comes out — to the worst possible person, at the worst possible time
- **Fallout:** The consequences of revelation cascade through the ensemble

#### Tool 3: World Events
External events that ACTIVATE character psychology. The event itself is not the plot — the character's RESPONSE to the event is.
- World events must be grounded in the world rules established in `world.md`
- They serve as catalysts, not solutions
- They compress time — forcing decisions that could otherwise be postponed

#### Tool 4: Theme Externalizations
Moments where the Value Conflict becomes physically visible. Not dialogue about values — but situations where a character must CHOOSE between the two values in a concrete, irreversible way.

### Six Rules of the Causality Chain

1. **Every consequence must be traceable to a character decision.** If you can't name who decided what → the plot is external, not character-driven.
2. **No coincidence after the inciting incident.** Coincidence can start the story. After that, everything is character-caused.
3. **Escalation, not repetition.** Each link in the chain must raise stakes. Same-level conflicts are spinning wheels.
4. **Multi-character consequences.** Every major decision affects at least 2 other characters differently.
5. **Irreversibility.** Once a decision is made, the world has changed. No resets, no take-backs.
6. **Crucible activation.** At least once per episode, a character's Want pursuit must visibly worsen their Need deficit.

### Secret Economy

Map the full secret economy for the season:

| Secret | Holder | Who It Affects | Planted (Ep) | Pressured (Ep) | Revealed (Ep) | Revealed To | Fallout |
|--------|--------|---------------|--------------|-----------------|----------------|-------------|---------|
| ... | ... | ... | ... | ... | ... | ... | ... |

---

## 9b.2: Sequence + Episode Structure

### Eight Sequences in Three Acts

The season is divided into 8 sequences (A through H), organized in 3 acts. Each sequence is a mini-film with its own question, crisis, and resolution.

| Sequence | Act | Function | Episodes (approx.) |
|----------|-----|----------|-------------------|
| **A** | 1 | Setup — establish world, characters, status quo | 1-2 |
| **B** | 1 | Inciting incident — the disruption that starts everything | 2-3 |
| **C** | 2 | First complications — initial strategies, first failures | 3-4 |
| **D** | 2 | Rising pressure — strategies escalate, alliances shift | 5-6 |
| **E** | 2 | Midpoint — greatest external success AND greatest internal crisis | 6-7 |
| **F** | 2 | Consequences — midpoint fallout, Dark Side behavior escalates | 7-8 |
| **G** | 3 | Crisis — lowest point, Lie confronted, all strategies exhausted | 8-9 |
| **H** | 3 | Climax + Resolution — final decisions, arc outcomes realized | 9-10 |

**Note:** Episode counts are approximate and depend on format. Adjust to actual episode count.

### Per Sequence, Define:
- **Sequence question:** What is at stake in this segment?
- **Key decisions:** Which character decisions drive this sequence?
- **Causality chain segment:** How does this sequence connect to the next?
- **Collision Pairs active:** Which pairs collide in this sequence?
- **Secret economy movement:** What is planted, pressured, or revealed?
- **Value Conflict moment:** Where does the theme become physically visible?

### Episode Overview

For each episode, outline:
- **A-Story (~50-60%):** Primary serialized storyline — protagonist's Want pursuit
- **B-Story (~30-40%):** Secondary storyline — often a Collision Pair or relationship dynamic
- **C-Story (~10-20%):** Tertiary storyline — often seeds future episodes or provides tonal contrast
- **Opening:** First image or scene — emotional entry point
- **Closing:** Last image or decision — cliffhanger or emotional punch
- **Theme moment:** Where the Value Conflict is felt (not stated) in this episode

### Storyline Interweaving

Map how A/B/C stories connect within each episode:
- Where do storylines intersect? (Shared scenes, shared locations, shared characters)
- How does one storyline's consequence affect another?
- Where are the tonal contrasts between storylines?

---

## Quality Gate

Before completing season plot, verify:

- [ ] Every plot event traceable to a character decision
- [ ] No coincidence after the inciting incident
- [ ] Causality chain escalates — no same-level repetition
- [ ] Secret economy fully mapped (plant → pressure → reveal → fallout)
- [ ] 8 sequences defined with questions and key decisions
- [ ] Episode overview for every episode (A/B/C stories)
- [ ] Every Collision Pair has at least one dedicated scene per act
- [ ] Crucible activated at least once per episode
- [ ] Midpoint = external success + internal crisis
- [ ] Climax driven by protagonist's final decision — not external event
- [ ] Theme visible through action in every episode — never stated in dialogue

---

## Output

File: `wiki/projects/[PROJECT]/season/plot.md`

Sections:
1. Ensemble Causality Chain (decision → consequence → decision chain)
2. Secret Economy (full table)
3. Eight Sequences (A-H, per sequence: question, decisions, connections)
4. Episode Overview (per episode: A/B/C stories, opening, closing, theme moment)
5. Storyline Interweaving Map
