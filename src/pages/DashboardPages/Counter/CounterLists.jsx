import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

import swal from "sweetalert2";
import {
  useDeleteCounterMutation,
  useGetAllCounterQuery,
} from "../../../redux/api/CounterApi";

export default function CounterLists() {
  const { data, isLoading } = useGetAllCounterQuery();
  const [deleteCounter] = useDeleteCounterMutation();

  if (isLoading) return <div>Loading...</div>;
  const counters = data?.data;

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("are you sure delete this item?");
    if (isConfirm) {
      try {
        const res = await deleteCounter(id);
        if (res?.data?.success) {
          swal.fire({
            title: "",
            text: "Deleted Successfull",
            icon: "success",
          });
        }
      } catch (error) {
        swal.fire({
          title: "",
          text: "Something went wrong!",
          icon: "error",
        });
      }
    }
  };

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Counter Setting</h1>
          <Link to="/admin/counter/add-new" className="gradient-primary-btn">
            Add New
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
              <th className="w-1/2">Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {counters?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/counter/${
                      item?.icon
                    }`}
                    alt="icon"
                    className="w-10"
                  />
                </td>
                <td>{item?.title}</td>
                <td>{item?.description}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Link to={`/admin/counter/edit/${item._id}`}>
                      <FaRegEdit className="text-[17px] hover:text-primary" />
                    </Link>
                    <button onClick={() => handleDelete(item?._id)}>
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
