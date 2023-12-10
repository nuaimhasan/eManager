import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import {
  useGetAboutUsQuery,
  useUpdateAboutUsMutation,
} from "../../../redux/api/aboutUsApi";

export default function About() {
  const editor = useRef(null);

  const { data, isLoading } = useGetAboutUsQuery();
  const [updateAboutUs] = useUpdateAboutUsMutation();

  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    if (data && !isLoading) {
      const aboutUs = data.data[0];
      setTitle(aboutUs?.title);
      setTagline(aboutUs?.tagline);
      setDescription(aboutUs?.description);
    }
  }, [data, isLoading]);

  if (isLoading) return <div>Loading...</div>;

  const updateAboutUsHandler = async (e) => {
    e.preventDefault();

    const id = data?.data[0]?.id;

    const img = image[0]?.file;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("tagline", tagline);
    formData.append("description", description);
    if (profile) formData.append("profileDoc", profile);
    if (img) formData.append("image", img);

    try {
      const res = await updateAboutUs({ id, formData }).unwrap();

      if (res.success) {
        setProfile("");
        setImage([]);

        Swal.fire({
          icon: "success",
          title: "About Us Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
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
        <h3 className="font-medium text-neutral">About Info</h3>
      </div>

      <form className="p-4">
        <div className="text-neutral-content grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
          <div className="flex flex-col gap-3">
            <div>
              <p className="mb-1">Title</p>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <p className="mb-1">Tagline</p>
              <input
                type="text"
                name="title"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
              />
            </div>

            <div>
              <p className="mb-1">
                Profile - <small>(only pdf)</small>
              </p>
              <input
                type="file"
                name="profile"
                onChange={(e) => setProfile(e.target.files[0])}
              />
            </div>

            <div>
              <div>
                <p className="mb-1">Image</p>
                <div>
                  <ImageUploading
                    value={image}
                    onChange={(icn) => setImage(icn)}
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

                        <div className={`${image?.length > 0 && "mt-4"} `}>
                          {image?.map((img, index) => (
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
          </div>

          <div className="md:col-span-2 border rounded">
            <p className="border-b p-3">Description</p>

            <div className="p-4 about_details">
              <JoditEditor
                ref={editor}
                value={description}
                // value={
                //   data?.data?.description?.length > 0
                //     ? data?.data?.description
                //     : details
                // }
                onBlur={(text) => setDescription(text)}
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
          <button
            onClick={updateAboutUsHandler}
            className="gradient-primary-btn"
          >
            Save About
          </button>
        </div>
      </form>
    </section>
  );
}
