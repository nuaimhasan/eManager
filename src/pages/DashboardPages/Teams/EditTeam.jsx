import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function EditTeam() {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  const handleEditTeam = async (e) => {
    e.preventDefault();
    const file = images[0]?.file;

    if (!file || !name || !designation)
      return Swal.fire({
        icon: "error",
        title: "",
        text: "Please fill all the fields!",
      });

    const formData = new FormData();
    formData.append("icon", file);
    formData.append("name", name);
    formData.append("designation", designation);
  };
  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <h1 className="font-medium text-neutral">Edit Team Member</h1>
      </div>

      <div className="bg-base-100 rounded mt-2 p-3">
        <form className="md:w-1/2">
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
                        className="px-4 py-1.5 rounded-2xl text-base-100 bg-secondary cursor-pointer text-sm"
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

              {/* {data?.success && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/counter/${
                    data?.data?.icon
                  }`}
                  alt=""
                  className="w-16"
                />
              )} */}
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-1">Name</p>
            <input
              type="text"
              name="name"
              defaultValue={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <p className="mb-1">Designation</p>
            <textarea
              name="designation"
              rows="5"
              defaultValue={designation}
              required
              onChange={(e) => setDesignation(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-5">
            {/* <button
                onClick={handleEditTeam}
                type="submit"
                className="gradient-primary-btn"
                disabled={isLoading && "disabled"}
              >
                {isLoading ? "Loading..." : "Edit Team"}
              </button> */}
          </div>
        </form>
      </div>
    </section>
  );
}
