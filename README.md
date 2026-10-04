<<<<<<< HEAD
# GRNR Constructions Ltd website

Premium static marketing site for a London construction company, built with Vite, React 18, TypeScript, Tailwind CSS, Framer Motion, React Router, React Hook Form, Zod and react-helmet-async.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## How to edit content

All editable business content lives in `src/data/`:

- `src/data/company.ts` - company details, contact details and service area
- `src/data/services.ts` - service cards and service page copy
- `src/data/projects.ts` - portfolio cards and project modal data
- `src/data/testimonials.ts` - placeholder testimonials
- `src/data/faqs.ts` - FAQ content shown on Home and Services
- `src/data/legal.ts` - privacy, cookies and terms content

## Form endpoint

Set `VITE_FORM_ENDPOINT` in your environment for the contact form submission endpoint. The form posts JSON to that URL.

If the variable is missing, the form falls back to a `mailto:` link using the company email address.

Example `.env`:

```bash
VITE_FORM_ENDPOINT=https://formspree.io/f/your-id
VITE_SITE_URL=https://your-domain.example
```

## Add images

Replace the placeholder SVGs in `public/images/placeholders/` with real photography using the same filenames. The recommended dimensions are documented in `public/images/README.md`.

## Deploy

The app is static and can be deployed to GitHub Pages, Netlify or Vercel.

### GitHub Pages

- Use the included Vite `base: './'` setting.
- Build with `npm run build` and publish the `dist/` folder.
- The repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

### Netlify / Vercel

- Build command: `npm run build`
- Output directory: `dist`
- Set `VITE_FORM_ENDPOINT` and `VITE_SITE_URL` in the deployment environment

## Notes

- Cookie consent defaults to essential-only storage.
- Optional Google Analytics loading is controlled by `VITE_GA_ID` and consent.
- The site uses hash routing so it can work cleanly on static hosting.
=======
# dhyanesh_repo
>>>>>>> 643f3d126f2b4b5c6bd1278adbb0a5d645995d14
