import { BrandIcon } from './Icons'

export function Brand({ copy, navigate }) {
  const handleClick = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <a className="brand" href="/" onClick={handleClick} aria-label={copy.a11y.homeLink}>
      <span className="brand-mark"><BrandIcon /></span>
      <span className="brand-name">
        <strong>{copy.brand.name}</strong>
        <span>{copy.brand.descriptor}</span>
      </span>
    </a>
  )
}
