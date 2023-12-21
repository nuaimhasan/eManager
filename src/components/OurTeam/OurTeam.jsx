import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";

export default function OurTeam() {
  return (
    <section className="py-10 lg:py-16 bg-base-100" id="our-team">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
            Meet Our Team
          </h2>
        </div>

        <div className="mt-10">
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
            <SwiperSlide className="w-[90%] sm:w-[280px]">
              <div className="team_card">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQEIFcE9pxKiAg/profile-displayphoto-shrink_400_400/0/1667554978281?e=1703721600&v=beta&t=1TlnUtDArkKWBvQM_AO3Pq4PR0ttOLZwaZuv7NG8MGk"
                  alt="team-image"
                />
                <h2 className="text-xl font-medium text-secondary">
                  Nuaim Hasan Nasim
                </h2>
                <p className="text-neutral-content">MERN Stack Developer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[90%] sm:w-[280px]">
              <div className="team_card">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQEIFcE9pxKiAg/profile-displayphoto-shrink_400_400/0/1667554978281?e=1703721600&v=beta&t=1TlnUtDArkKWBvQM_AO3Pq4PR0ttOLZwaZuv7NG8MGk"
                  alt="team-image"
                />
                <h2 className="text-xl font-medium text-secondary">
                  Nuaim Hasan Nasim
                </h2>
                <p className="text-neutral-content">MERN Stack Developer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[90%] sm:w-[280px]">
              <div className="team_card">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQEIFcE9pxKiAg/profile-displayphoto-shrink_400_400/0/1667554978281?e=1703721600&v=beta&t=1TlnUtDArkKWBvQM_AO3Pq4PR0ttOLZwaZuv7NG8MGk"
                  alt="team-image"
                />
                <h2 className="text-xl font-medium text-secondary">
                  Nuaim Hasan Nasim
                </h2>
                <p className="text-neutral-content">MERN Stack Developer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[90%] sm:w-[280px]">
              <div className="team_card">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQEIFcE9pxKiAg/profile-displayphoto-shrink_400_400/0/1667554978281?e=1703721600&v=beta&t=1TlnUtDArkKWBvQM_AO3Pq4PR0ttOLZwaZuv7NG8MGk"
                  alt="team-image"
                />
                <h2 className="text-xl font-medium text-secondary">
                  Nuaim Hasan Nasim
                </h2>
                <p className="text-neutral-content">MERN Stack Developer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[90%] sm:w-[280px]">
              <div className="team_card">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQEIFcE9pxKiAg/profile-displayphoto-shrink_400_400/0/1667554978281?e=1703721600&v=beta&t=1TlnUtDArkKWBvQM_AO3Pq4PR0ttOLZwaZuv7NG8MGk"
                  alt="team-image"
                />
                <h2 className="text-xl font-medium text-secondary">
                  Nuaim Hasan Nasim
                </h2>
                <p className="text-neutral-content">MERN Stack Developer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[90%] sm:w-[280px]">
              <div className="team_card">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQEIFcE9pxKiAg/profile-displayphoto-shrink_400_400/0/1667554978281?e=1703721600&v=beta&t=1TlnUtDArkKWBvQM_AO3Pq4PR0ttOLZwaZuv7NG8MGk"
                  alt="team-image"
                />
                <h2 className="text-xl font-medium text-secondary">
                  Nuaim Hasan Nasim
                </h2>
                <p className="text-neutral-content">MERN Stack Developer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[90%] sm:w-[280px]">
              <div className="team_card">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQEIFcE9pxKiAg/profile-displayphoto-shrink_400_400/0/1667554978281?e=1703721600&v=beta&t=1TlnUtDArkKWBvQM_AO3Pq4PR0ttOLZwaZuv7NG8MGk"
                  alt="team-image"
                />
                <h2 className="text-xl font-medium text-secondary">
                  Nuaim Hasan Nasim
                </h2>
                <p className="text-neutral-content">MERN Stack Developer</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
