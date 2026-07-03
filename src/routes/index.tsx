import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Truck, ShieldCheck, Headphones, Award, ArrowRight } from "lucide-react";
import prodLaptop1 from "@/assets/prod-laptop1.jpg";
import prodLaptop2 from "@/assets/prod-laptop2.jpg";
import prodDesktop from "@/assets/prod-desktop1.jpg";
import heroOffice from "@/assets/hero-office.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Importaciones Mabel E.I.R.L. — Computadoras y Laptops en Lima" },
      { name: "description", content: "Venta de computadoras, laptops, PC gamer y accesorios en Lima. Marcas originales con garantía. Barrios Altos, Lima." },
      { property: "og:title", content: "Importaciones Mabel E.I.R.L." },
      { property: "og:description", content: "Computadoras y laptops de las mejores marcas en Lima." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: ShieldCheck, title: "Garantía oficial", desc: "Todos nuestros equipos cuentan con garantía de fábrica." },
  { icon: Truck, title: "Envíos a todo Perú", desc: "Coordinamos entregas seguras a nivel nacional." },
  { icon: Headphones, title: "Soporte técnico", desc: "Asesoría antes y después de tu compra." },
  { icon: Award, title: "Marcas originales", desc: "HP, Lenovo, Dell, ASUS, Acer, Apple y más." },
];

const highlights = [
  { img: prodLaptop1, name: "Ultrabook Pro 14\"", price: "S/ 3,299" },
  { img: prodLaptop2, name: "Laptop Gamer RTX", price: "S/ 5,899" },
  { img: prodDesktop, name: "PC Escritorio Core i5", price: "S/ 2,499" },
];

function Index() {
  return (
    <SiteLayout>
      <HeroCarousel />

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-xl gradient-brand flex items-center justify-center mb-4 shadow-brand">
                <f.icon className="w-5 h-5 text-brand-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 16, 29, 0.92), rgba(10, 16, 29, 0.75)), url(${heroOffice})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-2">Destacados</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Equipos más vendidos</h2>
            </div>
            <Link to="/productos" className="inline-flex items-center gap-2 font-semibold text-white hover:text-brand transition-colors">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((p) => (
              <div key={p.name} className="group bg-card/95 backdrop-blur rounded-2xl overflow-hidden border border-white/20 shadow-card">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-semibold">{p.name}</h3>
                    <p className="text-brand font-bold text-lg">{p.price}</p>
                  </div>
                  <Link to="/productos" className="text-sm font-semibold text-foreground hover:text-brand">
                    Detalle
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl gradient-hero p-10 md:p-16 text-center shadow-brand">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              ¿Necesitas asesoría para elegir tu equipo?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Nuestro equipo te ayuda a encontrar la computadora ideal según tu presupuesto y necesidades.
            </p>
            <Link to="/contacto" className="inline-flex items-center px-8 py-3 rounded-lg gradient-brand text-brand-foreground font-semibold shadow-brand hover:scale-105 transition-transform">
              Escríbenos ahora
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
