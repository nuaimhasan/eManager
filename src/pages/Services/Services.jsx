import Services from "../../components/HomeComponents/Services/Services";

export default function ServicesPage() {
  window.scroll(0, 0);
  return (
    <section>
      <div className="py-10">
        <div className="container">
          <div className="py-6 lg:py-14">
            <div className="flex justify-center items-center">
              <div className="lg:w-2/3 text-center">
                <h3 className="text-xl text-primary">
                  GROW YOUR BUSINESS FROM TODAY
                </h3>
                <h2 className="text-2xl md:text-4xl font-semibold text-secondary my-2">
                  Business Solutions For All Enterprises
                </h2>

                <div className="mt-4 text-neutral-content flex flex-col gap-2 text-sm md:text-base">
                  <p>
                    We deliver a complete business solution that covers
                    everything from Branding to Product Promotion. We have an
                    expert team in Business Strategy and Consultancy, Graphics,
                    Web Design/Development, and Digital Marketing. We provide
                    end-to-end solutions that drive your business forward.
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
