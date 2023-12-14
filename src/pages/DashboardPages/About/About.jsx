import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import Spinner from "../../../components/Spinner/Spinner";
import {
  useCreateAboutUsMutation,
  useGetAboutUsQuery,
  useUpdateAboutUsMutation,
} from "../../../redux/api/aboutUsApi";

export default function About() {
  const editor = useRef(null);

  const { data, isLoading } = useGetAboutUsQuery();
  const [updateAboutUs, { isLoading: updateLoading }] =
    useUpdateAboutUsMutation();
  const [createAboutUs, { isLoading: createLoading }] =
    useCreateAboutUsMutation();

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

  // console.log(data?.data[0]);

  if (isLoading) return <Spinner />;

  const id = data?.data[0]?.id;
  // console.log(id);

  const updateAboutUsHandler = async (e) => {
    e.preventDefault();

    const img = image[0]?.file;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("tagline", tagline);
    formData.append("description", description);

    if (!profile || !img)
      return Swal.fire("", "Please upload profile and image", "error");

    if (profile) formData.append("profileDoc", profile);
    if (img) formData.append("image", img);

    if (id) {
      try {
        const res = await updateAboutUs({ id, formData }).unwrap();
        if (res?.success) {
          setImage([]);
          setProfile("");
          Swal.fire("", res.data?.message, "success");
        }
      } catch (error) {
        Swal.fire("", error?.data?.error, "error");
      }
    } else {
      try {
        const res = await createAboutUs(formData).unwrap();
        if (res?.success) {
          setImage([]);
          setProfile("");
          Swal.fire("", res.data?.message, "success");
        }
      } catch (error) {
        Swal.fire("", error?.data?.error, "error");
      }
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
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <p className="mb-1">Tagline</p>
              <input
                type="text"
                name="tagline"
                defaultValue={tagline}
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
                accept="application/pdf"
                onChange={(e) => setProfile(e.target.files[0])}
              />
            </div>

            <div>
              <div>
                <p className="mb-1">Image</p>
                <div>
                  <ImageUploading
                    defaultValue={image}
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

                  {data?.success && (
                    <img
                      src={`${import.meta.env.VITE_SERVER_IMG}/aboutus/image/${
                        data?.data[0]?.image
                      }`}
                      alt=""
                      className="w-32 mt-4"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 border rounded">
            <p className="border-b p-3">Description</p>

            <div className="p-4 about_details">
              <JoditEditor
                ref={editor}
                value={
                  data?.data[0]?.description?.length > 0
                    ? data?.data[0]?.description
                    : description
                }
                onBlur={(text) => setDescription(text)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            disabled={(updateLoading || createLoading) && "disabled"}
            className="gradient-primary-btn"
            onClick={updateAboutUsHandler}
          >
            {updateLoading || createLoading
              ? "Loading.."
              : id
              ? "Update About"
              : "Create About"}
          </button>
        </div>
      </form>
    </section>
  );
}

// {
//   "_id": {
//     "$oid": "6579363c248ffbc5cae7b1a7"
//   },
//   "title": "Empowering Efficiency, Unleashing Potential",
//   "tagline": "Empowering Digital Success with eManager",
//   "description": "<p>eManager is a leading digital solutions company, specializing in website and app development, software development, and total digital marketing strategies. We are committed to helping businesses establish a strong online presence and achieve their digital goals.</p><p>Our team of skilled professionals excels in creating visually appealing and user-friendly websites, as well as developing robust mobile applications. We leverage the latest technologies and industry best practices to deliver high-quality, customized solutions.</p><p>In addition to development services, our expertise extends to software solutions that streamline business operations and drive productivity. From CRM systems to enterprise applications, we provide tailored software solutions to meet specific business needs.</p><p>eManager's comprehensive digital marketing strategies encompass various aspects such as search engine optimization (SEO), social media marketing, content creation, and paid advertising. Our data-driven approach ensures increased brand visibility, audience engagement, and conversions.</p><p>At eManager, we prioritize client satisfaction through open communication, collaboration, and timely project delivery. Partner with us to harness the power of technology and elevate your business in the digital landscape. Let eManager be your trusted digital solutions partner for success.</p>",
//   "profileDoc": "1702446157603-emanagerbd-profile.pdf",
//   "image": "1702446013645-1702178307738-about2.png",
//   "updatedAt": {
//     "$date": "2023-12-13T05:42:37.875Z"
//   }
// }
