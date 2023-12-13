import "./Services.css";
import { useGetServiceSectionsQuery } from "../../../redux/api/serviceSectionApi";
import { useGetAllServicesQuery } from "../../../redux/api/serviceApi";
import ServiceCard from "../../ServiceCard/ServiceCard";

export default function Services() {
  const { data, isLoading } = useGetServiceSectionsQuery();
  const { data: serviceData, isLoading: serviceDataLoading } =
    useGetAllServicesQuery();

  if (isLoading || serviceDataLoading) {
    return <div>Loading...</div>;
  }

  const serviceSection = data?.data[0];
  const services = serviceData?.data;

  return (
    <section className="py-10 lg:py-20 bg-base-100" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-medium text-secondary">
            {serviceSection?.title}
          </h2>
          <p className="text-neutral-content md:w-1/2 mx-auto text-[15px]">
            {serviceSection?.description}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services?.map((service) => (
              <ServiceCard key={service?.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
