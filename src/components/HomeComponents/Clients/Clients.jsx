import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useGetClientsQuery } from "../../../redux/api/clientApi";

export default function Clients() {

  const {data} = useGetClientsQuery();

  const clients = data?.data;

  return (
    <section className="py-10 lg:py-16 bg-base-100" id="clients">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-neutral">
            Our Valued Clients
          </h2>
        </div>

        <div className="mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay]}
          >
            {clients?.map((client) => (
              <SwiperSlide key={client?.id}>
                <div className="shadow w-full h-20 rounded flex justify-center items-center">
                  <img
                    src={`${import.meta.env.VITE_SERVER_IMG}/clients/${
                      client?.image
                    }`}
                    alt=""
                    className="w-[70%] h-1/2"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
