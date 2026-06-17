import React, { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

const plans = [
  {
    name: "Básico",
    price: "$299",
    description: "Ideal para validar una presencia profesional y clara.",
    features: ["Landing page responsive", "Sección de servicios", "Formulario visual"],
  },
  {
    name: "Medio",
    price: "$599",
    description: "Para empresas que necesitan más contenido y mejor conversión.",
    features: ["Hasta 5 secciones", "Optimización visual", "Animaciones al scroll"],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$999",
    description: "Una solución completa para campañas, marca y crecimiento.",
    features: ["Diseño avanzado", "Componentes personalizados", "Soporte prioritario"],
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("Medio");

  return (
    <section
      id="precios"
      className="bg-white px-5 py-20 transition-colors duration-300 dark:bg-slate-950 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
            Precios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Elegí el plan que mejor acompaña tu próximo paso.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Opciones simples y escalables para lanzar, mejorar o potenciar tu presencia digital.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === plan.name;

            return (
              <ScrollReveal key={plan.name} delay={index * 120}>
                <button
                  type="button"
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`group relative flex h-full w-full flex-col rounded-lg border p-6 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-100 dark:focus:ring-teal-400/20 ${
                    isSelected
                      ? "border-brand-teal bg-slate-950 text-white shadow-2xl ring-4 ring-teal-100 dark:bg-brand-mint dark:text-slate-950 dark:ring-teal-400/20"
                      : "border-slate-200 bg-white text-slate-950 hover:border-brand-teal dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:border-brand-mint"
                  }`}
                  aria-pressed={isSelected}
                >
                  {plan.highlighted && (
                    <span
                      className={`mb-5 inline-flex w-fit items-center gap-2 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${
                        isSelected
                          ? "bg-brand-mint text-slate-950 dark:bg-slate-950 dark:text-brand-mint"
                          : "bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-brand-mint"
                      }`}
                    >
                      <Sparkles className="h-4 w-4" />
                      Recomendado
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p
                        className={`mt-2 leading-7 ${
                          isSelected
                            ? "text-slate-300 dark:text-slate-700"
                            : "text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        {plan.description}
                      </p>
                    </div>

                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                        isSelected
                          ? "border-brand-mint bg-brand-mint text-slate-950 dark:border-slate-950 dark:bg-slate-950 dark:text-brand-mint"
                          : "border-slate-300 bg-white text-transparent group-hover:border-brand-teal group-hover:text-brand-teal dark:border-slate-600 dark:bg-slate-950"
                      }`}
                    >
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                  </div>

                  <div className="mt-7 flex items-end gap-2">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span
                      className={
                        isSelected
                          ? "pb-1 text-slate-300 dark:text-slate-700"
                          : "pb-1 text-slate-500 dark:text-slate-400"
                      }
                    >
                      / proyecto
                    </span>
                  </div>

                  <ul className="mt-7 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full ${
                            isSelected
                              ? "bg-white/10 text-brand-mint dark:bg-slate-950 dark:text-brand-mint"
                              : "bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-brand-mint"
                          }`}
                        >
                          <Check className="h-4 w-4" />
                        </span>
                        <span
                          className={
                            isSelected
                              ? "text-slate-200 dark:text-slate-800"
                              : "text-slate-700 dark:text-slate-300"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <span
                    className={`mt-8 inline-flex justify-center rounded-md px-5 py-3 text-sm font-bold transition ${
                      isSelected
                        ? "bg-brand-mint text-slate-950 dark:bg-slate-950 dark:text-brand-mint"
                        : "bg-slate-950 text-white group-hover:bg-brand-teal dark:bg-white dark:text-slate-950 dark:group-hover:bg-brand-mint"
                    }`}
                  >
                    {isSelected ? "Plan seleccionado" : "Seleccionar plan"}
                  </span>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
