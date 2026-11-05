import { PageCta } from '../components/PageCta'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

export function ApproachPage({ copy, navigate }) {
  const page = copy.pages.approach

  return (
    <>
      <PageHero page={page.hero} navigate={navigate} accent="sage" motif="arch" actions={[{ ...page.cta.primary, arrow: true }]} />

      <section className="content-section content-section--paper">
        <div className="container">
          <SectionHeading eyebrow={page.philosophy.eyebrow} title={page.philosophy.title} intro={page.philosophy.intro} />
          <div className="process-grid">
            {page.philosophy.steps.map((step) => (
              <article className="process-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section--yellow">
        <div className="container">
          <SectionHeading align="center" eyebrow={page.values.eyebrow} title={page.values.title} />
          <div className="four-card-grid">
            {page.values.cards.map((card) => (
              <article className="soft-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section--paper">
        <div className="container playful-section">
          <div className="playful-section__title">
            <SectionHeading eyebrow={page.play.eyebrow} title={page.play.title} intro={page.play.intro} />
          </div>
          <div className="playful-section__cards">
            {page.play.cards.map((card) => (
              <article className="play-card" key={card.title}>
                <span aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section--peach">
        <div className="container centred-copy">
          <SectionHeading align="center" eyebrow={page.development.eyebrow} title={page.development.title} intro={page.development.description} />
        </div>
      </section>

      <PageCta cta={page.cta} navigate={navigate} tone="sage" />
    </>
  )
}
