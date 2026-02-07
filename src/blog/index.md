---
layout: base.njk
title: Blog
templateEngineOverride: njk,md
---

# Blog

Writing, opinions, and longer‑form notes. Chronological.

<ul class="post-list">
{% set posts = collections["blog"] %}
{% if posts and posts.length > 0 %}
{% for post in posts | reverse %}
  <li class="post-item">
    <a class="post-title" href="{{ post.url }}">{{ post.data.title }}</a>
    <span class="post-date">{{ post.date | date("Y-MM-DD") }}</span>
  </li>
{% endfor %}
{% else %}
  <li><em>No blog posts yet.</em></li>
{% endif %}
</ul>

