import styles from "./Header.module.css";
import Logo from "../../assets/logo.webp";
import Logo2 from "../../assets/logo2.webp";
import { Button, Flex } from "@mantine/core";
import { IconBrandTelegram } from "@tabler/icons-react";
import useWindowSize from "../../hooks/useWindowSize";
import { useEffect, useState } from "react";

const Header = () => {
  const windowSize = useWindowSize();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Используем requestAnimationFrame для оптимизации
      requestAnimationFrame(() => {
        setScrollY(window.scrollY); // или `window.scrollTop`
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles["header"]} ${scrollY >= 100 ? styles["scrolled-header"] : ""}`}
    >
      {/*<div className={"container"}>*/}
      <Flex justify={"space-between"} align={"center"}>
        <img
          className={styles["logo"]}
          src={scrollY >= 100 ? Logo2 : Logo}
          alt={""}
          width={55}
          height={55}
        />
        <nav className={styles["nav"]}>
          <ul>
            <li>
              <a>Airdrops</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Earn</a>
            </li>
          </ul>
        </nav>
        <Button
          leftSection={<IconBrandTelegram size={18} />}
          color="rgba(255, 255, 255, 1)"
          variant="subtle"
          radius="md"
          className={styles["log-in"]}
        >
          Log in
        </Button>
      </Flex>
      {/*</div>*/}
    </header>
  );
};

export default Header;
