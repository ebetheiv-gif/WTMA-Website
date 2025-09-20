# WTMA Static Site Starter
Multi-page static site (free to host on GitHub Pages/Netlify). Pages:
- `index.html` — Home (Background, History, Team)
- `projects.html` — Projects (Current, Former, Future)
- `news.html` — News (add more posts by duplicating article blocks)
- `contact.html` — Contact

## Deploy on GitHub Pages
1. Create a new public repo (e.g., `wtma-site`).
2. Upload all files at repo root.
3. Settings → Pages → Build and deployment: Source = Deploy from a branch; Branch = main / root.
4. Site will publish at `https://<username>.github.io/wtma-site/`.

## Editing
- Replace text in HTML files.
- Swap `assets/banner.jpg` and `assets/logo.png`.
- Colors/fonts in `style.css` (`:root` vars).

## Notes
- Sub-navigation on pages is sticky and scrolls to on-page sections.
- Add more project cards/news posts by duplicating the block markup.
