import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Leaf, a as Trophy, f as Recycle, m as MapPin, r as User, t as Wallet } from "../_libs/lucide-react.mjs";
import { t as PortalShell } from "./PortalShell-CWm9FJ2i.mjs";
import { a as customerStats, s as getCustomers } from "./ecoloop-store-DtAb84HO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.history-RWtjc7c6.js
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/customer",
		label: "Dashboard",
		icon: User
	},
	{
		to: "/customer/history",
		label: "History",
		icon: Recycle
	},
	{
		to: "/customer/wallet",
		label: "Green Wallet",
		icon: Wallet
	},
	{
		to: "/customer/achievements",
		label: "Achievements",
		icon: Trophy
	}
];
function History() {
	const c = getCustomers()[0];
	const { records } = customerStats(c.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, {
		nav: NAV,
		title: "Recycling History",
		subtitle: "Every device, every credit, every gram of CO₂ saved",
		badge: "Customer Portal",
		requiredRole: "customer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative ml-3 border-l-2 border-dashed border-primary/30 pl-8",
			children: [records.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground",
				children: "No recycling events yet. Visit a Safaricom shop to start earning."
			}), records.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "brand-gradient absolute -left-[42px] top-2 grid h-8 w-8 place-items-center rounded-full text-primary-foreground ring-4 ring-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recycle, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card grid grid-cols-1 gap-4 rounded-2xl p-5 sm:grid-cols-[1fr_auto_auto]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary",
										children: "Recycled"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: new Date(r.createdAt).toLocaleDateString("en", {
											day: "2-digit",
											month: "short",
											year: "numeric"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 font-display text-lg font-bold",
									children: [
										r.brand,
										" ",
										r.model
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.deviceType }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [r.weightKg, " kg"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
												" ",
												r.location
											]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-2xl font-bold text-primary",
								children: ["+", r.credits]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase text-muted-foreground",
								children: "Credits"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1 font-semibold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-4 w-4 text-primary" }),
									" ",
									r.co2Saved,
									" kg"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase text-muted-foreground",
								children: "CO₂ saved"
							})]
						})
					]
				})]
			}, r.id))]
		})
	});
}
//#endregion
export { History as component };
