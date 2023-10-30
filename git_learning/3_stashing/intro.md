## Stashing

Whenever you feel your project is in a messy state, and you don't find it well to make a commit yet, but you have to switch to another branch and work according to immediate requirements. You just want to save your progress without making a half-done commit, and switch to the other branch.

The best solution here, is to stash.

Stashing takes the dirty state of your working directory — that is, your modified tracked files and staged changes — and saves it on a stack of unfinished changes that you can reapply at any time (even on a different branch).

#### Stashing your work

-> ```git status```

-> ```git stash```

Now, your directory must be clearn again when you check `git status`