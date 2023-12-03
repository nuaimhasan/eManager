import "./Hero.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import hero from "../../../../public/images//hero/hero.json";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <div className="hero_wrap py-5 md:py-10 lg:h-[87vh]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-0 items-center">
          <div className="sm:w-2/3 md:w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral">
              We are Hungry to take on your <br /> Challenge & Manage your
              business Like a Pro{" "}
              <span ref={el} className="text-secondary">
                Web Development
              </span>
            </h2>
            <p className="text-neutral-content mt-4 text-sm md:text-[15px]">
              In the digital age, your website is often the first point of
              contact with your audience. Our web development team specializes
              in creating stunning, responsive, and user-friendly websites that
              leave a lasting impression.
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
