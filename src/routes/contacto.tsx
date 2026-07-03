import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Importaciones Mabel E.I.R.L." },
      { name: "description", content: "Contáctanos para cotizaciones de laptops, computadoras y accesorios. Barrios Altos, Lima." },
      { property: "og:title", content: "Contacto — Importaciones Mabel" },
      { property: "og:description", content: "Envíanos tu consulta o cotización." },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">Estamos para ayudarte</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold">Contacto</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Dirección", value: "Jr. Leticia Nro. 948 Int. 5, Urb. Barrios Altos, Lima — Lima — Lima" },
              { icon: Phone, title: "Teléfono", value: "+51 981 412 732" },
              { icon: Mail, title: "Correo", value: "ventas@importacionesmabel.pe" },
              { icon: Clock, title: "Horario", value: "Lunes a Sábado · 9:00 a.m. — 8:00 p.m." },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 p-5 rounded-2xl bg-card border border-border shadow-card">
                <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center shrink-0 shadow-brand">
                  <c.icon className="w-5 h-5 text-brand-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="p-8 rounded-3xl bg-card border border-border shadow-card space-y-4"
          >
            <h2 className="text-2xl font-display font-bold mb-2">Envíanos un mensaje</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="font-medium">Nombre</span>
                <input required className="mt-1 w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Teléfono</span>
                <input className="mt-1 w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
              </label>
            </div>
            <label className="block text-sm">
              <span className="font-medium">Correo</span>
              <input type="email" required className="mt-1 w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block text-sm">
              <span className="font-medium">Mensaje</span>
              <textarea rows={4} required className="mt-1 w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-brand text-brand-foreground font-semibold shadow-brand hover:scale-[1.02] transition-transform"
            >
              <Send className="w-4 h-4" /> Enviar mensaje
            </button>
            {sent && (
              <p className="text-sm text-brand font-medium">¡Gracias! Nos pondremos en contacto contigo pronto.</p>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
