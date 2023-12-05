import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";

export default function ServiceBanner() {
  const [images, setImages] = useState([]);

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Service Banner Setting</h3>
      </div>

      <form className="p-4">
        <div className="text-neutral-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
          <div>
            <p className="mb-1">Background Image</p>
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

          <div className="md:col-span-2 rounded flex flex-col gap-3">
            <div>
              <p className="mb-1">Title</p>
              <input type="text" name="title" required />
            </div>
            <div>
              <p className="mb-1">Sub Title</p>
              <input type="text" name="subTitle" />
            </div>
            <div>
              <p className="mb-1">Description</p>
              <textarea
                name="description"
                rows="3"
                defaultValue=""
                required
              ></textarea>
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
          <button className="gradient-primary-btn">Save</button>
        </div>
      </form>
    </section>
  );
}
