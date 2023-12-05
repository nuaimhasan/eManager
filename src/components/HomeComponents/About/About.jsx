// import { FaTrophy, FaUsers } from "react-icons/fa";
// import { AiFillProject } from "react-icons/ai";
// import { BiSolidLike } from "react-icons/bi";

export default function About() {
  return (
    <section className="py-10 lg:py-20" id="about-us">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="section_text">About Us</h3>
            <h2 className="text-2xl text-neutral">
              Empowering Efficiency, Unleashing <br /> Potential:{" "}
              <span className="text-secondary">
                Bridging Digital Success with eManager
              </span>
            </h2>

            <div className="mt-3 text-neutral-content text-[14.5px] flex flex-col gap-1">
              <p>
                eManager is a leading digital solutions company, specializing in
                website and app development, software development, and total
                digital marketing strategies. We are committed to helping
                businesses establish a strong online presence and achieve their
                digital goals.
              </p>

              <p>
                Our team of skilled professionals excels in creating visually
                appealing and user-friendly websites, as well as developing
                robust mobile applications. We leverage the latest technologies
                and industry best practices to deliver high-quality, customized
                solutions.
              </p>

              <p>
                In addition to development services, our expertise extends to
                software solutions that streamline business operations and drive
                productivity. From CRM systems to enterprise applications, we
                provide tailored software solutions to meet specific business
                needs.
              </p>

              <p>
                Our team of skilled professionals excels in creating visually
                appealing and user-friendly websites, as well as developing
                robust mobile applications. We leverage the latest technologies
                and industry best practices to deliver high-quality, customized
                solutions.
              </p>

              <p>
                In addition to development services, our expertise extends to
                software solutions that streamline business operations and drive
                productivity. From CRM systems to enterprise applications, we
                provide tailored software solutions to meet specific business
                needs.
              </p>
            </div>

            {/* <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 flex justify-center items-center rounded bg-secondary/20 text-secondary">
                  <FaTrophy className="text-lg" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-medium text-neutral">
                    <span>7</span>+
                  </h2>
                  <p className="text-neutral-content text-sm -mt-1">
                    Successful Years
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 flex justify-center items-center rounded bg-secondary/20 text-secondary">
                  <AiFillProject className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-medium text-neutral">
                    <span>1500</span>+
                  </h2>
                  <p className="text-neutral-content text-sm -mt-1">
                    Project Done
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 flex justify-center items-center rounded bg-secondary/20 text-secondary">
                  <FaUsers className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-medium text-neutral">
                    <span>500</span>+
                  </h2>
                  <p className="text-neutral-content text-sm -mt-1">
                    Happy Clients
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 flex justify-center items-center rounded bg-secondary/20 text-secondary">
                  <BiSolidLike className="text-xl" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-medium text-neutral">
                    <span>98</span>%
                  </h2>
                  <p className="text-neutral-content text-sm -mt-1">
                    Positive Feedback
                  </p>
                </div>
              </div>
            </div> */}

            <div className="mt-4">
              <button className="gradient-primary-btn text-sm">
                Company Profile
              </button>
            </div>
          </div>

          <div>
            <img
              src="/images/about2.png"
              alt=""
              className="h-80 sm:h-[450px] lg:h-[500px] w-full lg:w-[85%] ml-auto rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
