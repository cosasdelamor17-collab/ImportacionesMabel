import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronLeft, g as ChevronRight, i as ShieldCheck, n as Truck, p as Headphones, v as Award, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-CI9SoFOk.mjs";
import { i as prod_laptop2_default, n as prod_desktop1_default, r as prod_laptop1_default, t as hero_office_default } from "./hero-office-CXYjDZpo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DJYeRJ5s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var slides = [
	{
		img: "/assets/portada-4jzw7z98.jpg",
		eyebrow: "Nuevos modelos 2026",
		title: "Laptops de última generación",
		desc: "Ultrabooks, gamer y empresariales con garantía oficial."
	},
	{
		img: "/assets/juego-DqZv3fRK.jpg",
		eyebrow: "PC Gamer",
		title: "Arma tu equipo ideal",
		desc: "Componentes de alto rendimiento para gaming y diseño."
	},
	{
		img: "/assets/sala-CeUXy97H.jpg",
		eyebrow: "Soluciones para empresas",
		title: "Equipamiento corporativo",
		desc: "Estaciones de trabajo, monitores y accesorios al por mayor."
	}
];
function HeroCarousel() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5500);
		return () => clearInterval(t);
	}, []);
	const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);
	const next = () => setI((v) => (v + 1) % slides.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[80vh] min-h-[520px] overflow-hidden gradient-hero",
		children: [
			slides.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.img,
						alt: s.title,
						width: 1600,
						height: 900,
						className: "absolute inset-0 w-full h-full object-cover opacity-100000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl text-primary-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand/20 text-brand border border-brand/30 mb-5",
									children: s.eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg text-primary-foreground/80 mb-8 max-w-lg",
									children: s.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/productos",
										className: "inline-flex items-center px-6 py-3 rounded-lg gradient-brand text-brand-foreground font-semibold shadow-brand hover:scale-105 transition-transform",
										children: "Ver catálogo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/contacto",
										className: "inline-flex items-center px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold transition-colors",
										children: "Contáctanos"
									})]
								})
							]
						})
					})
				]
			}, idx)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: prev,
				"aria-label": "Anterior",
				className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/20 backdrop-blur border border-primary-foreground/20 text-primary-foreground hover:bg-background/40 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-5 h-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: next,
				"aria-label": "Siguiente",
				className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-background/20 backdrop-blur border border-primary-foreground/20 text-primary-foreground hover:bg-background/40 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2",
				children: slides.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setI(idx),
					"aria-label": `Ir a slide ${idx + 1}`,
					className: `h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-brand" : "w-4 bg-primary-foreground/40"}`
				}, idx))
			})
		]
	});
}
var features = [
	{
		icon: ShieldCheck,
		title: "Garantía oficial",
		desc: "Todos nuestros equipos cuentan con garantía de fábrica."
	},
	{
		icon: Truck,
		title: "Envíos a todo Perú",
		desc: "Coordinamos entregas seguras a nivel nacional."
	},
	{
		icon: Headphones,
		title: "Soporte técnico",
		desc: "Asesoría antes y después de tu compra."
	},
	{
		icon: Award,
		title: "Marcas originales",
		desc: "HP, Lenovo, Dell, ASUS, Acer, Apple y más."
	}
];
var highlights = [
	{
		img: prod_laptop1_default,
		name: "Ultrabook Pro 14\"",
		price: "S/ 3,299"
	},
	{
		img: prod_laptop2_default,
		name: "Laptop Gamer RTX",
		price: "S/ 5,899"
	},
	{
		img: prod_desktop1_default,
		name: "PC Escritorio Core i5",
		price: "S/ 2,499"
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCarousel, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 transition-transform",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-11 h-11 rounded-xl gradient-brand flex items-center justify-center mb-4 shadow-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "w-5 h-5 text-brand-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display font-semibold text-lg mb-1",
							children: f.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: f.desc
						})
					]
				}, f.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative py-20 overflow-hidden",
			style: {
				backgroundImage: `linear-gradient(135deg, rgba(10, 16, 29, 0.92), rgba(10, 16, 29, 0.75)), url(${hero_office_default})`,
				backgroundSize: "cover",
				backgroundPosition: "center"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between mb-10 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-brand text-sm font-semibold tracking-widest uppercase mb-2",
						children: "Destacados"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-4xl md:text-5xl font-display font-bold text-white",
						children: "Equipos más vendidos"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/productos",
						className: "inline-flex items-center gap-2 font-semibold text-white hover:text-brand transition-colors",
						children: ["Ver todos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: highlights.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group bg-card/95 backdrop-blur rounded-2xl overflow-hidden border border-white/20 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square overflow-hidden bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.name,
								loading: "lazy",
								width: 800,
								height: 800,
								className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-semibold",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-brand font-bold text-lg",
								children: p.price
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/productos",
								className: "text-sm font-semibold text-foreground hover:text-brand",
								children: "Detalle"
							})]
						})]
					}, p.name))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl gradient-hero p-10 md:p-16 text-center shadow-brand",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4",
							children: "¿Necesitas asesoría para elegir tu equipo?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary-foreground/80 mb-8 max-w-2xl mx-auto",
							children: "Nuestro equipo te ayuda a encontrar la computadora ideal según tu presupuesto y necesidades."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacto",
							className: "inline-flex items-center px-8 py-3 rounded-lg gradient-brand text-brand-foreground font-semibold shadow-brand hover:scale-105 transition-transform",
							children: "Escríbenos ahora"
						})
					]
				})
			})
		})
	] });
}
//#endregion
export { Index as component };
