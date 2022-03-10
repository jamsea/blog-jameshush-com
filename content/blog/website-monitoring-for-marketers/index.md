---
title: Website monitoring for marketers workshop notes
date: "2022-03-10"
description: ""
hidden: false
---

# Goal

Today we're creating a marketing page similar to https://signup.zoeymandarinchinese.com and connecting [Google Analytics](https://analytics.google.com) to track users.

# 1. Create accounts

- [Click here to sign up for Google Analytics](https://analytics.google.com)
  - When it asks for an account name, use whatever your website name is. In this example we'll be using "zoeymandarinchinese".
  - There's multiple steps in the setup wizard, if you're stuck on a step just ask!
- [Click here to sign up for Leadpages](https://try.leadpages.com/oyxsizezt9g6)

  - Leadpages is free for two weeks, but I recommend setting a reminder in your calendar to cancel the subscription 13 days from now so you don't get surprised with a bill!
  - After signing up, click "landing pages".
  - Give the page a name. In our example we're selling an OPI course, so we're going to call it "OPI Sales Page".
  - Click on "settings", then click "analytics".

  - Open new tab in your browser and go to [Google Analytics](https://analytics.google.com).

- In the Google Analytics tab:

  - Click on "Admin" (the gear icon) at the bottom left of the page.
  - Click on "Data Streams".
  - Click on "new web project"
  - For "website name" use your domain name. If you do not have a domain name just use "My Website" as the website name.
  - Click on "Global site tag (gtag.js)"
  - Copy the code.
  - Go back to the Leadpages tab.

- In the Leadpages tab:
  - Paste the code in the analytics tab in the "Head Section Tracking Code" section.
- Click "Publish" in the top right corner of the screen.

# 2. Install Google Analytics extension

- [Click here to install the Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)

# 3. Confirm everything works works

- Quit Google Chrome and re-open it.
- Enable the new Google Analytics debugger you just installed.
- Right click in the middle of the page and select "inspect".
- Click on "Console".
- You should see text that looks like:

```
  __ _| |_ __ _  __ _   (_)___
 / _` | __/ _` |/ _` |  | / __|
| (_| | || (_| | (_| |_ | \__ \
 \__, |\__\__,_|\__, (_)/ |___/
 |___/          |___/ |__/
```

- Go back to https://analytics.google.com
- Click on the "Home" button in the top left corner of the page.
- You should see 1 new visitor in the last 30 minutes. That's you!

# 4. Try visiting other people's web pages!
