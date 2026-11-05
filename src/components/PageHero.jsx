import { ArrowIcon, SparkIcon } from './Icons'
import { LinkButton } from './LinkButton'

export function PageHero({ accent = 'sage', actions, image, motif = 'arch', navigate, page }) {
  return (
    <section className={`page-hero page-hero--${accent}`}>
      <div className="container page-hero__grid">
        <div className="page-hero__copy">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="page-hero__intro">{page.description}</p>
          {page.draftNote && <p className="draft-note"><SparkIcon />{page.draftNote}</p>}
          {actions && (
            <div className="hero-actions">
              {actions.map((action) => (
                <LinkButton key={action.path} navigate={navigate} path={action.path} variant={action.variant} arrow={action.arrow}>
                  {action.label}
                </LinkButton>
              ))}
            </div>
          )}
        </div>
        <div className={`page-hero__art page-hero__art--${motif} ${image?.className || ''}`} aria-hidden={image ? undefined : 'true'}>
          {image ? (
            <>
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={image.priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={image.priority ? 'high' : 'auto'}
                style={image.position ? { objectPosition: image.position } : undefined}
              />
              <span className="concept-label">{image.label}</span>
            </>
          ) : <HeroMotif type={motif} />}
        </div>
      </div>
    </section>
  )
}

function HeroMotif({ type }) {
  if (type === 'language') {
    return <div className="hero-motif hero-motif--language"><span>Hola</span><span>Hello</span><i /><b /></div>
  }

  if (type === 'learning') {
    return <div className="hero-motif hero-motif--learning"><i /><i /><i /><b><ArrowIcon /></b></div>
  }

  if (type === 'admissions') {
    return <div className="hero-motif hero-motif--admissions"><span>01</span><span>02</span><span>03</span><i /></div>
  }

  if (type === 'contact') {
    return <div className="hero-motif hero-motif--contact"><i /><b /><span /></div>
  }

  return <div className="hero-motif hero-motif--arch"><i /><b /><span /></div>
}
