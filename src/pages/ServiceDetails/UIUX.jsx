import { Link } from "react-router-dom";
import "./ServiceDetails.css";

export default function UIUX() {
  window.scroll(0, 0);
  return (
    <section>
      {/* details */}
      <div className="container">
        <div className="py-6 lg:py-14">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-4xl font-semibold text-neutral">
                UI/UX Design Solutions
              </h2>

              <div className="mt-4 text-neutral-content flex flex-col gap-2 text-sm md:text-base">
                <p>
                  Our team of qualified UI/UX designers can answer your needs.
                  It offers an extensive selection of services, such as
                  designing UI/UX for Apps.
                </p>
              </div>

              <div className="mt-6">
                <Link to="/contact-us" className="gradient-primary-btn">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 ">
              <img
                src="/images/service_details/uiux-design/uiux.png"
                alt=""
                className="w-full sm:w-1/2 lg:w-full mx-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <section className="py-10 bg-secondary text-base-100">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl">
            Our UI/UX Design <br /> Technologies
          </h2>

          <div className="mt-8 lg:w-2/3 mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
              <div className="technology_card">
                <img src="/images/service_details/uiux-design/ps.png" alt="" />
                <h2>Adobe Photoshop</h2>
              </div>
              <div className="technology_card">
                <img src="/images/service_details/uiux-design/ai.png" alt="" />
                <h2>Adobe Illustrator</h2>
              </div>
              <div className="technology_card">
                <img src="/images/service_details/uiux-design/xd.png" alt="" />
                <h2>Adobe XD</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/uiux-design/figma.png"
                  alt=""
                />
                <h2>Figma</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
