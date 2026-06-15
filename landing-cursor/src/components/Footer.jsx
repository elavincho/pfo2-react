import { FaCode, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#inicio" className="footer__logo">
            <FaCode aria-hidden="true" />
            <span>Digital Solutions</span>
          </a>
          <p>Transformamos ideas en soluciones digitales que impulsan tu negocio.</p>
        </div>

        <div className="footer__social">
          <p>Síguenos</p>
          <ul>
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {year} Digital Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
