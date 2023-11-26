import { Link } from "react-router-dom";
import "./ServiceDetails.css";

export default function AddDevelopment() {
  window.scroll(0, 0);
  return (
    <section>
      {/* details */}
      <div className="container">
        <div className="py-6 lg:py-14">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-4xl font-semibold text-neutral">
                App Development Solutions
              </h2>

              <div className="mt-4 text-neutral-content flex flex-col gap-2 text-sm md:text-base">
                <p>
                  Are Looking for the Best App Development Services? Look no
                  further than eManager. We are a leading provider of App
                  Development Solutions in Bangladesh. We aim to deliver
                  result-oriented custom mobile app development within your
                  budget.
                </p>
                <p>
                  We understand that each business has unique requirements.
                  That’s why we offer Custom App Development Services according
                  to your specific goals and objectives. Our expert team will
                  work closely to analyze your business needs, user preferences,
                  and market trends to build a fully customized app that makes
                  you unique among your competitors.
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
                src="/images/service_details/app-development/app.png"
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
            Our App Development <br /> Technologies
          </h2>

          <div className="mt-8 lg:w-2/3 mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1">
              <div className="technology_card">
                <img
                  src="/images/service_details/app-development/react.png"
                  alt=""
                />
                <h2>React Native</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/app-development/flutter.png"
                  alt=""
                />
                <h2>Fluter</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/app-development/kotlin.png"
                  alt=""
                />
                <h2>Kotlin</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/app-development/java.png"
                  alt=""
                />
                <h2>Java</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/app-development/swift.png"
                  alt=""
                />
                <h2>Swift</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
