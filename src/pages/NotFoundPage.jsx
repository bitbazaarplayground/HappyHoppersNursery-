import { LinkButton } from '../components/LinkButton'

export function NotFoundPage({ copy, navigate }) {
  const { notFound } = copy.pages

  return (
    <section className="not-found-page">
      <div className="container">
        <div className="not-found-page__panel">
          <span>404</span>
          <h1>{notFound.title}</h1>
          <p>{notFound.description}</p>
          <LinkButton navigate={navigate} path="/" arrow>{notFound.action}</LinkButton>
        </div>
      </div>
    </section>
  )
}
