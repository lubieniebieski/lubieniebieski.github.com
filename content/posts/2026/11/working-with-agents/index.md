---
title: "Working with agents: my setup (Nov 2026)"
author: adam nowak
date: "2026-11-16T20:31:08+01:00"
description: The tools I'm testing for working with AI coding agents (Herdr, Orca, Hermes, Pi, T3 Code) and the small project CLI I want to build, so agents can do more on their own.
categories:
  - tech
tags:
  - AI
  - agents
  - automation
  - productivity
  - development
---

In [Bullets #24][1] I wrote that I went all in with AI in my side projects. A few weeks later, it's not only about writing code anymore. I spent the last week or two testing different ways of working with agents, and I keep asking myself one question: where should I invest my time?

- Should I build a comfy terminal setup for running and watching agents and managing workspaces?
- Or should I simply talk through a task with an agent first and then let it do the whole implementation on its own?

The honest answer for now is: it depends 🤷🏻‍♂️. But one thing is clear - good tooling helps in both cases.

{{< panel >}}
A quick disclaimer. A few months ago my problems were on a completely different level, and the area that deserves the most attention keeps changing really fast. Everyone has their own context, too. I know the situation looks different for people who go full tokenmaxxing than for hobby users who just want to build something on weekends. Here I describe both my home and work contexts, so I hope you can pick up at least a few starting points for your own tests. Because honestly, these days I don't have a better piece of advice than this: experiment! 💪🏻
{{< /panel >}}

## Tools I'm testing

### Herdr

I've been using [Herdr][2] for a few months now. The way it's built suits my workflow and expectations I didn't even know I had. The original version (which still works perfectly fine) is a terminal app that behaves like tmux, so I can use it everywhere, including limited environments like VPSs or machines where I'm not allowed to install new desktop apps.

Recently it became more than a TUI - it's now also a proper desktop app built on top of [Ghostty][3], which I already like and use. It also supports agents well, and you can customize it with mods and plugins. After a few small tweaks, I got the setup I wanted - seeing my workspaces, having an overview of all pull requests and their status, seeing the agents' token usage, and being able to connect to external machines.

### Orca

[Orca][4] made a really good impression on me and it will most likely stay for longer tests. It has much more built in:

- workspaces based on git worktrees, with their whole lifecycle managed for you,
- hooks for creating and archiving workspaces,
- integrations with GitHub Issues, Linear and Jira - you open a context, point to a ticket and hand the work over to an agent,
- a skill, so the agent itself can manage sessions,
- cronjob-like automations.

It really feels like an ADE (Agentic Development Environment). There's no doubt about it - it has an integrated browser, a mobile simulator and dozens of other things. You get quite a lot from the start, which is the opposite of what I was used to with Herdr.

### Hermes

I don't know yet if [Hermes][5] will stay. Maybe it will be more useful outside of coding - for my [homelab][6], the house, Home Assistant and automations in general. Talking to it via Telegram and other messengers is a nice touch. I'm giving it one more chance, but I haven't found the right use case yet. For me it feels like a more civilized version of OpenClaw, which was very popular a few months ago, but maybe I need more time to figure it out.

One thing I like so far is the concept of profiles - I can create a few of them: a professional one for development, a home one for my "normal" things, one for home management, maybe a gamer profile if I find something specific to games.

### Pi

I also tested [Pi][7] to see a different approach to working with agents and different workflows. This one is a minimal agent harness - you use it as an interface over Claude, Codex and other models. It's very minimal, but it can be extended a lot. I haven't found the exact use for it in my workflow yet, as it seems that I prefer more complex solutions, but perhaps I'm going to find something soon.

The one big minus I found so far: it doesn't play well with Claude Code on a subscription plan.

### T3 Code

IMHO [T3 Code][8] sits somewhere between Orca and Herdr in my flow. It seems to be very powerful and configurable, but at the same time it doesn't push tons of features in front of your face in the first interaction. It has a nice chat-like experience and a friendly feeling.

## My own harness

Tools are one half of the story. If I want to hand work over to an agent, it needs a proper harness: rules and tools it can use without asking me about every little thing. I think now is a good moment to build my own small CLIs to support that for any project that takes more than one prompt.

For a project `foo` I'd create a `foo` CLI that becomes the entry point for interacting with the app from the terminal, for both me and the agent.

Since I prepared a CLI like this in my main projects, I've noticed that I interact with agents much better and get a faster feedback loop. That can matter a lot when many changes start coming in.

### Isolated environments

The CLI should be able to start independent contexts. Each one gets its own git worktree, its own ports and, if needed, its own database. This way agents (and me!) can build and test different things in parallel without stepping on each other's toes.

The basic commands:

- `up` - create or start a context with everything it needs,
- `list` - show what's running, so I know what's open,
- `down` / `remove` - stop or delete an environment and clean up after it.

### Logging in to a specific app state

A `login` command should log in to a given context as a chosen user, with a specific role and feature flags. An agent needs it for E2E tests, and I need it to check the changes and give feedback for the next iteration. Not everything can be delegated without me!

### Screenshots as proof of work

Another useful command, `shot`, takes a screenshot of a given URL in a given version of the app. The agent starts the environment, logs in and takes a screenshot to show me what it did. Add some app-specific skills on top of that, and you have a solid base for more automation.

### Try it yourself

If you want to experiment with this in your own project, here's a starter prompt. Treat it as a base and tweak it to your setup:

{{< code language="plain" title="Starter prompt" open="true" >}}
I want to create a small CLI called `<project>` that will be the entry point
for working with this project from the terminal, for both me and agents.

First, explore the repo and tell me how the app is started, what it needs
(ports, database, env variables, seed data) and how tests are run. Don't write
any code yet - propose a plan and wait for my approval.

Then implement these commands:

- `up` - create or start an isolated context: its own git worktree, its own
  ports and, if needed, its own database
- `list` - show which contexts are running
- `down` - stop a context and clean up after it
- `login` - log in to a context as a chosen user, with a given role and
  feature flags
- `shot` - take a screenshot of a given URL in a given context (start it and
  log in first if needed)

Keep it small and readable, use the tools this project already uses, and add a
short section to the README and a note for agents (AGENTS.md or a skill) on how
to use the CLI.
{{< /code >}}

### Shared or just mine?

One more thing that keeps my mind busy: I still don't really know how much of this should be shared with the team and how much should stay my own. The commands I described seem like a good common base. But the deeper we go, the more new commands and variants will depend on the setup each of us works in.

I think this is a great moment to talk about it with teammates (if you have them). A few of those conversations really sparked my interest in the topic and made me tweak my own approach.

## Many repos, one home

What if a project is split into several repositories? Instead of going monorepo, you can create a parent "home repo". It holds the CLI and a description of the structure for the agent: where the API, UI and mobile app repos live and how to run them together.

I start the agent from that directory. It has one place to coordinate everything and knows where to look for each part, even though they live in separate repos.

Matt Pocock wrote about it really nicely in [The Home Repo Pattern][9], so if you want to dig deeper, start there.

## So what?

If the tooling is done right - isolated environments, logging in, running things and showing proof - agents can work much more on their own. And I can focus on what I actually want to do: defining tasks, checking the results and moving on to the next iteration, instead of babysitting the basics.

Let's see how it looks in a few months. I bet half of these tools will change by then! 😅

---

[1]: {{< relref "/bullets/024" >}}
[2]: <https://herdr.dev/>
[3]: <https://ghostty.org/>
[4]: <https://orca.dev/>
[5]: <https://hermes-agent.nousresearch.com/>
[6]: {{< relref "/bullets/023" >}}
[7]: <https://pi.dev/>
[8]: <https://t3.codes/>
[9]: <https://www.aihero.dev/the-home-repo-pattern>
