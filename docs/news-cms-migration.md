# News content and CMS migration

## Current prototype model

News is intentionally local and dependency-free while the customer validates the editorial direction. The source of truth is `src/content/articles.js`; the local image lookup is separated in `src/content/articleImages.js`.

Each article follows this stable shape:

```js
{
  slug: 'url-safe-identifier',
  status: 'demo', // becomes 'published' only after approval
  publicationDate: null, // ISO date only when it is real and approved
  cover: 'local-image-key',
  translations: {
    en: { category, title, summary, coverAlt, seo: { title, description }, content },
    es: { category, title, summary, coverAlt, seo: { title, description }, content },
  },
}
```

The three current entries are educational demonstration content. They deliberately have no invented publication dates, authors, nursery announcements or claims about Happy Hoppers. Their `status` is `demo`, so the application and static HTML set `noindex, nofollow` and do not emit article JSON-LD.

## Proposed Sanity migration

When the customer has selected Sanity (or another headless CMS), retain the UI-facing helpers `getArticleBySlug`, `getArticleTranslation` and `isApprovedForIndexing`. Replace only the data provider behind them with an adapter that normalises CMS documents into the shape above.

Suggested Sanity document fields:

- `slug` — unique slug
- `status` — `draft`, `review`, or `published`
- `publicationDate` — required ISO date when `status` is `published`
- `coverImage` — CMS asset, focal point, licence record and English/Spanish alt text
- `translations.en` and `translations.es` — category, title, summary, SEO title, SEO description and portable-text body
- optional `relatedArticleSlugs`
- optional `editorialReviewNotes` — private CMS field, never rendered publicly

An adapter should reject an article from public output unless it has both language versions, a real publication date, suitable image rights/alt text, and `status: 'published'`. Do not expose draft or review documents in a public client query.

## Publication and SEO workflow

1. A named customer editor approves each translated title, body, SEO description, date and cover-asset rights.
2. The adapter changes the article to `published` and supplies the real ISO publication date.
3. Set `VITE_SITE_URL` to the confirmed canonical site origin at build time. The app will then create canonical URLs.
4. Generate `Article` JSON-LD only for approved, dated articles. The current code already gates this output.
5. Run the build-time News prerender script. It produces static HTML for `/news` and each known sample/article route, so crawler-visible article text is present before JavaScript executes.
6. For production bilingual SEO, agree a stable language URL strategy (for example `/en/news/:slug` and `/es/noticias/:slug`) before enabling indexing. The current language switcher is browser-local by design, so the prototype’s static fallback is English only.

## Why no CMS SDK is installed

No CMS vendor, schema, access policy, editorial workflow, asset-rights process or publishing owner has been approved. Keeping data local avoids exposing credentials, draft content or an unnecessary client-side SDK while preserving a clear migration seam.
