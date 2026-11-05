import { useEffect, useState } from 'react'
import { AboutPage } from './pages/AboutPage'
import { AdmissionsPage } from './pages/AdmissionsPage'
import { ApproachPage } from './pages/ApproachPage'
import { BilingualPage } from './pages/BilingualPage'
import { ContactPage } from './pages/ContactPage'
import { CurriculumPage } from './pages/CurriculumPage'
import { FacilitiesPage } from './pages/FacilitiesPage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { getCopy, supportedLanguages } from './content/translations'
import './App.css'

const routes = {
  '/': 'home',
  '/about-us': 'about',
  '/our-approach-and-values': 'approach',
  '/bilingual-education': 'bilingual',
  '/our-curriculum-and-learning': 'curriculum',
  '/our-facilities': 'facilities',
  '/fees-and-admissions': 'admissions',
  '/contact-us': 'contact',
}

function getCurrentRoute() {
  return routes[window.location.pathname] || 'notFound'
}

function getStartingLanguage() {
  const storedLanguage = window.localStorage.getItem('happy-hoppers-language')
  return supportedLanguages.includes(storedLanguage) ? storedLanguage : 'en'
}

function App() {
  const [language, setLanguage] = useState(getStartingLanguage)
  const [route, setRoute] = useState(getCurrentRoute)
  const copy = getCopy(language)
  const pageTitle = route === 'home'
    ? copy.meta.title
    : `${copy.meta.pageTitles[route]} | ${copy.brand.name} ${copy.brand.descriptor}`

  useEffect(() => {
    document.documentElement.lang = language
    document.title = pageTitle
    window.localStorage.setItem('happy-hoppers-language', language)
  }, [language, pageTitle])

  useEffect(() => {
    const updateRoute = () => setRoute(getCurrentRoute())
    window.addEventListener('popstate', updateRoute)
    return () => window.removeEventListener('popstate', updateRoute)
  }, [])

  const navigate = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
      setRoute(routes[path] || 'notFound')
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  const pages = {
    home: HomePage,
    about: AboutPage,
    approach: ApproachPage,
    bilingual: BilingualPage,
    curriculum: CurriculumPage,
    facilities: FacilitiesPage,
    admissions: AdmissionsPage,
    contact: ContactPage,
    notFound: NotFoundPage,
  }
  const CurrentPage = pages[route] || NotFoundPage

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{copy.a11y.skipToContent}</a>
      <Header
        copy={copy}
        language={language}
        navigate={navigate}
        setLanguage={setLanguage}
        route={route}
      />
      <main id="main-content"><CurrentPage copy={copy} navigate={navigate} /></main>
      <Footer copy={copy} navigate={navigate} />
    </div>
  )
}

export default App
