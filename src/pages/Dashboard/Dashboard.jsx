import styles from "./Dashboard.module.css";
import { useAuthState } from "../../hooks/userAuthState.js";
import { auth } from "../../main.jsx";
import SponsorCarousel from "../../sharedUI/SponsorCarousel/Carousel.jsx";
import { Button } from "@mantine/core";
import { IconBrandTelegram, IconRadar2, IconCrown } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import YourAddresses from "../Address/YourAddresses/YourAddresses.jsx";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  console.log(user, "user");

  return (
    <div className={styles["dashboard"]}>
      <SponsorCarousel />
      <div className={"container"}>
        <div className={styles["title-wrapper"]}>
          <h2 className={styles["title"]}>Dashboard</h2>
          <p>No subscription</p>
          <Button variant={"light"} color={"#FF9400"}>
            Get Premium
          </Button>
          <Button color={"#FF9400"}>Connect Wallet</Button>
        </div>
        <div className={styles["banner"]}>
          <h3>Upgrade and get all the benefits</h3>
          <p>
            As a premium user you can track all your addresses and get Telegram
            alerts on eligibility.
          </p>
          <Button
            className={styles["upgrade-button"]}
            color={"white"}
            radius={"md"}
            leftSection={<IconCrown />}
          >
            Upgrade Plan
          </Button>
          <Button
            color={"white"}
            variant={"subtle"}
            radius={"md"}
            leftSection={<IconBrandTelegram />}
          >
            Join Chat
          </Button>
        </div>
        <h2 className={styles["eligible-airdrops"]}>Eligible Airdrops</h2>
        <div className={styles["log-in-wrapper"]}>
          <span className={styles["icon"]}>
            <IconRadar2 size={50} color={"rgb(255,204,134)"} />
          </span>
          <p>Currently not eligible for Airdrops</p>
          <span className={styles["log-in-text"]}>
            If one of your addresses becomes eligible for a future Airdrop, it
            will be shown here. In the meantime, you can add all your addresses.
          </span>
        </div>
        <YourAddresses />
      </div>
      <SponsorCarousel />
    </div>
  );
};

export default Dashboard;
