import React from "react";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Hero() {
  return (
    <section id="inicio" className="bg-slate-950 text-white">
      <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
        <ScrollReveal direction="left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">
            Soluciones digitales para empresas
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Impulsamos marcas con diseño, tecnología y estrategia.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Creamos experiencias digitales profesionales que ayudan a tu empresa a destacar,
            captar clientes y crecer con una presencia sólida.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-flex rounded-md bg-brand-mint px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
          >
            Solicitar propuesta
          </a>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={120} className="relative pb-10 md:pb-0">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-slate-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
              alt="Equipo profesional trabajando en una estrategia digital"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-5 right-5 rounded-lg border border-white/10 bg-white p-5 text-slate-950 shadow-soft dark:bg-slate-900 dark:text-white md:-bottom-6 md:left-6 md:right-6">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Resultados medibles
            </p>
            <p className="mt-1 text-2xl font-bold">+38% más conversiones promedio</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
