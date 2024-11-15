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
import { UserProvider } from "./UserContext.jsx";

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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <UserProvider>
        <RouterProvider router={routes} />
      </UserProvider>
    </MantineProvider>
  </StrictMode>,
);
