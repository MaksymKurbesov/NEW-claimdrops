import styles from "./YourAddresses.module.css";
import { Anchor, Button, Modal, TextInput } from "@mantine/core";
import { IconPlus, IconMoodEmptyFilled, IconWallet } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const YourAddresses = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [step, setStep] = useState(1);

  return (
    <div className={styles["your-addresses"]}>
      <div className={styles["header"]}>
        <h2>
          Your Addresses <span>0</span>
        </h2>
        <Button
          onClick={open}
          color={"#FF9400"}
          radius={"md"}
          leftSection={<IconPlus />}
        >
          Add addresses
        </Button>
      </div>
      <div className={styles["log-in-wrapper"]}>
        <span className={styles["icon"]}>
          <IconMoodEmptyFilled size={50} color={"rgb(255,204,134)"} />
        </span>
        <p>No wallets tracked for airdrops yet</p>
        <span className={styles["log-in-text"]}>
          You’re not tracking any wallets for airdrops yet.
        </span>
      </div>
      <Modal
        centered
        opened={opened}
        onClose={close}
        title="Add addresses to watch"
        styles={{
          title: { fontWeight: 500 },
          content: { borderRadius: 15 },
        }}
        className={styles["modal"]}
      >
        {step === 1 && (
          <>
            {" "}
            <p className={styles["e-bagger"]}>
              E-beggar plan allows you to watch up to 1 addresses
            </p>
            <NavLink to={"/airdrops"}>Supported Networks</NavLink>
            <TextInput
              label={
                "Enter the address of your crypto wallet to track airdrop."
              }
              placeholder={"0x..."}
            />
          </>
        )}
        {step === 2 && (
          <>
            <div className={styles["wallet-wrapper"]}>
              <span>Wallet:</span>
              <p>0x825c684b3c9A335587F5fA51764d58641C41f647</p>
            </div>
            <div className={styles["network-wrapper"]}>
              <span>Network:</span>
              <p>Ethereum</p>
            </div>
            <Button
              className={styles["back-button"]}
              onClick={() => setStep(1)}
              radius={"md"}
              color={"#ff9400"}
              variant={"light"}
            >
              Back
            </Button>
          </>
        )}
        <Button onClick={() => setStep(2)} radius={"md"} color={"#ff9400"}>
          Next
        </Button>
      </Modal>
    </div>
  );
};

export default YourAddresses;
