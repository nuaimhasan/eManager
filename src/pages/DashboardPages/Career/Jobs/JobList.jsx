import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteJobMutation,
  useGetJobsQuery,
} from "../../../../redux/api/jobsApi";
import Spinner from "../../../../components/Spinner/Spinner";

export default function JobsList() {
  const { data, isLoading } = useGetJobsQuery();
  const [deleteJob] = useDeleteJobMutation();
  if (isLoading) return <Spinner />;

  const jobs = data?.data;

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("are you sure delete this?");
    if (isConfirm) {
      try {
        const res = await deleteJob(id).unwrap();
        if (res?.success) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "Delete success",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "",
          text: "Something went wrong!",
        });
      }
    }
  };

  return (
    <section>
      <div className="flex justify-between mb-2 bg-base-100 p-3 rounded shadow">
        <h1>Jobs List</h1>
        <Link to="/admin/jobs/add-job" className="gradient-primary-btn">
          Add New Job
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Publish Date</th>
              <th>Job Type</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((job, index) => (
              <tr key={job._id}>
                <td>{index + 1}</td>
                <td>{job.createdAt ? job.createdAt.split("T")[0] : ""}</td>

                <td>{job?.jobType}</td>

                <td>{job?.title}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Link to={`/admin/jobs/edit-job/${job._id}`}>
                      <FaRegEdit className="text-[17px] hover:text-primary" />
                    </Link>
                    <button onClick={() => handleDelete(job?._id)}>
                      <AiOutlineDelete className="text-lg hover:text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
