import { FaAward, FaUsers, FaRocket } from 'react-icons/fa'

const stats = [
  { icon: FaAward, value: '10+', label: 'Años de experiencia' },
  { icon: FaUsers, value: '200+', label: 'Clientes satisfechos' },
  { icon: FaRocket, value: '350+', label: 'Proyectos entregados' },
]

function About() {
  return (
    <section id="nosotros" className="about section">
      <div className="container about__grid">
        <div className="about__text">
          <span className="section__tag">Sobre Nosotros</span>
          <h2 className="section__title">Tu socio estratégico en el mundo digital</h2>
          <p>
            En Digital Solutions llevamos más de una década ayudando a empresas
            de todos los tamaños a crecer en el entorno digital. Combinamos
            creatividad, tecnología y estrategia para crear experiencias que
            generan resultados reales.
          </p>
          <p>
            Nuestro equipo multidisciplinario trabaja de cerca contigo en cada
            etapa del proyecto, garantizando transparencia, calidad y un
            compromiso absoluto con tus objetivos de negocio.
          </p>
        </div>

        <div className="about__stats">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="about__stat-card">
              <Icon className="about__stat-icon" aria-hidden="true" />
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
