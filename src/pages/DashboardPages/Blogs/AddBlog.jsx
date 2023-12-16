import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import { useAddBlogMutation } from "../../../redux/api/blogApi";
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  const editor = useRef(null);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const [addBlog, { isLoading }] = useAddBlogMutation();

  const handleAddBlog = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (!images[0]?.file) {
      return Swal.fire({
        icon: "error",
        title: "",
        text: "Please provide blog image",
      });
    }
    formData.append("image", images[0]?.file);

    try {
      const res = await addBlog(formData).unwrap();
      if (res?.success) {
        setTitle("");
        setDescription("");
        setImages([]);

        Swal.fire({
          icon: "success",
          title: "",
          text: "Blog add Success",
        });

        navigate("/admin/blogs/all-blogs");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Add Blogs</h3>
      </div>

      <form onSubmit={handleAddBlog} className="p-4">
        <div className="text-neutral-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
          <div className="flex flex-col gap-3">
            <div>
              <p className="mb-1">Title</p>
              <input
                type="text"
                name="title"
                required
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <p className="mb-1">Image</p>
              <div>
                <ImageUploading
                  defaultValue={images}
                  onChange={(icn) => setImages(icn)}
                  dataURLKey="data_url"
                >
                  {({ onImageUpload, onImageRemove, dragProps }) => (
                    <div
                      className="border rounded border-dashed p-4"
                      {...dragProps}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          onClick={onImageUpload}
                          className="w-max px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm"
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
                              className="w-32 h-20"
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
          </div>

          <div className="md:col-span-2 border rounded">
            <p className="border-b p-3">Description</p>

            <div className="p-4 about_details">
              <JoditEditor
                ref={editor}
                value={description}
                onBlur={(text) => setDescription(text)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            disabled={isLoading && "disabled"}
            className="gradient-primary-btn"
          >
            {isLoading ? "Loading" : "Add Blog"}
          </button>
        </div>
      </form>
    </section>
  );
}
