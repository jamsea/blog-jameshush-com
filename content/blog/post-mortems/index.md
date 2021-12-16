---
title: Post Mortems
date: "2021-12-16T13:55:30.062Z"
description: "Production issues are inevitable. Remember, even Ford has to do recalls."
hidden: false
---

Production issues are inevitable. Remember, even Ford has to do recalls.

Our funnel is humming away; we're catching issues before our customers see them. Or so we think. The head of customer support sends us a message saying the site is crashing for everyone in Europe. Shoot, we were only testing on our USA servers.

How do we react in this situation? This is important because it's more a _culture_ change than a coding change. I've found that the engineering team should take ownership of the issue quickly and in _writing_. Taking responsibility unapologetically and rapidly allows you to control the narrative to the rest of the organization.

The process we follow is:

1. Provide a quick fix for the issue right away.
2. Write a "business disruption" ticket in Jira outlining what went wrong and what the short-term and potential long-term fixes are.
3. Schedule a postmortem meeting with every stakeholder involved.

At the meeting, this is incredibly, incredibly important, do not blame anyone. The process was wrong, not the person. Once you fall into blame, people sweep cultural issues under the rug, and you'll end up with much, much more significant issues. What we want to do instead is figure out what went wrong, how much it costs the business, and solutions for the short term, medium-term and long term.

One benefit of working at the AdTech company is it was pretty easy to estimate the impact on revenue during an outage. We had a Google Analytics graph that showed exactly how much money we made over time.

And if there were an outage, it would ultimately go to zero. Not a particularly fun conversation with your CTO about why we didn't make $100k, but productive nonetheless.

If it's too tricky to tie an outage to revenue at your company, perhaps you could tie it to your NPS score or app store rating. If you still can't figure out a metric to link this to, was it worth calling a business disruption in the first place?

> Perhaps the takeaway is to calm down?

How big the disruption determines how much effort you put into fixing it. We treat a $1,000 outage and a $100,000 outage entirely differently. Often, this is as easy as setting up an extra alert.

If possible, another good step is adding a check earlier in our pipeline. One great example:
I worked at a company where that page stopped loading because of a misspelled import statement.

Calling it a misspelling is painting the issue with too broad a brush. MacBooks are case sensitive, and Linux machines aren't case sensitive when importing file names.

Since the engineers on the team were using Macs, it Worked Fine On Their Machine™, but in production, everything broke.

During the business disruption meeting, we tossed out ideas around how to ensure this didn't happen again. Our first idea was to make an end-to-end test, but that would take a few days to set up and be consistent. We realized there was an earlier step in our funnel we could put these checks: we could turn on a lint rule that would yell at developers if the casing was off and if they misspelled anything. _Guaranteeing_ this particular issue would never happen again.

While the outage cost us $10,000, learning from our mistake and guaranteeing it would never happen again saved us hundreds of thousands of dollars. That's multiple engineering salaries. That's why these business disruption meetings are so important.
