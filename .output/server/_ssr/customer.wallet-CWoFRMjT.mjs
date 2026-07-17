import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as customerApi } from "./auth-context-3sAOA7Nr.mjs";
import { E as ArrowRight, a as Trophy, f as Recycle, r as User, s as Sparkles, t as Wallet, y as Gift } from "../_libs/lucide-react.mjs";
import { t as PortalShell } from "./PortalShell-CWm9FJ2i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.wallet-CWoFRMjT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
var REWARDS = [
	{
		name: "Safaricom Airtime KES 200",
		cost: 400,
		tag: "Airtime"
	},
	{
		name: "1 GB Data Bundle",
		cost: 350,
		tag: "Data"
	},
	{
		name: "Plant a Tree (Kakamega)",
		cost: 250,
		tag: "Impact"
	},
	{
		name: "10% off accessories",
		cost: 600,
		tag: "Retail"
	}
];
function WalletPage() {
	const [profile, setProfile] = (0, import_react.useState)(null);
	const [history, setHistory] = (0, import_react.useState)([]);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		customerApi.me().then(setProfile).catch((e) => setError(e.message));
		customerApi.history().then(setHistory).catch((e) => setError(e.message));
	}, []);
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, {
		nav: NAV,
		title: "Green Wallet",
		subtitle: "Your sustainability currency",
		badge: "Customer Portal",
		requiredRole: "customer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-xl bg-destructive/10 p-4 text-sm text-destructive",
			children: error
		})
	});
	if (!profile) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, {
		nav: NAV,
		title: "Green Wallet",
		subtitle: "Your sustainability currency",
		badge: "Customer Portal",
		requiredRole: "customer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm text-muted-foreground",
			children: "Loading…"
		})
	});
	const available = Number(profile.credits);
	const lifetime = history.filter((h) => h.type === "EARN").reduce((sum, h) => sum + Number(h.amount), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalShell, {
		nav: NAV,
		title: "Green Wallet",
		subtitle: "Your sustainability currency",
		badge: "Customer Portal",
		requiredRole: "customer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "brand-gradient relative overflow-hidden rounded-3xl p-8 text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider opacity-80",
							children: "Available Credits"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-display text-5xl font-bold",
							children: available.toLocaleString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs opacity-80",
							children: "Ready to redeem"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider opacity-80",
							children: "Lifetime Credits Earned"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-display text-3xl font-bold",
							children: lifetime.toLocaleString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs opacity-80",
							children: "All-time total"
						})
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-bold",
					children: "Redeem Rewards"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Use your credits across Safaricom services & impact projects."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full bg-warning/15 px-2.5 py-1 text-xs font-semibold text-amber-700",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Coming soon"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: REWARDS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card group flex flex-col gap-3 rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground",
								children: r.tag
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold leading-tight",
							children: r.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex items-center justify-between border-t border-border pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg font-bold text-primary",
								children: r.cost
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase text-muted-foreground",
								children: "credits"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								disabled: true,
								className: "inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-muted-foreground",
								children: ["Redeem ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
							})]
						})
					]
				}, r.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 glass-card rounded-2xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-bold",
					children: "Profile"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Name",
							value: profile.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Phone Number",
							value: profile.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Member Since",
							value: new Date(profile.created_at).toLocaleDateString("en", {
								day: "2-digit",
								month: "long",
								year: "numeric"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Total Transactions",
							value: String(history.length)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
							label: "Total Credits Earned",
							value: lifetime.toLocaleString()
						})
					]
				})]
			})
		]
	});
}
function Info({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card/60 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 font-semibold",
			children: value
		})]
	});
}
//#endregion
export { WalletPage as component };
