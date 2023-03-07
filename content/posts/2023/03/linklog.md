---
title: "How to create a linklog in a few easy steps"
author: adam nowak
date: "2023-03-07T23:13:06+01:00"
description: I created a linklog. But the story isn't that simple...
categories:
  - site
tags:
  - links
  - linklog
  - sharing
---

Linklog. Few days ago I didn't even know what it is. But then I found an interesting approach on [Robb Knight's page][1] (_I will repeat myself here for the n-th time, but I really like his approach to the web and online presence!_). Then I found [Jeremy Keith's page][2] and I was like: "I want to have something like this too!". So I created a **Linklog**.

So you think that's it? Just an inspiration and a few lines of code and here we are?

Haha.

No, not with me!

## The story isn't that simple

1. Let's take a look at my links
2. Reeder. More than 100 unread items in the read-it-later list.
3. Let's tag things.
4. Oh, I have a wrong tag on my item from 2019. It's a typo there. Not a big deal, I will rename it.
5. You can't rename the tag in Reeder!
6. Moreover, there's no way of working with multiple items at once.
7. Let's search for an alternative!
8. [Reader from Readwise][3]
9. [NetNewsWire][4]
10. [Feedbin][5]
11. [ReadKit][6]
12. [it's already been more than a week since (3.)]
13. How about we report the bug to Reeder developer?
14. Bugs reported, no response so far.
15. Hmm, I had this [Pocket][7] account for a while. Maybe I should use it?
16. For sure there are better alternatives to Pocket.
17. I had also this [Instapaper][8] account...
18. Someone mentioned [Raindrop][9] on Reddit (or somewhere else).
19. Talked to a friend about it. I don't think he still doesn't know what I'm talking about with this `/links` thing. **Hello Bartek!**
20. But he says that Pocket is good, because it's a backend that might power up Reeder.
21. Something clicked.
22. Let's build an integration in Zapier that saves saved items from Pocket to Raindrop and let's build an API on top of Raindrop that will be exposed by my own API and then processed and served as JSON, so it can again be consumed by the blog website you are reading right now.
23. ... exactly, I didn't mention creating my own API! (because I had this idea of exposing "myself" in form of consumable API... I know many... One? Consumer. Well, irrelevant for now, let's go!)
24. So this Zapier works but I realized... why the heck can't I just use Pocket everywhere, they have good integrations with the system, browser, mobile etc. and see point (20.) -- it might power up Reeder (which I really like!). So I decided to use Pocket.
25. Implementing OAuth, getting token, I'm in!
26. Let's write the API in Go, seems easy, I always wanted to have a real project in Go.
27. [3 mins later]. Oh, I need to learn Go first. Let's use Ruby & Sinatra and finish this task this year.
28. Of course, I have to have a Dev Container for development, not that I use just Ruby and 2 gems and I already have them in my system.
29. I'm in, I fetched links from Pocket and I have JSON api returning them in a slightly different form.
30. Why don't we add also boosted links from Mastodon as originally planned?
31. Mastodon API, here we go.
32. New classes added, Copilot is helping me with the code, I'm making progress and I have a working API.
33. Pocket + Mastodon work together as one endpoint, my job is done with API for now.
34. Where do I host this thing. Is Heroku still free? I don't think so.
35. [fly.io][10] seems to be a good idea in theory...
36. ... and in practice, too! `flyctl deploy` and I'm done with API.
37. Let's get back to the blog and add the links.
38. Hmmm, but how do I comment on the links? I don't want to have a separate page for each link. Maybe I should have something like DaringFireball's links?
39. Totally, I will do that.
40. New page type in Hugo, new shortcode, new template, new CSS, new content, new content type, ...
41. Ok, system is in place. Do I actually have a link to comment on?
42. Yeah, there is one, let's do it.
43. One post later, I have a working [proof of concept in place][11].
44. Deploying blog to production.
45. Automation kicks in, posts a link on Mastodon.
46. BUT THE TEMPLATE DOESN'T INDICATE THAT THIS IS AN EXTERNAL LINK IN THE POTS'S TITLE, I need to resolve that before thousands complaints from people are going to reach my inbox.
47. Damn, what about the links in RSS feed? How to make a different link in the feed, not linking to my page, but to the one that I want to share?
48. Let's leave that for now, when people get to the blog, they will see the link to the external page. Problem solved.
49. But how to indicate the external page?
50. Should I use ↗️ or 🔗 or 🌐 or 🌍 or 🌎 or 🌏?
51. I don't know, let's use ↗️, looks cool in blue.
52. Now I can add commentary on the links I find in the Internet, how cool is that?
53. Reflections kicks in -- why don't I use Mastodon for that... nah, let's not waste time for overthinking!
54. New `/linklog` page created, new shortcode, new template, ... you know the drill.
55. But this time it's also about fetching JSON from my API page, you remember? And I haven't done anything like that before.
56. Ok, I'm implementing and playing with Go (that's what I wanted, right?), code looks like 💩 but it works.
57. Unsorted list? Sorted list? Paragraphs? Let's do paragraphs.
58. I think this blog needs CSS changes in the template...
59. ... no I didn't go this route, I know it would end up with a lot of changes and I don't have time for that (hehe).
60. It looks good without modification, actually. Let's just group links by month.
61. Group fetched JSON by month...
62. Group fetched JSON...
63. Documentation, documentation, random blogposts, Discourse...
64. GOT IT!
65. I love the end result. I'm happy with it.
66. Commit!
67. Deploy?
68. NO! Write a post about it first!
69. _I created a linklog. But the story isn't that simple..._

Howgh!

[1]: https://rknight.me/micro/boosts/
[2]: https://adactio.com/links/
[3]: https://readwise.io/read
[4]: https://netnewswire.com/
[5]: https://feedbin.com/
[6]: https://readkitapp.com/
[7]: https://getpocket.com/
[8]: https://www.instapaper.com/
[9]: https://raindrop.io/
[10]: https://fly.io/

[11]: {{< relref "links/1" >}}
