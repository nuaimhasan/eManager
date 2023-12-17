import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetWhyChooseByIdQuery,
  useUpdateWhyChooseMutation,
} from "../../../redux/api/WhyChooseApi";

import swal from "sweetalert2";

export default function EditChoose() {
  const [mainLogos, setMainLogos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetWhyChooseByIdQuery(id);
  const [updateWhyChoose, { isLoading: updateLoading }] =
    useUpdateWhyChooseMutation();

  useEffect(() => {
    if (!isLoading && data) {
      const { title, description } = data.data;
      setTitle(title);
      setDescription(description);
    }
  }, [data, isLoading]);

  if (isLoading) return <div>Loading...</div>;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const file = mainLogos[0]?.file;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);

    if (file) {
      formData.append("whyChoose", file);
    }

    try {
      const res = await updateWhyChoose({ id, formData });
      if (res?.data?.success) {
        setMainLogos([]);
        swal.fire({
          title: "",
          text: "Why Choose Updated Successfully!",
          icon: "success",
        });
        navigate("/admin/why-choose");
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
        <h1 className="font-medium text-neutral">Edit Choose</h1>
      </div>

      <div className="bg-base-100 rounded mt-2 p-3">
        <form className="md:w-1/2">
          <div>
            <p className="text-neutral-content mb-1">
              Icon <small>(120px/80px)</small>
            </p>
            <div className="sm:flex items-center gap-4">
              <ImageUploading
                defaultValue={mainLogos}
                onChange={(icn) => setMainLogos(icn)}
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
                        className="px-4 py-1.5 rounded-2xl text-base-100 bg-secondary cursor-pointer text-sm"
                      >
                        Choose Image
                      </span>

                      <p className="text-neutral-content">or Drop here</p>
                    </div>

                    <div className={`${mainLogos?.length > 0 && "mt-4"} `}>
                      {mainLogos?.map((img, index) => (
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
              {data?.data?.icon && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/whychoose/${
                    data?.data?.icon
                  }`}
                  alt=""
                  className="w-10 mt-4"
                />
              )}
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-1">Title</p>
            <input
              type="text"
              name="title"
              defaultValue={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <p className="mb-1">Description</p>
            <textarea
              name="description"
              defaultValue={description}
              required
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <button
              onClick={handleUpdate}
              type="submit"
              className="gradient-primary-btn"
              disabled={updateLoading && "disabled"}
            >
              {updateLoading ? "Loading..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
