import styles from "./Index.module.css";
import Header from "../../sharedUI/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Statistic from "./components/Statistic/Statistic.jsx";
import WeMadeItSimple from "./components/WeMadeItSimple/WeMadeItSimple.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import ExpiringBanner from "../../sharedUI/ExpiringBanner/ExpiringBanner.jsx";
import Footer from "../../sharedUI/Footer/Footer.jsx";
import { ScrollRestoration } from "react-router-dom";

const Index = () => {
  return (
    <div className={`${styles["index"]}`}>
      {/*<Header />*/}
      <Hero />
      <div className={"container"}>
        <Statistic />
        <WeMadeItSimple />
      </div>
      <Banner />
      <div className={"container"}>
        <Testimonials />
      </div>
      <Pricing />
      <div className={"container"}>
        <FAQ />
        <div className={styles["expiring-banner"]}>
          <ExpiringBanner />
        </div>
      </div>
      {/*<Footer />*/}
      <ScrollRestoration />
    </div>
  );
};

export default Index;