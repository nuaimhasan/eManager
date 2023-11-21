import "./Home.css";
import About from "../../components/HomeComponents/About/About";
import Blogs from "../../components/HomeComponents/Blogs/Blogs";
import Clients from "../../components/HomeComponents/Clients/Clients";
import ContactUs from "../../components/HomeComponents/ContactUs/ContactUs";
import CounterArea from "../../components/HomeComponents/CounterArea/CounterArea";
import Hero from "../../components/HomeComponents/Hero/Hero";
import Services from "../../components/HomeComponents/Services/Services";
import WhyChooseUs from "../../components/HomeComponents/WhyChooseUs/WhyChooseUs";

export default function Home() {
  window.scroll(0, 0);
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Blogs />
      <ContactUs />
      <CounterArea />
      <Clients />
    </div>
  );
}
