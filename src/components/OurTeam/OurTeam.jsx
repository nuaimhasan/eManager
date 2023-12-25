import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { useGetAllteamsQuery } from "../../redux/api/teamApi";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

export default function OurTeam() {
  const { data, isLoading } = useGetAllteamsQuery();
  if (isLoading) return <Spinner />;

  console.log(data?.data);

  return (
    <section className="py-10 lg:py-16 bg-base-100" id="our-team">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
            Meet Our Team
          </h2>
        </div>

        <div className="my-10">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 6,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
          >
            {data?.data?.map((team) => (
              <SwiperSlide key={team?._id} className="w-[90%] sm:w-[280px]">
                <div className="team_card">
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

        <div className="flex justify-center items-center">
          <Link to="/our-team" className="gradient-primary-btn">
            All Team
          </Link>
        </div>
      </div>
    </section>
  );
}
