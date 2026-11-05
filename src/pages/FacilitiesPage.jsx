import artMaterialsPhoto from '../assets/photos/illustrative-art-materials.jpg'
import creativeHandsPhoto from '../assets/photos/illustrative-creative-hands.jpg'
import plantingHandsPhoto from '../assets/photos/illustrative-planting-hands.jpg'
import sunlitLeafPhoto from '../assets/photos/illustrative-sunlit-leaf.jpg'
import blocksPhoto from '../assets/photos/illustrative-wooden-blocks.jpg'
import { InfoNotice } from '../components/InfoNotice'
import { PageCta } from '../components/PageCta'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

export function FacilitiesPage({ copy, navigate }) {
  const page = copy.pages.facilities
  const image = {
    src: artMaterialsPhoto,
    alt: page.hero.imageAlt,
    label: copy.media.illustrativeCaption,
    width: 1600,
    height: 1067,
    position: '35% center',
    priority: true,
    className: 'page-hero__art--stock-materials',
  }
  const galleryPhotos = [
    { src: creativeHandsPhoto, width: 1600, height: 2399, position: 'center 58%' },
    { src: blocksPhoto, width: 1600, height: 1200, position: 'center center' },
    { src: plantingHandsPhoto, width: 1600, height: 1067, position: 'center center' },
    { src: sunlitLeafPhoto, width: 1600, height: 2501, position: 'center 47%' },
  ]

  return (
    <>
      <PageHero page={page.hero} navigate={navigate} accent="sage" image={image} actions={[{ ...page.cta.primary, arrow: true }]} />

      <section className="content-section content-section--paper">
        <div className="container">
          <SectionHeading eyebrow={page.introduction.eyebrow} title={page.introduction.title} intro={page.introduction.intro} />
          <div className="facility-zone-grid">
            {page.zones.cards.map((card, index) => (
              <article className="facility-zone-card" key={card.title}>
                <span>{`0${index + 1}`}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section--yellow">
        <div className="container">
          <SectionHeading align="center" eyebrow={page.gallery.eyebrow} title={page.gallery.title} intro={page.gallery.description} />
          <div className="gallery-photo-grid">
            {page.gallery.images.map((imageCopy, index) => (
              <figure className={`gallery-photo gallery-photo--${index + 1}`} key={imageCopy.title}>
                <img
                  src={galleryPhotos[index].src}
                  alt={imageCopy.alt}
                  width={galleryPhotos[index].width}
                  height={galleryPhotos[index].height}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: galleryPhotos[index].position }}
                />
                <figcaption>
                  <strong>{imageCopy.title}</strong>
                  <span>{copy.media.illustrativeCaption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section content-section--paper">
        <div className="container comfort-grid">
          <div><SectionHeading eyebrow={page.comfort.eyebrow} title={page.comfort.title} intro={page.comfort.description} /></div>
          <InfoNotice {...page.comfort.note} />
        </div>
      </section>

      <PageCta cta={page.cta} navigate={navigate} tone="sage" />
    </>
  )
}
