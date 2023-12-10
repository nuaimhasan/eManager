import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteServiceByIdMutation,
  useGetAllServicesQuery,
} from "../../../redux/api/serviceApi";

export default function ServicesList() {
  const { data, isLoading } = useGetAllServicesQuery();
  const [deleteServiceById] = useDeleteServiceByIdMutation();

  if (isLoading) return <h1>Loading...</h1>;

  const services = data.data;

  const handleDelete = async (id) => {
    try {
      const res = await deleteServiceById(id).unwrap();

      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Service Deleted Successfully",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Services List</h1>
          <Link
            to="/admin/services/add-service"
            className="gradient-primary-btn"
          >
            Add New Service
          </Link>
        </div>
      </div>

      <div className="bg-base-100 rounded relative overflow-x-auto shadow mt-2">
        <table>
          <thead>
            <tr>
              <th>Sl</th>
              <th>Icon</th>
              <th>Title</th>
              <th>image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services?.map((service, index) => (
              <tr key={service._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://localhost:5000/service/icon/${service?.icon}`}
                    alt="icon"
                    className="w-10"
                  />
                </td>
                <td>{service.title}</td>
                <td>
                  <img
                    src={`http://localhost:5000/service/image/${service?.image}`}
                    alt="icon"
                    className="w-10"
                  />
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Link to={`/admin/services/edit/${service._id}`}>
                      <FaRegEdit className="text-[17px] hover:text-secondary" />
                    </Link>
                    <button onClick={() => handleDelete(service.id)}>
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
