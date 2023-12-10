import { Link } from "react-router-dom";
import "./Services.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useGetServiceSectionsQuery } from "../../../redux/api/serviceSectionApi";
import { useGetAllServicesQuery } from "../../../redux/api/serviceApi";

export default function Services() {

  const {data, isLoading} = useGetServiceSectionsQuery();
  const {data: serviceData, isLoading: serviceDataLoading} = useGetAllServicesQuery();

  if (isLoading || serviceDataLoading) {
    return <div>Loading...</div>;
  }

  const serviceSection = data?.data[0];
  const services = serviceData?.data;

  return (
    <section className="py-10 lg:py-20 bg-base-100" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-medium text-neutral">
            {serviceSection?.title}
          </h2>
          <p className="text-neutral-content">{serviceSection?.description}</p>
        </div>

        <div className="mt-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services?.map((service) => (
              <Link
                to={`/service/${service.slug}`}
                key={service.id}
                className="service_card"
              >
                <img
                  src={`http://localhost:5000/service/icon/${service?.icon}`}
                  alt=""
                />
                <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                  {service.title}
                </h2>
                <p className="text-neutral-content text-[15px]">
                  {service.description.slice(0, 80)}...
                </p>

                <button>
                  Read More <FaLongArrowAltRight />
                </button>
              </Link>
            ))}

            <Link to="/service/ui-ux-design" className="service_card">
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

            <Link to="/service/embedded-system" className="service_card">
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

            <Link to="/service/digital-marketing" className="service_card">
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

            <Link to="/service/seo" className="service_card">
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

            <Link to="/service/graphics-design" className="service_card">
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

            <Link to="/service/videography" className="service_card">
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

            <Link to="/service/content-research" className="service_card">
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

            <Link to="/service/eCom-automation" className="service_card">
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

            <Link to="/service/training-programn" className="service_card">
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

            <Link to="/service/domain-hosting" className="service_card">
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
