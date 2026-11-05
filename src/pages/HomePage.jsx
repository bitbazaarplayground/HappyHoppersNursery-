import bilingualArtwork from '../assets/bilingual-concept.svg'
import heroPhoto from '../assets/photos/illustrative-creative-hands.jpg'
import spacesArtwork from '../assets/spaces-concept.svg'
import { HeartIcon, LeafIcon, SparkIcon, SpeechIcon } from '../components/Icons'
import { LinkButton, TextLink } from '../components/LinkButton'

const icons = { spark: SparkIcon, leaf: LeafIcon, speech: SpeechIcon }

function ConceptImage({ alt, className, height, label, priority = false, src, width }) {
  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <span className="concept-label">{label}</span>
    </div>
  )
}

export function HomePage({ copy, navigate }) {
  const { home } = copy

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{home.hero.eyebrow}</p>
            <h1>{home.hero.titleStart}<em>{home.hero.titleEmphasis}</em>{home.hero.titleEnd}</h1>
            <p className="hero-intro">{home.hero.description}</p>
            <div className="hero-actions">
              <LinkButton navigate={navigate} path="/contact-us" arrow>{copy.common.bookVisit}</LinkButton>
              <LinkButton navigate={navigate} path="/about-us" variant="light">{copy.common.discover}</LinkButton>
            </div>
            <p className="hero-note"><HeartIcon />{home.hero.note}</p>
          </div>
          <div className="hero-art">
            <ConceptImage
              className="hero-image"
              src={heroPhoto}
              alt={home.hero.photoAlt}
              label={copy.media.illustrativeCaption}
              width="1600"
              height="2399"
              priority
            />
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">{home.intro.eyebrow}</p>
            <p className="display-copy">{home.intro.statementStart}<span>{home.intro.statementEmphasis}</span>{home.intro.statementEnd}</p>
          </div>
          <p className="intro-detail">{home.intro.detail}</p>
        </div>
      </section>

      <section className="bilingual-section">
        <div className="container feature-grid">
          <div className="feature-visual">
            <ConceptImage className="feature-image" src={bilingualArtwork} alt={home.bilingual.artAlt} label={home.bilingual.artLabel} width="800" height="700" />
          </div>
          <div className="feature-content">
            <p className="eyebrow">{home.bilingual.eyebrow}</p>
            <h2 className="section-title">{home.bilingual.title}</h2>
            <p className="section-lede">{home.bilingual.description}</p>
            <div className="language-pills">
              <span className="language-pill language-pill--english">{home.bilingual.english}</span>
              <span className="language-pill language-pill--spanish">{home.bilingual.spanish}</span>
            </div>
            <TextLink navigate={navigate} path="/bilingual-education">{home.bilingual.link}</TextLink>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <p className="eyebrow">{home.values.eyebrow}</p>
            <h2 className="section-title">{home.values.title}</h2>
            <p className="section-lede">{home.values.description}</p>
          </div>
          <div className="value-grid">
            {home.values.cards.map((card) => (
              <article className="value-card" key={card.number}>
                <span className="value-number">{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="learning-section">
        <div className="container">
          <div className="learning-heading">
            <div>
              <p className="eyebrow">{home.learning.eyebrow}</p>
              <h2 className="section-title">{home.learning.title}</h2>
            </div>
            <p className="section-lede">{home.learning.description}</p>
          </div>
          <div className="learning-grid">
            {home.learning.cards.map((card) => {
              const Icon = icons[card.icon]
              return (
                <article className="learning-card" key={card.title} style={{ '--card-accent': card.color }}>
                  <span className="card-mark"><Icon /></span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="spaces-section">
        <div className="container spaces-grid">
          <div className="spaces-content">
            <p className="eyebrow">{home.spaces.eyebrow}</p>
            <h2 className="section-title">{home.spaces.title}</h2>
            <p className="section-lede">{home.spaces.description}</p>
            <div className="cta-actions"><TextLink navigate={navigate} path="/our-facilities">{home.spaces.link}</TextLink></div>
          </div>
          <div className="spaces-image-wrap">
            <ConceptImage className="spaces-image" src={spacesArtwork} alt={home.spaces.artAlt} label={home.spaces.artLabel} width="800" height="700" />
          </div>
        </div>
      </section>

      <section className="admissions-section">
        <div className="container">
          <div className="admissions-panel">
            <div className="admissions-copy">
              <p className="eyebrow">{home.admissions.eyebrow}</p>
              <h2 className="section-title section-title--small">{home.admissions.title}</h2>
              <p className="section-lede">{home.admissions.description}</p>
              <div className="cta-actions">
                <LinkButton navigate={navigate} path="/contact-us" arrow>{home.admissions.primary}</LinkButton>
                <LinkButton navigate={navigate} path="/fees-and-admissions" variant="light">{home.admissions.secondary}</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
