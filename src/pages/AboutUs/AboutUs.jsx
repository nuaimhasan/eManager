import AboutComponent from "../../components/AboutComponent/AboutComponent";
import CounterArea from "../../components/HomeComponents/CounterArea/CounterArea";

export default function AboutUs() {
  window.scroll(0, 0);

  return (
    <section className="pt-10">
      <AboutComponent />

      <br />
      <br />
      <CounterArea />
    </section>
  );
}
