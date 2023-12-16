import { useState } from "react";

import swal from "sweetalert2";
import {
  useAddCareerBannerMutation,
  useGetCareerBannerQuery,
  useUpdateCareerBannerByIdMutation,
} from "../../../redux/api/careerBannerApi";

export default function CareerBanner() {
  const { data, isLoading } = useGetCareerBannerQuery();
  const [updateCareerBannerById, { isLoading: updateLoading }] =
    useUpdateCareerBannerByIdMutation();
  const [addCareerBanner, { isLoading: addLoading }] =
    useAddCareerBannerMutation();

  const [edit, setEdit] = useState(false);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const id = data?.data[0]?._id;
  const careerBanner = data?.data[0];

  const handleEditBanner = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    if (title === "" || description === "") {
      return swal.fire({
        title: "",
        text: "Please fill all the fields",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    const body = {
      title,
      description,
    };

    if (id) {
      try {
        const res = await updateCareerBannerById({ id, body }).unwrap();
        if (res?.success) {
          setEdit(false);
          return swal.fire({
            title: "",
            text: "Banner updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      } catch (error) {
        swal.fire({
          title: "",
          text: error.data.error,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } else {
      try {
        const res = await addCareerBanner(body);

        if (res?.success) {
          setEdit(false);
          return swal.fire({
            title: "",
            text: "Banner added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          return swal.fire({
            title: "",
            text: "Something went wrong",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      } catch (error) {
        swal.fire({
          title: "",
          text: error?.data?.error,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
  };

  return (
    <section className="bg-base-100 shadow rounded">
      <div className="p-4 border-b text-neutral font-medium flex justify-between items-center">
        <h3>Career Banner Setting</h3>
      </div>

      <form onSubmit={handleEditBanner} className="p-4">
        <div>
          <p className="font-medium mb-1">Title*</p>
          <input
            type="text"
            name="title"
            defaultValue={careerBanner?.title}
            disabled={!edit && "disabled"}
            required
          />
        </div>
        <div className="mt-3">
          <p className="font-medium mb-1">Description*</p>
          <textarea
            name="description"
            rows="3"
            defaultValue={careerBanner?.description}
            disabled={!edit && "disabled"}
            required
          ></textarea>
        </div>

        <div className="mt-4">
          {edit ? (
            <div className="flex gap-2">
              <button className="gradient-primary-btn">
                {updateLoading || addLoading
                  ? "Loading..."
                  : id
                  ? "Update"
                  : "Add"}
              </button>
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
              Edit
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
