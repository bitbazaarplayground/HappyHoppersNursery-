import { LinkButton } from './LinkButton'

export function PageCta({ cta, navigate, tone = 'sage' }) {
  return (
    <section className="page-cta">
      <div className={`container page-cta__panel page-cta__panel--${tone}`}>
        <div>
          <p className="eyebrow">{cta.eyebrow}</p>
          <h2 className="section-title section-title--small">{cta.title}</h2>
          <p className="section-lede">{cta.description}</p>
        </div>
        <div className="cta-actions">
          <LinkButton navigate={navigate} path={cta.primary.path} arrow>{cta.primary.label}</LinkButton>
          {cta.secondary && <LinkButton navigate={navigate} path={cta.secondary.path} variant="light">{cta.secondary.label}</LinkButton>}
        </div>
      </div>
    </section>
  )
}
