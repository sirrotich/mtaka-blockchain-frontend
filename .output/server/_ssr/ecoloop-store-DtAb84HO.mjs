//#region node_modules/.nitro/vite/services/ssr/assets/ecoloop-store-DtAb84HO.js
var LS_CUSTOMERS = "ecoloop.customers";
var LS_RECORDS = "ecoloop.records";
var seedCustomers = [
	{
		id: "c1",
		fullName: "Amina Wanjiku",
		nationalId: "29384756",
		phone: "254712345678",
		email: "amina@example.com",
		joinedAt: "2024-03-12"
	},
	{
		id: "c2",
		fullName: "Brian Otieno",
		nationalId: "31827465",
		phone: "254722334455",
		joinedAt: "2024-05-21"
	},
	{
		id: "c3",
		fullName: "Cynthia Mwangi",
		nationalId: "25647382",
		phone: "254733112299",
		email: "cynthia@example.com",
		joinedAt: "2023-11-08"
	}
];
var seedRecords = [
	{
		id: "r1",
		deviceId: "ABC101",
		customerId: "c1",
		deviceType: "Smartphone",
		brand: "Samsung",
		model: "Galaxy A32",
		weightKg: .22,
		condition: "Damaged",
		location: "Nairobi CBD",
		credits: 50,
		co2Saved: 3.5,
		event: "RECYCLED",
		createdAt: "2025-09-02"
	},
	{
		id: "r2",
		deviceId: "ABC102",
		customerId: "c1",
		deviceType: "Laptop",
		brand: "Dell",
		model: "Latitude E7470",
		weightKg: 1.8,
		condition: "Dead",
		location: "Nairobi CBD",
		credits: 120,
		co2Saved: 8.2,
		event: "RECYCLED",
		createdAt: "2025-10-14"
	},
	{
		id: "r3",
		deviceId: "ABC103",
		customerId: "c2",
		deviceType: "Feature Phone",
		brand: "Nokia",
		model: "105",
		weightKg: .08,
		condition: "Working",
		location: "Mombasa",
		credits: 20,
		co2Saved: 1.1,
		event: "RECYCLED",
		createdAt: "2025-11-01"
	},
	{
		id: "r4",
		deviceId: "ABC104",
		customerId: "c3",
		deviceType: "Tablet",
		brand: "Apple",
		model: "iPad Air 2",
		weightKg: .44,
		condition: "Partially Working",
		location: "Kisumu",
		credits: 75,
		co2Saved: 5,
		event: "RECYCLED",
		createdAt: "2025-11-20"
	},
	{
		id: "r5",
		deviceId: "ABC105",
		customerId: "c1",
		deviceType: "Smart Watch",
		brand: "Fitbit",
		model: "Versa 2",
		weightKg: .04,
		condition: "Damaged",
		location: "Nairobi CBD",
		credits: 15,
		co2Saved: .6,
		event: "RECYCLED",
		createdAt: "2026-01-04"
	}
];
function isBrowser() {
	return typeof window !== "undefined";
}
function load(key, fallback) {
	if (!isBrowser()) return fallback;
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function save(key, val) {
	if (!isBrowser()) return;
	localStorage.setItem(key, JSON.stringify(val));
}
function getCustomers() {
	const list = load(LS_CUSTOMERS, seedCustomers);
	if (isBrowser() && !localStorage.getItem(LS_CUSTOMERS)) save(LS_CUSTOMERS, list);
	return list;
}
function getRecords() {
	const list = load(LS_RECORDS, seedRecords);
	if (isBrowser() && !localStorage.getItem(LS_RECORDS)) save(LS_RECORDS, list);
	return list;
}
function findCustomer(query) {
	const q = query.trim().toLowerCase();
	if (!q) return void 0;
	return getCustomers().find((c) => c.nationalId.toLowerCase() === q || c.phone.toLowerCase() === q || c.phone.replace(/^254/, "0") === q || c.fullName.toLowerCase().includes(q));
}
function addCustomer(c) {
	const created = {
		...c,
		id: "c" + Math.random().toString(36).slice(2, 8),
		joinedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
	};
	save(LS_CUSTOMERS, [created, ...getCustomers()]);
	return created;
}
var CREDIT_RATES = {
	"Smartphone": 220,
	"Feature Phone": 180,
	"Tablet": 180,
	"Laptop": 70,
	"Desktop": 50,
	"Router": 130,
	"Smart Watch": 350,
	"Accessories": 100,
	"Other": 100
};
var CO2_RATES = {
	"Smartphone": 16,
	"Feature Phone": 14,
	"Tablet": 12,
	"Laptop": 4.5,
	"Desktop": 3.5,
	"Router": 10,
	"Smart Watch": 18,
	"Accessories": 6,
	"Other": 6
};
var CONDITION_MULT = {
	"Working": 1.4,
	"Partially Working": 1.15,
	"Damaged": 1,
	"Dead": .85
};
function calculateReward(type, weightKg, condition) {
	return {
		credits: Math.max(5, Math.round(CREDIT_RATES[type] * weightKg * CONDITION_MULT[condition])),
		co2Saved: Math.round(CO2_RATES[type] * weightKg * 10) / 10
	};
}
function addRecord(r) {
	const created = {
		...r,
		id: "r" + Math.random().toString(36).slice(2, 8),
		deviceId: r.deviceId ?? "ECO" + Math.random().toString(36).slice(2, 7).toUpperCase(),
		event: "RECYCLED",
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	save(LS_RECORDS, [created, ...getRecords()]);
	return created;
}
function customerStats(customerId) {
	const recs = getRecords().filter((r) => r.customerId === customerId);
	return {
		credits: recs.reduce((s, r) => s + r.credits, 0),
		co2: Math.round(recs.reduce((s, r) => s + r.co2Saved, 0) * 10) / 10,
		count: recs.length,
		records: recs
	};
}
function globalStats() {
	const recs = getRecords();
	const customers = getCustomers();
	const credits = recs.reduce((s, r) => s + r.credits, 0);
	const co2 = Math.round(recs.reduce((s, r) => s + r.co2Saved, 0) * 10) / 10;
	return {
		devices: 12547 + recs.length,
		credits: 456e3 + credits,
		co2Tons: Math.round((18.4 + co2 / 1e3) * 10) / 10,
		customers: 8912 + customers.length,
		recent: recs.slice(0, 6)
	};
}
var SHOP_LOCATIONS = [
	"Nairobi CBD",
	"Westlands",
	"Mombasa",
	"Kisumu",
	"Nakuru",
	"Eldoret",
	"Thika"
];
//#endregion
export { customerStats as a, getRecords as c, calculateReward as i, globalStats as l, addCustomer as n, findCustomer as o, addRecord as r, getCustomers as s, SHOP_LOCATIONS as t };
