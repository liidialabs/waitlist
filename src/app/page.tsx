import { Badge } from "@/components/waitlist/badge";
import { Ticker } from "@/components/waitlist/ticker";
import { HowItWorks } from "@/components/waitlist/how-it-works";
import { WaitlistForm } from "@/components/waitlist/waitlist-form";
import styles from "@/app/waitlist.module.css";

export default function WaitlistPage() {
  return (
    <div className={`${styles.wrap} max-w-6xl`}>
      <Badge />
      <div>
        <h1 className={styles.heading}>
          Turn your <em>crypto</em> into <em>spendable cash</em> without selling it
        </h1>
        <p className={styles.sub}>
          Deposit crypto into trusted lending protocols and borrow real cash against it —{" "}
          <strong>sent straight to your bank or mobile wallet.</strong> No selling. No
          liquidating your position. No crypto knowledge required.
        </p>
        <Ticker />
        <HowItWorks />
      </div>
      <WaitlistForm />
    </div>
  );
}
