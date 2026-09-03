# Hostinger deployment

## Standard Git deployment

The `source` branch contains the editable Next.js project. GitHub Actions builds
a fully static export and publishes only the generated website files to `main`.
Hostinger Advanced Git deployment should stay connected to `main`. That branch
has `index.html` at its root and needs no Node.js, Composer or npm commands on
Hostinger.

Make content and code changes on `source`. Every push to `source` refreshes
`main` automatically. The workflow runs `npm run build:static`; normal
`npm run build` remains available for local validation and the Node.js Web App
alternative.

## Node.js Web App alternative

This project is a Next.js 16 Node.js application. It is not a static `public_html` upload.

## Hostinger application settings

- Node.js version: `22.x`
- Package manager: `npm`
- Install command: `npm ci`
- Build command: `npm run build`
- Start command: `npm start`
- Application root: repository root
- Production branch: `source`

This alternative requires a separate Node.js application. The standard Hostinger
Git deployment for this project uses the generated static `main` branch.

## Environment variables

Add these public values in the Hostinger application settings if they need to differ from the defaults:

- `NEXT_PUBLIC_SITE_URL=https://shreewinapk.net`
- `NEXT_PUBLIC_LOGIN_URL=https://www.shreewin.org/#/register?invitationCode=53541148121`
- `NEXT_PUBLIC_REGISTER_URL=https://www.shreewin.org/#/register?invitationCode=53541148121`

Do not upload `.env` files or commit secrets. The repository contains only `.env.example`, which documents public configuration and contains no credentials.

## Local production check

Run `npm ci`, `npm run build`, and `npm start`. Next.js serves all app routes, redirects, `robots.txt`, `sitemap.xml`, images and the custom 404 page from the Node.js application.
