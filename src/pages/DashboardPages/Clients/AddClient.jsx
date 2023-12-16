import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import { useAddClientMutation } from "../../../redux/api/clientApi";
import { useNavigate } from "react-router-dom";

export default function AddClient() {
  const [logos, setLogos] = useState([]);
  const [order, setOrder] = useState(1);
  const navigate = useNavigate();

  const [addClient] = useAddClientMutation();

  const handleAddClient = async (e) => {
    e.preventDefault();

    let logo = logos[0]?.file;

    if (!logo) {
      return Swal.fire("", "Logo is Recuired", "error");
    }

    const formData = new FormData();
    formData.append("client", logo);
    formData.append("order", order);

    try {
      const res = await addClient(formData).unwrap();
      if (res?.success) {
        setOrder(1);
        setLogos([]);

        Swal.fire({
          title: "",
          text: "Client add success",
          icon: "success",
          confirmButtonText: "Ok",
        });

        navigate("/admin/clients/all-clients");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <h1 className="font-medium text-neutral">Add Client</h1>
      </div>

      <form className="mt-2 bg-base-100 rounded md:w-1/2">
        <div>
          <p className="text-neutral-content border-b p-3">Client Logo</p>
          <div className="p-4 sm:flex items-center gap-4">
            <ImageUploading
              defaultValue={logos}
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
        <div className="mt-4 px-4">
          <p className="mb-1">Order</p>
          <input
            type="number"
            name="order"
            defaultValue={order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </div>

        <div className="flex justify-end mt-6 border-t p-4">
          <button onClick={handleAddClient} className="gradient-primary-btn">
            Add Client
          </button>
        </div>
      </form>
    </section>
  );
}
