import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { useGetServiceBySlugQuery } from "../../redux/api/serviceApi";
import "./ServiceDetails.css";
import Spinner from "../../components/Spinner/Spinner";

export default function ServiceDetails() {
  window.scroll(0, 0);

  const { slug } = useParams();

  const { data, isLoading } = useGetServiceBySlugQuery(slug);
  if (isLoading) {
    return <Spinner />;
  }
  const service = data?.data;
  const details = service?.description && parse(service?.description);

  return (
    <section>
      {/* details */}
      <div className="bg-secondary text-base-100 py-5">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-6 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-4xl font-semibold">
                {service?.title}
              </h2>

              <div className="mt-4 flex flex-col gap-2 text-sm md:text-base">
                <p>{details}</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/services/${
                  service?.image
                }`}
                alt=""
                className="w-full sm:w-1/2 lg:w-4/5 mx-auto h-72"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-10">
        <div className="mt-6 grid grid-cols-4 gap-6">
          <div className="text-center">
            <img
              src="/images/services/web.png"
              alt="icon"
              className="w-10 h-10 mx-auto"
            />
            <h2 className="text-xl font-medium my-2">Ecommerch Website</h2>
            <p className="text-sm opacity-80 font-light">
              Lorem ipsum dolor sit amet,consectetur adipisicing elit.
            </p>
          </div>

          <div className="text-center">
            <img
              src="/images/services/web.png"
              alt="icon"
              className="w-10 h-10 mx-auto"
            />
            <h2 className="text-xl font-medium my-2">Business Website</h2>
            <p className="text-sm opacity-80 font-light">
              Lorem ipsum dolor sit amet,consectetur adipisicing elit.
            </p>
          </div>

          <div className="text-center">
            <img
              src="/images/services/web.png"
              alt="icon"
              className="w-10 h-10 mx-auto"
            />
            <h2 className="text-xl font-medium my-2">Protfolio Website</h2>
            <p className="text-sm opacity-80 font-light">
              Lorem ipsum dolor sit amet,consectetur adipisicing elit.
            </p>
          </div>

          <div className="text-center">
            <img
              src="/images/services/web.png"
              alt="icon"
              className="w-10 h-10 mx-auto"
            />
            <h2 className="text-xl font-medium my-2">RealState Website</h2>
            <p className="text-sm opacity-80 font-light">
              Lorem ipsum dolor sit amet,consectetur adipisicing elit.
            </p>
          </div>

          <div className="text-center">
            <img
              src="/images/services/web.png"
              alt="icon"
              className="w-10 h-10 mx-auto"
            />
            <h2 className="text-xl font-medium my-2">
              Stock Manegment Website
            </h2>
            <p className="text-sm opacity-80 font-light">
              Lorem ipsum dolor sit amet,consectetur adipisicing elit.
            </p>
          </div>

          <div className="text-center">
            <img
              src="/images/services/web.png"
              alt="icon"
              className="w-10 h-10 mx-auto"
            />
            <h2 className="text-xl font-medium my-2">Education Website</h2>
            <p className="text-sm opacity-80 font-light">
              Lorem ipsum dolor sit amet,consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Technologies */}
      {/* <section className="py-10 bg-secondary text-base-100">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl">
            Our Web Development <br /> Technologies
          </h2>

          <div className="mt-8 lg:w-2/3 mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-1">
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/html.png"
                  alt=""
                />
                <h2>HTML</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/css.png"
                  alt=""
                />
                <h2>CSS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/js.png"
                  alt=""
                />
                <h2>JavaScript</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/tailwind.webp"
                  alt=""
                />
                <h2>Tailwind CSS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/bootstrap.png"
                  alt=""
                />
                <h2>Bootstrap</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/react.png"
                  alt=""
                />
                <h2>React JS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/nextjs.png"
                  alt=""
                />
                <h2>Next JS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/redux.png"
                  alt=""
                />
                <h2>Redux</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/vue.png"
                  alt=""
                />
                <h2>Vue JS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/php.svg"
                  alt=""
                />
                <h2>PHP</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/laravel.webp"
                  alt=""
                />
                <h2>Laravel</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/node.png"
                  alt=""
                />
                <h2>Node JS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/express.png"
                  alt=""
                />
                <h2>Express JS</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/mongodb.svg"
                  alt=""
                />
                <h2>MongoDB</h2>
              </div>
              <div className="technology_card">
                <img
                  src="/images/service_details/web-development/mysql.png"
                  alt=""
                />
                <h2>MySql</h2>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
}
