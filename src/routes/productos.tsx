import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import prodLaptop1 from "@/assets/prod-laptop1.jpg";
import prodLaptop2 from "@/assets/prod-laptop2.jpg";
import prodDesktop from "@/assets/prod-desktop1.jpg";
import prodAio from "@/assets/prod-aio.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import laptopEmpresarial15 from "@/assets/Laptop Empresarial 15.jpg";
import laptopCreator16 from "@/assets/Laptop Creator 16.jpg";
import pcWorkstationPro from "@/assets/PC Workstation Pro.png";
import allInOne27 from "@/assets/All-in-One 27.png";
import laptopConvertible14 from "@/assets/Laptop Convertible 14.jpg";
import laptopGamingUltra from "@/assets/Laptop Gaming Ultra.jpg";
import pcCompactaMini from "@/assets/PC Compacta Mini.jpg";
import allInOneTouchscreen from "@/assets/All-in-One Touchscreen.jpg";
import monitorCurvo27 from "@/assets/Monitor Curvo 27.jpg";
import tecladoMecanicoRgb from "@/assets/Teclado Mecánico RGB.jpg";
import mouseGamerInalambrico from "@/assets/Mouse Gamer Inalámbrico.jpg";
import impresora3dFdm from "@/assets/Impresora 3D FDM.jpg";
import pantallaLed32 from "@/assets/Pantalla LED 32.jpg";
import webcamHd1080p from "@/assets/Webcam HD 1080p.jpg";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos — Laptops, PC y Accesorios | Importaciones Mabel" },
      { name: "description", content: "Catálogo de laptops, computadoras de escritorio, all-in-one y accesorios en Lima." },
      { property: "og:title", content: "Productos — Importaciones Mabel" },
      { property: "og:description", content: "Catálogo de equipos de cómputo." },
    ],
  }),
  component: Page,
});

type Product = { img: string; name: string; specs: string; price: string; tag: string };

const products: Product[] = [
  { img: prodLaptop1, name: "Ultrabook Pro 14\"", specs: "Intel Core i7 · 16GB RAM · 512GB SSD", price: "S/ 3,299", tag: "Laptop" },
  { img: prodLaptop2, name: "Laptop Gamer RTX 4060", specs: "Ryzen 7 · 32GB · RTX 4060 · 1TB SSD", price: "S/ 5,899", tag: "Gamer" },
  { img: prodDesktop, name: "PC Escritorio Home", specs: "Core i5 · 16GB · 512GB SSD · Win 11", price: "S/ 2,499", tag: "Desktop" },
  { img: prodAio, name: "All-in-One 24\" FHD", specs: "Core i5 · 8GB · 256GB SSD · Pantalla FHD", price: "S/ 2,899", tag: "AIO" },
  { img: laptopEmpresarial15, name: "Laptop Empresarial 15\"", specs: "Core i5 · 8GB · 256GB SSD", price: "S/ 2,199", tag: "Laptop" },
  { img: laptopCreator16, name: "Laptop Creator 16\"", specs: "Core i9 · 32GB · RTX 4070", price: "S/ 7,499", tag: "Gamer" },
  { img: pcWorkstationPro, name: "PC Workstation Pro", specs: "Core i7 · 32GB · 1TB SSD · RTX A2000", price: "S/ 6,299", tag: "Desktop" },
  { img: allInOne27, name: "All-in-One 27\" 2K", specs: "Core i7 · 16GB · 512GB SSD · 2K", price: "S/ 4,199", tag: "AIO" },
  { img: laptopConvertible14, name: "Laptop Convertible 14\"", specs: "Core i5 · 8GB · 256GB SSD · Touch", price: "S/ 2,599", tag: "Laptop" },
  { img: laptopGamingUltra, name: "Laptop Gaming Ultra", specs: "Ryzen 9 · 64GB · RTX 4080", price: "S/ 9,999", tag: "Gamer" },
  { img: pcCompactaMini, name: "PC Compacta Mini", specs: "Core i3 · 8GB · 256GB SSD", price: "S/ 1,899", tag: "Desktop" },
  { img: allInOneTouchscreen, name: "All-in-One Touchscreen", specs: "Core i5 · 16GB · 512GB SSD · Touch", price: "S/ 3,799", tag: "AIO" },

  //adeherir pantallas y post de impresion 3D, monitores, teclados, mouse, etc
  { img: monitorCurvo27, name: "Monitor Curvo 27\"", specs: "144Hz · 1ms · FreeSync", price: "S/ 1,299", tag: "Accesorio" },
  { img: tecladoMecanicoRgb, name: "Teclado Mecánico RGB", specs: "Switches Blue · Anti-Ghosting", price: "S/ 299", tag: "Accesorio" },
  { img: mouseGamerInalambrico, name: "Mouse Gamer Inalámbrico", specs: "16000 DPI · RGB · 6 Botones", price: "S/ 199", tag: "Accesorio" },
  { img: impresora3dFdm, name: "Impresora 3D FDM", specs: "PLA/ABS · 220x220x250mm · WiFi", price: "S/ 1,499", tag: "Accesorio" },
  { img: pantallaLed32, name: "Pantalla LED 32\"", specs: "4K UHD · HDR10 · Smart TV", price: "S/ 2,199", tag: "Accesorio" },
  { img: webcamHd1080p, name: "Webcam HD 1080p", specs: "Auto-Focus · Micrófono Integrado", price: "S/ 149", tag: "Accesorio" },

];

const categories = ["Todos", "Laptop", "Gamer", "Desktop", "AIO"] as const;

function Page() {
  return (
    <SiteLayout>
      <section
        className="relative overflow-hidden text-primary-foreground py-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 16, 29, 0.92), rgba(10, 16, 29, 0.75)), url(${heroOffice})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-3">Catálogo</p>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-3">Nuestros Productos</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Laptops, computadoras de escritorio, all-in-one y accesorios de las marcas más reconocidas.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${i === 0 ? "gradient-brand text-brand-foreground border-transparent shadow-brand" : "border-border bg-card text-foreground hover:bg-accent"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p, i) => (
              <article key={i} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:-translate-y-1 transition-transform">
                <div className="aspect-square bg-muted overflow-hidden relative">
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary text-primary-foreground">
                    {p.tag}
                  </span>
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-base mb-1">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3 min-h-8">{p.specs}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand">{p.price}</span>
                    <button className="text-xs font-semibold px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:opacity-90">
                      Cotizar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
