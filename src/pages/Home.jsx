import Hero from "../components/Hero";
import CountDown from "../components/CountDown";
import About from "../components/About";
import Schedule from "../components/Schedule";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Hero>
      <CountDown />
      <About />
      <Schedule />
      <div className="solid-content-bg">
        <Sponsors />
        <Footer showOtherSites />
      </div>
    </Hero>
  );
};

export default Home;