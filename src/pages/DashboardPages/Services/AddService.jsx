import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import { useAddServiceMutation } from "../../../redux/api/serviceApi";
import { useNavigate } from "react-router-dom";

export default function AddService() {
  const editor = useRef(null);
  const [images, setImages] = useState([]);
  const [icons, setIcons] = useState([]);
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [order, setOrder] = useState(1);
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const [addService, { isSuccess, isLoading }] = useAddServiceMutation();

  const addServiceHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("shortDescription", shortDescription);
    formData.append("order", order);
    formData.append("image", images[0].file);
    formData.append("icon", icons[0].file);

    try {
      await addService(formData).unwrap();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "",
        text: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setDescription("");
      setShortDescription("");
      setTitle("");
      setOrder(1);
      setImages([]);
      setIcons([]);

      Swal.fire({
        icon: "success",
        title: "",
        text: "Service Added Successfully",
      });

      navigate("/admin/services/all-services");
    }
  }, [isSuccess, navigate]);

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <h1 className="font-medium text-neutral">Add Service</h1>
      </div>

      <div className="bg-base-100">
        <form onSubmit={addServiceHandler} className="p-4">
          <div className="text-neutral-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
            <div className="flex flex-col gap-3">
              <div>
                <p className="mb-1">Order</p>
                <input
                  type="number"
                  name="order"
                  defaultValue={order}
                  onChange={(e) => setOrder(e.target.value)}
                />
              </div>

              <div>
                <p className="mb-1">Icon</p>
                <div>
                  <ImageUploading
                    defaultValue={icons}
                    onChange={(icn) => setIcons(icn)}
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

                        <div className={`${icons?.length > 0 && "mt-4"} `}>
                          {icons?.map((img, index) => (
                            <div key={index} className="image-item relative">
                              <img
                                src={img["data_url"]}
                                alt=""
                                className="w-20 h-20"
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
                                className="w-20 h-20"
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

            <div className="md:col-span-2 flex flex-col gap-3">
              <div>
                <p className="mb-1">Service Title</p>
                <input
                  type="text"
                  name="serviceTitle"
                  defaultValue={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="">
                <p className="mb-1">Short Description</p>
                <textarea
                  name="shortDescription"
                  rows="3"
                  defaultValue={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div>
                <p className="mb-1">Description</p>
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
              {isLoading ? "Loading" : "Add Service"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
