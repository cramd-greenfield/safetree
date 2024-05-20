# Setup
1. Fork and clone repo.
  `$ git clone https://github.com/username/safetree.git `
2. Once repo is opened, create a remote of the repo you just forked called 'upstream'.
  `$ git remote add upstream https://github.com/cramd-greenfield/safetree.git`

## Once inside the repo
The upstream branch will act as the source of the repo that will contain the most up-to-date version of the repo with all merged changes. You will never push your changes up to the upstream remote; instead you will only pull from the upstream remote to have your main remote act as a copy of the current state of the repo. When you are ready to make changes that you want to be added to the repo, you make a branch  of the your origin remotes' main branch.

### To make changes
1. Make sure your main branch is consistent with the current state of the repo.
`$ git pull upstream main`

2. Once you've pull from upstream on your main branch, make a new branch off your main branch named after the change you'll be making (i.e. a feature you'll be working on). And to make sure your new branch is up-to-date, you can pull from upstream again.
`$ git checkout -b <branch-name>`

You are now free to make your changes. Be sure to make frequent commits to your branch!

### Submitting changes
When you're ready to submit your changes, you'll have to make a pull request to the upstream repo. But before then, you should push your changes you made in your current branch to your main branch.
`$ git push origin <branch-name>`

From there, your changes will be reviewed by your team members and can wither be approved, and subsequently merged, or will need more changes to be made.

#### Successful merge
Your changes have been approved and merged with the main repo! Now that means you have to update your origin remote to be consistent with the upstream remote.

First let's go back to our main branch.
`$ git checkout main`

At this point, we can also delete the branch we just pushed since that branch was specific to the feature we created an has now fulfilled its purpose.
`$ git branch -D <branch-name>`

Now let's update our main branch to reflect upstream by pulling from upstream again.
`$ git pull upstream main`

#### Unsuccessful merge
Your pull request needs some adjustments, but no need to worry; just continue to make commits and when your code is up to par, you push to origin from the same branch and make your pull request again!

## Summary
These are the steps you will take using the Forking Workflow.
