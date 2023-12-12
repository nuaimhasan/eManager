// import { FaTrophy, FaUsers } from "react-icons/fa";
// import { AiFillProject } from "react-icons/ai";
// import { BiSolidLike } from "react-icons/bi";

import { useGetAboutUsQuery } from "../../../redux/api/aboutUsApi";

export default function About() {
  const { data } = useGetAboutUsQuery();
  const aboutUs = data?.data[0];

  return (
    <section className="py-10 lg:py-20" id="about-us">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="section_text">About Us</h3>
            <h2 className="text-2xl text-neutral">
              {aboutUs?.title}:{" "}
              <span className="text-secondary">{aboutUs?.tagline}</span>
            </h2>

            <div className="mt-3 text-neutral-content text-[14.5px] flex flex-col gap-1">
              {aboutUs?.description}
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
              src={`http://localhost:5000/aboutus/image/${aboutUs?.image}`}
              alt=""
              className="h-80 sm:h-[450px] lg:h-[500px] w-full lg:w-[85%] ml-auto rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
