import { createFileRoute } from "@tanstack/react-router";
import { Recycle, Trophy, User as UserIcon, Wallet } from "lucide-react";
import { PortalShell } from "@/components/ecoloop/PortalShell";

export const Route = createFileRoute("/customer/achievements")({
  head: () => ({ meta: [{ title: "Achievements · EcoLoop" }] }),
  component: AchievementsPage,
});

const NAV = [
  { to: "/customer", label: "Dashboard", icon: UserIcon },
  { to: "/customer/history", label: "History", icon: Recycle },
  { to: "/customer/wallet", label: "Green Wallet", icon: Wallet },
  { to: "/customer/achievements", label: "Achievements", icon: Trophy },
];

const BADGES = [
  { i: "🌱", n: "First Recycle", d: "Recycle your first device", p: 100, u: true },
  { i: "♻️", n: "Eco Champion", d: "Recycle 5 devices", p: 100, u: true },
  { i: "🌍", n: "Carbon Saver", d: "Save 50kg of CO₂", p: 100, u: true },
  { i: "🏆", n: "Green Ambassador", d: "Recycle 10 devices", p: 70, u: false },
  { i: "⚡", n: "Power Recycler", d: "Recycle in 5 different months", p: 60, u: false },
  { i: "💎", n: "Diamond Tier", d: "Earn 5,000 lifetime credits", p: 32, u: false },
  { i: "🦒", n: "Wildlife Guardian", d: "Plant 10 trees via rewards", p: 10, u: false },
  { i: "🚀", n: "Carbon Negative", d: "Save 100kg of CO₂", p: 58, u: false },
];

function AchievementsPage() {
  return (
    <PortalShell nav={NAV} title="Achievements" subtitle="Earn badges as you make an impact" badge="Customer Portal" requiredRole="customer">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BADGES.map(b => (
          <div key={b.n} className={`glass-card flex flex-col items-center rounded-2xl p-5 text-center ${b.u ? "" : "opacity-90"}`}>
            <div className={`grid h-20 w-20 place-items-center rounded-full text-4xl ${b.u ? "brand-gradient shadow-xl shadow-primary/30" : "bg-muted"}`}>
              {b.i}
            </div>
            <div className="mt-3 font-display text-base font-bold">{b.n}</div>
            <div className="mt-1 text-xs text-muted-foreground">{b.d}</div>
            <div className="mt-4 w-full">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className={`h-full ${b.u ? "brand-gradient" : "bg-primary/60"}`} style={{ width: `${b.p}%` }} />
              </div>
              <div className="mt-1.5 text-[11px] font-semibold text-muted-foreground">
                {b.u ? "Unlocked" : `${b.p}% progress`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PortalShell>
  );
}
