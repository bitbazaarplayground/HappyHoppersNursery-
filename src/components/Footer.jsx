import { getNavigation } from '../content/translations'
import { Brand } from './Brand'

export function Footer({ copy, navigate }) {
  const footerNavigation = [
    ...getNavigation(copy).filter((item) => item.key !== 'home'),
    { key: 'contact', path: '/contact-us', label: copy.common.contactUs },
  ]
  const handleClick = (event, path) => {
    event.preventDefault()
    navigate(path)
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand copy={copy} navigate={navigate} />
            <p className="footer-summary">{copy.footer.summary}</p>
          </div>
          <div>
            <h2 className="footer-nav-title">{copy.footer.explore}</h2>
            <ul className="footer-links">
              {footerNavigation.map((item) => (
                <li key={item.key}><a className="footer-link" href={item.path} onClick={(event) => handleClick(event, item.path)}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="footer-note-title">{copy.footer.noteTitle}</h2>
            <p className="footer-note">{copy.footer.note}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{copy.footer.copyright}</span>
          <span>{copy.footer.assets}</span>
        </div>
      </div>
    </footer>
  )
}
