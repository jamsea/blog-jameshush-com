---
title: Github Actions
date: "2022-03-24"
description: ""
hidden: false
---

# Goal

- Show how to set hooks up for PR jobs and release jobs
- End result will be a page like this: https://jamsea.github.io/intro-to-github-actions/

# Background

- Explain continuous integration
- Explain branch from master workflow
- Talk about why this is tricky in the past
- Introduce Github Actions

## Create GitHub Account

- https://www.github.com

## Clone example repo

- ADD LINK TO REPO HERE

## Setup github pages

- https://docs.github.com/en/pages/quickstart
- https://create-react-app.dev/docs/deployment/#github-pages
- Go to https://github.com/jamsea/intro-to-github-actions/settings/pages
- Set branch to `gh-pages`

## Create GitHub Action

- create `.github/workflow/ci.yml` file

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

Next we add a `jobs` block. Here we're defining a `build-and-deploy` and specifying that this job `runs-on` Ubuntu Linux. In general `ubuntu-latest` is a good choice for most web based projects.

```yml
steps:
  - name: Checkout
    uses: actions/checkout@v3
```

Next we add some steps. We're going to call the first step "Checkout", and we'll use a publically available action called `actions/checkout@v3` to checkout our code from GitHub and run it in an action.

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

Here's what the full file looks like: (add link to GitHub page)

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
        with:
          persist-credentials: false
      - name: Install test and build
        run: |
          npm install-ci-test
          npm run build
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4.2.5
        with:
          BRANCH: gh-pages
          FOLDER: build
```
