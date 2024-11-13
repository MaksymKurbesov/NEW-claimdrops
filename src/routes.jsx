import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index/Index.jsx";
import App from "./App.jsx";
import Airdrops from "./pages/Airdrops/Airdrops.jsx";
import Earn from "./pages/Earn/Earn.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/airdrops", element: <Airdrops /> },
      { path: "/earn", element: <Earn /> },
    ],
  },
]);
