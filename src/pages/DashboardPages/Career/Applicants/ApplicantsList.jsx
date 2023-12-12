import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useDeleteJobApplyFormMutation, useGetJobApplyFormsQuery } from "../../../../redux/api/jobApplyFormApi";

export default function ApplicantsList() {
  const { data, isLoading } = useGetJobApplyFormsQuery();
  const [deleteJobApplyForm] = useDeleteJobApplyFormMutation();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const applicants = data?.data;
//   console.log(applicants);

  const handleDelete = async (id) => {
    try {
      const res = await deleteJobApplyForm(id).unwrap();
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Job apply form deleted successfully",
        });
      }
    } catch (error) {
      // console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error?.message}`,
      });
    }
  };

  return (
    <section>
      <div className="mb-2 bg-base-100 p-3 rounded shadow">
        <h1 className="font-medium text-neutral">Applicants List</h1>
      </div>
      <div className="relative overflow-x-auto shadow-lg">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Position</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants?.map((applicant) => (
              <tr key={applicant?.id}>
                <td>
                  <div className="flex items-center gap-2">
                    {applicant?.firstName} {applicant?.lastName}
                  </div>
                </td>
                <td>{applicant?.positionName}</td>
                <td>{applicant?.email}</td>
                <td>{applicant?.phone}</td>
                <td>
                  <button onClick={() => handleDelete(applicant?.id)}>
                    <AiOutlineDelete className="text-lg hover:text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
