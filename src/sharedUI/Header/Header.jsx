import styles from "./Header.module.css";
import Logo from "../../assets/logo.webp";
import Logo2 from "../../assets/logo2.webp";
import {
  Anchor,
  Button,
  Flex,
  Modal,
  PasswordInput,
  Portal,
  TextInput,
} from "@mantine/core";
import { IconLogin2, IconUserFilled } from "@tabler/icons-react";
import useWindowSize from "../../hooks/useWindowSize";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { authService } from "../../main.jsx";
import { useUser } from "../../UserContext.jsx";

const Header = ({ user }) => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isIndexPage = location.pathname === "/";
  const [opened, { open, close }] = useDisclosure(false);
  const [isLogin, setIsLogin] = useState(true);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = () => {
    if (userEmail === "" || userPassword === "") return;
    setIsLoading(true);

    if (isLogin) {
      authService
        .logInWithEmailAndPassword(userEmail, userPassword)
        .then(() => {
          navigate("/dashboard/overview");
        })
        .finally(() => {
          setIsLoading(false);
          close();
        });
    } else {
      authService
        .registerWithEmailAndPassword(userEmail, userPassword)
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

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
        {user ? (
          <Button
            leftSection={<IconUserFilled size={18} />}
            color="rgba(255, 255, 255, 1)"
            variant="subtle"
            radius="md"
            className={styles["log-in"]}
            onClick={() => navigate("/dashboard/overview")}
          >
            Dashboard
          </Button>
        ) : (
          <Button
            leftSection={<IconLogin2 size={18} />}
            color="rgba(255, 255, 255, 1)"
            variant="subtle"
            radius="md"
            className={styles["log-in"]}
            onClick={open}
          >
            Sign In
          </Button>
        )}
        {/*<Button*/}
        {/*  leftSection={<IconLogin2 size={18} />}*/}
        {/*  color="rgba(255, 255, 255, 1)"*/}
        {/*  variant="subtle"*/}
        {/*  radius="md"*/}
        {/*  className={styles["log-in"]}*/}
        {/*  onClick={open}*/}
        {/*>*/}
        {/*  Sign In*/}
        {/*</Button>*/}
      </Flex>

      <Portal>
        <Modal
          centered
          opened={opened}
          onClose={close}
          title={isLogin ? "Sign In" : "Sign Up"}
          className={styles["modal"]}
          styles={{
            header: { padding: "15px 15px 3px 15px", minHeight: 40 },
            content: { borderRadius: 15 },
          }}
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 4,
          }}
        >
          <p className={styles["access-text"]}>
            {isLogin ? "Access your account" : "Create a new account"}
          </p>
          <TextInput
            label="Email"
            placeholder={"example@example.com"}
            className={styles["email-input"]}
            value={userEmail}
            onChange={(event) => setUserEmail(event.currentTarget.value)}
          />
          <PasswordInput
            className={styles["password-input"]}
            label="Password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.currentTarget.value)}
          />
          {!isLogin && (
            <PasswordInput
              className={styles["password-input"]}
              label="Confirm Password"
            />
          )}
          <Button
            color={"#FF9400"}
            fullWidth
            className={styles["auth-button"]}
            onClick={() => handleSubmit()}
            disabled={isLoading}
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </Button>
          <Anchor onClick={toggleForm} className={styles["modal-link"]}>
            {isLogin
              ? "No account? Sign Up"
              : "Already have an account? Sign In"}
          </Anchor>
        </Modal>
      </Portal>
    </header>
  );
};

export default Header;
