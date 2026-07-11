// src/utils/rates.js

// Live exchange rates base: USD (no API key)
// Primary: open.er-api.com
// Backup: exchangerate.host
export async function getRatesUSD() {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!res.ok) throw new Error("primary failed");
    const data = await res.json();
    return data?.rates || null;
  } catch (e) {
    const res2 = await fetch("https://api.exchangerate.host/latest?base=USD");
    if (!res2.ok) throw new Error("backup failed");
    const data2 = await res2.json();
    return data2?.rates || null;
  }
}

// Convert PKR -> target currency using USD-base rates
export function convertPKRTo(targetCurrency, pkrAmount, ratesUSD) {
  // ratesUSD: 1 USD = X currency
  const pkrPerUsd = ratesUSD?.PKR;
  const targetPerUsd = ratesUSD?.[targetCurrency];

  if (!pkrPerUsd || !targetPerUsd) return null;

  const usd = pkrAmount / pkrPerUsd;
  return usd * targetPerUsd;
}