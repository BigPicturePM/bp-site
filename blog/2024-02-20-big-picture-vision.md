---
slug: big-picture-vision
title: Big Picture Vision
authors: pburrows
tags: [development]
---

Organizations today manage their projects and work items in software like Jira, GitHub, Monday.com, Basecamp, AirTable, Asana, and more. Then they communicate about those work items in software like Slack, MS Teams, Discord, Google Chat, and WhatsApp. Companies have built integrations between all these applications, so a mention of a ticket in Slack can turn into a link to Jira. But the integrations are limited, and most importantly, the knowledge about the project being worked on becomes fragmented. In this example, the details of the issue are in Jira, but the conversation about the issue is in Slack.

Between the project management application, the communication application, the document management application (like Confluence, Sharepoint, Notion, GitHub Wiki (and other Wikis), GitLab, or more), and then even the source code control service itself (GitHub, GitLab, BitBucket), knowledge about a project becomes fractured. To find out the history of a work item, or a project, or the current state, or the latest documentation, a person may have to bounce between a dozen different applications and search inside every one of them before they can get a clear view of a project. A “Big Picture” as it were.

<!--truncate-->

## The Solution

Big Picture aims to be the single source of communication and tracking for all details of projects at an organization. It aims to replace the project management application (Jira, Asana, etc…), the communication application (Slack, Teams, etc…), and the document management application (Confluence, Notion, etc…) with a single application that can handle the needs of organizations of any size.

## Philosophy

The following principals should inform the development of features as we work towards being feature-complete. Not all features can be fully realized in the MVP, but the basis for further direction of these features should exist.

### Big Picture is the Primary Collaboration Tool

If team members need to collaborate on any task, they should be able to do it in Big Picture. At the beginning this might mean chat messages and task tracking. But ultimately, it should include live meetings, white boards, screen sharing, and anything else that is relevant.

### Teams are a First-Class Entity

Teams are a primary organization item and can be targets of conversations, assigned to tasks and projects. They can be uniquely named, and roles of the team members can be assigned (such as manager, team lead, etc…). Membership history is kept and can be viewed. Teams can even be organized and associated with other teams, such that a hierarchy of teams can be built, allowing upper management to view all their teams. People can be members of more than one team.

### People Have History

The projects a person has worked on and the tasks they have done inform who they are to an organization. It should be easy to click on a person in a conversation (for instance) and see what projects they’ve worked on and who they have worked with. More than their job title and who they report to, their work history should help others place them in context in an organization.

### Conversations Happen at Every Level

Every task, work item, or document can have a unique conversation associated with it. By default, team members assigned to a project can see these conversations, but anyone throughout the organization (as long as they have permissions to view a project) can be added to these conversations.

Conversations also happen above these levels. Conversation threads can belong to a Project, a Team, or even the entire Organization.

### Conversations Roll Up

Conversations based on project items or documents can be viewed in aggregate at higher level project items, entire projects, or for teams. So, conversations about a specific task can be seen on the task itself, the parent story, the parent epic, and the parent project.

### “A Story is a Placeholder for a Conversation”

When creating fields and details of a work item, the conversation about that item is the primary focus. To the point that things like acceptance criteria and task details can be added and edited via conversation messages.