"use strict";(self.webpackChunkbp_site_docusaurus=self.webpackChunkbp_site_docusaurus||[]).push([[5894],{6042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"2024-03-17-weekly-standup","metadata":{"permalink":"/blog/2024-03-17-weekly-standup","source":"@site/blog/2024-03-17-weekly-progress/index.md","title":"Conversations, Web Sockets, and Different Content","description":"This week I did nothing that I planned on doing last week. Rather, I started work on the conversations feature. Mainly, I started implementing websocket support in the app. Up to now, everything has been REST api calls to the backend. But for things like conversations, presence (whether or not someone is online, offline, idle, or in some other state), unread tracking, and notifications, using websockets for real-time communication sent from the server is a must.","date":"2024-03-17T00:00:00.000Z","formattedDate":"March 17, 2024","tags":[{"label":"development","permalink":"/blog/tags/development"}],"readingTime":2.125,"hasTruncateMarker":true,"authors":[{"name":"Patrick Burrows","title":"Founder","url":"https://bigpicture.site","imageURL":"https://avatars.githubusercontent.com/u/589029?v=4","key":"pburrows"}],"frontMatter":{"slug":"2024-03-17-weekly-standup","title":"Conversations, Web Sockets, and Different Content","authors":"pburrows","tags":["development"]},"unlisted":false,"nextItem":{"title":"Weekly Standup: Task List Filters, View Task, and a Newsletter???","permalink":"/blog/2024-03-10-weekly-standup"}},"content":"This week I did nothing that I planned on doing last week. Rather, I started work on the conversations feature. Mainly, I started implementing websocket support in the app. Up to now, everything has been REST api calls to the backend. But for things like conversations, presence (whether or not someone is online, offline, idle, or in some other state), unread tracking, and notifications, using websockets for real-time communication sent from the server is a must.\\n\\nAs such, this week probably doesn\'t have as many screenshots as in the past week, because most of the work was not visible, UI, work.\\n\\n\x3c!--truncate--\x3e\\n\\n## What Did You Do This Week?\\n\\n### Content Marketing Ideas\\n\\nI spent a lot of time brainstorming marketing ideas for website and blog content. I tried to focus in on the sorts of things other vendors blog about, and come up with some good ideas for that. I don\'t have a lot of time to write, but there are services that will assist with this part of it.\\n\\nI also worked more on the newsletter idea. I found a lot of sources for content and actually got to the point of generating the newsletter. The issue (pardon the pun!) right now is that there is TOO MUCH content. I need to implement some sort of relevance filter (spam/ham) to weed out the less interesting posts.\\n\\n### Conversations\\n\\nI was able to get a conversation message to post back to the server (which involves going from the UI through the gateway to the backend microservices, and back) and return results to connected clients. I didn\'t quite get displaying the messages implemented, but the messages are getting IDs and are being parsed on the backend.\\n\\nThe backend message parsing involves:\\n\\n* checking for mentions, \\n  * notifying the people mentioned\\n* checking for tags,\\n  * notifying the people following those tags\\n* checking for, and performing, any slash commands,\\n* checking for embedded URLs,\\n* marking conversations unread\\n\\nFor the embedded URLs, it turns out there wasn\'t a good implementation of \\"unfurl\\" in dotnet that I could find. So I wrote one and made it open source. The [unfurl.net](https://github.com/pburrows/unfurl.net/) project is hosted on GitHub and published as a NuGet package for anyone who needs this functionality in .Net. \\n\\n## What Will You Work on Next Week?\\n\\nThis coming week will see more work on conversations, hopefully getting into multiple-clients and multiple-tenant scenarios, and more work on the newsletter functionality. I\'d really like to publish the first version of the newsletter this week if I can."},{"id":"2024-03-10-weekly-standup","metadata":{"permalink":"/blog/2024-03-10-weekly-standup","source":"@site/blog/2024-03-10-weekly-progress/index.md","title":"Weekly Standup: Task List Filters, View Task, and a Newsletter???","description":"I feel like I wasted (squandered, blew) part of this week, yet I still managed to accomplish my goals. I need to be less judgemental about myself. Everything I had planned to do was finished, and I also worked on an idea for a newsletter (more on that below.) I also woke up \\"late\\" a couple days (530) and right now, the day where we welcome daylight savings time back into our lives, I am sitting down and writing at 6:20 in the morning. Very late, indeed! But it is all ok. I can\'t even tell myself that \\"setbacks are ok, they are bound to happen,\\" because there were no setbacks! So why do I feel that I could have been more productive this week? Perhaps I could, though I try to reject this \\"productivity culture\\" that hurts America, the thoughts still seep in.","date":"2024-03-10T00:00:00.000Z","formattedDate":"March 10, 2024","tags":[{"label":"development","permalink":"/blog/tags/development"}],"readingTime":5.15,"hasTruncateMarker":true,"authors":[{"name":"Patrick Burrows","title":"Founder","url":"https://bigpicture.site","imageURL":"https://avatars.githubusercontent.com/u/589029?v=4","key":"pburrows"}],"frontMatter":{"slug":"2024-03-10-weekly-standup","title":"Weekly Standup: Task List Filters, View Task, and a Newsletter???","authors":"pburrows","tags":["development"]},"unlisted":false,"prevItem":{"title":"Conversations, Web Sockets, and Different Content","permalink":"/blog/2024-03-17-weekly-standup"},"nextItem":{"title":"Weekly Standup: Landing Page, Subtasks, and Editing","permalink":"/blog/2024-03-03-weekly-standup"}},"content":"I feel like I wasted (squandered, blew) part of this week, yet I still managed to accomplish my goals. I need to be less judgemental about myself. Everything I had planned to do was finished, and I also worked on an idea for a newsletter (more on that below.) I also woke up \\"late\\" a couple days (5:30 instead of 4:30) and right now, the day where we welcome daylight savings time back into our lives, I am sitting down and writing at 6:20 in the morning. Very late, indeed! But it is all ok. I can\'t even tell myself that \\"setbacks are ok, they are bound to happen,\\" because there were no setbacks! So why do I feel that I could have been more productive this week? Perhaps I could, though I try to reject this \\"productivity culture\\" that hurts America, the thoughts still seep in.\\n\\n\x3c!--truncate--\x3e\\n\\n## What Did You Do This Week?\\n\\n### Newsletter Idea\\n\\nI had the idea of starting a weekly newsletter on SubStack that rounded up relevant articles and stories, things I read anyway, and published them out with small summaries. A Big Picture newsletter that covers topics such as product and project management, leadership, management, entrepreneurship, and organizational psychology. There are a number of these sorts of newsletters out there already, but I think as evidenced by me starting a project management application, I am not afraid of a crowded marketplace. In my opinion, a crowded marketplace only means that the idea is proven out and everyone is making money! \\n\\nBut the newsletter won\'t work without some amount of automation. More than just an RSS reader, and more than just AI summaries (which I don\'t want to use, though I will use AI categorization.) The problem with a newsletter is that it can quickly grow to fill your entire day, constant tweaking and fixing, reading, and sorting. I\'ve done this sort of thing before. My goal is to time-box it. Once I get enough things written such that I can produce a newsletter, I want to allow myself only two hours per week (probably divided up across a couple days) to do the whole thing. I don\'t have to be precious about each issue.\\n\\nWhy a newwsletter? Mostly for readership and backlinks. I want to use it as a way to get word of Big Picture out. It isn\'t going to be a commercial for Big Picture, of course, but each issue will link to Big Picture and mention that the newsletter is sponsored by Big Picture, and include a little blurb. As it stands, my google analytics and website traffic are close to nothing:\\n\\n![analytics](./analytics.png)\\n\\nWith 28 users and an average engagement time of 29 seconds, I can guarantee not a single person has even read one of these blog posts! Nothing makes you feel more like you are talking into the void than Google Analytics.\\n\\nMy hope is that a newsletter will get more traffic to the site, and hopefully some people to sign up for the trial when we are ready. I\'d love to be able to talk with some interested prospective customers.\\n\\n### Activity View Progress\\n\\n![collapsed activity view](./collapsed-avtivity.png)\\n\\nI got the collapsed view of the activity view working this week. You can collapse a task card down to just a single row as seen in the screenshot above.\\n\\nHere is what a task card looks like expanded to its full glory:\\n\\n![expanded card](./expanded-card.png)\\n\\nBy being able to collapse, a user can quickly scan and view specific tasks, and then click into them to view the details.\\n\\nOn a similar token, the filter dialog lets you sort by Recent Activity or Priority. I was going to add sorting by Task Status (which I definitely want to add in the future), but it wound up being technically too challenging right now. I can come back to that later when I have some dedicated time.\\n\\nAnd more than sorting, you can also filter by assignment (which will filter by ALL assignment fields on a task), priority, or status. Hopefully these tools will let people quickly find the task they are looking for.\\n\\n![filter screen](filter-screen.png)\\n\\n### View Task Progress\\n\\nI also got a functional version of the View Task screen working this week.\\n\\n![view task](./view-task-screen.png)\\n\\nThe layout is similar (though slightly different, and slightly more detailed) to the Activity View task cards, but has some additional features and actions. This screen is far from \\"done\\", but it is functional right now. I imagine this screen and the Activity View screen will be a constant target of enhancements and additional features. \\n\\n## What Will You Work on Next Week?\\n\\nThis week is my last planned week of the \\"tasks\\" epic, and I think it comes at a good time. The task screens are functional right now and spending one more week working on them will allow me to add convenience features and some nice-to-have items before I move onto the \\"conversations\\" epic (which will also effect these screens.)\\n\\nThis week I want to add some task actions (like cloning or linking), I want to get subtasks displaying better (right now you can have deeply nested subtasks that are hard to find), and maybe individual task expansion on the activity view screen. Some of the subtask stuff will get fixed when I get to the \\"navigation\\" epic, too. Right now the sidebar navigation in the app is minimal and not fully fleshed out. But I needed to be able to add content before I can get the nav working. The search feature will also improve the subtask discovery. So much exciting stuff to do.\\n\\nAnother thing I want to try and work on this week is a public \\"roadmap\\" that shows the features and epics I have planned and when I plan on getting to them. I am keeping track of them myself, of course, but if I am \\"building in public\\" it would be nice to publish my roadmap too.\\n\\nThanks for reading! And like always, if you\'ve actually read this far (which the analytics screenshot above proves that you haven\'t) and aren\'t signed-up for updates from the mailing list, you really should."},{"id":"2024-03-03-weekly-standup","metadata":{"permalink":"/blog/2024-03-03-weekly-standup","source":"@site/blog/2024-03-03-weekly-progress/index.md","title":"Weekly Standup: Landing Page, Subtasks, and Editing","description":"This week was a lot of positive progress. No major technical issues came up that impeded my work (until the end with the markdown editor, but I\'ll get to that in a bit). I am waking up consistently at 4am every day, and most days I am able to work until 7 or 7:30am before I have to switch off to do paying work, or family obligations, or other things. Being able to get enough time to actually put toward this project is a big concern for me. Staying motivated to continue to work on it, and being able to fit in the time to work on it.","date":"2024-03-03T00:00:00.000Z","formattedDate":"March 3, 2024","tags":[{"label":"development","permalink":"/blog/tags/development"}],"readingTime":6.885,"hasTruncateMarker":true,"authors":[{"name":"Patrick Burrows","title":"Founder","url":"https://bigpicture.site","imageURL":"https://avatars.githubusercontent.com/u/589029?v=4","key":"pburrows"}],"frontMatter":{"slug":"2024-03-03-weekly-standup","title":"Weekly Standup: Landing Page, Subtasks, and Editing","authors":"pburrows","tags":["development"]},"unlisted":false,"prevItem":{"title":"Weekly Standup: Task List Filters, View Task, and a Newsletter???","permalink":"/blog/2024-03-10-weekly-standup"},"nextItem":{"title":"Weekly Stand-Up and Progress","permalink":"/blog/2024-02-25-weekly-standup"}},"content":"This week was a lot of positive progress. No major technical issues came up that impeded my work (until the end with the markdown editor, but I\'ll get to that in a bit). I am waking up consistently at 4am every day, and most days I am able to work until 7 or 7:30am before I have to switch off to do paying work, or family obligations, or other things. Being able to get enough time to actually put toward this project is a big concern for me. Staying motivated to continue to work on it, and being able to fit in the time to work on it.\\n\\n\x3c!--truncate--\x3e\\n\\n## What Did You Do This Week?\\n\\n### Landing Page Feedback\\n\\nThis week I showed the landing page to people on the IndieHackers group and asked for feedback. Some of it was good feedback, some of it wasn\'t, and some of it missed the mark. It reminds me of writing workshops where, ultimately, whether or not to take a bit of feedback is up to you. For most of it I\'ll have to gradually improve as I develop this application. \\n\\nFor instance, one of the complaints was too much text (what? is that possible?! lol), which is probably true. But I don\'t yet have a lot of images or screenshots to replace that text with. Since this is a work in progress, I\'ll gradually add additional screenshots as I work on them.\\n\\nI think the biggest, most consistent, issue was the big logo in the middle:\\n\\n![landing page](./landing-page.png)\\n\\nReviewers, rightly, said that it was too big, and took too much attention for being non-functional. I see the point and agree. The simplest fix is to just remove the logo from that spot completely. Who cares about my logo, anyway.\\n\\nAnother complaint was that the call-to-action (Get Early Access) was too far down the page. It needs to be \\"above the fold.\\" I can only guess they were looking at this webpage on one of those foldable phones, this isn\'t a newspaper, there is no fold! ...I kid. As you can see from the screenshot above, on my monitor at least, the call-to-action IS above the fold. Getting rid of the big logo will move it up the page, though, which means the fix for the first two issues is the same! That always feels like a programming win.\\n\\nAnother legitimate issue is that changing the theme to the light theme has some color problems. It certainly does! Not sure what kind of mad person chooses the light theme, but I definitely need to fix that.\\n\\nSome people complained about the screenshot not looking \\"polished\\", but for me, that is a feature, not an issue. Every week I plan on updating the screenshot, and hopefully each week it will get better and better. (This person didn\'t even see the FIRST screenshot, they would have been appalled!)\\n\\nSomeone mentioned that I need social proof. Not sure how to get that right now, since the product isn\'t usable yet. Maybe I could put a bunch of logos up of companies that I think would love to use this product? \\n\\nI think that was the main feedback, which all-in-all is pretty good. Some other feedback was about tightening up and improving the language, and explaining better what this application does. I agree with that too. You can always get better with those things.\\n\\n#### Landing Page Purpose\\n\\nI think it is important to note that right now, six to nine months out from even considering having a single adopter, my main goal with the landing page is to just get a couple people who would be willing to be those first adopters. I want someone willing to be the guinea pig and actually be the first company to try the application. To that end, having a landing page which is slightly unpolished, and still gets someone intrigued enough to want to try the application is a good thing. \\n\\nGetting people to want to try Big Picture is going to be far, far, far harder than actually writing the software. Which is why I am spending time on \\"marketing\\" now. Writing these blog posts is a minimum, I plan on doing additional work in this area in the coming weeks and months. \\n\\n### Editing Tasks and Subtasks\\n\\nThe main functionality progress this week is the ability to edit all the fields displayed on the task summary screen.\\n\\n![task summary](./editing-tasks.png)\\n\\nEverything in the above screenshot is editable: priority, status, assignments, main description, and subtasks. The conversation section is not editable yet, and that is all mock data right now. I plan to start the conversations \\"epic\\" in mid-March.\\n\\nYou can add subtasks quickly right from this screen by clicking the subtask button next to the task title and filling in the popup form:\\n\\n![create subtask](./new-subtask.png)\\n\\nA lot of effort went into the editor (I am using [Milkdown](https://milkdown.dev/) as the markdown editor), to get it displaying correctly with reasonable fonts and spacing and to size appropriately in all the screens where it is displayed. This editor is also displayed on the main new task page and in the add new message section on the bottom of the screen.\\n\\n![editor](./editor.png)\\n\\nI don\'t feel like this work is anywhere near done, though. There is a lot more functionality I want to get working in this editor (@mentions, #tags, /commands, and :emojis) and I was disappointed by how difficult this was (even though Milkdown shows this functionality on their demo page), and how much code it is going to take to make it work. I am going to have to create an entire \\"epic\\" dedicated to just making this work. It will probably be a week of effort all by itself.\\n\\nBut for now, basic editing is working, and you can type text just fine. You can even paste screenshots into the editor:\\n\\n![task with screenshot](./task-with-screenshot.png)\\n\\nThough, the screenshots are being saved embedded with the markdown text instead of being uploaded to the GCS file storage and being given a separate file ID. This is a fine compromise for the moment, but it is something I will need to work on as part of the \\"Milkdown Editor\\" epic.\\n\\n## What Will You Work on Next Week?\\n\\nI have two more weeks planned for the \\"tasks\\" epic, before I move on to the conversations epic. In the screenshots above, wherever you see conversation messages, those are all just dummy data and most of the conversation functionality does not work yet. Conversations will require me to implement websockets through my infrastructure. That week\'s blog post will likely be far more technical in nature and not have quite so many screenshots :smile:.\\n\\nBut that is a couple weeks out, yet. Next week I want to add some overall functionality to the activity view page. Right now I have this UI as placeholders:\\n\\n![Activity View Header](./activity-view-header.png)\\n\\nWhere the \\"collapse,\\" \\"expand,\\" \\"compact view\\", and \\"filter\\" buttons don\'t actually do anything yet. Currently this page shows a task with all their details. I want the collapse button to hide subtasks and comments. I want the compact view to hide descriptions. And I want the filter button to let people quickly find a specific issue, or show only items with certain priorities, assignments, or statuses. I might also play around with sort options in here. Currently everything is sorted by last modified date, but sorting by created date, or priority might be useful with certain filters.\\n\\nThe other thing I want to get finished next week is the task detail view. The screenshots above all just show the summary view which eliminates some fields (it only shows one assignment field for instance), doesn\'t display custom fields, and doesn\'t actually let you edit a title (which I may need to change in the future, perhaps with a dedicated button.) Currently clicking on a title navigates to the detail view. I don\'t anticipate the detail view being a lot of work (famous last words, I know.) It is mostly the same functionality as this summary view, but with some additional action options (like clone.)\\n\\nThanks for reading! And again, if you\'ve actually read this far and aren\'t signed-up for updates from the mailing list, you really should."},{"id":"2024-02-25-weekly-standup","metadata":{"permalink":"/blog/2024-02-25-weekly-standup","source":"@site/blog/2024-02-25-weekly-progress/index.md","title":"Weekly Stand-Up and Progress","description":"As we continue down the development path of Big Picture, I think it will be a good practice to post weekly progress updates, a \\"stand-up\\" as it were. It will help me look back and see the decisions and progress that I make week to week, and it will help show different aspects of the project as it gets more and more mature.","date":"2024-02-25T00:00:00.000Z","formattedDate":"February 25, 2024","tags":[{"label":"development","permalink":"/blog/tags/development"}],"readingTime":4.8,"hasTruncateMarker":true,"authors":[{"name":"Patrick Burrows","title":"Founder","url":"https://bigpicture.site","imageURL":"https://avatars.githubusercontent.com/u/589029?v=4","key":"pburrows"}],"frontMatter":{"slug":"2024-02-25-weekly-standup","title":"Weekly Stand-Up and Progress","authors":"pburrows","tags":["development"]},"unlisted":false,"prevItem":{"title":"Weekly Standup: Landing Page, Subtasks, and Editing","permalink":"/blog/2024-03-03-weekly-standup"},"nextItem":{"title":"Big Picture Vision","permalink":"/blog/big-picture-vision"}},"content":"As we continue down the development path of Big Picture, I think it will be a good practice to post weekly progress updates, a \\"stand-up\\" as it were. It will help me look back and see the decisions and progress that I make week to week, and it will help show different aspects of the project as it gets more and more mature. \\n\\nI don\'t really know how long it will take to get to an MVP for Big Picture. But, in my head, I have September as a goal. I\'m not sure how realistic that is. On some days I wake up thinking there is no way I could make that. Other days I feel like I will have an MVP version done long before that.\\n\\nSeptember or not, though, these stand-up posts will help chart the progress as I work.\\n\\nThe below updates constitute more than a week\'s worth of work. These recent changes probably represent closer to 2-3 weeks worth of work. I\'ve been working on this project for a couple months now (since the first of December, really), so there are a lot of technical decisions already made that I\'ve not covered in blog posts. But since this is the first \\"stand-up\\" post, there is more to cover this week than there will be in future weeks.\\n\\n\x3c!--truncate--\x3e\\n\\n## What Did You Work on This Week?\\n\\n### UI Updates\\n\\n#### Tasks Roll-Up Screen\\n\\nPrior to an MVP, my first goal is to get to the point where I can \\"[dog food](https://en.wikipedia.org/wiki/Eating_your_own_dog_food)\\" the product myself: using it to track the work that needs to be done and how close I am to being done. \\n\\nThis week let me see a big step toward that goal. I was able to create a good task \\"roll up\\" screen that shows the tasks, description, priority, status, and other details.\\n\\n![Task Rollup Screenshot](./task-rollup-screenshot.png)\\n\\nThis screen is inspired by Microsoft Teams\' (terrible) Channel view, where posts are shown as cards and topics with the replies to the posts summarized. It is a very unnatural way to view conversations in MS Teams, giving a single post far more weight than it really deserves. But what is bad for a conversation, I think is going to be a very easy and natural for tasks.\\n\\nThere will be other ways to view lists of tasks within Big Picture, of course, but I am hoping the roll-up view becomes a popular and well-liked view.\\n\\n![Create Task](./create-task-screenshot.png)\\n\\nI spent some time on the create task screen, but only enough to create a rudimentary task. You can enter title and description for now. In the coming weeks I will improve this functionality.\\n\\n\\n#### People and Teams\\n\\nMy goal this month (through mid-March) is to get creating and viewing tasks working sufficiently. But along the way, I need to digress occasionally to build pieces that are building blocks for what I am working on. People and Teams are two of those features. \\n\\nYou can\'t assign someone to a task unless there is a list of \\"someones\\" somewhere. So these are the first versions of People and Teams screens:\\n\\n![People Screenshot](./people-screenshot.png)\\n\\nThe people screen is just a list of people right now with their handles pulled from their email addresses. There is an \\"epic\\" planned for later to flesh out people functionality including editing profiles and setting permissions. But for now, it is a quick way to invite a bunch of users (all fake email addresses in the screenshot) so that I can assign them tasks.\\n\\n![Teams Screenshot](./teams-screenshot.png)\\n\\nThe teams lists is not too different from the people list. \\n\\n![Create Team Screenshot](./create-team-screenshot.png)\\n\\nI spent more time on the create team dialog, so that uploading a custom avatar for a team works (files are stored in Google Cloud Storage buckets, with a unique bucket being created for each tenant -- more on that feature in the coming months.)\\n\\nI also spent an unreasonable amount of time creating a color picker dialog that works with the theme colors for the site:\\n\\n![Color Picker](./colors-dropdown.png)\\n\\n### Backend Updates\\n\\nI haven\'t talked much about the backend, or even the tech stack, yet in this blog. I\'ll dedicate a full post to going over this in more detail. But at a high-level: it is microservice based, written in C#; using PostgreSql for the data store; RabbitMQ for message transport; and [Wolverine](https://wolverine.netlify.app/) and [MartenDb](https://martendb.io/) for message bus and event store, respectively.\\n\\nThe backend changes this week were mostly API endpoints to support the task list screen, with only a few new events being published (mostly update task events: TaskDetailsUpdated, TaskAssignmentUpdated, etc...).\\n\\nThe other major new feature for the backend was the file upload to GCS. Integrating with the GCS API, and setting up streaming of files from the UI -> gateway -> Files microservice -> GCS all without ever storing the full file in memory took some time.\\n\\n## What Will You Work on Next Week?\\n\\nI hope to get more tasks functionality working. I want to get full editing of the tasks working, with all task details being editable. This does not include conversations for tasks. Right now, in the screenshots, all the conversation stuff is just placeholders, and it will continue to be placeholders until I get to the conversations epic (which I plan to start in mid-March).\\n\\nI also want to get creating sub-tasks working, so that parent \u2194 child relationships in tasks can be viewed.\\n\\nAnd then, finally, I want to add more functionality to the tasks roll-up screen. Maybe add more of a collapsed view, and a natural way to display sub-tasks.\\n\\nI can\'t believe you made it all the way to the end of this post! You should definitely enter your email and sign up for updates if you haven\'t already."},{"id":"big-picture-vision","metadata":{"permalink":"/blog/big-picture-vision","source":"@site/blog/2024-02-20-big-picture-vision.md","title":"Big Picture Vision","description":"Organizations today manage their projects and work items in software like Jira, GitHub, Monday.com, Basecamp, AirTable, Asana, and more. Then they communicate about those work items in software like Slack, MS Teams, Discord, Google Chat, and WhatsApp. Companies have built integrations between all these applications, so a mention of a ticket in Slack can turn into a link to Jira. But the integrations are limited, and most importantly, the knowledge about the project being worked on becomes fragmented. In this example, the details of the issue are in Jira, but the conversation about the issue is in Slack.","date":"2024-02-20T00:00:00.000Z","formattedDate":"February 20, 2024","tags":[{"label":"development","permalink":"/blog/tags/development"}],"readingTime":3.395,"hasTruncateMarker":true,"authors":[{"name":"Patrick Burrows","title":"Founder","url":"https://bigpicture.site","imageURL":"https://avatars.githubusercontent.com/u/589029?v=4","key":"pburrows"}],"frontMatter":{"slug":"big-picture-vision","title":"Big Picture Vision","authors":"pburrows","tags":["development"]},"unlisted":false,"prevItem":{"title":"Weekly Stand-Up and Progress","permalink":"/blog/2024-02-25-weekly-standup"},"nextItem":{"title":"Kicking It Off","permalink":"/blog/welcome-big-picture"}},"content":"Organizations today manage their projects and work items in software like Jira, GitHub, Monday.com, Basecamp, AirTable, Asana, and more. Then they communicate about those work items in software like Slack, MS Teams, Discord, Google Chat, and WhatsApp. Companies have built integrations between all these applications, so a mention of a ticket in Slack can turn into a link to Jira. But the integrations are limited, and most importantly, the knowledge about the project being worked on becomes fragmented. In this example, the details of the issue are in Jira, but the conversation about the issue is in Slack.\\n\\nBetween the project management application, the communication application, the document management application (like Confluence, Sharepoint, Notion, GitHub Wiki (and other Wikis), GitLab, or more), and then even the source code control service itself (GitHub, GitLab, BitBucket), knowledge about a project becomes fractured. To find out the history of a work item, or a project, or the current state, or the latest documentation, a person may have to bounce between a dozen different applications and search inside every one of them before they can get a clear view of a project. A \u201cBig Picture\u201d as it were.\\n\\n\x3c!--truncate--\x3e\\n\\n## The Solution\\n\\nBig Picture aims to be the single source of communication and tracking for all details of projects at an organization. It aims to replace the project management application (Jira, Asana, etc\u2026), the communication application (Slack, Teams, etc\u2026), and the document management application (Confluence, Notion, etc\u2026) with a single application that can handle the needs of organizations of any size.\\n\\n## Philosophy\\n\\nThe following principals should inform the development of features as we work towards being feature-complete. Not all features can be fully realized in the MVP, but the basis for further direction of these features should exist.\\n\\n### Big Picture is the Primary Collaboration Tool\\n\\nIf team members need to collaborate on any task, they should be able to do it in Big Picture. At the beginning this might mean chat messages and task tracking. But ultimately, it should include live meetings, white boards, screen sharing, and anything else that is relevant.\\n\\n### Teams are a First-Class Entity\\n\\nTeams are a primary organization item and can be targets of conversations, assigned to tasks and projects. They can be uniquely named, and roles of the team members can be assigned (such as manager, team lead, etc\u2026). Membership history is kept and can be viewed. Teams can even be organized and associated with other teams, such that a hierarchy of teams can be built, allowing upper management to view all their teams. People can be members of more than one team.\\n\\n### People Have History\\n\\nThe projects a person has worked on and the tasks they have done inform who they are to an organization. It should be easy to click on a person in a conversation (for instance) and see what projects they\u2019ve worked on and who they have worked with. More than their job title and who they report to, their work history should help others place them in context in an organization.\\n\\n### Conversations Happen at Every Level\\n\\nEvery task, work item, or document can have a unique conversation associated with it. By default, team members assigned to a project can see these conversations, but anyone throughout the organization (as long as they have permissions to view a project) can be added to these conversations.\\n\\nConversations also happen above these levels. Conversation threads can belong to a Project, a Team, or even the entire Organization.\\n\\n### Conversations Roll Up\\n\\nConversations based on project items or documents can be viewed in aggregate at higher level project items, entire projects, or for teams. So, conversations about a specific task can be seen on the task itself, the parent story, the parent epic, and the parent project.\\n\\n### \u201cA Story is a Placeholder for a Conversation\u201d\\n\\nWhen creating fields and details of a work item, the conversation about that item is the primary focus. To the point that things like acceptance criteria and task details can be added and edited via conversation messages."},{"id":"welcome-big-picture","metadata":{"permalink":"/blog/welcome-big-picture","source":"@site/blog/2024-02-19-welcome.md","title":"Kicking It Off","description":"Hello and welcome to Big Picture. My name is Patrick Burrows and I will be your host through this Journey to Production\u2122.","date":"2024-02-19T00:00:00.000Z","formattedDate":"February 19, 2024","tags":[{"label":"development","permalink":"/blog/tags/development"}],"readingTime":0.655,"hasTruncateMarker":true,"authors":[{"name":"Patrick Burrows","title":"Founder","url":"https://bigpicture.site","imageURL":"https://avatars.githubusercontent.com/u/589029?v=4","key":"pburrows"}],"frontMatter":{"slug":"welcome-big-picture","title":"Kicking It Off","authors":"pburrows","tags":["development"]},"unlisted":false,"prevItem":{"title":"Big Picture Vision","permalink":"/blog/big-picture-vision"}},"content":"Hello and welcome to Big Picture. My name is Patrick Burrows and I will be your host through this Journey to Production\u2122.\\n\\n\x3c!--truncate--\x3e\\n\\nAlong the way we will outline the goals of Big Picture, explain the value BP provides, ask for feedback, express frustrations, cry, scream, lose hair, get older, and ultimately realize things are actually working pretty well after all. \\n\\nYou will learn more about who I am, my (no-doubt) overly idealistic view of the world that informs this project, some technical details about how Big Picture is being built, and hopefully come away inspired by the moxy and audacity an undertaking such as this requires.\\n\\nSign-up below for updates and follow the progress of Big Picture as we go from conception to production and everything else along the way!"}]}')}}]);