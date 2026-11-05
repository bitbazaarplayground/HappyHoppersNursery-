import { getArticleImage } from '../content/articleImages'
import { InfoNotice } from '../components/InfoNotice'
import { ArrowIcon } from '../components/Icons'

function InternalLink({ children, navigate, path, className }) {
  const handleClick = (event) => {
    event.preventDefault()
    navigate(path)
  }

  return <a className={className} href={path} onClick={handleClick}>{children}</a>
}

export function ArticlePage({ article, articleContent, copy, navigate }) {
  const image = getArticleImage(article.cover)

  return (
    <article className="article-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label={copy.a11y.breadcrumbs}>
          <InternalLink navigate={navigate} path="/" className="breadcrumbs__link">{copy.news.breadcrumbs.home}</InternalLink>
          <span aria-hidden="true">/</span>
          <InternalLink navigate={navigate} path="/news" className="breadcrumbs__link">{copy.news.breadcrumbs.news}</InternalLink>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{articleContent.title}</span>
        </nav>

        <header className="article-page__header">
          <p className="eyebrow">{copy.news.articleEyebrow}</p>
          <div className="article-page__meta">
            <span>{articleContent.category}</span>
            <span aria-hidden="true">•</span>
            <span>{copy.news.pendingPublication}</span>
          </div>
          <p className="article-page__sample">{copy.news.sampleLabel}</p>
          <h1>{articleContent.title}</h1>
          <p>{articleContent.summary}</p>
        </header>

        <figure className="article-page__cover">
          <img src={image.src} alt={articleContent.coverAlt} width={image.width} height={image.height} fetchPriority="high" style={{ objectPosition: image.position }} />
          <figcaption>{copy.media.illustrativeCaption}</figcaption>
        </figure>

        <div className="article-page__content">
          <InfoNotice {...copy.news.articleNotice} />
          {articleContent.content.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>

        <InternalLink navigate={navigate} path="/news" className="article-page__back"><ArrowIcon />{copy.news.backToNews}</InternalLink>
      </div>
    </article>
  )
}

export function MissingArticlePage({ copy, navigate }) {
  return (
    <section className="not-found-page">
      <div className="not-found-page__panel">
        <span>—</span>
        <p className="eyebrow">{copy.news.missing.eyebrow}</p>
        <h1>{copy.news.missing.title}</h1>
        <p>{copy.news.missing.description}</p>
        <InternalLink navigate={navigate} path="/news" className="button button--dark">{copy.news.missing.action}</InternalLink>
      </div>
    </section>
  )
}
