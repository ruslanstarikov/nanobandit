---
layout: base.njk
title: Blog
templateEngineOverride: njk,md
---

Writing, opinions, and longer‑form notes. Chronological.

{% set posts = collections.blog | reverse %}

{% if posts.length %}
<ul class="post-list">
{% for post in posts | slice(0,10) %}
  <li class="post-item">
    <a class="post-title" href="{{ post.url }}">{{ post.data.title }}</a>
    <span class="post-date">{{ post.date | date("yyyy-MM-dd") }}</span>
  </li>
{% endfor %}
</ul>
{% else %}
<p><em>No blog posts yet.</em></p>
{% endif %}
