import { useEffect, useState } from "react";
import { useGetBannerByIdQuery, useUpdateBannerByIdMutation } from "../../../redux/api/bannerApi";

import swal from 'sweetalert2'

export default function Banner() {
  const { data, isLoading } = useGetBannerByIdQuery();
  const [updateBannerById] = useUpdateBannerByIdMutation();

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data && !isLoading) {
      setTitle(data?.data?.title);
      setDescription(data?.data?.description);
    }
  }, [data, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleEditBanner =async (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      return alert("dont empty");
    }

    const banner = {
      title,
      description,
    };

    const res = await updateBannerById({...banner});
    if (res?.data?.success === true) {
      swal.fire({
        title: 'Success',
        text: res?.data?.message,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      setEdit(false);
    } else {
      swal.fire({
        title: 'Error',
        text: res?.data?.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
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
            value={title}
            disabled={!edit && "disabled"}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <p className="font-medium mb-1">Description*</p>
          <textarea
            name="description"
            rows="3"
            value={description}
            disabled={!edit && "disabled"}
            required
            onChange={(e) => setDescription(e.target.value)}
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
