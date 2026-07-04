import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Clock, s as Navigation, u as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-CI9SoFOk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ubicacion-BhaDR5eH.js
var import_jsx_runtime = require_jsx_runtime();
var mapsQuery = encodeURIComponent("Jr. Leticia 948, Barrios Altos, Lima, Perú");
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "gradient-hero text-primary-foreground py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-brand text-sm font-semibold tracking-widest uppercase mb-3",
					children: "Visítanos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-5xl md:text-6xl font-display font-bold mb-4",
					children: "Nuestra Ubicación"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-primary-foreground/80 max-w-2xl",
					children: "Encuéntranos en el corazón de Barrios Altos, en pleno centro histórico de Lima."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 lg:col-span-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 rounded-2xl bg-card border border-border shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4 shadow-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5 text-brand-foreground" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-bold text-lg mb-2",
								children: "Dirección"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: [
									"Jr. Leticia Nro. 948 Int. 5",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Urb. Barrios Altos",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Lima — Lima — Lima",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Perú"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 rounded-2xl bg-card border border-border shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-xl gradient-brand flex items-center justify-center mb-4 shadow-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-5 h-5 text-brand-foreground" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display font-bold text-lg mb-2",
								children: "Horario de atención"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"Lunes a Viernes: 9:00 a.m. — 8:00 p.m.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Sábados: 9:00 a.m. — 6:00 p.m.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Domingos: Cerrado"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-brand text-brand-foreground font-semibold shadow-brand hover:scale-[1.02] transition-transform",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-4 h-4" }), " Cómo llegar"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-card min-h-[500px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Ubicación Importaciones Mabel",
					src: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
					className: "w-full h-full min-h-[500px] border-0",
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade",
					allowFullScreen: true
				})
			})]
		})
	})] });
}
//#endregion
export { Page as component };
