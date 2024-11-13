import styles from "./Banner.module.css";
import { Button } from "@mantine/core";
import PhoneImage from "../../../../assets/phone.webp";

const Banner = () => {
  return (
    <div className={styles["banner"]}>
      <div className={"container"}>
        <div className={styles["banner-text"]}>
          <h2>Stay up to date on Telegram</h2>
          <p>
            Receive Telegram alerts for new Airdrops when one of your addresses
            becomes eligible
          </p>
          <Button
            color={"white"}
            size={"md"}
            radius={"md"}
            className={styles["start-finding-button"]}
          >
            Start Finding Airdrops
          </Button>
        </div>
        <img src={PhoneImage} alt={""} width={350} />
        <Button
          color={"#FF9400"}
          size={"md"}
          radius={"md"}
          className={styles["start-finding-mobile-button"]}
        >
          Start Finding Airdrops
        </Button>
      </div>
    </div>
  );
};

export default Banner;
