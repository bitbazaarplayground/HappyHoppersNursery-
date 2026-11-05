export function LanguageSwitcher({ copy, language, setLanguage }) {
  return (
    <div className="language-switcher" aria-label={copy.a11y.languageSelection}>
      <button type="button" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>
        {copy.languages.en}
      </button>
      <button type="button" aria-pressed={language === 'es'} onClick={() => setLanguage('es')}>
        {copy.languages.es}
      </button>
    </div>
  )
}
