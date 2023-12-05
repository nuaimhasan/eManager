import { useState } from "react";

export default function Banner() {
  const [edit, setEdit] = useState(false);

  const handleEditBanner = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;

    if (title === "" || description === "") {
      return alert("dont empty");
    }

    const banner = {
      title,
      description,
    };

    console.log(banner);
  };

  return (
    <section className="bg-base-100 shadow rounded">
      <div className="p-4 border-b text-neutral font-medium flex justify-between items-center">
        <h3>Banner Setting</h3>
      </div>

      <form onSubmit={handleEditBanner} className="p-4">
        <div>
          <p className="font-medium mb-1">Title*</p>
          <input
            type="text"
            name="title"
            defaultValue="We are Hungry to take on your Challenge & Manage your business Like
            a Pro"
            disabled={!edit && "disabled"}
            required
          />
        </div>
        <div className="mt-3">
          <p className="font-medium mb-1">Description*</p>
          <textarea
            name="description"
            rows="3"
            defaultValue="In the digital age, your website is often the first point of contact with your audience.Our web development team specializes in creating stunning, responsive, and user-friendly websites that leave a
            lasting impression."
            disabled={!edit && "disabled"}
            required
          ></textarea>
        </div>

        <div className="mt-4">
          {edit ? (
            <div className="flex gap-2">
              <button className="gradient-primary-btn">Update Banner</button>
              <div
                onClick={() => setEdit(false)}
                className="bg-primary cursor-pointer w-max px-6 rounded flex justify-center items-center"
              >
                Cancel
              </div>
            </div>
          ) : (
            <div
              onClick={() => setEdit(true)}
              className="gradient-primary-btn cursor-pointer w-max"
            >
              Edit Banner
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
