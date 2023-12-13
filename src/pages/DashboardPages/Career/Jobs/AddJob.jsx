import { useState } from "react";
import Swal from "sweetalert2";
import { useAddJobMutation } from "../../../../redux/api/jobsApi";

export default function AddJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobType, setJobType] = useState("");

  const [addJob] = useAddJobMutation();

  const addJobHandler = async (e) => {
    e.preventDefault();

    const body = {
      title,
      description,
      jobType,
    };

    try {
      const res = await addJob(body).unwrap();
      if (res.success) {
        setTitle("");
        setDescription("");
        setJobType("");

        Swal.fire({
          icon: "success",
          title: "Success",
          text: res.message,
        });
      }
    } catch (error) {
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
        <h3 className="font-medium text-neutral">Add New Job</h3>
      </div>

      <form className="flex flex-col gap-3 p-4 md:w-1/2">
        <div>
          <p className="mb-1">Title</p>
          <input
            type="text"
            name="title"
            defaultdefaultValue=""
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
            defaultdefaultValue=""
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
          <button className="gradient-primary-btn" onClick={addJobHandler}>
            Add Job
          </button>
        </div>
      </form>
    </section>
  );
}
