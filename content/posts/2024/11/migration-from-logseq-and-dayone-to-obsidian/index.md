---
title: "Migration From Logseq and DayOne to Obsidian"
author: adam nowak
date: "2024-11-11T21:32:55+01:00"
url: migration-to-obsidian
description: After 11 years with DayOne and 2 years with Logseq, I migrated to Obsidian. Here's how it went. See the font and colors I use, daily templates, and how I imported data from old tools to the new one.
categories:
  - tech
tags:
  - obsidian
  - logseq
  - dayone
  - journaling
  - note-taking
  - migration
---

Hi there! I wanted to mark an important milestone in my note-taking and journaling journeys. After 11 years with [DayOne][1] and 2 years with [Logseq][2], I pulled the trigger and went all in with [Obsidian][3].

I immediately liked the speed and snappiness of Obsidian - it works really fast and it's responsive. It's a pleasure to write and jump from one note to the other. After the installation, the setup looked pretty basic, so I took a deep breath and spent a few hours investigating interesting plugins and other people’s setups. I will mention a few changes that made the biggest impact and made Obsidian feel like home.

## TL;DR

Just in case you don't want to read the whole thing, here are some screenshots of my setup:
{{< figure src="overview.png" caption="High-level overview of what I'm looking at usually." >}}
{{< figure src="daily_note.png" caption="Here's how daily note look like in 'production'." >}}

## Font

I love monospaced fonts, but I don't have a clear winner in terms of fonts. There are many great monotype fonts like [Fira Code][4], [Cascadia Code][5], or [Monaspace][6]. I played with all of them in Obsidian, and after a few days of experimenting, I stuck to [JetBrains Mono][7]. It's brilliant!

## Theme

I'm a big [Dracula][8] fan and use it all around the place; however, it didn't click with me in Obsidian. Thankfully, I found an inspiration from [CyanVoxel][9] in one of his videos!

## Daily templates

Daily notes are first-class citizens in Obsidian, and it was something that I used in Logseq the most, so making them work for me was the first goal. Here are the setups/links that inspired me the most:

- https://jdheyburn.co.uk/blog/how-i-use-obsidian-to-journal/
- https://dannb.org/blog/2022/obsidian-daily-note-template/
- https://www.youtube.com/watch?v=pHuzZIjb6l8

Initially, I went with [Calendar][10] and [Templater][11] and worked a few days with them. I didn't like the navigation between daily notes, though, so after finding [Journals for Obsidian][12], I looked no further. All I had to do was to add `calendar-nav` to my template and I was good to go!

The most important bit for me was a way to look back at what happened in the past, a feature from DayOne that I enjoyed immensely. I didn’t know a lot about fetching the data and using `DataView`, but thanks to other people sharing their stuff, I was able to quickly build something adjusted for my needs.

If you want to take a look, here is the [daily template][13]. For now, it has everything I need. In the upcoming weeks, I might put some effort into writing weekly/monthly/yearly notes. Right now, I’m focusing on building the daily habit and journaling a bit every day.

The best part of the day is going through old notes!

## Importing from Logseq

Importing data was quite easy. I just moved the folder. 🤷‍♂️ There are some clever importers, but I did that manually except for journals. I had my data stored in a year-based hierarchy, but I wanted to adjust that slightly, so I built a bash script to sort files accordingly. And that was it. My notes were very simple, linking stuff, some tags here and there, so I didn’t have to bother that much.

## Importing from DayOne

A few thousand journal entries from DayOne were a bigger challenge. I tried a few solutions/importers available on GitHub, ended up modifying this one: [LucyDYu/dayone-to-obsidian][14] the most, and extending it with some bash goodness to make things work.

The biggest headache was the output format and the front matter. I decided to make it compatible with the Journals plugin to save some time. I saved the first sentence of the journal entry as the `DailySummary::` section, and thanks to that, I have a nice-looking *"On that day"* part of my daily journal.  

> My importer is a messy thing not worth pushing to GitHub, but if by any chance you see the possibility that it might benefit your own migration process, just ping me.

## Don’t do everything at once

That’s that, expect for the fact that I also went [Johnny.Decimal][15] in the same time. I was struggling between discovering Obsidian and migrating the old tools to a yet not discovered environment. Sometimes I like to mess my routine, usually after a slower and poor period I get my anticipated productivity hit. I felt it pretty quickly this time.

## Still todo

- find a way how to work with tasks
- sort files automatically based on properties (like move notes tagged `#book` to a certain location and add even more properties to that note)
- integrate Obsidian data structure with contents of my blog - I want to write/edit notes here and sync it with my blog's repository so I can build and publish stuff there, but have just one source of truth.
- add sync with read-it-later service[^1]

If you have any questions, or suggestions on how to improve my setup, feel free to reach out! What I did was a quick and dirty migration, and I'm sure there are many things that could be done better.

It was fun, it always is! Solid 3/10 for the migration process :D I'm happy to join the Obsidian community!

[1]: https://dayoneapp.com/
[2]: https://logseq.com/
[3]: https://obsidian.md/
[4]: https://firacode.org/
[5]: https://github.com/microsoft/cascadia-code
[6]: https://monaspace.githubnext.com/
[7]: https://www.jetbrains.com/lp/mono/
[8]: https://draculatheme.com/
[9]: https://www.youtube.com/watch?v=9T9VL8_i1Tg
[10]: https://github.com/liamcain/obsidian-calendar-plugin
[11]: https://silentvoid13.github.io/Templater/
[12]: https://github.com/srg-kostyrko/obsidian-journal#journals-for-obsidian
[13]: https://gist.github.com/lubieniebieski/987ce5187c773405cfeab7cf0f47b1fd.js
[14]: https://github.com/LucyDYu/dayone-to-obsidian
[15]: https://johnnydecimal.com/

[^1]: As Omnivore is shutting down soon (end of Nov'24), this is going to be a bit more complicated than I thought, because I need to find an appealing read-it-later service first!
