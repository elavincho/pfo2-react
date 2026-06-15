import { FaLaptopCode, FaBullhorn, FaHeadset } from 'react-icons/fa'

const services = [
  {
    icon: FaLaptopCode,
    title: 'Desarrollo Web',
    description:
      'Sitios y aplicaciones web modernas, rápidas y optimizadas para convertir visitantes en clientes.',
  },
  {
    icon: FaBullhorn,
    title: 'Marketing Digital',
    description:
      'Estrategias de SEO, redes sociales y publicidad online para amplificar tu presencia y alcance.',
  },
  {
    icon: FaHeadset,
    title: 'Soporte 24/7',
    description:
      'Asistencia técnica continua para que tu plataforma funcione sin interrupciones, día y noche.',
  },
]

function Services() {
  return (
    <section id="servicios" className="services section section--alt">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Servicios</span>
          <h2 className="section__title">Soluciones a medida para tu negocio</h2>
          <p className="section__desc">
            Ofrecemos un ecosistema completo de servicios digitales diseñados
            para impulsar tu crecimiento.
          </p>
        </div>

        <div className="services__grid">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="service-card">
              <div className="service-card__icon">
                <Icon aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
