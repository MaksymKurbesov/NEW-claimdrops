import styles from "./YourAddresses.module.css";
import { Button, LoadingOverlay, Modal } from "@mantine/core";
import { IconPlus, IconMoodEmptyFilled } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { auth, userService } from "../../../main.jsx";
import { useAuthState } from "../../../hooks/userAuthState.js";
import { isCryptoWallet } from "../../../helpers/helpers.js";
import Step1 from "./Step1/Step1.jsx";
import Step2 from "./Step2/Step2.jsx";
import AddressesList from "./AddressesList/AddressesList.jsx";

const YourAddresses = ({ openPricingModal }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [step, setStep] = useState(1);
  const [user] = useAuthState(auth);
  const [walletNumber, setWalletNumber] = useState("");
  const [isError, setIsError] = useState("");
  const [visible, { toggle }] = useDisclosure(false);
  const [visible2, { toggle: toggle2 }] = useDisclosure(false);
  const [addresses, setAddresses] = useState([]);
  const [addressIsLoading, setAddressIsLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) return;

    const fetchAddresses = async () => {
      toggle2();
      setAddressIsLoading(true);
      await userService.subscribeOnWallets(
        auth.currentUser.email,
        setAddresses,
      );
    };

    fetchAddresses().then(() => {
      setAddressIsLoading(false);
    });
  }, [auth.currentUser]);

  const goNextStep = () => {
    const cryptoWallet = isCryptoWallet(walletNumber);

    if (!cryptoWallet) {
      // toggle();
      setIsError("Invalid Wallet Address");
    } else {
      toggle();
      const randomTimeout =
        Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
      setTimeout(() => {
        setIsError("");
        setStep(2);
      }, randomTimeout);
    }
  };

  return (
    <div className={styles["your-addresses"]} id={"your-addresses"}>
      <div className={styles["header"]}>
        <h2>
          Your Addresses <span>{addresses.length}</span>
        </h2>
        <Button
          onClick={() => {
            if (addresses.length) {
              openPricingModal();
            } else {
              open();
            }
          }}
          color={"#FF9400"}
          radius={"md"}
          size={"xs"}
          leftSection={<IconPlus size={12} />}
        >
          Add addresses
        </Button>
      </div>

      <div className={styles["addresses-list"]}>
        <LoadingOverlay
          visible={addressIsLoading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <AddressesList addresses={addresses} />
      </div>

      <Modal
        centered
        opened={opened}
        onClose={() => {
          close();
          setIsError("");
        }}
        title="Add addresses to watch"
        styles={{
          title: { fontWeight: 500 },
          content: { borderRadius: 15 },
        }}
        className={styles["modal"]}
      >
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        {step === 1 && (
          <Step1
            walletNumber={walletNumber}
            setWalletNumber={setWalletNumber}
            isError={isError}
            setIsError={setIsError}
            visible={visible}
            toggle={toggle}
          />
        )}
        {step === 2 && <Step2 walletNumber={walletNumber} toggle={toggle} />}
        {step === 2 && (
          <Button
            className={styles["back-button"]}
            onClick={() => setStep(1)}
            radius={"md"}
            color={"#ff9400"}
            variant={"light"}
          >
            Back
          </Button>
        )}
        <Button
          onClick={() => {
            if (step === 1) {
              goNextStep();
            }

            if (step === 2) {
              userService.addWalletToWatch(user.email, walletNumber);
              close();
            }
          }}
          radius={"md"}
          color={"#ff9400"}
          className={`${step === 1 ? styles["next-button"] : ""}`}
        >
          {step === 1 ? "Next" : "Confirm"}
        </Button>
      </Modal>
    </div>
  );
};

export default YourAddresses;
