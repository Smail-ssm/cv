# Ismail Mansouri - Modern CV (Angular + Resend Contact API)

Modern CV website built with Angular UI and a serverless contact mailer via Resend.

## Included
- Angular standalone app in `src/`
- CV sections as components: Header, Hero, Experience, Projects, Skills, Contact
- Local typed models/data populated with CV content
- Enhanced contact form with send status UX
- Serverless email endpoint at `api/contact.js` using Resend
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

## Resend configuration
Set these environment variables in your deployment (e.g., Vercel):
- `RESEND_API_KEY` (required)
- `CONTACT_TO_EMAIL` (optional, default: `ismailmansouri571@gmail.com`)
- `CONTACT_FROM_EMAIL` (optional, default: `onboarding@resend.dev`)

When the contact form is submitted, Angular sends a POST request to `/api/contact`, and the serverless function forwards the email through Resend.

## Design reference
https://bahajemni.vercel.app/
