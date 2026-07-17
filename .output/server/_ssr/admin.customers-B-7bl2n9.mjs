import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as BadgePlus, d as Search, n as Users, v as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { t as PortalShell } from "./PortalShell-CWm9FJ2i.mjs";
import { a as customerStats, s as getCustomers } from "./ecoloop-store-DtAb84HO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.customers-B-7bl2n9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/admin",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/admin/intake",
		label: "New Intake",
		icon: BadgePlus
	},
	{
		to: "/admin/customers",
		label: "Customers",
		icon: Users
	}
];
function CustomersPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const customers = getCustomers().filter((c) => !q || c.fullName.toLowerCase().includes(q.toLowerCase()) || c.phone.includes(q) || c.nationalId.includes(q));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalShell, {
		nav: NAV,
		title: "Customers",
		subtitle: "All registered Green Circle members",
		badge: "Admin Portal",
		requiredRole: ["admin", "shop"],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card flex items-center gap-3 rounded-2xl p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "ml-2 h-4 w-4 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search by name, phone or ID…",
					className: "h-10 flex-1 bg-transparent text-sm outline-none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/intake",
					className: "brand-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgePlus, { className: "h-4 w-4" }), " New Intake"]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: [customers.map((c) => {
				const s = customerStats(c.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "brand-gradient grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-primary-foreground",
							children: c.fullName.split(" ").map((p) => p[0]).slice(0, 2).join("")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-semibold",
								children: c.fullName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: c.phone
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-3 gap-2 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-muted p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-bold text-primary",
									children: s.credits
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase text-muted-foreground",
									children: "Credits"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-muted p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-bold",
									children: s.count
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase text-muted-foreground",
									children: "Devices"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-muted p-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-bold",
									children: s.co2
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase text-muted-foreground",
									children: "kg CO₂"
								})]
							})
						]
					})]
				}, c.id);
			}), customers.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-full rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground",
				children: "No customers match your search."
			})]
		})]
	});
}
//#endregion
export { CustomersPage as component };
