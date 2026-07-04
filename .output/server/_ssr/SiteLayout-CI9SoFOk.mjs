import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Monitor, d as Mail, l as Menu, o as Phone, t as X, u as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-CI9SoFOk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/",
		label: "Inicio"
	},
	{
		to: "/vision-mision",
		label: "Visión y Misión"
	},
	{
		to: "/productos",
		label: "Productos"
	},
	{
		to: "/contacto",
		label: "Contacto"
	},
	{
		to: "/ubicacion",
		label: "Ubicación"
	}
];
function SiteLayout({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-9 h-9 rounded-lg gradient-brand flex items-center justify-center shadow-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "w-5 h-5 text-brand-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display font-bold text-sm text-foreground",
									children: "IMPORTACIONES MABEL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-muted-foreground tracking-widest",
									children: "E.I.R.L."
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden lg:flex items-center gap-1",
							children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: n.to,
								className: "px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground rounded-md transition-colors",
								activeProps: { className: "px-4 py-2 text-sm font-medium text-foreground rounded-md bg-accent" },
								activeOptions: { exact: true },
								children: n.label
							}, n.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden p-2 text-foreground",
							onClick: () => setOpen(!open),
							"aria-label": "Menú",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-6 h-6" })
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:hidden border-t border-border bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-4 py-3 space-y-1",
						children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							onClick: () => setOpen(false),
							className: "block px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:bg-accent",
							children: n.label
						}, n.to))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border bg-primary text-primary-foreground mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-9 h-9 rounded-lg gradient-brand flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "w-5 h-5 text-brand-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display font-bold",
								children: "IMPORTACIONES MABEL E.I.R.L."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-primary-foreground/70",
							children: "Venta de computadoras, laptops y accesorios tecnológicos de las mejores marcas."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display font-semibold mb-3",
									children: "Contacto"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-2 text-primary-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 mt-0.5 shrink-0 text-brand" }), "Jr. Leticia Nro. 948 Int. 5, Urb. Barrios Altos, Lima"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-primary-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4 text-brand" }), " (051) 981 412 732"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-primary-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 text-brand" }), " ventas@importacionesmabel.pe"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display font-semibold mb-3",
								children: "Horario"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-primary-foreground/80",
								children: "Lunes a Sábado"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-primary-foreground/80",
								children: "9:00 a.m. — 8:00 p.m."
							})
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/60",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Importaciones Mabel E.I.R.L. — Todos los derechos reservados."
					]
				})]
			})
		]
	});
}
//#endregion
export { SiteLayout as t };
