import { useState } from 'react'
import { FaCode } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="header__logo">
          <FaCode className="header__logo-icon" aria-hidden="true" />
          <span>Digital Solutions</span>
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
