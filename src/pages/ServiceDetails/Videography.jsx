import { Link } from "react-router-dom";
import "./ServiceDetails.css";

export default function Videography() {
  window.scroll(0, 0);
  return (
    <section>
      {/* details */}
      <div className="container">
        <div className="py-6 lg:py-14">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-4xl font-semibold text-neutral">
                Videography Solutions
              </h2>

              <div className="mt-4 text-neutral-content flex flex-col gap-2 text-sm md:text-base">
                <p>
                  Welcome to a realm of boundless creativity where every frame
                  tells a story beyond words. As the Best Video Production
                  Company in Bangladesh, we are more than just storytellers. We
                  are experts in our craft, architects of emotions, and creators
                  of your brand’s identity.
                </p>
                <p>
                  We are experts in our craft, architects of emotions, and
                  creators of your brand’s identity Whether you need corporate
                  videos, promotional content, or event coverage, we have the
                  creativity and expertise to deliver outstanding videos. Trust
                  our company for the best video production services that exceed
                  your expectations.
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
                src="/images/service_details/videography/videography.jpg"
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
