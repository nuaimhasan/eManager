import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetBenefitByIdQuery,
  useUpdateBenefitMutation,
} from "../../../../redux/api/benefitsApi";

export default function EditBenefit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const { data, isLoading } = useGetBenefitByIdQuery(id);
  const [updateBenefit, { isLoading: updateLoading }] =
    useUpdateBenefitMutation();

  useEffect(() => {
    if (data?.data && !isLoading) {
      setDescription(data?.data?.description);
      setTitle(data?.data?.title);
    }
  }, [data, isLoading]);

  if (isLoading) return <h1>Loading...</h1>;

  const updateBlogHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("benefit", images[0]?.file);

    try {
      const res = await updateBenefit({ id, formData }).unwrap();
      if (res?.success) {
        setImages([]);

        Swal.fire({
          icon: "success",
          title: "",
          text: "Update benefit success",
        });

        navigate("/admin/career/benefits");
      }
    } catch (error) {
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
        <h3 className="font-medium text-neutral">Update Benefit</h3>
      </div>

      <form className="p-4">
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
              <p className="mb-1">Icon</p>
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
                    src={`${import.meta.env.VITE_BACKEND_URL}/benefit/${
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
              <textarea
                rows="4"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            disabled={updateLoading && "disabled"}
            className="gradient-primary-btn"
            onClick={updateBlogHandler}
          >
            {updateLoading ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </section>
  );
}
