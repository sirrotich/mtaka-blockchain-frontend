import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Trophy, f as Recycle, r as User, t as Wallet } from "../_libs/lucide-react.mjs";
import { t as PortalShell } from "./PortalShell-CWm9FJ2i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.achievements-B4XbZNWC.js
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
var BADGES = [
	{
		i: "🌱",
		n: "First Recycle",
		d: "Recycle your first device",
		p: 100,
		u: true
	},
	{
		i: "♻️",
		n: "Eco Champion",
		d: "Recycle 5 devices",
		p: 100,
		u: true
	},
	{
		i: "🌍",
		n: "Carbon Saver",
		d: "Save 50kg of CO₂",
		p: 100,
		u: true
	},
	{
		i: "🏆",
		n: "Green Ambassador",
		d: "Recycle 10 devices",
		p: 70,
		u: false
	},
	{
		i: "⚡",
		n: "Power Recycler",
		d: "Recycle in 5 different months",
		p: 60,
		u: false
	},
	{
		i: "💎",
		n: "Diamond Tier",
		d: "Earn 5,000 lifetime credits",
		p: 32,
		u: false
	},
	{
		i: "🦒",
		n: "Wildlife Guardian",
		d: "Plant 10 trees via rewards",
		p: 10,
		u: false
	},
	{
		i: "🚀",
		n: "Carbon Negative",
		d: "Save 100kg of CO₂",
		p: 58,
		u: false
	}
];
function AchievementsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, {
		nav: NAV,
		title: "Achievements",
		subtitle: "Earn badges as you make an impact",
		badge: "Customer Portal",
		requiredRole: "customer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: BADGES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `glass-card flex flex-col items-center rounded-2xl p-5 text-center ${b.u ? "" : "opacity-90"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid h-20 w-20 place-items-center rounded-full text-4xl ${b.u ? "brand-gradient shadow-xl shadow-primary/30" : "bg-muted"}`,
						children: b.i
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 font-display text-base font-bold",
						children: b.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-xs text-muted-foreground",
						children: b.d
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 w-full overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-full ${b.u ? "brand-gradient" : "bg-primary/60"}`,
								style: { width: `${b.p}%` }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 text-[11px] font-semibold text-muted-foreground",
							children: b.u ? "Unlocked" : `${b.p}% progress`
						})]
					})
				]
			}, b.n))
		})
	});
}
//#endregion
export { AchievementsPage as component };
