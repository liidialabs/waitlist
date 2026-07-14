"use client";

import { motion } from "framer-motion";

export function TrustStrip() {
  const partners = [
    { name: "Kamino Finance", desc: "Lending Protocol" },
    { name: "Jupiter Lend", desc: "Aggregated Rates" },
    { name: "Non-Custodial", desc: "You own your keys" },
    { name: "Audited", desc: "Security verified" },
  ];

  return (
    <section
      id="protocols"
      className="section-padding"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs uppercase tracking-widest mb-10"
          style={{
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Integrated with trusted protocols
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-5 text-center flex flex-col items-center gap-2 transition-all duration-300"
              style={{ cursor: "default" }}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 30px rgba(82, 113, 255, 0.12)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-1"
                style={{
                  background:
                    i < 2
                      ? "var(--color-primary-glow)"
                      : "rgba(255, 107, 107, 0.1)",
                  color: i < 2 ? "var(--color-primary)" : "var(--color-accent)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {p.name.charAt(0)}
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-text)" }}
              >
                {p.name}
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                {p.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
