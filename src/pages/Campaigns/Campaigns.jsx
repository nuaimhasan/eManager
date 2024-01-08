import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Campaigns() {
  return (
    <section>
      <div className="bg-secondary text-base-100">
        <div className="container">
          <div className="flex justify-center items-center min-h-[40vh]">
            <div className="text-center">
              <h2 className="text-4xl font-semibold my-3">Our Campaigns</h2>
              <p>We are providing the best service in the market.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 lg:px-5">
        <div className="container">
          <div className="flex flex-col gap-16">
            <div>
              <h2 className="text-3xl font-medium text-secondary">
                Web Development Campaigns
              </h2>
              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
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
                    <Link to="/campaigns/1" className="gradient-primary-btn">
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
                    <Link to="/campaigns/1" className="gradient-primary-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-medium text-secondary">
                APP Development Campaigns
              </h2>
              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
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
                    <Link to="/campaigns/1" className="gradient-primary-btn">
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
                    <Link to="/campaigns/1" className="gradient-primary-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-medium text-secondary">
                Digital marketing Campaigns
              </h2>
              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
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
                    <Link to="/campaigns/1" className="gradient-primary-btn">
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
                    <Link to="/campaigns/1" className="gradient-primary-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container">
          <div>
            <h2 className="text-2xl font-semibold text-secondary">
              Digital Marketing Campaigns
            </h2>
          </div>

          <div className="mx-10 my-6 grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
            <div className="border rounded py-10 px-4 bg-base-100 shadow">
              <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="px-6 py-1.5 rounded bg-primary text-secondary uppercase">
                  UDDOKTA PACKAGE
                </h2>

                <h2 className="text-2xl text-secondary">Only 17500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Domain Registration
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Free Hosting
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Laravel e-commerch
                  website
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Business Facebook
                  Page Setup
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Google map setup
                </li>
              </ul>

              <div className="mt-10 flex justify-center">
                <Link to="/campaigns/1" className="gradient-primary-btn">
                  Book Now
                </Link>
              </div>
            </div>

            <div className="border rounded py-10 px-4 bg-base-100 shadow">
              <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="px-6 py-1.5 rounded bg-primary text-secondary uppercase">
                  UDDOKTA PACKAGE
                </h2>

                <h2 className="text-2xl text-secondary">Only 17500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Domain Registration
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Free Hosting
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Laravel e-commerch
                  website
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Business Facebook
                  Page Setup
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Google map setup
                </li>
              </ul>

              <div className="mt-10 flex justify-center">
                <Link to="/campaigns/1" className="gradient-primary-btn">
                  Book Now
                </Link>
              </div>
            </div>

            <div className="border rounded py-10 px-4 bg-base-100 shadow">
              <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="px-6 py-1.5 rounded bg-primary text-secondary uppercase">
                  UDDOKTA PACKAGE
                </h2>

                <h2 className="text-2xl text-secondary">Only 17500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Domain Registration
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Free Hosting
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Laravel e-commerch
                  website
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Business Facebook
                  Page Setup
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Google map setup
                </li>
              </ul>

              <div className="mt-10 flex justify-center">
                <Link to="/campaigns/1" className="gradient-primary-btn">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
