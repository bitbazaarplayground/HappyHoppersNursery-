export function InfoNotice({ badge, description, title }) {
  return (
    <aside className="info-notice">
      <span>{badge}</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </aside>
  )
}
