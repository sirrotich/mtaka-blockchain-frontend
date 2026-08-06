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

  const BLOG_SOURCE_URL_1 =
  "https://www.safaricom.co.ke/media-center-landing/press-releases/safaricom-to-support-informal-sector-in-e-waste-management/";

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
    tag: "Growth",
    title: "Safaricom To Support Informal Sector In E-Waste Management",
    excerpt:
      "s part of our integrated waste management programme we have collected over 1,200 tonnes of e-waste working in partnership with the Waste Electrical and Electronic Equipment Centre in Nairobi, Ministry of Environment, the Communications Authority and the National Environment Management Authority.",
    href: BLOG_SOURCE_URL_1,
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
    period: "Q3 2026",
    title: "Pilot across Nairobi shops",
    detail: "Green Circle live in flagship Safaricom shops, first 10,000 members onboarded.",
    status: "done",
  },
  {
    period: "Q4 2026",
    title: "Green Credits marketplace",
    detail: "Incentives to reward users for responsible disposal of e-waste.",
    status: "current",
  },
  {
    period: "Q1 2027",
    title: "Nationwide shop rollout",
    detail: "Collection points expand to every Safaricom shop across all counties.",
    status: "upcoming",
  },
  {
    period: "Q2 2027",
    title: "Corporate & partner API",
    detail: "Businesses can plug into the ledger to report and offset their own e-waste footprint.",
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

      </section>

      {/* WATCH — main YouTube video */}
      <section id="watch" className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            <PlayCircle className="h-3.5 w-3.5" /> See it in action
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            M-Taka On the Move
          </h2>
          <p className="mt-3 text-muted-foreground">
            A quick walkthrough of e-waste Recyling
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

        <ol className="relative mx-auto mt-10 max-w-2xl border-l border-border pl-6">
          {roadmap.map((step) => (
            <li key={step.period} className="mb-8 last:mb-0">
              <span
                className={`absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-background ${
                  step.status === "done"
                    ? "bg-primary"
                    : step.status === "current"
                    ? "bg-primary/60 ring-4 ring-primary/15"
                    : "bg-muted-foreground/30"
                }`}
              />
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                {step.period}
              </div>
              <h3 className="mt-1 font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Safaricom PLC · M-Taka is a sustainability initiative.
      </footer>
    </div>
  );
}
