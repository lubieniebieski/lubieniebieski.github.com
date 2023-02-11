---
title: "Playing with Webmentions"
author: adam nowak
date: "2023-02-11T22:23:48+01:00"
url:
description: With so many site visitors and reactions on Mastodon (LOL), I decided to try out webmentions.
categories:
  - site
tags:
  - webmentions
---

With so many site visitors and reactions on Mastodon (LOL), I decided to try out webmentions.

I'm using [webmention.io][1] to receive and send webmentions. I'm also using [bridgy][2] to combine that with reactions/replies from Mastodon.

The first time I've heard about webmentions, was when I stumbled upon [Robb Knight's article][3]. Robb's website is beautiful and encouraged me to read more about webmentions and actually implement them on my website.

## What are webmentions?

- Webmentions are a form of web communication that allow one website to notify another about mentions or links to its content.
- They are a modern alternative to traditional trackback and pingback systems and provide a way for one website to notify another that it has linked to its content.
- Webmentions are a key part of the [IndieWeb][4] movement, which aims to give individuals more control over their online identity and data.
- In practice, webmentions work by sending a request from the linking website to the target website with information about the link, such as the URL of the linking page and the URL of the linked page.
- The receiving website can then use this information to display a notification or summary of the mention on its site.
- Webmentions offer a more open and decentralized way of communicating between websites and can help to foster a more connected and engaged web.

## Future plans for webmentions on lubieniebieski.pl

Of course, the first paragraph was a bit of a joke, with 2 reactions on Mastodon, there's not a lot of incentive to spend a lot of time on webmentions here. However, I believe that eventually, I'd would be great to connect the content here with other places on the web, to spark discussions, to get more feedback, to cross-link content when it makes sense.

> For now, there's not even a div for webmentions on the site, but the "backend" is already working.

## How to implement webmentions?

Have a look at following sites, I think they are a great starting point and were enough for me to get webmentions working here:

- [All in one with a beautiful example][3]
- [Showing webmentions on site (JS plugin)][6]
- [Starting with webmentions in Hugo][7]
- [webmention.io][1]
- [bridgy][2]

[1]: https://webmention.io
[2]: https://brid.gy/
[3]: https://rknight.me/adding-webmentions-to-your-site/
[4]: https://indieweb.org/
[6]: https://github.com/PlaidWeb/webmention.js
[7]: https://www.jayeless.net/2021/02/integrating-webmentions-into-hugo.html
