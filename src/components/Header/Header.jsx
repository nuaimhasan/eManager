import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useGetLogosQuery } from "../../redux/api/logoApi";
import "./Header.css";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);

  const { data, isLoading } = useGetLogosQuery();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.closest(".menu_wrap ul li a")) {
        setMobileMenu(false);
      }
    });
  }, []);
  let logo = data?.data[0]?.logo;

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".more_btn")) {
        setMoreDropdown(false);
      }
    });
  }, []);

  return (
    <>
      <header className="py-1 lg:py-0 sticky top-0 bg-[#ffffffcc] backdrop-blur-[10px] border-b z-50">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="min-w-[200px]"
            >
              {isLoading ? (
                <img
                  src="/images/logo/logo.png"
                  alt="emanager IT logo"
                  className="w-40 lg:w-44"
                />
              ) : (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/logo/${logo}`}
                  alt="emanager IT logo"
                  className="w-40 lg:w-44"
                />
              )}
            </Link>

            <nav className="menu_wrap flex items-center gap-4">
              <button
                onClick={() => setMobileMenu(false)}
                className={`menu_overlay ${mobileMenu && "menu_overlay_show"}`}
              ></button>
              <ul className={`${mobileMenu && "show"}`}>
                <li>
                  <NavLink
                    to="/"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us">Contact Us</NavLink>
                </li>

                <li>
                  <NavLink to="/campaigns">Campaigns</NavLink>
                </li>

                <li>
                  <NavLink to="/demo">Demo</NavLink>
                </li>

                <li className="relative">
                  <button
                    onClick={() => setMoreDropdown(!moreDropdown)}
                    className="flex items-center gap-[2px] pr-2 pl-2 lg:pl-0 more_btn text-neutral"
                  >
                    More <MdArrowDropDown className="text-lg" />
                  </button>

                  <nav
                    className={`dropdown lg:shadow ${
                      moreDropdown && "dropdown_show"
                    }`}
                  >
                    <ul>
                      <li>
                        <NavLink to="/our-team">Our Team</NavLink>
                      </li>
                      <li>
                        <NavLink to="/clients">Clients</NavLink>
                      </li>
                      <li>
                        <NavLink to="/career">Career</NavLink>
                      </li>
                    </ul>
                  </nav>
                </li>
                <div className="mb-2 lg:hidden"></div>
                <Link
                  to="https://api.whatsapp.com/send?phone=8801906198022"
                  target="_blank"
                  className="gradient-primary-btn flex items-center gap-1 text-sm"
                >
                  <FaWhatsapp /> Whatsapp
                </Link>
              </ul>

              <button onClick={() => setMobileMenu(true)} className="lg:hidden">
                <RiMenu3Fill className="text-xl sm:text-2xl" />
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
