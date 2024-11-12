import styles from "./Index.module.css";
import Header from "../../sharedUI/Header/Header";
import Hero from "./components/Hero/Hero.jsx";
import Statistic from "./components/Statistic/Statistic.jsx";
import WeMadeItSimple from "./components/WeMadeItSimple/WeMadeItSimple.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Pricing from "./components/Pricing/Pricing.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import ExpiringBanner from "./components/ExpiringBanner/ExpiringBanner.jsx";
import Footer from "../../sharedUI/Footer/Footer.jsx";

const Index = () => {
  return (
    <div className={`${styles["index"]}`}>
      <Header />
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
        <ExpiringBanner />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
