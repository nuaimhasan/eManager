import "./Blogs.css";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <section className="py-10 lg:py-20 bg-base-100" id="blogs">
      <div className="container">
        <div className="text-center ">
          <h3 className="text-lg text-neutral-content">LATEST FROM BLOG</h3>
          <h2 className="text-4xl font-bold text-neutral">
            Read stories, tips, and our opinions
          </h2>
          <p className="text-sm text-neutral-content mt-3">
            Read our blogs and get effective tips/ideas from website development
            to <br />
            effective marketing strategies.
          </p>
        </div>

        <div className="mt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:mx-10">
            <div className="blog_card">
              <img
                src="/images/service_details/domain-hosting/dh.png"
                alt=""
                className="w-full h-52 rounded-t"
              />
              <div className="py-4 px-2">
                <h2 className="text-neutral text-xl font-semibold">
                  eManager release a new service : Domain & Hosting
                </h2>
                <p className="text-neutral-content text-sm">
                  A tax is a compulsory financial charge or some other type of
                  levy imposed...
                </p>

                <div>
                  <Link
                    to=""
                    className="text-secondary hover:underline text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="blog_card">
              <img
                src="/images/service_details/domain-hosting/dh.png"
                alt=""
                className="w-full h-52 rounded-t"
              />
              <div className="py-4 px-2">
                <h2 className="text-neutral text-xl font-semibold">
                  eManager release a new service : Domain & Hosting
                </h2>
                <p className="text-neutral-content text-sm">
                  A tax is a compulsory financial charge or some other type of
                  levy imposed...
                </p>

                <div>
                  <Link
                    to=""
                    className="text-secondary hover:underline text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="blog_card">
              <img
                src="/images/service_details/domain-hosting/dh.png"
                alt=""
                className="w-full h-52 rounded-t"
              />
              <div className="py-4 px-2">
                <h2 className="text-neutral text-xl font-semibold">
                  eManager release a new service : Domain & Hosting
                </h2>
                <p className="text-neutral-content text-sm">
                  A tax is a compulsory financial charge or some other type of
                  levy imposed...
                </p>

                <div>
                  <Link
                    to=""
                    className="text-secondary hover:underline text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
