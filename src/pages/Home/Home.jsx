import About from "../../components/HomeComponents/About/About";
import Clients from "../../components/HomeComponents/Clients/Clients";
import ContactUs from "../../components/HomeComponents/ContactUs/ContactUs";
import Hero from "../../components/HomeComponents/Hero/Hero";
import Services from "../../components/HomeComponents/Services/Services";
import WhyChooseUs from "../../components/HomeComponents/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <ContactUs />
      <Clients />
    </div>
  );
}
