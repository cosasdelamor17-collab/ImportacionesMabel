import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Monitor, MapPin, Phone, Mail } from "lucide-react";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/vision-mision", label: "Visión y Misión" },
  { to: "/productos", label: "Productos" },
  { to: "/contacto", label: "Contacto" },
  { to: "/ubicacion", label: "Ubicación" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gradient-brand flex items-center justify-center shadow-brand">
              <Monitor className="w-5 h-5 text-brand-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-sm text-foreground">IMPORTACIONES MABEL</div>
              <div className="text-[10px] text-muted-foreground tracking-widest">E.I.R.L.</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-md transition-colors"
                activeProps={{ className: "px-4 py-2 text-sm font-medium text-foreground rounded-md bg-accent" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-4 py-3 space-y-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-accent"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-primary text-primary-foreground mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg gradient-brand flex items-center justify-center">
                <Monitor className="w-5 h-5 text-brand-foreground" />
              </div>
              <div className="font-display font-bold">IMPORTACIONES MABEL E.I.R.L.</div>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Venta de computadoras, laptops y accesorios tecnológicos de las mejores marcas.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <h4 className="font-display font-semibold mb-3">Contacto</h4>
            <p className="flex items-start gap-2 text-primary-foreground/80">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand" />
              Jr. Leticia Nro. 948 Int. 5, Urb. Barrios Altos, Lima
            </p>
            <p className="flex items-center gap-2 text-primary-foreground/80">
              <Phone className="w-4 h-4 text-brand" /> (051) 981 412 732
            </p>
            <p className="flex items-center gap-2 text-primary-foreground/80">
              <Mail className="w-4 h-4 text-brand" /> ventas@importacionesmabel.pe
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-3">Horario</h4>
            <p className="text-sm text-primary-foreground/80">Lunes a Sábado</p>
            <p className="text-sm text-primary-foreground/80">9:00 a.m. — 8:00 p.m.</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Importaciones Mabel E.I.R.L. — Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
