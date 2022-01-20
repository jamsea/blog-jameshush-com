---
title: Setting up the ultimate Gatsby/Typescript/React Development Environment
date: "2021-12-29T06:59:00.980Z"
description: ""
hidden: true
---

# <<<<<<< HEAD

# TODO

- fix vs code launch scripts (SSL errors)

> > > > > > > 21cbd57 (Add more content)

# Outline

- James intro
  - NFL, HowStuffWorks, Remo, MapQuest, Startpage, Info.com
  - Responsible for developer experience at NFL and System1
  - Had a revolving door of agencies and contractors so we had to make sure people could get up to speed as quickly as possible.
  - Text editor and development environment nerd
  - Goal is to get a modern JavaScript project running on your machine
- Demo
  - Show Typescript tsx example
  - Show GraphQL Example
  - Show prettier/css example
- Next part

# Overview

1. We're going to download and install any essential tools.
2. Clone an actual world project (my website) and get it running.
3. Explain the same sane default settings for any modern web project for VS Code.
4. Answer any development environment questions.

# Mac Users

<<<<<<< HEAD

1. # Download [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
1. Download [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12). Pro tip: open up a terminal and type "git" to automatically install the command line tools on macOS without installing all of Xcode.
   > > > > > > > 21cbd57 (Add more content)
1. Download [Homebrew](https://brew.sh/)

# Windows Users

1. Download [git for windows](https://gitforwindows.org/)

# All Users

1. Download [VS Code](https://code.visualstudio.com/)

# Install code shell command

- command + shift + p "shell command" select "install code command in path"

# Install zsh and oh my zsh

```bash
brew install zsh
sudo sh -c "echo $(which zsh) >> /etc/shells"
chsh -s $(which zsh)
```

Then follow the directions here: https://ohmyz.sh/#install

# Set default shell to zsh in vs code

1. Open VS Code
2. Press command + shift + P (macOS) or CTRL+Shift+P (Windows/Linux) and search for terminal "Terminal: Select Default Profile".
3. Select "zsh"

# Install nvm

- https://github.com/nvm-sh/nvm#installing-and-updating
- Add auto switch script https://github.com/nvm-sh/nvm#zsh

```bash
code ~/.zshrc
```

# <<<<<<< HEAD

Afterwards, save and close and type

```bash
source ~/.zshrc
```

to have the settings apply.

> > > > > > > 21cbd57 (Add more content)

## Why use nvm?

- Different projects commonly have different versions of NodeJS.
- Locking versions for everything is a common practice in order to guarantee reproducible builds. Reproducible builds mean that you can rebuild a project from any time in history, essential for _any_ production project.

# Git diff tool

```bash
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'
git config --global diff.tool vscode
git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'
```

# Enable git rerere

```bash
git config --global rerere.enabled true
```

- reuse recorded resolution.
- makes rebasing and fixing merge conflicts _much_ easier because you don't have to reapply the same resolution over and over
- More information [here](https://stackoverflow.com/questions/49500943/what-is-git-rerere-and-how-does-it-work)

# Clone this blog

- Open integrated terminal (command + shift + P "Terminal: Create new terminal")

```bash
git clone https://github.com/jamsea/blog-jameshush-com.git
cd blog-jameshush-com
code .
npm install
```

# Use the vscode folder

- extensions.json
  - Has a list of all recommended extensions
- settings.json
  - Getting extensions to play together nicely is more challenging than it looks. This file allows you to share the _settings_ that allow extensions to work. This is a huge help for teams. A great example here is stylelint and vs code's built in css validator collide with each other.
- launch.json
  - Added commands to make debugging in vs code easier
- tasks.json
  - sets the default build and test tasks
  - default build task: command + shift + b
  - default test task: command + r, t

# Install linters per project

- Avoid global installations
  - Makes sharing configuration with team members impossible
  - Can cause you to have conflicts in other projects
  - Can cause issues in CI/CD setups

# Bonus: Install cool font

- If you _really_ want to impress your date, install the FiraCode font.
- https://github.com/tonsky/FiraCode/wiki
