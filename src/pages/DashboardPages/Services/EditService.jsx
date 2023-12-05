import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";

export default function EditService() {
  const editor = useRef(null);
  const [images, setImages] = useState([]);
  const [details, setDetails] = useState("");
  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <h1 className="font-medium text-neutral">Add Service</h1>
      </div>

      <div className="bg-base-100">
        <form className="p-4">
          <div className="text-neutral-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
            <div className="flex flex-col gap-3">
              <div>
                <p className="mb-1">Order</p>
                <input type="number" name="order" />
              </div>
              <div>
                <p className="mb-1">Icon</p>
                <div>
                  <ImageUploading
                    value={images}
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

              <div>
                <p className="mb-1">Image</p>
                <div>
                  <ImageUploading
                    value={images}
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

                  {/* {data?.data?.image && (
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/about/${
                      data?.data?.image
                    }`}
                    alt=""
                    className="w-32 mt-4"
                  />
                )} */}
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-3">
              <div>
                <p className="mb-1">Service Title</p>
                <input type="text" name="serviceTitle" />
              </div>
              <div>
                <p className="mb-1">Description</p>
                <JoditEditor
                  ref={editor}
                  value={details}
                  // value={
                  //   data?.data?.description?.length > 0
                  //     ? data?.data?.description
                  //     : details
                  // }
                  onBlur={(text) => setDetails(text)}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            {/* <button
            disabled={updateLoading && "disabled"}
            className="gradient-primary-btn"
          >
            {updateLoading ? "Loading" : "Save"}
          </button> */}
            <button className="gradient-primary-btn">Add Service</button>
          </div>
        </form>
      </div>
    </section>
  );
}
