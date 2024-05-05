import Lottie from "lottie-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import hero from "../../../../public/images//hero/hero.json";
import { useGetBannerQuery } from "../../../redux/api/bannerApi";
import { useGetAllServicesQuery } from "../../../redux/api/serviceApi";
import "./Hero.css";
import { useGetContactUsQuery } from "../../../redux/api/contactUsApi";

export default function Hero() {
  const el = useRef(null);
  const { data, isLoading } = useGetBannerQuery();
  const { data: serviceData } = useGetAllServicesQuery();
  const { data: contct } = useGetContactUsQuery();

  const banner = data?.data[0];
  const services = serviceData?.data;
  const contactUs = contct?.data[0];

  useEffect(() => {
    const titles = services ? services.map((service) => service?.title) : [];
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: titles,
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
  }, [services]);

  return (
    <div className="hero_wrap py-5 md:py-10 lg:h-[87vh]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-0 items-center">
          <div
            className="sm:w-2/3 md:w-full"
            data-aos="zoom-in"
            data-aos-once="true"
          >
            <h2 className="text-2xl md:text-3xl lg:text-[33px] text-neutral">
              {isLoading
                ? "We are Hungry to take on your Challenge & Manage your business Like a Pro..."
                : banner?.title}
              <span ref={el} className="text-primary">
                Web Development
              </span>
            </h2>
            <p className="text-neutral-content mt-4 text-sm md:text-[15px]">
              {isLoading ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="w-full h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                  <div className="w-full h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="w-full h-2 bg-gray-200 rounded-full "></div>
                </div>
              ) : (
                banner?.description
              )}
            </p>

            <div className="mt-6">
              <Link
                to={`https://api.whatsapp.com/send?phone=${contactUs?.whatsapp}`}
                target="_blank"
                className="gradient-primary-btn"
              >
                Let&apos;s discuss your project
              </Link>
            </div>
          </div>

          <div>
            <div className="hero_right" data-aos="zoom-in" data-aos-once="true">
              <Lottie animationData={hero} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
