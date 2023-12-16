import "./Career.css";
import { Link } from "react-router-dom";
import { BiDownArrowAlt, BiSolidBriefcase } from "react-icons/bi";
import { useGetBenefitsQuery } from "../../redux/api/benefitsApi";
import { useGetCareerBannerQuery } from "../../redux/api/careerBannerApi";
import { useGetJobsQuery } from "../../redux/api/jobsApi";
import parse from "html-react-parser";

export default function Career() {
  window.scroll(0, 0);

  const { data: careerBanners, isLoading: isCareerBannersLoading } =
    useGetCareerBannerQuery();
  const { data: jobData, isLoading: isJobDataLoading } = useGetJobsQuery();
  const { data: benefitData, isLoading: isBenefitDataLoading } =
    useGetBenefitsQuery();

  if (isCareerBannersLoading || isJobDataLoading || isBenefitDataLoading) {
    return <div>Loading...</div>;
  }

  const jobs = jobData?.data;
  const careerBanner = careerBanners?.data[0];
  const benefits = benefitData?.data;

  return (
    <section>
      <div className="career_wrap relative h-screen md:h-[80vh]">
        <div className="career mt-10 md:mt-0">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl text-neutral">
                  {careerBanner?.title}
                </h2>
                <p className="text-neutral-content mt-4">
                  {careerBanner?.description}
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
          {jobs?.map((job) => (
            <div
              key={job.id}
              className="sm:flex justify-between items-center border-b py-4"
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="bg-secondary text-base-100 px-1.5 py-1 w-max rounded">
                    <BiSolidBriefcase />
                  </div>
                  <h3 className="font-semibold text-lg text-neutral uppercase">
                    {job?.title}
                  </h3>
                </div>
                <p className="text-neutral-content text-[15px]">
                  {job?.jobType}
                </p>
              </div>
              <div className="mt-5 sm:mt-0">
                <Link
                  to={`/career/${job?.id}`}
                  className="sm:block bg-primary text-neutral font-medium px-6 py-2 rounded-full text-sm scale-[.98] hover:scale-[1] duration-200"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="pt-10 pb-20">
        <div className="container">
          <h2 className="text-3xl">Benefit</h2>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {benefits?.map((benefit) => (
              <div key={benefit.id}>
                <div className="bg-secondary text-base-100 px-2 py-1.5 w-max rounded text-2xl">
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/benefit/${
                      benefit?.image
                    }`}
                    alt=""
                    className="w-6 h-7"
                  />
                </div>
                <h3 className="text-lg font-medium mt-2">{benefit?.title}</h3>
                <p className="text-neutral-content text-sm">
                  {parse(benefit?.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
