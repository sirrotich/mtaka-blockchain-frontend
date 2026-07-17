// src/lib/auth-context.tsx
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { getStoredUser, login as apiLogin, logout as apiLogout, type AuthUser, type Role } from "./api";

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<AuthUser>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(getStoredUser());
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    const u = await apiLogin(username, password);
    setUser(u);
    return u;
  };

  const logout = () => {
    apiLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

/**
 * Call inside any page component rendered through PortalShell.
 * Redirects to /login if there's no session, or the session's role
 * doesn't match what the page requires.
 */
export function useRequireRole(role: Role | Role[]) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const allowed = Array.isArray(role) ? role : [role];

  useEffect(() => {
    if (loading) return;
    if (!user || !allowed.includes(user.role)) {
      navigate({ to: "/login" });
    }
  }, [user, loading, navigate]); // eslint-disable-line react-hooks/exhaustive-deps

  return { user, loading };
}
