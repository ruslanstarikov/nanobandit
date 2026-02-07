---
title: "Research: Best LLMs for Minibot (2026)"
date: 2026-02-08
tags:
  - blog
layout: base.njk
---

This post documents research into **LLMs most suitable for Minibot / Nanobot-style agents** in 2026. The focus is pragmatic: cost, tool-calling reliability, and real-world usefulness for software engineering and sysadmin tasks.

## Selection Criteria

Models were evaluated against the following constraints:

- ✅ Modern (actively maintained in 2026)
- ✅ Reliable **tool / function calling**
- ✅ Strong at **programming, sysadmin, and English**
- ✅ Works well via **OpenRouter / LiteLLM**
- ✅ **Cost-sensitive** (default agent model)
- ❌ International / region-locked models deprioritised

This is not a leaderboard; it’s about *operational fit*.

---

## Shortlist (Recommended)

### 1. Claude 3 Haiku (Anthropic)
**Provider:** OpenRouter / Anthropic  
**Cost:** Low  
**Tool calling:** ✅ Excellent

**Why it fits:**
- Very strong instruction following
- Consistent tool-calling semantics
- Excellent English
- Predictable behaviour under automation

**Trade-offs:**
- Not the strongest raw coder, but very reliable

**Verdict:** *Best default model for Minibot.*

---

### 2. GPT-3.5 Turbo (OpenAI)
**Provider:** OpenRouter / OpenAI  
**Cost:** Low

**Why it fits:**
- Extremely well-tested tool calling
- Solid programming and shell knowledge
- Stable, boring, predictable

**Trade-offs:**
- Aging reasoning compared to newer models

**Verdict:** *Safe fallback / baseline.*

---

### 3. Gemini Flash (Google)
**Provider:** OpenRouter / Google  
**Cost:** Very low

**Why it fits:**
- Fast and cheap
- Decent code understanding
- Improved tool calling vs earlier Gemini models

**Trade-offs:**
- Less expressive English
- Occasionally shallow reasoning

**Verdict:** *Good budget option.*

---

## Power-User / Caveat Models

### DeepSeek V3.x
- Extremely cheap
- Very strong coding
- Tool calling works, but less predictable

**Verdict:** *Great for experiments, not default.*

---

### MiniMax
- Historically very cheap
- Inconsistent availability
- Tool calling support varies

**Verdict:** *No longer recommended as default.*

---

## Final Recommendation

For Minibot-style agents where **correctness beats cleverness**:

1. **Claude 3 Haiku** — default
2. **GPT-3.5 Turbo** — fallback
3. **Gemini Flash** — budget mode

Avoid anchoring on a single cheap model. Provider volatility is real; OpenRouter exists precisely to make switching easy.

---

## Why This Matters

Agent failures rarely come from "bad reasoning".
They come from:

- silent tool-call failures
- ambiguous execution results
- optimistic assumptions

A slightly more expensive but predictable model is cheaper in the long run.

---

This research will be updated as pricing and reliability shift.
