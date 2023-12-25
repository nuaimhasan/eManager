import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import { useGetContactUsQuery } from "../../redux/api/contactUsApi";
import { useSendMessageMutation } from "../../redux/api/sendMessageApi";
import Spinner from "../../components/Spinner/Spinner";

export default function ContactUs() {
  window.scroll(0, 0);

  const [sendMessage] = useSendMessageMutation();
  const { data, isLoading } = useGetContactUsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  const contactus = data?.data[0];

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
          title: "",
          text: "Thank you for contact us, We will contact you soon",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "",
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
              {contactus?.title}
            </h2>
            <p className="text-neutral-content text-[15px] mt-1">
              {contactus?.description}
            </p>

            <div className="mt-6 flex flex-col gap-1.5 text-neutral-content">
              <div className="flex gap-1 items-center">
                <p>
                  <FaPhone />
                </p>
                <p>{contactus?.phone}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p>
                  <IoLogoWhatsapp />
                </p>
                <p>{contactus?.whatsapp}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p>
                  <MdEmail className="text-lg" />
                </p>
                <p>{contactus?.email}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p>
                  <FaLocationDot className="text-lg" />
                </p>
                <p>{contactus?.address}</p>
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
