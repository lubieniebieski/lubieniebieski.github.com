---
title: "Opengraph Previews for Hugo"
author: adam nowak
date: "2023-11-14T11:40:23+01:00"
url:
description: Guide to creating dynamic Open Graph previews for Hugo posts -- a unique blog-fitting preview for every post, even without a cover image. Turns out, it's simpler than you'd think!
categories:
  - site
  - tech
tags:
  - hugo
  - opengraph
  - development
  - code
---

## The context

Building a successful blog goes beyond creating engaging content. An integral part of promoting articles on social media involves including captivating previews. But what about instances where you don't add a cover image to a post? Let's chat about my journey to addressing this, using [The Open Graph protocol][1], and how you can implement it on your Hugo-based site.

```html
<meta property="og:image" content="linktoimage.png" />
```

Previously, when I didn't add a cover image to my posts, I used a default symbol - a blue heart png. It was a sufficient placeholder but lacked uniqueness.

After spotting a post from [Łukasz][2], where images were dynamically generated based on post titles, I had my '*I want this!*' moment!

## The goal

So, what was I aiming for? A unique, automated, blog-fitting preview image for each of my posts, even when no cover image is present. Here's an example of what I wanted:

{{< image src="background-example.png" >}}

## The process

After a quick online search, I found a [Hugo forum thread discussing the same issue][3]. That thread led me to [an example][4] given in Hugo's documentation, which I could modify slightly for my needs.

The first step was to create a background that the text filter modifies. I used <https://og-playground.vercel.app/>, saved a png, and placed it in the assets folder along with the [FireCode][5] font I use on my blog.

{{< image src="background-og.png" >}}

All that remained was to implement the Hugo code to apply a text filter to that image whenever one was required:

  ```go
  {{ $featured := resources.Get "/opengraph/background-og.png" }}
  {{ $size := 150 }}
  {{ $title := $.LinkTitle | truncate 55 "..." | string }}

  {{ $text := $title }}
  {{ $y := 550 }}
  {{ if gt (len $text) 30 }}
      {{ $y = 350 }}
  {{ end }}
  {{ $textOptions := dict 
      "color" "#FFF"
      "size" $size
      "lineSpacing" 35
      "x" 350 "y" $y
      "font" (resources.Get "opengraph/FiraCode-Bold.ttf")
  }}

  {{ $featured = $featured | images.Filter (images.Text $text $textOptions) }}
  ```

and the HTML part:

  ```html
  <meta property="og:image" content="{{ $featured.Permalink }}">
  ```

And voila! Automated, unique preview images for each blog post! Full code can be found [here][6].

## Wrapping it up

I hope you found this guide useful. Adding Open Graph previews to your Hugo posts not only enhances the visual aspect of your posts on social media but also offers an incentive for potential readers to click and read.

[1]: https://ogp.me/
[2]: https://hachyderm.io/@lukem
[3]: https://discourse.gohugo.io/t/postprocess-custom-output-formats/40404/2
[4]: https://github.com/gohugoio/gohugoioTheme/blob/master/layouts/partials/opengraph/get-featured-image.html
[5]: https://github.com/tonsky/FiraCode
[6]: https://github.com/lubieniebieski/lubieniebieski.github.com/blob/master/layouts/partials/head.html#L61-L87
