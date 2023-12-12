import Services from "../../components/HomeComponents/Services/Services";
import { useGetServiceBannerQuery } from "../../redux/api/serviceBannerApi";

export default function ServicesPage() {
  window.scroll(0, 0);

  const {data , isLoading} = useGetServiceBannerQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const serviceBanner = data?.data[0];
  console.log(serviceBanner);

  return (
    <section>
      <div className="py-10">
        <div className="container">
          <div className="py-6 lg:py-14">
            <div className="flex justify-center items-center">
              <div className="lg:w-2/3 text-center">
                <h3 className="text-xl text-primary">
                  {serviceBanner?.subtitle}
                </h3>
                <h2 className="text-2xl md:text-4xl font-semibold text-secondary my-2">
                  {serviceBanner?.title}
                </h2>

                <div className="mt-4 text-neutral-content flex flex-col gap-2 text-sm md:text-base">
                  <p>
                    {serviceBanner?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services />
    </section>
  );
}
