import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/vision-mision")({
  head: () => ({
    meta: [
      { title: "Visión y Misión — Importaciones Mabel E.I.R.L." },
      { name: "description", content: "Conoce la visión, misión y valores de Importaciones Mabel E.I.R.L., empresa peruana dedicada a la venta de tecnología." },
      { property: "og:title", content: "Visión y Misión — Importaciones Mabel" },
      { property: "og:description", content: "Nuestra visión, misión y valores." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="gradient-hero text-primary-foreground py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">Quiénes somos</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Visión y Misión</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Somos una empresa peruana comprometida con acercar la mejor tecnología a hogares y empresas del país.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          <div className="p-10 rounded-3xl bg-card border border-border shadow-card">
            <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mb-6 shadow-brand">
              <Eye className="w-7 h-7 text-brand-foreground" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Visión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ser la empresa líder en la importación y comercialización de equipos de cómputo en el Perú,
              reconocida por la calidad de sus productos, la excelencia en el servicio y su compromiso
              con la transformación digital de miles de familias, profesionales y empresas.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-card border border-border shadow-card">
            <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center mb-6 shadow-brand">
              <Target className="w-7 h-7 text-brand-foreground" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Misión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ofrecer computadoras, laptops y accesorios tecnológicos de las mejores marcas, a precios
              competitivos y con garantía, brindando asesoría personalizada y soporte técnico oportuno
              para que nuestros clientes cuenten siempre con la solución ideal para sus necesidades.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex w-14 h-14 rounded-2xl gradient-brand items-center justify-center mb-4 shadow-brand">
              <Heart className="w-7 h-7 text-brand-foreground" />
            </div>
            <h2 className="text-4xl font-display font-bold">Nuestros Valores</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Honestidad", "Trato transparente en cada venta y asesoría."],
              ["Calidad", "Productos originales de marcas reconocidas."],
              ["Compromiso", "Cumplimos con lo prometido a tiempo."],
              ["Innovación", "Siempre a la vanguardia tecnológica."],
            ].map(([t, d]) => (
              <div key={t} className="p-6 rounded-2xl bg-accent/40 border border-border">
                <h3 className="font-display font-semibold text-lg mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
