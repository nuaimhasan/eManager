import { useGetAllServicesQuery } from "../../redux/api/serviceApi";
import ServiceCard from "../ServiceCard/ServiceCard";
import Spinner from "../Spinner/Spinner";

export default function Services() {
  const { data: serviceData, isLoading } = useGetAllServicesQuery();
  const services = serviceData?.data;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services?.map((service) => (
          <ServiceCard key={service?.id} service={service} />
        ))}
      </div>
    </div>
  );
}
