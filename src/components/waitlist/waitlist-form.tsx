"use client";

import { useState } from "react";
import styles from "@/app/waitlist.module.css";
import { SuccessModal } from "./success-modal";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<"success" | "duplicate" | null>(null);

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
        setModal("duplicate");
      } else if (data.success) {
        setModal("success");
        setEmail("");
      }
    } catch {
      // silently fail — form still works offline
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {modal && <SuccessModal type={modal} onClose={() => setModal(null)} />}

      <p className={styles.perk}>
        Join the waitlist now and lock in <strong>50% off fees</strong> at launch, plus early
        access before we open to the public.
      </p>

      <div className={styles.proof}>
        <span className={styles.dots}>&#x283F;&#x283F;&#x283F;</span>
        <span>
          <strong>Join 100+ crypto holders</strong> already on the waitlist.
        </span>
      </div>

      {error && <p className={styles.errorText}>{error}</p>}

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Enter your email to get early access"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(null); }}
          disabled={loading}
        />
        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Joining..." : "Join waitlist"}
        </button>
      </form>

      <div className={styles.fine}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
        Non-custodial. You always control your collateral.
      </div>
    </>
  );
}
