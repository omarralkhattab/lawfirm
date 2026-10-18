# Independent IT Services — first website version

A responsive, static freelance IT services website built with plain HTML, CSS, and JavaScript. No build tools, paid services, or dependencies are required.

## Preview locally

1. Extract the ZIP (if using the packaged version).
2. Open `index.html` in a browser.

For a local development server, run this from the project folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing

- Replace `Independent IT Services` with your preferred brand/name.
- In `script.js`, replace `YOUR_EMAIL@example.com` with a contact email you want clients to use.
- Update the description and services so they accurately reflect your experience.
- Do not include employer data, customer information, confidential screenshots, or proprietary scripts in the portfolio.
- Test the contact form. It opens a pre-filled email draft; it does not send data to a server.

## Free hosting option: GitHub Pages

1. Create a GitHub account if needed.
2. Create a new public repository, for example `it-services-portfolio`.
3. Upload `index.html`, `styles.css`, and `script.js` to the repository root (the README can also be included).
4. Open **Settings → Pages**.
5. Under the build/deployment section, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
6. Wait for GitHub Pages to publish the site. The URL will be shown in the Pages settings.

GitHub's interface may change; use its current Pages instructions if labels differ. You can start with the free default URL and decide about a custom domain later.

## Files

- `index.html` — page content and sections
- `styles.css` — responsive design and visual styles
- `script.js` — mobile navigation, service preselection, and contact form behavior
