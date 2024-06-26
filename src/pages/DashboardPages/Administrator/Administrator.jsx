import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  useDeleteAdminMutation,
  useGetAdminsQuery,
} from "../../../redux/api/administratorApi";
import Swal from "sweetalert2";
import Spinner from "../../../components/Spinner/Spinner";
import { useSelector } from "react-redux";

export default function Administrator() {
  const { loggedUser } = useSelector((state) => state.user);
  const { data, isLoading } = useGetAdminsQuery();
  const [deleteAdmin] = useDeleteAdminMutation();
  if (isLoading) {
    return <Spinner />;
  }
  const admins = data?.data;

  console.log(loggedUser);

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("are you sure delete this admin?");
    if (isConfirm) {
      try {
        const res = await deleteAdmin(id).unwrap();
        if (res?.success) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "Deleted success",
          });
        }

        if (loggedUser?.data?._id === id) {
          localStorage.removeItem("eManager_jwt");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "",
          text: error?.message,
        });
      }
    }
  };

  return (
    <section>
      <div className="flex justify-end mb-2">
        <Link
          to="/admin/administrator/add-administrator"
          className="gradient-primary-btn"
        >
          Add Administrator
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-lg">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>User name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins?.map((admin) => (
              <tr key={admin?.id}>
                <td>
                  <div className="flex items-center gap-2">{admin?.name}</div>
                </td>
                <td>{admin?.email}</td>
                <td>{admin?.phone}</td>
                <td>
                  <button onClick={() => handleDelete(admin?.id)}>
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
