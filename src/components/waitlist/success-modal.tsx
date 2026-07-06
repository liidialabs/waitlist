"use client";

import styles from "@/app/waitlist.module.css";

interface SuccessModalProps {
  type: "success" | "duplicate";
  onClose: () => void;
}

export function SuccessModal({ type, onClose }: SuccessModalProps) {
  const isSuccess = type === "success";

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalIcon}>
          {isSuccess ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          )}
        </div>
        <h3 className={styles.modalTitle}>
          {isSuccess ? "You're on the list! \u{1F680}" : "Already on the list! \u{270C}\u{FE0F}"}
        </h3>
        <p className={styles.modalText}>
          {isSuccess
            ? "We\u2019ll let you know when Liidia launches. Hold tight."
            : "You\u2019re already signed up \u2014 we\u2019ll be in touch soon."}
        </p>
        <button className={styles.modalButton} onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
}
