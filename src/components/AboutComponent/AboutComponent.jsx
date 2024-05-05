import parse from "html-react-parser";
import { useGetAboutUsQuery } from "../../redux/api/aboutUsApi";
import Spinner from "../Spinner/Spinner";

export default function AboutComponent() {
  const { data, isLoading } = useGetAboutUsQuery();
  const aboutUs = data?.data[0];
  const details = aboutUs && parse(aboutUs?.description);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-xl sm:text-3xl text-neutral">
            {aboutUs?.title}{" "}
            <span className="text-primary">{aboutUs?.tagline}</span>
          </h2>

          <div className="mt-3 text-neutral-content text-[14.5px] flex flex-col gap-1">
            {details}
          </div>

          <div className="mt-4">
            <a
              href={`${import.meta.env.VITE_BACKEND_URL}/aboutus/${
                aboutUs?.profileDoc
              }`}
              download="eManager-profile"
              target="_blank"
              rel="noreferrer"
            >
              <button className="gradient-primary-btn text-sm">
                Company Profile
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/aboutus/${
              aboutUs?.image
            }`}
            alt=""
            className="h-80 sm:h-[450px] lg:h-[500px] w-full lg:w-[85%] ml-auto rounded"
          />
        </div>
      </div>
    </div>
  );
}
