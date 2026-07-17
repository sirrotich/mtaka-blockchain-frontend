import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Award, Crown, Globe2, Leaf, Recycle, Sparkles, Trophy, User as UserIcon, Wallet } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PortalShell } from "@/components/ecoloop/PortalShell";
import { StatCard } from "@/components/ecoloop/StatCard";
import { customerStats, getCustomers } from "@/lib/ecoloop-store";

export const Route = createFileRoute("/customer/")({
  head: () => ({ meta: [{ title: "My Wallet · M-Taka" }] }),
  component: CustomerDashboard,
});

const NAV = [
  { to: "/customer", label: "Dashboard", icon: UserIcon },
  { to: "/customer/history", label: "History", icon: Recycle },
  { to: "/customer/wallet", label: "Green Wallet", icon: Wallet },
  { to: "/customer/achievements", label: "Achievements", icon: Trophy },
];

const CHART_COLORS = ["oklch(0.64 0.17 150)", "oklch(0.62 0.16 240)", "oklch(0.78 0.16 70)", "oklch(0.52 0.15 150)", "oklch(0.7 0.15 195)"];

function CustomerDashboard() {
  const customer = getCustomers()[0]; // Demo: first customer
  const stats = customerStats(customer.id);
  // Boost demo numbers
  const credits = stats.credits + 800;
  const devicesRecycled = stats.count + 14;
  const co2 = Math.round((stats.co2 + 55) * 10) / 10;

  const monthly = useMemo(() => {
    const buckets = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map((m) => ({ m, devices: 0 }));
    stats.records.forEach(r => {
      const m = new Date(r.createdAt).toLocaleString("en", { month: "short" });
      const found = buckets.find(b => b.m === m);
      if (found) found.devices += 1;
    });
    return buckets.map((b, i) => ({ ...b, devices: b.devices + [2, 3, 1, 4, 2, 5][i] }));
  }, [stats.records]);

  const byCategory = useMemo(() => {
    const c: Record<string, number> = {};
    stats.records.forEach(r => (c[r.deviceType] = (c[r.deviceType] || 0) + 1));
    const seed = { Smartphone: 6, Tablet: 3, Laptop: 2, "Feature Phone": 4 };
    const merged: Record<string, number> = { ...seed };
    Object.entries(c).forEach(([k, v]) => (merged[k] = (merged[k] || 0) + v));
    return Object.entries(merged).map(([name, value]) => ({ name, value }));
  }, [stats.records]);

  return (
    <PortalShell nav={NAV} title={`Welcome, ${customer.fullName.split(" ")[0]}`} subtitle="Together we're building a greener future" badge="Customer Portal" requiredRole="customer">
      {/* Hero */}
      <div className="brand-gradient relative overflow-hidden rounded-3xl p-6 text-primary-foreground md:p-8">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold backdrop-blur">
              <Crown className="h-3 w-3" /> Gold Member · Top 8%
            </div>
            <h2 className="text-balance mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
              You're powering Kenya's circular economy
            </h2>
            <p className="mt-2 max-w-xl text-sm opacity-90">
              Every device you recycle keeps toxic waste out of landfills and rare metals in circulation.
            </p>
          </div>
          <div className="flex items-end gap-6 rounded-2xl bg-white/15 px-6 py-5 backdrop-blur">
            <div>
              <div className="text-[11px] uppercase opacity-80">Available</div>
              <div className="font-display text-4xl font-bold">{credits.toLocaleString()}</div>
              <div className="text-[11px] opacity-80">Green Credits</div>
            </div>
            <Sparkles className="h-8 w-8 opacity-80" />
          </div>
        </div>
      </div>

      {/* Stat grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Current Credits" value={credits.toLocaleString()} sub="Earnings & bonuses" icon={Wallet} />
        <StatCard label="Devices Recycled" value={String(devicesRecycled)} sub="Lifetime" icon={Recycle} accent="info" />
        <StatCard label="CO₂ Saved" value={`${co2} kg`} sub={`= ${Math.round(co2 / 21)} trees planted`} icon={Leaf} />
        <StatCard label="Sustainability Rank" value="Gold" sub="Next: Platinum (200 pts)" icon={Crown} accent="warning" />
      </div>

      {/* Analytics */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="glass-card rounded-2xl p-5 lg:col-span-2">
          <div className="mb-3">
            <h3 className="font-display text-base font-bold">Monthly Recycling Activity</h3>
            <p className="text-xs text-muted-foreground">Devices brought in over the last 6 months</p>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer>
              <BarChart data={monthly}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="oklch(0.92 0.01 150)" />
                <XAxis dataKey="m" tick={{ fontSize: 12 }} stroke="oklch(0.5 0.02 160)" />
                <YAxis tick={{ fontSize: 12 }} stroke="oklch(0.5 0.02 160)" />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid oklch(0.92 0.01 150)" }} />
                <Bar dataKey="devices" fill="oklch(0.64 0.17 150)" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5">
          <div className="mb-3">
            <h3 className="font-display text-base font-bold">Devices by Category</h3>
            <p className="text-xs text-muted-foreground">Lifetime split</p>
          </div>
          <div className="h-52 w-full">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={byCategory} dataKey="value" nameKey="name" innerRadius={48} outerRadius={80} paddingAngle={3}>
                  {byCategory.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid oklch(0.92 0.01 150)" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-2 grid grid-cols-2 gap-1.5 text-[11px]">
            {byCategory.map((b, i) => (
              <li key={b.name} className="flex items-center gap-1.5 text-muted-foreground">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }} />
                {b.name} · {b.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Impact + Achievements */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="glass-card overflow-hidden rounded-2xl p-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-primary">
            <Globe2 className="h-4 w-4" /> Lifetime Environmental Impact
          </div>
          <h3 className="mt-2 font-display text-xl font-bold">Your circle of impact</h3>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <Impact value={`${co2} kg`} label="CO₂ avoided" />
            <Impact value={`${Math.round(co2 * 0.4)} L`} label="Water saved" />
            <Impact value={`${Math.round(co2 / 21)}`} label="Trees equivalent" />
          </div>
          <div className="mt-5 rounded-xl bg-muted p-4 text-sm text-muted-foreground">
            "Recycling 1 smartphone saves the same energy as a laptop running for 44 hours."
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold">Achievements</h3>
            <span className="text-xs text-muted-foreground">3 of 6 unlocked</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { i: "🌱", n: "First Recycle", u: true },
              { i: "♻️", n: "Eco Champion", u: true },
              { i: "🌍", n: "Carbon Saver", u: true },
              { i: "🏆", n: "Green Ambassador", u: false },
              { i: "⚡", n: "Power Recycler", u: false },
              { i: "💎", n: "Diamond Tier", u: false },
            ].map(a => (
              <div key={a.n} className={`flex flex-col items-center gap-1 rounded-xl border p-3 text-center transition ${a.u ? "border-primary/30 bg-primary/5" : "border-border bg-card/60 opacity-60"}`}>
                <span className="text-2xl">{a.i}</span>
                <span className="text-[11px] font-semibold leading-tight">{a.n}</span>
                {!a.u && <span className="text-[9px] uppercase text-muted-foreground">Locked</span>}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-muted p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold">Next: Green Ambassador</span>
              <span className="text-muted-foreground">7 / 10 devices</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-background">
              <div className="brand-gradient h-full" style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </PortalShell>
  );
}

function Impact({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-4">
      <div className="font-display text-2xl font-bold text-primary">{value}</div>
      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</div>
    </div>
  );
}
