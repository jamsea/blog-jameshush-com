---
title: Intro to Monitoring and Alerting
date: "2021-12-10T08:47:09.411Z"
description: ""
hidden: true
---

Users should never report an issue before we know about it.

Let me repeat.

Users should _never_ report an issue before we know about it.

I've said this in front of engineering teams
How is this possible?

# Metrics every piece of software should be monitoring

## Uptime monitoring: Is it loading?

This should be table stakes for any project, but I'm still surprised how many companies aren't even checking that their site loads. Also, if your website is visited by people in different countries, remember to monitor it's uptime in every region you have customers. It's common to have an outage happen in just one region (e.g. in Europe but not in Asia). The last thing you want is a call from an angry customer in the different part of the world telling you about an issue you can't recreate in your part of the world.

## New Errors

Once we have uptime monitoring setup, we can set up error monitoring. We want to fix potential issues _before_ they cause an outage in production.

## Custom Metrics

- Filtering errors

# Alerting

- If there's no alert, there will be no fix.

# Action Items

Identify a new metric to monitor and alert on and set it up. If you have no monitoring in place now, I recommend setting up uptime monitoring with something like [Status Cake](https://www.statuscake.com/) and connecting it to an alerting tool like [PagerDuty](https://www.pagerduty.com/). You'll be surprised how easy it is to add new alerts once you have the first one set up. Send me an email and let me know your results!
