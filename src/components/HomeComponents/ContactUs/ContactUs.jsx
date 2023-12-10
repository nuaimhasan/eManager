import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import { useSendMessageMutation } from "../../../redux/api/sendMessageApi";

export default function ContactUs() {
  const [sendMessage] = useSendMessageMutation();

  const sendMessasgeHandler = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const email = e.target.email.value;

    if (!name || !phone || !subject || !message || !email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill up all the fields!",
      });
      return;
    }

    const data = {
      name,
      phone,
      subject,
      message,
      email,
    };

    try {
      const res = await sendMessage(data).unwrap();
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "We will contact you soon",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section className="py-10 lg:py-20" id="contact-us">
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
            </div>
          </div>

          <div>
            <h2 className="text-secondary font-semibold text-xl mb-3">
              Get In Touch
            </h2>
            <form
              onSubmit={sendMessasgeHandler}
              className="flex flex-col gap-3"
            >
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
                  type="email"
                  name="email"
                  placeholder="Your Email"
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
                  name="message"
                  rows="5"
                  placeholder="Type you message..."
                  className="w-full border rounded px-4 py-2 outline-none"
                ></textarea>
              </div>

              <div>
                <button type="submit" className="gradient-primary-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
