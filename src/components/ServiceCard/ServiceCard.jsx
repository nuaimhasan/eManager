import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// import parse from "html-react-parser";

export default function ServiceCard({ service }) {
  return (
    <Link to={`/service/${service?.slug}`} className="service_card">
      <img
        src={`${import.meta.env.VITE_SERVER_IMG}/service/icon/${service?.icon}`}
        alt=""
      />
      <h2 className="text-neutral text-xl font-medium mb-2 mt-5">
        {service?.title}
      </h2>
      <div className="text-neutral-content text-[15px]">
        {service?.shortDescription?.slice(0, 100)}...
      </div>

      <button>
        Read More <FaLongArrowAltRight />
      </button>
    </Link>
  );
}
