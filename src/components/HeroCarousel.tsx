import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/portada.jpg";
import hero2 from "@/assets/juego.jpg";
import hero3 from "@/assets/sala.jpg";

const slides = [
  {
    img: hero1,
    eyebrow: "Nuevos modelos 2026",
    title: "Laptops de última generación",
    desc: "Ultrabooks, gamer y empresariales con garantía oficial.",
  },
  {
    img: hero2,
    eyebrow: "PC Gamer",
    title: "Arma tu equipo ideal",
    desc: "Componentes de alto rendimiento para gaming y diseño.",
  },
  {
    img: hero3,
    eyebrow: "Soluciones para empresas",
    title: "Equipamiento corporativo",
    desc: "Estaciones de trabajo, monitores y accesorios al por mayor.",
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);
  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setI((v) => (v + 1) % slides.length);

  return (
    <section className="relative h-[80vh] min-h-[520px] overflow-hidden gradient-hero">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.img}
            alt={s.title}
            width={1600}
            height={900}
            className="absolute inset-0 w-full h-full object-cover opacity-100000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-primary-foreground">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand/20 text-brand border border-brand/30 mb-5">
                {s.eyebrow}
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6">
                {s.title}
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">{s.desc}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/productos"
                  className="inline-flex items-center px-6 py-3 rounded-lg gradient-brand text-brand-foreground font-semibold shadow-brand hover:scale-105 transition-transform"
                >
                  Ver catálogo
                </a>
                <a
                  href="/contacto"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold transition-colors"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/20 backdrop-blur border border-primary-foreground/20 text-primary-foreground hover:bg-background/40 flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/20 backdrop-blur border border-primary-foreground/20 text-primary-foreground hover:bg-background/40 flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Ir a slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-brand" : "w-4 bg-primary-foreground/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
