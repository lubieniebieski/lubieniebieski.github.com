---
title: "RSS State of Things"
author: adam nowak
date: "2024-03-13T20:15:01+01:00"
url:
description: It's time for me to dive deeper into my year-long experience with Readwise Reader, the reasons behind my departure, and the new approach to RSS that better suits my evolving needs.
categories:
  - tech
tags:
  - RSS
  - Readwise Reader
  - Reeder
  - NetNewsWire
  - Omnivore
---

A few days ago, I made the switch from [Readwise Reader][1] and shared a [brief update][2] on Mastodon. It's time for me to dive deeper into my year-long experience with this tool, the reasons behind my departure, and the new approach to RSS that better suits my evolving needs.

## Context

[Reeder][3] was my companion for RSS feeds; its integration with my Apple devices provided a seamless user experience. Everything went well until I started writing more on my blog. I wanted to have API access and connect it with my site, especially the [linklog][4]. I was reading quite a lot of links and wanted to tag them, add highlights, and share them with all of you here. Unfortunately, Reeder is "just an app" and doesn't have any API access. My RSS feeds contain various content like brain-melting articles, interesting blog posts, news from some of the sites around my interests, and some "alerts" with deals.

## Adventure with Readwise Reader

I was looking for a solution and found Readwise Reader. It wasn't perfect; I even extended the trial and exchanged a few emails with support. The experience was much heavier than with Reeder (which I would describe as more casual). There were a ton of options, settings, and customization. Here are a few things I liked the most about it (it's a great service after all!):

- **Highlights** -- I could highlight the text and save it for later. It was a great way to remember the most important parts of the article. There's also a Logseq integration, so I had all of the important parts in my notes.
- **Tags** -- I could tag the articles and then filter them by tags. It was a great way to organize the content. It's also a great way to customize the views 👇
- **Views** -- I could customize the views and create a few different ones. I was able to create multiple views with the same feed, and based on the tags or properties (like read/unread), I could filter the content. I had my "Quick!" view and some other views for different purposes and for different states of mind.
- **API** -- I could connect it with my site and use the API to fetch the content. It was a great way to connect the content with my site and share it with you.
- **RSS reader and read-it-later in one** -- It wasn't obvious at the beginning, but I had one place for all the content, both for quick reading and for saving for later. It was very convenient. I realized it when my new RSS reader only had a "starred" state, and I wasn't able to save articles not coming directly from the RSS feed I followed.The reason I resigned from Reader was that I was paying around $9 each month and not using it as much as I wanted. I mainly used it for reading, not for saving content or making highlights. As a result, there was hardly anything going through the API to my site. I was essentially paying for unused features, and I hate paying for something I don't use.
- **ChatGPT integration** -- I could use the ChatGPT integration to summarize the articles. It was a great way to get the gist of the article and decide whether to read it or not. It was just one click away!

## New Approach

Now, I've adopted a new approach to RSS reading. I have two apps:

1. [NetNewsWire][5] -- This free, open-source app now serves as my RSS feed workhorse. I can browse through the content and then decide whether or not to save it for later. Although it may not be as polished[^1] as Reeder or Readwise Reader, it gets the job done (fast!) and I am satisfied with it.
{{< figure src="nnw.png" caption="My brain's way of categorizing things" >}}

2. [Omnivore][6] -- I use this app to save content from NetNewsWire and the web at large. It's also available on all my devices, and I utilize it to read articles and make highlights. Similar to Reader, it integrates with Logseq, enabling me to save the highlights and incorporate them into my notes.
{{< figure src="omnivore.png" caption="I like the highlight on the right a lot" >}}

The fact that both apps are open-source is a major plus. I believe that supporting these projects is a better way to invest my money rather than paying for underutilized features. Additionally, I appreciate the idea of having two separate apps for reading and saving content. It adds a layer of complexity, but it works well for me. My brain is happy with this solution -- it doesn't trigger the more powerful cores when in "browsing" mode, but it's ready to fire up when I'm in "consuming" mode.

In conclusion, I am content with this solution and believe it is the best approach for now.

[1]: https://read.readwise.io/
[2]: https://social.lol/@lubieniebieski/112042085438667602
[3]: https://reederapp.com/
[4]: {{% relref "linklog" %}}
[5]: https://netnewswire.com/
[6]: https://omnivore.app/

[^1]: For instance, the swipe gesture to mark articles could be more sensitive and trigger earlier.
