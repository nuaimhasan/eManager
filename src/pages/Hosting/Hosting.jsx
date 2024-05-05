import { useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";

export default function Hosting() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-medium text-primary">
            Our Hosting Services
          </h2>
          <p className="text-primary md:w-1/2 mx-auto text-[15px]">
            This service is only available to our clients
          </p>
        </div>

        <div className="py-10 lg:px-5 mt-8">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
              <div className="price_card">
                <div className="bg-gray-100 head text-primary">
                  <h2 className="text-lg font-semibold">BASIC</h2>
                  <h2 className="text-3xl ">17500 Tk</h2>
                </div>
                <ul className="mt-8 pl-10">
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Free Domain &
                    Hosing
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> E-Commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Blog
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Education
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> News Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Business
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Protfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Support 1 year
                  </li>
                </ul>
              </div>
              <div className="price_card">
                <div className="bg-primary head text-base-100">
                  <h2 className="text-lg font-semibold">STARTUP</h2>
                  <h2 className="text-3xl">30500 Tk</h2>
                </div>

                <ul className="mt-8 pl-10">
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Free Domain &
                    Hosing
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> E-Commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Blog
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Education
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> News Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Business
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Protfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Admin Panel
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Support 1 year
                  </li>
                </ul>
              </div>
              <div className="price_card">
                <div className="bg-gray-100 head text-primary">
                  <h2 className="text-lg font-semibold">STANDARD</h2>
                  <h2 className="text-3xl ">50500 Tk</h2>
                </div>

                <ul className="mt-8 pl-10">
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Free Domain &
                    Hosing
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> E-Commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Blog
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Education
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> News Portal
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Business
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Protfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Admin Panel
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> SEO Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCheckMark className="text-primary" /> Support 1 year
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
