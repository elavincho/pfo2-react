import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="contact section section--alt">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="section__tag">Contacto</span>
          <h2 className="section__title">Hablemos de tu próximo proyecto</h2>
          <p>
            Cuéntanos tu idea y te responderemos en menos de 24 horas con una
            propuesta personalizada. Sin compromiso.
          </p>
          <ul className="contact__details">
            <li>
              <strong>Email:</strong> hola@digitalsolutions.com
            </li>
            <li>
              <strong>Teléfono:</strong> +34 900 123 456
            </li>
            <li>
              <strong>Oficina:</strong> Madrid, España
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          {submitted ? (
            <div className="contact__success" role="status">
              <FaPaperPlane aria-hidden="true" />
              <p>¡Gracias por tu mensaje! Te contactaremos pronto.</p>
            </div>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary btn--full">
                Enviar mensaje
                <FaPaperPlane aria-hidden="true" />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
