# Ismail Mansouri - Modern CV (Angular + Resend Contact API)

Modern CV website built with Angular UI and a serverless contact mailer via Resend.

## Included
- Angular standalone app in `src/`
- CV sections as components: Header, Hero, Experience, Projects, Skills, Contact
- Local typed models/data populated with CV content
- SEO essentials: metadata, Open Graph/Twitter tags, canonical URL, JSON-LD Person schema
- Crawl assets in `src/assets` (`robots.txt`, `sitemap.xml`)
- Enhanced contact form with send status UX
- Serverless email endpoint at `api/contact.js` using Resend
- GitHub Pages deployment workflow (`.github/workflows/deploy-pages.yml`)
- Static mockup kept in `mockups/` for visual iteration

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm start
   ```
3. Open `http://localhost:4200`

## Deploy to GitHub Pages
This repo includes an automatic deploy workflow on pushes to `main`.

1. Push your code to the `main` branch.
2. In GitHub repository settings:
   - Go to **Settings → Pages**
   - Set **Source** to **GitHub Actions**
3. The workflow will build Angular with the repo base-href and publish the `dist/cv/browser` artifact.

### Why the previous workflow failed
If GitHub Actions reports "Dependencies lock file is not found", ensure `package-lock.json` is committed.
This repository now includes a lock file so `npm ci` works in CI.

## Resend configuration (for serverless environments)
Set these environment variables in deployments that support serverless functions (e.g., Vercel):
- `RESEND_API_KEY` (required)
- `CONTACT_TO_EMAIL` (optional, default: `ismailmansouri571@gmail.com`)
- `CONTACT_FROM_EMAIL` (optional, default: `onboarding@resend.dev`)

When the contact form is submitted, Angular sends a POST request to `/api/contact`, and the serverless function forwards the email through Resend.

### Important note for GitHub Pages
GitHub Pages is static hosting and does **not** run `/api/contact` serverless code. On Pages, contact submission may fail and users should use direct email/LinkedIn/GitHub actions from the contact section.

## Design reference
https://bahajemni.vercel.app/
