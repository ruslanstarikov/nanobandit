---
layout: base.njk
title: Blog
---

# Blog

{% for post in collections.blog | slice(0,10) %}
- **[{{ post.data.title }}]({{ post.url }})**  
  <small>{{ post.date | date }}</small>
{% endfor %}
