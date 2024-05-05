import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { useGetContactUsQuery } from "../../redux/api/contactUsApi";

export default function TopHeader() {
  const { data } = useGetContactUsQuery();

  const contactUs = data?.data[0];

  return (
    <div className="hidden sm:block py-1 top_header">
      <div className="container">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2.5">
            <Link to={contactUs?.facebookLink} target="_blank">
              <FaFacebookF className="h-3.5 hover:text-secondary duration-300" />
            </Link>
            <Link to={contactUs?.youtubeLink} target="_blank">
              <AiOutlineYoutube className="text-[17px] hover:text-secondary duration-300" />
            </Link>
            <Link to={contactUs?.linkedinLink} target="_blank">
              <FaLinkedinIn className="text-[15px] hover:text-secondary duration-300" />
            </Link>
            <Link
              to={`https://api.whatsapp.com/send?phone=${contactUs?.whatsapp}`}
              target="_blank"
            >
              <FaWhatsapp className="text-[17px] hover:text-secondary duration-300" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="mailto:emanagerit@gmail.com"
              target="_blank"
              className="flex items-center gap-1"
            >
              <MdOutlineEmail className="text-base" /> {contactUs?.email}
            </Link>
            <Link
              to="tel:01904-099871"
              target="_blank"
              className="flex items-center gap-1"
            >
              <BsTelephoneInbound />
              {contactUs?.phone}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
