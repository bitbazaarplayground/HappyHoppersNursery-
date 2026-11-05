export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

export function BrandIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9.7 16.3c.4-5.8 4.5-8.8 10.9-9.4-.2 6.2-3.2 10.5-9.5 10.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M11.4 23.7c.6-5.9 4.6-9.3 11.4-9.7-.3 6.2-3.9 10.3-10.5 10.2M5.5 25.1c4-2.6 7.5-5.6 10.6-9.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  )
}

export function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 8.8c0 5-8 10-8 10s-8-5-8-10A4.1 4.1 0 0 1 11.3 6L12 7l.7-1A4.1 4.1 0 0 1 20 8.8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>
  )
}

export function MenuIcon({ open }) {
  return open ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" /></svg>
  )
}

export function SparkIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5c.7 5.1 3 7.5 8.5 8.5-5.2.8-7.7 3.5-8.5 8.5-.8-5.1-3.3-7.7-8.5-8.5 5.3-1 7.7-3.5 8.5-8.5Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" /></svg>
}

export function LeafIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18.7C5.5 10.4 10.7 5.8 19 5c-.6 8.1-5.3 13.2-13.5 13.7M5.7 18.3c3.3-3.7 6.4-6.4 10.5-9.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" /></svg>
}

export function SpeechIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.5 11.2a6.9 6.9 0 0 1-7.2 6.8 8.3 8.3 0 0 1-3-.6l-4 1.5 1.2-3.7a6.3 6.3 0 0 1-1-3.5 6.9 6.9 0 0 1 7.2-6.8 6.9 6.9 0 0 1 6.8 6.3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" /></svg>
}
