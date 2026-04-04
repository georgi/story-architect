# 08b GAME VALIDATION — Narrative Validation Checks (Game)

## Purpose

Validate the game's narrative design for thematic integrity, meaningful player agency, and arc function across all branches. Games face unique validation challenges: every branch must carry the Value Conflict, choices must be genuine, and the theme must function regardless of player path.

---

## Prerequisites

- `wiki/projects/[PROJECT]/narrative-design.md` — Narrative design document
- `wiki/projects/[PROJECT]/theme.md` — Value Conflict, facets, Message
- `wiki/projects/[PROJECT]/characters/*.md` — All character files

---

## Check 1: False Choice Audit

The most critical game-specific validation. Every player choice must be genuine.

### Per Choice Point:

| Test | Question | Pass/Fail |
|------|----------|-----------|
| **Scene Impact** | Does this choice change at least one subsequent scene in a way the player can perceive? | |
| **Relationship Impact** | Does this choice affect at least one NPC relationship (approval, trust, availability)? | |
| **World State Impact** | Does this choice alter the game world in a visible way (environment, access, NPC behavior)? | |
| **Thematic Weight** | Does this choice engage the Value Conflict (even implicitly)? | |

**Scoring:**
- 4/4 → Strong choice. Keep.
- 3/4 → Acceptable. Consider strengthening the weak dimension.
- 2/4 → Weak choice. Redesign or merge with another choice.
- 1/4 or 0/4 → False choice. Remove or completely redesign.

### Aggregate Check
- What percentage of choices score 3/4 or higher?
- Target: ≥80%. Below that → systemic design issue, not individual choice issue.

---

## Check 2: Consequence Visibility

Players must perceive that their choices matter. Invisible consequences are functionally identical to no consequences.

### Per Major Branch:

| Element | Present? | How Visible? |
|---------|----------|-------------|
| **Environmental change** | The world looks/sounds/feels different | |
| **NPC behavioral change** | Characters treat the player differently | |
| **Dialogue reflection** | NPCs or the protagonist reference the choice | |
| **Narrative callback** | A later event explicitly results from the earlier choice | |
| **Mechanical change** | Gameplay options expand or contract | |

**Rule:** Every major branch must have at least 3 of 5 visibility elements. Players who make different choices should have noticeably different experiences.

---

## Check 3: Arc Function Across Branches

### For Defined Protagonist:
Test that the protagonist's arc functions on EVERY path:

| Branch | Ghost Visible? | Lie Challenged? | Crucible Active? | Self-Revelation Possible? | Arc Outcome Clear? |
|--------|---------------|----------------|-------------------|--------------------------|-------------------|
| Path A | | | | | |
| Path B | | | | | |
| Path C | | | | | |

Every path must hit: Ghost visible, Lie challenged, Crucible active, some form of Self-Revelation (even if rejected), clear arc outcome.

If any path skips a critical arc beat → that path is narratively incomplete. Fix.

### For Player-Defined Protagonist:
Test that the value spectrum functions:
- Can the player genuinely embody Value A across the entire game?
- Can the player genuinely embody Value B across the entire game?
- Can the player occupy the gray zone?
- Does each position lead to a meaningfully different experience and ending?

---

## Check 4: Theme in Every Branch

The Value Conflict must be present regardless of the player's path. No branch should accidentally dodge the theme.

### Per Branch:

| Check | Question | Pass/Fail |
|-------|----------|-----------|
| **Value Conflict Present** | Does the player encounter the tension between Value A and Value B on this path? | |
| **Facet Representation** | Are enough facets represented on this path to make the argument visible? | |
| **Antagonist Function** | Does the opponent/antagonist on this path embody the antithesis facet? | |
| **Consequence Pattern** | Do the consequences on this path reflect the Message (even if the player chose "against" the Message)? | |

**Critical rule:** The Message is expressed through CONSEQUENCES, not through narrator judgment. A player who chooses the "wrong" value should experience consequences that DEMONSTRATE why — without being punished arbitrarily or lectured at.

---

## Check 5: Environmental Storytelling Validation

The world must tell the story even when the player isn't in a cutscene or dialogue.

### Per Sub-World:
- Does this environment tell a story about the Value Conflict without words?
- Can a player who only explores (never talks to NPCs) still understand the core tension?
- Are there discoverable stories that deepen understanding of the Value Conflict?
- Does the environment change based on player choices? (Post-branch environmental storytelling)

### Completionist vs. Speedrunner Test
- **Speedrunner path:** If a player does ONLY the critical path, do they get a complete thematic experience?
- **Completionist path:** If a player does EVERYTHING, does the additional content deepen the theme without contradicting it?

Both must work. The critical path carries the argument. Side content enriches it.

---

## Check 6: Companion Arc Responsiveness

If the game has companions, their arcs must respond to the player's choices.

### Per Companion:

| Check | Question | Pass/Fail |
|-------|----------|-----------|
| **Choice Responsiveness** | Does the companion's arc change based on player decisions? | |
| **Facet Consistency** | Does the companion maintain their facet position while responding to the player? | |
| **Approval Meaning** | Does companion approval/disapproval reflect the Value Conflict (not just "be nice to me")? | |
| **Arc Completion** | Can the companion's arc reach a meaningful conclusion on every major path? | |
| **Departure Logic** | If the companion can leave, is the departure earned and thematically resonant? | |

---

## Check 7: Ending Validation

Every ending must be a statement about the Value Conflict.

### Per Ending:

| Element | Definition |
|---------|-----------|
| **Which value prevails?** | What position in the Value Conflict does this ending embody? |
| **Is it earned?** | Does this ending follow logically from accumulated player choices? |
| **Is it distinct?** | Is this ending genuinely different from others (not a reskin)? |
| **Does it express the Message?** | Even if the player chose "against" the Message, do the consequences reflect the author's position? |
| **Is it satisfying?** | Does the player feel their choices mattered, regardless of outcome? |

### Ending Distribution
- At least one ending should align with the Message (the "thematic" ending)
- Other endings should represent genuine alternative positions in the Value Conflict
- No ending should feel like punishment for "wrong" choices — only consequences of chosen values
- No ending should undermine the Value Conflict by suggesting it doesn't matter

---

## Validation Report Format

### False Choice Audit
- Per-choice scoring
- Aggregate percentage
- Flagged false choices with redesign proposals

### Consequence Visibility
- Per-branch visibility audit
- Gaps identified
- Proposals for increased visibility

### Arc Function
- Per-branch arc beat coverage
- Incomplete paths identified
- Proposals for completion

### Theme Validation
- Per-branch theme check results
- Branches where theme is weak
- Environmental storytelling assessment

### Companion Validation (if applicable)
- Per-companion check results
- Responsiveness gaps

### Ending Validation
- Per-ending analysis
- Distribution assessment
- Message expression evaluation

### Prioritized Revisions
All identified issues, ranked by impact on player experience and thematic delivery.

---

## Quality Gate

Before completing validation, verify:

- [ ] Every choice point audited for false choices (≥80% score 3/4+)
- [ ] Consequence visibility verified for all major branches (≥3/5 elements each)
- [ ] Protagonist arc functions on every major path
- [ ] Value Conflict present on every branch
- [ ] Environmental storytelling carries theme without dialogue
- [ ] Speedrunner AND completionist paths both deliver thematic experience
- [ ] Companion arcs responsive to player choices (if applicable)
- [ ] Every ending is earned, distinct, and expresses a position in the Value Conflict
- [ ] No false choices remain unaddressed
- [ ] Message expressed through consequences, never through narrator judgment

---

## Output

File: `wiki/projects/[PROJECT]/game-validation.md`

Sections:
1. False Choice Audit (per choice, aggregate, flagged items)
2. Consequence Visibility (per branch)
3. Arc Function Across Branches
4. Theme in Every Branch
5. Environmental Storytelling Assessment
6. Companion Arc Responsiveness (if applicable)
7. Ending Validation
8. Prioritized Revisions
