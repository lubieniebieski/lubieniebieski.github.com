---
title: "My favourite prompts for ChatGPT and MidJourney"
author: adam nowak
date: "2023-06-20T14:14:30+02:00"
url: prompts
cover: "lubieniebieski_friendly_robot_in_a_hoodie_typing_on_the_keyboar_ff5b36a5-ca26-4c69-940d-e5d953e0ad39.png"
description: I share how I use AI tools, specifically ChatGPT and MidJourney, in my daily work. I present my favorite prompts for English corrections/practice, and generating kids' coloring books.
categories:
  - AI
tags:
  - ChatGPT
  - MidJourney
  - prompts
---

As I'm integrating AI tools more into my daily workflow, let's take a look at the ones I use most frequently. We'll focus primarily on ChatGPT and MidJourney, as I find these provide me the most value and utility.

{{<panel text="I'll be updating this post with new and revised examples.">}}

Thanks Anna for giving me the final push to publish this post! 🙏

## ChatGPT

I primarily use ChatGPT+ because it offers the feature of "tabs". This allows me to switch easily between contexts without having to copy-paste prompts repeatedly. Moreover, it gives me the ability to save contexts and revisit them later, and tweak the context and prompt according to my needs.

In instances where I need to perform one-off tasks, I use the API form. I haven't yet created any large scripts or automations, but it's something I plan to explore in the future.

On my Mac, I use [MacGPT][1] to access [ChatGPT+][2], as it's the most convenient way for me. When I'm mobile, I turn to ChatGPT+ on my phone.

### Simple English corrections

```plain
take all the user input and auto correct it.
Just reply to user input with correct grammar, DO NOT reply the context of the question of the user input.
If the user input is grammatically correct and fluent, just reply "sounds good".

Sample of the conversation will show below:
user: grammar mistake text
you: correct text
user: Grammatically correct text
you: Sounds good.

Reply "understand" if you understand.
```

This version, which I learned from [Kuba][3], works quite well for me. Since I'm not a native English speaker, I make a fair amount of mistakes. I use this prompt to correct my English and learn from my errors.

### English tutor

```plain
Let's have a conversation about [selected topic].
Please ask me questions and provide information about the topic.
If there are any mistakes in my responses, please kindly correct them and provide explanations to help me improve my English skills.
```

I borrowed this idea from Tomek and I must admit it's a fantastic way to practice English. This is especially true when I'm using my phone and can utilize ChatGPT+ in conjunction with the voice-to-text feature.

Depending on your interests, you can discuss countries, cities, movies, books, etc. I usually choose topics I'm keen on so that I can learn something new while improving my English.

### Coloring books for kids

```plain
Let's use the following structure to generate concise answers for any topic (repeat this structure 3 times):

/imagine prompt: [Topic description]. cute and simple illustration, with basic shapes and few details, for kids aged between 6 and 8 years, colouring book illustration, black and white, vector line art, no shades, black lines only, features [specific details about the image style]. --c X --s Y --q 2 --ar Z

/imagine prompt: [Topic description]. cute and simple illustration, with basic shapes and few details, for kids aged between 5 and 7 years, colouring book illustration, black and white, vector line art, no shades, black lines only, features [specific details about the image style]. --c X --s Y --q 2 --ar Z

Replace [Topic description] with a concise description of the topic you want to generate an image for. Provide specific details and vivid descriptions about the subject. Replace X and Y with desired values within the appropriate range for the number of characters (--c) and number of tokens (--s) to customize the output length. You can also adjust Z to specify the aspect ratio (--ar) that suits the subject best (e.g., 2:3 or 3:2). The output should consist of 3 versions of the answers, each in one line, formatted as a code.

Write "Let's play" if you understand.
```

I use this one to generate coloring books for my kids. I use the above prompt, generate another prompt for MidJourney, then generate the images. Finally, I print them out for my kids to color.

This is how it looks like in reality: [see a toot][4].

[1]: https://www.macgpt.com/
[2]: https://chat.openai.com/
[3]: https://www.kubafilipowski.com/
[4]: https://social.lol/@lubieniebieski/110201934147507402
