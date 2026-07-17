import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgePlus, LayoutDashboard, Search, Users } from "lucide-react";
import { useState } from "react";
import { PortalShell } from "@/components/ecoloop/PortalShell";
import { getCustomers, customerStats } from "@/lib/ecoloop-store";

export const Route = createFileRoute("/admin/customers")({
  head: () => ({ meta: [{ title: "Customers · EcoLoop Admin" }] }),
  component: CustomersPage,
});

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/intake", label: "New Intake", icon: BadgePlus },
  { to: "/admin/customers", label: "Customers", icon: Users },
];

function CustomersPage() {
  const [q, setQ] = useState("");
  const customers = getCustomers().filter(c =>
    !q || c.fullName.toLowerCase().includes(q.toLowerCase()) || c.phone.includes(q) || c.nationalId.includes(q)
  );
  return (
    <PortalShell nav={NAV} title="Customers" subtitle="All registered Green Circle members" badge="Admin Portal" requiredRole={["admin", "shop"]}>
      <div className="glass-card flex items-center gap-3 rounded-2xl p-3">
        <Search className="ml-2 h-4 w-4 text-muted-foreground" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, phone or ID…"
          className="h-10 flex-1 bg-transparent text-sm outline-none" />
        <Link to="/admin/intake" className="brand-gradient inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground">
          <BadgePlus className="h-4 w-4" /> New Intake
        </Link>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {customers.map(c => {
          const s = customerStats(c.id);
          return (
            <div key={c.id} className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="brand-gradient grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-primary-foreground">
                  {c.fullName.split(" ").map(p => p[0]).slice(0, 2).join("")}
                </div>
                <div className="min-w-0">
                  <div className="truncate font-semibold">{c.fullName}</div>
                  <div className="text-xs text-muted-foreground">{c.phone}</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-muted p-2">
                  <div className="text-sm font-bold text-primary">{s.credits}</div>
                  <div className="text-[10px] uppercase text-muted-foreground">Credits</div>
                </div>
                <div className="rounded-lg bg-muted p-2">
                  <div className="text-sm font-bold">{s.count}</div>
                  <div className="text-[10px] uppercase text-muted-foreground">Devices</div>
                </div>
                <div className="rounded-lg bg-muted p-2">
                  <div className="text-sm font-bold">{s.co2}</div>
                  <div className="text-[10px] uppercase text-muted-foreground">kg CO₂</div>
                </div>
              </div>
            </div>
          );
        })}
        {customers.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            No customers match your search.
          </div>
        )}
      </div>
    </PortalShell>
  );
}
