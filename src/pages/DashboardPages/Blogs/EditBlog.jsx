import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} from "../../../redux/api/blogApi";
import Spinner from "../../../components/Spinner/Spinner";

export default function EditBlog() {
  const { id } = useParams();
  const { data, isLoading } = useGetBlogByIdQuery(id);
  const [updateBlog, { isLoading: updateLoading }] = useUpdateBlogMutation();

  const editor = useRef(null);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (data?.data && !isLoading) {
      setDescription(data?.data?.description);
      setTitle(data?.data?.title);
    }
  }, [data, isLoading]);

  if (isLoading) return <Spinner />;

  const updateBlogHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("blog", images[0]?.file);

    try {
      const res = await updateBlog({ id, formData }).unwrap();
      if (res.success) {
        setImages([]);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: res.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Update Blog</h3>
      </div>

      <form onSubmit={updateBlogHandler} className="p-4">
        <div className="text-neutral-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
          <div className="flex flex-col gap-3">
            <div>
              <p className="mb-1">Title</p>
              <input
                type="text"
                name="title"
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

                {data?.data?.image && (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/blogs/${
                      data?.data?.image
                    }`}
                    alt=""
                    className="w-32 mt-4"
                  />
                )}
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
            disabled={updateLoading && "disabled"}
            className="gradient-primary-btn"
          >
            {updateLoading ? "Loading" : "Update Blog"}
          </button>
        </div>
      </form>
    </section>
  );
}
