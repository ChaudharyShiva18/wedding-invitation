# Shiva & Nikita — Wedding Site (`#vani`)

A single-page, config-driven wedding website celebrating Shiva & Nikita on **12 December 2026** in Dehradun, Uttarakhand. Built with Vite, React, Tailwind CSS v4, and Motion, and deployed to GitHub Pages.

**[Visit the live website](https://chaudharyshiva18.github.io/wedding-invitation/)**

## Features

- **Config-driven content** — all text, schedule details, venue links, social handles, and gallery entries live in `src/data/site.config.js`.
- **Ruby default theme** — ships with five selectable palettes (`ruby`, `marigold`, `emerald`, `sapphire`, `lotus`).
- **Scroll-reveal animations** — below-the-fold sections glide into view smoothly as guests scroll.
- **Background music** — attempts playback on load with a first-interaction fallback (tap, click, or keypress) and a floating mute/play control.
- **Lightweight map embed** — uses a click-to-load Google Maps facade so the page stays fast on mobile networks.
- **Clean single-page flow** — bottom navigation bar removed for an uncluttered mobile reading experience, with clickable Instagram tags in the footer.

## Edit the site

All guest-facing content lives in **one file**:

[`src/data/site.config.js`](src/data/site.config.js)

Update names, hashtag (`#vani`), countdown target (`weddingDateIso`), invitation story, event line-up, venue details, photos, music path, Instagram handles, footer text, and `defaultTheme` there.

Make sure `siteUrl` and `meta` in `site.config.js` point to `https://chaudharyshiva18.github.io/wedding-invitation/` so WhatsApp and Open Graph link previews render properly.

## Photos & music

### Swap photos

1. Place image files inside `public/photos/` (JPG, JPEG, PNG, or WebP).
2. Update `gallery.photos` in `src/data/site.config.js` with each file's `src`, descriptive `alt`, `width`, and `height`.
3. Keep `src` relative to `public/` (for example, `photos/1.jpeg`).

### Background music

Replace `public/music/celebration.wav` or update `music.src` in `src/data/site.config.js` (a compressed `.mp3` is recommended for faster mobile loading). Because modern mobile browsers block unmuted autoplay before user interaction, `MusicToggle.jsx` attempts autoplay on load and automatically starts playback on the guest's first tap, click, or keypress unless manually paused.

## Preview themes

Palettes are defined in `site.themes`, with `defaultTheme` set to `ruby`.

Preview any theme locally or live by appending a query parameter:

`http://localhost:5173/?theme=marigold`

Available theme IDs: `ruby`, `marigold`, `emerald`, `sapphire`, `lotus`.

## Run locally

```bash
npm install
npm run dev
