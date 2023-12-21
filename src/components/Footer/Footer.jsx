import "./Footer.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { useGetAllServicesQuery } from "../../redux/api/serviceApi";
import { useGetContactUsQuery } from "../../redux/api/contactUsApi";

export default function Footer() {
  const { data: serviceData } = useGetAllServicesQuery();
  const { data: contactUsData } = useGetContactUsQuery();

  const services = serviceData?.data;
  const contactUs = contactUsData?.data[0];
  // console.log(contactUs);

  return (
    <footer className="pt-10 pb-5 font-extralight">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="w-max">
              <Link to="/">
                <img
                  src="/images/logo/logo-light.png"
                  className="w-48"
                  alt="Logo"
                />
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
            <h2 className="mb-3 text-base font-semibold uppercase">
              Popular Services
            </h2>
            <ul className="text-sm flex flex-col gap-1">
              {services?.slice(0, 8).map((service) => (
                <li key={service?.id}>
                  <Link
                    to={`/service/${service?.slug}`}
                    className="hover:underline"
                  >
                    {service?.title}
                  </Link>
                </li>
              ))}
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
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/career" className="hover:underline">
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
                  Return Policy
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
                <p>{contactUs?.address}</p>
              </li>
              <li className="mb-1">
                <p>{contactUs?.phone}</p>
              </li>
              <li>
                <p>{contactUs?.email}</p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto" />

        <div className="sm:flex sm:items-center sm:justify-between opacity-80">
          <span className="text-sm">
            © 2017 - 2023 <span className="text-primary">eManager</span>. All
            Rights Reserved.
          </span>
          <ul className="flex items-center gap-2 mt-3 sm:mt-0">
            <li>
              <Link to={contactUs?.facebookLink} target="_blank">
                <BsFacebook className="text-lg hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link
                to={`https://api.whatsapp.com/send?phone=${contactUs?.whatsapp}`}
                target="_blank"
              >
                <IoLogoWhatsapp className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link to={contactUs?.instagramLink}>
                <AiFillInstagram className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
            <li>
              <Link to={contactUs?.youtubeLink}>
                <BsYoutube className="text-xl hover:-mt-2 duration-300" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
