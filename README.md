# Hua Shi Portfolio Website

A polished single-page portfolio website for animation and visual development, with a built-in admin login panel so content can be updated without editing code files.

## Features

- Separate sections for:
  - About
  - 3D Animation
  - Visual Development
  - Sketchbook
  - CV
- Mobile-friendly navigation and clear layout
- Invite-only admin panel (Netlify Identity) for direct content updates
- Server-shared saved changes (Netlify Blobs) — visible to every visitor, not just the editor's browser
- Professional MIT-style CV source in `cv.tex` (Overleaf-ready)

## Run Locally (Live)

From this folder:

```bash
python3 -m http.server 5500
```

Open:

`http://localhost:5500`

## Admin Login

Editing is gated by [Netlify Identity](https://docs.netlify.com/manage/security/secure-access-to-sites/identity/overview/), invite-only. There is no password stored in this repo.

To get access: ask the site owner to send you an Identity invite from the Netlify dashboard (Site configuration → Identity → Invite users), then follow the invite email to set your own password. Once logged in, click "hua shi" in the header to enter edit mode.

Edits are saved server-side (Netlify Blobs) via a serverless function that checks your authenticated email against the `ADMIN_EMAILS` environment variable (a comma-separated allowlist) — so only invited accounts can publish changes, and they're visible to every visitor immediately after Save.

## CV in Overleaf

1. Go to [Overleaf](https://www.overleaf.com/).
2. Create a new blank project.
3. Replace the default `main.tex` with the content of `cv.tex`.
4. Compile to produce a clean, professional CV PDF.

## Deployment

This site is deployed on [Netlify](https://www.netlify.com/) (static hosting + Netlify Functions + Netlify Blobs). Pushing to `main` auto-deploys.

One-time setup for a new Netlify site (see `docs/superpowers/plans/2026-08-24-cms-auth-migration.md` Task 6 for exact steps):

1. Link this repo to a Netlify site named `hua-portfolio`.
2. Enable Identity, set registration to invite-only, and invite each admin's email.
3. Set the `ADMIN_EMAILS` environment variable to a comma-separated list of those same emails (e.g. `owner@example.com,editor@example.com`).

Keep assets (`.mov`, `.mp4`, `.pdf`) in the same root, or update links via the admin panel.
