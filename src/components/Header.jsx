import { useState } from 'react'
import { getNavigation } from '../content/translations'
import { Brand } from './Brand'
import { LanguageSwitcher } from './LanguageSwitcher'
import { LinkButton } from './LinkButton'
import { MenuIcon } from './Icons'

function Navigation({ copy, navigate, route, closeMenu }) {
  const handleClick = (event, path) => {
    event.preventDefault()
    navigate(path)
    closeMenu?.()
  }

  return (
    <ul className="nav-list">
      {getNavigation(copy).map((item) => (
        <li key={item.key}>
          <a
            className="nav-link"
            href={item.path}
            aria-current={route === item.key ? 'page' : undefined}
            onClick={(event) => handleClick(event, item.path)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Header({ copy, language, navigate, setLanguage, route }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand copy={copy} navigate={navigate} />
        <nav className="desktop-navigation" aria-label={copy.a11y.mainNavigation}>
          <Navigation copy={copy} navigate={navigate} route={route} />
        </nav>
        <div className="header-actions">
          <LanguageSwitcher copy={copy} language={language} setLanguage={setLanguage} />
          <LinkButton navigate={navigate} path="/contact-us" variant="dark">{copy.common.bookVisit}</LinkButton>
        </div>
        <div className="mobile-controls">
          <LanguageSwitcher copy={copy} language={language} setLanguage={setLanguage} />
          <button
            className="menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? copy.a11y.closeMenu : copy.a11y.openMenu}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <MenuIcon open={isMenuOpen} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label={copy.a11y.mainNavigation}>
          <Navigation copy={copy} navigate={navigate} route={route} closeMenu={() => setIsMenuOpen(false)} />
          <LinkButton navigate={navigate} path="/contact-us" variant="dark">{copy.common.bookVisit}</LinkButton>
        </nav>
      )}
    </header>
  )
}
