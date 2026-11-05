import { InfoNotice } from '../components/InfoNotice'
import { PageCta } from '../components/PageCta'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import blocksPhoto from '../assets/photos/illustrative-wooden-blocks.jpg'

export function CurriculumPage({ copy, navigate }) {
  const page = copy.pages.curriculum

  return (
    <>
      <PageHero
        page={page.hero}
        navigate={navigate}
        accent="yellow"
        motif="learning"
        image={{
          src: blocksPhoto,
          alt: page.hero.imageAlt,
          label: copy.media.illustrativeCaption,
          width: 1600,
          height: 1200,
          position: 'center center',
          priority: true,
          className: 'page-hero__art--stock-blocks',
        }}
        actions={[{ ...page.cta.primary, arrow: true }]}
      />

      <section className="content-section content-section--paper">
        <div className="container">
          <SectionHeading eyebrow={page.overview.eyebrow} title={page.overview.title} intro={page.overview.intro} />
          <InfoNotice {...page.overview.notice} />
          <div className="learning-areas-grid">
            {page.areas.cards.map((card) => (
              <article className={`learning-area-card learning-area-card--${card.group}`} key={card.title}>
                <span>{card.group === 'prime' ? page.areas.primeLabel : page.areas.specificLabel}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section--sage">
        <div className="container">
          <SectionHeading align="center" eyebrow={page.experiences.eyebrow} title={page.experiences.title} />
          <div className="experience-grid">
            {page.experiences.cards.map((card, index) => (
              <article className="experience-card" key={card.title}>
                <span>{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section--peach">
        <div className="container centred-copy">
          <SectionHeading align="center" eyebrow={page.readiness.eyebrow} title={page.readiness.title} intro={page.readiness.description} />
        </div>
      </section>

      <PageCta cta={page.cta} navigate={navigate} tone="yellow" />
    </>
  )
}
