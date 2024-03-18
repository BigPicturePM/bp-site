---
slug: 2024-03-17-weekly-standup
title: "Conversations, Web Sockets, and Different Content"
authors: pburrows
tags: [development]
---

This week I did nothing that I planned on doing last week. Rather, I started work on the conversations feature. Mainly, I started implementing websocket support in the app. Up to now, everything has been REST api calls to the backend. But for things like conversations, presence (whether or not someone is online, offline, idle, or in some other state), unread tracking, and notifications, using websockets for real-time communication sent from the server is a must.

As such, this week probably doesn't have as many screenshots as in the past week, because most of the work was not visible, UI, work.

<!--truncate-->

## What Did You Do This Week?

### Content Marketing Ideas

I spent a lot of time brainstorming marketing ideas for website and blog content. I tried to focus in on the sorts of things other vendors blog about, and come up with some good ideas for that. I don't have a lot of time to write, but there are services that will assist with this part of it.

I also worked more on the newsletter idea. I found a lot of sources for content and actually got to the point of generating the newsletter. The issue (pardon the pun!) right now is that there is TOO MUCH content. I need to implement some sort of relevance filter (spam/ham) to weed out the less interesting posts.

### Conversations

I was able to get a conversation message to post back to the server (which involves going from the UI through the gateway to the backend microservices, and back) and return results to connected clients. I didn't quite get displaying the messages implemented, but the messages are getting IDs and are being parsed on the backend.

The backend message parsing involves:

* checking for mentions, 
  * notifying the people mentioned
* checking for tags,
  * notifying the people following those tags
* checking for, and performing, any slash commands,
* checking for embedded URLs,
* marking conversations unread

For the embedded URLs, it turns out there wasn't a good implementation of "unfurl" in dotnet that I could find. So I wrote one and made it open source. The [unfurl.net](https://github.com/pburrows/unfurl.net/) project is hosted on GitHub and published as a NuGet package for anyone who needs this functionality in .Net. 

## What Will You Work on Next Week?

This coming week will see more work on conversations, hopefully getting into multiple-clients and multiple-tenant scenarios, and more work on the newsletter functionality. I'd really like to publish the first version of the newsletter this week if I can. 