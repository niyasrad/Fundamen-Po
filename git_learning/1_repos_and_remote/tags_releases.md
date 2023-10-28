## Tags and Releases

Git has the ability to create snapshots of your entire repository (commits) and mark it with a pointer (tags). 

Tags can be further used to make releases to your repository, making it possible to understand what changes have been made to the repository, and what commits have been created since the earlier release.

You can create releases on from GitHub or any other platform, which can be based on a particular tag, or a new tag. It can be published along with the pull requests completed. 

#### Tagging the last made commit - Lightweight

-> ```git tag <tag_ver.e.g.v1.0.0>```

#### Tagging the last made commit - Annotated

-> ```git tag -a <tag_ver.e.g.v1.0.0> -m "Mesage Here"```

#### Tagging a specific commit 

-> ```git tag <tag_ver.e.g.v1.0.0> <commit_hash_here>```

#### Pushing a Tag to the repository

-> ```git push origin <tag_ver.e.g.v1.0.0>```

#### Pushing many tags at once

-> ```git push origin --tags```

#### Checkout out a particular tag

-> ```git checkout <tag_ver.e.g.v1.0.0>```

##### Notes

- Checking out to a particular tag will put the repository in the `detached HEAD` state, which has a lot of ill side effects.
- It is recommended to experiment, but if you want to retain your changes, you can create a new branch along with the made changes from the tag.
- Please always follow the `Semantic Versioning` for your commit tags and releases. This brings a lot more understanding of the changes with it's `MAJOR.MINOR.PATCH` method.
- Deeper Dive: https://semver.org/ , https://git-scm.com/book/en/v2/Git-Basics-Tagging

