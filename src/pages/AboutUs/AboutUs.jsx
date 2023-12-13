import AboutComponent from "../../components/AboutComponent/AboutComponent";
import Clients from "../../components/HomeComponents/Clients/Clients";
import CounterArea from "../../components/HomeComponents/CounterArea/CounterArea";

export default function AboutUs() {
  window.scroll(0, 0);

  return (
    <section className="pt-10 lg:pt-20" id="about-us">
      <AboutComponent />
      <br />
      <br />
      <br />
      <CounterArea />

      <Clients />
    </section>
  );
}
