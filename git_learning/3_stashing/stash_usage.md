## Using your Stashes

While you have saved your progress previously, you might want to go back at the work, and complete it. To do this, you must be able to access your stash.


#### Accessing your stash list

-> ```git stash list```

#### Apply the stash that was just recently created

-> ```git stash apply```

#### Apply a specific stash

-> ```git stash apply stash@{<stash_number>}```

#### Create a branch from a stash

-> ```git stash branch <branch_name> stash@{<stash_number>}```