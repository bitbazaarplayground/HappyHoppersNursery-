import { articles, getArticleTranslation } from '../content/articles'
import { getArticleImage } from '../content/articleImages'
import { ArrowIcon } from '../components/Icons'

function ArticleCard({ article, copy, language, navigate, featured = false }) {
  const content = getArticleTranslation(article, language)
  const image = getArticleImage(article.cover)
  const path = `/news/${article.slug}`

  const handleClick = (event) => {
    event.preventDefault()
    navigate(path)
  }

  return (
    <article className={`news-card ${featured ? 'news-card--featured' : ''}`}>
      <a className="news-card__image" href={path} onClick={handleClick}>
        <img src={image.src} alt={content.coverAlt} width={image.width} height={image.height} loading={featured ? 'eager' : 'lazy'} decoding="async" fetchPriority={featured ? 'high' : 'auto'} style={{ objectPosition: image.position }} />
        <span className="concept-label">{copy.media.illustrativeCaption}</span>
      </a>
      <div className="news-card__body">
        <div className="news-card__meta">
          <span>{content.category}</span>
          <span aria-hidden="true">•</span>
          <span>{copy.news.pendingPublication}</span>
        </div>
        <p className="news-card__sample">{copy.news.sampleLabel}</p>
        <h2><a href={path} onClick={handleClick}>{content.title}</a></h2>
        <p>{content.summary}</p>
        <a className="news-card__link" href={path} onClick={handleClick}>{copy.news.readArticle}<ArrowIcon /></a>
      </div>
    </article>
  )
}

export function NewsPage({ copy, language, navigate }) {
  const [featuredArticle, ...remainingArticles] = articles

  return (
    <>
      <section className="news-hero">
        <div className="container news-hero__grid">
          <div>
            <p className="eyebrow">{copy.news.eyebrow}</p>
            <h1>{copy.news.title}</h1>
            <p>{copy.news.description}</p>
          </div>
          <div className="news-hero__motif" aria-hidden="true"><span /><i /><b /></div>
        </div>
      </section>

      <section className="news-section news-section--paper">
        <div className="container">
          <p className="eyebrow">{copy.news.featured}</p>
          <ArticleCard article={featuredArticle} copy={copy} language={language} navigate={navigate} featured />
        </div>
      </section>

      <section className="news-section news-section--cream">
        <div className="container">
          <div className="news-section__heading">
            <div>
              <p className="eyebrow">{copy.news.latest}</p>
              <h2 className="section-title">{copy.news.title}</h2>
            </div>
            <p>{copy.news.sampleLabel}</p>
          </div>
          <div className="news-card-grid">
            {remainingArticles.map((article) => <ArticleCard key={article.slug} article={article} copy={copy} language={language} navigate={navigate} />)}
          </div>
        </div>
      </section>
    </>
  )
}
