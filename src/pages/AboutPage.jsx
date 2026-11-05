import { PageCta } from '../components/PageCta'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

export function AboutPage({ copy, navigate }) {
  const page = copy.pages.about

  return (
    <>
      <PageHero
        page={page.hero}
        navigate={navigate}
        accent="peach"
        actions={[{ ...page.cta.primary, arrow: true }]}
      />

      <section className="content-section content-section--paper">
        <div className="container editorial-grid">
          <SectionHeading eyebrow={page.story.eyebrow} title={page.story.title} intro={page.story.intro} />
          <div className="editorial-copy">
            {page.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="content-section content-section--sage">
        <div className="container">
          <SectionHeading align="center" eyebrow={page.mission.eyebrow} title={page.mission.title} />
          <div className="statement-grid">
            {page.mission.cards.map((card) => (
              <article className="statement-card" key={card.label}>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <SectionHeading eyebrow={page.environment.eyebrow} title={page.environment.title} intro={page.environment.intro} />
          <div className="principle-grid">
            {page.environment.cards.map((card, index) => (
              <article className="principle-card" key={card.title}>
                <span>0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section--dark">
        <div className="container team-preview">
          <div>
            <p className="eyebrow">{page.team.eyebrow}</p>
            <h2 className="section-title">{page.team.title}</h2>
          </div>
          <div>
            <p>{page.team.description}</p>
            <ul className="team-preview__list">
              {page.team.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <PageCta cta={page.cta} navigate={navigate} tone="peach" />
    </>
  )
}
