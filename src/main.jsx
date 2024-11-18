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

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <MantineProvider>
    <UserProvider>
      <SignInModalProvider>
        <RouterProvider router={routes} />
      </SignInModalProvider>
    </UserProvider>
  </MantineProvider>,
  // </StrictMode>,
);
