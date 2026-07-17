import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Recycle, ShieldCheck, Sparkles, Store, User } from "lucide-react";
import { Logo } from "@/components/ecoloop/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoLoop by Safaricom — Recycle, earn Green Credits" },
      { name: "description", content: "Track e-waste recycling, monitor your environmental impact, and earn Green Credits at any Safaricom shop." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-info/10 blur-[100px]" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Logo />
        <div className="flex items-center gap-2 text-sm">
          <Link to="/admin" className="hidden rounded-full px-4 py-2 font-medium text-muted-foreground hover:text-foreground sm:inline">
            Admin
          </Link>
          <Link to="/customer" className="brand-gradient inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition hover:shadow-lg">
            Open my wallet <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:pt-20">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" /> New · Green Credits live across all shops
        </div>
        <h1 className="text-balance mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Recycle your device.<br />
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Earn Green Credits.
          </span>
        </h1>
        <p className="text-balance mt-6 max-w-2xl text-lg text-muted-foreground">
          EcoLoop tracks every device lifecycle event across Safaricom shops — rewarding customers
          for keeping e-waste out of landfills and turning sustainability into a tangible benefit.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            to="/customer"
            className="glass-card group flex items-center gap-5 rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="brand-gradient grid h-14 w-14 shrink-0 place-items-center rounded-xl shadow-lg shadow-primary/30">
              <User className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-xl font-bold">Customer Portal</div>
              <div className="text-sm text-muted-foreground">View your Green Credits, history & impact</div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
          <Link
            to="/admin"
            className="glass-card group flex items-center gap-5 rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-foreground text-background shadow-lg">
              <Store className="h-7 w-7" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-xl font-bold">Shop Admin Portal</div>
              <div className="text-sm text-muted-foreground">Register intakes & manage customers</div>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            { i: Recycle, t: "12,547 devices", s: "Recycled responsibly" },
            { i: Leaf, t: "18.4 Tons", s: "Of CO₂ saved" },
            { i: ShieldCheck, t: "8,912 members", s: "In the Green Circle" },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
              <x.i className="h-5 w-5 text-primary" />
              <div className="mt-3 font-display text-2xl font-bold">{x.t}</div>
              <div className="text-sm text-muted-foreground">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Safaricom PLC · EcoLoop is a sustainability initiative.
      </footer>
    </div>
  );
}
