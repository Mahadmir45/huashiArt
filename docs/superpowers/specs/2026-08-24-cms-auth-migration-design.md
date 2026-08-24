# Hua Portfolio — Secure Shared CMS Migration

## Context

The portfolio site (`Mahadmir45/huashiArt`, public GitHub repo, deployed via GitHub Pages) has a client-side admin editor:

- Login credentials (`huaadmin` / `HuaPortfolio2026!`) are hardcoded in `app.js` and also written in plain text in `README.md`. Both are publicly readable — via view-source and via the repo — and the password is also present in git history.
- Saved edits are written to the *editor's own browser* `localStorage`. They are never visible to other visitors, so the "CMS" doesn't actually publish changes site-wide.

This spec covers replacing that with real authentication and shared, server-persisted content, and renaming the project to `hua-portfolio`.

## Goals

1. Content edits made through the admin panel become visible to every visitor, not just the editor's browser.
2. No password or shared secret lives in code or git history going forward.
3. Only the site owner can publish edits; this can't be bypassed by editing client-side JS.
4. The project and live URL are renamed to `hua-portfolio`.
5. Keep the existing WYSIWYG editing UI and its low-code/no-build-step spirit — the added implementation surface is two small serverless functions.

## Non-goals

- Rewriting git history to scrub the old leaked password (rotating auth mechanism entirely makes the old password moot; force-rewriting history is destructive and not warranted for a personal portfolio — flagged to the user, not requested).
- Multi-user roles/permissions (single owner account only).
- Edit history/versioning or rollback UI (out of scope; Netlify Blobs stores only the latest content).
- Migrating any existing browser-local draft content (confirmed with user: none exists beyond what's already in `app.js`).

## Architecture

**Hosting** moves from GitHub Pages to Netlify (static hosting + serverless Functions + Blobs, all on Netlify's free tier).

**Authentication**: Netlify Identity, invite-only. Only the owner's email is invited; public signup disabled. Replaces the hardcoded `CREDS` object and the client-side `login()` check in `app.js`.

**Storage**: Netlify Blobs — a key-value store, holding one JSON blob of site content (the same shape as the current in-memory `C` object in `app.js`).

**Serverless functions** (`netlify/functions/`):

- `get-content.js` (public, GET)
  - Reads the content blob from Netlify Blobs.
  - If missing (first deploy) or the read fails, returns a bundled default content object (the current hardcoded defaults extracted from `app.js`).
  - Always returns 200 with JSON; never errors the page load.

- `save-content.js` (protected, POST)
  - Netlify automatically verifies the Identity JWT passed in the `Authorization: Bearer <token>` header and populates `context.clientContext.user`.
  - Rejects (401) if no authenticated user is present.
  - Rejects (403) if `context.clientContext.user.email` does not match the `ADMIN_EMAIL` environment variable (set in the Netlify dashboard, never in code).
  - On success, validates the request body is well-formed JSON matching the expected content shape, writes it to the Blobs store, returns 200.

## Data flow

1. **Page load** (any visitor): frontend `fetch('/.netlify/functions/get-content')` → renders the site from the returned JSON. Falls back to bundled defaults on any failure, so the site is never blocked by a backend outage.
2. **Editing** (owner only): existing WYSIWYG editor UI unchanged; edits are held in an in-memory/local draft while working, same as today's UX.
3. **Publishing**: owner clicks Save → frontend reads `netlifyIdentity.currentUser().jwt()` → POSTs the full content JSON with that token to `/.netlify/functions/save-content` → on success, the frontend also updates its own rendered view immediately (optimistic update, already confirmed by the 200 response).
4. **Login**: the Netlify Identity widget (a small script include) replaces the current custom login modal. It handles invite acceptance, login, logout, and session/token refresh.

## Frontend changes (`app.js`, `index.html`)

- Remove: `CREDS` constant, the plaintext-comparison `login()` body, `STORAGE_KEY`/`AUTH_KEY` localStorage reads for auth and content persistence.
- Add: Netlify Identity widget script + init; wire its login/logout events to the existing `isAuthed` / edit-mode UI state so the rest of the editor UI (already built) needs minimal change.
- Change `loadContent()` to fetch from `get-content` instead of `localStorage`.
- Change `saveContent()` to POST to `save-content` (with the Identity JWT) instead of writing to `localStorage`.

## Error handling

- `get-content` unreachable/erroring → frontend falls back to bundled default content; site renders normally, no broken state.
- `save-content` called while unauthenticated, or by a non-owner email → 401/403, no write occurs, editor UI surfaces "not authorized" rather than silently failing.
- `save-content` called with malformed JSON → 400, no partial write.

## Security summary (addresses the "make this more secure" request)

| Before | After |
|---|---|
| Password hardcoded in `app.js`, readable via view-source | No password in any code; real auth via Netlify Identity |
| Password also in plain text in `README.md` and git history | Removed from README going forward; mechanism is fully replaced so the old leaked password is moot |
| Client-side-only check; trivially bypassed via devtools | Server-side authorization check in `save-content.js`, cannot be bypassed client-side |
| Content editable/spoofable per-browser via localStorage | Content lives server-side in Netlify Blobs; single source of truth for all visitors |
| No invite gating — one shared secret for anyone who has it | Netlify Identity invite-only; only the owner's email can ever authenticate |

## Rename & deployment

- GitHub repo: `Mahadmir45/huashiArt` → `Mahadmir45/hua-portfolio` (via GitHub repo rename, preserves history/stars/issues; GitHub auto-redirects the old URL).
- Netlify site name set to `hua-portfolio` → live URL becomes `hua-portfolio.netlify.app`.
- Retire `.github/workflows/deploy.yml` (GitHub Pages deploy) — Netlify's git-connected auto-deploy replaces it.
- No hardcoded old-domain/old-repo-name URLs were found in `app.js` or `index.html` (verified), so no link updates needed there.

## Testing plan

1. Deploy the branch to a Netlify preview/production URL.
2. Invite the owner's email via the Netlify Identity dashboard; confirm invite email flow works.
3. Log in through the new Identity widget; confirm edit mode unlocks the same as before.
4. Make an edit, Save, confirm success feedback.
5. Open the live URL in an **incognito window** (no login, no prior localStorage) and confirm the edit is visible — this is the key proof that content is now shared, not per-browser.
6. Attempt to call `save-content` without a valid token (e.g. via curl) and confirm it's rejected.
7. Confirm the site still renders correctly if `get-content` is temporarily unreachable (e.g. by testing the fallback path locally).
