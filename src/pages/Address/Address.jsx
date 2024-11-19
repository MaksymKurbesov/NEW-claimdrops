import styles from "./Address.module.css";
import {
  IconRadar2,
  IconBrandTelegram,
  IconArrowNarrowLeft,
  IconCheck,
} from "@tabler/icons-react";
import { Button, LoadingOverlay } from "@mantine/core";
import AirdropTabs from "./AirdropTabs/AirdropTabs.jsx";
import { NavLink, ScrollRestoration, useParams } from "react-router-dom";
import SponsorCarousel from "../../sharedUI/SponsorCarousel/Carousel.jsx";
import MyCopyButton from "../../sharedUI/CopyButton/CopyButton.jsx";
import {
  cutWalletNumber,
  identifyCryptoWallet,
} from "../../helpers/helpers.js";
import { ICON_MAP } from "../Dashboard/YourAddresses/Step2/Step2.jsx";
import { useAuthState } from "../../hooks/userAuthState.js";
import { auth, userService } from "../../main.jsx";
import { useEffect, useState } from "react";
import PricingModal from "../../sharedUI/PricingModal/PricingModal.jsx";
import { useDisclosure } from "@mantine/hooks";
import { useSignInModal } from "../../context/SignInModalContext.jsx";

const Address = () => {
  const { walletId } = useParams();
  const [user] = useAuthState(auth);
  const [userWallets, setUserWallets] = useState([]);
  const [hasWallet, setHasWallet] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const [isOpenLoadOverlay, setIsOpenLoadOverlay] = useState(true);
  const { isVisible, updateIsVisible } = useSignInModal();

  useEffect(() => {
    const timeout = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;

    setTimeout(() => {
      setIsOpenLoadOverlay(false);
    }, timeout);
  }, []);

  useEffect(() => {
    const fetchWallets = async () => {
      if (user) {
        const wallets = await userService.getUserWallets(user.email);
        setUserWallets(wallets);

        setHasWallet(wallets.includes(walletId));
      }
    };

    fetchWallets();
  }, [user]);

  return (
    <div className={styles["address"]}>
      <SponsorCarousel />
      <div className={"container"}>
        <div className={styles["title"]}>
          <p>Address</p>

          <span>
            <img
              src={ICON_MAP[identifyCryptoWallet(walletId)]}
              alt={""}
              width={15}
            />
            {identifyCryptoWallet(walletId)}
          </span>
        </div>
        <div className={styles["address-wrapper"]}>
          <p>
            {cutWalletNumber(walletId)}
            <MyCopyButton value={walletId} />
          </p>
          {user && hasWallet ? (
            <Button
              leftSection={<IconCheck size={16} />}
              disabled
              radius={"md"}
              color={"#FF9400"}
            >
              Watching
            </Button>
          ) : (
            <Button
              radius={"md"}
              color={"#FF9400"}
              onClick={() => {
                if (!user) {
                  updateIsVisible();
                } else {
                  open();
                }
              }}
            >
              Watch this address
            </Button>
          )}
        </div>
        <h2>Address Airdrops</h2>
        <AirdropTabs>
          <div className={styles["log-in-wrapper"]}>
            <LoadingOverlay
              visible={isOpenLoadOverlay}
              zIndex={1000}
              overlayProps={{ radius: "sm", blur: 2 }}
            />
            <span className={styles["icon"]}>
              <IconRadar2 size={50} color={"rgb(255,204,134)"} />
            </span>
            <p>Currently not eligible for Airdrops</p>
            <span className={styles["log-in-text"]}>
              {!user
                ? "Log in and save this address to be alerted for every future airdrops"
                : hasWallet
                  ? "This address has been saved. You will see on this page if it becomes eligible for future Airdrops."
                  : "Save this address to be alerted when it becomes eligible for future Airdrops"}
            </span>
            {!user && (
              <Button
                color={"#FF9400"}
                radius={"md"}
                leftSection={<IconBrandTelegram />}
                className={styles["log-in-button"]}
                onClick={() => updateIsVisible()}
              >
                Log in
              </Button>
            )}

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
      <PricingModal opened={opened} close={close} />
      <SponsorCarousel />
      <ScrollRestoration />
    </div>
  );
};

export default Address;
