import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Leaf, a as Trophy, b as Earth, f as Recycle, r as User, s as Sparkles, t as Wallet, x as Crown } from "../_libs/lucide-react.mjs";
import { t as PortalShell } from "./PortalShell-CWm9FJ2i.mjs";
import { a as customerStats, s as getCustomers } from "./ecoloop-store-DtAb84HO.mjs";
import { t as StatCard } from "./StatCard-Bu9r_Eec.mjs";
import { a as XAxis, c as Bar, d as ResponsiveContainer, f as Tooltip, i as YAxis, l as Pie, n as PieChart, r as BarChart, s as CartesianGrid, u as Cell } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/customer.index-BXGXOwNQ.js
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
var CHART_COLORS = [
	"oklch(0.64 0.17 150)",
	"oklch(0.62 0.16 240)",
	"oklch(0.78 0.16 70)",
	"oklch(0.52 0.15 150)",
	"oklch(0.7 0.15 195)"
];
function CustomerDashboard() {
	const customer = getCustomers()[0];
	const stats = customerStats(customer.id);
	const credits = stats.credits + 800;
	const devicesRecycled = stats.count + 14;
	const co2 = Math.round((stats.co2 + 55) * 10) / 10;
	const monthly = (0, import_react.useMemo)(() => {
		const buckets = [
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
			"Jan"
		].map((m) => ({
			m,
			devices: 0
		}));
		stats.records.forEach((r) => {
			const m = new Date(r.createdAt).toLocaleString("en", { month: "short" });
			const found = buckets.find((b) => b.m === m);
			if (found) found.devices += 1;
		});
		return buckets.map((b, i) => ({
			...b,
			devices: b.devices + [
				2,
				3,
				1,
				4,
				2,
				5
			][i]
		}));
	}, [stats.records]);
	const byCategory = (0, import_react.useMemo)(() => {
		const c = {};
		stats.records.forEach((r) => c[r.deviceType] = (c[r.deviceType] || 0) + 1);
		const merged = {
			Smartphone: 6,
			Tablet: 3,
			Laptop: 2,
			"Feature Phone": 4
		};
		Object.entries(c).forEach(([k, v]) => merged[k] = (merged[k] || 0) + v);
		return Object.entries(merged).map(([name, value]) => ({
			name,
			value
		}));
	}, [stats.records]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalShell, {
		nav: NAV,
		title: `Welcome, ${customer.fullName.split(" ")[0]}`,
		subtitle: "Together we're building a greener future",
		badge: "Customer Portal",
		requiredRole: "customer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "brand-gradient relative overflow-hidden rounded-3xl p-6 text-primary-foreground md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-4 md:grid-cols-[1fr_auto] md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crown, { className: "h-3 w-3" }), " Gold Member · Top 8%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-balance mt-4 font-display text-3xl font-bold leading-tight md:text-4xl",
								children: "You're powering Kenya's circular economy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-xl text-sm opacity-90",
								children: "Every device you recycle keeps toxic waste out of landfills and rare metals in circulation."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end gap-6 rounded-2xl bg-white/15 px-6 py-5 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase opacity-80",
									children: "Available"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-4xl font-bold",
									children: credits.toLocaleString()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] opacity-80",
									children: "Green Credits"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-8 w-8 opacity-80" })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Current Credits",
						value: credits.toLocaleString(),
						sub: "Earnings & bonuses",
						icon: Wallet
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Devices Recycled",
						value: String(devicesRecycled),
						sub: "Lifetime",
						icon: Recycle,
						accent: "info"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "CO₂ Saved",
						value: `${co2} kg`,
						sub: `= ${Math.round(co2 / 21)} trees planted`,
						icon: Leaf
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Sustainability Rank",
						value: "Gold",
						sub: "Next: Platinum (200 pts)",
						icon: Crown,
						accent: "warning"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-5 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold",
							children: "Monthly Recycling Activity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Devices brought in over the last 6 months"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-64 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: monthly,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									vertical: false,
									stroke: "oklch(0.92 0.01 150)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "m",
									tick: { fontSize: 12 },
									stroke: "oklch(0.5 0.02 160)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									tick: { fontSize: 12 },
									stroke: "oklch(0.5 0.02 160)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									borderRadius: 12,
									border: "1px solid oklch(0.92 0.01 150)"
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "devices",
									fill: "oklch(0.64 0.17 150)",
									radius: [
										10,
										10,
										0,
										0
									]
								})
							]
						}) })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-bold",
								children: "Devices by Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Lifetime split"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-52 w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
								data: byCategory,
								dataKey: "value",
								nameKey: "name",
								innerRadius: 48,
								outerRadius: 80,
								paddingAngle: 3,
								children: byCategory.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: CHART_COLORS[i % CHART_COLORS.length] }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								borderRadius: 12,
								border: "1px solid oklch(0.92 0.01 150)"
							} })] }) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 grid grid-cols-2 gap-1.5 text-[11px]",
							children: byCategory.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-1.5 text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2 w-2 rounded-full",
										style: { backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }
									}),
									b.name,
									" · ",
									b.value
								]
							}, b.name))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card overflow-hidden rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-semibold text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-4 w-4" }), " Lifetime Environmental Impact"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-xl font-bold",
							children: "Your circle of impact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-3 gap-3 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {
									value: `${co2} kg`,
									label: "CO₂ avoided"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {
									value: `${Math.round(co2 * .4)} L`,
									label: "Water saved"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {
									value: `${Math.round(co2 / 21)}`,
									label: "Trees equivalent"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 rounded-xl bg-muted p-4 text-sm text-muted-foreground",
							children: "\"Recycling 1 smartphone saves the same energy as a laptop running for 44 hours.\""
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold",
								children: "Achievements"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "3 of 6 unlocked"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-3 gap-3",
							children: [
								{
									i: "🌱",
									n: "First Recycle",
									u: true
								},
								{
									i: "♻️",
									n: "Eco Champion",
									u: true
								},
								{
									i: "🌍",
									n: "Carbon Saver",
									u: true
								},
								{
									i: "🏆",
									n: "Green Ambassador",
									u: false
								},
								{
									i: "⚡",
									n: "Power Recycler",
									u: false
								},
								{
									i: "💎",
									n: "Diamond Tier",
									u: false
								}
							].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex flex-col items-center gap-1 rounded-xl border p-3 text-center transition ${a.u ? "border-primary/30 bg-primary/5" : "border-border bg-card/60 opacity-60"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl",
										children: a.i
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold leading-tight",
										children: a.n
									}),
									!a.u && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] uppercase text-muted-foreground",
										children: "Locked"
									})
								]
							}, a.n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-xl bg-muted p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "Next: Green Ambassador"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "7 / 10 devices"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-2 overflow-hidden rounded-full bg-background",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "brand-gradient h-full",
									style: { width: "70%" }
								})
							})]
						})
					]
				})]
			})
		]
	});
}
function Impact({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card/60 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-2xl font-bold text-primary",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] uppercase tracking-wide text-muted-foreground",
			children: label
		})]
	});
}
//#endregion
export { CustomerDashboard as component };
