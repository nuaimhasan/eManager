import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

import swal from "sweetalert2";
import { useDeleteCounterMutation, useGetAllCounterQuery } from "../../../redux/api/CounterApi";

export default function CounterLists() {
  const { data, isLoading } = useGetAllCounterQuery();
  const [deleteCounter] = useDeleteCounterMutation();

  if (isLoading) return <div>Loading...</div>;
  const counters = data?.data;

  // console.log(chooseLists);
  const handleDelete = async (id) => {
    try {
      await deleteCounter(id);

      swal.fire({
        title: "Success!",
        text: "Deleted Successfully!",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      // console.log(error);
      swal.fire({
        title: "Error!",
        text: "Something went wrong!",
        icon: "error",
        confirmButtonText: "Ok",
      });
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
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`http://localhost:5000/counter/${item?.icon}`}
                    alt="icon"
                    className="w-10"
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Link to={`/admin/counter/edit/${item.id}`}>
                      <FaRegEdit className="text-[17px] hover:text-secondary" />
                    </Link>
                    <button onClick={() => handleDelete(item?.id)}>
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
