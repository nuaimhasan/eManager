import { Link } from "react-router-dom";
import "./ServiceDetails.css";

export default function ContentResearch() {
  window.scroll(0, 0);
  return (
    <section>
      {/* details */}
      <div className="container">
        <div className="py-6 lg:py-14">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-4xl font-semibold text-neutral">
                Content Research Solutions
              </h2>

              <div className="mt-4 text-neutral-content flex flex-col gap-2 text-sm md:text-base">
                <p>
                  eManager is acknowledged as the Best IT & Marketing
                  Consultancy Firm in Bangladesh.
                </p>
                <p>
                  We help companies of all sizes in market research, customer
                  analysis, proper planning, market data analysis as well as
                  360-degree IT and Marketing Strategy to Grow Business Online.
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
                src="/images/service_details/content-research/content.png"
                alt=""
                className="w-full sm:w-1/2 lg:w-full mx-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
