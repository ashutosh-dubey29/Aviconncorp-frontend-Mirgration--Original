Chore: Highcharts ESM migration, add mock fixtures, and remove legacy bundle

Summary
- Centralized Highcharts to an ESM wrapper (`src/app/shared/highcharts-wrapper.ts`) and converted components to use it.
- Removed the legacy Highcharts UMD bundle (`src/assets/highchart/highcharts.js`) and removed script tags referencing it.
- Registered `MockApiInterceptor` in `src/main.ts` and added example fixtures under `src/assets/mocks/` to support local mock mode (`?useMock=1` or `localStorage.USE_MOCK_API = 'true'`).
- Cleaned repository index to avoid committing generated cache files (updated `.gitignore`).

What changed in this branch
- New files: `src/assets/mocks/*.json` (sample fixtures), `.github/PR_BODIES/cleaned-main-pr.md` (this file)
- Modified files: `src/main.ts` (registered mock interceptor), multiple components updated earlier to use ESM Highcharts wrapper
- Removed file: `src/assets/highchart/highcharts.js` (legacy UMD bundle)

Tests
- Unit tests run locally: `npm test -- --watch=false` → 33/33 SUCCESS.
- There are non-fatal warnings from Highcharts accessibility module and a deprecation warning about using `ngModel` with `formControlName` (existing code warnings, not introduced in this change).

Notes about the push
- The repository previously contained large generated `.angular/cache/...` pack files which exceed GitHub's file-size limits. Because those large files were already part of the history, a normal push to `main` was rejected by the remote pre-receive hook.
- To avoid rewriting `main` history in this operation, I created a clean snapshot branch called `cleaned/main` containing the current project tree (respecting `.gitignore`) and pushed it to the remote. This branch contains the migration changes but not the old `.angular` caches.

Recommended next steps
1. Review this PR (target `main`) and merge `cleaned/main` into `main` via the GitHub UI. This will preserve old `main` history while updating the tree.
2. (Optional) If you want to remove the large `.angular` caches from `main`'s history entirely, we can run a history rewrite (BFG or `git filter-repo`) and force-push — this is destructive and requires all collaborators to rebase or re-clone; I can perform it if you confirm.
3. Run the dev server and test mock mode locally:

```powershell
npm start
# then open http://localhost:4200/?useMock=1
```

4. After merge, consider adding GitHub LFS or ensuring build caches are excluded in CI to prevent large file pushes.

Notes for reviewers
- Key files to review: `src/app/shared/highcharts-wrapper.ts`, `src/main.ts`, the `src/assets/mocks/` fixtures, and components that render charts (they now import from the wrapper).
- The migration keeps Karma/Jasmine tests and the app bootstrap style (standalone `bootstrapApplication`) as implemented earlier.

If you want, I can either:
- Rewrite `main` history now and force-push to fully remove the large caches (I will provide collaborator recovery steps), or
- Leave `main` untouched and merge `cleaned/main` by PR (non-destructive).

— Automated assistant
