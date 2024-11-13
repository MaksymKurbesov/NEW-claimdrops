import styles from "./Footer.module.css";
import { IconSpy } from "@tabler/icons-react";
import FindUsProducthunt from "../../assets/find-us-producthunt.svg";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={"container"}>
        <div className={styles["left-column"]}>
          <h3 className={styles["title"]}>Drops</h3>
          <p className={styles["subtitle"]}>
            Check and track any crypto wallet address for unclaimed airdrops,
            get Telegram alerts on eligibility, and never miss an airdrop again
            with Drops.
          </p>
        </div>
        <div className={styles["right-column"]}>
          <ul>
            <span>Resources</span>
            <li>FAQ</li>
            <li>Airdrops</li>
            <li>Pricing</li>
          </ul>
          <ul>
            <span>Support</span>
            <li>Support Chat</li>
            <li>Terms of Service</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className={"container"}>
        <div className={styles["bottom-footer"]}>
          <p>
            <IconSpy size={20} />
            Privacy first! We never share data with third parties. © 2024
            Drops. All rights reserved.
          </p>
          <img src={FindUsProducthunt} alt={""} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
