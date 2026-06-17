import React from "react";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contacto" className="bg-slate-950 px-5 py-20 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal direction="left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Hablemos sobre tu próximo proyecto.
          </h2>
          <p className="mt-5 leading-8 text-slate-300">
            Completa el formulario y nuestro equipo se pondrá en contacto para conocer tus
            objetivos y proponerte una solución a medida.
          </p>
        </ScrollReveal>

        <ScrollReveal
          as="form"
          direction="right"
          delay={120}
          onSubmit={handleSubmit}
          className="rounded-lg bg-white p-6 text-slate-950 shadow-soft transition-colors duration-300 dark:border dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Nombre
              </span>
              <input
                type="text"
                className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-teal focus:ring-2 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-teal-400/20"
                placeholder="Tu nombre"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Email
              </span>
              <input
                type="email"
                className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-teal focus:ring-2 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-teal-400/20"
                placeholder="tu@email.com"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Empresa
            </span>
            <input
              type="text"
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-teal focus:ring-2 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-teal-400/20"
              placeholder="Nombre de la empresa"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Mensaje
            </span>
            <textarea
              rows="5"
              className="mt-2 w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-teal focus:ring-2 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-teal-400/20"
              placeholder="Cuéntanos qué necesitas"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-brand-teal px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-brand-mint"
          >
            Enviar consulta
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
