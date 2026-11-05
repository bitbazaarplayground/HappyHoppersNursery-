import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { articles, getArticleTranslation } from '../src/content/articles.js'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDirectory = join(projectRoot, 'dist')
const assetDirectory = join(distDirectory, 'assets')
const imageStems = {
  creativeHands: 'illustrative-creative-hands-',
  toysAndBooks: 'illustrative-toys-and-books-',
  woodenBlocks: 'illustrative-wooden-blocks-',
  artMaterials: 'illustrative-art-materials-',
}

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const assetFiles = await readdir(assetDirectory)

function imagePath(key) {
  const file = assetFiles.find((entry) => entry.startsWith(imageStems[key]))
  if (!file) throw new Error(`Unable to find built image for ${key}`)
  return `/assets/${file}`
}

function cardMarkup(article) {
  const content = getArticleTranslation(article, 'en')
  return `
    <article class="news-card">
      <a class="news-card__image" href="/news/${article.slug}">
        <img src="${imagePath(article.cover)}" alt="${escapeHtml(content.coverAlt)}" width="1600" height="1200" />
        <span class="concept-label">Illustrative stock photography — not Happy Hoppers Nursery</span>
      </a>
      <div class="news-card__body">
        <div class="news-card__meta"><span>${escapeHtml(content.category)}</span><span aria-hidden="true">•</span><span>Publication date pending approval</span></div>
        <p class="news-card__sample">Educational sample — pending editorial approval</p>
        <h2><a href="/news/${article.slug}">${escapeHtml(content.title)}</a></h2>
        <p>${escapeHtml(content.summary)}</p>
        <a class="news-card__link" href="/news/${article.slug}">Read sample article <span aria-hidden="true">→</span></a>
      </div>
    </article>`
}

function articleMarkup(article) {
  const content = getArticleTranslation(article, 'en')
  const sections = content.content.map((section) => `
    <section>
      <h2>${escapeHtml(section.heading)}</h2>
      ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
    </section>`).join('')

  return `
    <main id="main-content" class="article-page">
      <div class="container">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a class="breadcrumbs__link" href="/">Home</a><span aria-hidden="true">/</span><a class="breadcrumbs__link" href="/news">News</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(content.title)}</span></nav>
        <header class="article-page__header">
          <p class="eyebrow">Family learning note</p>
          <div class="article-page__meta"><span>${escapeHtml(content.category)}</span><span aria-hidden="true">•</span><span>Publication date pending approval</span></div>
          <p class="article-page__sample">Educational sample — pending editorial approval</p>
          <h1>${escapeHtml(content.title)}</h1>
          <p>${escapeHtml(content.summary)}</p>
        </header>
        <figure class="article-page__cover"><img src="${imagePath(article.cover)}" alt="${escapeHtml(content.coverAlt)}" width="1600" height="1200" /><figcaption>Illustrative stock photography — not Happy Hoppers Nursery</figcaption></figure>
        <div class="article-page__content">
          <aside class="info-notice"><span>Demonstration content</span><div><h3>Not a Happy Hoppers announcement</h3><p>This is a general educational sample for the website presentation. It is not a nursery update, claim about practice, or published guidance.</p></div></aside>
          ${sections}
        </div>
        <a class="article-page__back" href="/news">← Back to news</a>
      </div>
    </main>`
}

function newsMarkup() {
  const [featuredArticle, ...remainingArticles] = articles
  return `
    <main id="main-content">
      <section class="news-hero"><div class="container news-hero__grid"><div><p class="eyebrow">Notes for families</p><h1>Little things worth noticing.</h1><p>A growing library of gentle early-years reflections for families — clearly marked as editorial samples until Happy Hoppers approves its publishing plan.</p></div><div class="news-hero__motif" aria-hidden="true"><span></span><i></i><b></b></div></div></section>
      <section class="news-section news-section--paper"><div class="container"><p class="eyebrow">Featured sample</p>${cardMarkup(featuredArticle)}</div></section>
      <section class="news-section news-section--cream"><div class="container"><div class="news-section__heading"><div><p class="eyebrow">More sample articles</p><h2 class="section-title">Little things worth noticing.</h2></div><p>Educational sample — pending editorial approval</p></div><div class="news-card-grid">${remainingArticles.map(cardMarkup).join('')}</div></div></section>
    </main>`
}

function renderDocument(baseHtml, { content, description, title }) {
  return baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace('<div id="root"></div>', `<div id="root">${content}</div>`)
}

async function writeRoute(route, document) {
  const target = join(distDirectory, route, 'index.html')
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, document)
}

const baseHtml = await readFile(join(distDirectory, 'index.html'), 'utf8')
const newsDescription = 'A presentation-only library of bilingual early-years educational article samples for Happy Hoppers Nursery.'

await writeRoute('news', renderDocument(baseHtml, {
  content: newsMarkup(),
  description: newsDescription,
  title: 'News | Happy Hoppers Nursery',
}))

for (const article of articles) {
  const content = getArticleTranslation(article, 'en')
  await writeRoute(`news/${article.slug}`, renderDocument(baseHtml, {
    content: articleMarkup(article),
    description: content.seo.description,
    title: content.seo.title,
  }))
}

console.log(`Prerendered News index and ${articles.length} sample article routes.`)
