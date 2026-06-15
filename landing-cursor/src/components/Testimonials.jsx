const testimonials = [
  {
    name: 'María González',
    role: 'CEO, TechVentures',
    avatar: 'MG',
    quote:
      'Digital Solutions transformó por completo nuestra presencia online. En solo tres meses duplicamos nuestras conversiones y el tráfico orgánico creció un 180%.',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Director de Marketing, InnovateCo',
    avatar: 'CR',
    quote:
      'El equipo es excepcional: profesionales, creativos y siempre disponibles. El soporte 24/7 nos da la tranquilidad que necesitamos para operar sin fricciones.',
  },
]

function Testimonials() {
  return (
    <section id="testimonios" className="testimonials section">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Testimonios</span>
          <h2 className="section__title">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map(({ name, role, avatar, quote }) => (
            <blockquote key={name} className="testimonial-card">
              <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>
              <footer className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {avatar}
                </div>
                <div>
                  <cite>{name}</cite>
                  <span>{role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
