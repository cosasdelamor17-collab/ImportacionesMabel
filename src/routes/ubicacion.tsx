import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { MapPin, Navigation, Clock } from "lucide-react";

export const Route = createFileRoute("/ubicacion")({
  head: () => ({
    meta: [
      { title: "Ubicación — Importaciones Mabel E.I.R.L." },
      { name: "description", content: "Visítanos en Jr. Leticia Nro. 948 Int. 5, Urb. Barrios Altos, Lima." },
      { property: "og:title", content: "Ubicación — Importaciones Mabel" },
      { property: "og:description", content: "Encuentra nuestra tienda en Barrios Altos, Lima." },
    ],
  }),
  component: Page,
});

const address = "Jr. Leticia 948, Barrios Altos, Lima, Perú";
const mapsQuery = encodeURIComponent(address);

function Page() {
  return (
    <SiteLayout>
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">Visítanos</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Nuestra Ubicación</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Encuéntranos en el corazón de Barrios Altos, en pleno centro histórico de Lima.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4 shadow-brand">
                <MapPin className="w-5 h-5 text-brand-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Dirección</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jr. Leticia Nro. 948 Int. 5<br />
                Urb. Barrios Altos<br />
                Lima — Lima — Lima<br />
                Perú
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4 shadow-brand">
                <Clock className="w-5 h-5 text-brand-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Horario de atención</h3>
              <p className="text-sm text-muted-foreground">
                Lunes a Viernes: 9:00 a.m. — 8:00 p.m.<br />
                Sábados: 9:00 a.m. — 6:00 p.m.<br />
                Domingos: Cerrado
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-brand text-brand-foreground font-semibold shadow-brand hover:scale-[1.02] transition-transform"
            >
              <Navigation className="w-4 h-4" /> Cómo llegar
            </a>
          </div>

          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-card min-h-[500px]">
            <iframe
              title="Ubicación Importaciones Mabel"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="w-full h-full min-h-[500px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
