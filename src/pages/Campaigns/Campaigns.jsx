import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Campaigns() {
  return (
    <section>
      <div className="py-10 bg-secondary text-base-100">
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
            <h2 className="text-2xl font-semibold text-secondary">
              Web Development Campaigns
            </h2>
          </div>

          <div className="mx-10 my-6 grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
            <div className="border rounded py-10 px-4 bg-base-100 shadow">
              <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="px-6 py-1.5 rounded bg-primary text-secondary uppercase">
                  UDDOKTA PACKAGE
                </h2>

                <h2 className="text-2xl text-secondary">Only 17500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Domain Registration
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Free Hosting
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Laravel e-commerch
                  website
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Business Facebook
                  Page Setup
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Google map setup
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
                <h2 className="px-6 py-1.5 rounded bg-primary text-secondary uppercase">
                  UDDOKTA PACKAGE 2
                </h2>

                <h2 className="text-2xl text-secondary">Only 22500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Domain Registration
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Free Hosting
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> MERN e-commerch
                  website
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Business Facebook
                  Page Setup
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Google map setup
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
            <h2 className="text-2xl font-semibold text-secondary">
              Digital Marketing Campaigns
            </h2>
          </div>

          <div className="mx-10 my-6 grid md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
            <div className="border rounded py-10 px-4 bg-base-100 shadow">
              <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="px-6 py-1.5 rounded bg-primary text-secondary uppercase">
                  Sliver
                </h2>

                <h2 className="text-2xl text-secondary">Only 7500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 20 Social Media
                  post
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 1 Logo Make
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 1 Facebook Cover
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 1 Motion Video
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 1 Creative Design
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Digital Marketing
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
                <h2 className="px-6 py-1.5 rounded bg-primary text-secondary uppercase">
                  Gold
                </h2>

                <h2 className="text-2xl text-secondary">Only 10500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 25 Social Media
                  post
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 1 Logo Make
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 2 Facebook Cover
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 2 Motion Video
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 2 Creative Design
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Digital Marketing
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
                <h2 className="px-6 py-1.5 rounded bg-primary text-secondary uppercase">
                  Diamond
                </h2>

                <h2 className="text-2xl text-secondary">Only 15500 TK</h2>
              </div>
              <ul className="mt-8 pl-10 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 30 Social Media
                  post
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 1 Logo Make
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 2 Facebook Cover
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 2 Motion Video
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> 2 Creative Design
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Digital Marketing
                  Consultancy
                </li>
                <li className="flex items-center gap-2">
                  <GiCheckMark className="text-secondary" /> Sales Consultancy
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
