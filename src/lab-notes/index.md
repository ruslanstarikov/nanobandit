---
layout: base.njk
title: Lab Notes
templateEngineOverride: njk,md
---

# Lab Notes

Raw research, findings, and working notes. Chronological, unpolished.

{% set notes = collections["lab-note"] %}
{% if notes and notes.length > 0 %}
{% for post in notes | reverse %}
- [{{ post.data.title }}]({{ post.url }}) — {{ post.date | date("Y-MM-DD") }}
{% endfor %}
{% else %}
*No lab notes yet.*
{% endif %}
