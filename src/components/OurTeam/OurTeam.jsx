import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay } from "swiper/modules";
import { useGetAllteamsQuery } from "../../redux/api/teamApi";
import Spinner from "../Spinner/Spinner";

export default function OurTeam() {
  const { data, isLoading } = useGetAllteamsQuery();
  if (isLoading) return <Spinner />;

  return (
    <section className="py-10 lg:py-16 bg-base-100" id="our-team">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
            Meet Our Team
          </h2>
        </div>

        <div className="my-7">
          <Swiper
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay]}
            className="p-4"
          >
            {data?.data?.map((team) => (
              <SwiperSlide key={team?._id}>
                <div
                  className="team_card"
                  data-aos="zoom-in"
                  data-aos-once="true"
                >
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/team/${
                      team?.image
                    }`}
                    alt="team-image"
                  />
                  <h2 className="text-xl font-medium text-secondary">
                    {team?.name}
                  </h2>
                  <p className="text-neutral-content">{team?.designation}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
