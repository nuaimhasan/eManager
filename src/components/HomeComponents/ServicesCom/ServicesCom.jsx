import "./Services.css";
import { useGetServiceSectionsQuery } from "../../../redux/api/serviceSectionApi";
import Services from "../../Services/Services";

export default function ServicesCom() {
  const { data } = useGetServiceSectionsQuery();
  const serviceSection = data?.data[0];

  return (
    <section className="py-10 lg:py-14 bg-base-100" id="services">
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
          <Services />
        </div>
      </div>
    </section>
  );
}
