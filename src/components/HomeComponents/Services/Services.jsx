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
                to={`/service/${service?.slug}`}
                key={service?.id}
                className="service_card"
              >
                <img
                  src={`http://localhost:5000/service/icon/${service?.icon}`}
                  alt=""
                />
                <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
                  {service?.title}
                </h2>
                <p className="text-neutral-content text-[15px]">
                  {service?.description.slice(0, 80)}...
                </p>

                <button>
                  Read More <FaLongArrowAltRight />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
