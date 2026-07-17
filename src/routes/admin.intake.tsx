import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowLeft, ArrowRight, BadgePlus, CheckCircle2, Leaf, MapPin, Phone,
  Printer, Recycle, Search, Send, Smartphone, Sparkles, User, UserPlus, Wallet,
  LayoutDashboard, Users,
} from "lucide-react";
import { PortalShell } from "@/components/ecoloop/PortalShell";
import {
  addCustomer, addRecord, calculateReward, customerStats, findCustomer,
  SHOP_LOCATIONS, type Condition, type Customer, type DeviceType, type RecyclingRecord,
} from "@/lib/ecoloop-store";

export const Route = createFileRoute("/admin/intake")({
  head: () => ({ meta: [{ title: "New Intake · EcoLoop Admin" }] }),
  component: IntakeFlow,
});

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/intake", label: "New Intake", icon: BadgePlus },
  { to: "/admin/customers", label: "Customers", icon: Users },
];

const DEVICE_TYPES: DeviceType[] = [
  "Smartphone", "Feature Phone", "Tablet", "Laptop", "Desktop", "Router", "Smart Watch", "Accessories", "Other",
];
const CONDITIONS: Condition[] = ["Working", "Partially Working", "Damaged", "Dead"];

type Step = 1 | 2 | 3 | 4;

function IntakeFlow() {
  const [step, setStep] = useState<Step>(1);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [location, setLocation] = useState(SHOP_LOCATIONS[0]);
  const [device, setDevice] = useState({
    type: "Smartphone" as DeviceType,
    brand: "",
    model: "",
    weight: "",
    condition: "Working" as Condition,
  });
  const [record, setRecord] = useState<RecyclingRecord | null>(null);

  const reward = device.weight ? calculateReward(device.type, parseFloat(device.weight) || 0, device.condition) : null;

  const reset = () => {
    setStep(1); setCustomer(null); setRecord(null);
    setDevice({ type: "Smartphone", brand: "", model: "", weight: "", condition: "Working" });
  };

  return (
    <PortalShell nav={NAV} title="New Device Intake" subtitle="3-step recycling flow" badge="Admin Portal" requiredRole={["admin", "shop"]}>
      <Stepper step={step} />
      <div className="mt-6">
        {step === 1 && (
          <StepCustomer
            location={location} setLocation={setLocation}
            onSelect={(c) => { setCustomer(c); setStep(2); }}
          />
        )}
        {step === 2 && customer && (
          <StepDevice
            customer={customer} location={location} device={device} setDevice={setDevice}
            onBack={() => setStep(1)}
            onContinue={() => setStep(3)}
            reward={reward}
          />
        )}
        {step === 3 && customer && reward && (
          <StepSummary
            customer={customer} device={device} location={location} reward={reward}
            onBack={() => setStep(2)}
            onConfirm={() => {
              const rec = addRecord({
                customerId: customer.id, deviceType: device.type, brand: device.brand,
                model: device.model, weightKg: parseFloat(device.weight), condition: device.condition,
                location, credits: reward.credits, co2Saved: reward.co2Saved,
              });
              setRecord(rec);
              setStep(4);
              toast.success("Device recycled successfully", { description: `+${rec.credits} Green Credits awarded` });
            }}
          />
        )}
        {step === 4 && record && customer && (
          <StepSuccess record={record} customer={customer} onReset={reset} />
        )}
      </div>
    </PortalShell>
  );
}

function Stepper({ step }: { step: Step }) {
  const steps = ["Customer", "Device Details", "Summary", "Complete"];
  return (
    <ol className="flex items-center gap-2 overflow-x-auto">
      {steps.map((label, i) => {
        const n = (i + 1) as Step;
        const active = step === n;
        const done = step > n;
        return (
          <li key={label} className="flex shrink-0 items-center gap-2">
            <div className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold transition ${
              done ? "brand-gradient text-primary-foreground" : active ? "bg-primary/15 text-primary ring-2 ring-primary" : "bg-muted text-muted-foreground"
            }`}>
              {done ? <CheckCircle2 className="h-4 w-4" /> : n}
            </div>
            <span className={`text-sm font-medium ${active ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
            {i < steps.length - 1 && <div className={`mx-1 h-px w-8 sm:w-16 ${done ? "bg-primary" : "bg-border"}`} />}
          </li>
        );
      })}
    </ol>
  );
}

function StepCustomer({
  location, setLocation, onSelect,
}: { location: string; setLocation: (s: string) => void; onSelect: (c: Customer) => void }) {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<Customer | undefined>();
  const [showRegister, setShowRegister] = useState(false);

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    const c = findCustomer(query);
    setResult(c);
    setSearched(true);
    if (!c) setShowRegister(true);
  };

  const stats = result ? customerStats(result.id) : null;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-display text-lg font-bold">Find or register customer</h3>
        <p className="text-sm text-muted-foreground">Search by National ID or Phone Number</p>
        <form onSubmit={handleSearch} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. 254712345678 or 29384756"
              className="h-12 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
            />
          </div>
          <button type="submit" className="brand-gradient inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20">
            Search <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
          <span className="text-muted-foreground">Quick demo:</span>
          {["254712345678", "31827465", "Cynthia"].map((q) => (
            <button key={q} type="button" onClick={() => { setQuery(q); setTimeout(() => handleSearch(), 0); }} className="rounded-full bg-muted px-2.5 py-1 font-medium text-muted-foreground hover:bg-accent hover:text-foreground">
              {q}
            </button>
          ))}
        </div>

        {searched && result && (
          <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="brand-gradient grid h-12 w-12 place-items-center rounded-full text-base font-bold text-primary-foreground">
                  {result.fullName.split(" ").map(s => s[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="font-display text-lg font-bold">{result.fullName}</div>
                  <div className="text-xs text-muted-foreground">{result.phone} · ID {result.nationalId}</div>
                </div>
              </div>
              <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold text-primary">Verified</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <Mini label="Credits" value={stats!.credits.toLocaleString()} />
              <Mini label="Devices" value={String(stats!.count)} />
              <Mini label="CO₂ saved" value={`${stats!.co2} kg`} />
            </div>
            {stats!.records.length > 0 && (
              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Previous devices</div>
                <ul className="mt-2 space-y-1.5 text-sm">
                  {stats!.records.slice(0, 3).map(r => (
                    <li key={r.id} className="flex items-center justify-between rounded-lg bg-card px-3 py-2">
                      <span>{r.brand} {r.model}</span>
                      <span className="text-xs text-primary font-semibold">+{r.credits}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button onClick={() => onSelect(result)} className="brand-gradient mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-primary-foreground">
              Continue with this customer <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {searched && !result && (
          <div className="mt-6 rounded-xl border border-dashed border-border bg-muted/50 p-6 text-center">
            <UserPlus className="mx-auto h-8 w-8 text-muted-foreground" />
            <div className="mt-2 font-semibold">No customer found</div>
            <p className="text-sm text-muted-foreground">Register a new customer to continue</p>
            <button onClick={() => setShowRegister(true)} className="brand-gradient mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-primary-foreground">
              <UserPlus className="h-4 w-4" /> Register Customer
            </button>
          </div>
        )}
      </div>

      <aside className="glass-card h-fit rounded-2xl p-5">
        <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Shop Location</div>
        <div className="mt-2 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm">
            {SHOP_LOCATIONS.map(l => <option key={l}>{l}</option>)}
          </select>
        </div>
        <div className="mt-6 rounded-xl border border-border bg-card/60 p-4">
          <Sparkles className="h-4 w-4 text-primary" />
          <p className="mt-2 text-xs text-muted-foreground">
            Tip: Customers can use their Safaricom phone number or National ID — both work.
          </p>
        </div>
      </aside>

      {showRegister && (
        <RegisterModal onClose={() => setShowRegister(false)} onCreated={(c) => { setShowRegister(false); onSelect(c); }} prefill={query} />
      )}
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-card p-3">
      <div className="font-display text-base font-bold">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
    </div>
  );
}

function RegisterModal({ onClose, onCreated, prefill }: { onClose: () => void; onCreated: (c: Customer) => void; prefill: string }) {
  const isPhone = /^\d{9,}$/.test(prefill.replace(/\s/g, ""));
  const [form, setForm] = useState({
    fullName: "", nationalId: isPhone ? "" : prefill, phone: isPhone ? prefill : "", email: "",
  });
  const valid = form.fullName.trim().length > 2 && form.nationalId.trim().length > 4 && form.phone.trim().length > 8;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-background/70 p-4 backdrop-blur-sm animate-pop-in">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="brand-gradient grid h-10 w-10 place-items-center rounded-xl text-primary-foreground">
            <UserPlus className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">Register New Customer</h3>
            <p className="text-xs text-muted-foreground">Onboard to EcoLoop & Green Credits</p>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          <Field label="Full Name" value={form.fullName} onChange={(v) => setForm({ ...form, fullName: v })} placeholder="Jane Wanjiru" />
          <Field label="National ID" value={form.nationalId} onChange={(v) => setForm({ ...form, nationalId: v })} placeholder="e.g. 12345678" />
          <Field label="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="254712345678" />
          <Field label="Email (optional)" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="name@email.com" type="email" />
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button onClick={onClose} className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-muted">Cancel</button>
          <button
            disabled={!valid}
            onClick={() => {
              const c = addCustomer({ fullName: form.fullName, nationalId: form.nationalId, phone: form.phone, email: form.email || undefined });
              toast.success("Customer registered", { description: c.fullName });
              onCreated(c);
            }}
            className="brand-gradient inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            Create Customer <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text",
}: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
      />
    </label>
  );
}

function StepDevice({
  customer, location, device, setDevice, onBack, onContinue, reward,
}: {
  customer: Customer; location: string;
  device: { type: DeviceType; brand: string; model: string; weight: string; condition: Condition };
  setDevice: (d: any) => void;
  onBack: () => void; onContinue: () => void;
  reward: { credits: number; co2Saved: number } | null;
}) {
  const valid = device.brand.trim() && device.model.trim() && parseFloat(device.weight) > 0;
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="glass-card rounded-2xl p-6">
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-primary">
          <User className="h-3.5 w-3.5" /> {customer.fullName} · {customer.phone}
        </div>
        <h3 className="font-display text-lg font-bold">Device details</h3>
        <p className="text-sm text-muted-foreground">All fields are required to calculate credits.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="text-xs font-semibold text-muted-foreground">Device Type</span>
            <select value={device.type} onChange={(e) => setDevice({ ...device, type: e.target.value as DeviceType })}
              className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30">
              {DEVICE_TYPES.map(t => <option key={t}>{t}</option>)}
            </select>
          </label>
          <Field label="Brand" value={device.brand} onChange={(v) => setDevice({ ...device, brand: v })} placeholder="e.g. Samsung" />
          <Field label="Model" value={device.model} onChange={(v) => setDevice({ ...device, model: v })} placeholder="e.g. Galaxy A32" />
          <Field label="Weight (kg)" value={device.weight} onChange={(v) => setDevice({ ...device, weight: v })} placeholder="0.22" type="number" />
          <label className="block">
            <span className="text-xs font-semibold text-muted-foreground">Condition</span>
            <select value={device.condition} onChange={(e) => setDevice({ ...device, condition: e.target.value as Condition })}
              className="mt-1 h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30">
              {CONDITIONS.map(c => <option key={c}>{c}</option>)}
            </select>
          </label>
          <div className="sm:col-span-2">
            <span className="text-xs font-semibold text-muted-foreground">Shop Location</span>
            <div className="mt-1 flex h-11 items-center gap-2 rounded-xl border border-dashed border-border bg-muted/40 px-3.5 text-sm">
              <MapPin className="h-4 w-4 text-primary" /> {location} <span className="ml-auto text-xs text-muted-foreground">auto-filled</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between gap-3">
          <button onClick={onBack} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-muted">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <button
            disabled={!valid}
            onClick={onContinue}
            className="brand-gradient inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
          >
            Calculate Green Credits <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <aside className="glass-card sticky top-24 h-fit rounded-2xl p-6">
        <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Live Estimate</div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-4xl font-bold text-primary">+{reward?.credits ?? 0}</span>
          <span className="text-sm text-muted-foreground">Green Credits</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm">
          <Leaf className="h-4 w-4 text-primary" /> <span className="font-semibold">{reward?.co2Saved ?? 0} kg</span>
          <span className="text-muted-foreground">CO₂ saved</span>
        </div>
        <div className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
          Credits are calculated from device type, weight, and working condition. Updates in real time.
        </div>
      </aside>
    </div>
  );
}

function StepSummary({
  customer, device, location, reward, onBack, onConfirm,
}: {
  customer: Customer;
  device: { type: DeviceType; brand: string; model: string; weight: string; condition: Condition };
  location: string;
  reward: { credits: number; co2Saved: number };
  onBack: () => void; onConfirm: () => void;
}) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="glass-card relative overflow-hidden rounded-3xl p-8">
        <div className="brand-gradient absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20 blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Ready to confirm
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold">Recycling Summary</h3>
          <p className="text-sm text-muted-foreground">Review before submitting to the ledger.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <SumCard icon={Smartphone} label="Device">{device.brand} {device.model}</SumCard>
            <SumCard icon={Recycle} label="Type & condition">{device.type} · {device.condition}</SumCard>
            <SumCard icon={User} label="Customer">{customer.fullName}<div className="text-xs text-muted-foreground">{customer.phone}</div></SumCard>
            <SumCard icon={MapPin} label="Location">{location}</SumCard>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="brand-gradient rounded-2xl p-5 text-primary-foreground">
              <div className="text-xs font-semibold uppercase tracking-wide opacity-90">Green Credits Earned</div>
              <div className="mt-1 font-display text-4xl font-bold">+{reward.credits}</div>
              <div className="mt-1 text-xs opacity-90">Weight: {device.weight} kg</div>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">Environmental Impact</div>
              <div className="mt-1 font-display text-4xl font-bold">{reward.co2Saved} <span className="text-lg">kg</span></div>
              <div className="mt-1 text-xs text-muted-foreground">CO₂ emissions saved</div>
            </div>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Event: <span className="text-primary">RECYCLED</span>
          </div>

          <div className="mt-8 flex justify-between gap-3">
            <button onClick={onBack} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-muted">
              <ArrowLeft className="h-4 w-4" /> Edit
            </button>
            <button onClick={onConfirm} className="brand-gradient inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30">
              Confirm Recycling <CheckCircle2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SumCard({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-4">
      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <div className="mt-1 font-semibold">{children}</div>
    </div>
  );
}

function StepSuccess({ record, customer, onReset }: { record: RecyclingRecord; customer: Customer; onReset: () => void }) {
  return (
    <div className="relative mx-auto max-w-xl">
      <Confetti />
      <div className="glass-card relative overflow-hidden rounded-3xl p-8 text-center animate-pop-in">
        <div className="mx-auto grid h-24 w-24 place-items-center">
          <svg viewBox="0 0 100 100" className="absolute h-24 w-24 -rotate-90">
            <circle cx="50" cy="50" r="45" stroke="oklch(0.92 0.01 150)" strokeWidth="6" fill="none" />
            <circle cx="50" cy="50" r="45" stroke="oklch(0.64 0.17 150)" strokeWidth="6" fill="none"
              strokeDasharray="283" strokeDashoffset="0" strokeLinecap="round" className="animate-ring-draw" />
          </svg>
          <div className="brand-gradient grid h-16 w-16 place-items-center rounded-full text-primary-foreground shadow-xl shadow-primary/40">
            <CheckCircle2 className="h-9 w-9" strokeWidth={2.5} />
          </div>
        </div>
        <h2 className="mt-6 font-display text-3xl font-bold">Device Successfully Recycled</h2>
        <p className="mt-1 text-sm text-muted-foreground">{customer.fullName} has been credited.</p>

        <div className="mt-6 grid grid-cols-2 gap-3 text-left sm:grid-cols-4">
          <Tile label="Device ID" value={record.deviceId} />
          <Tile label="Credits" value={`+${record.credits}`} highlight />
          <Tile label="CO₂ saved" value={`${record.co2Saved} kg`} />
          <Tile label="Location" value={record.location} />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-muted" onClick={() => { window.print(); }}>
            <Printer className="h-4 w-4" /> Print Receipt
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold hover:bg-muted"
            onClick={() => toast.success("SMS sent", { description: `Receipt sent to ${customer.phone}` })}>
            <Send className="h-4 w-4" /> Send SMS
          </button>
          <button onClick={onReset} className="brand-gradient inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-primary-foreground">
            Done <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4">
          <Link to="/admin" className="text-xs text-muted-foreground hover:text-foreground">Back to dashboard →</Link>
        </div>
      </div>
    </div>
  );
}

function Tile({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border p-3 ${highlight ? "border-primary/40 bg-primary/10" : "border-border bg-card/60"}`}>
      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className={`mt-0.5 font-display text-lg font-bold ${highlight ? "text-primary" : ""}`}>{value}</div>
    </div>
  );
}

function Confetti() {
  const pieces = Array.from({ length: 28 });
  const colors = ["oklch(0.64 0.17 150)", "oklch(0.62 0.16 240)", "oklch(0.78 0.16 70)", "oklch(0.52 0.15 150)"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => (
        <span
          key={i}
          className="absolute top-0 block h-2 w-2 rounded-sm"
          style={{
            left: `${(i * 97) % 100}%`,
            backgroundColor: colors[i % colors.length],
            animation: `confetti-fall ${2 + (i % 5) * 0.4}s ${(i % 8) * 0.15}s linear forwards`,
          }}
        />
      ))}
    </div>
  );
}
