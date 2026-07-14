"use client";

import { useState, useEffect, useCallback, startTransition } from "react";
import styles from "@/app/waitlist.module.css";

interface Prices {
  solPrice: number;
  rates: Record<string, number>;
}

const railsConfig = [
  { currency: "KES", rail: "→ all or part delivered to M-Pesa in seconds" },
  { currency: "NGN", rail: "→ all or part delivered to your Nigerian bank in seconds" },
  { currency: "GHS", rail: "→ all or part delivered to MTN Mobile Money in seconds" },
  { currency: "USD", rail: "→ all or part delivered to your bank via wire" },
];

const fallbackValues: Record<string, number> = {
  KES: 22100,
  NGN: 255000,
  GHS: 2550,
  USD: 170,
};

function formatFiat(amount: number): string {
  return new Intl.NumberFormat("en-US").format(Math.round(amount));
}

export function Ticker() {
  const [prices, setPrices] = useState<Prices | null>(null);
  const [loading, setLoading] = useState(true);
  const [i, setI] = useState(0);

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch("/api/prices");
      if (res.ok) {
        const data = await res.json();
        setPrices(data);
      }
    } catch {
      // keep last known prices
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    startTransition(() => {
      fetchPrices();
    });
    const id = setInterval(fetchPrices, 60000);
    return () => clearInterval(id);
  }, [fetchPrices]);

  useEffect(() => {
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % railsConfig.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const [fading, setFading] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setFading(true);
    });
    const id = setTimeout(() => setFading(false), 150);
    return () => clearTimeout(id);
  }, [i]);

  const usdValue = prices ? 1 * prices.solPrice : 170;
  const current = railsConfig[i];
  const fiatValue = prices
    ? usdValue * prices.rates[current.currency]
    : fallbackValues[current.currency];

  return (
    <div className={styles.ticker}>
      <div className={styles.tickerLabel}>
        Live &middot; what your collateral is worth today
        {loading && (
          <span className={styles.tickerSub} style={{ display: "inline", marginLeft: 8 }}>
            fetching prices...
          </span>
        )}
      </div>
      <div className={styles.tickerRow}>
        <span className={styles.from}>1 SOL</span>
        <span className={styles.arrow}>→</span>
        <span className={styles.mid}>{formatFiat(usdValue)} USDC</span>
        <span className={styles.arrow}>→</span>
        <span className={styles.to} style={{ opacity: fading ? 0 : 1 }}>
          {formatFiat(fiatValue)} {current.currency}
        </span>
      </div>
      <div className={styles.tickerSub} style={{ opacity: fading ? 0 : 1 }}>
        {current.rail}
      </div>
    </div>
  );
}
