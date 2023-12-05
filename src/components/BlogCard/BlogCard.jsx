import { Link } from "react-router-dom";

export default function BlogCard() {
  return (
    <div className="blog_card">
      <img
        src="/images/service_details/domain-hosting/dh.png"
        alt=""
        className="w-full h-48 rounded-t"
      />
      <div className="py-4 px-2">
        <h2 className="text-neutral text-lg font-semibold">
          eManager release a new service : Domain & Hosting
        </h2>

        <div className="mt-2">
          <Link to="/blog/1" className="text-secondary hover:underline text-sm">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
