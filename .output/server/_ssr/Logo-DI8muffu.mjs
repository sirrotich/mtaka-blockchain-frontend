import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Leaf } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Logo-DI8muffu.js
var import_jsx_runtime = require_jsx_runtime();
function Logo({ subtitle = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "brand-gradient grid h-10 w-10 place-items-center rounded-xl shadow-lg shadow-primary/25",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
				className: "h-5 w-5 text-primary-foreground",
				strokeWidth: 2.5
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-lg font-bold tracking-tight",
				children: "EcoLoop"
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground",
				children: "by Safaricom"
			})]
		})]
	});
}
//#endregion
export { Logo as t };
