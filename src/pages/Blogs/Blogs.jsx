import "./Blogs.css";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        (!e.target.closest(".news_sidebar_btn") &&
          !e.target.closest(".news_sidebar")) ||
        e.target.closest(".news_sidebar ul li a")
      ) {
        setSidebar(false);
      }
    });
  }, []);
  return (
    <section className="py-6">
      <div className="container">
        <div className="lg:mx-28 flex items-center gap-2 text-neutral-content text-sm border-b pb-1">
          <button
            onClick={() => setSidebar(true)}
            className="md:hidden news_sidebar_btn"
          >
            <HiOutlineMenuAlt2 className="text-xl" />
          </button>
          <p>Home</p>
          <p>-</p>
          <p>Blogs</p>
        </div>

        <div className="md:flex gap-6 lg:mx-28 mt-6">
          <div className={`news_sidebar ${sidebar && "news_sidebar_show"}`}>
            <div className="py-2">
              <ul className="mt-1.5 pl-1 text-neutral-content flex flex-col gap-1">
                <li>
                  <Link
                    to="/blogs"
                    className="hover:text-secondary duration-200"
                  >
                    Advertisement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="hover:text-secondary duration-200"
                  >
                    Corporate News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="hover:text-secondary duration-200"
                  >
                    CSR
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="hover:text-secondary duration-200"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="news_content">
            <div className="flex flex-col gap-8">
              <div className="news_card">
                <div>
                  <img
                    src="/images/service_details/domain-hosting/dh.png"
                    alt=""
                    className="w-full h-60 rounded"
                  />
                </div>
                <h2 className="mt-2">
                  eManager release a new service : Domain & Hosting
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
