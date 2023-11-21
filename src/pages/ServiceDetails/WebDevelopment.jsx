import { Link } from "react-router-dom";
import "./ServiceDetails.css";
import { GiCheckMark } from "react-icons/gi";

export default function WebDevelopment() {
  window.scroll(0, 0);
  return (
    <section>
      {/* details */}
      <div className="container">
        <div className="py-6 lg:py-14">
          <div className="grid lg:grid-cols-5 gap-6 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-4xl font-semibold text-neutral">
                Web Development Solutions
              </h2>

              <div className="mt-4 text-neutral-content flex flex-col gap-2 text-sm md:text-base">
                <p>
                  eManager, Your Trusted Partner for Professional Web
                  Development Services. We are dedicated to creating stunning
                  websites that effectively represent your brand and help you
                  achieve your online goals. Whether you need a simple website
                  or a complex web application, our team of skilled developers
                  is here to bring your vision to life
                </p>
                <p>
                  We ensure that your website is developed to meet your specific
                  requirements. To ensure the utmost security of your website,
                  we utilize top-notch technologies such as HTML5, CSS,
                  Javascript, React JS, Vue JS, Php/Laravel, MySQL, Node JS,
                  etc.
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
                src="/images/service_details/web-development/web.png"
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
            Our Web Development <br /> Technologies
          </h2>

          <div className="mt-8 lg:w-2/3 mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1">
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/html.png"
                  alt=""
                />
                <h2>HTML</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/css.png"
                  alt=""
                />
                <h2>CSS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/js.png"
                  alt=""
                />
                <h2>JavaScript</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/tailwind.webp"
                  alt=""
                />
                <h2>Tailwind CSS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/bootstrap.png"
                  alt=""
                />
                <h2>Bootstrap</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/react.png"
                  alt=""
                />
                <h2>React JS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/nextjs.png"
                  alt=""
                />
                <h2>Next JS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/redux.png"
                  alt=""
                />
                <h2>Redux</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/vue.png"
                  alt=""
                />
                <h2>Vue JS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/php.svg"
                  alt=""
                />
                <h2>PHP</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/laravel.webp"
                  alt=""
                />
                <h2>Laravel</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/node.png"
                  alt=""
                />
                <h2>Node JS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/express.png"
                  alt=""
                />
                <h2>Express JS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/mongodb.svg"
                  alt=""
                />
                <h2>MongoDB</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/mysql.png"
                  alt=""
                />
                <h2>MySql</h2>
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
