import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import swal from "sweetalert2";
import { useCreateCounterMutation } from "../../../redux/api/CounterApi";
import { useNavigate } from "react-router-dom";

export default function AddNewCounter() {
  const [mainLogos, setMainLogos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [createCounter, { isLoading }] = useCreateCounterMutation();

  const creteNewCounter = async (e) => {
    e.preventDefault();
    const file = mainLogos[0]?.file;

    if (!file || !title || !description)
      return swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
      });

    const formData = new FormData();
    formData.append("icon", file);
    formData.append("title", title);
    formData.append("description", description);

    try {
      const res = await createCounter(formData).unwrap();

      if (res?.success) {
        setMainLogos([]);
        setTitle("");
        setDescription("");

        swal.fire({
          icon: "success",
          title: "",
          text: "Counter Added Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/counter");
      }
    } catch (error) {
      swal.fire({
        icon: "error",
        title: "",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <h1 className="font-medium text-neutral">Add New Counter</h1>
      </div>

      <div className="bg-base-100 rounded mt-2 p-3">
        <form className="md:w-1/2">
          <div>
            <p className="text-neutral-content mb-1">
              Icon <small>(100px/100px)</small>
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
              rows="5"
              defaultValue={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-5">
            <button
              onClick={creteNewCounter}
              type="submit"
              className="gradient-primary-btn"
              disabled={isLoading && "disabled"}
            >
              {isLoading ? "Loading..." : "Add Counter"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
