import styles from "./Testimonials.module.css";
import { Avatar } from "@mantine/core";
import TwitterBlueIcon from "../../../../assets/twitter-blue.svg";
import useWindowSize from "../../../../hooks/useWindowSize.js";
import MobileFeedbacks from "./MobileFeedbacks.jsx";

export const FEEDBACKS = [
  {
    text: '"Didn\'t realize this exists but super helpful, and realized I have some unclaimed $EIGEN 🫡"',
    name: "DeFi Dad",
    nickname: "@DeFi_Dad",
  },
  {
    text: '"One of the best tool to check ALL of your airdrops allocation"',
    name: "tobi",
    nickname: "@Tobific",
  },
  {
    text: '"Pretty good tool to check your $EIGEN airdrop allos No need to connect wallet. Just paste it"',
    name: "OxTøchi 🦇🔈",
    nickname: "@OxTochi",
  },
  {
    text: '"I just found 8 Airdrops worth at least $197 to claim for my address on @DropsBotHQ Check it out!"',
    name: "hottiebabegem ⫷🔆⫸",
    nickname: "@HottieBabeGem",
  },
  {
    text: '"Didn\'t realize this exists but super helpful, and realized I have some unclaimed $EIGEN 🫡"',
    name: "DeFi Dad",
    nickname: "@DeFi_Dad",
  },
  {
    text: '"One of the best tool to check ALL of your airdrops allocation"',
    name: "tobi",
    nickname: "@Tobific",
  },
  {
    text: '"Pretty good tool to check your $EIGEN airdrop allos No need to connect wallet. Just paste it"',
    name: "OxTøchi 🦇🔈",
    nickname: "@OxTochi",
  },
  {
    text: '"I just found 8 Airdrops worth at least $197 to claim for my address on @DropsBotHQ Check it out!"',
    name: "hottiebabegem ⫷🔆⫸",
    nickname: "@HottieBabeGem",
  },
  {
    text: '"Didn\'t realize this exists but super helpful, and realized I have some unclaimed $EIGEN 🫡"',
    name: "DeFi Dad",
    nickname: "@DeFi_Dad",
  },
  {
    text: '"One of the best tool to check ALL of your airdrops allocation"',
    name: "tobi",
    nickname: "@Tobific",
  },
  {
    text: '"Pretty good tool to check your $EIGEN airdrop allos No need to connect wallet. Just paste it"',
    name: "OxTøchi 🦇🔈",
    nickname: "@OxTochi",
  },
  {
    text: '"I just found 8 Airdrops worth at least $197 to claim for my address on @DropsBotHQ Check it out!"',
    name: "hottiebabegem ⫷🔆⫸",
    nickname: "@HottieBabeGem",
  },
];

const Testimonials = () => {
  const windowSize = useWindowSize();

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
      {windowSize.width <= 800 ? (
        <MobileFeedbacks />
      ) : (
        <ul className={styles["feedback-list"]}>
          {FEEDBACKS.map((feedback, index) => {
            return (
              <li key={index}>
                <p className={styles["feedback-text"]}>{feedback.text}</p>
                <div className={styles["profile"]}>
                  <Avatar radius="xl" />
                  <div>
                    <p>
                      {feedback.name}
                      <img src={TwitterBlueIcon} alt={""} width={17} />
                    </p>
                    <span>{feedback.nickname}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Testimonials;
