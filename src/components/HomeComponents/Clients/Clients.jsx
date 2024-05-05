import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useGetClientsQuery } from "../../../redux/api/clientApi";

export default function Clients() {
  const { data } = useGetClientsQuery();
  const clients = data?.data;

  return (
    <section className="py-10 bg-gray-50">
      <div className="container">
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-medium text-primary">
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
              <SwiperSlide key={client?._id}>
                <div className="shadow w-full h-20 rounded flex justify-center items-center bg-gray-300">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/clients/${
                      client?.image
                    }`}
                    alt=""
                    className="w-[70%] h-[60%]"
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
