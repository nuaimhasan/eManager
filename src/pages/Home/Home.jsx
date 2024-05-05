import "./Home.css";
import About from "../../components/HomeComponents/About/About";
import Clients from "../../components/HomeComponents/Clients/Clients";
import CounterArea from "../../components/HomeComponents/CounterArea/CounterArea";
import Hero from "../../components/HomeComponents/Hero/Hero";
import ServicesCom from "../../components/HomeComponents/ServicesCom/ServicesCom";
import WhyChooseUs from "../../components/HomeComponents/WhyChooseUs/WhyChooseUs";
// import OurTeam from "../../components/OurTeam/OurTeam";
import ContactComponent from "../../components/ContactComponent/ContactComponent";

export default function Home() {
  window.scroll(0, 0);
  return (
    <div>
      <Hero />
      <ServicesCom />
      <About />
      <WhyChooseUs />
      <ContactComponent />
      <CounterArea />
      {/* <OurTeam /> */}
      <Clients />
    </div>
  );
}
