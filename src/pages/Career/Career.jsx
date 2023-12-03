import "./Career.css";
import { BiDownArrowAlt, BiSolidBriefcase, BiTimeFive } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { BsHourglassSplit } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { VscServerEnvironment } from "react-icons/vsc";
import { PiHamburger } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Career() {
  window.scroll(0, 0);
  return (
    <section>
      <div className="career_wrap relative h-screen md:h-[80vh]">
        <div className="career mt-10 md:mt-0">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl text-neutral">
                  Start your career <br /> with eManager
                </h2>
                <p className="text-neutral-content mt-4">
                  If you don&apos;t see a role that&apos;s right for you but
                  you&apos;d love to get involved, pitch us! Send your CV/Resume
                  to{" "}
                  <span className="font-medium text-neutral">
                    career@emanagerit.com
                  </span>{" "}
                  and let us know what you can bring to the team + why
                  you&apos;re interested in eManager.
                </p>

                <div className="mt-6">
                  <a href="#jobs">
                    <div className="gradient-primary-btn w-max flex items-center gap-2">
                      View Jobs <BiDownArrowAlt />
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <img src="/images/career/career.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-7px] w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#fff"
                  fillOpacity="1"
                  d="M0,160L80,181.3C160,203,320,245,480,266.7C640,288,800,288,960,266.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
              </svg>
            </svg>
          </svg>
        </div>
      </div>

      {/* Jobs Lists */}
      <div className="py-16 bg-base-100" id="jobs">
        <div className="container">
          <div className="sm:flex justify-between items-center border-b py-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 px-1.5 py-1 w-max rounded">
                  <BiSolidBriefcase />
                </div>
                <h3 className="font-semibold text-lg text-neutral uppercase">
                  Digital Marketing Expert
                </h3>
              </div>
              <p className="text-neutral-content text-[15px]">
                Job Type: Work at office
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <Link
                to="/career/1"
                className="sm:block bg-primary text-neutral font-medium px-6 py-2 rounded-full text-sm scale-[.98] hover:scale-[1] duration-200"
              >
                Apply Now
              </Link>
            </div>
          </div>

          <div className="sm:flex justify-between items-center border-b py-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="bg-secondary text-base-100 px-1.5 py-1 w-max rounded">
                  <BiSolidBriefcase />
                </div>
                <h3 className="font-semibold text-lg uppercase">
                  Graphic Designer
                </h3>
              </div>
              <p className="text-neutral-content text-[15px]">
                Job Type: Work at office
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <Link
                to="/career/2"
                className="sm:block bg-primary text-neutral font-medium px-6 py-2 rounded-full text-sm scale-[.98] hover:scale-[1] duration-200"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="pt-10 pb-20">
        <div className="container">
          <h2 className="text-3xl">Benefit</h2>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <div>
              <div className="bg-secondary text-base-100 px-2 py-1.5 w-max rounded text-2xl">
                <GiTeacher />
              </div>
              <h3 className="text-lg font-medium mt-2">
                Training & Development
              </h3>
              <p className="text-neutral-content text-sm">
                We make training & development plans and arrange courses to
                enhance the skills for our employees professional and personal
                development.
              </p>
            </div>

            <div>
              <div className="bg-secondary text-base-100 px-2 py-1.5 w-max rounded text-2xl">
                <FaUsers />
              </div>
              <h3 className="text-lg font-medium mt-2">Great Team Members</h3>
              <p className="text-neutral-content text-sm">
                In our office, you will be surrounded by friendly, cooperative,
                and compassionate team members.
              </p>
            </div>

            <div>
              <div className="bg-secondary text-base-100 px-2 py-1.5 w-max rounded text-2xl">
                <BsHourglassSplit />
              </div>
              <h3 className="text-lg font-medium mt-2">
                Flexibility on work hour
              </h3>
              <p className="text-neutral-content text-sm">
                We maintain our office hours from 10 AM to 6 PM and weekly one
                day off (as per company policy).
              </p>
            </div>

            <div>
              <div className="bg-secondary text-base-100 px-2 py-1.5 w-max rounded text-2xl">
                <VscServerEnvironment />
              </div>
              <h3 className="text-lg font-medium mt-2">Work Environment</h3>
              <p className="text-neutral-content text-sm">
                We always maintain an innovative, amiable, safe as well as
                collaborative office environment where we can all enjoy working.
              </p>
            </div>

            <div>
              <div className="bg-secondary text-base-100 px-2 py-1.5 w-max rounded text-2xl">
                <PiHamburger />
              </div>
              <h3 className="text-lg font-medium mt-2">Never go Hungry</h3>
              <p className="text-neutral-content text-sm">
                We take diligent care of our employees, so you are not going to
                feel hunger throughout the office time of our provided lunch and
                all sorts of snacks & tea.
              </p>
            </div>

            <div>
              <div className="bg-secondary text-base-100 px-2 py-1.5 w-max rounded text-2xl">
                <BiTimeFive />
              </div>
              <h3 className="text-lg font-medium mt-2">On time salary</h3>
              <p className="text-neutral-content text-sm">
                We practice paying salary within the first week of the month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
