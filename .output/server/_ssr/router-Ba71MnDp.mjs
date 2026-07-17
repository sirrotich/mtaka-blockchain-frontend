import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AuthProvider } from "./auth-context-3sAOA7Nr.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Ba71MnDp.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D71fmi4E.css";
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
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "M-Taka by Safaricom" },
			{
				name: "description",
				content: "Device lifecycle tracking & Green Credits platform by Safaricom."
			},
			{
				property: "og:title",
				content: "M-Taka by Safaricom"
			},
			{
				property: "og:description",
				content: "Recycle devices, earn Green Credits, save CO₂."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
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
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-right",
			richColors: true,
			closeButton: true
		})] })
	});
}
var $$splitComponentImporter$8 = () => import("./login-CYezXUhV.mjs");
var Route$8 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Login · M-Taka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./routes-C0FdHqix.mjs");
var Route$7 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "M-Taka by Safaricom — Recycle, earn Green Credits" }, {
		name: "description",
		content: "Track e-waste recycling, monitor your environmental impact, and earn Green Credits at any Safaricom shop."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./customer.index-BXGXOwNQ.mjs");
var Route$6 = createFileRoute("/customer/")({
	head: () => ({ meta: [{ title: "My Wallet · M-Taka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./admin.index-DKf1ilJ6.mjs");
var Route$5 = createFileRoute("/admin/")({
	head: () => ({ meta: [{ title: "Admin Dashboard · M-Taka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./customer.wallet-CWoFRMjT.mjs");
var Route$4 = createFileRoute("/customer/wallet")({
	head: () => ({ meta: [{ title: "Green Wallet · M-Taka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./customer.history-RWtjc7c6.mjs");
var Route$3 = createFileRoute("/customer/history")({
	head: () => ({ meta: [{ title: "Recycling History · M-Taka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./customer.achievements-B4XbZNWC.mjs");
var Route$2 = createFileRoute("/customer/achievements")({
	head: () => ({ meta: [{ title: "Achievements · M-Taka" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./admin.intake-njVS5e14.mjs");
var Route$1 = createFileRoute("/admin/intake")({
	head: () => ({ meta: [{ title: "New Intake · M-Taka Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin.customers-B-7bl2n9.mjs");
var Route = createFileRoute("/admin/customers")({
	head: () => ({ meta: [{ title: "Customers · M-Taka Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var LoginRoute = Route$8.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$9
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var CustomerIndexRoute = Route$6.update({
	id: "/customer/",
	path: "/customer/",
	getParentRoute: () => Route$9
});
var AdminIndexRoute = Route$5.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => Route$9
});
var CustomerWalletRoute = Route$4.update({
	id: "/customer/wallet",
	path: "/customer/wallet",
	getParentRoute: () => Route$9
});
var CustomerHistoryRoute = Route$3.update({
	id: "/customer/history",
	path: "/customer/history",
	getParentRoute: () => Route$9
});
var CustomerAchievementsRoute = Route$2.update({
	id: "/customer/achievements",
	path: "/customer/achievements",
	getParentRoute: () => Route$9
});
var AdminIntakeRoute = Route$1.update({
	id: "/admin/intake",
	path: "/admin/intake",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	LoginRoute,
	AdminCustomersRoute: Route.update({
		id: "/admin/customers",
		path: "/admin/customers",
		getParentRoute: () => Route$9
	}),
	AdminIntakeRoute,
	CustomerAchievementsRoute,
	CustomerHistoryRoute,
	CustomerWalletRoute,
	AdminIndexRoute,
	CustomerIndexRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		trailingSlash: "always"
	});
};
//#endregion
export { getRouter };
