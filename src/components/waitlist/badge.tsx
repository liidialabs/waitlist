import Image from "next/image";
import styles from "@/app/waitlist.module.css";

export function Badge() {
  return (
    <div className={`${styles.badge} text-accent`}>
      <Image src="/liidia.png" alt="Liidia" width={24} height={24} className={styles.logo} />
      Liidia
    </div>
  );
}
