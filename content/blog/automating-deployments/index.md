---
title: Automating Deployments
date: "2021-11-26T05:42:58.934Z"
description: "Even before my main focus was DevOps, I _hate_ wasting my time waiting for something to build and deploy. Instead of checking YouTube or Reddit while waiting, I use that build time to figure out ways to automate deployments, so I don't have to wait as long the next time. Below are the steps I follow whenever I run into a new deployment process that hasn't _quite_ been automated yet."
hidden: true
---

Automating deployments is the first thing I do whenever I join any new company.

Even before my main focus was DevOps, I _hate_ wasting my time waiting for something to build and deploy. Instead of checking YouTube or Reddit while waiting, I use that build time to figure out ways to automate deployments, so I don't have to wait as long the next time. Below are the steps I follow whenever I run into a new deployment process that hasn't _quite_ been automated yet.

# Make a checklist

Do _not_ start by installing $SHINY_NEW_ORCHESTRATION_TOOL. We have to learn to walk before we can run. People love to work out the "optimal" solution that will take months instead of the small next step. Especially if you're new to the team, you won't have the social capital to get buy-in for a long-winded new project. What can you do instead?

Create a checklist in the README file at the root of the repo.

Not only will this help any new teammate deploy, but frankly, it'll help _you_ remember the steps. Also, you'll need these steps written down _anyway_ to figure out what to automate next when you do get around to installing $SHINY_NEW_ORCHESTRATION_TOOL.

Here's an example of what the section in the README.md file will look like:

```MD
# Deploying the site to production

[] Tag @everyone in #engineering on slack with the message "Starting to deploy now 🚀"
[] Go to https://www.example.com/location/to/get/api?key and copy your API key.
[] Add the line `export SOME_API_KEY="$API_KEY_YOU_COPIED_ABOVE"` to ~/.zshrc on your computer.
[] Run `npm run custom-build-script`
[] Run `zip -r foo.zip dist/website/foo`
[] Run North America upload script by typing `./scripts/upload_zip_to_prod.sh`
[] Run EU upload script by typing `./scripts/upload_zip_to_eu.sh`
[] Go to https://www.example.com/status and make sure it doesn't say 'error'.
[] Go to https://www.example.com and hard reload on Firefox to make sure it works.
[] Tag @everyone in #engineering on slack with these checkboxes checked.
```

Notice, we have _not_ changed _any_ of the steps. We've merely written them down. If you're like most engineers, your spidey senses are tingling. "Why don't we combine `upload_zip_to_prod.sh` with `upload_zip_to_eu.sh` right now! It'll only take five minutes!" **Stop**. The goal is _assemble_ the steps into one place **first**. We want to get a win within the first day.

# Make a shell script

```bash
# Prompt the user to go to a website if their API key isn't set.
if [[ ! -v SOME_API_KEY ]]; then
    echo "SOME_API_KEY is not set."
    echo "Go to https://www.example.com/location/to/get/api?key, copy your API key and paste it below:"
    read SOME_API_KEY
    export SOME_API_KEY=$SOME_API_KEY
fi

# Easy to automate commands
npm run custom-build-script
zip -r foo.zip dist/website/foo
./scripts/upload_zip_to_prod.sh
./scripts/upload_zip_to_eu.sh

# Harder to automate commands
cat << EOF
🎉 Website deployed! Here are the next## steps:
 [] Go to https://www.example.com/status and make sure there are no errors.
 [] Go to https://www.example.com and hard reload on Firefox to make sure it works.
 [] Tag @everyone in #engineering on slack with these checkboxes checked.
EOF
```

# Add it to Github actions or Jenkins

If you do not have any CI/CD tool setup and already use Github, I recommend using Github actions. In the short term, yes, you do have to worry about Github actions going down, but that can be handled later by setting up custom Github Actions runners later. If the action _does_ go down while you're setting things up, you can always run the action from your computer using [act](https://github.com/nektos/act) if you're in a pinch.

Here's an example of a simple Github Action I use to deploy [www.jameshush.com](https://www.jameshush.com/) every time there's a push to the `main` branch:

GITHUB-EMBED https://github.com/jamsea/jameshush.com/blob/fac952f7872e1513177b06061b4e06108ddb8c6a/.github/workflows/main.yml#L11-L20 YAML 11-20 GITHUB-EMBED

However, if you have a separate Ops/Infrastructure/DevOps team who like things done a certain way, work _with_ them, not _against_ them to help you get this setup.
Remember, your end goal is to automate deploys, not to introduce new tech for the sake of it.

# Reinvest your new-found time

Here are some ideas:

- Add the (Slack Notify)[https://github.com/marketplace/actions/slack-notify] step to your new Github action to remove the manual update step.
- Create a simple end-to-end test to replace your manual smoke test of "hard reloading on Firefox." Bonus points if you make it work in mobile Safari too!
- Setup something like (Semantic Releases)[https://github.com/semantic-release/release-notes-generator] to automatically generate release notes.

The list goes on. The point is, each of these is a separate task, with individual tickets and pull requests.

# Action items

1. Make a checklist of your current deployment process, create a PR, and post it for your coworkers _today_. If there are some steps you're missing, reach out to people on your team and ask about them in the pull request itself.

2. By the end of the week, convert this checklist into a shell script. Remember, use `echo` to prompt users to manually execute steps you can't automate by the end of the week.

3. By the end of next week, migrate your script to a job runner like Github Actions or Jenkins.

Email me your checklist once you finish it! I'd love to see it. Until then I'll see you in the next lesson!
