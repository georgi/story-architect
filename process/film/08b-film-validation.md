# 08b FILM VALIDATION — Validation Checks (Film)

## Purpose

Validate the complete film structure against thematic integrity, structural soundness, and character arc fulfillment. Adapted from TV validation for single-arc structure.

---

## Prerequisites

- `wiki/projects/[PROJECT]/structure.md` — Film structure
- `wiki/projects/[PROJECT]/theme.md` — Value Conflict, facets, Message
- `wiki/projects/[PROJECT]/characters/*.md` — All character files

---

## Part 1: Structural Sparring

### Compare Against Reference Films
Select 2-3 reference films that share structural DNA with this project. Structural DNA means: similar arc type, similar Value Conflict mechanics, similar ensemble function.

For each reference:
- **What makes the reference film's structure work?** Identify the structural engine.
- **How does our structure compare?** Where is it as strong? Where is it weaker?
- **Midpoint comparison:** How does our midpoint's dual function (success + loss) compare?
- **Climactic Choice comparison:** Is our climactic choice as binary, high-stakes, and thematically loaded?

### Sequence Pressure Test
For each of the 8 sequences:
- **Does this sequence have its own dramatic question?** (Not just "what happens next")
- **Is there a character decision driving it?** (Not external events)
- **Does the value charge shift?** (If it stays the same as the previous sequence, something is stalling)
- **Could this sequence be removed without collapsing the film?** (If yes, it may be padding)

---

## Part 2: Theme Reflux (Film)

### Check 1: Facet Representation

Every facet from `theme.md` must be embodied by at least one character and visible through action in the film.

| Facet | Character(s) | How Embodied | Sequence(s) Where Visible |
|-------|-------------|-------------|--------------------------|
| ... | ... | ... | ... |

If a facet is absent: either remove it from theme or add a character/scene that carries it.

### Check 2: Climactic Choice Carries Message

The Climactic Choice is the single most important moment for thematic delivery.

- What value does the protagonist choose?
- What value do they sacrifice?
- What are the visible consequences?
- Does the consequence pattern match the Message from `theme.md`?
- Could a viewer understand the author's position purely from watching the climax?

### Check 3: Midpoint Integrity

The Midpoint must function as the structural fulcrum:
- Is the external success GENUINELY impressive? (Not a minor win)
- Is the internal loss GENUINELY devastating? (Not a minor setback)
- Are they simultaneous? (Not sequential — the same action that creates success must cause loss)
- Does the protagonist recognize the loss at the midpoint? (Usually: no — that's the trap)

### Check 4: Per-Character Validation

For EVERY character:

| Check | Question | Pass/Fail |
|-------|----------|-----------|
| **Facet Fidelity** | Does this character consistently embody their assigned facet through action? | |
| **Arc Completion** | Does this character's arc reach a clear outcome within the film's runtime? | |
| **Structural Necessity** | If this character were removed, would the film collapse? (If no → consider cutting) | |
| **Value Conflict Tension** | Does this character carry internal tension between both values? | |

### Check 5: Opponent Validation

The opponent requires special attention:
- Is the opponent as psychologically rich as the protagonist?
- Does the opponent have a genuine point? (If not → they're a villain, not an opponent)
- Does the opponent force the protagonist to confront the Lie? (Through action, not speech)
- Is the opponent's defeat/victory thematically necessary? (Not just plot convenient)

---

## Part 3: Emotional Architecture

### Audience Experience Check
Walk through the film's emotional journey:
- **Opening:** What does the audience FEEL entering this world?
- **End of Act 1:** What question drives them forward?
- **Midpoint:** What emotional reversal occurs?
- **Crisis:** What is the audience's lowest point?
- **Climax:** What catharsis (or devastation) is delivered?
- **Final image:** What emotion lingers?

### Pacing Check
- Are there scenes that serve information but not emotion? (Cut or restructure)
- Are there emotional peaks too close together? (Diminishing returns)
- Does the audience get breathing room between intense sequences?
- Does the tension arc consistently escalate from Sequence A to H? (No plateaus)

---

## Validation Report Format

### Structural Sparring Results
- Reference films used
- Comparison findings per reference
- Sequence pressure test results (pass/flag for each)

### Theme Reflux Results
- Facet representation (complete/incomplete)
- Climactic Choice alignment with Message (pass/fail)
- Midpoint integrity (pass/fail for all 4 criteria)
- Per-character validation results
- Opponent validation results

### Emotional Architecture Results
- Audience journey mapped
- Pacing issues identified
- Recommended adjustments (prioritized)

---

## Quality Gate

Before completing validation, verify:

- [ ] Compared against 2-3 structural reference films
- [ ] All 8 sequences pass pressure test
- [ ] Every facet represented in the film
- [ ] Climactic Choice demonstrates Message through action
- [ ] Midpoint satisfies dual function (simultaneous success + loss)
- [ ] All characters pass four-check validation
- [ ] Opponent validated as psychologically rich and thematically necessary
- [ ] Emotional architecture mapped without plateaus or redundancies
- [ ] All identified weaknesses have specific revision proposals

---

## Output

File: `wiki/projects/[PROJECT]/validation.md`

Sections:
1. Structural Sparring
2. Theme Reflux (facets, climax, midpoint, characters, opponent)
3. Emotional Architecture
4. Identified Weaknesses
5. Revision Recommendations (prioritized)
