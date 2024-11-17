# Git Commands

This document provides a list of basic Git commands for version control. These commands can be used to manage your repository and collaborate with others effectively.

### 1. **Check Current Status**

Shows the current state of the repository, including staged, unstaged, and untracked files.

```bash
git status
```

### 2. **View Branches**

Lists all local branches and highlights the current active branch.

```bash
git branch
```

### 3. **Switch Branches**

Switches to an existing branch.

```bash
git checkout branch_name
```

Or using the newer command:

```bash
git switch branch_name
```

### 4. **Create and Switch to a New Branch**

Creates a new branch and immediately switches to it.

```bash
git checkout -b new_branch_name
```

Or using the newer command:

```bash
git switch -c new_branch_name
```

### 5. **Stash Changes**

Temporarily saves your changes to apply them later, without committing them.

```bash
git stash
```

To stash untracked files as well:

```bash
git stash push --include-untracked
```

### 6. **Push Changes to Remote**

Pushes your committed changes to a remote repository.

```bash
git push origin branch_name
```

### 7. **Commit Changes**

Commits the changes in the staging area to your local repository.

```bash
git commit -m "Your commit message"
```

### 8. **View Commit History**

Shows a log of all commits made in the repository.

```bash
git log
```

### 9. **Apply Stashed Changes**

Applies the most recent stash.

```bash
git stash apply
```

To apply a specific stash:

```bash
git stash apply stash@{index}
```

### 10. **List Stashes**

Displays all stashes in the repository.

```bash
git stash list
```

### 11. **Delete a Stash**

Deletes a specific stash.

```bash
git stash drop stash@{index}
```

Or clear all stashes:

```bash
git stash clear
```

---
