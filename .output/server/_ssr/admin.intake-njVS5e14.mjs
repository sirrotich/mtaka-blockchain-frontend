import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowLeft, E as ArrowRight, S as CircleCheck, T as BadgePlus, _ as Leaf, c as Smartphone, d as Search, f as Recycle, i as UserPlus, m as MapPin, n as Users, p as Printer, r as User, s as Sparkles, u as Send, v as LayoutDashboard } from "../_libs/lucide-react.mjs";
import { t as PortalShell } from "./PortalShell-CWm9FJ2i.mjs";
import { a as customerStats, i as calculateReward, n as addCustomer, o as findCustomer, r as addRecord, t as SHOP_LOCATIONS } from "./ecoloop-store-DtAb84HO.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.intake-njVS5e14.js
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
var DEVICE_TYPES = [
	"Smartphone",
	"Feature Phone",
	"Tablet",
	"Laptop",
	"Desktop",
	"Router",
	"Smart Watch",
	"Accessories",
	"Other"
];
var CONDITIONS = [
	"Working",
	"Partially Working",
	"Damaged",
	"Dead"
];
function IntakeFlow() {
	const [step, setStep] = (0, import_react.useState)(1);
	const [customer, setCustomer] = (0, import_react.useState)(null);
	const [location, setLocation] = (0, import_react.useState)(SHOP_LOCATIONS[0]);
	const [device, setDevice] = (0, import_react.useState)({
		type: "Smartphone",
		brand: "",
		model: "",
		weight: "",
		condition: "Working"
	});
	const [record, setRecord] = (0, import_react.useState)(null);
	const reward = device.weight ? calculateReward(device.type, parseFloat(device.weight) || 0, device.condition) : null;
	const reset = () => {
		setStep(1);
		setCustomer(null);
		setRecord(null);
		setDevice({
			type: "Smartphone",
			brand: "",
			model: "",
			weight: "",
			condition: "Working"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalShell, {
		nav: NAV,
		title: "New Device Intake",
		subtitle: "3-step recycling flow",
		badge: "Admin Portal",
		requiredRole: ["admin", "shop"],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, { step }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6",
			children: [
				step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCustomer, {
					location,
					setLocation,
					onSelect: (c) => {
						setCustomer(c);
						setStep(2);
					}
				}),
				step === 2 && customer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepDevice, {
					customer,
					location,
					device,
					setDevice,
					onBack: () => setStep(1),
					onContinue: () => setStep(3),
					reward
				}),
				step === 3 && customer && reward && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepSummary, {
					customer,
					device,
					location,
					reward,
					onBack: () => setStep(2),
					onConfirm: () => {
						const rec = addRecord({
							customerId: customer.id,
							deviceType: device.type,
							brand: device.brand,
							model: device.model,
							weightKg: parseFloat(device.weight),
							condition: device.condition,
							location,
							credits: reward.credits,
							co2Saved: reward.co2Saved
						});
						setRecord(rec);
						setStep(4);
						toast.success("Device recycled successfully", { description: `+${rec.credits} Green Credits awarded` });
					}
				}),
				step === 4 && record && customer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepSuccess, {
					record,
					customer,
					onReset: reset
				})
			]
		})]
	});
}
function Stepper({ step }) {
	const steps = [
		"Customer",
		"Device Details",
		"Summary",
		"Complete"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex items-center gap-2 overflow-x-auto",
		children: steps.map((label, i) => {
			const n = i + 1;
			const active = step === n;
			const done = step > n;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex shrink-0 items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `grid h-8 w-8 place-items-center rounded-full text-xs font-bold transition ${done ? "brand-gradient text-primary-foreground" : active ? "bg-primary/15 text-primary ring-2 ring-primary" : "bg-muted text-muted-foreground"}`,
						children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }) : n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-sm font-medium ${active ? "text-foreground" : "text-muted-foreground"}`,
						children: label
					}),
					i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mx-1 h-px w-8 sm:w-16 ${done ? "bg-primary" : "bg-border"}` })
				]
			}, label);
		})
	});
}
function StepCustomer({ location, setLocation, onSelect }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const [searched, setSearched] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)();
	const [showRegister, setShowRegister] = (0, import_react.useState)(false);
	const handleSearch = (e) => {
		e?.preventDefault();
		const c = findCustomer(query);
		setResult(c);
		setSearched(true);
		if (!c) setShowRegister(true);
	};
	const stats = result ? customerStats(result.id) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1fr_320px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold",
						children: "Find or register customer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Search by National ID or Phone Number"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSearch,
						className: "mt-5 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								autoFocus: true,
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "e.g. 254712345678 or 29384756",
								className: "h-12 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "brand-gradient inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20",
							children: ["Search ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2 text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Quick demo:"
						}), [
							"254712345678",
							"31827465",
							"Cynthia"
						].map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setQuery(q);
								setTimeout(() => handleSearch(), 0);
							},
							className: "rounded-full bg-muted px-2.5 py-1 font-medium text-muted-foreground hover:bg-accent hover:text-foreground",
							children: q
						}, q))]
					}),
					searched && result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-primary/30 bg-primary/5 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "brand-gradient grid h-12 w-12 place-items-center rounded-full text-base font-bold text-primary-foreground",
										children: result.fullName.split(" ").map((s) => s[0]).slice(0, 2).join("")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-lg font-bold",
										children: result.fullName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground",
										children: [
											result.phone,
											" · ID ",
											result.nationalId
										]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary",
									children: "Verified"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid grid-cols-3 gap-3 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "Credits",
										value: stats.credits.toLocaleString()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "Devices",
										value: String(stats.count)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
										label: "CO₂ saved",
										value: `${stats.co2} kg`
									})
								]
							}),
							stats.records.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
									children: "Previous devices"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1.5 text-sm",
									children: stats.records.slice(0, 3).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center justify-between rounded-lg bg-card px-3 py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											r.brand,
											" ",
											r.model
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-primary font-semibold",
											children: ["+", r.credits]
										})]
									}, r.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onSelect(result),
								className: "brand-gradient mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-primary-foreground",
								children: ["Continue with this customer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}),
					searched && !result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-dashed border-border bg-muted/50 p-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "mx-auto h-8 w-8 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 font-semibold",
								children: "No customer found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Register a new customer to continue"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setShowRegister(true),
								className: "brand-gradient mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "h-4 w-4" }), " Register Customer"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "glass-card h-fit rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
						children: "Shop Location"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: location,
							onChange: (e) => setLocation(e.target.value),
							className: "w-full rounded-lg border border-border bg-card px-3 py-2 text-sm",
							children: SHOP_LOCATIONS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: l }, l))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-border bg-card/60 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: "Tip: Customers can use their Safaricom phone number or National ID — both work."
						})]
					})
				]
			}),
			showRegister && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterModal, {
				onClose: () => setShowRegister(false),
				onCreated: (c) => {
					setShowRegister(false);
					onSelect(c);
				},
				prefill: query
			})
		]
	});
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-card p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-base font-bold",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-wide text-muted-foreground",
			children: label
		})]
	});
}
function RegisterModal({ onClose, onCreated, prefill }) {
	const isPhone = /^\d{9,}$/.test(prefill.replace(/\s/g, ""));
	const [form, setForm] = (0, import_react.useState)({
		fullName: "",
		nationalId: isPhone ? "" : prefill,
		phone: isPhone ? prefill : "",
		email: ""
	});
	const valid = form.fullName.trim().length > 2 && form.nationalId.trim().length > 4 && form.phone.trim().length > 8;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center bg-background/70 p-4 backdrop-blur-sm animate-pop-in",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "brand-gradient grid h-10 w-10 place-items-center rounded-xl text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold",
						children: "Register New Customer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Onboard to M-Taka & Green Credits"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full Name",
							value: form.fullName,
							onChange: (v) => setForm({
								...form,
								fullName: v
							}),
							placeholder: "Jane Wanjiru"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "National ID",
							value: form.nationalId,
							onChange: (v) => setForm({
								...form,
								nationalId: v
							}),
							placeholder: "e.g. 12345678"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone Number",
							value: form.phone,
							onChange: (v) => setForm({
								...form,
								phone: v
							}),
							placeholder: "254712345678"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email (optional)",
							value: form.email,
							onChange: (v) => setForm({
								...form,
								email: v
							}),
							placeholder: "name@email.com",
							type: "email"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-muted",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: !valid,
						onClick: () => {
							const c = addCustomer({
								fullName: form.fullName,
								nationalId: form.nationalId,
								phone: form.phone,
								email: form.email || void 0
							});
							toast.success("Customer registered", { description: c.fullName });
							onCreated(c);
						},
						className: "brand-gradient inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50",
						children: ["Create Customer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				})
			]
		})
	});
}
function Field({ label, value, onChange, placeholder, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-semibold text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			className: "mt-1 h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
		})]
	});
}
function StepDevice({ customer, location, device, setDevice, onBack, onContinue, reward }) {
	const valid = device.brand.trim() && device.model.trim() && parseFloat(device.weight) > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1fr_340px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card rounded-2xl p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2 text-xs font-semibold text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5" }),
						" ",
						customer.fullName,
						" · ",
						customer.phone
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-bold",
					children: "Device details"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "All fields are required to calculate credits."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-muted-foreground",
								children: "Device Type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: device.type,
								onChange: (e) => setDevice({
									...device,
									type: e.target.value
								}),
								className: "mt-1 h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30",
								children: DEVICE_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Brand",
							value: device.brand,
							onChange: (v) => setDevice({
								...device,
								brand: v
							}),
							placeholder: "e.g. Samsung"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Model",
							value: device.model,
							onChange: (v) => setDevice({
								...device,
								model: v
							}),
							placeholder: "e.g. Galaxy A32"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Weight (kg)",
							value: device.weight,
							onChange: (v) => setDevice({
								...device,
								weight: v
							}),
							placeholder: "0.22",
							type: "number"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-muted-foreground",
								children: "Condition"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: device.condition,
								onChange: (e) => setDevice({
									...device,
									condition: e.target.value
								}),
								className: "mt-1 h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30",
								children: CONDITIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-muted-foreground",
								children: "Shop Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 flex h-11 items-center gap-2 rounded-xl border border-dashed border-border bg-muted/40 px-3.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }),
									" ",
									location,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto text-xs text-muted-foreground",
										children: "auto-filled"
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onBack,
						className: "inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: !valid,
						onClick: onContinue,
						className: "brand-gradient inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50",
						children: ["Calculate Green Credits ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "glass-card sticky top-24 h-fit rounded-2xl p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
					children: "Live Estimate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-4xl font-bold text-primary",
						children: ["+", reward?.credits ?? 0]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: "Green Credits"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-4 w-4 text-primary" }),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold",
							children: [reward?.co2Saved ?? 0, " kg"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "CO₂ saved"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 border-t border-border pt-4 text-xs text-muted-foreground",
					children: "Credits are calculated from device type, weight, and working condition. Updates in real time."
				})
			]
		})]
	});
}
function StepSummary({ customer, device, location, reward, onBack, onConfirm }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-2xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card relative overflow-hidden rounded-3xl p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "brand-gradient absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Ready to confirm"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-2xl font-bold",
						children: "Recycling Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Review before submitting to the ledger."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SumCard, {
								icon: Smartphone,
								label: "Device",
								children: [
									device.brand,
									" ",
									device.model
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SumCard, {
								icon: Recycle,
								label: "Type & condition",
								children: [
									device.type,
									" · ",
									device.condition
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SumCard, {
								icon: User,
								label: "Customer",
								children: [customer.fullName, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: customer.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SumCard, {
								icon: MapPin,
								label: "Location",
								children: location
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "brand-gradient rounded-2xl p-5 text-primary-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold uppercase tracking-wide opacity-90",
									children: "Green Credits Earned"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 font-display text-4xl font-bold",
									children: ["+", reward.credits]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 text-xs opacity-90",
									children: [
										"Weight: ",
										device.weight,
										" kg"
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-primary/30 bg-primary/5 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold uppercase tracking-wide text-primary",
									children: "Environmental Impact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 font-display text-4xl font-bold",
									children: [
										reward.co2Saved,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg",
											children: "kg"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "CO₂ emissions saved"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: ["Event: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "RECYCLED"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onBack,
							className: "inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Edit"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onConfirm,
							className: "brand-gradient inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30",
							children: ["Confirm Recycling ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" })]
						})]
					})
				]
			})]
		})
	});
}
function SumCard({ icon: Icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card/60 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-xs font-semibold text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }),
				" ",
				label
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 font-semibold",
			children
		})]
	});
}
function StepSuccess({ record, customer, onReset }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto max-w-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card relative overflow-hidden rounded-3xl p-8 text-center animate-pop-in",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid h-24 w-24 place-items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: "0 0 100 100",
						className: "absolute h-24 w-24 -rotate-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "50",
							cy: "50",
							r: "45",
							stroke: "oklch(0.92 0.01 150)",
							strokeWidth: "6",
							fill: "none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "50",
							cy: "50",
							r: "45",
							stroke: "oklch(0.64 0.17 150)",
							strokeWidth: "6",
							fill: "none",
							strokeDasharray: "283",
							strokeDashoffset: "0",
							strokeLinecap: "round",
							className: "animate-ring-draw"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "brand-gradient grid h-16 w-16 place-items-center rounded-full text-primary-foreground shadow-xl shadow-primary/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "h-9 w-9",
							strokeWidth: 2.5
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 font-display text-3xl font-bold",
					children: "Device Successfully Recycled"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: [customer.fullName, " has been credited."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-2 gap-3 text-left sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							label: "Device ID",
							value: record.deviceId
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							label: "Credits",
							value: `+${record.credits}`,
							highlight: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							label: "CO₂ saved",
							value: `${record.co2Saved} kg`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							label: "Location",
							value: record.location
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-muted",
							onClick: () => {
								window.print();
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-4 w-4" }), " Print Receipt"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-muted",
							onClick: () => toast.success("SMS sent", { description: `Receipt sent to ${customer.phone}` }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send SMS"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onReset,
							className: "brand-gradient inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-primary-foreground",
							children: ["Done ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "text-xs text-muted-foreground hover:text-foreground",
						children: "Back to dashboard →"
					})
				})
			]
		})]
	});
}
function Tile({ label, value, highlight }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border p-3 ${highlight ? "border-primary/40 bg-primary/10" : "border-border bg-card/60"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-wide text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-0.5 font-display text-lg font-bold ${highlight ? "text-primary" : ""}`,
			children: value
		})]
	});
}
function Confetti() {
	const pieces = Array.from({ length: 28 });
	const colors = [
		"oklch(0.64 0.17 150)",
		"oklch(0.62 0.16 240)",
		"oklch(0.78 0.16 70)",
		"oklch(0.52 0.15 150)"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: pieces.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute top-0 block h-2 w-2 rounded-sm",
			style: {
				left: `${i * 97 % 100}%`,
				backgroundColor: colors[i % colors.length],
				animation: `confetti-fall ${2 + i % 5 * .4}s ${i % 8 * .15}s linear forwards`
			}
		}, i))
	});
}
//#endregion
export { IntakeFlow as component };
