---
title: Feature Flags
date: "2021-11-26T05:42:58.934Z"
description: ""
hidden: true
---

It was my 2nd day at $STARTUP when I witnessed the first of many outages caused by a deployment.

Two software engineers and a QA person had spent _four hours_ merging and deploying a 10,000 line pull request (I wish I were exaggerating) with multiple database schema changes. It worked on the engineer's machine. It worked in stage (which was on a completely different infrastructure than production, by the way). They didn't know what to do.

Within two weeks, we'd implemented feature flags with a third-party service. We now released new features to employees at the company first. Were there unexpected hiccups for the first 100 or so users at a company every once in a while? Of course. Did we ever have an outage that affected all 500k of our monthly users again at the same time? Never.

> Releasing a feature to a small percentage of traffic is the single best thing you can do to de-risk any deployment.

Remember: A feature can't break production if the users can't even see it. This allows your team to keep deploying features and keep releasing small chunks of code instead of worrying about maintaining multiple-stage environments. In my experience, this is a lot more hassle than it's worth. This is because stage is never quite the same as production. By releasing features under a flag, you can "unclog" the QA approval step. Now instead of waiting 24-48 hours for QA to check your code before releasing it, we can remove the feature just to the QA team, continue on our other tasks in parallel, and come back to fix it if QA finds any bugs. Since it's in production, QA is no longer blocked by not having a different environment. The test environment is production.

Even if stage and prod are 99% similar, that 1% difference can cause the whole site to go down. The only way to truly test something is in production. At the bare minimum, your stage URL is different than your production one. This manifested in a bug on HowStuffWorks.com while I was working at System1. I made a change in the folder path for where the static assets were stored. On the engineers' laptops and stage, the CDN URL was the same as the core site's URL, stage.howstuffworks.com. However, in production, the CDN URL was different, cdn.howstuffworks.com vs. www.howstuffworks.com. I'm sure you all see where this is going.

The site loaded perfectly on my machine, but we only saw a blank screen in production. Luckily, this change was behind a `new_layout_enabled=true` flag, or we'd have had a lot of unhappy users. And, more importantly, an extremely unhappy CTO.

When you move into the mindset of continuously deploying to production under feature flags, you free yourself from a large amount of "maintaining stage" work. This buys you time to invest in automated tests and deployments, which snowballs into buying you even _more time_ by avoiding more reactive work.

We're not the only team that does this. The team at Stackoverflow.com is even more extreme.
They skip branches and code reviews entirely and commit code directly to master. [I'm not joking](https://nickcraver.com/blog/2016/05/03/stack-overflow-how-we-do-deployment-2016-edition/#branches). If something does go wrong, the change is so tiny, so contained, and so recent that reverting it is a breeze.

Now we have feature flags enabled; we just found more time out of seemingly nowhere. We didn't have to hire an extra QA person. We didn't hire an additional engineer. But we have the extra time, and more importantly, a win for the whole team, _increasing_ morale with this spare time and confidence. We moved on to the next step, which I'll share with you next week!

# Action Items

- Try signing up for a free trial of a feature flagging service and putting your next feature behind a flag. If you can't get buy-in to use a service from the rest of your team, code your component, so it only appears if `?feature_name_enabled=true` is added to the URL. Reading a variable from the URL can be done in any framework or programming language. Bonus points if you create this feature in multiple pull requests. E.g., make the first pull request under 20 lines of code that only displays the word "Hi" when `?feature_name_enabled=true`. The second pull request can have the feature with no styling, the third with styling but dummy data, etc. Your team members will know that you're making small pull requests, and leading by example is the best way to get buy for any new change on a team.

- Send me an email telling me how it went! I read every email.
