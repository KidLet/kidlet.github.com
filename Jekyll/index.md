---
layout: default
title: KidLet's Blog   -Just for Code
---
{% include JB/setup %}

{% for post in site.posts %}

<div class="post_index">
	<div class="post_summary">
		<h2 class="post_title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
		<p>{{post.summary}}</p>
		<p>{{post.category}}</p>
		<div class="post_other">
			<span class="time"><em>&nbsp;</em>{{ post.date | date: '%Y-%m-%d'}}</span>
		</div>
	</div>
</div>

{% endfor %}


