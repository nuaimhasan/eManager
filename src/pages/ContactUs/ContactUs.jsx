import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { useGetContactUsByIdQuery } from "../../redux/api/contactUsApi";

export default function ContactUs() {
  
  const {data, isLoading} = useGetContactUsByIdQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const contactus = data?.data;
  const {
    title,
    description,
    phone,
    whatsapp,
    email,
    address,
  } = contactus;

  window.scroll(0, 0);
  return (
    <section className="py-10 lg:py-20" id="contact-us">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral">
              {title}
            </h2>
            <p className="text-neutral-content text-[15px] mt-1">
              {description}
            </p>

            <div className="mt-6 flex flex-col gap-1.5 text-neutral-content">
              <div className="flex gap-1 items-center">
                <p>
                  <FaPhone />
                </p>
                <p>{phone}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p>
                  <IoLogoWhatsapp />
                </p>
                <p>{whatsapp}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p>
                  <MdEmail className="text-lg" />
                </p>
                <p>{email}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p>
                  <FaLocationDot />
                </p>
                <p>80, Shahjalal Complex, Circular Road, Malibagh Dhaka</p>
              </div>
              <div className="flex gap-1 items-center">
                <p>
                  <HiBuildingOffice2 className="text-lg" />
                </p>
                <p>{address}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-secondary font-semibold text-xl mb-3">
              Get In Touch
            </h2>
            <form className="flex flex-col gap-3">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border rounded px-4 py-2 outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border rounded px-4 py-2 outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full border rounded px-4 py-2 outline-none"
                />
              </div>
              <div>
                <textarea
                  name=""
                  rows="5"
                  placeholder="Type you message..."
                  className="w-full border rounded px-4 py-2 outline-none"
                ></textarea>
              </div>

              <div>
                <button className="gradient-primary-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
