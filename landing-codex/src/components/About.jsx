import React from "react";
import ScrollReveal from "./ScrollReveal.jsx";

export default function About() {
  return (
    <section
      id="sobre-nosotros"
      className="bg-white px-5 py-20 transition-colors duration-300 dark:bg-slate-950 md:px-8"
    >
      <ScrollReveal className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
          Sobre nosotros
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
          Construimos presencia digital con criterio empresarial.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Somos un equipo especializado en diseño, desarrollo y estrategia digital.
          Acompañamos a empresas que buscan comunicar mejor, optimizar procesos y convertir
          su presencia online en una ventaja competitiva real.
        </p>
      </ScrollReveal>
    </section>
  );
}
