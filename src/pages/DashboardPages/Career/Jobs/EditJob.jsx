import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useGetJobByIdQuery,
  useUpdateJobMutation,
} from "../../../../redux/api/jobsApi";

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobType, setJobType] = useState("");

  const { data, isLoading } = useGetJobByIdQuery(id);
  const [updateJob, { isLoading: updateLoading }] = useUpdateJobMutation();

  useEffect(() => {
    if (data?.data && !isLoading) {
      setTitle(data?.data.title);
      setDescription(data?.data.description);
      setJobType(data?.data.jobType);
    }
  }, [data?.data, isLoading]);

  const updateJobHandler = async (e) => {
    e.preventDefault();

    const body = {
      title,
      description,
      jobType,
    };

    try {
      const res = await updateJob({ id, body }).unwrap();
      if (res.success) {
        setTitle("");
        setDescription("");
        setJobType("");

        Swal.fire({
          icon: "success",
          title: "",
          text: "Update Success",
        });
        navigate("/admin/career/jobs");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Update Job</h3>
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
          <p className="mb-1">Job Type</p>
          <select
            name="jobType"
            required
            defaultValue={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option defaultValue="">Select job type</option>
            <option defaultValue="remote">Remote</option>
            <option defaultValue="onsite">Onsite</option>
            <option defaultValue="hybrid">Hybrid</option>
          </select>
        </div>

        <div>
          <button
            disabled={updateLoading && "disabled"}
            className="gradient-primary-btn"
            onClick={updateJobHandler}
          >
            {updateLoading ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </section>
  );
}
