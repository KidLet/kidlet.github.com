---
layout: page
title: 文章
tagline: Supporting tagline
---
{% include JB/setup %}

</br>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<ul>
{% assign posts_collate = site.posts %}
{% include JB/posts_collate %}
</ul>


