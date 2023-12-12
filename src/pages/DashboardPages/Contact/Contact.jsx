import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  useGetContactUsQuery,
  useUpdateContactUsByIdMutation,
} from "../../../redux/api/contactUsApi";

export default function Contact() {
  const [updateContactUsById] = useUpdateContactUsByIdMutation();
  const { data, isLoading } = useGetContactUsQuery();
  // console.log(data.data[0]);

  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data && !isLoading) {
      const contactUs = data?.data[0];
      setPhone(contactUs.phone);
      setWhatsapp(contactUs.whatsapp);
      setEmail(contactUs.email);
      setAddress(contactUs.address);
      setFacebookLink(contactUs.facebookLink);
      setInstagramLink(contactUs.instagramLink);
      setYoutubeLink(contactUs.youtubeLink);
      setLinkedinLink(contactUs.linkedinLink);
      setTitle(contactUs.title);
      setDescription(contactUs.description);
    }
  }, [data, isLoading]);

  if (isLoading) return <div>Loading...</div>;

  const id = data?.data[0]?.id;

  const handleUpdateContact = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      phone,
      whatsapp,
      email,
      address,
      facebookLink,
      instagramLink,
      youtubeLink,
      linkedinLink,
    };

    const res = await updateContactUsById({ id, data }).unwrap();
    // console.log(res);
    if (res.success) {
      e.target.reset();
      Swal.fire(
        "Good job!",
        "Your form has been submitted successfully!",
        "success"
      );
    } else {
      Swal.fire("Oops!", "Something went wrong. Please try again.", "error");
    }
  };

  return (
    <section className="bg-base-100 shadow rounded pb-4 min-h-[86vh]">
      <div className="p-4 border-b text-neutral font-medium">
        <h3>Contact Info</h3>
      </div>
      <form onSubmit={handleUpdateContact} className="p-4 mt-3 text-sm">
        <div className="grid lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div>
              <p className="text-neutral-content">Title</p>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <p className="text-neutral-content">Description</p>
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-neutral-content">Phone</p>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <p className="text-neutral-content">Whatsapp</p>
                <input
                  type="text"
                  name="whatsapp"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>
            </div>

            <div>
              <p className="text-neutral-content">Email</p>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <p className="text-neutral-content">Address</p>
              <textarea
                name="address"
                rows="5"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-neutral-content">Facebook Link</p>
                <input
                  type="text"
                  name="facebook"
                  value={facebookLink}
                  onChange={(e) => setFacebookLink(e.target.value)}
                />
              </div>

              <div>
                <p className="text-neutral-content">Instagram Link</p>
                <input
                  type="text"
                  name="instagram"
                  value={instagramLink}
                  onChange={(e) => setInstagramLink(e.target.value)}
                />
              </div>

              <div>
                <p className="text-neutral-content">Youtube Link</p>
                <input
                  type="text"
                  name="youtube"
                  value={youtubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)}
                />
              </div>

              <div>
                <p className="text-neutral-content">Linkedin Link</p>
                <input
                  type="text"
                  name="linkedin"
                  value={linkedinLink}
                  onChange={(e) => setLinkedinLink(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          {/* <button
            disabled={updateLoading && "disabled"}
            className="gradient-primary-btn"
          >
            {updateLoading ? "Loading" : "Save"}
          </button> */}
          <button className="gradient-primary-btn">Save Contact</button>
        </div>
      </form>
    </section>
  );
}
