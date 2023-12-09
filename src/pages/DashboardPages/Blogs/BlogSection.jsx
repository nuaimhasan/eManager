import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  useGetBlogSectionQuery,
  useUpdateBlogSectionByIdMutation,
} from "../../../redux/api/blogSectionApi";

export default function BlogSection() {
  const { data, isLoading } = useGetBlogSectionQuery();
  const [updateBlogSectionById] = useUpdateBlogSectionByIdMutation();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data && !isLoading) {
      setTitle(data.data[0].title);
      setSubtitle(data.data[0].subtitle);
      setDescription(data.data[0].description);
    }
  }, [data, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const updateBlogSectionHandler = async (e) => {
    e.preventDefault();

    const id = data?.data[0].id;

    const body = {
      title,
      subtitle,
      description,
    };

    try {
      const res = await updateBlogSectionById({
        id,
        body,
      }).unwrap();

      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Blog Section Updated Successfully",
        });
      }
    } catch (error) {
      // console.log(error);
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
        <h3 className="font-medium text-neutral">Blog Section Seting</h3>
      </div>

      <form className="flex flex-col gap-3 p-4 md:w-1/2">
        <div>
          <p className="mb-1">Title</p>
          <input
            type="text"
            name="title"
            defaultValue=""
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <p className="mb-1">Sub Title</p>
          <input
            type="text"
            name="subTitle"
            defaultValue=""
            required
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>

        <div>
          <p className="mb-1">Description</p>
          <textarea
            name="description"
            rows="3"
            defaultValue=""
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button
            onClick={updateBlogSectionHandler}
            className="gradient-primary-btn"
          >
            Update
          </button>
        </div>
      </form>
    </section>
  );
}
