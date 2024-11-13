import styles from "./Header.module.css";
import Logo from "../../assets/logo.webp";
import Logo2 from "../../assets/logo2.webp";
import { Button, Flex, Modal, Portal } from "@mantine/core";
import { IconBrandTelegram } from "@tabler/icons-react";
import useWindowSize from "../../hooks/useWindowSize";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { LoginButton } from "@telegram-auth/react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const isIndexPage = location.pathname === "/";
  const [opened, { open, close }] = useDisclosure(false);

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
      className={`${styles["header"]} ${!isIndexPage ? styles["white-header"] : ""} ${scrollY >= 100 ? styles["scrolled-header"] : ""}`}
    >
      <Flex justify={"space-between"} align={"center"}>
        <NavLink to={"/"}>
          <img
            className={styles["logo"]}
            src={scrollY >= 100 || !isIndexPage ? Logo2 : Logo}
            alt={""}
            width={45}
            height={45}
          />
        </NavLink>
        <nav className={styles["nav"]}>
          <ul>
            <li>
              <NavLink
                to={"/airdrops"}
                className={({ isActive }) => (isActive ? styles["active"] : "")}
              >
                Airdrops
              </NavLink>
            </li>
            <li>
              <Link
                to={"/#pricing"}
                onClick={() => {
                  document.getElementById("pricing")?.scrollIntoView();
                }}
                className={({ isActive }) => (isActive ? styles["active"] : "")}
              >
                Pricing
              </Link>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles["active"] : "")}
                to={"/earn"}
              >
                Earn
              </NavLink>
            </li>
          </ul>
        </nav>
        <Button
          leftSection={<IconBrandTelegram size={18} />}
          color="rgba(255, 255, 255, 1)"
          variant="subtle"
          radius="md"
          className={styles["log-in"]}
          onClick={open}
        >
          Log in
        </Button>
      </Flex>

      <Portal>
        <Modal opened={opened} onClose={close} title="Authentication">
          <LoginButton
            botUsername={"dropscanner_bot"}
            onAuthCallback={(data) => {
              console.log(data);
              // call your backend here to validate the data and sign in the user
            }}
          />
        </Modal>
      </Portal>
    </header>
  );
};

export default Header;
