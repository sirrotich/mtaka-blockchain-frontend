import { createFileRoute } from "@tanstack/react-router";
import { Recycle, Trophy, User as UserIcon, Wallet, Leaf, MapPin } from "lucide-react";
import { PortalShell } from "@/components/ecoloop/PortalShell";
import { customerStats, getCustomers } from "@/lib/ecoloop-store";

export const Route = createFileRoute("/customer/history")({
  head: () => ({ meta: [{ title: "Recycling History · M-Taka" }] }),
  component: History,
});

const NAV = [
  { to: "/customer", label: "Dashboard", icon: UserIcon },
  { to: "/customer/history", label: "History", icon: Recycle },
  { to: "/customer/wallet", label: "Green Wallet", icon: Wallet },
  { to: "/customer/achievements", label: "Achievements", icon: Trophy },
];

function History() {
  const c = getCustomers()[0];
  const { records } = customerStats(c.id);
  return (
    <PortalShell nav={NAV} title="Recycling History" subtitle="Every device, every credit, every gram of CO₂ saved" badge="Customer Portal" requiredRole="customer">
      <div className="relative ml-3 border-l-2 border-dashed border-primary/30 pl-8">
        {records.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            No recycling events yet. Visit a Safaricom shop to start earning.
          </div>
        )}
        {records.map((r, i) => (
          <div key={r.id} className="relative mb-6">
            <div className="brand-gradient absolute -left-[42px] top-2 grid h-8 w-8 place-items-center rounded-full text-primary-foreground ring-4 ring-background">
              <Recycle className="h-4 w-4" />
            </div>
            <div className="glass-card grid grid-cols-1 gap-4 rounded-2xl p-5 sm:grid-cols-[1fr_auto_auto]">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">Recycled</span>
                  <span className="text-xs text-muted-foreground">{new Date(r.createdAt).toLocaleDateString("en", { day: "2-digit", month: "short", year: "numeric" })}</span>
                </div>
                <div className="mt-2 font-display text-lg font-bold">{r.brand} {r.model}</div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span>{r.deviceType}</span>
                  <span>·</span>
                  <span>{r.weightKg} kg</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {r.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-display text-2xl font-bold text-primary">+{r.credits}</div>
                <div className="text-[10px] uppercase text-muted-foreground">Credits</div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center gap-1 font-semibold"><Leaf className="h-4 w-4 text-primary" /> {r.co2Saved} kg</div>
                <div className="text-[10px] uppercase text-muted-foreground">CO₂ saved</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PortalShell>
  );
}
