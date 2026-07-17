import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Logo } from "./Logo";
import { Bell, LogOut, Search } from "lucide-react";
import { useRequireRole, useAuth } from "@/lib/auth-context";
import type { Role } from "@/lib/api";

export interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

export function PortalShell({
  nav, title, subtitle, children, badge, requiredRole,
}: {
  nav: NavItem[];
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  badge?: string;
  requiredRole: Role | Role[];
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const { user, loading } = useRequireRole(requiredRole);
  const { logout } = useAuth();

  if (loading || !user) {
    return (
      <div className="grid min-h-screen place-items-center text-sm text-muted-foreground">
        Loading…
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,oklch(0.95_0.05_150)_0%,transparent_50%),radial-gradient(ellipse_at_top_right,oklch(0.95_0.04_240)_0%,transparent_50%)] bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px]">
        {/* Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col gap-1 border-r border-border/60 bg-card/40 p-5 backdrop-blur-sm md:flex">
          <div className="mb-4">
            <Logo />
            {badge && (
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {badge}
              </div>
            )}
          </div>
          <nav className="mt-2 flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                    active
                      ? "brand-gradient text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto rounded-xl border border-border bg-card p-3">
            <div className="text-xs font-semibold">Sustainability Goal</div>
            <div className="mt-1 text-[11px] text-muted-foreground">20 Tons CO₂ saved by 2026</div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="brand-gradient h-full" style={{ width: "92%" }} />
            </div>
            <div className="mt-1 text-[10px] font-semibold text-primary">92% complete</div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 flex items-center gap-4 border-b border-border/60 bg-background/70 px-4 py-3 backdrop-blur md:px-8">
            <div className="md:hidden"><Logo subtitle={false} /></div>
            <div className="hidden min-w-0 flex-1 md:block">
              <h1 className="truncate font-display text-xl font-bold">{title}</h1>
              {subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}
            </div>
            <div className="hidden flex-1 md:flex">
              <div className="relative w-full max-w-md">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  className="h-9 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm outline-none ring-primary/30 transition focus:ring-2"
                  placeholder="Search devices, customers, locations…"
                />
              </div>
            </div>
            <button className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground">
              <Bell className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                logout();
                navigate({ to: "/login" });
              }}
              title="Log out"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-destructive"
            >
              <LogOut className="h-4 w-4" />
            </button>
            <div className="brand-gradient grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-primary-foreground">
              {user.username.slice(0, 1).toUpperCase()}
            </div>
          </header>
          <div className="px-4 py-6 md:px-8 md:py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
