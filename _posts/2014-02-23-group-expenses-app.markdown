---
layout: post
title: group expenses app - the idea
tags: expenses idea
---

# idea

I always wanted to build the app which would be able to handle all the expenses in various groups of people I'm hanging out with.
I would like to have a place where I could register a following money flow:

* John is buying burgers on Monday for him and his friends (Josh and Jesper) - he's paying with cash
* on Tuesday Josh takes his J-friends to the cinema and pays for it with credit card
* they don't think too much about the money
* after couple of such events they are able to see who bought what and what is the current expenses contribution for each of the J-group

# why is it convinient?

it's simply easier to not have cash with you all the time or make 5 separate payments in restaurant instead of one.

# key goals

1. I would like the app to keep an eye on my (and my groups') expenses.
I would also like to have the ability to check if I owe money to someone or am I rather the one who should receive a few overdue coins.

# technical

I decided to make a rails app which would have:

* fronted based on [marionettejs](http://marionettejs.com/)
* RESTful API so it's possible to use the data outside the app
* open-source code base + all the benefits of OS project: integrations, test suite, etc.
* newest versions of libraries included

it would be a pet project where I could experiment with various libraries and techniques and help other people to track their expenses (as well as my own!).

I will try to make a series of post where I will describe each step I make during the development.

