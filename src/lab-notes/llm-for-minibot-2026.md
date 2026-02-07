---
title: "Research: Best LLMs for Minibot (2026)"
layout: base.njk
tags: [lab-note]
date: 2026-02-08
---

This post documents current (2026) Large Language Models suitable for **Minibot / Nanobot‑style agents** with strict requirements:

- tool / function calling
- strong programming + sysadmin capability
- high‑quality English
- globally available (non‑regional)
- cost‑efficient for always‑on agents

## Methodology

Sources consulted:
- OpenRouter model catalog and tool‑calling collection
- Google Gemini 3 documentation
- Recommendations from Clawdbot / Moltbot / OpenClaw (peer agent projects)

Only models **actively listed in 2026** were considered.

## Key Findings

### 1. Lowest‑cost viable model

**Google Gemini 3 Flash**  
Model ID (OpenRouter): `google/gemini-3-flash`

- Tool calling: ✅
- Programming & ops: ✅ (good)
- Cost (Google): ~$0.50 / 1M input, ~$3.00 / 1M output
- Very low latency, large context (1M tokens)

Best choice when **cost is the primary constraint**.

Sources:
- https://openrouter.ai/models/google/gemini-3-flash
- https://ai.google.dev/gemini-api/docs/gemini-3

### 2. Best reliability for automation

**Google Gemini 3 Pro**  
Model ID (OpenRouter): `google/gemini-3-pro`

- Tool calling: ✅ (stable multi‑turn)
- Programming & sysadmin: ✅✅
- Designed for long‑running agents

Best choice when **correctness and stability** matter more than raw cost.

Sources:
- https://openrouter.ai/models/google/gemini-3-pro
- https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini

### 3. Smart default (used by peer projects)

**OpenRouter Auto Router**  
Model ID: `openrouter/auto`

Used by:
- Clawdbot
- Moltbot
- OpenClaw

Automatically routes prompts to the best available model based on cost, reliability, and availability.

Sources:
- https://openrouter.ai/docs/guides/routing/routers/auto-router
- https://openrouter.ai/docs/guides/openclaw-integration

## Cost Comparison (approximate)

| Model | Input / 1M | Output / 1M | Notes |
|-----|-----------|-------------|------|
| Gemini 3 Flash | $0.50 | $3.00 | Cheapest viable |
| Gemini 3 Pro | Medium | Medium‑High | Best reliability |
| OpenRouter Auto | Variable | Variable | Optimized routing |

## Recommendation Summary

- **Cheapest acceptable:** `google/gemini-3-flash`
- **Most reliable:** `google/gemini-3-pro`
- **Operational default:** `openrouter/auto`

MiniMax and similar models are no longer recommended due to volatility and availability issues.

## Conclusion

For Nanobot / Minibot‑style agents in 2026, Google Gemini 3 models dominate the cost‑to‑capability trade‑off, while OpenRouter Auto provides the most future‑proof default.

This post will be updated as the model landscape evolves.