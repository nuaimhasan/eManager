import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephoneInbound, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

export default function TopHeader() {
  return (
    <div className="hidden sm:block bg-primary text-secondary py-1">
      <div className="container">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2.5">
            <Link to="https://www.facebook.com/eManagerbd.xyz/" target="_blank">
              <FaFacebookF className="h-3.5" />
            </Link>
            <Link to="" target="_blank">
              <AiOutlineTwitter className="text-[17px]" />
            </Link>
            <Link to="" target="_blank">
              <FaLinkedinIn className="text-[15px]" />
            </Link>
            <Link
              to="https://www.instagram.com/emanagerbd.xyz/"
              target="_blank"
            >
              <BsInstagram className="text-sm" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="mailto:eManagerbd.xyz@gmail.com"
              target="_blank"
              className="flex items-center gap-1"
            >
              <MdOutlineEmail className="text-base" /> eManagerbd.xyz@gmail.com
            </Link>
            <Link
              to="tel:01904-099871"
              target="_blank"
              className="flex items-center gap-1"
            >
              <BsTelephoneInbound /> 01904-099871
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
