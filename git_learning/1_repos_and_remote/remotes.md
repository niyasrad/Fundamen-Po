## Remotes

The word “remote” does not necessarily imply that the repository is somewhere else on the network or Internet, only that it is elsewhere. Working with such a remote repository would still involve all the standard pushing, pulling and fetching operations as with any other remote.

#### Showing your remotes (Which you've configured)

-> ```git remote```

#### View the remote links (Shows fetch, push links)

-> ```git remote -v```

#### Adding remote repositories

-> ```git remote add <name_here_e.g._upstream> <link_here>```

#### To fetch from remote

-> ```git fetch <name_here_e.g._upstream>```

#### To push it upstream

-> ```git push <name_here_e.g._upstream> <branch_name>```

#### To remove remotes

-> ```git remote remove <name_here_e.g._upstream>```

##### Notes

- Remotes are to be configured right after cloning a repository - upstream and origin have to be looked into while doing fork based development.
- Repositories shall be fetched and updated regularly, while collaborating with a lot of other people.
- Deeper Dive: https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes
