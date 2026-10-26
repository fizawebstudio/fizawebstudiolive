# fiza-web-studio

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-lk6jprrp)

## SEO and deployment

This is a single-page Vite/React site. Its navigation links to sections on the homepage; those section fragments and portfolio cards do not have separate page URLs. The sitemap therefore lists only the canonical homepage. The production build prerenders the homepage HTML for crawlers and hydrates it in the browser. Vercel preview builds receive a `noindex, nofollow` directive.

```sh
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```

After deploying to production, submit `https://fizawebstudio.vercel.app/sitemap.xml` in Google Search Console. To verify the URL-prefix property, add `https://fizawebstudio.vercel.app/` in Search Console, copy the verification meta-tag value it provides, add that real token to `index.html`, then build and deploy again. No verification token is committed to this project.
