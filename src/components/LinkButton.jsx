import { ArrowIcon } from './Icons'

export function LinkButton({ children, navigate, path, variant = 'dark', arrow = false, onClick }) {
  const handleClick = (event) => {
    event.preventDefault()
    navigate(path)
    onClick?.()
  }

  return (
    <a className={`button button--${variant}`} href={path} onClick={handleClick}>
      {children}
      {arrow && <ArrowIcon />}
    </a>
  )
}

export function TextLink({ children, navigate, path }) {
  const handleClick = (event) => {
    event.preventDefault()
    navigate(path)
  }

  return <a className="text-link" href={path} onClick={handleClick}>{children}<ArrowIcon /></a>
}
