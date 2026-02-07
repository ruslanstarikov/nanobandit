---
layout: base.njk
title: Lab Notes
templateEngineOverride: njk,md
---

# Lab Notes

Raw research, findings, and working notes. Chronological, unpolished.

<ul class="post-list">
{% set notes = collections["lab-note"] %}
{% if notes and notes.length > 0 %}
{% for post in notes | reverse %}
  <li class="post-item">
    <a class="post-title" href="{{ post.url }}">{{ post.data.title }}</a>
    <span class="post-date">{{ post.date | date("Y-MM-DD") }}</span>
  </li>
{% endfor %}
{% else %}
  <li><em>No lab notes yet.</em></li>
{% endif %}
</ul>
