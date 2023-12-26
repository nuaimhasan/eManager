import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Hosting() {
  return (
    <section>
        <div className="bg-secondary text-base-100">
            <div className="container">
                <div className="flex justify-center items-center min-h-[60vh]">
                    <div className="text-center">
                        <h3 className="text-primary">* This service is only applicable to our clients *</h3>
                        <h2 className="text-4xl font-semibold my-3">Lightning Fast Web Hosting On Your Budget</h2>
                        <p className="lg:w-2/3 mx-auto">Experience lightning-fast web hosting without breaking the bank. Our budget-friendly hosting solutions offer unmatched speed and reliability, ensuring your website loads in the blink of an eye. Say goodbye to slow loading times and hello to a seamless online experience.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-20">
            <div className="container">
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
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
                      <GiCheckMark className="text-secondary" /> SEO
                      Optimization
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
    </section>
  )
}
