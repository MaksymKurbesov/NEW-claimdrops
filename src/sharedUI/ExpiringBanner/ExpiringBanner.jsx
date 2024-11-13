import styles from "./ExpiringBanner.module.css";
import { Button } from "@mantine/core";

const ExpiringBanner = () => {
  return (
    <div className={styles["expiring-banner"]}>
      <h2>1 Airdrop expiring in the next 7 days</h2>
      <Button
        radius={"md"}
        size={"sm"}
        color={"white"}
        className={styles["check-button"]}
      >
        Check Your Eligibility
      </Button>
    </div>
  );
};

export default ExpiringBanner;
