import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { useGetServiceBySlugQuery } from "../../redux/api/serviceApi";
import "./ServiceDetails.css";
import Spinner from "../../components/Spinner/Spinner";
import { GiCheckMark } from "react-icons/gi";

export default function ServiceDetails() {
  window.scroll(0, 0);

  const { slug } = useParams();

  console.log(slug);

  const { data, isLoading } = useGetServiceBySlugQuery(slug);
  if (isLoading) {
    return <Spinner />;
  }
  const service = data?.data;
  const details = service?.description && parse(service?.description);

  return (
    <section>
      {/* details */}
      <div className="bg-secondary text-base-100 py-5">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-6 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-4xl font-semibold">
                {service?.title}
              </h2>

              <div className="mt-4 flex flex-col gap-2 text-sm md:text-base">
                <p>{details}</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/services/${
                  service?.image
                }`}
                alt=""
                className="w-full sm:w-1/2 lg:w-3/5 mx-auto h-60"
              />
            </div>
          </div>
        </div>
      </div>

      {slug == "web-development" && (
        <>
          {/* Technologies */}
          <section className="py-10 bg-gray-50">
            <div className="container">
              <h2 className="text-center text-secondary text-2xl md:text-3xl">
                Our Web Development Technologies
              </h2>

              <div className="mt-8 lg:w-2/3 mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1">
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/html.png" alt="" />
                    <h2>HTML</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/css.png" alt="" />
                    <h2>CSS</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/js.png" alt="" />
                    <h2>JavaScript</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/tailwind.webp" alt="" />
                    <h2>Tailwind CSS</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/bootstrap.png" alt="" />
                    <h2>Bootstrap</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/react.png" alt="" />
                    <h2>React JS</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/nextjs.png" alt="" />
                    <h2>Next JS</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/redux.png" alt="" />
                    <h2>Redux</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/vue.png" alt="" />
                    <h2>Vue JS</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/php.svg" alt="" />
                    <h2>PHP</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/laravel.webp" alt="" />
                    <h2>Laravel</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/node.png" alt="" />
                    <h2>Node JS</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/express.png" alt="" />
                    <h2>Express JS</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/mongodb.svg" alt="" />
                    <h2>MongoDB</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/mysql.png" alt="" />
                    <h2>MySql</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service categories */}
          <div className="pt-10 pb-10 lg:pb-20">
            <div className="container">
              <h2 className="text-secondary text-3xl font-semibold">
                Our Web Categories
              </h2>

              <div className="mt-10">
                <div className="grid grid-cols-4 gap-10">
                  <div>
                    <img
                      src="/images/services/web.png"
                      alt=""
                      className="w-10"
                    />
                    <h2 className="text-xl font-medium text-neutral py-2">
                      E-commerce Website
                    </h2>
                  </div>

                  <div>
                    <img
                      src="/images/services/web.png"
                      alt=""
                      className="w-10"
                    />
                    <h2 className="text-xl font-medium text-neutral py-2">
                      Business Website
                    </h2>
                  </div>

                  <div>
                    <img
                      src="/images/services/web.png"
                      alt=""
                      className="w-10"
                    />
                    <h2 className="text-xl font-medium text-neutral py-2">
                      Portfolio Website
                    </h2>
                  </div>

                  <div>
                    <img
                      src="/images/services/web.png"
                      alt=""
                      className="w-10"
                    />
                    <h2 className="text-xl font-medium text-neutral py-2">
                      School Management Website
                    </h2>
                  </div>

                  <div>
                    <img
                      src="/images/services/web.png"
                      alt=""
                      className="w-10"
                    />
                    <h2 className="text-xl font-medium text-neutral py-2">
                      Stock Management Website
                    </h2>
                  </div>

                  <div>
                    <img
                      src="/images/services/web.png"
                      alt=""
                      className="w-10"
                    />
                    <h2 className="text-xl font-medium text-neutral py-2">
                      News Website
                    </h2>
                  </div>

                  <div>
                    <img
                      src="/images/services/web.png"
                      alt=""
                      className="w-10"
                    />
                    <h2 className="text-xl font-medium text-neutral py-2">
                      Courier Website
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {slug == "app-development" && (
        <>
          {/* Technologies */}
          <section className="py-10 bg-gray-50">
            <div className="container">
              <h2 className="text-center text-secondary text-2xl md:text-3xl">
                Our App Development Technologies
              </h2>

              <div className="mt-8 lg:w-2/3 mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1">
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/flutter.png" alt="" />
                    <h2>Flutter</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/react.png" alt="" />
                    <h2>React Native</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/python.png" alt="" />
                    <h2>Python</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/swift.png" alt="" />
                    <h2>Swift</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/c++.png" alt="" />
                    <h2>C++</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {slug == "ui-ux-design" && (
        <>
          {/* Technologies */}
          <section className="py-10 bg-gray-50">
            <div className="container">
              <h2 className="text-center text-secondary text-2xl md:text-3xl">
                Our UI/UX Design Technologies
              </h2>

              <div className="mt-8 lg:w-2/3 mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1 text-center">
                  <div className="technology_card bg-secondary/20 ">
                    <img src="/images/language/ps.png" alt="" />
                    <h2>Adobe Photoshop</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/ai.png" alt="" />
                    <h2>Adobe Illustrator</h2>
                  </div>
                  <div className="technology_card bg-secondary/20">
                    <img src="/images/language/figma.png" alt="" />
                    <h2>Figma</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {slug == "digital-marketing" && (
        <>
          {/* Service categories */}
          <div className="pt-10 pb-10 lg:pb-20">
            <div className="container">
              <h2 className="text-secondary text-3xl font-semibold">
                Our Digital Marketing Categories
              </h2>

              <div className="mt-10">
                <div className="grid grid-cols-4 gap-10">
                  <div>
                    <img
                      src="/images/services/digital-marketing.png"
                      alt=""
                      className="w-10"
                    />
                    <h2 className="text-xl font-medium text-neutral py-2">
                      Facebook Marketing
                    </h2>
                  </div>

                  <div>
                    <img
                      src="/images/services/digital-marketing.png"
                      alt=""
                      className="w-10"
                    />
                    <h2 className="text-xl font-medium text-neutral py-2">
                      Youtube Marketing
                    </h2>
                  </div>

                  <div>
                    <img
                      src="/images/services/digital-marketing.png"
                      alt=""
                      className="w-10"
                    />
                    <h2 className="text-xl font-medium text-neutral py-2">
                      Linkedin Marketing
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {slug == "domain-and-hosting" && (
        <>
          <section className="py-10">
            <div className="container">
              <div className="text-center">
                <p className="text-secondary md:w-1/2 mx-auto text-[15px]">
                  This service is only available to our clients
                </p>
              </div>

              <div className="py-10 lg:px-5">
                <div className="container">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
                    <div className="price_card">
                      <div className="bg-gray-100 head text-secondary">
                        <h2 className="text-lg font-semibold">Starter</h2>
                        <h2 className="text-3xl ">
                          2999tk<span className="text-base">/yearly</span>
                        </h2>
                      </div>
                      <ul className="mt-8 pl-10">
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> No Renew
                          Price Hike
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 5 GB NVMe
                          SSD Storage
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 200 GB
                          Bandwidth
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 4 Websites
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 1 GB Ram
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 1 Core CPU
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 10 Mbps I/O
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          Subdomains year
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          Email Accounts
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          FTP
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          MySQL Databases
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> MongoDB
                          Support
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Node.js
                          Support
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Python
                          Support
                        </li>
                      </ul>
                    </div>

                    <div className="price_card">
                      <div className="bg-secondary head text-base-100">
                        <h2 className="text-lg font-semibold">Business</h2>
                        <h2 className="text-3xl ">
                          3999tk<span className="text-base">/yearly</span>
                        </h2>
                      </div>
                      <ul className="mt-8 pl-10">
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> No Renew
                          Price Hike
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 10 GB NVMe
                          SSD Storage
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 500 GB
                          Bandwidth
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 6 Websites
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 1 GB Ram
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 1 Core CPU
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 10 Mbps I/O
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          Subdomains year
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          Email Accounts
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          FTP
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          MySQL Databases
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> MongoDB
                          Support
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Node.js
                          Support
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Python
                          Support
                        </li>
                      </ul>
                    </div>

                    <div className="price_card">
                      <div className="bg-gray-100 head text-secondary">
                        <h2 className="text-lg font-semibold">Econo</h2>
                        <h2 className="text-3xl ">
                          4999tk<span className="text-base">/yearly</span>
                        </h2>
                      </div>
                      <ul className="mt-8 pl-10">
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> No Renew
                          Price Hike
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 20 GB NVMe
                          SSD Storage
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 1200 GB
                          Bandwidth
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 12 Websites
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 2 GB Ram
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 1.5 Core
                          CPU
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> 20 Mbps I/O
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          Subdomains year
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          Email Accounts
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          FTP
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Unlimited
                          MySQL Databases
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> MongoDB
                          Support
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Node.js
                          Support
                        </li>
                        <li className="flex items-center gap-2">
                          <GiCheckMark className="text-secondary" /> Python
                          Support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </section>
  );
}
