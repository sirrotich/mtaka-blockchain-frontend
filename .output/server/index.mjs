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
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"2532-P1u486agW3ymimJYHS3VvIiBLK8\"",
		"mtime": "2026-07-17T05:29:31.504Z",
		"size": 9522,
		"path": "../public/favicon.svg"
	},
	"/icons.svg": {
		"type": "image/svg+xml",
		"etag": "\"13a7-+Yl6wl4T3p6mAdLxrF2TU9++/No\"",
		"mtime": "2026-07-17T05:29:31.504Z",
		"size": 5031,
		"path": "../public/icons.svg"
	},
	"/assets/Logo-BQ1aWJyo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7db-x8z0yHrR0xJ8D3xYknKf05CULys\"",
		"mtime": "2026-07-17T05:29:30.355Z",
		"size": 2011,
		"path": "../public/assets/Logo-BQ1aWJyo.js"
	},
	"/assets/PortalShell-C_hSyJh8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11d6-EBM6LYnOGQ9hv0wCLbATKypYqA4\"",
		"mtime": "2026-07-17T05:29:30.359Z",
		"size": 4566,
		"path": "../public/assets/PortalShell-C_hSyJh8.js"
	},
	"/assets/StatCard-DNEkSQyi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5aafa-GXGBlEwZtz3yZOKYqL11RQ0jXck\"",
		"mtime": "2026-07-17T05:29:30.359Z",
		"size": 371450,
		"path": "../public/assets/StatCard-DNEkSQyi.js"
	},
	"/assets/admin.customers-yot0iaDZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b74-zWoMh2C00CSnG1sDVwyD7WD5duU\"",
		"mtime": "2026-07-17T05:29:30.361Z",
		"size": 2932,
		"path": "../public/assets/admin.customers-yot0iaDZ.js"
	},
	"/assets/admin.index-DlBqFsb5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48da-URQzcOzw4sOz5QYQGYoUSyHw8WU\"",
		"mtime": "2026-07-17T05:29:30.361Z",
		"size": 18650,
		"path": "../public/assets/admin.index-DlBqFsb5.js"
	},
	"/assets/admin.intake-Ch0WjsJP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5897-rUxk3yYp8qlaS/KqIaY3vdpJ5lI\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 22679,
		"path": "../public/assets/admin.intake-Ch0WjsJP.js"
	},
	"/assets/arrow-right-Bacuc5dJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-I4qMVIONc7KFJNBQhm8IdmArksA\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 153,
		"path": "../public/assets/arrow-right-Bacuc5dJ.js"
	},
	"/assets/customer.achievements-BLlLKviK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"84a-yA/IowltFbqqNCXJ6FVFzs5KIws\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 2122,
		"path": "../public/assets/customer.achievements-BLlLKviK.js"
	},
	"/assets/customer.history-9vOAqXa0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bf5-3KLHN4t4dM8mdKbBOJ14Ge1W9Rs\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 3061,
		"path": "../public/assets/customer.history-9vOAqXa0.js"
	},
	"/assets/customer.index-ADsA3jZy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8714-k/9UQyT92YfOXAxWcErSFERB8fo\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 34580,
		"path": "../public/assets/customer.index-ADsA3jZy.js"
	},
	"/assets/customer.wallet-DxvUmP_I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"161b-NNWXSfvAGHyemEiFoqhbC8Q8f70\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 5659,
		"path": "../public/assets/customer.wallet-DxvUmP_I.js"
	},
	"/assets/ecoloop-store-KX8woWNk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d48-W/2zQex1g928YnVqIwvr1UlhOag\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 3400,
		"path": "../public/assets/ecoloop-store-KX8woWNk.js"
	},
	"/assets/index-ChfP0jCm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ad0b-ngy679v/wFok5S73P8LDpcs6Pqg\"",
		"mtime": "2026-07-17T05:29:30.351Z",
		"size": 371979,
		"path": "../public/assets/index-ChfP0jCm.js"
	},
	"/assets/login-CPBfvhDX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"936-xZ+bKg1hO8En/1bffqJQLssZjjE\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 2358,
		"path": "../public/assets/login-CPBfvhDX.js"
	},
	"/assets/map-pin-BVcELerK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-P93nKSfaBL6TVv7mkxSDhX/txqw\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 247,
		"path": "../public/assets/map-pin-BVcELerK.js"
	},
	"/assets/recycle-DeVOCE3B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23a-PDqAbMEa0E4kA/KHzhXTraW4Unc\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 570,
		"path": "../public/assets/recycle-DeVOCE3B.js"
	},
	"/assets/routes-CuYBECD9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14ac-2gZEbegS3BbqzVwu9a9FKKUVD/E\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 5292,
		"path": "../public/assets/routes-CuYBECD9.js"
	},
	"/assets/sparkles-CyhM_3Ug.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e2-SiDYaRnpObuLsr41fCxfSlz/Mhs\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 482,
		"path": "../public/assets/sparkles-CyhM_3Ug.js"
	},
	"/assets/styles-D71fmi4E.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"a544-HjcsWYXQRNqhvHnQJnntG7IVHJQ\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 42308,
		"path": "../public/assets/styles-D71fmi4E.css"
	},
	"/assets/trophy-C9PcbR91.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d0-hEpFhZnl+Kvq5aF3u55q7B3haNg\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 464,
		"path": "../public/assets/trophy-C9PcbR91.js"
	},
	"/assets/useRouter-BJ5XiiId.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21ad-UmZd5f/nXJDbSsKvk5NqhkbrzKE\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 8621,
		"path": "../public/assets/useRouter-BJ5XiiId.js"
	},
	"/assets/user-BdjC90Qe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8-KrqkuA9Y5G1j1aHqn5aaheaSyS4\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 184,
		"path": "../public/assets/user-BdjC90Qe.js"
	},
	"/assets/users-BnJHyesU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"390-HvLQClLoIGfpCElq44tGPsNGGdU\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 912,
		"path": "../public/assets/users-BnJHyesU.js"
	},
	"/assets/wallet-DP8bKEL4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"112-cZjkYK3xbFg08ArvcX9SuaBhhe0\"",
		"mtime": "2026-07-17T05:29:30.362Z",
		"size": 274,
		"path": "../public/assets/wallet-DP8bKEL4.js"
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
var _lazy_b2n8j1 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_b2n8j1
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
