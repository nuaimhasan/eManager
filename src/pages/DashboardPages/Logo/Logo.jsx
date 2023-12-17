import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import Spinner from "../../../components/Spinner/Spinner";
import {
  useAddLogoMutation,
  useGetLogosQuery,
  useUpdateLogoByIdMutation,
} from "../../../redux/api/logoApi";

export default function Logo() {
  const { data, isLoading } = useGetLogosQuery();

  const [mainLogos, setMainLogos] = useState([]);
  const [updateLogoById, { isLoading: updateLogoByIdLoading }] =
    useUpdateLogoByIdMutation();
  const [addLogo, { isLoading: addLogoLoading }] = useAddLogoMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const id = data?.data[0]?._id;

  const handleUpdateMainLogo = async () => {
    let logo = mainLogos[0]?.file;

    if (!logo) {
      return Swal.fire("", "Logo is Recuired", "error");
    }

    const formData = new FormData();
    formData.append("logo", logo);

    if (id) {
      try {
        await updateLogoById({ id, formData }).unwrap();
        Swal.fire("", "Logo Updated Successfully", "success");
        setMainLogos([]);
      } catch (error) {
        Swal.fire("", `${error?.data?.error}`, "error");
      }
    } else {
      const res = await addLogo(formData).unwrap();
      if (res?.success) {
        setMainLogos([]);
        Swal.fire("", "Logo Added Successfully", "success");
      } else {
        Swal.fire("", `${res?.error?.data?.error}`, "error");
      }
    }
  };

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <h1 className="font-medium text-neutral">Logo Setting</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div className="bg-base-100 rounded shadow">
          <div>
            <p className="text-neutral-content border-b p-3">
              Logo <small>(160px/60px)</small>
            </p>
            <div className="p-4 sm:flex items-center gap-4">
              <ImageUploading
                defaultValue={mainLogos}
                onChange={(icn) => setMainLogos(icn)}
                dataURLKey="data_url"
              >
                {({ onImageUpload, onImageRemove, dragProps }) => (
                  <div
                    className="border rounded border-dashed p-4 w-max"
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

              {data?.data[0]?.logo && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/logo/${
                    data?.data[0]?.logo
                  }`}
                  alt=""
                  className="w-32 mt-4"
                />
              )}
            </div>
          </div>

          <div className="flex justify-end mt-6 border-t p-4">
            <button
              disabled={(updateLogoByIdLoading || addLogoLoading) && "disabled"}
              onClick={handleUpdateMainLogo}
              className="gradient-primary-btn"
            >
              {updateLogoByIdLoading || addLogoLoading
                ? "Loading..."
                : id
                ? "Update"
                : "Add"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
