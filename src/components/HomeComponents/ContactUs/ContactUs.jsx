import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiBuildingOffice2 } from "react-icons/hi2";

export default function ContactUs() {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral">
              Have Some Questions?
            </h2>
            <p className="text-neutral-content text-[15px] mt-1">
              Thank you for interest in our service. Please fil up the form
              below or call us.
            </p>

            <div className="mt-6 flex flex-col gap-1.5 text-neutral-content">
              <div className="flex gap-1 items-center">
                <p>
                  <FaPhone />
                </p>
                <p>01906-198021</p>
              </div>
              <div className="flex gap-1 items-center">
                <p>
                  <IoLogoWhatsapp />
                </p>
                <p>01906-198022</p>
              </div>
              <div className="flex gap-1 items-center">
                <p>
                  <MdEmail className="text-lg" />
                </p>
                <p>eManagerbd.xyz@gmail.com</p>
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
                <p>House:-517, Road:-10, Baridhara DOHS, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div>
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
