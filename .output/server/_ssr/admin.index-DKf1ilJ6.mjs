import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ChartColumn, O as Activity, T as BadgePlus, _ as Leaf, f as Recycle, n as Users, t as Wallet, v as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { t as PortalShell } from "./PortalShell-CWm9FJ2i.mjs";
import { c as getRecords, l as globalStats, s as getCustomers } from "./ecoloop-store-DtAb84HO.mjs";
import { t as StatCard } from "./StatCard-Bu9r_Eec.mjs";
import { a as XAxis, c as Bar, d as ResponsiveContainer, f as Tooltip, i as YAxis, o as Area, r as BarChart, s as CartesianGrid, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-DKf1ilJ6.js
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
function AdminDashboard() {
	const stats = globalStats();
	const records = getRecords();
	const customers = getCustomers();
	const trend = (0, import_react.useMemo)(() => {
		const buckets = {};
		const fmt = (d) => d.toLocaleString("en", { month: "short" });
		const now = /* @__PURE__ */ new Date();
		for (let i = 5; i >= 0; i--) {
			const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
			buckets[fmt(d)] = {
				month: fmt(d),
				devices: 0,
				credits: 0
			};
		}
		records.forEach((r) => {
			const m = fmt(new Date(r.createdAt));
			if (buckets[m]) {
				buckets[m].devices += 1;
				buckets[m].credits += r.credits;
			}
		});
		return Object.values(buckets).map((b, i) => ({
			...b,
			devices: b.devices + [
				1820,
				2100,
				1950,
				2480,
				2310,
				2700
			][i],
			credits: b.credits + [
				62e3,
				71e3,
				68e3,
				84e3,
				79e3,
				92e3
			][i]
		}));
	}, [records]);
	const categories = (0, import_react.useMemo)(() => {
		const counts = {};
		records.forEach((r) => counts[r.deviceType] = (counts[r.deviceType] || 0) + 1);
		const seed = {
			Smartphone: 5210,
			Laptop: 1840,
			Tablet: 1620,
			"Feature Phone": 1490,
			Router: 890,
			"Smart Watch": 720
		};
		const merged = {
			...seed,
			...Object.fromEntries(Object.entries(counts).map(([k, v]) => [k, seed[k] ? seed[k] + v : v]))
		};
		return Object.entries(merged).map(([name, value]) => ({
			name,
			value
		})).sort((a, b) => b.value - a.value).slice(0, 6);
	}, [records]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalShell, {
		nav: NAV,
		title: "Operations Dashboard",
		subtitle: "Live recycling activity across all Safaricom shops",
		badge: "Admin Portal",
		requiredRole: ["admin", "shop"],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-bold md:hidden",
					children: "Operations"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: ["Welcome back · ", (/* @__PURE__ */ new Date()).toLocaleDateString("en", {
						weekday: "long",
						month: "long",
						day: "numeric"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/intake",
					className: "brand-gradient inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgePlus, { className: "h-4 w-4" }), " New Intake"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total Devices Recycled",
						value: stats.devices.toLocaleString(),
						sub: "+248 this week",
						icon: Recycle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Green Credits Issued",
						value: stats.credits.toLocaleString(),
						sub: "+12,400 this week",
						icon: Wallet,
						accent: "info"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Total CO₂ Saved",
						value: `${stats.co2Tons} Tons`,
						sub: "Equivalent to 920 trees",
						icon: Leaf
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Active Customers",
						value: stats.customers.toLocaleString(),
						sub: `+${customers.length - 3} new`,
						icon: Users,
						accent: "warning"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-5 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold",
							children: "Recycling Trends"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Devices intake and credits issued · last 6 months"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }), " Devices"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-info" }), " Credits"]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: trend,
							margin: {
								left: -10,
								right: 10
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "gDev",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "oklch(0.64 0.17 150)",
										stopOpacity: .5
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "oklch(0.64 0.17 150)",
										stopOpacity: 0
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "gCred",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "oklch(0.62 0.16 240)",
										stopOpacity: .35
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "oklch(0.62 0.16 240)",
										stopOpacity: 0
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									vertical: false,
									stroke: "oklch(0.92 0.01 150)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "month",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "devices",
									stroke: "oklch(0.64 0.17 150)",
									strokeWidth: 2.5,
									fill: "url(#gDev)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "credits",
									stroke: "oklch(0.62 0.16 240)",
									strokeWidth: 2.5,
									fill: "url(#gCred)"
								})
							]
						}) })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-2xl p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-base font-bold",
							children: "Top Categories"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "By total intake"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-4 w-4 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72 w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
							data: categories,
							layout: "vertical",
							margin: {
								left: 10,
								right: 10
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									horizontal: false,
									stroke: "oklch(0.92 0.01 150)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									type: "number",
									tick: { fontSize: 11 },
									stroke: "oklch(0.5 0.02 160)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									type: "category",
									dataKey: "name",
									tick: { fontSize: 11 },
									stroke: "oklch(0.5 0.02 160)",
									width: 90
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									borderRadius: 12,
									border: "1px solid oklch(0.92 0.01 150)"
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
									dataKey: "value",
									fill: "oklch(0.64 0.17 150)",
									radius: [
										0,
										8,
										8,
										0
									]
								})
							]
						}) })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 glass-card rounded-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border/60 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-bold",
						children: "Recent Recycling Activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Latest device intakes"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4 text-muted-foreground" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border/60",
					children: records.slice(0, 8).map((r) => {
						const cust = customers.find((c) => c.id === r.customerId);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-3.5 transition hover:bg-accent/30 sm:grid-cols-[1.5fr_1fr_1fr_auto_auto]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "truncate font-semibold",
										children: [
											r.brand,
											" ",
											r.model
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground",
										children: [
											r.deviceType,
											" · ",
											r.deviceId
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden text-sm text-muted-foreground sm:block",
									children: cust?.fullName ?? "Walk-in"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden text-sm text-muted-foreground sm:block",
									children: r.location
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right text-sm font-bold text-primary",
									children: [
										"+",
										r.credits,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-medium text-muted-foreground",
											children: "credits"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden text-xs text-muted-foreground sm:block",
									children: new Date(r.createdAt).toLocaleDateString()
								})
							]
						}, r.id);
					})
				})]
			})
		]
	});
}
//#endregion
export { AdminDashboard as component };
