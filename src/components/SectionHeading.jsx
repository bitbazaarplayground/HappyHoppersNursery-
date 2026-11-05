export function SectionHeading({ align = 'left', eyebrow, intro, title }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {intro && <p className="section-lede">{intro}</p>}
    </div>
  )
}
