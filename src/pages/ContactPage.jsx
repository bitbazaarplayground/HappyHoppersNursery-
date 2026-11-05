import { InfoNotice } from '../components/InfoNotice'
import { PageCta } from '../components/PageCta'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

export function ContactPage({ copy, navigate }) {
  const page = copy.pages.contact

  return (
    <>
      <PageHero page={page.hero} navigate={navigate} accent="sage" motif="contact" />

      <section className="content-section content-section--paper">
        <div className="container">
          <SectionHeading eyebrow={page.routes.eyebrow} title={page.routes.title} />
          <div className="contact-route-grid">
            {page.routes.cards.map((card, index) => (
              <article className="contact-route-card" key={card.title}>
                <span>{`0${index + 1}`}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a href="#contact-preview" className="contact-route-card__action">{card.action}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section--dark">
        <div className="container contact-details-grid">
          <div><SectionHeading eyebrow={page.details.eyebrow} title={page.details.title} intro={page.details.intro} /></div>
          <dl className="contact-detail-list">
            {page.details.items.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}
          </dl>
        </div>
      </section>

      <section id="contact-preview" className="content-section content-section--peach">
        <div className="container form-preview-grid">
          <div><SectionHeading eyebrow={page.form.eyebrow} title={page.form.title} intro={page.form.description} /></div>
          <div>
            <form className="form-preview" aria-label={page.form.title}>
              {page.form.fields.map((field, index) => (
                <label key={field}>{field}<input type={index === 2 ? 'text' : index === 1 ? 'email' : 'text'} disabled placeholder={field} /></label>
              ))}
              <button type="button" disabled>{page.form.action}</button>
            </form>
            <InfoNotice {...page.form.note} />
          </div>
        </div>
      </section>

      <section className="content-section content-section--paper">
        <div className="container location-grid">
          <div><SectionHeading eyebrow={page.location.eyebrow} title={page.location.title} intro={page.location.description} /></div>
          <div className="map-placeholder" role="img" aria-label={page.location.label}><span>{page.location.label}</span></div>
        </div>
      </section>

      <PageCta cta={page.cta} navigate={navigate} tone="sage" />
    </>
  )
}
