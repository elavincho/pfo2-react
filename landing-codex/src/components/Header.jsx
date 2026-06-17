import React from "react";
import { Menu, Moon, Sun } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Precios", href: "#precios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header({ isDarkMode, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#inicio" className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
          NovaBrand
        </a>

        <div className="hidden items-center gap-5 text-sm font-medium text-slate-700 dark:text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-teal">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-brand-teal hover:text-brand-teal dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href="#contacto"
            className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-teal dark:bg-brand-mint dark:text-slate-950 dark:hover:bg-white"
          >
            Hablemos
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200 md:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
