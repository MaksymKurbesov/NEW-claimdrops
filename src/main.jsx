import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { routes } from "./routes.jsx";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import AuthService from "./services/AuthService.js";
import { UserProvider } from "./context/UserContext.jsx";
import UserService from "./services/UserService.js";
import { SignInModalProvider } from "./context/SignInModalContext.jsx";
import { TourProvider } from "@reactour/tour";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDsPkfeWIwnG42xreJQ78cGi0RQ8OS4uew",
  authDomain: "airdrops-4fb75.firebaseapp.com",
  projectId: "airdrops-4fb75",
  storageBucket: "airdrops-4fb75.firebasestorage.app",
  messagingSenderId: "17411012414",
  appId: "1:17411012414:web:de8dbbd3c39c33b6b0de6f",
});

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export const authService = new AuthService();
export const userService = new UserService();

const steps = [
  {
    selector: "#connect-wallet",
    content: (
      <div id={"step1"}>
        <p>Connect your wallet to:</p>
        <ul>
          <li>• Receive new exclusive airdrops.</li>
          <li>• Stay updated on all special offers.</li>
          <li>• Collect rewards directly to your wallet.</li>
        </ul>
      </div>
    ),
  },
  {
    selector: "#eligible-airdrops",
    content: (
      <div id={"step2"}>
        <p>
          This is where your future airdrops will appear! After connecting your
          wallet, check back here for new rewards.
        </p>
      </div>
    ),
  },
  {
    selector: "#your-addresses",
    content: (
      <div id={"step3"}>
        <p>
          Here, you'll see a list of wallets you’ve added. Connect additional
          wallets to manage your rewards across multiple accounts.
        </p>
      </div>
    ),
  },
  // ...
];

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <MantineProvider>
    <TourProvider steps={steps} disableFocusLock={false}>
      <UserProvider>
        <SignInModalProvider>
          <RouterProvider router={routes} />
        </SignInModalProvider>
      </UserProvider>
    </TourProvider>
  </MantineProvider>,
  // </StrictMode>,
);
