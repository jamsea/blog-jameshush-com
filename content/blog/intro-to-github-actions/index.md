---
title: Github Actions
date: "2022-03-24"
description: ""
hidden: false
---

# Background

Imagine building a car without a car factory.

Now imagine building a car, without a car factory, or any written instructions of who's supposed to do what.

Sounds pretty silly. You'd have 1000 people running around, nobody knowing quite what they're supposed to be doing. How many cars do you think you'd be able to produce in a day? Maybe one?

Henry Ford figured this out years ago. Automating what makes sense to automate, and giving people clear responsibilities is the difference between shipping _every_ day and _never_ shipping. Today we're going to look at how we can automate deployments with GitHub actions. Automating deployments is a great way to not only make delivering new features faster and safer, but also allows us to _free up_ engineering time and spend it on even more proactive tasks.

Today I'm going to show you how to use GitHub Actions to release our software for us on every merge to `main`. We'll be focusing on the operations (aka "Ops") side today and not on the application code, so we'll be releasing an already made React app. The final result will be a page that looks like this: https://jamsea.github.io/intro-to-github-actions/.

Now, in the past, setting up this flow was a bit tricky. Self-hosting Jenkins and setting up our own test runners has enough of a learning curve that it's scary for a new engineer to dive into. Nowadays we have GitHub Actions. GitHub Actions are the robots in our software factory. Instead of painting cars and welding bolts though, they allow us to automatically run jobs when pull requests are opened, code is merged, issues are opened, etc. Any event that happens in GitHub has a hook that allows an action to run.

# Workshop Directions

## Create a GitHub Account

- Go to https://www.github.com and sign up for an account.

## Clone the example repo

- https://github.com/jamsea/intro-to-github-actions/
- Click fork on the top right corner.

## Setup GitHub pages

- Go to https://github.com/jamsea/intro-to-github-actions/settings/pages
- Set the branch to `gh-pages`

## Create GitHub Action

- Hit the `.` button on your keyboard or change `github.com/YOUR_NAME_HERE` to `github.dev/YOUR_NAME_HERE` in the address bar to open up the code editor.
- Open `package.json` and change the homepage URL on line 5 to your GitHub username.

```diff
-   "homepage": "https://YOUR_USERNAME_HERE.github.io/intro-to-github-actions",
+   "homepage": "https://jamsea.github.io/intro-to-github-actions", # Use your GitHub username
```

- Create a `.github/workflow/ci.yml` file and paste the following in it:

```yml
name: GitHub Actions Build and Deploy Demo
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Install test and build
        run: |
          npm install-ci-test
          npm run build
      - name: Release 🚀
        uses: JamesIves/github-pages-deploy-action@v4.2.5
        with:
          BRANCH: gh-pages
          FOLDER: build
```

Now to explain each section:

```yml
name: GitHub Actions Build and Deploy Demo
on:
  push:
    branches:
      - main
```

This tells our action to run any time code is `push`ed to the `main` branch.

```yml
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
```

Next we add a `jobs` block. Here we're defining a `build-and-deploy` job and specifying that this job `runs-on` Ubuntu Linux. In general `ubuntu-latest` is a good choice for most web based projects.

```yml
steps:
  - name: Checkout
    uses: actions/checkout@v3
```

Next we add some steps. We're going to call the first step "Checkout", and we'll use a publicly available action called `actions/checkout@v3` to checkout our code from GitHub and run it in an action.

```yml
- name: Install test and build
  run: |
    npm install-ci-test
    npm run build
```

Here we're installing, testing, and building our code. This is an example of using bash commands inside a GitHub action. Each new command is on a separate line.

```yml
- name: Deploy 🚀
  uses: JamesIves/github-pages-deploy-action@v4.2.5
  with:
    BRANCH: gh-pages
    FOLDER: build
```

Finally we're using a third publicly available action to deploy our code. Notice the branch name is the same as we set above in the GitHub UI.
