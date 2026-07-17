import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useAuth } from "./auth-context-3sAOA7Nr.mjs";
import { _ as Leaf, g as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as Logo } from "./Logo-DI8muffu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CYezXUhV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setSubmitting(true);
		try {
			const user = await login(username, password);
			if (user.role === "admin" || user.role === "shop") navigate({ to: "/admin" });
			else navigate({ to: "/customer" });
		} catch (err) {
			setError(err?.message || "Login failed");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "glass-card space-y-4 rounded-2xl border border-border p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-xl font-bold",
						children: "Sign in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Admin, shop, or customer — use the login your account was created with."
					})] }),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium",
						children: "Username"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "mt-1 h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none ring-primary/30 focus:ring-2",
						value: username,
						onChange: (e) => setUsername(e.target.value),
						autoComplete: "username",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-medium",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						className: "mt-1 h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none ring-primary/30 focus:ring-2",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						autoComplete: "current-password",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: submitting,
						className: "brand-gradient flex h-10 w-full items-center justify-center gap-2 rounded-lg text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 disabled:opacity-60",
						children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-4 w-4" }), "Sign in"]
					})
				]
			})]
		})
	});
}
//#endregion
export { LoginPage as component };
