# 08a SEASON ARCS — Arc Construction (TV)

## Purpose

Build the dramatic arc for each character across one season. From event building blocks to movement logic to relationship dynamics in motion.

---

## Prerequisites

- `wiki/projects/[PROJECT]/characters/*.md` — All character files complete
- `wiki/projects/[PROJECT]/theme.md` — Value Conflict and facets
- `shared/event-generators.md` — Event building block definitions
- `shared/quality-gates.md` — Gate references

---

## 9a.0: Dramatic Event Building Blocks

Before constructing arcs, establish the event building blocks for each character. These are the structural hooks that generate plot from character.

Read `shared/event-generators.md` for full definitions. Per character, define:

### GAP
The distance between what the character expects to happen and what actually happens. Every significant scene has a GAP — expectation meets reality, reality wins.

- What does this character consistently expect?
- How does reality consistently betray that expectation?
- How does the GAP widen over the season?

### CATCH
The moment where the character's strategy backfires — where the very thing they do to solve the problem makes it worse. Directly connected to the Crucible.

- What is the character's go-to strategy?
- How does that strategy create the next problem?
- When does the character realize the strategy is failing? (Or do they?)

### Fatal Flaw
The specific behavioral pattern — rooted in the Lie — that will lead to the character's greatest crisis. Not a trait. A repeating action.

- What does the character keep doing despite evidence it doesn't work?
- What would they need to STOP doing?
- What is the cost of this pattern escalating?

### Self-Revelation
The moment of recognition — when the character sees the Lie for what it is. May be positive (leads to change) or negative (too late, or rejected).

- What event forces the recognition?
- Which other character triggers it?
- Does the character accept or reject the revelation?

### Dark Side Ladder
The escalation sequence of Dark Side behavior. 3-5 steps from first transgression to worst action.

- Step 1: Minor transgression (justifiable)
- Step 2: Escalation (harder to justify)
- Step 3: Crossing a line (others notice)
- Step 4: Point of no return (self-awareness or denial)
- Step 5: Worst action (the character at their darkest)

---

## 9a.1: Arc Type + Outcome

For each character, assign:

### Arc Type

| Type | Definition | Example |
|------|-----------|---------|
| **Classic** | Character recognizes Lie, changes behavior, fulfills Need | Walter White in reverse — start broken, end whole |
| **Awakening** | Character was unaware of the Lie, gradually discovers it | Detective who realizes the system they serve is corrupt |
| **Conflicting** | Character oscillates — sees the Lie, falls back, sees it again | Addict pattern — insight without sustained change |
| **Oscillating** | No single direction — character moves between states | Ensemble character whose arc serves the theme, not personal growth |

### Arc Outcome

| Outcome | Definition |
|---------|-----------|
| **Positive** | Character overcomes Lie, fulfills Need (partially or fully) |
| **Negative** | Character deepens Lie, fails Need, consequences escalate |
| **Tragic** | Character recognizes Lie too late, or recognition cannot prevent consequences |

**Rule:** Not every character gets a positive arc. The ensemble outcome distribution should embody the Message. If the Message is that Value A matters more — the character embodying Value A should have the arc that demonstrates this through CONSEQUENCES, not declaration.

---

## 9a.2: Movement Logic

For each character, map the Want/Need curves across 3 acts:

### Act 1 (Setup — Episodes 1-3 approx.)
- **Want:** Activated — what triggers the pursuit?
- **Need:** Invisible — the character doesn't know it exists
- **Lie:** Functional — the coping strategy still works (barely)
- **Turning Point 1:** An irreversible decision that commits the character

### Act 2 (Confrontation — Episodes 4-7 approx.)
- **Want:** Escalating — pursuit intensifies, strategies shift
- **Need:** Surfacing — cracks appear, Lie starts failing
- **Crucible:** Active — Want pursuit is measurably making Need worse
- **Turning Point 2:** A crisis that forces the character to face the Lie

### Act 3 (Resolution — Episodes 8-10 approx.)
- **Want:** Climax — final push or collapse
- **Need:** Confronted — the character must choose
- **Self-Revelation:** Triggered — Lie is seen (accepted or rejected)
- **Arc Outcome:** Realized through final actions, not words

### Turning Points as Irreversible Decisions
Every Turning Point is a DECISION the character makes — not something that happens TO them. The decision must be:
- Irreversible (cannot go back)
- Character-driven (comes from their psychology)
- Triggered by another ensemble member's action
- Visible (we see the moment of choice)

---

## 9a.3: Relationship Dynamics in Motion

The ensemble is not static. Relationships shift across the season.

### Crossing Matrix Per Act

For each Collision Pair (⚡), define:
- **Act 1 state:** How do they relate at the beginning?
- **Shift trigger:** What event changes the relationship?
- **Act 2 state:** How has it changed?
- **Escalation:** What makes it worse/deeper/more complicated?
- **Act 3 state:** Where does the relationship land?

### Alliance Shifts
- Who starts as allies and becomes opponents?
- Who starts as opponents and becomes allies?
- Who remains constant — and what does that constancy cost?

### Secret Economy
- What does each character know that others don't?
- When are secrets revealed? To whom? At what cost?
- How do revelation moments change relationship dynamics?

---

## Quality Gate

Before completing season arcs, verify:

- [ ] Event building blocks defined for EVERY character (GAP, CATCH, Fatal Flaw, Self-Revelation, Dark Side Ladder)
- [ ] Arc type assigned per character (Classic/Awakening/Conflicting/Oscillating)
- [ ] Arc outcome assigned per character (Positive/Negative/Tragic)
- [ ] Outcome distribution embodies the Message
- [ ] Want/Need curves mapped across 3 acts for every character
- [ ] Turning Points are irreversible DECISIONS, not events
- [ ] Each Turning Point triggered by another ensemble member
- [ ] Crossing Matrix shows relationship shifts across all 3 acts
- [ ] Secret economy mapped — who knows what, when revealed
- [ ] No arc exists in isolation — every arc intersects with at least 2 others

---

## Output

File: `wiki/projects/[PROJECT]/season/arcs.md`

Sections:
1. Event Building Blocks (per character)
2. Arc Types + Outcomes (per character, with ensemble distribution)
3. Movement Logic (per character: Want/Need curves, 3 acts, Turning Points)
4. Relationship Dynamics (Crossing Matrix per act, alliance shifts, secret economy)
