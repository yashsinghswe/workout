# Yash Strength

Offline-capable Progressive Web App for the latest uploaded workout plan.

## Files

- `index.html`: full six-month workout plan. Its month, week, day, guide and weight-table navigation remains CSS-only.
- `manifest.webmanifest`: Home Screen app metadata.
- `sw.js`: service worker that caches the app shell for offline use.
- `pwa-register.js`: small local service-worker registration script.
- `icons/`: custom Yash Strength gym icon.
- `.nojekyll`: prevents GitHub Pages from running Jekyll processing.

No frameworks, CDNs, remote stylesheets, or external fonts are required. The only JavaScript is the local service-worker registration and offline cache. External research links in the workout plan still require an internet connection.

## Publish on GitHub Pages

This repository is configured for:

https://yashsinghswe.github.io/workout/

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then save.
4. Wait for the Pages deployment to finish.
5. Open the URL above in Safari on your iPhone.
6. Tap **Share → Add to Home Screen**, enable **Open as Web App** if offered, then tap **Add**.
7. Launch the app once while online, wait for it to finish loading, then test it with Airplane Mode enabled.

## Offline behaviour

The service worker caches the workout plan, manifest, registration script, and app icons. The complete plan and its CSS-only navigation work offline after the first successful online load and service-worker installation. External source links still need internet access.

This is a PWA, not a signed IPA. Apple's seven-day free developer signing expiry does not apply.

## Updating the plan

When deploying a new version, increment `CACHE_NAME` in `sw.js` (for example, from `v2` to `v3`) so existing installs download the new cached app shell.
