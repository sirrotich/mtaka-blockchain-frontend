// src/lib/api.ts
// Thin client for the mtaka-blockchain backend's auth/admin/shop/customer API.
// Set VITE_API_URL in a .env file (locally) or as an env var on your host
// (e.g. Vercel/Netlify) to point this at your Render backend.

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export type Role = "admin" | "shop" | "customer";

export interface AuthUser {
  id: number;
  username: string;
  role: Role;
  shop_id: number | null;
  customer_id: number | null;
}

const TOKEN_KEY = "ecoloop.token";
const USER_KEY = "ecoloop.user";

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  return raw ? (JSON.parse(raw) as AuthUser) : null;
}

function storeSession(token: string, user: AuthUser) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

/**
 * Generic authenticated fetch helper. Automatically attaches the JWT
 * (if present) and throws ApiError on non-2xx responses.
 */
export async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const isJson = res.headers.get("content-type")?.includes("application/json");
  const body = isJson ? await res.json() : undefined;

  if (!res.ok) {
    throw new ApiError(body?.error || `Request failed (${res.status})`, res.status);
  }
  return body as T;
}

export async function login(username: string, password: string) {
  const data = await apiFetch<{ token: string; user: AuthUser }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  storeSession(data.token, data.user);
  return data.user;
}

export function logout() {
  clearSession();
}

// --- customer-facing endpoints (worked example) ---
export interface CustomerProfile {
  id: number;
  name: string;
  phone: string;
  shop_id: number | null;
  credits: string;
  created_at: string;
}
export interface CreditTransaction {
  id: number;
  customer_id: number;
  type: "EARN" | "REDEEM";
  amount: string;
  description: string | null;
  created_at: string;
}

export const customerApi = {
  me: () => apiFetch<CustomerProfile>("/customer/me"),
  history: () => apiFetch<CreditTransaction[]>("/customer/history"),
};

export const adminApi = {
  shops: () => apiFetch<any[]>("/admin/shops"),
  customers: () => apiFetch<any[]>("/admin/customers"),
  createCustomer: (payload: object) =>
    apiFetch("/admin/customers", { method: "POST", body: JSON.stringify(payload) }),
  addCredit: (customerId: number, payload: object) =>
    apiFetch(`/admin/customers/${customerId}/credits`, {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
