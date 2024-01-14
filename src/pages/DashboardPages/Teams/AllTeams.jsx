import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import {
  useDeleteTeamMutation,
  useGetAllteamsQuery,
} from "../../../redux/api/teamApi";
import Spinner from "../../../components/Spinner/Spinner";
import Swal from "sweetalert2";

export default function AllTeams() {
  const { data, isLoading } = useGetAllteamsQuery();
  const [deleteTeam] = useDeleteTeamMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const handleDeleteTeam = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this team member?");
    if (isConfirm) {
      try {
        const result = await deleteTeam(id);
        if (result?.data?.success)
          Swal.fire({
            title: "",
            text: "Deleted Successfully!",
            icon: "success",
          });
      } catch (error) {
        Swal.fire({
          title: "",
          text: "Something went wrong!",
          icon: "error",
        });
      }
    }
  };

  return (
    <section>
      <div className="flex justify-end mb-2">
        <Link to="/admin/teams/add-team" className="gradient-primary-btn">
          Add Team Member
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-lg">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Image</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((team, i) => (
              <tr key={team?._id}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/team/${
                      team?.image
                    }`}
                    alt=""
                    className="w-7 h-7 rounded-full"
                  />
                </td>
                <td>
                  <div className="flex items-center gap-2">{team?.name}</div>
                </td>
                <td>{team?.designation}</td>
                <td>{team?.order}</td>
                <td>
                  <div className="flex gap-1.5">
                    <Link to={`/admin/teams/edit-team/${team?._id}`}>
                      <FaUserEdit className="text-lg hover:text-secondary" />
                    </Link>
                    <button onClick={() => handleDeleteTeam(team?._id)}>
                      <AiOutlineDelete className="text-lg hover:text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {data?.data?.length <= 0 && (
              <tr>
                <td colSpan="5" className="text-center">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
