# Trailblazers Ministries

> *“Go instead where there is no path, and leave a trail.”*

Official static single-page website for **Trailblazers Ministries**, built with **React 19** (standard ES6 JSX) and **Vite**, configured for automatic deployment to **GitHub Pages** on merge to `main`.

---

## Quick Start (Development Environment)

Make sure you have Node.js installed (v22+ / v24+ recommended).

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server (runs on port `5000` by default):**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5000](http://localhost:5000) in your browser. Any edits to the content or components will hot-reload automatically.

3. **Build for production:**
   ```bash
   npm run build
   ```
   This outputs the static production bundle to the `dist/` directory.

4. **Preview the production build locally (on port `5000`):**
   ```bash
   npm run preview
   ```
---

## Updating Content & Images

All website copy, scripture references, navigation items, and image mappings are centralized in a single file so you never have to dig through UI components to make text or photo updates:

- **Content File:** [`src/content/siteContent.js`](./src/content/siteContent.js)
- **Images Folder:** [`src/images/`](./src/images/)
  - `logo.png` — Trailblazers Ministries header & footer logo
  - `leaders.png` — Pastoral leadership portrait
  - `group-picture.png` — Congregation outdoor group photo
  - `group-cookout-pic.png` — Community fellowship cookout photo

To swap an image or add a new photo:
1. Place the new image file in `src/images/`.
2. Import it at the top of `src/content/siteContent.js` and reference it in the section you want to update.

---

## GitHub Pages Deployment (`main` branch)

A GitHub Actions pipeline is configured in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):

- **Trigger:** Automatically runs whenever changes are pushed or merged to the `main` branch (or triggered manually from the Actions tab).
- **One-Time GitHub Repository Setup:**
  1. Go to your GitHub repository **Settings → Pages**.
  2. Under **Build and deployment → Source**, select **GitHub Actions**.
- **Linking a Custom Domain Later:**
  - Because `vite.config.js` uses `base: './'`, the site works out-of-the-box both on `https://<username>.github.io/trailblazer-ministries/` and on a custom root domain (e.g., `https://trailblazersministries.org`).
  - When ready to link a custom domain, add a `public/CNAME` file containing your domain name and configure your DNS provider to point to GitHub Pages.
