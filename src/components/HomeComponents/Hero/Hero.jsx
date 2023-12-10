import "./Hero.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import hero from "../../../../public/images//hero/hero.json";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { useGetBannerQuery } from "../../../redux/api/bannerApi";

export default function Hero() {
  const el = useRef(null);
  const {data} = useGetBannerQuery();

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "Web Development",
          "App Development",
          "UI/UX Design",
          "Digital Marketing",
        ],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 500,
        startDelay: 300,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const banner = data?.data[0];

  return (
    <div className="hero_wrap py-5 md:py-10 lg:h-[87vh]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-0 items-center">
          <div className="sm:w-2/3 md:w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral">
              {banner?.title}{" "}
              <span ref={el} className="text-secondary">
                Web Development
              </span>
            </h2>
            <p className="text-neutral-content mt-4 text-sm md:text-[15px]">
             {banner?.description}
            </p>

            <div className="mt-6">
              <Link to="" className="gradient-primary-btn">
                Let&apos;s discuss your project
              </Link>
            </div>
          </div>

          <div>
            <div className="hero_right">
              {/* <img src="/images/hero/hero_man.webp" alt="" /> */}
              <Lottie animationData={hero} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
