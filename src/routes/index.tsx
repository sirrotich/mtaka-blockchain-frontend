import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Store,
  User,
  PlayCircle,
  Newspaper,
  MapPin,
  CalendarDays,
  Rocket,
  TrendingUp,
  Globe2,
} from "lucide-react";
import { Logo } from "@/components/ecoloop/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M-Taka by Safaricom — Recycle, earn Green Credits" },
      {
        name: "description",
        content:
          "Track e-waste recycling, monitor your environmental impact, and earn Green Credits at any Safaricom shop.",
      },
    ],
  }),
  component: Landing,
});

// ---------------------------------------------------------------------------
// PLACEHOLDER CONTENT — swap these arrays for your real data.
// blogPosts: paste in the posts you pulled from the blog/site.
// roadmap: paste in the phases from your PPT roadmap slide.
// ---------------------------------------------------------------------------

const YOUTUBE_ID = "SxsjnKOvv-4";

const BLOG_SOURCE_URL =
  "https://newsroom.safaricom.co.ke/sustainable-future/e-waste-giving-dead-devices-a-second-life/";

const blogPosts = [
  {
    tag: "Origin story",
    title: "The 155 boxes that started it all",
    excerpt:
      "A stack of 1,000 kg of unused SIM cards pushed Safaricom's Fintech Operations team to rethink how the company handles obsolete stock — and sparked its circularity push.",
    href: BLOG_SOURCE_URL,
  },
  {
    tag: "Partners",
    title: "Inside the Warmtech partnership",
    excerpt:
      "Since onboarding certified e-waste handler Warmtech in 2024, over 300 tonnes of servers, switches, and batteries have been processed, with roughly 90% recycled and under 5% reaching a landfill.",
    href: BLOG_SOURCE_URL,
  },
  {
    tag: "Engineering",
    title: "Building equipment that lasts longer",
    excerpt:
      "From lithium-ion batteries that outlast lead-acid by years to solar-powered masts and secure data-wiping before disposal, Safaricom's network team is designing waste out from the start.",
    href: BLOG_SOURCE_URL,
  },
];

const roadmap = [
  {
    period: "0–6 months",
    label: "Pilot",
    icon: Rocket,
    title: "Prove the model",
    detail:
      "Prove the model in a controlled setting before scaling — real devices, real credits, real traceability.",
    tags: ["Strategic Partnerships", "M-PESA Green Credits", "Blockchain Traceability"],
    status: "current",
  },
  {
    period: "6–12 months",
    label: "National",
    icon: TrendingUp,
    title: "Take it nationwide",
    detail:
      "Take the proven model nationwide, layering in analytics, compliance automation, and new revenue streams.",
    tags: ["Digital Product Passport", "Nationwide Rollout"],
    status: "upcoming",
  },
  {
    period: "12–24 months",
    label: "Regional",
    icon: Globe2,
    title: "Cross borders",
    detail:
      "Cross borders through telco and OEM partnerships, unlocking carbon markets and multi-country compliance.",
    tags: ["Safaricom Ethiopia & Vodafone markets", "OEM Partnerships", "Multi-Country EPR"],
    status: "upcoming",
  },
  {
    period: "24+ months",
    label: "Ecosystem",
    icon: Globe2,
    title: "Go Global",
    detail:
      "Evolve from operator to infrastructure the compliance and data backbone for the continent's circular economy.​.",
    tags: ["EPR-as-a-Service​", "ESG Reporting​", "AI Optimization​"],
    status: "upcoming",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-info/10 blur-[100px]" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-20 md:pt-20">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" /> New · Green Credits live across all shops
        </div>
        <h1 className="text-balance mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
          Recycle your device.
          <br />
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Earn Green Credits.
          </span>
        </h1>
        <p className="text-balance mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          M-Taka tracks every device lifecycle event across Safaricom shops — rewarding customers
          for keeping e-waste out of landfills and turning sustainability into a tangible benefit.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark"
          >
            Find a shop near you <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={`#watch`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-card"
          >
            <PlayCircle className="h-4 w-4 text-primary" /> Watch how it works
          </a>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3 md:mt-16 md:gap-6">
          {[
            { i: Recycle, t: "12,547 devices", s: "Recycled responsibly" },
            { i: Leaf, t: "18.4 Tons", s: "Of CO2 saved" },
            { i: ShieldCheck, t: "8,912 members", s: "In the Green Circle" },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
              <x.i className="h-5 w-5 text-primary" />
              <div className="mt-3 font-display text-xl font-bold sm:text-2xl">{x.t}</div>
              <div className="text-sm text-muted-foreground">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WATCH — main YouTube video */}
      <section id="watch" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <PlayCircle className="h-3.5 w-3.5" /> See it in action
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            How M-Taka works
          </h2>
          <p className="mt-3 text-muted-foreground">
            A quick walkthrough of dropping off a device and earning Green Credits.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card/60 shadow-sm">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              title="How M-Taka works"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <Newspaper className="h-3.5 w-3.5" /> From the blog
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Stories & guides
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition hover:border-primary/30 hover:bg-card"
            >
              <span className="w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                {post.tag}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read more
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <CalendarDays className="h-3.5 w-3.5" /> Roadmap
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Where M-Taka is headed
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-3">
          {roadmap.map((step, idx) => (
            <div key={step.period} className="relative">
              {/* connector line to next stage, desktop only */}
              {idx < roadmap.length - 1 && (
                <div className="absolute right-0 top-6 hidden h-px w-5 translate-x-full bg-border sm:block" />
              )}
              <div
                className={`h-full rounded-2xl border p-5 backdrop-blur transition ${
                  step.status === "current"
                    ? "border-primary/40 bg-primary/5 shadow-sm"
                    : "border-border bg-card/60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      step.status === "current"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <step.icon className="h-4.5 w-4.5" />
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      step.status === "current"
                        ? "bg-primary/15 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
                  {step.period}
                </div>
                <h3 className="mt-1 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Safaricom PLC · M-Taka is a sustainability initiative.
      </footer>
    </div>
  );
}
