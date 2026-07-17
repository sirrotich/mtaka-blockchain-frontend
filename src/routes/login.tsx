import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf, Loader2 } from "lucide-react";
import { Logo } from "@/components/ecoloop/Logo";
import { useAuth } from "@/lib/auth-context";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login · M-Taka" }] }),
  component: LoginPage,
});

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const user = await login(username, password);
      if (user.role === "admin" || user.role === "shop") {
        navigate({ to: "/admin" });
      } else {
        navigate({ to: "/customer" });
      }
    } catch (err: any) {
      setError(err?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center"><Logo /></div>
        <form
          onSubmit={handleSubmit}
          className="glass-card space-y-4 rounded-2xl border border-border p-6"
        >
          <div>
            <h1 className="font-display text-xl font-bold">Sign in</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Admin, shop, or customer — use the login your account was created with.
            </p>
          </div>

          {error && (
            <div className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}

          <div>
            <label className="text-sm font-medium">Username</label>
            <input
              className="mt-1 h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none ring-primary/30 focus:ring-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              className="mt-1 h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none ring-primary/30 focus:ring-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="brand-gradient flex h-10 w-full items-center justify-center gap-2 rounded-lg text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 disabled:opacity-60"
          >
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Leaf className="h-4 w-4" />}
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
