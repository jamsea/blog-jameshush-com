---
title: Launch a blog in less than two hours workshop notes
date: "2022-02-10"
description: "Workshop number two notes"
hidden: false
---

These are the notes from the following [workshop](https://www.eventbrite.com/e/llaunch-a-blog-in-less-than-two-hours-tickets-232065773977).

# Goals:

- Create a website (like this: https://gatsbystarterblogsource.gatsbyjs.io/)
- Create a blog post
- Create a one off page
- Learn how to commit code with GitHub
- Learn how to use the GitHub web editor

# Demo

- Gatsby Intro

# Exercises:

1. Create Gatsby and GitHub accounts
2. Go through blog setup steps

- Make Github account
  - https://www.github.com
- Make Gatsby cloud account
  - https://www.gatsbyjs.com
- Go to gatsby.com
  - Login with GitHub
  - Select markdown blog
  - Pick a name
  - Wait for it to load (takes about 3 minutes)

# Demo:

- Show creating a blog post with GitHub editor

# Exercises:

1. Edit a blog post.
2. Create a new blog post.

- Open the github link to your project (e.g. https://github.com/YOUR_ACCOUNT_NAME/gatsby-starter-blog)
- Type `.` or replace `github.com` with `github.dev` to open up GitHub's text editor
- Make a folder called `new-blog-post`
- Add `index.md`
- Add the text "Hello world!" to `index.md`
- Click on the "source control" button on the right hand side of the screen
- In the "Message" box write "Edited a blog post"!
- Click the checkmark above the Source Control message box to save changes.

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

1. Add the file `new-page.jsx` to the `src/pages` folder.
2. Copy and paste the following code into that file:

```jsx
import * as React from "react"

export default function Component() {
  return "Hello world"
}
```

- Commit changes the same way as the pervious exercises

# Next step ideas (homework!)

- Get a custom domain name
- Look into other sources like Contentful or Wordpress
- Start diving into React
