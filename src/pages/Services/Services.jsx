import Services from "../../components/Services/Services";
import Spinner from "../../components/Spinner/Spinner";
import { useGetServiceBannerQuery } from "../../redux/api/serviceBannerApi";
import { useGetServiceSectionsQuery } from "../../redux/api/serviceSectionApi";

export default function ServicesPage() {
  window.scroll(0, 0);

  const { data, isLoading } = useGetServiceBannerQuery();
  const serviceBanner = data?.data[0];

  const { data: section } = useGetServiceSectionsQuery();
  const serviceSection = section?.data[0];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className="py-10 relative h-80">
        <div className="absolute w-full left-0 top-0">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/serviceBanner/${
              serviceBanner?.image
            }`}
            alt=""
            className="w-full h-80"
          />
        </div>

        <div className="bg-[#0000008e] w-full h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="container h-full">
            <div className="py-6 lg:py-14 h-full">
              <div className="flex justify-center items-center h-full">
                <div className="lg:w-2/3 text-center">
                  <h3 className="text-xl text-primary">
                    {serviceBanner?.subtitle}
                  </h3>
                  <h2 className="text-2xl md:text-4xl font-semibold my-2 text-base-100">
                    {serviceSection?.title}
                  </h2>

                  <div className="mt-4 text-base-100/80 flex flex-col gap-2 text-sm md:text-base">
                    <p>{serviceSection?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <Services />
      </div>
    </section>
  );
}
