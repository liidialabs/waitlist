"use client";

import { useState, useEffect, useCallback, useRef, startTransition } from "react";
import { motion, useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

interface Prices {
  solPrice: number;
  rates: Record<string, number>;
}

const fallbackValues: Record<string, number> = {
  KES: 22100,
  NGN: 255000,
  GHS: 2550,
  USD: 170,
};

function formatFiat(amount: number): string {
  return new Intl.NumberFormat("en-US").format(Math.round(amount));
}

const stats = [
  { label: "Best borrow rate", value: 12.4, suffix: "%", decimals: 1 },
  { label: "Supported assets", value: 15, suffix: "+", decimals: 0 },
  { label: "Payout countries", value: 12, suffix: "", decimals: 0 },
];

function StatCard({
  stat,
  isInView,
}: {
  stat: (typeof stats)[0];
  isInView: boolean;
}) {
  const { count, start } = useCountUp(
    stat.decimals > 0 ? stat.value * 10 : stat.value,
    1800,
    false
  );

  useEffect(() => {
    if (isInView) start();
  }, [isInView, start]);

  const display =
    stat.decimals > 0 ? (count / 10).toFixed(stat.decimals) : count;

  return (
    <div className="glass rounded-xl p-5 text-center">
      <div
        className="text-2xl md:text-3xl font-bold mb-1"
        style={{
          fontFamily: "var(--font-mono)",
          color: "var(--color-primary)",
        }}
      >
        {display}
        {stat.suffix}
      </div>
      <div
        className="text-xs"
        style={{
          color: "var(--color-text-muted)",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export function DataSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [prices, setPrices] = useState<Prices | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch("/api/prices");
      if (res.ok) {
        const data = await res.json();
        setPrices(data);
      }
    } catch {
      // keep fallback
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

  const usdValue = prices ? 1 * prices.solPrice : 170;
  const kesValue = prices ? usdValue * (prices.rates?.KES || 221) : fallbackValues.KES;
  const ngValue = prices ? usdValue * (prices.rates?.NGN || 1500) : fallbackValues.NGN;

  return (
    <section className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Live data
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
              lineHeight: 1.2,
            }}
          >
            Real rates, not marketing numbers
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isInView={isInView} />
          ))}
        </motion.div>

        {/* Ticker widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="glass-strong rounded-2xl overflow-hidden"
        >
          <div
            className="px-6 py-3 flex items-center justify-between"
            style={{
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <span
              className="text-[10px] uppercase tracking-wider"
              style={{
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              Live conversion
            </span>
            <div className="flex items-center gap-1.5">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "#4ADE80",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span
                className="text-[10px] uppercase tracking-wider"
                style={{
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {loading ? "Fetching..." : "Live"}
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="text-center">
                <div
                  className="text-xl md:text-2xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-text)",
                  }}
                >
                  1 SOL
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Collateral
                </div>
              </div>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "var(--color-text-muted)" }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>

              <div className="text-center">
                <div
                  className="text-xl md:text-2xl font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-primary)",
                  }}
                >
                  {formatFiat(usdValue)} USDC
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Borrowed
                </div>
              </div>
            </div>

            <div
              className="mt-5 pt-5 grid grid-cols-2 gap-4"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              <div className="text-center">
                <div
                  className="text-base font-semibold mb-0.5"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-accent)",
                  }}
                >
                  KES {formatFiat(kesValue)}
                </div>
                <div
                  className="text-[11px]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  M-Pesa payout
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-base font-semibold mb-0.5"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-accent)",
                  }}
                >
                  NGN {formatFiat(ngValue)}
                </div>
                <div
                  className="text-[11px]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Bank payout
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
