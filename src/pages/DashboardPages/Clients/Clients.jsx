import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteClientMutation,
  useGetClientsQuery,
} from "../../../redux/api/clientApi";

export default function Clients() {
  const { data, isLoading } = useGetClientsQuery();
  const [deleteClient] = useDeleteClientMutation();

  if (isLoading) return <div>Loading...</div>;

  const clients = data?.data;

  const deleteClientHandler = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this client?");
    if (isConfirm) {
      try {
        const res = await deleteClient(id).unwrap();
        if (res?.success) {
          Swal.fire({
            title: "Success!",
            text: "Client Deleted Successfully",
            icon: "success",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "",
          text: "Something went wrong",
          icon: "error",
        });
      }
    }
  };

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Clients Setting</h1>
          <Link to="/admin/clients/add-client" className="gradient-primary-btn">
            Add New Client
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto mt-2">
        <table>
          <thead>
            <tr>
              <th>Sl</th>
              <th>Logo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clients?.map((client, index) => (
              <tr key={client?._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/clients/${
                      client?.image
                    }`}
                    alt={client?.logo}
                    className="w-20"
                  />
                </td>
                <td>
                  <button onClick={() => deleteClientHandler(client?._id)}>
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
