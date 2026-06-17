import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal.jsx";

const testimonials = [
  {
    name: "Laura Méndez",
    role: "CEO, Norte Studio",
    text: "El equipo entendió exactamente lo que necesitábamos. Nuestra nueva presencia digital se ve profesional y genera consultas de mejor calidad.",
  },
  {
    name: "Martín Aguirre",
    role: "Director Comercial, Vértice",
    text: "Trabajar con ellos fue simple, ordenado y muy efectivo. Cumplieron tiempos, cuidaron los detalles y mejoraron nuestra conversión.",
  },
  {
    name: "Camila Torres",
    role: "Fundadora, Alma Café",
    text: "La landing quedó elegante, rápida y muy clara. En la primera semana empezamos a recibir consultas más concretas.",
  },
  {
    name: "Julián Rivas",
    role: "Marketing Manager, GridLab",
    text: "Nos ayudaron a ordenar el mensaje de marca y transformarlo en una experiencia digital mucho más convincente.",
  },
  {
    name: "Sofía Herrera",
    role: "Directora, Horizonte Legal",
    text: "El proceso fue ágil y profesional. Cuidaron cada detalle visual sin perder de vista los objetivos comerciales.",
  },
  {
    name: "Diego Salvatierra",
    role: "COO, Nexo Solutions",
    text: "La nueva página transmite confianza y funciona perfecto en mobile. Fue una mejora notable para nuestro equipo de ventas.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollToIndex = (index) => {
    const carousel = carouselRef.current;
    const target = carousel?.children[index];

    if (!carousel || !target) {
      return;
    }

    setActiveIndex(index);
    carousel.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    scrollToIndex(nextIndex);
  };

  const goToNext = () => {
    const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIndex);
  };

  return (
    <section
      id="testimonios"
      className="bg-white px-5 py-20 transition-colors duration-300 dark:bg-slate-950 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ScrollReveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
              Testimonios
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Clientes que confían en nuestro trabajo.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={120} className="flex gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-teal hover:text-brand-teal hover:shadow-md focus:outline-none focus:ring-4 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-teal-400/20"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-teal hover:text-brand-teal hover:shadow-md focus:outline-none focus:ring-4 focus:ring-teal-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-teal-400/20"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={180} className="mt-10">
          <div
            ref={carouselRef}
            className="testimonial-carousel flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="min-w-full snap-start sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
              >
                <div className="flex h-full min-h-[280px] flex-col justify-between rounded-lg border border-slate-200 bg-brand-cloud p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-teal hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-6">
                    <p className="font-bold text-slate-950 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-brand-teal"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
