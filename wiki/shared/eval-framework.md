# Evaluation Framework — Three-Instrument Methodology

Reference for `evaluator`, `dramaturg`, and `critic` agents. Three instruments applied in sequence. No output passes without all three.

---

## Evaluation Order

```
1. Anti-Sanitization Check (AS1-AS8) — FIRST. Violation = STOP.
2. Quality Gate (mechanical, binary) — per phase checklist.
3. Dramaturgical Substance (qualitative, 1-5) — eight criteria.
4. Gold Standard Comparison (relative) — if reference exists.
5. Diagnosis — biggest structural problem as action item.
6. Verdict — score + decision.
```

---

## Instrument 1: Hutzler's 7 Questions

Applied to any narrative output. Each question must be answerable with CONCRETE ACTIONS — not intentions.

### Q1: Want vs. Need — Clearly Distinguished?

| Check | Yes/No |
|-------|--------|
| Want is concrete, physical, ego-driven, specific, finite? | |
| Need is inner, abstract, unconscious, denied or suppressed? | |
| Crucible active — Want PREVENTS Need? | |
| Price of the choice is high enough? | |

**Two resolution patterns:** (1) Character gets Want, finds it hollow. (2) Character releases Want, embraces Need, finds something better.

### Q2: Active Scenes?

| Check | Yes/No |
|-------|--------|
| Scenes that start the story? | |
| Scenes that drive the character forward? | |
| Scenes showing change through conflict? | |
| Scenes where the character takes initiative? | |
| Scenes of struggle between Want and Need? | |
| Scenes of choice between Want and Need? | |
| Climax scenes? | |
| Resolution scenes? | |

**Causal chain principle:** Every action triggers the next situation. If the protagonist only REACTS, the story doesn't work.

### Q3: Fear — Real and Visceral?

In EVERY scene, at least one check must apply:

| Check | Yes/No |
|-------|--------|
| Fear DRIVES the character to an action? | |
| Fear BLOCKS the character from an action? | |
| Character tries to MASK, control, or compensate the fear? | |
| Character is pushed AGAINST their own values by fear? | |

**Hutzler's law:** Every fear-based decision is the wrong decision. Fear leads inevitably to the Dark Side.

### Q4: Antagonist — Powerful Enough?

| Check | Yes/No |
|-------|--------|
| Clear fear-based worldview? | |
| Story argues EFFECTIVELY for the antagonist's philosophy? | |
| Antagonist weaponizes the protagonist's fear? | |
| Antagonist triggers the protagonist's most self-destructive reactions? | |

### Q5: Backstory — Effectively Deployed?

| Check | Yes/No |
|-------|--------|
| Revealed layer by layer, like an onion? | |
| Only disclosed when URGENTLY relevant to the present? | |
| Revealed through conflict, not explanation? | |
| Reduced to the minimum the audience needs NOW? | |
| Disclosed to someone for whom the information is NEW? | |
| Reveals delayed for maximum impact? | |

**Gold standard:** "Rollo Tomasi" in *L.A. Confidential*.

### Q6: Every Scene — Conflict and Chase?

| Check | Yes/No |
|-------|--------|
| What does the character chase in this scene? | |
| Who blocks, resists, wants something different? | |
| Is the chase resolved? Who wins, who loses? | |
| Power shift within the scene? | |

**Power dynamics per scene:** Who HAS power? Who WANTS power? Who BLOCKS power? Who USES power? How does power SHIFT?

### Q7: Scenes — Build on Each Other?

| Check | Yes/No |
|-------|--------|
| Setup, complication, payoff in every scene? | |
| Reversal or circumstance change in every scene? | |
| Obstacles grow larger, harder, more threatening? | |
| Character is progressively more emotionally and physically at risk? | |
| Gap between expectation and result in every scene? | |
| No unnecessary explaining or connecting scenes? | |

**Summary Test:** Can you answer each in 1-2 sentences? (1) What happens at the beginning/end? (2) What must happen in the middle to build to climax? (3) What do protagonist and antagonist fear? (4) How does the protagonist drive the story?

---

## Instrument 2: Quality Gate Checklist

→ Full gate specifications: `shared/quality-gates.md`

### Application

1. Identify the phase of the output being evaluated.
2. Apply the corresponding gate from `quality-gates.md`.
3. Mark each criterion YES or NO. No interpretation.
4. Calculate gate score: YES / Total x 100%.
5. In iterations 1-2: < 100% acceptable as diagnostic signal. From iteration 3: must be 100%.

---

## Instrument 3: Anti-Sanitization Check

Applied BEFORE all other instruments. A single violation = structural failure. No further evaluation until fixed.

| # | Rule | Check |
|---|------|-------|
| AS1 | **No moralizing** — no character delivers enlightening speeches about wrong behavior (unless built into the arc) | [ ] |
| AS2 | **No spontaneous redemption** — no sudden insight or remorse without arc buildup | [ ] |
| AS3 | **No balancing justice** — not every evil deed gets punished. No karma. | [ ] |
| AS4 | **No disclaimers** — no meta-commentary like "This is of course problematic" | [ ] |
| AS5 | **No linguistic softening** — violence is NAMED. No euphemisms. | [ ] |
| AS6 | **No victim empowerment as default** — not every victim fights back. Not every victim heals. | [ ] |
| AS7 | **No symmetrical portrayal** — no "positive counterexample" in the same scene | [ ] |
| AS8 | **No tonal dilution** — no warmer tone when coldness is required. Hope is earned, never given. | [ ] |

**Score:** 8/8 = passed. < 8/8 = structural failure.

---

## Dramaturgical Substance — 8 Criteria (Qualitative, 1-5 Scale)

Applied to ALL module outputs regardless of phase.

| # | Criterion | Core Question |
|---|-----------|---------------|
| D1 | **Specificity** | Concrete and unique to THIS project — or interchangeable? |
| D2 | **Dramatic friction** | Genuine tension — or harmonious and resolved? |
| D3 | **Ambivalence** | Real moral gray areas — or good/evil assignment? |
| D4 | **Derivation fidelity** | Every element derived from input — or invented from nothing? |
| D5 | **Author's voice / Invention** | Sounds like a human — or like an AI deriving concepts? |
| D6 | **Ruthlessness** | Ugliest truth shown? Does it sting? Or does it dodge? |
| D7 | **Consistency** | All internal references contradiction-free? |
| D8 | **Concreteness mandate** | Right perspective? (Characters: from the character. World: places. Structure: beats.) |

**Substance Score** = Average of D1-D8.

### Scale

| Score | Meaning |
|-------|---------|
| 1 | **Dysfunctional** — unusable, fundamentally flawed |
| 2 | **Weak** — basic structure present, dramaturgically flat |
| 3 | **Functional** — meets requirements, no surprise |
| 4 | **Strong** — dramaturgically convincing, original, friction perceptible |
| 5 | **Excellent** — HBO level, pitch-deck ready |

---

## Gold Standard Comparison (Relative)

Applied when a training example or reference work exists.

| # | Criterion | Question |
|---|-----------|----------|
| V1 | **Structural fidelity** | Same structure as training example? |
| V2 | **Detail depth** | Comparable information density? |
| V3 | **Tonal fit** | Sharp, concrete, unsentimental? |
| V4 | **Originality** | Independent or copied? |

---

## Self-Correction Protocol (5 Error Patterns)

Every agent checks BEFORE finalizing output:

| # | Question | If yes → |
|---|----------|----------|
| 1 | **Are you moralizing?** Commenting from outside? | Stay in the world. Never warn, never relativize. |
| 2 | **Are you softening?** Does it sting? | "Make them sting because they feel real and human." |
| 3 | **Spontaneous redemption?** Does the character have a redemption arc in the sheet? | If not — no insight, no remorse. |
| 4 | **Ugliest truth?** What truth are you currently avoiding? | Write it. |
| 5 | **Sycophantic?** What DOESN'T WORK? | Start with the biggest structural problem. |

---

## Eval Report Template

```
MODULE: [Name]
ITERATION: [N]

ANTI-SANITIZATION: [8/8 or violations listed]
QUALITY GATE: [X%] ([Y]/[Z])
DRAMATURGICAL SUBSTANCE: [Ø]/5
  D1 Specificity:        [score] — [justification with text reference]
  D2 Dramatic friction:  [score] — [justification]
  D3 Ambivalence:        [score] — [justification]
  D4 Derivation fidelity:[score] — [justification]
  D5 Author's voice:     [score] — [justification]
  D6 Ruthlessness:       [score] — [justification]
  D7 Consistency:        [score] — [justification]
  D8 Concreteness:       [score] — [justification]
GOLD STANDARD: [Ø]/5 (if applicable)

DIAGNOSIS: [Biggest problem + action directive]
VERDICT: [Pass / Targeted sharpening / Fundamental rework / Fail]
```

---

## Decision Matrix

| Condition | Action |
|-----------|--------|
| Anti-Sanitization < 8/8 | **STOP.** Fix violations. No further evaluation. |
| Gate < 100% | **IMMEDIATE FIX.** Backjump to error source. |
| Substance < 3.0 | **FUNDAMENTAL REWORK.** Core structure insufficient. |
| Substance 3.0-3.9 | **TARGETED SHARPENING.** Functional but generic. |
| Substance 4.0-4.4 | **FINE-TUNING.** Strong, polish edges. |
| Substance >= 4.5 | **STABLE.** Monitoring only. |
