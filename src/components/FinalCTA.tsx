"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || loading) return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.duplicate) {
        setDuplicate(true);
        setEmail("");
      } else if (data.success) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding" id="waitlist">
      <div className="section-container max-w-[640px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
              lineHeight: 1.2,
            }}
          >
            Ready to unlock your crypto
            <br />
            without selling it?
          </h2>
          <p
            className="text-base mb-8 max-w-md mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Join the waitlist and lock in <strong style={{ color: "var(--color-accent)" }}>50% off fees</strong> at
            launch, plus early access before we open to the public.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-strong rounded-2xl p-8 text-center"
            >
              <div
                className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: "rgba(74, 222, 128, 0.1)",
                  color: "#4ADE80",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text)",
                }}
              >
                You&apos;re on the list
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                We&apos;ll let you know as soon as Liidia is ready for you.
              </p>
            </motion.div>
          ) : duplicate ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl p-8 text-center"
              style={{
                background: "rgba(82, 113, 255, 0.08)",
                border: "1px solid rgba(82, 113, 255, 0.15)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: "var(--color-primary-glow)",
                  color: "var(--color-primary)",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text)",
                }}
              >
                You&apos;re already on the list
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                We&apos;ll be in touch when Liidia launches.
              </p>
            </motion.div>
          ) : (
            <div className="glass-strong rounded-2xl p-6">
              {error && (
                <p
                  className="text-xs mb-3"
                  style={{ color: "var(--color-accent)" }}
                >
                  {error}
                </p>
              )}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  disabled={loading}
                  className="flex-1 h-12 px-4 rounded-xl text-sm border-none outline-none"
                  style={{
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    border: "1px solid var(--color-border)",
                    fontFamily: "var(--font-body)",
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="h-12 px-8 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 border-none whitespace-nowrap"
                  style={{
                    background: "var(--color-primary)",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
              <p
                className="text-xs mt-3 flex items-center gap-1.5"
                style={{ color: "var(--color-text-muted)" }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                Non-custodial. You always control your collateral.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
