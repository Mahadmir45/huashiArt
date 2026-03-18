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
- Credential-based admin panel for direct content updates
- Browser-persisted saved changes (`localStorage`)
- Professional MIT-style CV source in `cv.tex` (Overleaf-ready)

## Run Locally (Live)

From this folder:

```bash
python3 -m http.server 5500
```

Open:

`http://localhost:5500`

## Admin Login

Current credentials in `app.js`:

- Username: `huaadmin`
- Password: `HuaPortfolio2026!`

You can change these in the `ADMIN_CREDENTIALS` object near the top of `app.js`.

## CV in Overleaf

1. Go to [Overleaf](https://www.overleaf.com/).
2. Create a new blank project.
3. Replace the default `main.tex` with the content of `cv.tex`.
4. Compile to produce a clean, professional CV PDF.

## Notes on Production Security

The current admin system is a client-side credential gate designed for convenience and rapid iteration.  
For a public production deployment, migrate authentication and content storage to a backend service (e.g., Supabase, Firebase, or a custom API).

## Suggested Deployment

Deploy this folder as a static site on:

- Netlify
- Vercel
- GitHub Pages

After deployment, keep assets (`.mov`, `.mp4`, `.pdf`) in the same root or update links in the admin panel.
