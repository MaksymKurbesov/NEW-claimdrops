import styles from "./Pricing.module.css";
import { Button, Card, SegmentedControl, Tooltip } from "@mantine/core";
import { useState } from "react";
import {
  IconCircleCheck,
  IconCircleLetterX,
  IconExclamationCircle,
} from "@tabler/icons-react";

const Pricing = () => {
  const [value, setValue] = useState("monthly");

  return (
    <div className={styles["pricing"]}>
      <div className={"container"}>
        <h3 className={"little-title"}>Pricing</h3>
        <h2>
          Become a Premium user
          <br />
          <span>Unlock all Benefits</span>
        </h2>
        <p className={styles["subtitle"]}>
          As a premium user, you can track all your addresses across networks,
          receive Telegram alerts, and ensure you never miss future airdrops.
          <br />
          Pay with crypto via automatic payments or email invoice. Cancel
          anytime.
        </p>
        <div className={styles["segmented-control"]}>
          <SegmentedControl
            value={value}
            onChange={setValue}
            data={[
              { label: "Monthly", value: "monthly" },
              { label: "Yearly (20% Off)", value: "yearly" },
            ]}
            radius="md"
            color={"#FF9400"}
          />
        </div>
        <div className={styles["pricing-list"]}>
          <Card radius={"lg"}>
            <h2>E-beggar</h2>
            <p className={styles["price"]}>
              <sup>$</sup>0<sub>/ address / mo</sub>
            </p>
            <span className={styles["billed"]}></span>
            <p className={styles["watch-1-address"]}>Watch 1 address</p>
            <Button
              className={styles["get-started-button"]}
              color={"#FF9400"}
              radius={"md"}
              variant={"outline"}
            >
              Get Started
            </Button>
            <span className={styles["plan-includes"]}>Plan includes:</span>
            <ul className={styles["includes-list"]}>
              <li>
                <IconCircleCheck color={"#FF9400"} />
                See all eligible Airdrops
              </li>
              <li>
                <IconCircleCheck color={"#FF9400"} />
                Get your personal referral link
              </li>
              <li className={styles["cancel-plan"]}>
                <IconCircleLetterX />
                Telegram alerts
              </li>
            </ul>
          </Card>
          <Card radius={"lg"}>
            <h2>Whale</h2>
            <p className={styles["price"]}>
              <sup>$</sup>0.48<sub>/ address / mo</sub>
            </p>
            <span className={styles["billed"]}>$24 billed monthly</span>
            <p className={styles["watch-1-address"]}>Watch 50 address</p>
            <Button
              className={styles["get-started-button"]}
              color={"#FF9400"}
              radius={"md"}
              variant={"filled"}
            >
              Get Started
            </Button>
            <span className={styles["plan-includes"]}>Plan includes:</span>
            <ul className={styles["includes-list"]}>
              <li>
                <IconCircleCheck color={"#FF9400"} />
                See all eligible Airdrops
              </li>
              <li>
                <IconCircleCheck color={"#FF9400"} />
                Telegram alerts
                <Tooltip label="Get alerts from our Telegram bot when new airdrops are added and your addresses are eligible">
                  <IconExclamationCircle size={16} />
                </Tooltip>
              </li>
              <li>
                <IconCircleCheck color={"#FF9400"} />
                No ads
              </li>
              <li>
                <IconCircleCheck color={"#FF9400"} />
                Cancel anytime
              </li>
            </ul>
          </Card>
          <Card radius={"lg"}>
            <h2>Pleb</h2>
            <p className={styles["price"]}>
              <sup>$</sup>0<sub>/ address / mo</sub>
            </p>
            <span className={styles["billed"]}>$7 billed monthly</span>
            <p className={styles["watch-1-address"]}>Watch 1 address</p>
            <Button
              className={styles["get-started-button"]}
              color={"#FF9400"}
              radius={"md"}
              variant={"outline"}
            >
              Get Started
            </Button>
            <span className={styles["plan-includes"]}>Plan includes:</span>
            <ul className={styles["includes-list"]}>
              <li>
                <IconCircleCheck color={"#FF9400"} />
                See all eligible Airdrops
              </li>
              <li>
                <IconCircleCheck color={"#FF9400"} />
                Telegram alerts
                <Tooltip label="Get alerts from our Telegram bot when new airdrops are added and your addresses are eligible">
                  <IconExclamationCircle size={16} />
                </Tooltip>
              </li>
              <li>
                <IconCircleCheck color={"#FF9400"} />
                No ads
              </li>
              <li>
                <IconCircleCheck color={"#FF9400"} />
                Cancel anytime
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
