import styles from "./FAQ.module.css";
import { Accordion } from "@mantine/core";

const AIRDROPS = [
  {
    value: "What are Airdrops?",
    description: (
      <p className={styles["description"]}>
        Airdrops are a marketing strategy in the cryptocurrency world where
        blockchain projects distribute free tokens to the community to promote
        awareness and adoption. These tokens are often given to users who
        complete specific tasks, such as onchain activities or joining a
        community group. <br />
        <br />
        Airdrops can be profitable for protocol users as they receive free
        tokens that may increase in value over time, providing a direct
        financial benefit. <br />
        <br />
        If you have active wallets or addresses on any of the supported
        blockchains/networks, you might be eligible for Airdrops!,
      </p>
    ),
  },
  {
    value: "How to qualify for Airdops",
    description: (
      <p className={styles["description"]}>
        Qualifying for airdrops through onchain activities involves engaging
        directly with a blockchain's ecosystem by performing specific tasks that
        demonstrate active participation and support. These activities can
        include trading, staking, or holding a particular cryptocurrency,
        interacting with decentralized applications (dApps), providing liquidity
        to decentralized exchanges (DEXs), or participating in governance votes.
        <br />
        <br />
        "By consistently engaging in these onchain activities, users not only
        contribute to the network's growth and stability but also position
        themselves as active members of the community, often making them
        eligible for airdrops. These onchain actions are verifiable through the
        blockchain, ensuring that the rewards are distributed to genuine and
        engaged users. <br />
        <br />
        "Drops makes it easy to check your eligibility for airdrops by
        monitoring your wallet addresses across multiple networks. Saving your
        addresses, you can receive real-time notifications on Telegram when you
        qualify for airdrops, ensuring that you can claim your airdrop before it
        expires, so you never miss out on free tokens.
      </p>
    ),
  },
];

const GENERAL = [
  {
    value: "How can I find unclaimed Airdrops?",
    description: (
      <p className={styles["description"]}>
        Drops is the most advanced airdrop checker. It finds unclaimed crypto
        airdrops for you by monitoring all your wallet addresses across multiple
        networks like Ethereum, Solana, Cosmos, Aptos, and Bitcoin. Just paste
        your crypto wallet address to the checker. No need to connect a wallet.
      </p>
    ),
  },
  {
    value: "How do I avoid missing Airdrops?",
    description: (
      <p className={styles["description"]}>
        We've made it simple. Just enter any crypto wallet addresses, and Drops
        will instantly check your eligibility for all recent and verified
        airdrops. It will also run automatic background checks for new airdrops.
        If you're eligible, you'll get a notification on Telegram.
      </p>
    ),
  },
  {
    value: "What is Drops?",
    description: (
      <p className={styles["description"]}>
        Drops (previously called "AirdropHunt.fun") is the most advanced airdrop
        checker, automatically finding unclaimed crypto airdrops for you. Track
        and monitor all your wallet addresses across multiple networks like
        Ethereum, Solana, Cosmos, Aptos and Bitcoin, Telegram alerts on
        eligibility, and never miss an airdrop again. Drops makes airdrop
        hunting easy with Telegram alerts.
      </p>
    ),
  },
  {
    value: "What blockchains are supported on Drops?",
    description: (
      <p className={styles["description"]}>
        Currently Drops can check unclaimed airdrops on Ethereum & L2, Solana,
        Starknet, Aptos, Sui, Cosmos, Bitcoin See the full list on all supported
        airdrops page.
      </p>
    ),
  },
  {
    value: "How do I sign in?",
    description: (
      <p className={styles["description"]}>
        With a Telegram account. Click "Log in" and follow the instructions.
      </p>
    ),
  },
  {
    value: "What is referral program?",
    description: (
      <p className={styles["description"]}>
        Every user gets a unique referral link. Share it with your friends and
        earn 10% of their subscription fee. See the referrals page for more
        details.
      </p>
    ),
  },
  {
    value: "What are the Official Social Media Channels?",
    description: (
      <p className={styles["description"]}>
        You can find us on Telegram and X (Twitter)
      </p>
    ),
  },
  {
    value: "Any other free tools?",
    description: (
      <p className={styles["description"]}>
        Yes, we have a free tool to check your wallet addresses for points
        across multiple protocols. See the Points checker dashboard. And we have
        another free tool to check your EIGEN allocation across multiple
        protocols. See the EIGEN checker dashboard.
      </p>
    ),
  },
];

const PRIVACY = [
  {
    value: "Why is Telegram the only login option?",
    description: (
      <p className={styles["description"]}>
        We chose Telegram for its security and privacy features. It allows you
        to log in without sharing your email or phone number with us, and you
        can receive alerts when you become eligible for new airdrops. We never
        have access to your Telegram account data.
      </p>
    ),
  },
  {
    value: "Is there a risk for my addresses to be labeled as Sybil?",
    description: (
      <p className={styles["description"]}>
        Unlikely. All eligibility check requests are routed (proxied) through
        our servers and are not linked to your account in any way. However,
        Drops is not intended for sybil attacks and strive to maintain strong
        relationships and communication with the protocols we support to provide
        a best possible service, while ensuring user privacy is never
        compromised!
      </p>
    ),
  },
  {
    value: "Is my data safe on Drops?",
    description: (
      <p className={styles["description"]}>
        Yes, it is safe. We never share your data with any outside project or
        individual. We respect your privacy and operate under the GDPR
        regulation in the EU. For more details, see our Privacy policy.
      </p>
    ),
  },
  {
    value:
      "If protocols ask, do you provide them with user data to identify sybils?",
    description: (
      <p className={styles["description"]}>
        Never. We never share user data. User privacy is our top priority. For
        more details, see our Privacy policy.
      </p>
    ),
  },
];

const BILLING = [
  {
    value: "What payment methods are available?",
    description: (
      <p className={styles["description"]}>
        ETH and many stablecoin options on multiple chains. You can opt in to
        automatic billing, or email invoices.
      </p>
    ),
  },
  {
    value: "Is it safe to pay with crypto?",
    description: (
      <p className={styles["description"]}>
        Yes. Our payment provider is Boomfi from the UK. See their legal pages.
      </p>
    ),
  },
  {
    value: "Can I cancel my premium plan?",
    description: (
      <p className={styles["description"]}>
        Yes, you can cancel anytime. If you cancel and have added more than 1
        addresses, you will only see the first 1 addresses and won't receive
        notifications for any airdrops to the other addresses. This will remain
        until you subscribe again.
      </p>
    ),
  },
  {
    value:
      "I was late on my payment, and the Premium plan expired. What to do now?",
    description: (
      <p className={styles["description"]}>
        You can simply subscribe to premium again. All the addresses you have
        added and Airdrops you are eligible become visible again after.
      </p>
    ),
  },
];

const ISSUES = [
  {
    value: 'Why is see "Failed to check eligibility" message?',
    description: (
      <p className={styles["description"]}>
        Sometimes there are changes on how the protocols do the eligibility
        checks. We are usually quick to fix it in the background. No action is
        needed from you.
      </p>
    ),
  },
  {
    value: "Other issues",
    description: (
      <p className={styles["description"]}>
        If you have any other issues or questions, join our Telegram community
        and ask there. We are happy to help!
      </p>
    ),
  },
];

const FAQ = () => {
  const AIRDROPS_ITEMS = AIRDROPS.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const GENERAL_ITEMS = GENERAL.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const PRIVACY_ITEMS = PRIVACY.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const BILLING_ITEMS = BILLING.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  const ISSUES_ITEMS = ISSUES.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className={styles["FAQ"]}>
      <div>
        <h3 className={"little-title"}>Frequently asked questions</h3>
        <p className={styles["subtitle"]}>Everything you need to know</p>
      </div>
      <div className={styles["accordion-list"]}>
        <span>Airdrops</span>
        <Accordion
          styles={{
            label: { fontWeight: 500 },
            content: { fontWeight: 400, fontSize: 14 },
          }}
          className={styles["accordion"]}
          variant="contained"
        >
          {AIRDROPS_ITEMS}
        </Accordion>
        <span>General</span>
        <Accordion
          styles={{
            label: { fontWeight: 500 },
            content: { fontWeight: 400, fontSize: 14 },
          }}
          className={styles["accordion"]}
          variant="contained"
        >
          {GENERAL_ITEMS}
        </Accordion>
        <span>Privacy & Security</span>
        <Accordion
          styles={{
            label: { fontWeight: 500 },
            content: { fontWeight: 400, fontSize: 14 },
          }}
          className={styles["accordion"]}
          variant="contained"
        >
          {PRIVACY_ITEMS}
        </Accordion>
        <span>Billing & Payments</span>
        <Accordion
          styles={{
            label: { fontWeight: 500 },
            content: { fontWeight: 400, fontSize: 14 },
          }}
          className={styles["accordion"]}
          variant="contained"
        >
          {BILLING_ITEMS}
        </Accordion>
        <span>Issues</span>
        <Accordion
          styles={{
            label: { fontWeight: 500 },
            content: { fontWeight: 400, fontSize: 14 },
          }}
          className={styles["accordion"]}
          variant="contained"
        >
          {ISSUES_ITEMS}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;