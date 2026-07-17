import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as ArrowRight, _ as Leaf, f as Recycle, l as ShieldCheck, o as Store, r as User, s as Sparkles } from "../_libs/lucide-react.mjs";
import { t as Logo } from "./Logo-DI8muffu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C0FdHqix.js
var import_jsx_runtime = require_jsx_runtime();
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-info/10 blur-[100px]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "hidden rounded-full px-4 py-2 font-medium text-muted-foreground hover:text-foreground sm:inline",
						children: "Admin"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/customer",
						className: "brand-gradient inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition hover:shadow-lg",
						children: ["Open my wallet ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-6 pb-20 pt-12 md:pt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " New · Green Credits live across all shops"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-balance mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl",
						children: [
							"Recycle your device.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent",
								children: "Earn Green Credits."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-balance mt-6 max-w-2xl text-lg text-muted-foreground",
						children: "M-Taka tracks every device lifecycle event across Safaricom shops — rewarding customers for keeping e-waste out of landfills and turning sustainability into a tangible benefit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/customer",
							className: "glass-card group flex items-center gap-5 rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "brand-gradient grid h-14 w-14 shrink-0 place-items-center rounded-xl shadow-lg shadow-primary/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-7 w-7 text-primary-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-xl font-bold",
										children: "Customer Portal"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground",
										children: "View your Green Credits, history & impact"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin",
							className: "glass-card group flex items-center gap-5 rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-foreground text-background shadow-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-7 w-7" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-xl font-bold",
										children: "Shop Admin Portal"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground",
										children: "Register intakes & manage customers"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-6 sm:grid-cols-3",
						children: [
							{
								i: Recycle,
								t: "12,547 devices",
								s: "Recycled responsibly"
							},
							{
								i: Leaf,
								t: "18.4 Tons",
								s: "Of CO₂ saved"
							},
							{
								i: ShieldCheck,
								t: "8,912 members",
								s: "In the Green Circle"
							}
						].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card/60 p-5 backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(x.i, { className: "h-5 w-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 font-display text-2xl font-bold",
									children: x.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground",
									children: x.s
								})
							]
						}, x.t))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border/60 py-8 text-center text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Safaricom PLC · M-Taka is a sustainability initiative."
				]
			})
		]
	});
}
//#endregion
export { Landing as component };
