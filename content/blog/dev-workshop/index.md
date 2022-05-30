---
title: Setting up a modern web development environment in 2022
date: "2021-12-29T06:59:00.980Z"
description: "Notes from my modern development environment workshop."
hidden: false
---

# Overview

1. We're going to download and install any essential tools.
2. Clone an actual real world project (my website) and get it running.
3. Explain the some sane default settings for any modern web project for VS Code.
4. Answer any development environment questions.

# Demo

## vscode folder explanation

- extensions.json
  - Has a list of all recommended extensions
- settings.json
  - Getting extensions to play together nicely is more challenging than it looks. This file allows you to share the _settings_ that allow extensions to work. This is a huge help for teams. A great example here is stylelint and vs code's built in css validator collide with each other.
- launch.json
  - Added commands to make debugging in vs code easier
- tasks.json

  - Sets the default build and test tasks
  - Default build task: command + shift + b
  - Default test task: command + r, t

- Start project
- Show Typescript tsx example
- Show GraphQL example
- Show prettier
- Show stylelint

# Mac Users

1. Open up a terminal and type "git" to automatically install the command line tools on macOS without installing all of Xcode. Or download [the full version of Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12).
1. Download [Homebrew](https://brew.sh/).

# Windows Users

1. Download [git for windows](https://gitforwindows.org/)

# All Users

1. Download [VS Code](https://code.visualstudio.com/)

# Install code shell command

- command + shift + p "shell command" select "install code command in path"

# Install zsh and oh my zsh (macOS)

```bash
brew install zsh
sudo sh -c "echo $(which zsh) >> /etc/shells"
chsh -s $(which zsh)
```

Then follow the directions here: https://ohmyz.sh/#install

# Set default shell to zsh or git bash in vs code

1. Open VS Code
2. Press command + shift + P (macOS) or CTRL+Shift+P (Windows/Linux) and search for terminal "Terminal: Select Default Profile".
3. Select "zsh" (on macOS) or "git bash" (on Windows)

# Clone this blog

- Open integrated terminal (command + shift + P "Terminal: Create new terminal")

```bash
git clone https://github.com/jamsea/blog-jameshush-com.git
cd blog-jameshush-com
code .
npm install
```

# Add www.jameshush.localhost to /etc/hosts

```bash
sudo code /etc/hosts
```

or windows

```powershell
code %SystemRoot%\System32\drivers\etc\hosts
```

https://petri.com/easily-edit-the-hosts-file-in-windows-11

And paste the following at the bottom:

```
127.0.0.1 www.jameshush.localhost
::1 www.jameshush.localhost
```

Finally, run the site by typing `npm start`

# Avoid installing linters globally

- Makes sharing configuration with team members impossible
- Can cause you to have conflicts in other projects
- Can cause issues in CI/CD setups

# Bonus setups

These are quality of life improvements, that also double as a 1337 flex for your coworkers.

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

# Install cool font

- If you _really_ want to impress your date, install the FiraCode font.
- https://github.com/tonsky/FiraCode/wiki
