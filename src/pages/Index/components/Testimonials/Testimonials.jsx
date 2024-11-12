import styles from "./Testimonials.module.css";
import { Avatar } from "@mantine/core";
import TwitterBlueIcon from "../../../../assets/twitter-blue.svg";

const Testimonials = () => {
  return (
    <div className={styles["testimonials"]}>
      <h3 className={"little-title"}>Testimonials</h3>
      <h2>
        Over <span>13000 users</span> have found <br />
        and claimed Airdrops
      </h2>
      <p className={styles["subtitle"]}>
        Share your results on X and tag @DropsBotHQ to be featured.
      </p>
      <ul className={styles["feedback-list"]}>
        <li>
          <p className={styles["feedback-text"]}>
            "Didn't realize this exists but super helpful, and realized I have
            some unclaimed $EIGEN 🫡"
          </p>
          <div className={styles["profile"]}>
            <Avatar radius="xl" />
            <div>
              <p>
                DeFi Dad
                <img src={TwitterBlueIcon} alt={""} width={17} />
              </p>
              <span>@DeFi_Dad</span>
            </div>
          </div>
        </li>
        <li>
          <p className={styles["feedback-text"]}>
            "Didn't realize this exists but super helpful, and realized I have
            some unclaimed $EIGEN 🫡"
          </p>
          <div className={styles["profile"]}>
            <Avatar radius="xl" />
            <div>
              <p>
                DeFi Dad
                <img src={TwitterBlueIcon} alt={""} width={17} />
              </p>
              <span>@DeFi_Dad</span>
            </div>
          </div>
        </li>
        <li>
          <p className={styles["feedback-text"]}>
            "Didn't realize this exists but super helpful, and realized I have
            some unclaimed $EIGEN 🫡"
          </p>
          <div className={styles["profile"]}>
            <Avatar radius="xl" />
            <div>
              <p>
                DeFi Dad
                <img src={TwitterBlueIcon} alt={""} width={17} />
              </p>
              <span>@DeFi_Dad</span>
            </div>
          </div>
        </li>
        <li>
          <p className={styles["feedback-text"]}>
            "Didn't realize this exists but super helpful, and realized I have
            some unclaimed $EIGEN 🫡"
          </p>
          <div className={styles["profile"]}>
            <Avatar radius="xl" />
            <div>
              <p>
                DeFi Dad
                <img src={TwitterBlueIcon} alt={""} width={17} />
              </p>
              <span>@DeFi_Dad</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Testimonials;
