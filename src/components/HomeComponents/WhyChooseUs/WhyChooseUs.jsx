import { useGetAllWhyChooseQuery } from "../../../redux/api/WhyChooseApi";

export default function WhyChooseUs() {
  const { data } = useGetAllWhyChooseQuery();
  const chooseLists = data?.data;

  return (
    <section className="py-10 lg:py-20 bg-primary text-base-100">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-medium">Why Choose Us</h2>
          <p className="opacity-90 font-light lg:w-1/2 mx-auto text-sm mt-1.5">
            eManager IT is here to fuel your success with our expertise in
            website, app, software development, and total digital marketing
            solutions. Let&apos;s embark on a journey of growth together!
          </p>
        </div>

        <div className="mt-14">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {chooseLists?.map((list) => (
              <div
                key={list?.id}
                className="text-center"
                data-aos="fade-up"
                data-aos-once="true"
              >
                <p className="flex justify-center text-4xl ">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/whychoose/${
                      list?.icon
                    }`}
                    alt="icon"
                    className="w-10"
                  />
                </p>
                <h2 className="text-xl font-medium my-2">{list?.title}</h2>
                <p className="text-sm opacity-80 font-light">
                  {list?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
