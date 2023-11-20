import { Link } from "react-router-dom";
import "./Services.css";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center">
          <h2 className="text-4xl font-medium text-neutral">Our Services</h2>
          <p className="text-neutral-content">
            IT Solutions & Business Services for your Success
          </p>
        </div>

        <div className="mt-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link to="" className="service_card">
              <img src="/images/services/web.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                Web Development
              </h2>
              <p className="text-neutral-content text-[15px]">
                Experience the power of a professionally designed and fully
                functio...
              </p>

              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>

            <Link to="" className="service_card">
              <img src="/images/services/app.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                App Development
              </h2>
              <p className="text-neutral-content text-[15px]">
                We provide excellent App development services to launch your
                projec...
              </p>

              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>

            <Link to="" className="service_card">
              <img src="/images/services/ui-ux.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                UI/UX Design
              </h2>
              <p className="text-neutral-content text-[15px]">
                Our team of qualified UI/UX designers can answer your needs. It
                off...
              </p>
              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>

            <Link to="" className="service_card">
              <img src="/images/services/embedded.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                Embedded System
              </h2>
              <p className="text-neutral-content text-[15px]">
                Our multi-disciplinary system & software engineering team
                offer...
              </p>

              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>

            <Link to="" className="service_card">
              <img src="/images/services/digital-marketing.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                Digital Marketing
              </h2>
              <p className="text-neutral-content text-[15px]">
                Maximize your online presence, engage your audience, and driv...
              </p>

              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>

            <Link to="" className="service_card">
              <img src="/images/services/seo.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                SEO
              </h2>
              <p className="text-neutral-content text-[15px]">
                Boost your brand&apos;s visibility, engage your target
                audienc...
              </p>

              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>

            <Link to="" className="service_card">
              <img src="/images/services/graphics.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                Graphics Design
              </h2>
              <p className="text-neutral-content text-[15px]">
                Unleash the visual appeal of your brand through stunning ...
              </p>

              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>

            <Link to="" className="service_card">
              <img src="/images/services/video.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                Videography Solution
              </h2>
              <p className="text-neutral-content text-[15px]">
                Transform your brand&apos;s story into visually stunning
                narratives...
              </p>

              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>

            <Link to="" className="service_card">
              <img src="/images/services/content-esearch.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                Content & Research
              </h2>
              <p className="text-neutral-content text-[15px]">
                Research is the foundation of each project & content is
                anythin...
              </p>

              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>

            <Link to="" className="service_card">
              <img src="/images/services/eCom.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                eCom Automation
              </h2>
              <p className="text-neutral-content text-[15px]">
                Grow your Business Online with e Commerce Services. We enable
                Start...
              </p>

              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>

            <Link to="" className="service_card">
              <img src="/images/services/training.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                Training Program
              </h2>
              <p className="text-neutral-content text-[15px]">
                Unlock your potential and stay ahead in the digital era with
                eManag...
              </p>

              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>

            <Link to="" className="service_card">
              <img src="/images/services/domain-hosting.png" alt="" />
              <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                Domain & Hosting
              </h2>
              <p className="text-neutral-content text-[15px]">
                Research is the foundation of each project & content is
                anythin...
              </p>

              <button>
                Read More <FaLongArrowAltRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
