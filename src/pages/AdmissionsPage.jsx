import { FaqList } from '../components/FaqList'
import { InfoNotice } from '../components/InfoNotice'
import { PageCta } from '../components/PageCta'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

export function AdmissionsPage({ copy, navigate }) {
  const page = copy.pages.admissions

  return (
    <>
      <PageHero page={page.hero} navigate={navigate} accent="peach" motif="admissions" actions={[{ ...page.cta.primary, arrow: true }]} />

      <section className="content-section content-section--paper">
        <div className="container admissions-intro">
          <SectionHeading eyebrow={page.introduction.eyebrow} title={page.introduction.title} intro={page.introduction.intro} />
          <InfoNotice {...page.introduction.notice} />
        </div>
      </section>

      <section className="content-section content-section--sage">
        <div className="container">
          <SectionHeading eyebrow={page.process.eyebrow} title={page.process.title} intro={page.process.description} />
          <ol className="admissions-steps">
            {page.process.steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-section content-section--paper">
        <div className="container information-grid">
          {page.information.cards.map((card) => (
            <article className="information-card" key={card.label}>
              <span>{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section content-section--yellow">
        <div className="container faq-section">
          <SectionHeading eyebrow={page.faq.eyebrow} title={page.faq.title} />
          <FaqList items={page.faq.items} />
        </div>
      </section>

      <PageCta cta={page.cta} navigate={navigate} tone="peach" />
    </>
  )
}
