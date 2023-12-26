import parse from "html-react-parser";
import { GiCheckMark } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import { useGetServiceBySlugQuery } from "../../redux/api/serviceApi";
import "./ServiceDetails.css";
import Spinner from "../../components/Spinner/Spinner";

export default function ServiceDetails() {
  window.scroll(0, 0);

  const { slug } = useParams();

  const { data, isLoading } = useGetServiceBySlugQuery(slug);
  if (isLoading) {
    return <Spinner />;
  }
  const service = data?.data;
  const details = service?.description && parse(service?.description);

  return (
    <section>
      {/* details */}
      <div className="container">
        <div className="py-6 lg:py-14">
          <div className="grid lg:grid-cols-5 gap-6 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-4xl font-semibold text-secondary">
                {service?.title}
              </h2>

              <div className="mt-4 text-neutral-content flex flex-col gap-2 text-sm md:text-base">
                <p>{details}</p>
              </div>

              <div className="mt-6">
                <Link to="/contact-us" className="gradient-primary-btn">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 ">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/services/${
                  service?.image
                }`}
                alt=""
                className="w-full sm:w-1/2 lg:w-full mx-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service categories */}
      <div className="pt-10 pb-10 lg:pb-20">
        <div className="container">
          <h2 className="text-secondary text-3xl font-semibold">Our Service Categories</h2>

          <div className="mt-10">
            <div className="grid grid-cols-2 gap-14">
              <div>
                <img src="/public/images/services/web.png" alt="" className="w-14" />
                <h2 className="text-xl font-medium text-secondary py-2">E-commerce Website</h2>
                <p className="text-neutral-content text-[15px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quae fugiat omnis at nobis quo deleniti ipsa rerum in repudiandae!</p>
              </div>

              <div>
                <img src="/public/images/services/web.png" alt="" className="w-14" />
                <h2 className="text-xl font-medium text-secondary py-2">Business Website</h2>
                <p className="text-neutral-content text-[15px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quae fugiat omnis at nobis quo deleniti ipsa rerum in repudiandae!</p>
              </div>

              <div>
                <img src="/public/images/services/web.png" alt="" className="w-14" />
                <h2 className="text-xl font-medium text-secondary py-2">Portfolio Website</h2>
                <p className="text-neutral-content text-[15px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quae fugiat omnis at nobis quo deleniti ipsa rerum in repudiandae!</p>
              </div>

              <div>
                <img src="/public/images/services/web.png" alt="" className="w-14" />
                <h2 className="text-xl font-medium text-secondary py-2">School Management Website</h2>
                <p className="text-neutral-content text-[15px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quae fugiat omnis at nobis quo deleniti ipsa rerum in repudiandae!</p>
              </div>

              <div>
                <img src="/public/images/services/web.png" alt="" className="w-14" />
                <h2 className="text-xl font-medium text-secondary py-2">Stock Management Website</h2>
                <p className="text-neutral-content text-[15px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quae fugiat omnis at nobis quo deleniti ipsa rerum in repudiandae!</p>
              </div>

              <div>
                <img src="/public/images/services/web.png" alt="" className="w-14" />
                <h2 className="text-xl font-medium text-secondary py-2">POS Website</h2>
                <p className="text-neutral-content text-[15px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quae fugiat omnis at nobis quo deleniti ipsa rerum in repudiandae!</p>
              </div>
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
          <h2 className="text-center text-2xl md:text-3xl text-secondary">Our Pricing Plan</h2>
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
