"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What happens if my collateral drops in value?",
    answer:
      "If your collateral value drops below the required ratio, Liidia automatically warns you before any liquidation risk. You can top up collateral or repay part of your loan at any time. We aim to keep you safe with early alerts, not last-minute liquidations.",
  },
  {
    question: "Who holds my crypto? Is it non-custodial?",
    answer:
      "Your crypto is deposited into audited lending protocol smart contracts (Kamino, Jupiter Lend). Liidia never takes custody of your funds. You retain ownership at all times and can withdraw whenever you want.",
  },
  {
    question: "What crypto assets can I use as collateral?",
    answer:
      "We currently support SOL, ETH, BTC (via wrapped tokens), USDC, USDT, and other major assets on Solana. We're adding more supported collateral types regularly.",
  },
  {
    question: "How fast is the payout to my bank or M-Pesa?",
    answer:
      "Once your borrow position is opened and the stablecoin is converted, payouts to M-Pesa and most bank accounts arrive within seconds to a few minutes. Wire transfers to US/EU banks may take 1-2 business days.",
  },
  {
    question: "What are the fees?",
    answer:
      "Liidia charges a small, transparent fee on the borrow amount — typically 0.5-1%. You also pay the underlying protocol's borrow rate (currently as low as 12.4% APR). Waitlist members lock in 50% off fees at launch.",
  },
  {
    question: "Is this available in my country?",
    answer:
      "Liidia supports M-Pesa payouts (Kenya, Tanzania, DRC), bank payouts in 12+ countries across Africa, and wire transfers to US/EU banks. More payout rails are being added regularly.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding">
      <div className="section-container max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            FAQ
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
              lineHeight: 1.2,
            }}
          >
            Questions, answered
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-5 rounded-xl transition-all duration-200 flex items-start justify-between gap-4 cursor-pointer border-none"
                style={{
                  background:
                    openIndex === i
                      ? "var(--color-bg-card-hover)"
                      : "var(--color-bg-card)",
                  border: `1px solid ${
                    openIndex === i
                      ? "var(--color-border-strong)"
                      : "var(--color-border)"
                  }`,
                }}
              >
                <span
                  className="text-sm font-medium leading-snug"
                  style={{ color: "var(--color-text)" }}
                >
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1">
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
