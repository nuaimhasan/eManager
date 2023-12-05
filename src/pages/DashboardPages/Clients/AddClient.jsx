import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";

export default function AddClient() {
  const [logos, setLogos] = useState([]);

  const handleAddClient = () => {
    let logo = logos[0]?.file;

    if (!logo) {
      return Swal.fire("", "Logo is Recuired", "error");
    }

    const formData = new FormData();
    formData.append("logo", logo);
  };

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <h1 className="font-medium text-neutral">Add Client</h1>
      </div>

      <div className="mt-2 bg-base-100 rounded md:w-1/2">
        <div>
          <p className="text-neutral-content border-b p-3">Client Logo</p>
          <div className="p-4 sm:flex items-center gap-4">
            <ImageUploading
              value={logos}
              onChange={(icn) => setLogos(icn)}
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
                      className="px-4 py-1.5 rounded-2xl text-base-100 bg-secondary cursor-pointer text-sm"
                    >
                      Choose Image
                    </span>

                    <p className="text-neutral-content">or Drop here</p>
                  </div>

                  <div className={`${logos?.length > 0 && "mt-4"} `}>
                    {logos?.map((img, index) => (
                      <div key={index} className="image-item relative">
                        <img src={img["data_url"]} alt="" className="w-40" />
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

        <div className="flex justify-end mt-6 border-t p-4">
          <button onClick={handleAddClient} className="gradient-primary-btn">
            Add Client
          </button>
        </div>
      </div>
    </section>
  );
}
