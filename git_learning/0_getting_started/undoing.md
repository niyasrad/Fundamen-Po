## Undoing Things

As much as adding functionality to your codebase is important, it is also important to remember how you can modify, remove and undo things in your commits.

#### Redoing a commit
-> ```git commit --amend```

##### Notes
- The command uses staging area, and if you did no changes since the previous commit, you'll only be changing the commit message.
- *Amending your commit can cause problems to your collaborators. Please refer to documentation for understanding and handling this command.*


#### Unstaging staged files to modified files
-> ```git reset HEAD <filename>```

#### Unmodifying modified files to unmodified files
-> ```git checkout -- <filename>```

#### Unstaging staged files to modified files using restore
-> ```git restore --staged <filename>```

#### Unmodifying modified files to unmodified files
-> ```git restore <filename>```

##### Notes
- You can also use . to make sure the undoing of the particular action for all the files involved.
- https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things