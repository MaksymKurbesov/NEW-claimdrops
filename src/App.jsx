import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./sharedUI/Header/Header.jsx";
import Footer from "./sharedUI/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
