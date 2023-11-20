import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero_wrap py-5 md:py-10 lg:h-[87vh]">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-0 items-center">
          <div className="sm:w-2/3 md:w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral">
              We are Hungry to take <br /> on your Challenge & Manage your
              business Like a Pro
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
              <img src="/images/hero/hero_man.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
