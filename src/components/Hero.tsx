"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardMockup } from "./DashboardMockup";

export function Hero() {
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
        setEmail("");
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy + form */}
          <div className="max-w-xl">
            {/* Badge */}
            

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-[56px] font-semibold mb-5 leading-[1.08]"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-text)",
              }}
            >
              Turn your{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-primary)",
                }}
              >
                crypto
              </em>{" "}
              into{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-accent)",
                }}
              >
                spendable cash
              </em>{" "}
              without selling it
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "var(--color-text-secondary)", maxWidth: "460px" }}
            >
              Deposit crypto into trusted lending protocols and borrow real
              cash against it — sent straight to your bank or mobile wallet.
              No selling. No tax event. No crypto knowledge required.
            </motion.p>

            {/* Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-strong rounded-xl p-5 flex items-center gap-3"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(74, 222, 128, 0.1)",
                    color: "#4ADE80",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    You&apos;re on the list!
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    We&apos;ll notify you when Liidia launches.
                  </p>
                </div>
              </motion.div>
            ) : duplicate ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl p-5 flex items-center gap-3"
                style={{
                  background: "rgba(82, 113, 255, 0.08)",
                  border: "1px solid rgba(82, 113, 255, 0.15)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "var(--color-primary-glow)",
                    color: "var(--color-primary)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    You&apos;re already on the list!
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    We&apos;ll be in touch when Liidia launches.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {error && (
                  <p
                    className="text-xs mb-2"
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
                    placeholder="Enter your email to get early access"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(null);
                    }}
                    disabled={loading}
                    className="flex-1 h-14 px-5 py-5 rounded-full text-sm border-none outline-none"
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
                    className="h-14 sm:h-12 px-8 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 border-none whitespace-nowrap w-full sm:w-auto"
                    style={{
                      background: "var(--color-primary)",
                      color: "#fff",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {loading ? "Joining..." : "Join Waitlist"}
                  </button>
                </form>
                <div className="flex items-center gap-1.5 mt-3">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Non-custodial. You always control your collateral.
                  </span>
                </div>
              </motion.div>
            )}

            {/* Social proof */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xs mt-6 flex items-center gap-2"
              style={{ color: "var(--color-text-muted)" }}
            >
              <span
                className="text-xs"
                style={{
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "2px",
                }}
              >
                ◌◌◌
              </span>
              Join <strong style={{ color: "var(--color-text-secondary)" }}>100+ crypto holders</strong> already on the waitlist.
            </motion.p>
          </div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mt-10 lg:mt-0"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
