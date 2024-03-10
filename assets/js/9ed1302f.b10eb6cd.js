"use strict";(self.webpackChunkbp_site_docusaurus=self.webpackChunkbp_site_docusaurus||[]).push([[1],{8347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(4848),i=a(8453);const s={slug:"2024-03-10-weekly-standup",title:"Weekly Standup: Task List Filters, View Task, and a Newsletter???",authors:"pburrows",tags:["development"]},o=void 0,r={permalink:"/blog/2024-03-10-weekly-standup",source:"@site/blog/2024-03-10-weekly-progress/index.md",title:"Weekly Standup: Task List Filters, View Task, and a Newsletter???",description:'I feel like I wasted (squandered, blew) part of this week, yet I still managed to accomplish my goals. I need to be less judgemental about myself. Everything I had planned to do was finished, and I also worked on an idea for a newsletter (more on that below.) I also woke up "late" a couple days (530) and right now, the day where we welcome daylight savings time back into our lives, I am sitting down and writing at 6:20 in the morning. Very late, indeed! But it is all ok. I can\'t even tell myself that "setbacks are ok, they are bound to happen," because there were no setbacks! So why do I feel that I could have been more productive this week? Perhaps I could, though I try to reject this "productivity culture" that hurts America, the thoughts still seep in.',date:"2024-03-10T00:00:00.000Z",formattedDate:"March 10, 2024",tags:[{label:"development",permalink:"/blog/tags/development"}],readingTime:5.145,hasTruncateMarker:!1,authors:[{name:"Patrick Burrows",title:"Founder",url:"https://bigpicture.site",imageURL:"https://avatars.githubusercontent.com/u/589029?v=4",key:"pburrows"}],frontMatter:{slug:"2024-03-10-weekly-standup",title:"Weekly Standup: Task List Filters, View Task, and a Newsletter???",authors:"pburrows",tags:["development"]},unlisted:!1,nextItem:{title:"Weekly Standup: Landing Page, Subtasks, and Editing",permalink:"/blog/2024-03-03-weekly-standup"}},l={authorsImageUrls:[void 0]},d=[{value:"What Did You Do This Week?",id:"what-did-you-do-this-week",level:2},{value:"Newsletter Idea",id:"newsletter-idea",level:3},{value:"Activity View Progress",id:"activity-view-progress",level:3},{value:"View Task Progress",id:"view-task-progress",level:3},{value:"What Will You Work on Next Week?",id:"what-will-you-work-on-next-week",level:3}];function h(e){const t={h2:"h2",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:'I feel like I wasted (squandered, blew) part of this week, yet I still managed to accomplish my goals. I need to be less judgemental about myself. Everything I had planned to do was finished, and I also worked on an idea for a newsletter (more on that below.) I also woke up "late" a couple days (5:30 instead of 4:30) and right now, the day where we welcome daylight savings time back into our lives, I am sitting down and writing at 6:20 in the morning. Very late, indeed! But it is all ok. I can\'t even tell myself that "setbacks are ok, they are bound to happen," because there were no setbacks! So why do I feel that I could have been more productive this week? Perhaps I could, though I try to reject this "productivity culture" that hurts America, the thoughts still seep in.'}),"\n",(0,n.jsx)(t.h2,{id:"what-did-you-do-this-week",children:"What Did You Do This Week?"}),"\n",(0,n.jsx)(t.h3,{id:"newsletter-idea",children:"Newsletter Idea"}),"\n",(0,n.jsx)(t.p,{children:"I had the idea of starting a weekly newsletter on SubStack that rounded up relevant articles and stories, things I read anyway, and published them out with small summaries. A Big Picture newsletter that covers topics such as product and project management, leadership, management, entrepreneurship, and organizational psychology. There are a number of these sorts of newsletters out there already, but I think as evidenced by me starting a project management application, I am not afraid of a crowded marketplace. In my opinion, a crowded marketplace only means that the idea is proven out and everyone is making money!"}),"\n",(0,n.jsx)(t.p,{children:"But the newsletter won't work without some amount of automation. More than just an RSS reader, and more than just AI summaries (which I don't want to use, though I will use AI categorization.) The problem with a newsletter is that it can quickly grow to fill your entire day, constant tweaking and fixing, reading, and sorting. I've done this sort of thing before. My goal is to time-box it. Once I get enough things written such that I can produce a newsletter, I want to allow myself only two hours per week (probably divided up across a couple days) to do the whole thing. I don't have to be precious about each issue."}),"\n",(0,n.jsx)(t.p,{children:"Why a newwsletter? Mostly for readership and backlinks. I want to use it as a way to get word of Big Picture out. It isn't going to be a commercial for Big Picture, of course, but each issue will link to Big Picture and mention that the newsletter is sponsored by Big Picture, and include a little blurb. As it stands, my google analytics and website traffic are close to nothing:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"analytics",src:a(4286).A+"",width:"688",height:"354"})}),"\n",(0,n.jsx)(t.p,{children:"With 28 users and an average engagement time of 29 seconds, I can guarantee not a single person has even read one of these blog posts! Nothing makes you feel more like you are talking into the void than Google Analytics."}),"\n",(0,n.jsx)(t.p,{children:"My hope is that a newsletter will get more traffic to the site, and hopefully some people to sign up for the trial when we are ready. I'd love to be able to talk with some interested prospective customers."}),"\n",(0,n.jsx)(t.h3,{id:"activity-view-progress",children:"Activity View Progress"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"collapsed activity view",src:a(2470).A+"",width:"1166",height:"338"})}),"\n",(0,n.jsx)(t.p,{children:"I got the collapsed view of the activity view working this week. You can collapse a task card down to just a single row as seen in the screenshot above."}),"\n",(0,n.jsx)(t.p,{children:"Here is what a task card looks like expanded to its full glory:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"expanded card",src:a(3748).A+"",width:"1124",height:"839"})}),"\n",(0,n.jsx)(t.p,{children:"By being able to collapse, a user can quickly scan and view specific tasks, and then click into them to view the details."}),"\n",(0,n.jsx)(t.p,{children:"On a similar token, the filter dialog lets you sort by Recent Activity or Priority. I was going to add sorting by Task Status (which I definitely want to add in the future), but it wound up being technically too challenging right now. I can come back to that later when I have some dedicated time."}),"\n",(0,n.jsx)(t.p,{children:"And more than sorting, you can also filter by assignment (which will filter by ALL assignment fields on a task), priority, or status. Hopefully these tools will let people quickly find the task they are looking for."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"filter screen",src:a(3385).A+"",width:"479",height:"426"})}),"\n",(0,n.jsx)(t.h3,{id:"view-task-progress",children:"View Task Progress"}),"\n",(0,n.jsx)(t.p,{children:"I also got a functional version of the View Task screen working this week."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"view task",src:a(400).A+"",width:"974",height:"859"})}),"\n",(0,n.jsx)(t.p,{children:'The layout is similar (though slightly different, and slightly more detailed) to the Activity View task cards, but has some additional features and actions. This screen is far from "done", but it is functional right now. I imagine this screen and the Activity View screen will be a constant target of enhancements and additional features.'}),"\n",(0,n.jsx)(t.h3,{id:"what-will-you-work-on-next-week",children:"What Will You Work on Next Week?"}),"\n",(0,n.jsx)(t.p,{children:'This week is my last planned week of the "tasks" epic, and I think it comes at a good time. The task screens are functional right now and spending one more week working on them will allow me to add convenience features and some nice-to-have items before I move onto the "conversations" epic (which will also effect these screens.)'}),"\n",(0,n.jsx)(t.p,{children:'This week I want to add some task actions (like cloning or linking), I want to get subtasks displaying better (right now you can have deeply nested subtasks that are hard to find), and maybe individual task expansion on the activity view screen. Some of the subtask stuff will get fixed when I get to the "navigation" epic, too. Right now the sidebar navigation in the app is minimal and not fully fleshed out. But I needed to be able to add content before I can get the nav working. The search feature will also improve the subtask discovery. So much exciting stuff to do.'}),"\n",(0,n.jsx)(t.p,{children:'Another thing I want to try and work on this week is a public "roadmap" that shows the features and epics I have planned and when I plan on getting to them. I am keeping track of them myself, of course, but if I am "building in public" it would be nice to publish my roadmap too.'}),"\n",(0,n.jsx)(t.p,{children:"Thanks for reading! And like always, if you've actually read this far (which the analytics screenshot above proves that you haven't) and aren't signed-up for updates from the mailing list, you really should."})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},4286:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/analytics-70e0404c2da81bda56cb24a012956e6f.png"},2470:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/collapsed-avtivity-448701b5c158c1e333ae8f93fa895cfa.png"},3748:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/expanded-card-ac1adf03246de7e9038703ebf9e8e486.png"},3385:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/filter-screen-929cfdd3df8fb3dd8cd413933dd09ead.png"},400:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/view-task-screen-4e0c1c025b73dbd3b486741684b707f1.png"},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var n=a(6540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);