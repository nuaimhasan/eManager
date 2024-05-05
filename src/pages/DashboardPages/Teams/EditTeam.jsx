import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert2";
import {
  useGetTeamByIdQuery,
  useUpdateTeamMutation,
} from "../../../redux/api/teamApi";
import Spinner from "../../../components/Spinner/Spinner";

export default function EditTeam() {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const { data, isLoading } = useGetTeamByIdQuery(id);
  const [updateTeam, { isLoading: updateLoading }] = useUpdateTeamMutation();
  const navigate = useNavigate();
  if (isLoading) {
    return <Spinner />;
  }

  console.log(id, data?.data);

  const handleEditTeam = async (e) => {
    e.preventDefault();
    const file = images[0]?.file;
    const order = e.target.order.value;
    const name = e.target.name.value;
    const designation = e.target.designation.value;

    const formData = new FormData();
    formData.append("order", order);
    formData.append("name", name);
    formData.append("designation", designation);
    if (file) {
      formData.append("image", file);
    }

    try {
      const result = await updateTeam({ id, formData });
      if (result?.data?.success) {
        swal.fire({
          title: "",
          text: "Updated Successfully!",
          icon: "success",
        });
        navigate("/admin/teams/all-teams");
      }
    } catch (error) {
      swal.fire({
        title: "",
        text: "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <h1 className="font-medium text-neutral">Edit Team Member</h1>
      </div>

      <div className="bg-base-100 rounded mt-2 p-3">
        <form className="md:w-1/2" onSubmit={handleEditTeam}>
          <div>
            <p className="text-neutral-content mb-1">
              Image <small>(120px/120px)</small>
            </p>
            <div className="sm:flex items-center gap-4">
              <ImageUploading
                defaultValue={images}
                onChange={(img) => setImages(img)}
                dataURLKey="data_url"
              >
                {({ onImageUpload, onImageRemove, dragProps }) => (
                  <div
                    className="border rounded border-dashed p-4 w-max flex gap-4"
                    {...dragProps}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        onClick={onImageUpload}
                        className="px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm"
                      >
                        Choose Image
                      </span>

                      <p className="text-neutral-content">or Drop here</p>
                    </div>

                    <div className={`${images?.length > 0 && "mt-4"} `}>
                      {images?.map((img, index) => (
                        <div key={index} className="image-item relative">
                          <img
                            src={img["data_url"]}
                            alt=""
                            className="w-16 h-16"
                          />
                          <div
                            onClick={() => onImageRemove(index)}
                            className="w-7 h-7 bg-primary rounded-full flex justify-center items-center text-base-100 absolute top-0 right-0 cursor-pointer"
                          >
                            <AiFillDelete />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ImageUploading>

              {data?.data?.image && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/team/${
                    data?.data?.image
                  }`}
                  alt=""
                  className="w-16 border rounded bg-gray-50"
                />
              )}
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-1">Order</p>
            <input
              type="text"
              name="order"
              defaultValue={data?.data?.order}
              required
            />
          </div>

          <div className="mt-4">
            <p className="mb-1">Name</p>
            <input
              type="text"
              name="name"
              defaultValue={data?.data?.name}
              required
            />
          </div>

          <div className="mt-4">
            <p className="mb-1">Designation</p>
            <textarea
              name="designation"
              rows="2"
              defaultValue={data?.data?.designation}
              required
            ></textarea>
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="gradient-primary-btn"
              disabled={updateLoading && "disabled"}
            >
              {updateLoading ? "Loading..." : "Edit Team"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
