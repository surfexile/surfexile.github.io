---
layout: post
permalink: /about
title: About
categories: [Tech, Technical, Personal, Podcasts, YouTube]


---
# About me

I'm Neil Brown and a .Net Developer / Software Engineer from the UK.

Though I've been working in I.T. for nearly 40 years, I still keep myself up to date with the latest Development technologies, frameworks and techniques. I try to infuse my enthusiasm for the industry into others and this site is just one way of doing that.

I've worked across many sectors, including a former Blue Chip company, the public Sector, a small start-up and a medium sized family business in Fintech.

## Fave podcasts
I'm a big fan of Tech podcasts. Here are a few of my current favourites:
 {% for podcast in site.podcasts %}
#### Name: {{ podcast.name }}  
Description: {{ podcast.description }}  
URL: [{{ podcast.link }}]({{ podcast.link }})
 {% endfor %}
## Fave YouTube channels
 {% for channels in site.youtube %}
#### Name: {{ channels.name }}  
Description: {{ channels.description }}  
URL: [{{ channels.link }}]({{ channels.link }})
 {% endfor %}
