---
title: "I built a simple app for trash collection reminders"
author: adam nowak
date: "2024-01-27T21:22:43+01:00"
url:
description: "I wrote an app for trash collection reminders, so I never miss a pickup again."
categories:
  - site
  - software
  - dev
tags:
  - project
  - tech
  - ruby
  - sinatra
  - Turew
---

Have you ever had a brain slip and put out the wrong bins on trash day? It's surprisingly easy to do—even with a perfectly marked calendar! That's the inspiration behind my latest project, [smieci.turew.pl][1] (it's in Polish 🇵🇱), a website dedicated to keeping my fellow villagers in [Turew][2], on top of our trash collection schedule.

## Inspiration

For a long time, I was a fan of [wheniskeynote.com][3], a site that counts down to Apple's next big event. If something as anticipated as a keynote merits its own website, why not something as practical as trash collection reminders?

In my household, despite having shared calendar reminders, the occasional schedule tweak or human error has led to angry words coming out from my mouth. As a resident of a single home, the chore of hauling bins to the front the night before pickup is mandatory -- unless you're a fan of exceptionally early starts when you hear the big truck coming.

## Domain name

The `turew.pl` domain was already mine, but I didn't start any projects around it. Adding `smieci`[^1] was the intuitive choice for a subdomain that says exactly what it does in a quirky, local fashion.

## The Tech Stack

Speaking tech, I took a straightforward approach:

* Data sourced directly from our trash collection company to ensure accuracy.
* A simple Ruby (Sinatra) app powers the site, serving up a single, lean endpoint.
* Deployed seamlessly through [fly.io][4], making the app accessible and reliable. Also free for small projects like this one.
* Code is [shared on Github][5] for transparency (maybe someone would like to build a similar page themselves?).
* CSS is minimal, just enough to ensure usability on both mobile and desktop devices.

## What’s Next

Future enhancements? Perhaps an `.ics` link for easy calendar event importing, maybe it could be a [PWA](https://en.wikipedia.org/wiki/Progressive_web_app) with notifications... However, right now I'm happy with the simplicity of the site and the fact that it's already helping my neighbors (or at least myself). I know similar services exist, but you have to download an app for that, they aren't pretty or they don't work in my area.

## Joy

This venture was a reminder that coding can not only be cool but also  practical. It's a joy to provide a solution that eases the small hassles of daily life for myself and people around me. Coding isn't just about building complex systems or chasing the latest trends. Sometimes, it's about honing in on an issue, no matter how small, and deploying fun-sized tech to solve it. I hope my newest project is exactly that!

[1]: https://smieci.turew.pl
[2]: https://en.wikipedia.org/wiki/Turew
[3]: https://wheniskeynote.com
[4]: https://fly.io
[5]: https://github.com/lubieniebieski/kiedysmieci

[^1]: Polish for `trash`.
