# 08c SEASON VALIDATION — Validation Checks (TV)

## Purpose

Validate the complete season against reference works and thematic integrity. Two validation methods: series sparring (external comparison) and theme reflux (internal consistency).

---

## Prerequisites

- `wiki/projects/[PROJECT]/season/arcs.md` — Character arcs
- `wiki/projects/[PROJECT]/season/plot.md` — Season plot
- `wiki/projects/[PROJECT]/theme.md` — Value Conflict and facets
- `wiki/projects/[PROJECT]/characters/*.md` — All character files

---

## Part 1: Series Sparring

### Purpose
Compare each Collision Pair against 2+ reference constellations from known prestige TV series. Not to copy — but to test whether the collision has the dramatic density of proven character constellations.

### Process

For each Collision Pair (⚡):

#### Step 1: Identify Reference Constellations
Find 2+ character pairings from existing series that share structural DNA with this Collision Pair. Structural DNA means:
- Similar Want opposition (A's Want sabotages B's Need)
- Similar power dynamic (asymmetric, shifting, mutual destruction)
- Similar thematic function (both pairs externalize the same type of value conflict)

**Not:** "They're both crime partners" (surface similarity).
**But:** "Both pairs feature a character whose loyalty enables their partner's worst behavior" (structural similarity).

#### Step 2: Compare Collision Mechanics
For each reference constellation:
- What makes this reference pairing dramatically inexhaustible? (Why does it generate episode after episode?)
- What is the escalation engine? (What keeps making it worse?)
- What is the unresolvable core? (Why can't they just separate?)

#### Step 3: Test Our Collision Pair
- Does our pair have an escalation engine of equal power?
- Is there an unresolvable core — a reason they MUST keep colliding?
- Does our pair generate at least 3-4 distinct collision scenarios across the season?
- What does the reference constellation have that ours lacks?
- What does ours have that the reference doesn't?

#### Step 4: Strengthen or Adjust
If the comparison reveals weaknesses:
- Identify what structural element is missing
- Propose specific adjustments to character files or arc design
- Document the adjustment with rationale

---

## Part 2: Theme Reflux

### Purpose
Verify that the Value Conflict permeates every level of the season. Theme is not an overlay — it is the engine. If any element of the season could exist without the specific Value Conflict, it is disconnected.

### Check 1: Facet Representation

| Facet | Character(s) | How Embodied in Action | Episode(s) Where Visible |
|-------|-------------|----------------------|-------------------------|
| ... | ... | ... | ... |

Every facet from `theme.md` must be:
- Represented by at least one character
- Visible through ACTION (not dialogue or narration)
- Present in multiple episodes (not a one-off)

**If a facet is missing:** Either the facet was unnecessary (remove from theme) or a character is not fulfilling their thematic function (revise character or arc).

### Check 2: Climax Carries Message

The season climax must show the Message through action:
- What is the protagonist's final decision?
- Which value does this decision embody?
- What are the consequences of this decision?
- Does the consequence pattern match the Message?

**Test:** Could someone who watches only the climax understand the author's position in the Value Conflict — purely through what happens, without any explanation?

### Check 3: Protagonist Arc Carries Message

The protagonist's arc is the primary vehicle for the Message:
- Does the arc type (Classic/Awakening/Conflicting/Oscillating) serve the Message?
- Does the arc outcome (Positive/Negative/Tragic) embody the Message?
- Is the protagonist's relationship to the Value Conflict clear through their actions across all 3 acts?

### Check 4: Four Checks Per Character

For EVERY character in the ensemble:

| Check | Question | Pass/Fail |
|-------|----------|-----------|
| **Facet Fidelity** | Does this character's behavior consistently embody their assigned facet? Or do they drift into another position? | |
| **Arc-Theme Alignment** | Does this character's arc outcome serve the overall Message? (Not every character needs a positive arc — but every arc must contribute to the argument.) | |
| **Collision Function** | Does every Collision Pair this character is part of externalize the Value Conflict? Or are some collisions purely personal? | |
| **Value Conflict Tension** | Does this character carry BOTH sides of the Value Conflict internally? Where do we see the opposing value in them? | |

---

## Validation Report Format

### Series Sparring Results
Per Collision Pair:
- Reference constellations used
- Comparison findings
- Strengths of our pairing
- Weaknesses identified
- Proposed adjustments (if any)

### Theme Reflux Results
- Facet representation table (complete/incomplete)
- Climax-Message alignment (pass/fail with analysis)
- Protagonist arc-Message alignment (pass/fail with analysis)
- Per-character four-check results
- Disconnected elements (anything that doesn't trace to Value Conflict)
- Recommended revisions (prioritized)

---

## Quality Gate

Before completing validation, verify:

- [ ] Every Collision Pair compared against 2+ reference constellations
- [ ] Reference constellations are STRUCTURAL matches, not surface matches
- [ ] All weaknesses identified with specific adjustment proposals
- [ ] Every facet represented in the season (or explicitly removed from theme)
- [ ] Climax demonstrates Message through action
- [ ] Protagonist arc carries Message
- [ ] Four checks completed for EVERY character
- [ ] All disconnected elements identified
- [ ] Revision recommendations prioritized by impact

---

## Output

File: `wiki/projects/[PROJECT]/season/validation.md`

Sections:
1. Series Sparring (per Collision Pair)
2. Theme Reflux — Facet Representation
3. Theme Reflux — Climax + Message
4. Theme Reflux — Protagonist Arc
5. Theme Reflux — Per-Character Checks
6. Disconnected Elements
7. Revision Recommendations (prioritized)
