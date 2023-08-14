---
title: "Uploading Files to Fly.io Using scp"
author: adam nowak
date: "2023-03-10T23:07:41+01:00"
description: "How to upload/download files to Fly.io using scp command"
categories:
  - site
  - dev
tags:
  - fly.io
  - scp
  - ssh
---

Recently, I've started building an API which should serve as my personal API. The project is hosted on Github, and [you might take a look if you want][1]. It's connected tightly to this blog and one of the features that I wanted to implement first, was to provide links for my [linklog][2]. You can read the entire story in the [previous post][3]. The stack I have there is pretty simple:

- [Fly.io][4] for hosting
- Sinatra (Ruby) for the API

I'll cut it short: at some point I needed to send a file from my computer to the server hosting my application. It wasn't that straightforward, so I decided to write a post about it and help others who might be in the same situation.

Here's what you need to exchange files between your computer and the server:
_Disclaimer: I'm using MacOS, so the commands might be different on other systems._
_Assumptions: you have a Fly.io account and you have a project deployed. You also have a `fly` or `flytcl` command available in the terminal_

1. `flyctl wireguard create` -- this will create a Wireguard configuration file for you. If you don't have Wireguard installed, you can download it from [here][5]. Use the generated configuration file to connect to the Wireguard server.
2. `fly ssh issue` -- this will generate a new SSH key for you. You can use it to connect to your server. Save it somewhere, e.g. `tmp/flycert`, you'll need it later.
3. Get address of your app: `flyctl ips private` -- this will give you the address of your app. You can use it to connect to your server.
4. `scp -i tmp/flycert LOCAL_SOURCE root@\[ADDRESS\]:REMOTE_DESTINATION` -- this will copy the file from your computer to the server. You can use it to upload files to your server. **Escaping the address is important -- `\[` and `\]`**

That's it! You can use the same command to download files from your server. Just change the order of the arguments.

[1]: https://github.com/lubieniebieski/lubieniebieski-api
[2]: {{< ref "linklog" >}}
[3]: {{< ref "posts/2023/03/linklog" >}}
[4]: https://fly.io
[5]: https://www.wireguard.com/install/
