import { useEffect } from 'react'

function updateMeta(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.name = name
    document.head.append(element)
  }
  element.content = content
}

export function SeoManager({ canonicalUrl, description, structuredData, title }) {
  useEffect(() => {
    document.title = title
    updateMeta('description', description)
    // The entire presentation remains a customer-review prototype. This explicitly protects sample News content from indexing.
    updateMeta('robots', 'noindex, nofollow')

    const existingCanonical = document.head.querySelector('link[rel="canonical"]')
    if (canonicalUrl) {
      const canonical = existingCanonical || document.createElement('link')
      canonical.rel = 'canonical'
      canonical.href = canonicalUrl
      if (!existingCanonical) document.head.append(canonical)
    } else if (existingCanonical) {
      existingCanonical.remove()
    }

    const existingStructuredData = document.getElementById('happy-hoppers-structured-data')
    if (existingStructuredData) existingStructuredData.remove()
    if (structuredData) {
      const script = document.createElement('script')
      script.id = 'happy-hoppers-structured-data'
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.append(script)
    }
  }, [canonicalUrl, description, structuredData, title])

  return null
}
