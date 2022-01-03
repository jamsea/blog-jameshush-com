---
title: Setting up the ultimate Gatsby/Typescript/React Development Environment
date: "2021-12-29T06:59:00.980Z"
description: ""
hidden: true
---

# Overview

1. We're going to download and install any essential tools.
2. Clone a real world project (my website) and get it running.
3. Explain same sane default settings for any modern web project for VS Code.
4. Answer any development environment questions.

# Mac Users

1. Download [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
2. Download [Homebrew](https://brew.sh/)

# Windows Users

1. Download [git for windows](https://gitforwindows.org/)

# All Users

1. Download [VS Code](https://code.visualstudio.com/)

# Install oh my zsh

https://ohmyz.sh/#install

# Set default shell to zsh in vs code

1. Open VS Code
2. Press command + shift + P (macOS) or CTRL+Shift+P (Windows/Linux) and search for terminal "Terminal: Select Default Profile".
3. Select "zsh"

# Install code shell command

- command + shift + p "shell command" select "install code command in path"

# Install nvm

https://github.com/nvm-sh/nvm#installing-and-updating

## Why use nvm?

- Different projects commonly have different versions of nodejs
- Locking versions for everything is a common practice in order to guarantee reproducible builds. Reproducible builds mean that you can rebuild a project from any point in time in history, essential for _any_ production project.

# Install linters per project

- Avoid global installations
  - Makes sharing configuration with team members impossible
  - Can cause you to have conflicts in other projects
  - Can cause issues in CI/CD setups

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
  - Getting extensions to play together nicely is tougher than it looks. This file allows you to share the _settings_ that allow extensions to work. This is a huge help for teams. A great example here is stylelint and vs code's built in css validator collide with each other.
- launch.json
- tasks.json

# Edit /etc/hosts

1. Run `sudo code /etc/hosts`
2. Add the following:

```
127.0.0.1 www.jameshush.localhost
::1 www.jameshush.localhost
```

# Try running the project

- npm scripts in side bar
- explain how they're connected to npm scripts
- click on start
- go to https://www.jameshush.localhost:8000/blog

# Show Typescript tsx example

# Show GraphQL Example

# Show prettier/css example

# /etc/hosts explanation

# Bonus: Install cool font

- https://github.com/tonsky/FiraCode/wiki