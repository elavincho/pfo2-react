import { FaArrowRight } from 'react-icons/fa'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__content">
        <span className="hero__badge">Agencia digital de confianza</span>
        <h1 className="hero__title">
          Transformamos Ideas en Soluciones Digitales
        </h1>
        <p className="hero__subtitle">
          Impulsamos el crecimiento de tu negocio con tecnología de vanguardia,
          estrategias creativas y un equipo apasionado por los resultados.
        </p>
        <a href="#contacto" className="btn btn--primary hero__cta">
          Comenzar
          <FaArrowRight aria-hidden="true" />
        </a>
      </div>
      <div className="hero__decoration" aria-hidden="true" />
    </section>
  )
}

export default Hero
