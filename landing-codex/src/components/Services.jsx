import React from "react";
import { BarChart3, MonitorSmartphone, Workflow } from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

const services = [
  {
    title: "Estrategia Digital",
    description:
      "Diseñamos planes de crecimiento claros, medibles y alineados con los objetivos de tu negocio.",
    Icon: BarChart3,
  },
  {
    title: "Diseño Web",
    description:
      "Creamos interfaces modernas, rápidas y responsive para convertir visitantes en clientes.",
    Icon: MonitorSmartphone,
  },
  {
    title: "Automatización",
    description:
      "Optimizamos procesos con soluciones digitales que reducen tareas manuales y aumentan eficiencia.",
    Icon: Workflow,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-brand-cloud px-5 py-20 transition-colors duration-300 dark:bg-slate-900 md:px-8">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            Servicios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Soluciones pensadas para crecer.
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(({ title, description, Icon }, index) => (
            <ScrollReveal
              as="article"
              key={title}
              delay={index * 120}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-brand-mint">
                <Icon className="h-8 w-8" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
