"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    tag: "DEPOSIT",
    title: "Lock in your collateral",
    description:
      "Put your crypto to work in a trusted lending protocol. You never lose ownership — it's still yours, still earning.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    number: "02",
    tag: "BORROW",
    title: "Borrow against it, instantly",
    description:
      "We open a borrowing position for you behind the scenes. No wallets to manage, no protocols to learn.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    number: "03",
    tag: "RECEIVE",
    title: "Get cash where you spend it",
    description:
      "We convert and send it straight to your bank or mobile money — KES, NGN, GHS and more.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            How it works
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
              lineHeight: 1.2,
            }}
          >
            Three steps to spendable cash
          </h2>
          <p
            className="text-base max-w-md mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            No complex DeFi knowledge required. We handle the protocols, you
            get the cash.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connection line (desktop) */}
          <div
            className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-px"
            style={{ background: "var(--color-border)" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative text-center"
            >
              {/* Step number circle */}
              <div className="flex justify-center mb-5">
                <div
                  className="relative w-14 h-14 rounded-full flex items-center justify-center glass-strong"
                  style={{
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <span style={{ color: "var(--color-primary)" }}>
                    {step.icon}
                  </span>
                  {/* Pulse ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: "1px solid var(--color-primary)",
                      opacity: 0.2,
                      animation: `pulseRing 3s ease-in-out ${i * 0.5}s infinite`,
                    }}
                  />
                </div>
              </div>

              {/* Step number */}
              <p
                className="text-xs font-medium mb-2"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.08em",
                }}
              >
                {step.tag}
              </p>

              {/* Title */}
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-text)",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed max-w-[280px] mx-auto"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseRing {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.15);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
