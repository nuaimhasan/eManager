import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  useGetServiceSectionsQuery,
  useUpdateServiceSectionByIdMutation,
} from "../../../redux/api/serviceSectionApi";

export default function ServiceSection() {
  const { data, isLoading } = useGetServiceSectionsQuery();
  const [updateServiceSectionById] = useUpdateServiceSectionByIdMutation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data?.data && !isLoading) {
      setTitle(data?.data[0]?.title);
      setDescription(data?.data[0]?.description);
    }
  }, [data, isLoading]);

  if (isLoading) return <h1>Loading...</h1>;

  const updateServiceSectionHandler = async (e) => {
    e.preventDefault();

    const id = data?.data[0]?._id;

    const body = {
      title,
      description,
    };

    try {
      const res = await updateServiceSectionById({ id, body }).unwrap();
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "",
          text: "Service Section Updated Successfully",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "",
        text: "Something went wrong",
      });
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Service Section Seting</h3>
      </div>

      <form className="flex flex-col gap-3 p-4 md:w-1/2">
        <div>
          <p className="mb-1">Title</p>
          <input
            type="text"
            name="title"
            required
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <p className="mb-1">Description</p>
          <textarea
            name="description"
            rows="3"
            required
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <button
            className="gradient-primary-btn"
            onClick={updateServiceSectionHandler}
          >
            Update
          </button>
        </div>
      </form>
    </section>
  );
}
