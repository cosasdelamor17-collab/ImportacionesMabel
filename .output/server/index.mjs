globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-03T17:49:49.000Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/All-in-One Touchscreen-BShAZtB-.jpg": {
		"type": "image/jpeg",
		"etag": "\"17eff-YWcYr23oyv2+u3A370KbgH3ElQw\"",
		"mtime": "2026-07-03T22:18:38.301Z",
		"size": 98047,
		"path": "../public/assets/All-in-One Touchscreen-BShAZtB-.jpg"
	},
	"/assets/clock-C52-knfQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-4PCXQquOl/cK6kHQFOJBQW2n8nU\"",
		"mtime": "2026-07-03T22:18:38.295Z",
		"size": 163,
		"path": "../public/assets/clock-C52-knfQ.js"
	},
	"/assets/contacto-DM0B2uYB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ebb-ccZcRFBPjbqJtf8niZtDiMNWqss\"",
		"mtime": "2026-07-03T22:18:38.296Z",
		"size": 3771,
		"path": "../public/assets/contacto-DM0B2uYB.js"
	},
	"/assets/All-in-One 27-CRsadAho.png": {
		"type": "image/png",
		"etag": "\"3cc64-R8guSbxcxiNpWkXzPSqeEpd3MRw\"",
		"mtime": "2026-07-03T22:18:38.300Z",
		"size": 248932,
		"path": "../public/assets/All-in-One 27-CRsadAho.png"
	},
	"/assets/hero-office-Daxgmu1B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bb-+ZN4Jh8k5s3uOWQi3DcVym/vAZo\"",
		"mtime": "2026-07-03T22:18:38.297Z",
		"size": 187,
		"path": "../public/assets/hero-office-Daxgmu1B.js"
	},
	"/assets/hero-office-PM0nN-Sm.jpg": {
		"type": "image/jpeg",
		"etag": "\"18d12-6E29CC2GtureoWVKS9PMavgZ3gs\"",
		"mtime": "2026-07-03T22:18:38.312Z",
		"size": 101650,
		"path": "../public/assets/hero-office-PM0nN-Sm.jpg"
	},
	"/assets/Impresora 3D FDM-wVjweSBd.jpg": {
		"type": "image/jpeg",
		"etag": "\"b138-L5uqDGzfiNXdg20sa8cgmVgmRsY\"",
		"mtime": "2026-07-03T22:18:38.302Z",
		"size": 45368,
		"path": "../public/assets/Impresora 3D FDM-wVjweSBd.jpg"
	},
	"/assets/Laptop Convertible 14-nSNZbZhk.jpg": {
		"type": "image/jpeg",
		"etag": "\"dbff-252QHZzVacch3jxngj0GMacJYWo\"",
		"mtime": "2026-07-03T22:18:38.303Z",
		"size": 56319,
		"path": "../public/assets/Laptop Convertible 14-nSNZbZhk.jpg"
	},
	"/assets/Laptop Empresarial 15-DXZoxULM.jpg": {
		"type": "image/jpeg",
		"etag": "\"1bcac-sQT4kUL8vH0zzjz51v0GdhBanfY\"",
		"mtime": "2026-07-03T22:18:38.304Z",
		"size": 113836,
		"path": "../public/assets/Laptop Empresarial 15-DXZoxULM.jpg"
	},
	"/assets/index-lDzgk_EY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54c37-C9+WkzH9QmKtxXCk+6T288HJJYI\"",
		"mtime": "2026-07-03T22:18:38.294Z",
		"size": 347191,
		"path": "../public/assets/index-lDzgk_EY.js"
	},
	"/assets/Laptop Creator 16-kSiGLndC.jpg": {
		"type": "image/jpeg",
		"etag": "\"4f43-V4giA7zvXrMEenREGyhaHJ1bmHg\"",
		"mtime": "2026-07-03T22:18:38.303Z",
		"size": 20291,
		"path": "../public/assets/Laptop Creator 16-kSiGLndC.jpg"
	},
	"/assets/Laptop Gaming Ultra-DM254otL.jpg": {
		"type": "image/jpeg",
		"etag": "\"1db13-jtpHLBoxKX/tv4BJJ+xf04BqMCk\"",
		"mtime": "2026-07-03T22:18:38.305Z",
		"size": 121619,
		"path": "../public/assets/Laptop Gaming Ultra-DM254otL.jpg"
	},
	"/assets/Mouse Gamer Inalámbrico-DhidcRLD.jpg": {
		"type": "image/jpeg",
		"etag": "\"4f70-9MTbPZ9Qc3TKkrHDLMemAKhxpMw\"",
		"mtime": "2026-07-03T22:18:38.307Z",
		"size": 20336,
		"path": "../public/assets/Mouse Gamer Inalámbrico-DhidcRLD.jpg"
	},
	"/assets/Monitor Curvo 27-CKizEvM1.jpg": {
		"type": "image/jpeg",
		"etag": "\"16154-lTGmfXF2+3flHAfQWJv1dCKZDFk\"",
		"mtime": "2026-07-03T22:18:38.306Z",
		"size": 90452,
		"path": "../public/assets/Monitor Curvo 27-CKizEvM1.jpg"
	},
	"/assets/Pantalla LED 32-CAutOB54.jpg": {
		"type": "image/jpeg",
		"etag": "\"9a4d-TLmMgJ3NFDW4xl7EEXOtZfgxz5o\"",
		"mtime": "2026-07-03T22:18:38.309Z",
		"size": 39501,
		"path": "../public/assets/Pantalla LED 32-CAutOB54.jpg"
	},
	"/assets/PC Compacta Mini-DAjhgxJ4.jpg": {
		"type": "image/jpeg",
		"etag": "\"eef2-2NwQ7b+qMFNLMSx1aLYBipeF/Z0\"",
		"mtime": "2026-07-03T22:18:38.308Z",
		"size": 61170,
		"path": "../public/assets/PC Compacta Mini-DAjhgxJ4.jpg"
	},
	"/assets/prod-aio-DM3Ql689.jpg": {
		"type": "image/jpeg",
		"etag": "\"5cf9-hLW8skeVwEhy/WQvVsiVAV7bks4\"",
		"mtime": "2026-07-03T22:18:38.316Z",
		"size": 23801,
		"path": "../public/assets/prod-aio-DM3Ql689.jpg"
	},
	"/assets/prod-desktop1-DtqOubVL.jpg": {
		"type": "image/jpeg",
		"etag": "\"a716-5lNSAcWbLHv4BxQVh1g5b++MbBI\"",
		"mtime": "2026-07-03T22:18:38.317Z",
		"size": 42774,
		"path": "../public/assets/prod-desktop1-DtqOubVL.jpg"
	},
	"/assets/prod-laptop1-Admryjhf.jpg": {
		"type": "image/jpeg",
		"etag": "\"8f3d-H3hwh1eoUQSmDpouu9fKUFAhybk\"",
		"mtime": "2026-07-03T22:18:38.318Z",
		"size": 36669,
		"path": "../public/assets/prod-laptop1-Admryjhf.jpg"
	},
	"/assets/prod-laptop2-DhDko2NC.jpg": {
		"type": "image/jpeg",
		"etag": "\"985c-5X2rGXDYtgHU49B0GQiBynkK6y4\"",
		"mtime": "2026-07-03T22:18:38.318Z",
		"size": 39004,
		"path": "../public/assets/prod-laptop2-DhDko2NC.jpg"
	},
	"/assets/productos-DpJ5hJdi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1537-7PkJdgAToTrWgMWVGa8GFFw3f04\"",
		"mtime": "2026-07-03T22:18:38.297Z",
		"size": 5431,
		"path": "../public/assets/productos-DpJ5hJdi.js"
	},
	"/assets/PC Workstation Pro-Zo-hlgtr.png": {
		"type": "image/png",
		"etag": "\"a4d09-mcyVxFcFaMUVstFqh4gXVWfBU3g\"",
		"mtime": "2026-07-03T22:18:38.309Z",
		"size": 675081,
		"path": "../public/assets/PC Workstation Pro-Zo-hlgtr.png"
	},
	"/assets/juego-DqZv3fRK.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b3682-dA91EInCt/NzgoPN2htIGelDVzQ\"",
		"mtime": "2026-07-03T22:18:38.313Z",
		"size": 1783426,
		"path": "../public/assets/juego-DqZv3fRK.jpg"
	},
	"/assets/routes-CsJgsKFK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"214c-Y+zDWWQiRxxl6DbUki9LeDd3XSE\"",
		"mtime": "2026-07-03T22:18:38.298Z",
		"size": 8524,
		"path": "../public/assets/routes-CsJgsKFK.js"
	},
	"/assets/SiteLayout-Cby8A5Ls.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1834-QnOYxs8HQDUCAr4b08GgPEEF7KQ\"",
		"mtime": "2026-07-03T22:18:38.294Z",
		"size": 6196,
		"path": "../public/assets/SiteLayout-Cby8A5Ls.js"
	},
	"/assets/styles-Dn3x6hll.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13a4d-uCOh+INtuKIkaWdgcZlgrX2sXaY\"",
		"mtime": "2026-07-03T22:18:38.320Z",
		"size": 80461,
		"path": "../public/assets/styles-Dn3x6hll.css"
	},
	"/assets/Teclado Mecánico RGB-fWLd-JJu.jpg": {
		"type": "image/jpeg",
		"etag": "\"103cc-VgAaFPF5zkSFmVelfwOZ6MuzePQ\"",
		"mtime": "2026-07-03T22:18:38.310Z",
		"size": 66508,
		"path": "../public/assets/Teclado Mecánico RGB-fWLd-JJu.jpg"
	},
	"/assets/ubicacion-BFwpYs01.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c16-eCzvKSy4wOOTISxnc0g4ucnjpa8\"",
		"mtime": "2026-07-03T22:18:38.299Z",
		"size": 3094,
		"path": "../public/assets/ubicacion-BFwpYs01.js"
	},
	"/assets/vision-mision-aQJQKyZA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7c-E0pbuDmYTDumPWB2u0chld7Xt0w\"",
		"mtime": "2026-07-03T22:18:38.299Z",
		"size": 3964,
		"path": "../public/assets/vision-mision-aQJQKyZA.js"
	},
	"/assets/Webcam HD 1080p-D8S23Rbv.jpg": {
		"type": "image/jpeg",
		"etag": "\"ae9a-5zsskimYX5eG8q4jVujhROCKoh8\"",
		"mtime": "2026-07-03T22:18:38.311Z",
		"size": 44698,
		"path": "../public/assets/Webcam HD 1080p-D8S23Rbv.jpg"
	},
	"/assets/portada-4jzw7z98.jpg": {
		"type": "image/jpeg",
		"etag": "\"2a71bb-Lb/5cqn3sSrSLrBac+zc9S1Vm4U\"",
		"mtime": "2026-07-03T22:18:38.315Z",
		"size": 2781627,
		"path": "../public/assets/portada-4jzw7z98.jpg"
	},
	"/assets/sala-CeUXy97H.jpg": {
		"type": "image/jpeg",
		"etag": "\"be050-LYpMlsxvwr9CKEsx8/ykqVoK0Co\"",
		"mtime": "2026-07-03T22:18:38.319Z",
		"size": 778320,
		"path": "../public/assets/sala-CeUXy97H.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_2WVTXE = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_2WVTXE
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
