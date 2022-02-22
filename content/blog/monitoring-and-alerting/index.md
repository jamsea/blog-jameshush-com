---
title: Intro to Monitoring and Alerting
date: "2021-12-10T08:47:09.411Z"
description: "Users should never report an issue before the business knows about it."
hidden: false
---

Users should never report an issue before the business knows about it.

Let me repeat.

Users should _never_ report an issue before the business knows about it.

I've said this in front of engineering teams.
How is this possible?

# Metrics every piece of software should be monitoring

## Uptime monitoring

> Is it loading?

Uptime should be table stakes for any project, but I'm still surprised how many companies aren't even checking their site loads.

The biggest culprits are the marketing pages. Oftentimes, marketing websites are separate from the main product's website with, their own team of engineers or an outside agency. I once walked by a business analyst frantically trying to bring the home page up after accidentally crashing it with a WordPress plugin. After that incident, we set up a monitoring tool to check the home page every few minutes to make sure it was up and running, and alert the engineering team if there was an issue.

If your website is visited by people in different countries, remember to monitor it's uptime in every region you have customers. It's common to have an outage happen in just one region (e.g. in Europe but not in Asia). The last thing you want is a call from an angry customer in another part of the world telling you about an issue you can't recreate in your part of the world.

## New Errors

> Does it work?

Once we have an uptime monitoring setup, we can set up error monitoring. We want to fix potential issues _before_ they cause an outage in production. I like to treat warnings as errors, as warnings usually point to sloppy practices that lead to user issues later.

When you first turn this on a production application, prepare to be humbled. Especially with websites with millions of visitors, expect _every_ edge case you thought wouldn't happen while developing the feature on your machine to happen.

## Custom Metrics

> Does it _actually_ work?

Every application is unique and has it's own custom business metrics that should be monitored. While working on personality quiz project that had millions of users, our go to custom metric was "Number of people who've answered at least one quiz question". This was after we ran into a bug that prevented users of certain browsers from answering questions, but still caused the page to _look_ just fine in an end to end test. By pairing this metric with a/b tests, we knew confidently when _any_ new deployment prevented a user from interacting with the website.

# Alerting

> Does someone know when it's broken?

If there's no alert, there will be no fix. I've seen well-intentioned teams set up monitoring, only to funnel all alerts to an unchecked Slack channel. To solve this, I always funnel _every_ error message to an on-call rotation and make it clear whoever is on-call is responsible for triaging every error and escalating if they're unsure how to fix it. Not only does this mean noisy, false-negative error messages get cleaned up, but it solves the responsibility problem.

> When everyone is responsible for something, no one is responsible for it.

For operations tasks, making it clear who's responsible for reactive work for a given period of time is _key_ to making sure it gets done.

# Action Items

Identify a new metric to monitor and alert on and set it up. If you have no monitoring in place now, I recommend setting up uptime monitoring with something like [Status Cake](https://www.statuscake.com/) and connecting it to an alerting tool like [PagerDuty](https://www.pagerduty.com/). You'll be surprised how easy it is to add new alerts once you have the first one set up. Send me an email and let me know your results!
