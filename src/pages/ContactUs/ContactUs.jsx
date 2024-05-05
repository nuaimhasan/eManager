import { useEffect } from "react";
import ContactComponent from "../../components/ContactComponent/ContactComponent";

export default function ContactUs() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <ContactComponent />
    </>
  );
}
