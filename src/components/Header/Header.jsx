import { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="py-1 lg:py-0 sticky top-0 bg-[#ffffffcc] backdrop-blur-[10px] border-b z-50">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src="/images/logo/logo.png"
                alt="emanager logo"
                className="w-40 lg:w-44"
              />
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
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="/news-blogs">News & Blogs</a>
                </li>
                <li>
                  <a href="#clients">Clients</a>
                </li>
                <Link
                  to="https://api.whatsapp.com/send?phone=01913076103"
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
