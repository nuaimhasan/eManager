export default function Contact() {
  const handleUpdateContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const email = form.email.value;
    const address = form.address.value;
    const facebookLink = form.facebook.value;
    const instagramLink = form.instagram.value;
    const youtubeLink = form.youtube.value;
    const linkedinLink = form.linkedin.value;

    const contactInfo = {
      phone,
      email,
      address,
      facebookLink,
      instagramLink,
      youtubeLink,
      linkedinLink,
    };
    console.log(contactInfo);
  };

  return (
    <section className="bg-base-100 shadow rounded pb-4 min-h-[86vh]">
      <div className="p-4 border-b text-neutral font-medium">
        <h3>Contact Info</h3>
      </div>
      <form
        onSubmit={handleUpdateContact}
        className="p-4 form_group flex flex-col gap-3 md:mx-48 border rounded mt-3 text-sm"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-neutral-content">Phone</p>
            <input
              type="text"
              name="phone"
              //  defaultValue={data?.data?.phone}
            />
          </div>

          <div>
            <p className="text-neutral-content">Email</p>
            <input
              type="email"
              name="email"
              //  defaultValue={data?.data?.email}
            />
          </div>
        </div>

        <div>
          <p className="text-neutral-content">Address</p>
          <textarea
            name="address"
            rows="5"
            // defaultValue={data?.data?.address}
          ></textarea>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-neutral-content">Facebook Link</p>
            <input
              type="text"
              name="facebook"
              // defaultValue={data?.data?.facebookLink}
            />
          </div>

          <div>
            <p className="text-neutral-content">Instagram Link</p>
            <input
              type="text"
              name="instagram"
              // defaultValue={data?.data?.instagramLink}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <p className="text-neutral-content">Youtube Link</p>
            <input
              type="text"
              name="youtube"
              // defaultValue={data?.data?.youtubeLink}
            />
          </div>

          <div>
            <p className="text-neutral-content">Linkedin Link</p>
            <input
              type="text"
              name="linkedin"
              // defaultValue={data?.data?.linkedinLink}
            />
          </div>
        </div>

        <div className="flex justify-end">
          {/* <button
            disabled={updateLoading && "disabled"}
            className="gradient-primary-btn"
          >
            {updateLoading ? "Loading" : "Save"}
          </button> */}
          <button className="gradient-primary-btn">Save</button>
        </div>
      </form>
    </section>
  );
}
