// src/utils/geoCurrency.js

// Minimal map (you can add more anytime)
const COUNTRY_TO_CURRENCY = {
  PK: "PKR",
  US: "USD",
  GB: "GBP",
  AE: "AED",
  SA: "SAR",
  IN: "INR",
  CA: "CAD",
  AU: "AUD",
  EU: "EUR",
};

function currencyFromLocale(locale = "") {
  const l = locale.toLowerCase();
  if (l.endsWith("-pk") || l.includes("ur-pk") || l.includes("en-pk")) return "PKR";
  if (l.endsWith("-us") || l.includes("en-us")) return "USD";
  if (l.endsWith("-gb") || l.includes("en-gb")) return "GBP";
  return "USD";
}

async function geoFromIpwhois() {
  const res = await fetch("https://ipwho.is/?fields=success,country_code");
  if (!res.ok) throw new Error("ipwho.is failed");
  const data = await res.json();
  if (data?.success === false) throw new Error("ipwho.is not success");
  return data?.country_code; // e.g. "PK"
}

export async function getUserCurrency() {
  const localeGuess = currencyFromLocale(navigator.language || "en-US");

  try {
    const countryCode = await geoFromIpwhois();

    // If Pakistan, force PKR
    if (countryCode === "PK") return "PKR";

    // otherwise use mapping if exists
    return COUNTRY_TO_CURRENCY[countryCode] || localeGuess;
  } catch (e) {
    return localeGuess;
  }
}

export function formatMoney(amount, currency, locale) {
  try {
    return new Intl.NumberFormat(locale || undefined, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${currency} ${Math.round(amount).toLocaleString()}`;
  }
}