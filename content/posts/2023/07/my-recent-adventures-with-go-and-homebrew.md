---
title: "My Recent Adventures With Go and Homebrew"
author: adam nowak
date: "2023-07-31T11:08:11+02:00"
description: On my holiday break, I delved into coding and created a script to convert inline markdown links to references. Initially written in Ruby and run through Docker, I wanted to make it more accessible via Homebrew. So, I rewrote it in Go, aided by Github Copilot's suggestions, and made it available through Homebrew. Automating the process with Github Actions added convenience, making it a fulfilling coding adventure.
categories:
  - site
tags:
  - Go
  - Homebrew
  - Docker
  - code
---

I'm on holiday, so I have some time to play with code more than usual. Some time ago, for this blog, I wrote a simple script that converted inline markdown links to references[^1]. I wrote it in Ruby, created a Docker image for it, and ran it before each new piece of content was published. I wanted to make it as simple as possible, so other people might use it as well (Docker, no dependencies, available to pull directly from the registry, it runs through Makefile command, etc.).

It worked, but I wasn't happy with it. I thought that making it available through [Homebrew][1] would be a better idea. And when doing this, I also wanted to experiment a little with Go and give Github Copilot a chance (as my coding skills are a bit rusty).

I'm happy to say that I was able to achieve all my goals. All the code is available in the [markdown-tools][2] repo, it's written in Go, there are some tests (thanks, Copilot!) and it's available through Homebrew. I still have a lot to do before I'll mark it as a 1.0 release, but it's a good start. I had a ton of fun writing it; I struggled the most with writing the right regexes:)

## Outcome

To summarize the whole gig:

- Repo with the code: [markdown-tools][2]
- Updated scripts repository where I store some random stuff I use: [lubieniebieski/scripts][3]
- Homebrew tap: [lubieniebieski/homebrew-tools][4]
- The process is automated with Github Actions, so I don't have to do anything manually (well... almost, but the Homebrew formula part is done nicely).

The best part for me is that I can currently focus on improving the tools themselves, fixing some edge cases, and so on, while the release process is automated. I no longer have to worry about it! 💪

## Resources

Some useful sites and article I found that helped me to get through the process:

- [regex101: build, test, and debug regex][5]
- [Create CLI in Go and Publish it to Homebrew | by Mehran | ITNEXT][6]
- [How To Build Go Executables for Multiple Platforms on Ubuntu 16.04 | DigitalOcean][7]
- [spf13/cobra: A Commander for modern Go CLI interactions][8]
- [Homebrew tap with bottles uploaded to GitHub Releases — Homebrew][9]
- [Homebrew docs][10]
- [Homebrew tap docs][11]

[1]: https://brew.sh/
[2]: https://github.com/lubieniebieski/markdown-tools
[3]: https://github.com/lubieniebieski/scripts
[4]: https://github.com/lubieniebieski/homebrew-tools
[5]: https://regex101.com/
[6]: https://itnext.io/create-cli-in-go-and-publish-it-to-homebrew-993ea1b66ae9
[7]: https://www.digitalocean.com/community/tutorials/how-to-build-go-executables-for-multiple-platforms-on-ubuntu-16-04
[8]: https://github.com/spf13/cobra
[9]: https://brew.sh/2020/11/18/homebrew-tap-with-bottles-uploaded-to-github-releases/
[10]: https://docs.brew.sh/
[11]: https://docs.brew.sh/Taps

[^1]: I'm not exactly sure why I wanted to have it this way, but that's a topic for another post.
