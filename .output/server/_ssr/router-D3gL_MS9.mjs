import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D3gL_MS9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Dn3x6hll.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Importaciones Mabel E.I.R.L. — Computadoras y Laptops en Lima" },
			{
				name: "description",
				content: "Venta de computadoras, laptops, PC gamer y accesorios en Lima. Marcas originales con garantía."
			},
			{
				property: "og:title",
				content: "Importaciones Mabel E.I.R.L."
			},
			{
				property: "og:description",
				content: "Venta de computadoras y laptops en Lima con garantía."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./vision-mision-YAeoxzVE.mjs");
var Route$4 = createFileRoute("/vision-mision")({
	head: () => ({ meta: [
		{ title: "Visión y Misión — Importaciones Mabel E.I.R.L." },
		{
			name: "description",
			content: "Conoce la visión, misión y valores de Importaciones Mabel E.I.R.L., empresa peruana dedicada a la venta de tecnología."
		},
		{
			property: "og:title",
			content: "Visión y Misión — Importaciones Mabel"
		},
		{
			property: "og:description",
			content: "Nuestra visión, misión y valores."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./ubicacion-BhaDR5eH.mjs");
var Route$3 = createFileRoute("/ubicacion")({
	head: () => ({ meta: [
		{ title: "Ubicación — Importaciones Mabel E.I.R.L." },
		{
			name: "description",
			content: "Visítanos en Jr. Leticia Nro. 948 Int. 5, Urb. Barrios Altos, Lima."
		},
		{
			property: "og:title",
			content: "Ubicación — Importaciones Mabel"
		},
		{
			property: "og:description",
			content: "Encuentra nuestra tienda en Barrios Altos, Lima."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./productos-Dm8p4gag.mjs");
var Route$2 = createFileRoute("/productos")({
	head: () => ({ meta: [
		{ title: "Productos — Laptops, PC y Accesorios | Importaciones Mabel" },
		{
			name: "description",
			content: "Catálogo de laptops, computadoras de escritorio, all-in-one y accesorios en Lima."
		},
		{
			property: "og:title",
			content: "Productos — Importaciones Mabel"
		},
		{
			property: "og:description",
			content: "Catálogo de equipos de cómputo."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./contacto-BZn6d54P.mjs");
var Route$1 = createFileRoute("/contacto")({
	head: () => ({ meta: [
		{ title: "Contacto — Importaciones Mabel E.I.R.L." },
		{
			name: "description",
			content: "Contáctanos para cotizaciones de laptops, computadoras y accesorios. Barrios Altos, Lima."
		},
		{
			property: "og:title",
			content: "Contacto — Importaciones Mabel"
		},
		{
			property: "og:description",
			content: "Envíanos tu consulta o cotización."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DJYeRJ5s.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Importaciones Mabel E.I.R.L. — Computadoras y Laptops en Lima" },
		{
			name: "description",
			content: "Venta de computadoras, laptops, PC gamer y accesorios en Lima. Marcas originales con garantía. Barrios Altos, Lima."
		},
		{
			property: "og:title",
			content: "Importaciones Mabel E.I.R.L."
		},
		{
			property: "og:description",
			content: "Computadoras y laptops de las mejores marcas en Lima."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var VisionMisionRoute = Route$4.update({
	id: "/vision-mision",
	path: "/vision-mision",
	getParentRoute: () => Route$5
});
var UbicacionRoute = Route$3.update({
	id: "/ubicacion",
	path: "/ubicacion",
	getParentRoute: () => Route$5
});
var ProductosRoute = Route$2.update({
	id: "/productos",
	path: "/productos",
	getParentRoute: () => Route$5
});
var ContactoRoute = Route$1.update({
	id: "/contacto",
	path: "/contacto",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	ContactoRoute,
	ProductosRoute,
	UbicacionRoute,
	VisionMisionRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
