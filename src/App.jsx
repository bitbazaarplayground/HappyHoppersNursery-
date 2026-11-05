import { useEffect, useState } from 'react'
import { AboutPage } from './pages/AboutPage'
import { AdmissionsPage } from './pages/AdmissionsPage'
import { ApproachPage } from './pages/ApproachPage'
import { ArticlePage, MissingArticlePage } from './pages/ArticlePage'
import { BilingualPage } from './pages/BilingualPage'
import { ContactPage } from './pages/ContactPage'
import { CurriculumPage } from './pages/CurriculumPage'
import { FacilitiesPage } from './pages/FacilitiesPage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { NewsPage } from './pages/NewsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { SeoManager } from './components/SeoManager'
import { getArticleBySlug, getArticleTranslation, isApprovedForIndexing } from './content/articles'
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
  '/news': 'news',
}

function getCurrentRoute() {
  const path = window.location.pathname
  if (routes[path]) return { key: routes[path], path }

  const articleMatch = path.match(/^\/news\/([^/]+)\/?$/)
  if (articleMatch) {
    const article = getArticleBySlug(articleMatch[1])
    return article ? { key: 'article', path, article } : { key: 'missingArticle', path }
  }

  return { key: 'notFound', path }
}

function getStartingLanguage() {
  const storedLanguage = window.localStorage.getItem('happy-hoppers-language')
  return supportedLanguages.includes(storedLanguage) ? storedLanguage : 'en'
}

function getConfiguredSiteUrl() {
  const configuredUrl = import.meta.env.VITE_SITE_URL
  return configuredUrl ? configuredUrl.replace(/\/$/, '') : ''
}

function getSeoData(copy, language, route) {
  const siteUrl = getConfiguredSiteUrl()
  const canonicalUrl = siteUrl ? `${siteUrl}${route.path}` : null
  let title = route.key === 'home'
    ? copy.meta.title
    : `${copy.meta.pageTitles[route.key] || copy.meta.pageTitles.notFound} | ${copy.brand.name} ${copy.brand.descriptor}`
  let description = copy.meta.title
  let structuredData = null

  if (route.key === 'news') {
    title = `${copy.meta.pageTitles.news} | ${copy.brand.name} ${copy.brand.descriptor}`
    description = copy.news.description
  }

  if (route.key === 'article') {
    const articleContent = getArticleTranslation(route.article, language)
    title = articleContent.seo.title
    description = articleContent.seo.description
    if (canonicalUrl && isApprovedForIndexing(route.article)) {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: articleContent.title,
        description: articleContent.seo.description,
        inLanguage: language,
        datePublished: route.article.publicationDate,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
      }
    }
  }

  return { canonicalUrl, description, structuredData, title }
}

function App() {
  const [language, setLanguage] = useState(getStartingLanguage)
  const [route, setRoute] = useState(getCurrentRoute)
  const copy = getCopy(language)
  const seo = getSeoData(copy, language, route)

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('happy-hoppers-language', language)
  }, [language])

  useEffect(() => {
    const updateRoute = () => setRoute(getCurrentRoute())
    window.addEventListener('popstate', updateRoute)
    return () => window.removeEventListener('popstate', updateRoute)
  }, [])

  const navigate = (path) => {
    const target = new URL(path, window.location.origin)
    const nextLocation = `${target.pathname}${target.hash}`
    const currentLocation = `${window.location.pathname}${window.location.hash}`

    if (currentLocation !== nextLocation) {
      window.history.pushState({}, '', nextLocation)
      setRoute(getCurrentRoute())
    }

    window.requestAnimationFrame(() => {
      const targetElement = target.hash ? document.getElementById(target.hash.slice(1)) : null
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'auto', block: 'start' })
        targetElement.focus({ preventScroll: true })
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    })
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
    news: NewsPage,
    notFound: NotFoundPage,
  }
  const CurrentPage = pages[route.key] || NotFoundPage

  return (
    <div className="site-shell">
      <SeoManager {...seo} />
      <a className="skip-link" href="#main-content">{copy.a11y.skipToContent}</a>
      <Header
        copy={copy}
        language={language}
        navigate={navigate}
        setLanguage={setLanguage}
        route={route.key}
      />
      <main id="main-content">
        {route.key === 'article' ? (
          <ArticlePage article={route.article} articleContent={getArticleTranslation(route.article, language)} copy={copy} navigate={navigate} />
        ) : route.key === 'missingArticle' ? (
          <MissingArticlePage copy={copy} navigate={navigate} />
        ) : route.key === 'news' ? (
          <CurrentPage copy={copy} language={language} navigate={navigate} />
        ) : <CurrentPage copy={copy} navigate={navigate} />}
      </main>
      <Footer copy={copy} navigate={navigate} />
    </div>
  )
}

export default App
