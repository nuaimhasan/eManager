import Swal from "sweetalert2";
import {
  useAddContactUsMutation,
  useGetContactUsQuery,
  useUpdateContactUsByIdMutation,
} from "../../../redux/api/contactUsApi";

export default function Contact() {
  const [updateContactUsById, { isLoading: updateContactLoading }] =
    useUpdateContactUsByIdMutation();
  const { data, isLoading } = useGetContactUsQuery();
  const [addContactUs, { isLoading: addContactLoading }] =
    useAddContactUsMutation();
  // console.log(data.data[0]);

  if (isLoading) return <div>Loading...</div>;

  const id = data?.data[0]?.id;
  const contactUs = data?.data[0];
  // console.log(data?.data[0]);

  const handleUpdateContact = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const phone = e.target.phone.value;
    const whatsapp = e.target.whatsapp.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const facebookLink = e.target.facebook.value;
    const instagramLink = e.target.instagram.value;
    const youtubeLink = e.target.youtube.value;
    const linkedinLink = e.target.linkedin.value;

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
    console.log(data);

    if (!id) {
      try {
        const res = await addContactUs(data).unwrap();
        // console.log("add", res);
        if (res?.success) {
          e.target.reset();
          Swal.fire("", "Contact Us has been added successfully!", "success");
        }
      } catch (error) {
        Swal.fire("", `${error.data.error}`, "error");
      }
    } else {
      try {
        const res = await updateContactUsById({ id, data }).unwrap();
        if (res?.success) {
          Swal.fire("", "Contact Us has been updated successfully!", "success");
        }
      } catch (error) {
        // console.log(error);
        Swal.fire("", `${error.data.error}`, "error");
      }
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
              <input type="text" name="title" defaultValue={contactUs?.title} />
            </div>
            <div>
              <p className="text-neutral-content">Description</p>
              <input
                type="text"
                name="description"
                defaultValue={contactUs?.description}
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
                  defaultValue={contactUs?.phone}
                />
              </div>

              <div>
                <p className="text-neutral-content">Whatsapp</p>
                <input
                  type="text"
                  name="whatsapp"
                  defaultValue={contactUs?.whatsapp}
                />
              </div>
            </div>

            <div>
              <p className="text-neutral-content">Email</p>
              <input
                type="email"
                name="email"
                defaultValue={contactUs?.email}
              />
            </div>

            <div>
              <p className="text-neutral-content">Address</p>
              <textarea
                name="address"
                rows="5"
                defaultValue={contactUs?.address}
              ></textarea>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-neutral-content">Facebook Link</p>
                <input
                  type="text"
                  name="facebook"
                  defaultValue={contactUs?.facebookLink}
                />
              </div>

              <div>
                <p className="text-neutral-content">Instagram Link</p>
                <input
                  type="text"
                  name="instagram"
                  defaultValue={contactUs?.instagramLink}
                />
              </div>

              <div>
                <p className="text-neutral-content">Youtube Link</p>
                <input
                  type="text"
                  name="youtube"
                  defaultValue={contactUs?.youtubeLink}
                />
              </div>

              <div>
                <p className="text-neutral-content">Linkedin Link</p>
                <input
                  type="text"
                  name="linkedin"
                  defaultValue={contactUs?.linkedinLink}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button
            disabled={(updateContactLoading || addContactLoading) && "disabled"}
            className="gradient-primary-btn"
            type="submit"
          >
            {updateContactLoading || addContactLoading
              ? "Loading..."
              : id
              ? "Update Contact"
              : "Add Contact"}
          </button>
        </div>
      </form>
    </section>
  );
}
