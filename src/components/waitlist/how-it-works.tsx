import styles from "@/app/waitlist.module.css";

const steps = [
  {
    tag: "DEPOSIT",
    title: "Lock in your collateral",
    description:
      "Put your crypto to work in a trusted lending protocol. You never lose ownership — it's still yours, still earning.",
  },
  {
    tag: "BORROW",
    title: "Borrow against it, instantly",
    description:
      "We open a borrowing position for you behind the scenes. No wallets to manage, no protocols to learn.",
  },
  {
    tag: "RECEIVE",
    title: "Get cash where you actually spend it",
    description:
      "We convert and send it straight to your bank or mobile money — KES, NGN, GHS and more.",
  },
];

export function HowItWorks() {
  return (
    <div className={styles.slip}>
      <div className={styles.slipHead}>How it works</div>
      {steps.map((step) => (
        <div key={step.tag} className={styles.slipRow}>
          <div className={styles.slipTag}>{step.tag}</div>
          <div className={styles.slipText}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
