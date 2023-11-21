import { Link } from "react-router-dom";
import "./ServiceDetails.css";
import { GiCheckMark } from "react-icons/gi";

export default function GraphicsDesign() {
  window.scroll(0, 0);
  return (
    <section>
      {/* details */}
      <div className="container">
        <div className="py-6 lg:py-14">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-4xl font-semibold text-neutral">
                Graphics Design Solutions
              </h2>

              <div className="mt-4 text-neutral-content flex flex-col gap-2 text-sm md:text-base">
                <p>
                  Unleash the visual appeal of your brand through stunning
                  graphics and captivating designs that leave a lasting
                  impression with eManager expert graphic design services.
                </p>
                <p>
                  eeking a reliable and affordable graphic design agency in
                  Bangladesh? Look no further! Getup Limited provides
                  cost-effective design solutions without compromising on
                  quality. Our team combines creativity and technical expertise
                  to deliver stunning graphics that align with your brand’s
                  vision.
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
                src="/images/service_details/graphics-design/Graphic-Design.jpg"
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
            Our Graphics Design <br /> Technologies
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

      {/* Pricing */}
      <section className="py-10 bg-gray-50">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl">Our Pricing Plan</h2>
          <div className="mt-10">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
              <div className="price_card">
                <div className="bg-gray-100 head text-secondary">
                  <h2 className="text-lg font-semibold">BASIC</h2>
                  <h2 className="text-3xl ">17500 Tk</h2>
                </div>
                <ul className="mt-8 pl-10">
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Free Domain &
                    Hosing
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> E-Commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Blog
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Education
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> News Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Business
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Protfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Support 1 year
                  </li>
                </ul>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                  <Link to="/contact" className="gradient-primary-btn">
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="price_card">
                <div className="bg-secondary head text-base-100">
                  <h2 className="text-lg font-semibold">STARTUP</h2>
                  <h2 className="text-3xl">30500 Tk</h2>
                </div>

                <ul className="mt-8 pl-10">
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Free Domain &
                    Hosing
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> E-Commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Blog
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Education
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> News Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Business
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Protfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Admin Panel
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Support 1 year
                  </li>
                </ul>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                  <Link to="/contact" className="gradient-primary-btn">
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="price_card">
                <div className="bg-gray-100 head text-secondary">
                  <h2 className="text-lg font-semibold">STANDARD</h2>
                  <h2 className="text-3xl ">50500 Tk</h2>
                </div>

                <ul className="mt-8 pl-10">
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Free Domain &
                    Hosing
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> E-Commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Blog
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Education
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> News Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Business
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Protfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Admin Panel
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> SEO Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Support 1 year
                  </li>
                </ul>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                  <Link to="/contact" className="gradient-primary-btn">
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="price_card">
                <div className="bg-secondary head text-base-100">
                  <h2 className="text-lg font-semibold">PREMIUM</h2>
                  <h2 className="text-3xl">80500 Tk</h2>
                </div>

                <ul className="mt-8 pl-10">
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Free Domain &
                    Hosing
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> E-Commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Blog
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Education
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> News Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Business
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Protfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Admin Panel
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> SEO Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Super Fast
                    Website
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-secondary" /> Support 1 year
                  </li>
                </ul>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                  <Link to="/contact" className="gradient-primary-btn">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
