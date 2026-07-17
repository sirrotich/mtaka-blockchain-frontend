import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Gift, Recycle, Sparkles, Trophy, User as UserIcon, Wallet } from "lucide-react";
import { PortalShell } from "@/components/ecoloop/PortalShell";
import { customerApi, type CustomerProfile, type CreditTransaction } from "@/lib/api";

export const Route = createFileRoute("/customer/wallet")({
  head: () => ({ meta: [{ title: "Green Wallet · M-Taka" }] }),
  component: WalletPage,
});

const NAV = [
  { to: "/customer", label: "Dashboard", icon: UserIcon },
  { to: "/customer/history", label: "History", icon: Recycle },
  { to: "/customer/wallet", label: "Green Wallet", icon: Wallet },
  { to: "/customer/achievements", label: "Achievements", icon: Trophy },
];

const REWARDS = [
  { name: "Safaricom Airtime KES 200", cost: 400, tag: "Airtime" },
  { name: "1 GB Data Bundle", cost: 350, tag: "Data" },
  { name: "Plant a Tree (Kakamega)", cost: 250, tag: "Impact" },
  { name: "10% off accessories", cost: 600, tag: "Retail" },
];

function WalletPage() {
  const [profile, setProfile] = useState<CustomerProfile | null>(null);
  const [history, setHistory] = useState<CreditTransaction[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    customerApi.me().then(setProfile).catch((e) => setError(e.message));
    customerApi.history().then(setHistory).catch((e) => setError(e.message));
  }, []);

  if (error) {
    return (
      <PortalShell nav={NAV} title="Green Wallet" subtitle="Your sustainability currency" badge="Customer Portal" requiredRole="customer">
        <div className="rounded-xl bg-destructive/10 p-4 text-sm text-destructive">{error}</div>
      </PortalShell>
    );
  }
  if (!profile) {
    return (
      <PortalShell nav={NAV} title="Green Wallet" subtitle="Your sustainability currency" badge="Customer Portal" requiredRole="customer">
        <div className="text-sm text-muted-foreground">Loading…</div>
      </PortalShell>
    );
  }

  const available = Number(profile.credits);
  const lifetime = history
    .filter((h) => h.type === "EARN")
    .reduce((sum, h) => sum + Number(h.amount), 0);

  return (
    <PortalShell nav={NAV} title="Green Wallet" subtitle="Your sustainability currency" badge="Customer Portal" requiredRole="customer">
      <div className="brand-gradient relative overflow-hidden rounded-3xl p-8 text-primary-foreground">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-wider opacity-80">Available Credits</div>
            <div className="mt-2 font-display text-5xl font-bold">{available.toLocaleString()}</div>
            <div className="mt-1 text-xs opacity-80">Ready to redeem</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider opacity-80">Lifetime Credits Earned</div>
            <div className="mt-2 font-display text-3xl font-bold">{lifetime.toLocaleString()}</div>
            <div className="mt-1 text-xs opacity-80">All-time total</div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <h3 className="font-display text-xl font-bold">Redeem Rewards</h3>
          <p className="text-sm text-muted-foreground">Use your credits across Safaricom services & impact projects.</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-warning/15 px-2.5 py-1 text-xs font-semibold text-amber-700">
          <Sparkles className="h-3.5 w-3.5" /> Coming soon
        </span>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {REWARDS.map(r => (
          <div key={r.name} className="glass-card group flex flex-col gap-3 rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                <Gift className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">{r.tag}</span>
            </div>
            <div className="font-semibold leading-tight">{r.name}</div>
            <div className="mt-auto flex items-center justify-between border-t border-border pt-3">
              <div>
                <div className="font-display text-lg font-bold text-primary">{r.cost}</div>
                <div className="text-[10px] uppercase text-muted-foreground">credits</div>
              </div>
              <button disabled className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                Redeem <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Profile */}
      <div className="mt-8 glass-card rounded-2xl p-6">
        <h3 className="font-display text-lg font-bold">Profile</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Info label="Name" value={profile.name} />
          <Info label="Phone Number" value={profile.phone} />
          <Info label="Member Since" value={new Date(profile.created_at).toLocaleDateString("en", { day: "2-digit", month: "long", year: "numeric" })} />
          <Info label="Total Transactions" value={String(history.length)} />
          <Info label="Total Credits Earned" value={lifetime.toLocaleString()} />
        </div>
      </div>
    </PortalShell>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-4">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-1 font-semibold">{value}</div>
    </div>
  );
}
