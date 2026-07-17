import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-context-3sAOA7Nr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var API_URL = "http://localhost:3000";
var TOKEN_KEY = "ecoloop.token";
var USER_KEY = "ecoloop.user";
function getToken() {
	if (typeof window === "undefined") return null;
	return localStorage.getItem(TOKEN_KEY);
}
function getStoredUser() {
	if (typeof window === "undefined") return null;
	const raw = localStorage.getItem(USER_KEY);
	return raw ? JSON.parse(raw) : null;
}
function storeSession(token, user) {
	localStorage.setItem(TOKEN_KEY, token);
	localStorage.setItem(USER_KEY, JSON.stringify(user));
}
function clearSession() {
	localStorage.removeItem(TOKEN_KEY);
	localStorage.removeItem(USER_KEY);
}
var ApiError = class extends Error {
	status;
	constructor(message, status) {
		super(message);
		this.status = status;
	}
};
/**
* Generic authenticated fetch helper. Automatically attaches the JWT
* (if present) and throws ApiError on non-2xx responses.
*/
async function apiFetch(path, options = {}) {
	const token = getToken();
	const res = await fetch(`${API_URL}${path}`, {
		...options,
		headers: {
			"Content-Type": "application/json",
			...token ? { Authorization: `Bearer ${token}` } : {},
			...options.headers
		}
	});
	const body = res.headers.get("content-type")?.includes("application/json") ? await res.json() : void 0;
	if (!res.ok) throw new ApiError(body?.error || `Request failed (${res.status})`, res.status);
	return body;
}
async function login(username, password) {
	const data = await apiFetch("/auth/login", {
		method: "POST",
		body: JSON.stringify({
			username,
			password
		})
	});
	storeSession(data.token, data.user);
	return data.user;
}
function logout() {
	clearSession();
}
var customerApi = {
	me: () => apiFetch("/customer/me"),
	history: () => apiFetch("/customer/history")
};
var AuthContext = (0, import_react.createContext)(void 0);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		setUser(getStoredUser());
		setLoading(false);
	}, []);
	const login$1 = async (username, password) => {
		const u = await login(username, password);
		setUser(u);
		return u;
	};
	const logout$1 = () => {
		logout();
		setUser(null);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			loading,
			login: login$1,
			logout: logout$1
		},
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within AuthProvider");
	return ctx;
}
/**
* Call inside any page component rendered through PortalShell.
* Redirects to /login if there's no session, or the session's role
* doesn't match what the page requires.
*/
function useRequireRole(role) {
	const { user, loading } = useAuth();
	const navigate = useNavigate();
	const allowed = Array.isArray(role) ? role : [role];
	(0, import_react.useEffect)(() => {
		if (loading) return;
		if (!user || !allowed.includes(user.role)) navigate({ to: "/login" });
	}, [
		user,
		loading,
		navigate
	]);
	return {
		user,
		loading
	};
}
//#endregion
export { useRequireRole as i, customerApi as n, useAuth as r, AuthProvider as t };
