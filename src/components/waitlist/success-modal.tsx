"use client";

interface SuccessModalProps {
  type: "success" | "duplicate";
  onClose: () => void;
}

export function SuccessModal({ type, onClose }: SuccessModalProps) {
  const isSuccess = type === "success";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10, 11, 20, 0.6)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--color-bg)",
          border: "1px solid var(--color-border)",
          borderRadius: "16px",
          padding: "40px 32px 32px",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            margin: "0 auto 16px",
            borderRadius: "50%",
            background: "var(--color-surface)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isSuccess ? "#4ADE80" : "var(--color-accent)",
          }}
        >
          {isSuccess ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          )}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "22px",
            color: "var(--color-text)",
            margin: "0 0 8px",
          }}
        >
          {isSuccess ? "You're on the list! \u{1F680}" : "Already on the list! \u{270C}\u{FE0F}"}
        </h3>
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.6,
            color: "var(--color-text-secondary)",
            margin: "0 0 24px",
          }}
        >
          {isSuccess
            ? "We\u2019ll let you know when Liidia launches. Hold tight."
            : "You\u2019re already signed up \u2014 we\u2019ll be in touch soon."}
        </p>
        <button
          onClick={onClose}
          style={{
            border: "none",
            background: "var(--color-primary)",
            color: "#fff",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "14px",
            padding: "10px 32px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "filter .15s ease",
          }}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
