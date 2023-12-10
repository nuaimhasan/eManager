import { useGetAboutUsQuery } from "../../redux/api/aboutUsApi";

export default function AboutUs() {
  window.scroll(0, 0);

  const { data } = useGetAboutUsQuery();
  const aboutUs = data?.data[0];

  return (
    <section className="py-10 lg:py-20" id="about-us">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="section_text">{aboutUs?.tagline || "About Us"}</h3>
            <h2 className="text-2xl text-neutral">
              {aboutUs?.title}:{" "}
              <span className="text-secondary">
                Bridging Digital Success with eManager
              </span>
            </h2>

            <div className="mt-3 text-neutral-content text-[14.5px] flex flex-col gap-1">
              {aboutUs?.description}
            </div>

            <div className="mt-8">
              <button className="gradient-primary-btn">Company Profile</button>
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
