import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useGetLogosQuery } from "../../redux/api/logoApi";
import "./Header.css";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();

  const { data, isLoading } = useGetLogosQuery();
  // const {data: menuData} = useGetMenusQuery();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.closest(".menu_wrap ul li a")) {
        setMobileMenu(false);
      }
    });
  }, []);

  let logo = data?.data[0]?.logo;

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
                  alt="emanager logo"
                  className="w-40 lg:w-44"
                />
              ) : (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/logo/${logo}`}
                  alt="emanager logo"
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
                  {pathname === "/" ? (
                    <a href="#services">Services</a>
                  ) : (
                    <NavLink to="/services">Services</NavLink>
                  )}
                </li>
                <li>
                  {pathname === "/" ? (
                    <a href="#about-us">About Us</a>
                  ) : (
                    <NavLink to="/about-us">About Us</NavLink>
                  )}
                </li>
                <li>
                  {pathname === "/" ? (
                    <a href="#contact-us">Contact Us</a>
                  ) : (
                    <NavLink to="/contact-us">Contact Us</NavLink>
                  )}
                </li>
                <li>
                  {pathname === "/" ? (
                    <a href="#our-team">Our Team</a>
                  ) : (
                    <NavLink to="/our-team">Our Team</NavLink>
                  )}
                </li>
                <li>
                  {pathname === "/" ? (
                    <a href="#blogs">Blogs</a>
                  ) : (
                    <NavLink to="/blogs">Blogs</NavLink>
                  )}
                </li>
                <li>
                  <a href="#clients">Clients</a>
                </li>
                <li>
                  <NavLink to="/campaigns">Campaigns</NavLink>
                </li>
                <li>
                  <NavLink to="/career">Career</NavLink>
                </li>
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
