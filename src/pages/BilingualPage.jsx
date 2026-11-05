import { InfoNotice } from '../components/InfoNotice'
import { PageCta } from '../components/PageCta'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import toysAndBooksPhoto from '../assets/photos/illustrative-toys-and-books.jpg'

export function BilingualPage({ copy, navigate }) {
  const page = copy.pages.bilingual

  return (
    <>
      <PageHero
        page={page.hero}
        navigate={navigate}
        accent="yellow"
        motif="language"
        image={{
          src: toysAndBooksPhoto,
          alt: page.hero.imageAlt,
          label: copy.media.illustrativeCaption,
          width: 1600,
          height: 2400,
        position: 'center 72%',
          priority: true,
          className: 'page-hero__art--stock-books',
        }}
        actions={[{ ...page.cta.primary, arrow: true }]}
      />

      <section className="content-section content-section--paper">
        <div className="container bilingual-intro">
          <div className="bilingual-intro__visual" aria-hidden="true"><span>English</span><span>Español</span><i /></div>
          <div>
            <SectionHeading eyebrow={page.introduction.eyebrow} title={page.introduction.title} intro={page.introduction.intro} />
            <p className="detail-copy">{page.introduction.description}</p>
          </div>
        </div>
      </section>

      <section className="content-section content-section--sage">
        <div className="container">
          <SectionHeading eyebrow={page.activities.eyebrow} title={page.activities.title} />
          <InfoNotice {...page.activities.notice} />
          <div className="language-activity-grid">
            {page.activities.cards.map((card) => (
              <article className="language-activity-card" key={card.label}>
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
          <SectionHeading align="center" eyebrow={page.benefits.eyebrow} title={page.benefits.title} intro={page.benefits.intro} />
          <div className="principle-grid principle-grid--soft">
            {page.benefits.cards.map((card, index) => (
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
        <div className="container day-section">
          <div className="day-section__heading">
            <p className="eyebrow">{page.day.eyebrow}</p>
            <h2 className="section-title">{page.day.title}</h2>
            <p>{page.day.note}</p>
          </div>
          <ol className="day-list">
            {page.day.moments.map((moment) => (
              <li key={moment.time}>
                <span>{moment.time}</span>
                <div><h3>{moment.title}</h3><p>{moment.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PageCta cta={page.cta} navigate={navigate} tone="yellow" />
    </>
  )
}
