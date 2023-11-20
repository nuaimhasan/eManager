import { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className="py-1 lg:py-0 sticky top-0 bg-[#ffffffcc] backdrop-blur-[10px] border-b z-50">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                src="/public/images/logo/logo.png"
                alt="emanager logo"
                className="w-32 sm:w-40 lg:w-44"
              />
            </Link>

            <nav className="menu_wrap flex items-center gap-4">
              <button
                onClick={() => setMobileMenu(false)}
                className={`menu_overlay ${mobileMenu && "menu_overlay_show"}`}
              ></button>
              <ul className={`${mobileMenu && "show"}`}>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <Link to="#services">Services</Link>
                </li>
                <li>
                  <Link to="#team">Our Team</Link>
                </li>
                <li>
                  <Link to="#client">Client</Link>
                </li>
                <li>
                  <Link to="#about-us">About Us</Link>
                </li>
                <li>
                  <Link to="#contact-us">Contact Us</Link>
                </li>

                <li className="gradient-primary-btn flex items-center gap-2">
                  Pricing <IoMdArrowDropdown />
                </li>
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
