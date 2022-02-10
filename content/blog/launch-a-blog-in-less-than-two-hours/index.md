---
title: Launch a blog in less than two hours workshop notes
date: "2022-02-10"
description: "Workshop number two notes"
hidden: false
---

These are the notes from the following [workshop](https://www.eventbrite.com/e/llaunch-a-blog-in-less-than-two-hours-tickets-232065773977).

- Make Github account
  - https://www.github.com
  - https://www.gatsbyjs.com
  - https://www.gatsbyjs.com/dashboard/organization/520227e2-3264-4965-ab03-ba06e3f0e7d1/sites
  - https://www.simpletechture.nl/img/github-flow.png
  - https://gatsbystarterblogsource.gatsbyjs.io/
- Make Gatsby cloud account

# Goals:

- Create a website (like this: https://gatsbystarterblogsource.gatsbyjs.io/)
- Create a blog post
- Create a one off page
- Learn the basics of GitHub
- All by using the web editor

- Gatsby Intro

- Go to gatsby.com

  - Login with GitHub
  - Select mark down blog
  - Pick name
  - Wait for it to load (2 minutes)

# Exercises:

1. Create Gatsby and GitHub accounts
2. Go through blog setup steps

# Demo:

- Show creating a blog post with github editor
  - Make a folder called `new-blog-post`
  - Add `index.md`
  - Add the text "Hello world!" to `index.md`
  - Save it
- Explain github flow with this diagram: https://www.simpletechture.nl/img/github-flow.png

# Exercises:

1. Edit a blog post.
2. Create a new blog post.

# Demo:

- Intro to pages/ folder
  - Explain difference between `.jsx` file and `.md` file
  - Open `src/pages`
  - Add the file `new-page.jsx`
  - Add the following to the page:

```jsx
import * as React from "react"

export default function Component() {
  return "Hello world"
}
```

# Exercise:

1. Make a page

# Next steps:

- Get a custom domain name
- Look into other sources like Contentful or Wordpress
- Start diving into React
