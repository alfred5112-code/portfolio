# Infant Alfred Joy — Portfolio

A fast, accessible personal portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, EmailJS, and the GitHub REST API.

## Run locally

```bash
npm install
npm run dev
```

Open the local address Vite prints (normally `http://localhost:5173`).

## Production

```bash
npm run build
npm run preview
npm run lint
```

## Configure content

All visible portfolio content is in `src/data/*.json`. Update those files for profile details, navigation, skills, experience, certificates, AI work, social links, and resume paths. Put a portrait at `public/portrait.jpg` and a résumé at `public/resume.pdf`.

## EmailJS

1. Create an EmailJS service and email template.
2. Copy `.env.example` to `.env.local`.
3. Add the service ID, template ID, and public key from EmailJS.
4. Ensure the template accepts: `name`, `email`, `company`, `subject`, and `message`.

The form displays a clear fallback message if EmailJS has not been configured.

## GitHub repositories

Set `VITE_GITHUB_USERNAME` in `.env.local`. The portfolio uses the public GitHub REST API and displays recent non-fork repositories. GitHub's public REST API does not expose a user's pinned-repository order; a tokenized GraphQL integration would be needed to reproduce pins exactly.

## GitHub Pages

Commit and push the repository first, then run:

```bash
npm install
npm run deploy
```

In the GitHub repository settings, set **Pages** source to the `gh-pages` branch. The deploy command uses Git's subtree publishing, which works reliably on Windows. The Vite relative asset base is already configured for project pages.
