<#
PowerShell helper for pushing this repo to the new remote.
Usage:
  - For HTTPS (recommended if you have a Personal Access Token):
      $env:GIT_ASKPASS = ""; # optional
  git remote add aviconn-new https://github.com/ashutoshdubey-aviconn/Aviconncorp-new-migrated-frontend.git
      git fetch --all
      git push aviconn-new checkpoint/prune-keep-lean:saurav --set-upstream
      git push aviconn-new checkpoint/prune-keep-lean:testing --set-upstream

  If Git prompts for username/password: use your GitHub username and a Personal Access Token (PAT) as the password.

  - For SSH (preferred when you have an SSH key added to your GitHub account):
  git remote add aviconn-new-ssh git@github.com:ashutoshdubey-aviconn/Aviconncorp-new-migrated-frontend.git
      git fetch --all
      git push aviconn-new-ssh checkpoint/prune-keep-lean:saurav --set-upstream
      git push aviconn-new-ssh checkpoint/prune-keep-lean:testing --set-upstream

Notes:
  - The remote named 'aviconn-new' already exists in this repo (HTTPS). If you re-run the add commands, use `git remote set-url` instead of `git remote add`.
  - If you prefer to push a different local branch (e.g., 'main'), replace 'checkpoint/prune-keep-lean' with that branch name.
  - Do NOT paste tokens into files. Use PAT when prompted by Git instead.
#>

Write-Host "Helper script created. See the top comments for usage."
