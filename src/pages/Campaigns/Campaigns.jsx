import { useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Campaigns() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section>
      <div className="py-10 bg-primary text-base-100">
        <div className="container">
          <div className="flex justify-center items-center]">
            <div className="text-center">
              <h2 className="text-4xl font-semibold my-2">Our Campaigns</h2>
              <p>We are providing the best service in the market.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="container">
          <div>
            <h2 className="text-2xl font-semibold text-primary">
              Web Development Campaigns
            </h2>
          </div>

          <div className="mx-10 my-6 grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
            <div className="border rounded py-10 px-4 bg-base-100 shadow">
              <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="px-6 py-1.5 rounded bg-primary text-primary uppercase">
                  UDDOKTA PACKAGE
                </h2>

                <h2 className="text-2xl text-primary">Only 17500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Domain Registration
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Free Hosting
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Laravel e-commerch
                  website
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Business Facebook
                  Page Setup
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Google map setup
                </li>
              </ul>

              <div className="mt-10 flex justify-center">
                <Link to="/campaigns/1" className="gradient-primary-btn">
                  Book Now
                </Link>
              </div>
            </div>

            <div className="border rounded py-10 px-4 bg-base-100 shadow">
              <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="px-6 py-1.5 rounded bg-primary text-primary uppercase">
                  UDDOKTA PACKAGE 2
                </h2>

                <h2 className="text-2xl text-primary">Only 22500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Domain Registration
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Free Hosting
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> MERN e-commerch
                  website
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Business Facebook
                  Page Setup
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Google map setup
                </li>
              </ul>

              <div className="mt-10 flex justify-center">
                <Link to="/campaigns/1" className="gradient-primary-btn">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container">
          <div>
            <h2 className="text-2xl font-semibold text-primary">
              Digital Marketing Campaigns
            </h2>
          </div>

          <div className="mx-10 my-6 grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
            <div className="border rounded py-10 px-4 bg-base-100 shadow">
              <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="px-6 py-1.5 rounded bg-primary text-primary uppercase">
                  Sliver
                </h2>

                <h2 className="text-2xl text-primary">Only 7500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 20 Social Media post
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 1 Logo Make
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 1 Facebook Cover
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 1 Motion Video
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 1 Creative Design
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Digital Marketing
                  Consultancy
                </li>
              </ul>

              <div className="mt-10 flex justify-center">
                <Link to="/campaigns/1" className="gradient-primary-btn">
                  Book Now
                </Link>
              </div>
            </div>

            <div className="border rounded py-10 px-4 bg-base-100 shadow">
              <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="px-6 py-1.5 rounded bg-primary text-primary uppercase">
                  Gold
                </h2>

                <h2 className="text-2xl text-primary">Only 10500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 25 Social Media post
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 1 Logo Make
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 2 Facebook Cover
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 2 Motion Video
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 2 Creative Design
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Digital Marketing
                  Consultancy
                </li>
              </ul>

              <div className="mt-10 flex justify-center">
                <Link to="/campaigns/1" className="gradient-primary-btn">
                  Book Now
                </Link>
              </div>
            </div>

            <div className="border rounded py-10 px-4 bg-base-100 shadow">
              <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="px-6 py-1.5 rounded bg-primary text-primary uppercase">
                  Diamond
                </h2>

                <h2 className="text-2xl text-primary">Only 15500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 30 Social Media post
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 1 Logo Make
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 2 Facebook Cover
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 2 Motion Video
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> 2 Creative Design
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Digital Marketing
                  Consultancy
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-primary" /> Sales Consultancy
                </li>
              </ul>

              <div className="mt-10 flex justify-center">
                <Link to="/campaigns/1" className="gradient-primary-btn">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
