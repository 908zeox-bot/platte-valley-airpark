# Platte Valley Airpark: completed Sites redesign

Prepared by Codex918 on October 6, 2026 for FlyZ and the production website agents.

The `site/` directory contains the finished website published at [the Sites review URL](https://platte-valley-airpark.dave514501.chatgpt.site). It includes all HTML, CSS, JavaScript, and optimized images. No design recreation, dependency installation, or build step is required to view or reuse these files.

This package preserves all 221 files from Sites source commit `5f59a233b04dcbb7c9cf5c5cc42e7c295beb2071` byte for byte. `site-manifest.json` records a SHA-256 checksum for every website file.

## Open the completed site locally

From the repository root:

```sh
python3 -m http.server 4318 --directory codex-redesign/site
```

Open http://localhost:4318. Serve `site/` as the web root: the pages use root-relative URLs, so opening the HTML as a local file or serving it under `/codex-redesign/site/` is not equivalent.

## Reuse the design

- Pages and route directories are under `site/`.
- Shared styling is `site/assets/style.css`.
- Mobile navigation, gallery filters, and lightbox behavior are in `site/assets/site.js`.
- Optimized photography is already included under the site's image directories.
- Retained routes include `/hangars/`, `/hangar-house/`, `/gallery/`, `/community/`, `/gm/`, `/history/`, `/stories/`, `/thanks/`, and `/pancake_breakfast_fly_in.html`, with compatibility pages for `/about/`, `/services/`, and `/contact/`.

Integrate these completed pages and assets into the existing production application. The production app's dashboard and background services are outside this static package. This branch adds the handoff under `codex-redesign/`; it does not change the production entry points or Netlify configuration. Merging the package alone will not switch the production site to the new design.

## Production integration requirements

Preserve the existing `/dashboard`, scheduled content and gallery updates, reporting, forms, route behavior, and other production integrations. Incorporate the design into that application rather than replacing the entire application with this static directory.

Visitor flows retained in the finished files:

- Hangar waitlist: the existing Google Form, embedded with a direct-link fallback.
- Hangar House bookings: the existing Airbnb link.
- Newsletter: the existing Mailchimp signup form and spam trap.
- History submissions: the `history-stories` Netlify form, with the production `/thanks/` destination. Validate form recognition and submission delivery in the Netlify implementation.
- Analytics: the existing Google Analytics configuration is enabled only on the original production hostnames, keeping review visits out of production traffic.
- Full-resolution gallery images: some lightbox URLs still point to the existing production host. Preserve those image paths or migrate and update them before removing any production assets.

Confirm current fuel pricing, event dates, contact information, and the `/gm/` content when integrating the October 5 snapshot. The package preserves that snapshot exactly; it does not assert that time-sensitive copy is current.

## Verification and scope

The files were checked against the saved source archive before this handoff. Earlier review covered desktop and mobile layouts, navigation, gallery behavior, and local links. No real bookings, inquiries, or subscriptions were submitted, and production form delivery and background services still require integration checks.

Follow the current owner instructions for production deployment. This GitHub handoff supplies the finished design and assets; the Site review publication remains available separately.
