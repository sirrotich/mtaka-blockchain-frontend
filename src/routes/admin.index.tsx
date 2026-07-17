import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Activity, BadgePlus, BarChart3, LayoutDashboard, Leaf, Recycle, Users, Wallet } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PortalShell } from "@/components/ecoloop/PortalShell";
import { StatCard } from "@/components/ecoloop/StatCard";
import { getRecords, globalStats, getCustomers } from "@/lib/ecoloop-store";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin Dashboard · EcoLoop" }] }),
  component: AdminDashboard,
});

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/intake", label: "New Intake", icon: BadgePlus },
  { to: "/admin/customers", label: "Customers", icon: Users },
];

function AdminDashboard() {
  const stats = globalStats();
  const records = getRecords();
  const customers = getCustomers();

  const trend = useMemo(() => {
    const buckets: Record<string, { month: string; devices: number; credits: number }> = {};
    const fmt = (d: Date) => d.toLocaleString("en", { month: "short" });
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      buckets[fmt(d)] = { month: fmt(d), devices: 0, credits: 0 };
    }
    records.forEach((r) => {
      const m = fmt(new Date(r.createdAt));
      if (buckets[m]) { buckets[m].devices += 1; buckets[m].credits += r.credits; }
    });
    // seed baseline
    return Object.values(buckets).map((b, i) => ({
      ...b,
      devices: b.devices + [1820, 2100, 1950, 2480, 2310, 2700][i],
      credits: b.credits + [62000, 71000, 68000, 84000, 79000, 92000][i],
    }));
  }, [records]);

  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    records.forEach((r) => (counts[r.deviceType] = (counts[r.deviceType] || 0) + 1));
    const seed = { Smartphone: 5210, Laptop: 1840, Tablet: 1620, "Feature Phone": 1490, Router: 890, "Smart Watch": 720 };
    const merged = { ...seed, ...Object.fromEntries(Object.entries(counts).map(([k, v]) => [k, (seed as any)[k] ? (seed as any)[k] + v : v])) };
    return Object.entries(merged).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value).slice(0, 6);
  }, [records]);

  return (
    <PortalShell nav={NAV} title="Operations Dashboard" subtitle="Live recycling activity across all Safaricom shops" badge="Admin Portal" requiredRole={["admin", "shop"]}>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-bold md:hidden">Operations</h2>
          <p className="text-sm text-muted-foreground">Welcome back · {new Date().toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" })}</p>
        </div>
        <Link to="/admin/intake" className="brand-gradient inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:shadow-xl">
          <BadgePlus className="h-4 w-4" /> New Intake
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total Devices Recycled" value={stats.devices.toLocaleString()} sub="+248 this week" icon={Recycle} />
        <StatCard label="Green Credits Issued" value={stats.credits.toLocaleString()} sub="+12,400 this week" icon={Wallet} accent="info" />
        <StatCard label="Total CO₂ Saved" value={`${stats.co2Tons} Tons`} sub="Equivalent to 920 trees" icon={Leaf} />
        <StatCard label="Active Customers" value={stats.customers.toLocaleString()} sub={`+${customers.length - 3} new`} icon={Users} accent="warning" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="glass-card rounded-2xl p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-display text-base font-bold">Recycling Trends</h3>
              <p className="text-xs text-muted-foreground">Devices intake and credits issued · last 6 months</p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> Devices</span>
              <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-info" /> Credits</span>
            </div>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer>
              <AreaChart data={trend} margin={{ left: -10, right: 10 }}>
                <defs>
                  <linearGradient id="gDev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.64 0.17 150)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.64 0.17 150)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gCred" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.62 0.16 240)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="oklch(0.62 0.16 240)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="oklch(0.92 0.01 150)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="oklch(0.5 0.02 160)" />
                <YAxis tick={{ fontSize: 12 }} stroke="oklch(0.5 0.02 160)" />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid oklch(0.92 0.01 150)" }} />
                <Area type="monotone" dataKey="devices" stroke="oklch(0.64 0.17 150)" strokeWidth={2.5} fill="url(#gDev)" />
                <Area type="monotone" dataKey="credits" stroke="oklch(0.62 0.16 240)" strokeWidth={2.5} fill="url(#gCred)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-display text-base font-bold">Top Categories</h3>
              <p className="text-xs text-muted-foreground">By total intake</p>
            </div>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer>
              <BarChart data={categories} layout="vertical" margin={{ left: 10, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="oklch(0.92 0.01 150)" />
                <XAxis type="number" tick={{ fontSize: 11 }} stroke="oklch(0.5 0.02 160)" />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} stroke="oklch(0.5 0.02 160)" width={90} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid oklch(0.92 0.01 150)" }} />
                <Bar dataKey="value" fill="oklch(0.64 0.17 150)" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 glass-card rounded-2xl">
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
          <div>
            <h3 className="font-display text-base font-bold">Recent Recycling Activity</h3>
            <p className="text-xs text-muted-foreground">Latest device intakes</p>
          </div>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="divide-y divide-border/60">
          {records.slice(0, 8).map((r) => {
            const cust = customers.find((c) => c.id === r.customerId);
            return (
              <div key={r.id} className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-3.5 transition hover:bg-accent/30 sm:grid-cols-[1.5fr_1fr_1fr_auto_auto]">
                <div className="min-w-0">
                  <div className="truncate font-semibold">{r.brand} {r.model}</div>
                  <div className="text-xs text-muted-foreground">{r.deviceType} · {r.deviceId}</div>
                </div>
                <div className="hidden text-sm text-muted-foreground sm:block">{cust?.fullName ?? "Walk-in"}</div>
                <div className="hidden text-sm text-muted-foreground sm:block">{r.location}</div>
                <div className="text-right text-sm font-bold text-primary">+{r.credits} <span className="text-[10px] font-medium text-muted-foreground">credits</span></div>
                <div className="hidden text-xs text-muted-foreground sm:block">{new Date(r.createdAt).toLocaleDateString()}</div>
              </div>
            );
          })}
        </div>
      </div>
    </PortalShell>
  );
}
