import styles from "./Testimonials.module.css";
import { Avatar } from "@mantine/core";
import TwitterBlueIcon from "../../../../assets/twitter-blue.svg";
import useWindowSize from "../../../../hooks/useWindowSize.js";
import MobileFeedbacks from "./MobileFeedbacks.jsx";

export const FEEDBACKS = [
  {
    text: (
      <p>
        "Didn't realize this exists but super helpful, and realized I have some
        unclaimed <span>$EIGEN</span> 🫡"
      </p>
    ),
    name: "DeFi Dad",
    nickname: "@DeFi_Dad",
  },
  {
    text: (
      <p>"One of the best tool to check ALL of your airdrops allocation"</p>
    ),
    name: "tobi",
    nickname: "@Tobific",
  },
  {
    text: (
      <p>
        "Pretty good tool to check your <span>$EIGEN</span> airdrop allos No
        need to connect wallet. Just paste it"
      </p>
    ),
    name: "OxTøchi 🦇🔈",
    nickname: "@OxTochi",
  },
  {
    text: (
      <p>
        "I found <span>8</span> airdrops worth <span>$197</span> on my address!
        Thank you <span>@DropScannerAlertsBot</span> for such a discovery!"
      </p>
    ),
    name: "hottiebabegem",
    nickname: "@HottieBabeGem",
  },
  {
    text: (
      <p>
        "I discovered <span>4</span> airdrops with a total value of more than{" "}
        <span>$215</span>. This tool really helps you not miss out on
        opportunities!"
      </p>
    ),
    name: "DeFi Dad",
    nickname: "@DeFi_Dad",
  },
  {
    text: (
      <p>
        "Who would’ve thought I’d find <span>3</span> airdrops worth over{" "}
        <span>$332</span> just by checking with{" "}
        <span>@DropScannerAlertsBot</span>? Highly recommended!"
      </p>
    ),
    name: "tobi",
    nickname: "@Tobific",
  },
  {
    text: (
      <p>
        "Using this tool, I found an airdrop worth <span>$121</span> that I
        didn’t even know I could claim!"
      </p>
    ),
    name: "OxTøchi 🦇🔈",
    nickname: "@OxTochi",
  },
  {
    text: (
      <p>
        "Amazing service! It’s fast, easy, and most importantly — effective.
        Thanks for your work!"
      </p>
    ),
    name: "hottiebabegem",
    nickname: "@HottieBabeGem",
  },
  {
    text: (
      <p>
        "Surprisingly, <span>4</span> of my addresses qualify for the{" "}
        <span>ZkSync Airdrop</span>, with a total value exceeding{" "}
        <span>$558</span>. Great tool!"
      </p>
    ),
    name: "DeFi Dad",
    nickname: "@DeFi_Dad",
  },
  {
    text: (
      <p>
        "I found <span>3</span> airdrops worth <span>$723</span> using{" "}
        <span>@DropScannerAlertsBot</span>. This app is a must-have for anyone
        in crypto."
      </p>
    ),
    name: "tobi",
    nickname: "@Tobific",
  },
  {
    text: (
      <p>
        "Checked my address and found <span>2</span> airdrops worth a total of{" "}
        <span>$258</span>. The service is very convenient and saves a lot of
        time."
      </p>
    ),
    name: "OxTøchi 🦇🔈",
    nickname: "@OxTochi",
  },
  {
    text: (
      <p>
        "I discovered 5 airdrops worth <span>$242</span> on my account. I never
        imagined there’d be such a sum waiting there. Thanks,{" "}
        <span>@DropScannerAlertsBot</span>!"
      </p>
    ),
    name: "hottiebabegem",
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
