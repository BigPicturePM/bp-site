"use strict";(self.webpackChunkbp_site_docusaurus=self.webpackChunkbp_site_docusaurus||[]).push([[3551],{3294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var o=n(4848),s=n(8453);const i={slug:"2024-03-17-weekly-standup",title:"Conversations, Web Sockets, and Different Content",authors:"pburrows",tags:["development"]},r=void 0,a={permalink:"/blog/2024-03-17-weekly-standup",source:"@site/blog/2024-03-17-weekly-progress/index.md",title:"Conversations, Web Sockets, and Different Content",description:"This week I did nothing that I planned on doing last week. Rather, I started work on the conversations feature. Mainly, I started implementing websocket support in the app. Up to now, everything has been REST api calls to the backend. But for things like conversations, presence (whether or not someone is online, offline, idle, or in some other state), unread tracking, and notifications, using websockets for real-time communication sent from the server is a must.",date:"2024-03-17T00:00:00.000Z",formattedDate:"March 17, 2024",tags:[{label:"development",permalink:"/blog/tags/development"}],readingTime:2.12,hasTruncateMarker:!1,authors:[{name:"Patrick Burrows",title:"Founder",url:"https://bigpicture.site",imageURL:"https://avatars.githubusercontent.com/u/589029?v=4",key:"pburrows"}],frontMatter:{slug:"2024-03-17-weekly-standup",title:"Conversations, Web Sockets, and Different Content",authors:"pburrows",tags:["development"]},unlisted:!1,nextItem:{title:"Weekly Standup: Task List Filters, View Task, and a Newsletter???",permalink:"/blog/2024-03-10-weekly-standup"}},l={authorsImageUrls:[void 0]},h=[{value:"What Did You Do This Week?",id:"what-did-you-do-this-week",level:2},{value:"Content Marketing Ideas",id:"content-marketing-ideas",level:3},{value:"Conversations",id:"conversations",level:3},{value:"What Will You Work on Next Week?",id:"what-will-you-work-on-next-week",level:2}];function d(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This week I did nothing that I planned on doing last week. Rather, I started work on the conversations feature. Mainly, I started implementing websocket support in the app. Up to now, everything has been REST api calls to the backend. But for things like conversations, presence (whether or not someone is online, offline, idle, or in some other state), unread tracking, and notifications, using websockets for real-time communication sent from the server is a must."}),"\n",(0,o.jsx)(t.p,{children:"As such, this week probably doesn't have as many screenshots as in the past week, because most of the work was not visible, UI, work."}),"\n",(0,o.jsx)(t.h2,{id:"what-did-you-do-this-week",children:"What Did You Do This Week?"}),"\n",(0,o.jsx)(t.h3,{id:"content-marketing-ideas",children:"Content Marketing Ideas"}),"\n",(0,o.jsx)(t.p,{children:"I spent a lot of time brainstorming marketing ideas for website and blog content. I tried to focus in on the sorts of things other vendors blog about, and come up with some good ideas for that. I don't have a lot of time to write, but there are services that will assist with this part of it."}),"\n",(0,o.jsx)(t.p,{children:"I also worked more on the newsletter idea. I found a lot of sources for content and actually got to the point of generating the newsletter. The issue (pardon the pun!) right now is that there is TOO MUCH content. I need to implement some sort of relevance filter (spam/ham) to weed out the less interesting posts."}),"\n",(0,o.jsx)(t.h3,{id:"conversations",children:"Conversations"}),"\n",(0,o.jsx)(t.p,{children:"I was able to get a conversation message to post back to the server (which involves going from the UI through the gateway to the backend microservices, and back) and return results to connected clients. I didn't quite get displaying the messages implemented, but the messages are getting IDs and are being parsed on the backend."}),"\n",(0,o.jsx)(t.p,{children:"The backend message parsing involves:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["checking for mentions,","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"notifying the people mentioned"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["checking for tags,","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"notifying the people following those tags"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"checking for, and performing, any slash commands,"}),"\n",(0,o.jsx)(t.li,{children:"checking for embedded URLs,"}),"\n",(0,o.jsx)(t.li,{children:"marking conversations unread"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:['For the embedded URLs, it turns out there wasn\'t a good implementation of "unfurl" in dotnet that I could find. So I wrote one and made it open source. The ',(0,o.jsx)(t.a,{href:"https://github.com/pburrows/unfurl.net/",children:"unfurl.net"})," project is hosted on GitHub and published as a NuGet package for anyone who needs this functionality in .Net."]}),"\n",(0,o.jsx)(t.h2,{id:"what-will-you-work-on-next-week",children:"What Will You Work on Next Week?"}),"\n",(0,o.jsx)(t.p,{children:"This coming week will see more work on conversations, hopefully getting into multiple-clients and multiple-tenant scenarios, and more work on the newsletter functionality. I'd really like to publish the first version of the newsletter this week if I can."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(6540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);