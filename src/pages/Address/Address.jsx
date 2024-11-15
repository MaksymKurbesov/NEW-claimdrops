import styles from "./Address.module.css";
import {
  IconRadar2,
  IconBrandTelegram,
  IconArrowNarrowLeft,
} from "@tabler/icons-react";
import { Button } from "@mantine/core";
import AirdropTabs from "./AirdropTabs/AirdropTabs.jsx";
import { NavLink, useParams } from "react-router-dom";
import SponsorCarousel from "../../sharedUI/SponsorCarousel/Carousel.jsx";
import MyCopyButton from "../../sharedUI/CopyButton/CopyButton.jsx";
import { cutWalletNumber } from "../../helpers/helpers.js";

const Address = () => {
  const { walletId } = useParams();

  return (
    <div className={styles["address"]}>
      <SponsorCarousel />
      <div className={"container"}>
        <span className={styles["title"]}>Address</span>
        <div className={styles["address-wrapper"]}>
          <p>
            {cutWalletNumber(walletId)}
            <MyCopyButton value={walletId} />
          </p>
          <Button radius={"md"} color={"#FF9400"}>
            Watch this address
          </Button>
        </div>
        <h2>Address Airdrops</h2>
        <AirdropTabs>
          <div className={styles["log-in-wrapper"]}>
            <span className={styles["icon"]}>
              <IconRadar2 size={50} color={"rgb(255,204,134)"} />
            </span>
            <p>Currently not eligible for Airdrops</p>
            <span className={styles["log-in-text"]}>
              Log in and save this address to be alerted for every future
              airdrops
            </span>
            <Button
              color={"#FF9400"}
              radius={"md"}
              leftSection={<IconBrandTelegram />}
              className={styles["log-in-button"]}
            >
              Log in
            </Button>
            <NavLink to={"/"} className={styles["check-another-link"]}>
              <IconArrowNarrowLeft />
              Check another address
            </NavLink>
          </div>
        </AirdropTabs>
        <p className={styles["airdrop-missing"]}>
          Airdrop missing from here? Report missing airdrops to Drops Admin
        </p>
      </div>
      <SponsorCarousel />
    </div>
  );
};

export default Address;
