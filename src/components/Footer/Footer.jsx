import "./Footer.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="pt-10 pb-5 font-extralight">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="w-max">
              <Link to="/">
                <img src="/images/logo/logo.png" className="w-48" alt="Logo" />
              </Link>
            </div>
            <div className="mt-2 text-sm">
              <p>
                If you have the Commitment and Desire to develop your eCommerce
                business we have the experience and expertise to make it
                success!
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-base font-semibold uppercase">Services</h2>
            <ul className="text-sm flex flex-col gap-1">
              <li>
                <Link to="/" className="hover:underline">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Embedded System
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Content & Research
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  eCom Automation
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  SEO
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Graphics Design
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Videography Solution
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Training Program
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Domain & Hosting
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-semibold uppercase">
              Quick Link
            </h2>
            <ul className="text-sm flex flex-col gap-1">
              <li>
                <Link to="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/about-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/about-us" className="hover:underline">
                  Career
                </Link>
              </li>

              <li>
                <Link to="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-semibold uppercase">
              Get in Touch
            </h2>
            <ul className="text-sm">
              <li className="mb-1">
                <p>80, Shahjalal Complex, Circular Road, Malibagh Dhaka</p>
              </li>
              <li className="mb-1">
                <p>01906-198021</p>
              </li>
              <li>
                <p>eManagerbd.xyz@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto" />

        <div className="sm:flex sm:items-center sm:justify-between opacity-80">
          <span className="text-sm">
            © 2012 - 2023 <span className="text-primary">eManager</span>. All
            Rights Reserved.
          </span>
          <ul className="flex items-center gap-2 mt-3 sm:mt-0">
            <li>
              <Link to="" target="_blank">
                <BsFacebook className="text-lg hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link to="" target="_blank">
                <IoLogoWhatsapp className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link to="">
                <AiFillInstagram className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link to="">
                <BsYoutube className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
