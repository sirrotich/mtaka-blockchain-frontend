// Lightweight in-memory mock data store for M-Taka demo.
// Persists to localStorage on client; safe defaults on SSR.

export type DeviceType =
  | "Smartphone" | "Feature Phone" | "Tablet" | "Laptop" | "Desktop"
  | "Router" | "Smart Watch" | "Accessories" | "Other";

export type Condition = "Working" | "Partially Working" | "Damaged" | "Dead";

export interface Customer {
  id: string;
  fullName: string;
  nationalId: string;
  phone: string;
  email?: string;
  joinedAt: string;
}

export interface RecyclingRecord {
  id: string;
  deviceId: string;
  customerId: string;
  deviceType: DeviceType;
  brand: string;
  model: string;
  weightKg: number;
  condition: Condition;
  location: string;
  credits: number;
  co2Saved: number;
  event: "RECYCLED";
  createdAt: string;
}

const LS_CUSTOMERS = "ecoloop.customers";
const LS_RECORDS = "ecoloop.records";

const seedCustomers: Customer[] = [
  { id: "c1", fullName: "Amina Wanjiku", nationalId: "29384756", phone: "254712345678", email: "amina@example.com", joinedAt: "2024-03-12" },
  { id: "c2", fullName: "Brian Otieno", nationalId: "31827465", phone: "254722334455", joinedAt: "2024-05-21" },
  { id: "c3", fullName: "Cynthia Mwangi", nationalId: "25647382", phone: "254733112299", email: "cynthia@example.com", joinedAt: "2023-11-08" },
];

const seedRecords: RecyclingRecord[] = [
  { id: "r1", deviceId: "ABC101", customerId: "c1", deviceType: "Smartphone", brand: "Samsung", model: "Galaxy A32", weightKg: 0.22, condition: "Damaged", location: "Nairobi CBD", credits: 50, co2Saved: 3.5, event: "RECYCLED", createdAt: "2025-09-02" },
  { id: "r2", deviceId: "ABC102", customerId: "c1", deviceType: "Laptop", brand: "Dell", model: "Latitude E7470", weightKg: 1.8, condition: "Dead", location: "Nairobi CBD", credits: 120, co2Saved: 8.2, event: "RECYCLED", createdAt: "2025-10-14" },
  { id: "r3", deviceId: "ABC103", customerId: "c2", deviceType: "Feature Phone", brand: "Nokia", model: "105", weightKg: 0.08, condition: "Working", location: "Mombasa", credits: 20, co2Saved: 1.1, event: "RECYCLED", createdAt: "2025-11-01" },
  { id: "r4", deviceId: "ABC104", customerId: "c3", deviceType: "Tablet", brand: "Apple", model: "iPad Air 2", weightKg: 0.44, condition: "Partially Working", location: "Kisumu", credits: 75, co2Saved: 5.0, event: "RECYCLED", createdAt: "2025-11-20" },
  { id: "r5", deviceId: "ABC105", customerId: "c1", deviceType: "Smart Watch", brand: "Fitbit", model: "Versa 2", weightKg: 0.04, condition: "Damaged", location: "Nairobi CBD", credits: 15, co2Saved: 0.6, event: "RECYCLED", createdAt: "2026-01-04" },
];

function isBrowser() { return typeof window !== "undefined"; }

function load<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : fallback;
  } catch { return fallback; }
}
function save<T>(key: string, val: T) {
  if (!isBrowser()) return;
  localStorage.setItem(key, JSON.stringify(val));
}

export function getCustomers(): Customer[] {
  const list = load<Customer[]>(LS_CUSTOMERS, seedCustomers);
  if (isBrowser() && !localStorage.getItem(LS_CUSTOMERS)) save(LS_CUSTOMERS, list);
  return list;
}
export function getRecords(): RecyclingRecord[] {
  const list = load<RecyclingRecord[]>(LS_RECORDS, seedRecords);
  if (isBrowser() && !localStorage.getItem(LS_RECORDS)) save(LS_RECORDS, list);
  return list;
}

export function findCustomer(query: string): Customer | undefined {
  const q = query.trim().toLowerCase();
  if (!q) return undefined;
  return getCustomers().find(c =>
    c.nationalId.toLowerCase() === q ||
    c.phone.toLowerCase() === q ||
    c.phone.replace(/^254/, "0") === q ||
    c.fullName.toLowerCase().includes(q)
  );
}

export function addCustomer(c: Omit<Customer, "id" | "joinedAt">): Customer {
  const created: Customer = {
    ...c,
    id: "c" + Math.random().toString(36).slice(2, 8),
    joinedAt: new Date().toISOString().slice(0, 10),
  };
  const list = [created, ...getCustomers()];
  save(LS_CUSTOMERS, list);
  return created;
}

// Credit + CO2 calculation
const CREDIT_RATES: Record<DeviceType, number> = {
  "Smartphone": 220, "Feature Phone": 180, "Tablet": 180, "Laptop": 70,
  "Desktop": 50, "Router": 130, "Smart Watch": 350, "Accessories": 100, "Other": 100,
};
const CO2_RATES: Record<DeviceType, number> = {
  "Smartphone": 16, "Feature Phone": 14, "Tablet": 12, "Laptop": 4.5,
  "Desktop": 3.5, "Router": 10, "Smart Watch": 18, "Accessories": 6, "Other": 6,
};
const CONDITION_MULT: Record<Condition, number> = {
  "Working": 1.4, "Partially Working": 1.15, "Damaged": 1.0, "Dead": 0.85,
};

export function calculateReward(type: DeviceType, weightKg: number, condition: Condition) {
  const credits = Math.max(5, Math.round(CREDIT_RATES[type] * weightKg * CONDITION_MULT[condition]));
  const co2Saved = Math.round(CO2_RATES[type] * weightKg * 10) / 10;
  return { credits, co2Saved };
}

export function addRecord(r: Omit<RecyclingRecord, "id" | "deviceId" | "event" | "createdAt"> & { deviceId?: string }): RecyclingRecord {
  const created: RecyclingRecord = {
    ...r,
    id: "r" + Math.random().toString(36).slice(2, 8),
    deviceId: r.deviceId ?? ("ECO" + Math.random().toString(36).slice(2, 7).toUpperCase()),
    event: "RECYCLED",
    createdAt: new Date().toISOString(),
  };
  const list = [created, ...getRecords()];
  save(LS_RECORDS, list);
  return created;
}

export function customerStats(customerId: string) {
  const recs = getRecords().filter(r => r.customerId === customerId);
  const credits = recs.reduce((s, r) => s + r.credits, 0);
  const co2 = Math.round(recs.reduce((s, r) => s + r.co2Saved, 0) * 10) / 10;
  return { credits, co2, count: recs.length, records: recs };
}

export function globalStats() {
  const recs = getRecords();
  const customers = getCustomers();
  const credits = recs.reduce((s, r) => s + r.credits, 0);
  const co2 = Math.round(recs.reduce((s, r) => s + r.co2Saved, 0) * 10) / 10;
  return {
    devices: 12547 + recs.length,
    credits: 456000 + credits,
    co2Tons: Math.round((18.4 + co2 / 1000) * 10) / 10,
    customers: 8912 + customers.length,
    recent: recs.slice(0, 6),
  };
}

export const SHOP_LOCATIONS = [
  "Nairobi CBD", "Westlands", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika",
];
