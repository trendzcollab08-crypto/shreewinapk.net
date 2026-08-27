# Hostinger deployment

This project is a Next.js 16 Node.js application. It is not a static `public_html` upload.

## Hostinger application settings

- Node.js version: `22.x`
- Package manager: `npm`
- Install command: `npm ci`
- Build command: `npm run build`
- Start command: `npm start`
- Application root: repository root
- Production branch: `main`

Hostinger should run a new build whenever the connected GitHub repository receives a push to `main`.

## Environment variables

Add these public values in the Hostinger application settings if they need to differ from the defaults:

- `NEXT_PUBLIC_SITE_URL=https://shreewinapk.net`
- `NEXT_PUBLIC_LOGIN_URL=https://shreewin1.com`
- `NEXT_PUBLIC_REGISTER_URL=https://shreewin1.com`

Do not upload `.env` files or commit secrets. The repository contains only `.env.example`, which documents public configuration and contains no credentials.

## Local production check

Run `npm ci`, `npm run build`, and `npm start`. Next.js serves all app routes, redirects, `robots.txt`, `sitemap.xml`, images and the custom 404 page from the Node.js application.
